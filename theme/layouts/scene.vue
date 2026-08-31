<!-- Scène — la slide n'existe que pour accueillir UN composant live, seul.
     Section 7 : le compteur qui meurt à zéro, puis le lecteur de chapitre.

     Pourquoi un layout et pas rien : ces deux slides vivaient en layout par
     défaut, donc avec le padding et la typo d'une slide d'argument, et se
     lisaient comme des slides inachevées. Ce sont au contraire les deux
     moments où l'écran doit être vide de tout sauf du dispositif.

     `plein` (frontmatter, booléen) : le composant prend toute la surface,
     sans padding — pour le lecteur de chapitre, qui a besoin de la hauteur
     entière pour défiler. Par défaut le composant est centré dans la marge
     du deck. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div
    class="slidev-layout scene pulp-bg"
    :class="{ 'scene--plein': $frontmatter.plein }"
  >
    <slot />
  </div>
</template>

<style scoped>
.scene {
  display: flex;
  align-items: center;
  justify-content: center;
  /* Rien d'autre : pas de titre, pas de chrome. Le silence est le sujet. */
}
.scene--plein {
  padding: 0;
  align-items: stretch;
}
.scene--plein :deep(> *) {
  width: 100%;
}
</style>
