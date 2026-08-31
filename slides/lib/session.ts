import { reactive } from 'vue'

// Store de session de génération — singleton réactif partagé (design D1).
// Un module ES importé plusieurs fois partage la même instance : suffisant
// pour un état inter-slides, sans Pinia. Le temps restant vit ICI (pas dans
// le composant Countdown) pour survivre au démontage/remontage entre slides.

export type GenStatus = 'idle' | 'generating' | 'tts' | 'ready' | 'error'

// Marqueurs posés PAR LE CODE du pipeline (jamais par le modèle : un marqueur
// placé par un LLM serait aléatoire). Ils bornent la section 7 :
//   début → BASCULE      : lu à voix haute par le speaker
//   BASCULE → FIN AUDIO  : pris par la voix clonée (c'est ce que couvre le WAV)
//   après FIN AUDIO      : hors périmètre de la présentation, jamais rendu
// Un chapitre distant qui ne porte pas LES DEUX est traité comme non prêt.
export const BASCULE = '<!-- BASCULE -->'
export const FIN_AUDIO = '<!-- FIN AUDIO -->'

export interface Chapter {
  text: string
  audioUrl: string | null
}

export interface Session {
  running: boolean
  startedAt: number | null
  status: GenStatus
  chapter: Chapter | null
  /** Secondes restantes au compte à rebours (source de vérité de l'affichage). */
  remaining: number
  /** Durée initiale du compte à rebours, en secondes. Sert à mesurer l'écoulé
   *  (`duration - remaining`) pour la fenêtre de relance après échec —
   *  monotone avec le ticker, sans horloge implicite. */
  duration: number
  /** Étape courante annoncée par la machine. `null` = rien à montrer
   *  (pré-lancement, flux jamais connecté, ou repli embarqué). */
  step: { label: string; detail?: string } | null
  /** Récit accumulé du dispositif. La machine ne renvoie que les 5 dernières
   *  notes à chaque instant : c'est ici qu'on garde l'historique complet. */
  notes: string[]
}

/** Borne d'affichage du récit — au-delà, les plus anciennes sortent. */
const NOTES_MAX = 30

export const session = reactive<Session>({
  running: false,
  startedAt: null,
  status: 'idle',
  chapter: null,
  remaining: 0,
  duration: 0,
  step: null,
  notes: [],
})

/** Secondes de compte à rebours écoulées depuis le lancement. */
export function elapsedSeconds(): number {
  return Math.max(0, session.duration - session.remaining)
}

/**
 * Démarre une session. Idempotent : sans effet si une session tourne déjà
 * (le latch d'idempotence du trigger s'appuie là-dessus).
 * @param durationSeconds durée initiale du compte à rebours.
 * @param nowMs instant de démarrage (injecté — pas de Date.now() implicite).
 */
export function start(durationSeconds: number, nowMs: number): void {
  if (session.running) return
  session.running = true
  session.startedAt = nowMs
  session.status = 'generating'
  session.chapter = null
  session.remaining = durationSeconds
  session.duration = durationSeconds
  session.step = null
  session.notes = []
}

/** Réinitialise la session (arrête tout, remet à idle). */
export function reset(): void {
  stopTicker()
  session.running = false
  session.startedAt = null
  session.status = 'idle'
  session.chapter = null
  session.remaining = 0
  session.duration = 0
  session.step = null
  session.notes = []
}

/** Applique un statut distant/mock. Peut livrer le chapitre quand `ready`. */
export function applyStatus(status: GenStatus, chapter: Chapter | null = null): void {
  session.status = status
  if (chapter) session.chapter = chapter
}

/** Étape courante. Une étiquette vide efface l'étape plutôt que d'afficher un
 *  blanc (la machine envoie `label: ""` au repos). */
export function setStep(label: string, detail?: string): void {
  session.step = label ? { label, detail: detail || undefined } : null
}

/**
 * Accumule le récit. La machine envoie une FENÊTRE glissante (les 5 dernières
 * notes) à chaque événement : on reçoit donc en boucle des notes déjà vues.
 *
 * Deux régimes, dans cet ordre :
 *
 * 1. RACCORD NORMAL — on cherche le plus long recouvrement entre la fin de
 *    l'historique et le début de la fenêtre reçue, et on n'ajoute que le reste.
 *    Deux fenêtres consécutives se chevauchent de 4 sur 5, donc c'est le cas
 *    courant. On ne déduplique PAS par ensemble ici : une note peut
 *    légitimement se répéter (« PLAN REFUSÉ » deux fois de suite est une
 *    information, pas un doublon), et le recouvrement préserve ces répétitions.
 *
 * 2. AUCUN RECOUVREMENT — soit on a perdu plus de cinq notes d'affilée, soit
 *    la fenêtre reçue est un rejeu (reconnexion partie de zéro, machine
 *    redémarrée, réponse de sondage arrivée en retard derrière un événement du
 *    flux). Impossible de distinguer les deux à partir de chaînes seules, donc
 *    on tranche par le risque : on n'ajoute que ce qui n'est nulle part dans
 *    l'historique. On perd au pire une répétition légitime après un trou de
 *    cinq notes ; on évite un récit qui se reboucle visiblement à l'écran, ce
 *    que la salle lirait comme un bug.
 */
export function pushNotes(incoming: string[]): void {
  if (!incoming.length) return
  const kept = session.notes
  const maxOverlap = Math.min(kept.length, incoming.length)
  for (let n = maxOverlap; n > 0; n--) {
    let matches = true
    for (let i = 0; i < n; i++) {
      if (kept[kept.length - n + i] !== incoming[i]) { matches = false; break }
    }
    if (matches) {
      session.notes = [...kept, ...incoming.slice(n)].slice(-NOTES_MAX)
      return
    }
  }
  const fresh = incoming.filter(n => !kept.includes(n))
  if (fresh.length) session.notes = [...kept, ...fresh].slice(-NOTES_MAX)
}

/** Décrémente le compte à rebours d'une seconde (borné à 0). Piloté par le tick. */
export function tick(): void {
  if (!session.running) return
  if (session.remaining > 0) session.remaining -= 1
}

// Ticker singleton : UN seul interval pour tout le deck. Les deux affichages
// (Countdown plein écran + global-bottom discret) lisent session.remaining ;
// aucun ne doit décompter lui-même (sinon double décrément). Idempotent.
let tickerId: ReturnType<typeof setInterval> | null = null

export function startTicker(): void {
  if (tickerId !== null) return
  tickerId = setInterval(tick, 1000)
}

export function stopTicker(): void {
  if (tickerId !== null) {
    clearInterval(tickerId)
    tickerId = null
  }
}
