<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { session, startTicker } from '../lib/session'

// Durée initiale (aperçue avant lancement) — même source que le trigger.
const minutes = Number(import.meta.env.VITE_COUNTDOWN_MINUTES ?? 35) || 35
const initialSeconds = minutes * 60

// Affichage : source de vérité = session.remaining (dans le store, survit
// au démontage entre slides). Avant lancement, on montre la durée pleine.
const displaySeconds = computed(() =>
  session.running ? session.remaining : initialSeconds,
)

const time = computed(() => {
  const s = Math.max(0, displaySeconds.value)
  const mm = String(Math.floor(s / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `${mm}:${ss}`
})

// Enrichissement (design D4) : le statut peut colorer l'affichage, il ne le
// pilote jamais. Le timer reste la source de vérité.
// NB : `running` requis — sinon `remaining === 0` à l'état idle (avant
// lancement) déclencherait à tort l'état « done ».
const done = computed(
  () => session.running && (session.status === 'ready' || session.remaining === 0),
)

const note = computed(() => {
  if (!session.running) return 'Prêt à lancer'
  if (session.status === 'ready') return 'Chapitre prêt — le temps a bien été tenu'
  if (session.remaining === 0) return 'Temps écoulé'
  return 'Génération en cours…'
})

onMounted(() => {
  // Défensif : si la slide est (re)montée alors qu'une session tourne,
  // s'assurer que le ticker unique tourne. Idempotent.
  if (session.running) startTicker()
})
</script>

<template>
  <div class="countdown" :class="{ 'is-done': done, 'is-idle': !session.running }">
    <div class="countdown__time">{{ time }}</div>
    <div class="countdown__note">{{ note }}</div>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}
.countdown__time {
  font-family: var(--font-title);
  font-size: 8rem;
  line-height: 1;
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
}
.countdown.is-idle .countdown__time { color: var(--color-muted); }
.countdown.is-done .countdown__time { color: var(--color-accent); }
.countdown__note {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--color-muted);
}
</style>
