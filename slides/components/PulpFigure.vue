<script setup lang="ts">
import { computed } from 'vue'

// PulpFigure — stratégie A (curation docs/visuels-pulp.md) : l'illustration
// est un OBJET papier crème posé sur le fond courant (ombre portée dure,
// léger tilt stable). Jamais en fond perdu, jamais inversée : l'image garde
// son crème natif ; la distinction avec le fond vient de l'ombre + du grain.
// La typo (légende) vit HORS de l'image, en Sinzano, sous l'objet.

const props = defineProps<{
  src: string
  caption?: string
  /** Override du tilt (deg). Sinon dérivé, stable, de `src`. */
  tilt?: number
}>()

// Tilt déterministe seedé sur `src` — stable au re-render (pas de random).
// Hash simple → angle dans [-1.5°, +1.5°].
function seededTilt(src: string): number {
  let h = 0
  for (let i = 0; i < src.length; i++) h = (h * 31 + src.charCodeAt(i)) | 0
  const unit = ((h % 1000) / 1000 + 1) % 1 // [0,1)
  return Number((unit * 3 - 1.5).toFixed(2)) // [-1.5, 1.5]
}

const angle = computed(() => props.tilt ?? seededTilt(props.src))
</script>

<template>
  <figure class="pulp-figure">
    <div class="pulp-figure__object" :style="{ transform: `rotate(${angle}deg)` }">
      <img class="pulp-figure__img" :src="src" alt="" />
    </div>
    <figcaption v-if="caption" class="pulp-figure__caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.pulp-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  margin: 0;
}
/* L'objet : mat crème fixe + ombre portée dure (adaptée au mode). */
.pulp-figure__object {
  background: var(--pulp-mat);
  padding: 0.5rem;
  box-shadow: var(--pulp-shadow);
  max-width: 100%;
}
.pulp-figure__img {
  display: block;
  max-width: 100%;
  /* En px = unités du canvas Slidev (980×551), fiables ; `vh` se résout à
     la fenêtre réelle (pas au canvas scalé) → débordait. Surchargeable. */
  max-height: 440px;
  width: auto;
  height: auto;
}
/* Légende hors image, en Sinzano. */
.pulp-figure__caption {
  font-family: var(--font-title);
  font-size: var(--text-lg);
  color: var(--color-muted);
  text-align: center;
}
</style>
