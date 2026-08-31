<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useNav } from '@slidev/client'
import { session } from './lib/session'
import { forceFallback } from './lib/genClient'

// Escape hatch opérateur : Ctrl+Alt+F force le repli embarqué, à tout moment.
// Le clavier est autorisé ICI et nulle part ailleurs — la règle « pas de
// raccourci » vise les actions scéniques ; ceci est un filet technique, invisible
// pour la salle. Posé sur le layer persistant : joignable depuis n'importe
// quelle slide, y compris si le composant de lecture n'est pas monté.
function onKeydown(e: KeyboardEvent) {
  if (e.ctrlKey && e.altKey && !e.shiftKey && e.code === 'KeyF') {
    e.preventDefault()
    forceFallback()
  }
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

// Rappel discret et persistant du compte à rebours (design D5).
//
// Gating SANS numéros de page : le pill s'affiche dès que la session tourne
// et se cache sur les slides qui le demandent (`noCountdown: true` en
// frontmatter). Conséquences voulues :
//   · sections 1-2 : la session n'a pas démarré → rien à afficher ;
//   · slide de lancement : porte le countdown en grand → s'exclut ;
//   · section 8 : après la récolte → s'exclut.
// Réécrire ou redimensionner une section ne peut plus casser l'affichage
// (les anciennes bornes 19→34 le faisaient à chaque fois).
const { currentSlideRoute } = useNav()

const optedOut = computed(
  () => currentSlideRoute.value?.meta?.slide?.frontmatter?.noCountdown === true,
)

const visible = computed(() => session.running && !optedOut.value)

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
    <!-- Étape courante : l'ÉTIQUETTE SEULE, jamais le detail ni les notes.
         Cette pilule est présente pendant les sections 4 à 6, c'est-à-dire
         pendant l'argumentation : un récit défilant y ferait concurrence au
         propos. Le compteur plein écran, lui, porte le feed complet. -->
    <span v-if="session.step" class="cd-corner__step">{{ session.step.label }}</span>
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
.cd-corner__step {
  padding-left: 0.55em;
  border-left: 1px solid var(--color-rule);
  color: var(--color-muted);
  font-variant-numeric: normal;
}
.cd-corner.is-done .cd-corner__dot { animation: none; }
.cd-corner.is-done .cd-corner__time { color: var(--color-accent); }
@keyframes cd-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
