<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { session } from './lib/session'

// Rappel discret et persistant du compte à rebours sur les sections 3→6
// (design D5). BORNES DÉRIVÉES DE LA TRAME (36 slides après intégration des
// scripts sections 1-3) :
//   S1 cold-open = 1–8 · S2 pivot = 9–14 · S3 allumage = 15–19
//   S4 seuil = 20–26 · S5 murs = 27–30 · S6 résolution = 31–34
//   S7 lecture = 35 · S8 clôture = 36
// La slide de lancement (18) porte le countdown PLEIN ÉCRAN → le rappel
// discret commence à 19 (slide du contrat) et court jusqu'à la fin de S6.
// ⚠ FRAGILE : si le nombre de beats change, réajuster ces bornes et
// revérifier au navigateur.
const DISCREET_FROM = 19
const DISCREET_TO = 34

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
