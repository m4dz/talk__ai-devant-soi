<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { session } from './lib/session'

// Rappel discret et persistant du compte à rebours sur les sections 3→6
// (design D5). BORNES DÉRIVÉES DE LA TRAME (jalon 2, 25 slides) :
//   S3 lancement = 8 · S4 seuil = 9–15 · S5 murs = 16–19 · S6 résolution = 20–23
// La slide de lancement (8) porte déjà le countdown PLEIN ÉCRAN → le rappel
// discret commence à 9. ⚠ FRAGILE : si le nombre de beats change, réajuster
// ces bornes et revérifier au navigateur.
const DISCREET_FROM = 9
const DISCREET_TO = 23

const { currentPage } = useNav()

const visible = computed(
  () =>
    session.running &&
    currentPage.value >= DISCREET_FROM &&
    currentPage.value <= DISCREET_TO,
)

const time = computed(() => {
  const s = Math.max(0, session.remaining)
  const mm = String(Math.floor(s / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `${mm}:${ss}`
})

const done = computed(() => session.status === 'ready' || session.remaining === 0)
</script>

<template>
  <div v-if="visible" class="cd-corner" :class="{ 'is-done': done }">
    <span class="cd-corner__dot" />
    <span class="cd-corner__time">{{ time }}</span>
  </div>
</template>

<style scoped>
.cd-corner {
  position: absolute;
  right: 1.2rem;
  bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.25em 0.7em;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-paper) 80%, transparent);
  border: 1px solid var(--color-rule);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
  z-index: 20;
}
.cd-corner__dot {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background: var(--color-accent);
  animation: cd-pulse 1.2s ease-in-out infinite;
}
.cd-corner.is-done .cd-corner__dot { animation: none; }
.cd-corner.is-done .cd-corner__time { color: var(--color-accent); }
@keyframes cd-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
