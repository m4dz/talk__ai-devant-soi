import { watch } from 'vue'
import {
  applyStatus,
  elapsedSeconds,
  pushNotes,
  session,
  setStep,
  BASCULE,
  FIN_AUDIO,
  type Chapter,
  type GenStatus,
} from './session'
import { timelineFor, type MockScenario } from './mockTimeline'

// Client de génération : generate / status / chapter / audio, plus un flux
// d'étapes SSE (`/events`) qui n'est qu'un enrichissement.
//
// Deux implémentations derrière la même signature :
//   · MOCK (défaut, VITE_MOCK≠0) — zéro réseau, progression et récit d'étapes
//     scriptés par timers, pour que la répétition montre l'écran du jour J ;
//   · RÉELLE (VITE_MOCK=0) — HTTP vers la machine de génération du réseau
//     local : sondage `/status` (source d'autorité de l'état), flux `/events`
//     (étape + récit), relance unique en fenêtre haute, et fallback silencieux
//     vers les assets embarqués.
//
// Règle qui gouverne tout ce fichier : le deck ne bloque jamais et n'affiche
// jamais d'erreur. Toute défaillance se résout en silence.

const USE_MOCK = import.meta.env.VITE_MOCK !== '0'
const GEN_HOST = String(import.meta.env.VITE_GEN_HOST ?? '').replace(/\/+$/, '')

// Timeouts / retries : `/status` et `/chapter` lisent un fichier ou un dict,
// jamais le modèle — ils répondent en millisecondes. 3 s est large.
const TIMEOUT_MS = 3000
const RETRIES = 2
const RETRY_DELAY_MS = 1000
const POLL_MS = 10_000

// Fenêtre de relance : un échec sous 3 minutes de décompte écoulé est presque
// toujours un échec de préflight (machine encore vierge, ~10 s) — donc
// récupérable. Au-delà, le cycle complet (~19 min mesuré : 17 de génération,
// ~1'50 de rendu clone) ne laisse plus de marge dans les 28.
const RETRY_WINDOW_S = 180
// Après une relance, la machine peut encore signaler `error` le temps de son
// préflight : on ignore l'état d'échec pendant quelques cycles de polling.
const RETRY_GRACE_POLLS = 3

// Échecs consécutifs du flux (sans le moindre événement reçu) au-delà desquels
// on renonce définitivement. `EventSource` retenterait sinon toutes les ~3 s
// pendant les 28 minutes du talk — ~560 requêtes vaines et autant d'erreurs en
// console. Le sondage fait le travail, étapes comprises.
const STREAM_MAX_FAILURES = 5

// Cadence du replay mock, sur une échelle courte et INDÉPENDANTE de la durée
// d'affichage du countdown (design D2) : on veut voir tout le flux
// generating → tts → ready en quelques secondes en répétition. Chaque snapshot
// de la timeline est joué à `(i+1) * MOCK_STEP_MS`.
const MOCK_STEP_MS = 1000

// Scénario mock rejoué (nominal | error | idle), défaut nominal.
const MOCK_SCENARIO = (import.meta.env.VITE_MOCK_SCENARIO ?? 'nominal') as MockScenario

// Fixtures embarquées (jalon 3B) — servies same-origin depuis public/.
const FIXTURE_TEXT_URL = '/fallback/chapitre.md'
const FIXTURE_AUDIO_URL = '/fallback/chapitre.wav'

let mockTimers: ReturnType<typeof setTimeout>[] = []
let pollId: ReturnType<typeof setInterval> | null = null
let stream: EventSource | null = null
// « Le flux vit » ≠ « un objet EventSource existe ». Un endpoint absent laisse un
// objet bien vivant qui retente indéfiniment sans jamais rien livrer : sans ce
// drapeau, le sondage ne reprendrait jamais la main sur l'enrichissement.
let streamAlive = false
let streamFailures = 0
let retryConsumed = false
let graceLeft = 0
let fallbackArmed = false
let harvesting = false
let blobUrl: string | null = null

function clearMockTimers(): void {
  mockTimers.forEach(clearTimeout)
  mockTimers = []
}

/** Charge le texte de la fixture (asset embarqué, same-origin, offline-safe). */
async function loadFallbackChapter(): Promise<Chapter> {
  let text = 'Chapitre (mock) indisponible.'
  try {
    const res = await fetch(FIXTURE_TEXT_URL)
    if (res.ok) text = await res.text()
  } catch {
    // Fixture illisible : on garde le texte de repli (le mock ne bloque jamais).
  }
  return { text, audioUrl: FIXTURE_AUDIO_URL }
}

/**
 * Mode mock : REJOUE la timeline réelle du contrat back (transcrite dans
 * `mockTimeline.ts`), à zéro réseau, sur horloge compressée. But : la
 * répétition hors ligne montre l'écran du jour J — mêmes labels, mêmes
 * détails, même progression de phase, même vocabulaire de récit.
 *
 * On passe par `applySnapshot(s, 'stream')` pour les états non terminaux :
 * c'est la VRAIE machine à états qui traite l'étape, le raccord de notes et la
 * transition de phase — pas un chemin parallèle. Cette branche ne touche jamais
 * le réseau (elle fait `setStep` + `pushNotes` + `applyStatus`).
 *
 * Les états terminaux sont traités à la main pour rester à zéro réseau :
 *   · `ready` → charge le chapitre EMBARQUÉ (jamais `/chapter` distant) ;
 *   · `error` → arme le repli directement (pas de `POST /generate` de relance,
 *     qui sortirait sur le réseau) — observable identique au réel : rien ne
 *     bouge à l'écran, le chapitre embarqué se pose à zéro du décompte.
 */
function mockGenerate(): void {
  clearMockTimers()
  const timeline = timelineFor(MOCK_SCENARIO)
  timeline.forEach((snap, i) => {
    mockTimers.push(
      setTimeout(async () => {
        if (snap.phase === 'ready') {
          const chapter = await loadFallbackChapter()
          applyStatus('ready', chapter)
        } else if (snap.phase === 'error') {
          if (snap.error) console.warn('[gen:mock] échec simulé :', snap.error)
          armFallback()
        } else {
          // generating | tts | idle : traités par la vraie machine à états.
          await applySnapshot(snap, 'stream')
        }
      }, (i + 1) * MOCK_STEP_MS),
    )
  })
}

// ---------------------------------------------------------------- réseau ---

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Appel HTTP avec timeout court et retries silencieux. Retourne `null` si
 * toutes les tentatives ont échoué (réseau coupé, CORS, timeout) — jamais
 * d'exception qui remonterait jusqu'à l'affichage.
 * Un statut HTTP non-2xx est rendu tel quel : c'est une réponse, pas une
 * panne de transport, et l'appelant décide.
 */
async function tryFetch(path: string, init?: RequestInit): Promise<Response | null> {
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
      return await fetch(`${GEN_HOST}${path}`, {
        ...init,
        signal: controller.signal,
        cache: 'no-store',
      })
    } catch {
      if (attempt < RETRIES) await sleep(RETRY_DELAY_MS)
    } finally {
      clearTimeout(timer)
    }
  }
  return null
}

/**
 * Le chapitre distant, ou `null` s'il n'est pas exploitable.
 * ATTENTION : `204` passe `res.ok` (tout 2xx le fait). Le tester AVANT, sinon
 * on rend une chaîne vide — un chapitre vide affiché au lieu d'un fallback.
 */
async function fetchChapterText(): Promise<string | null> {
  const res = await tryFetch('/chapter')
  if (!res || res.status === 204 || !res.ok) return null
  const text = await res.text().catch(() => '')
  return text.trim() ? text : null
}

/**
 * L'audio distant en blob URL, ou `null`.
 * On ne pose JAMAIS l'URL distante dans `<audio src>` : sur `204` l'élément
 * échoue dans le navigateur, silencieusement, sans qu'aucun code du deck le
 * voie — donc pas de son ET pas de bascule. Passer par fetch rend l'échec
 * visible au code, et met l'audio en mémoire avant la section 7.
 */
async function fetchAudioBlobUrl(): Promise<string | null> {
  const res = await tryFetch('/audio')
  if (!res || res.status === 204 || !res.ok) return null
  const blob = await res.blob().catch(() => null)
  if (!blob || blob.size === 0) return null
  revokeBlob()
  blobUrl = URL.createObjectURL(blob)
  return blobUrl
}

function revokeBlob(): void {
  if (blobUrl) {
    URL.revokeObjectURL(blobUrl)
    blobUrl = null
  }
}

/** Les deux marqueurs, dans l'ordre : critère de validité du chapitre distant. */
function hasMarkers(text: string): boolean {
  const bascule = text.indexOf(BASCULE)
  const fin = text.indexOf(FIN_AUDIO)
  return bascule !== -1 && fin > bascule
}

/**
 * Le couple (texte, audio) distant, ou `null`.
 * Le couple est ATOMIQUE : un texte distant lu par un audio de secours (ou
 * l'inverse) donnerait une voix qui ne dit pas ce qui est à l'écran — pire que
 * le repli complet. Si une seule pièce manque, on prend la paire embarquée.
 */
async function loadRemoteChapter(): Promise<Chapter | null> {
  const [text, audioUrl] = await Promise.all([fetchChapterText(), fetchAudioBlobUrl()])
  if (!text || !audioUrl || !hasMarkers(text)) {
    revokeBlob()
    return null
  }
  return { text, audioUrl }
}

// --------------------------------------------------------------- fallback ---

/**
 * Arme le repli sans le montrer. On NE bascule PAS en `ready` tout de suite :
 * un échec à la 2ᵉ minute ferait passer le compte à rebours en « Chapitre prêt »
 * pendant 26 minutes — anomalie visible depuis la salle. Le chapitre embarqué
 * se matérialise à zéro du compte à rebours, ou à l'entrée en section 7.
 */
function armFallback(): void {
  fallbackArmed = true
  stopPolling()
  closeStream()
  if (session.remaining === 0) void materializeFallback()
}

/**
 * Pose le chapitre de repli. `tryRemoteFirst` = dernière chance côté distant :
 * à zéro du compte à rebours, le chapitre peut très bien être là alors que le
 * statut n'a jamais été concluant (flux jamais connecté, sondage en échec,
 * mauvaise URL de `/status`). Une tentative, puis l'embarqué.
 * L'escape hatch opérateur, lui, ne tente rien : il veut l'embarqué tout de
 * suite, pas trois secondes d'attente réseau.
 */
async function materializeFallback(tryRemoteFirst = false): Promise<void> {
  if (session.status === 'ready') return
  fallbackArmed = false
  stopPolling()
  closeStream()
  if (tryRemoteFirst && !USE_MOCK) {
    const remote = await loadRemoteChapter()
    if (remote) {
      applyStatus('ready', remote)
      return
    }
  }
  revokeBlob()
  applyStatus('ready', await loadFallbackChapter())
}

// Filet de dernier ressort, à zéro du compte à rebours : quel que soit l'état,
// s'il n'y a pas de chapitre à cet instant, on pose l'embarqué. Le repli armé
// n'est PAS la seule voie d'échec — un `/status` durablement injoignable (404,
// mauvaise URL, service tombé) fait des cycles de polling ratés à l'infini, ce
// qui est volontairement traité comme « pas encore une défaillance ». Sans ce
// filet, la section 7 s'ouvrirait sur « le chapitre s'écrit… ».
watch(
  () => session.remaining,
  (remaining) => {
    if (remaining === 0 && session.running && session.status !== 'ready') {
      void materializeFallback(true)
    }
  },
)

/**
 * Appelé à l'ENTRÉE de la slide de lecture. On ne pose le repli que s'il est
 * armé, ou si le compte à rebours est à zéro : une visite anticipée de la
 * section 7 en répétition ne doit pas saboter une génération encore en cours.
 */
export function ensureChapter(): void {
  if (fallbackArmed || (session.running && session.remaining === 0)) {
    void materializeFallback(true)
  }
}

/**
 * Escape hatch opérateur — force le repli embarqué. Contrôle technique, pas
 * action scénique : le clavier est autorisé ici (cf. spec).
 */
export function forceFallback(): void {
  armFallback()
  void materializeFallback()
}

// ---------------------------------------------------------------- polling ---

function stopPolling(): void {
  if (pollId !== null) {
    clearInterval(pollId)
    pollId = null
  }
}

function startPolling(): void {
  if (pollId !== null) return
  pollId = setInterval(() => void pollOnce(), POLL_MS)
  void pollOnce()
}

async function pollOnce(): Promise<void> {
  const res = await tryFetch('/status')
  // Un cycle raté n'est PAS une défaillance : un trou réseau en milieu de talk
  // ne doit pas déclencher le repli. On continue à interroger.
  if (!res || !res.ok) return
  const data = await res.json().catch(() => null)
  if (data) await applySnapshot(data, 'poll')
}

// ------------------------------------------------------- flux d'étapes SSE ---

/**
 * Ouvre le flux d'étapes. ENRICHISSEMENT PUR : rien de ce qui suit n'est
 * nécessaire au déroulé. Le sondage `/status` reste la colonne vertébrale de
 * l'état (détection d'échec, règle de reprise, arrivée du chapitre) ; le flux
 * ne fait qu'apporter la même information plus vite, à la seconde, avec en plus
 * l'étape et le récit.
 *
 * L'EventSource vit DANS CE MODULE, jamais dans un composant : le compteur se
 * démonte à chaque changement de slide, un flux qu'il posséderait mourrait
 * avec lui à la première avance de la section 4.
 */
function openStream(): void {
  if (stream || typeof EventSource === 'undefined') return
  try {
    stream = new EventSource(`${GEN_HOST}/events`)
  } catch {
    // Constructeur en échec (URL invalide) : on s'en passe, muettement.
    stream = null
    return
  }
  stream.onmessage = (e: MessageEvent) => {
    streamAlive = true
    streamFailures = 0
    let data: unknown = null
    try {
      data = JSON.parse(e.data)
    } catch {
      return // événement illisible : ignoré, sans bruit
    }
    void applySnapshot(data as Snapshot, 'stream')
  }
  // Dégradation muette. `EventSource` retente seul (~3 s) : rien à signaler,
  // rien à afficher. On rend simplement la main au sondage pour l'enrichissement,
  // et on renonce au bout de quelques échecs stériles.
  stream.onerror = () => {
    streamAlive = false
    streamFailures += 1
    if (streamFailures >= STREAM_MAX_FAILURES) closeStream()
  }
}

function closeStream(): void {
  streamAlive = false
  if (stream) {
    stream.onmessage = null
    stream.onerror = null
    stream.close()
    stream = null
  }
}

export interface Snapshot {
  phase?: GenStatus
  label?: string
  detail?: string
  notes?: string[]
  error?: string
}

/**
 * Point d'entrée UNIQUE de l'état distant, quelle que soit sa provenance —
 * sondage `/status` ou événement du flux. Les deux sources portent le même
 * snapshot absolu, donc une seule machine à états : pas de divergence possible
 * entre « ce que dit le poll » et « ce que dit le flux ».
 */
async function applySnapshot(s: Snapshot, source: 'poll' | 'stream'): Promise<void> {
  const phase = s?.phase
  if (!phase) return

  // Étape et récit : purement décoratifs, appliqués avant tout aiguillage pour
  // qu'un snapshot terminal livre aussi sa dernière note.
  //
  // UNE SEULE SOURCE À LA FOIS pour l'enrichissement : le flux quand il vit, le
  // sondage seulement à défaut. Les deux sources portent des fenêtres de notes
  // prises à des instants différents ; les mêler brouille l'ordre du récit —
  // observé, une réponse de sondage réinjectait une fenêtre plus ancienne entre
  // deux événements du flux et le récit repartait en arrière à l'écran.
  // L'état, lui, reste accepté des deux sources : c'est le même snapshot absolu.
  if (source === 'stream' || !streamAlive) {
    if (typeof s.label === 'string') setStep(s.label, s.detail)
    if (Array.isArray(s.notes)) pushNotes(s.notes)
  }

  if (phase === 'error') {
    // Le champ `error` est un texte destiné à l'opérateur : console uniquement,
    // jamais le DOM.
    if (s.error) console.warn('[gen] échec machine :', s.error)
    if (graceLeft > 0) {
      graceLeft -= 1
      return
    }
    await handleError()
    return
  }

  if (graceLeft > 0) graceLeft -= 1

  // `idle` : avant tout lancement, et surtout APRÈS UNE ANNULATION opérateur
  // (`POST /cancel` côté machine). On ne le recopie pas dans le store — ça
  // remettrait l'affichage à l'état « pas encore lancé » en pleine scène,
  // bouton de lancement réactivé compris. On continue simplement à sonder :
  // le filet de zéro posera le chapitre embarqué le moment venu.
  if (phase === 'idle') return

  if (phase === 'generating' || phase === 'tts') {
    applyStatus(phase)
    return
  }

  if (phase === 'ready') {
    // Verrou : le flux émet ~1 événement/s et le sondage tourne en parallèle ;
    // sans ça, `ready` déclencherait plusieurs récupérations concurrentes du
    // chapitre et autant de blobs audio.
    if (harvesting || session.status === 'ready') return
    harvesting = true
    stopPolling()
    closeStream()
    const remote = await loadRemoteChapter()
    if (remote) applyStatus('ready', remote)
    else armFallback()
    harvesting = false
  }
}

/**
 * Échec de génération. Une seule reprise, et seulement en fenêtre haute.
 * La relance NE passe PAS par `session.start()` (latché sur `running`) :
 * `session.running` doit rester vrai de bout en bout, sinon le bouton
 * d'amorçage redeviendrait actionnable en pleine section 4. Le compte à
 * rebours n'est jamais réinitialisé.
 */
async function handleError(): Promise<void> {
  if (!retryConsumed && elapsedSeconds() < RETRY_WINDOW_S) {
    retryConsumed = true
    graceLeft = RETRY_GRACE_POLLS
    const res = await tryFetch('/generate', { method: 'POST' })
    if (res && res.ok) {
      applyStatus('generating')
      // Indispensable quand c'est le TOUT PREMIER POST qui a échoué : le
      // polling n'a alors jamais démarré, et sans ça la reprise réussirait
      // dans le vide (aucun statut lu, aucun repli armé, lecteur figé sur
      // « le chapitre s'écrit… »). Idempotent dans tous les autres cas.
      startPolling()
      // Le flux, lui, a bel et bien été fermé : la machine coupe la connexion
      // après son événement terminal `error`. Sans réouverture, la reprise
      // tournerait sans étapes à l'écran.
      openStream()
      return
    }
  }
  armFallback()
}

// ------------------------------------------------------------ API publique ---

/** Déclenche la génération. Mock : progression par timers. Réel : POST + polling. */
export async function generate(): Promise<void> {
  if (USE_MOCK) {
    mockGenerate()
    return
  }
  retryConsumed = false
  graceLeft = 0
  fallbackArmed = false
  streamFailures = 0
  const res = await tryFetch('/generate', { method: 'POST' })
  // Le corps (`{accepted, started, state}`) est indicatif : un 202 dit la même
  // chose que la génération démarre ou tourne déjà. Seul l'échec compte ici —
  // il passe par la même règle de reprise que `phase: error`.
  if (!res || !res.ok) {
    await handleError()
    return
  }
  startPolling()
  openStream()
}

/** Statut courant de la génération. */
export async function status(): Promise<GenStatus> {
  return session.status
}

/** Chapitre produit (null tant que non prêt). */
export async function chapter(): Promise<Chapter | null> {
  return session.chapter
}

/** URL de l'audio du chapitre (null tant que non prêt). */
export async function audio(): Promise<string | null> {
  return session.chapter?.audioUrl ?? null
}

/** Nettoyage (appelé sur reset de session) : timers, polling, blob. */
export function stop(): void {
  clearMockTimers()
  stopPolling()
  closeStream()
  revokeBlob()
  harvesting = false
  streamFailures = 0
  retryConsumed = false
  graceLeft = 0
  fallbackArmed = false
}
