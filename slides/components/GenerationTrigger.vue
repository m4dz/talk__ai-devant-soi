<script setup lang="ts">
import { computed, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import { session, start, startTicker } from '../lib/session'
import { generate } from '../lib/genClient'

// Déclenchement à la télécommande : un pas de clic Slidev (le « next »)
// lance la génération, comme le clic souris. Idempotent via le latch.
const { $clicks } = useSlideContext()
watch(
  () => $clicks.value,
  (c) => {
    if (c >= 1) onTrigger()
  },
)

// Durée du countdown (partagée avec Countdown.vue) — VITE_COUNTDOWN_MINUTES,
// défaut 35. Le trigger la pose dans le store au lancement.
const minutes = Number(import.meta.env.VITE_COUNTDOWN_MINUTES ?? 35) || 35
const durationSeconds = minutes * 60

const statusLabel: Record<string, string> = {
  idle: '',
  generating: 'Génération en cours…',
  tts: 'Synthèse vocale…',
  ready: 'Chapitre prêt',
  error: 'Erreur',
}

const label = computed(() =>
  session.running ? statusLabel[session.status] || 'En cours…' : 'Lancer la génération',
)

async function onTrigger() {
  // Idempotent : latch sur session.running. Un second clic est sans effet.
  if (session.running) return
  // Feedback immédiat : l'état visuel dépend du store, posé AVANT tout await.
  start(durationSeconds, Date.now())
  startTicker()
  await generate()
}
</script>

<template>
  <button
    class="gen-trigger"
    :class="{ 'is-running': session.running }"
    :disabled="session.running"
    @click="onTrigger"
  >
    <span class="gen-trigger__dot" />
    {{ label }}
  </button>
</template>

<style scoped>
.gen-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.75em;
  padding: 0.7em 1.4em;
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--color-paper);
  background: var(--color-accent);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.gen-trigger:hover { opacity: 0.9; }
.gen-trigger.is-running {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  cursor: default;
}
.gen-trigger__dot {
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  background: currentColor;
}
.gen-trigger.is-running .gen-trigger__dot {
  animation: pulse 1.2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
