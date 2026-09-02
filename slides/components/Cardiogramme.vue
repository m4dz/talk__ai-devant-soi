<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSlideContext, onSlideEnter, onSlideLeave } from '@slidev/client'

// Cardiogramme — la slide d'attente, première du deck. Elle tourne pendant que
// la salle s'installe et couvre l'entrée du speaker. Le talk ouvre sur la mort
// de Gary : au premier pas de clic, le battement cesse et la ligne s'aplatit.
//
// Pourquoi un tracé et pas un asset généré (docs/visuels-pulp.md §0) : Flux ne
// trace pas une ligne fine exacte sur du noir, l'objet n'appartient pas au
// génome pulp, et les tokens donnent les deux modes sans second fichier.

// Arrêt du battement = pas de clic Slidev, JAMAIS un raccourci clavier ni un
// minutage (règle projet). La slide déclare `clicks: 1` en frontmatter.
const { $clicks } = useSlideContext()
const mort = computed(() => ($clicks?.value ?? 0) >= 1)

// Slidev monte TOUTES les slides au chargement du deck : une animation infinie
// posée au montage tournerait pendant les cinquante minutes du talk, invisible
// et coûteuse. Elle n'est armée que sur la slide active.
const actif = ref(false)
onSlideEnter(() => (actif.value = true))
onSlideLeave(() => (actif.value = false))

// Une tuile de 1920 unités, plate à y=720 (le tiers inférieur du cadre 16:9),
// dupliquée deux fois pour un défilement sans couture. Le raccord tombe sur du
// plat : il est invisible.
//
// Le tracé est coupé en deux couleurs — le plat en encre, le seul battement en
// accent. Un unique élément rouge, comme dans toute la série : ici il désigne
// la seule vie de l'image, et c'est lui qui s'arrête.
const PLAT_GAUCHE = 'M0 720 H860'
const BATTEMENT =
  'M860 720 l25 -18 l25 18 H930 l12 30 l22 -230 l20 250 l14 -50 H1080 l35 -30 l35 30'
const PLAT_DROITE = 'M1150 720 H1920'
const PLAT_ENTIER = 'M0 720 H1920'
</script>

<template>
  <div
    class="cardio"
    :class="{ 'cardio--actif': actif, 'cardio--mort': mort }"
  >
    <svg
      class="cardio__svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <!-- Trame halftone du TRACÉ (le fond porte déjà la sienne via
             .pulp-bg). Masque tuilé, pas de mix-blend-mode : un mode de
             fusion sur une surface de slide est une bombe de compositing
             (cf. theme/styles/pulp.css). Ici la surface masquée est un trait
             fin — le coût est négligeable. -->
        <!-- Pas de trame volontairement plus fin que l'épaisseur du trait
             (5 unités) : à 2-3 points dans la largeur, le trait se lit comme
             imprimé et non comme rongé. -->
        <pattern
          id="cardio-trame"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <rect width="5" height="5" fill="#ffffff" />
          <circle cx="2.5" cy="2.5" r="1.4" fill="#9a9a9a" />
        </pattern>
        <mask id="cardio-masque">
          <rect width="1920" height="1080" fill="url(#cardio-trame)" />
        </mask>
      </defs>

      <g mask="url(#cardio-masque)">
        <!-- Ce qui reste après l'arrêt : la ligne plate, seule. -->
        <path class="cardio__plat" :d="PLAT_ENTIER" />

        <!-- Le tracé vivant : deux tuiles, défilement continu. -->
        <g class="cardio__defile">
          <g v-for="decalage in [0, 1920]" :key="decalage" :transform="`translate(${decalage} 0)`">
            <path class="cardio__ligne" :d="PLAT_GAUCHE" />
            <path class="cardio__battement" :d="BATTEMENT" />
            <path class="cardio__ligne" :d="PLAT_DROITE" />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
/* Dimensions en unités de canvas (px / ratio), jamais en vh : `vh` se résout
   à la fenêtre réelle, pas au canvas Slidev scalé.
   PAS de `background` ici : le layout `scene` porte `.pulp-bg`, dont la trame
   halftone et le grain papier vivent en `z-index: -2` / `-1`. Un fond opaque
   sur le composant les masquerait — le fond vient du mode courant, pas d'ici. */
.cardio {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: transparent;
}
.cardio__svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* Tokens uniquement : les deux modes sortent d'ici, sans second fichier ni
   fond codé en dur. */
.cardio__ligne,
.cardio__plat {
  fill: none;
  stroke: var(--color-ink);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.cardio__battement {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Tant que le cœur bat, la ligne plate de fond reste masquée : sinon elle
   traverserait l'excursion du battement. */
.cardio__plat {
  opacity: 0;
  transition: opacity 600ms ease-out;
}
.cardio__defile {
  transition: opacity 600ms ease-out;
}

/* Défilement : translation composée GPU, pas d'animation de géométrie.
   Deux tuiles de 1920 → une translation de -1920 boucle sans couture. */
@keyframes cardio-defile {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-1920px);
  }
}
/* L'animation n'existe QUE sur la slide active (cf. onSlideEnter). */
.cardio--actif .cardio__defile {
  animation: cardio-defile 9s linear infinite;
}

/* Le pas de clic : le battement cesse, la ligne s'aplatit. */
.cardio--mort .cardio__defile {
  animation-play-state: paused;
  opacity: 0;
}
.cardio--mort .cardio__plat {
  opacity: 1;
}

/* Sans mouvement : le tracé reste, avec son battement, immobile. */
@media (prefers-reduced-motion: reduce) {
  .cardio--actif .cardio__defile {
    animation: none;
  }
  .cardio__defile,
  .cardio__plat {
    transition: none;
  }
}
</style>
