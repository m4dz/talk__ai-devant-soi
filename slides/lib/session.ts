import { reactive } from 'vue'

// Store de session de génération — singleton réactif partagé (design D1).
// Un module ES importé plusieurs fois partage la même instance : suffisant
// pour un état inter-slides, sans Pinia. Le temps restant vit ICI (pas dans
// le composant Countdown) pour survivre au démontage/remontage entre slides.

export type GenStatus = 'idle' | 'generating' | 'tts' | 'ready' | 'error'

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
}

export const session = reactive<Session>({
  running: false,
  startedAt: null,
  status: 'idle',
  chapter: null,
  remaining: 0,
})

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
}

/** Réinitialise la session (arrête tout, remet à idle). */
export function reset(): void {
  stopTicker()
  session.running = false
  session.startedAt = null
  session.status = 'idle'
  session.chapter = null
  session.remaining = 0
}

/** Applique un statut distant/mock. Peut livrer le chapitre quand `ready`. */
export function applyStatus(status: GenStatus, chapter: Chapter | null = null): void {
  session.status = status
  if (chapter) session.chapter = chapter
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
