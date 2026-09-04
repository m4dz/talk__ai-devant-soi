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

// Oscilloscope, pas convoyeur : le tracé ne défile PAS. Il reste fixe et un
// faisceau lumineux le parcourt de gauche à droite, laissant derrière lui une
// traîne de phosphore qui s'éteint — la rémanence de l'écran cathodique.
//
// Un seul chemin continu, plat à y=720 (le tiers inférieur du cadre 16:9), avec
// l'unique battement en son milieu. Le battement se referme exactement à
// x=1150,y720, donc le plat de droite enchaîne sans rupture : le faisceau glisse
// d'un bout à l'autre sans saut.
// Le tracé DÉBORDE le cadre (x=-260 → x=2180, viewBox 0→1920) : le spot entre
// par la gauche hors champ et sort par la droite hors champ. Le retour de
// balayage (fin → début) se produit donc entièrement hors du cadre, découpé
// par le viewport SVG — aucun saut visible, aucun fondu nécessaire.
const FULL =
  'M-260 720 H860 l25 -18 l25 18 H930 l12 30 l22 -230 l20 250 l14 -50 H1080 l35 -30 l35 30 H2180'
const PLAT_ENTIER = 'M-260 720 H2180'

// Au pas de clic, le cœur s'arrête : le faisceau CONTINUE de balayer, mais sur
// une ligne plate — la géométrie perd son battement. Pas de gel, pas de
// disparition : l'oscilloscope tourne toujours, il n'écrit plus qu'un plat.
const chemin = computed(() => (mort.value ? PLAT_ENTIER : FULL))
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
        <!-- PAS de trame halftone sur le tracé : un faisceau d'oscilloscope
             rayonne, il ne s'imprime pas. La trame le rongerait et combattrait
             le halo. Le fond porte déjà la sienne (.pulp-bg). Bonus : le masque
             tuilé masquait le faisceau sur une ligne PLATE (après le clic) —
             son retrait règle aussi ce défaut. -->

        <!-- Halo de phosphore : le faisceau et le curseur rayonnent. Flou
             gaussien fusionné sous la source nette. Coût borné — appliqué à un
             trait fin et à un point, pas à une surface pleine.
             filterUnits=userSpaceOnUse OBLIGATOIRE : la région par défaut
             (objectBoundingBox) d'une LIGNE PLATE a une hauteur nulle → filtre
             dégénéré → l'élément ne peint rien. Après le clic le tracé devient
             plat : sans région fixe, le faisceau disparaîtrait. On fixe donc la
             région en coordonnées canvas, débordement compris. -->
        <filter
          id="cardio-halo"
          filterUnits="userSpaceOnUse"
          x="-300"
          y="0"
          width="2520"
          height="1080"
        >
          <feGaussianBlur stdDeviation="6" result="flou" />
          <feMerge>
            <feMergeNode in="flou" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Rien de persistant : AUCUN tracé fantôme. Le faisceau écrit la
           courbe en la traversant, la traîne s'éteint derrière — l'écran est
           vide devant le curseur et redevient vide derrière lui.
           Le faisceau : une comète brillante qui parcourt le tracé courant.
           La traîne (dasharray) court en longueur d'arc, synchronisée au
           curseur. pathLength=1000 normalise, quelle que soit la géométrie. -->
      <path
        class="cardio__faisceau"
        :d="chemin"
        pathLength="1000"
        filter="url(#cardio-halo)"
      />

      <!-- Le curseur lumineux, en tête du faisceau, chevauchant la courbe :
           il grimpe et retombe dans le battement — le geste d'oscilloscope.
           C'est un SECOND tiret sur LE MÊME tracé : un point (dash quasi nul +
           bout rond) qui roule sur la géométrie. Faisceau et curseur partagent
           donc le MÊME moteur de longueur (pathLength=1000) — ils restent
           synchronisés sur n'importe quelle courbe, plate ou battante, là où
           offset-path dérivait d'un moteur à l'autre. -->
      <path
        class="cardio__curseur"
        :d="chemin"
        pathLength="1000"
        filter="url(#cardio-halo)"
      />
    </svg>
  </div>
</template>

<style scoped>
/* Dimensions en unités de canvas (px / ratio), jamais en vh : `vh` se résout
   à la fenêtre réelle, pas au canvas Slidev scalé.
   PAS de `background` ici : le layout `scene` porte `.pulp-bg`, dont la trame
   halftone et le grain papier vivent en `z-index: -2` / `-1`. */
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

/* Tokens uniquement : les deux modes sortent d'ici, sans second fichier. */
.cardio__faisceau,
.cardio__curseur {
  fill: none;
  stroke: var(--color-accent);
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Le faisceau : accent vif, réduit à une courte traîne par le dasharray.
   pathLength=1000 → traîne de 120/1000. Le vide (1080) est ≥ pathLength : au
   plus UNE traîne visible à la fois, jamais de doublon au raccord. */
.cardio__faisceau {
  stroke-width: 5;
  stroke-dasharray: 120 1080;
  stroke-dashoffset: 120;
}

/* Le curseur : un tiret quasi nul (0,1/1000) à bout rond = un point. Sur le
   même tracé, même pathLength → parfaitement calé sur la tête de la traîne. */
.cardio__curseur {
  stroke-width: 16;
  stroke-dasharray: 0.1 10000;
  stroke-dashoffset: 0;
}

/* Balayage. Longueur d'arc constante → vitesse constante le long du fil : le
   curseur ralentit en x et grimpe dans le pic. Le tracé débordant, les deux
   extrêmes (s=0 et s=1000) tombent hors cadre : le retour se fait hors champ,
   sans fondu ni saut visible. Tête de traîne (dashoffset 120→-880) et curseur
   (dashoffset 0→-1000) parcourent tous deux s=0→1000, synchronisés. */
@keyframes cardio-faisceau {
  from { stroke-dashoffset: 120; }
  to   { stroke-dashoffset: -880; }
}
@keyframes cardio-curseur {
  from { stroke-dashoffset: 0; }
  to   { stroke-dashoffset: -1000; }
}

/* L'animation n'existe QUE sur la slide active (cf. onSlideEnter). Elle tourne
   AUSSI après le clic : le faisceau continue, seule la géométrie s'aplatit. */
.cardio--actif .cardio__faisceau {
  animation: cardio-faisceau 4s linear infinite;
}
.cardio--actif .cardio__curseur {
  animation: cardio-curseur 4s linear infinite;
}

/* Sans mouvement : la traîne et son curseur figés au milieu du cadre. */
@media (prefers-reduced-motion: reduce) {
  .cardio--actif .cardio__faisceau {
    animation: none;
    stroke-dashoffset: -380;
  }
  .cardio--actif .cardio__curseur {
    animation: none;
    stroke-dashoffset: -500;
  }
}
</style>
