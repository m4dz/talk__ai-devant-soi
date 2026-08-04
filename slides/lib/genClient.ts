import { applyStatus, session, type Chapter, type GenStatus } from './session'

// Client de génération derrière un contrat à 4 opérations (design D2,
// « À trancher » #2) : generate / status / chapter / audio.
// Ce jalon (3A) ne fournit que l'implémentation MOCK — zéro réseau. Le
// client réel (fetch + polling + fallback silencieux) est le jalon 4 :
// même signature, les composants ne changeront pas.

// Mock = chemin par défaut du jalon 3 (le réel n'existe pas encore).
// VITE_MOCK=0 permettra, au jalon 4, de basculer vers le client réel.
const USE_MOCK = import.meta.env.VITE_MOCK !== '0'

// Progression mock du statut, sur une échelle courte et INDÉPENDANTE de la
// durée d'affichage du countdown (design D2) : on veut voir tout le flux
// generating → tts → ready en quelques secondes en répétition.
const MOCK_TTS_DELAY_MS = 4000
const MOCK_READY_DELAY_MS = 8000

// Fixtures embarquées (jalon 3B) — servies same-origin depuis public/.
const FIXTURE_TEXT_URL = '/fallback/chapitre.md'
const FIXTURE_AUDIO_URL = '/fallback/chapitre.wav'

let mockTimers: ReturnType<typeof setTimeout>[] = []

function clearMockTimers(): void {
  mockTimers.forEach(clearTimeout)
  mockTimers = []
}

/** Charge le texte de la fixture (asset embarqué, same-origin, offline-safe). */
async function loadMockChapter(): Promise<Chapter> {
  let text = 'Chapitre (mock) indisponible.'
  try {
    const res = await fetch(FIXTURE_TEXT_URL)
    if (res.ok) text = await res.text()
  } catch {
    // Fixture illisible : on garde le texte de repli (le mock ne bloque jamais).
  }
  return { text, audioUrl: FIXTURE_AUDIO_URL }
}

function mockGenerate(): void {
  clearMockTimers()
  // generating (déjà posé par session.start) → tts → ready (avec fixtures)
  mockTimers.push(setTimeout(() => applyStatus('tts'), MOCK_TTS_DELAY_MS))
  mockTimers.push(
    setTimeout(async () => {
      const chapter = await loadMockChapter()
      applyStatus('ready', chapter)
    }, MOCK_READY_DELAY_MS),
  )
}

/** Déclenche la génération. Mock : lance la progression de statut par timer. */
export async function generate(): Promise<void> {
  if (USE_MOCK) {
    mockGenerate()
    return
  }
  // Jalon 4 : POST {VITE_GEN_HOST}/generate + démarrage du polling.
  throw new Error('genClient réel non implémenté (jalon 4)')
}

/** Statut courant de la génération. */
export async function status(): Promise<GenStatus> {
  if (USE_MOCK) return session.status
  throw new Error('genClient réel non implémenté (jalon 4)')
}

/** Chapitre produit (null tant que non prêt). */
export async function chapter(): Promise<Chapter | null> {
  if (USE_MOCK) return session.chapter
  throw new Error('genClient réel non implémenté (jalon 4)')
}

/** URL de l'audio du chapitre (null tant que non prêt). */
export async function audio(): Promise<string | null> {
  if (USE_MOCK) return session.chapter?.audioUrl ?? null
  throw new Error('genClient réel non implémenté (jalon 4)')
}

/** Nettoyage des timers mock (appelé sur reset de session). */
export function stop(): void {
  clearMockTimers()
}
