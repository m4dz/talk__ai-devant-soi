<!-- Ambiance en fond perdu — motifs récit plein cadre.
     Source mode-swap : `light` (crème canonique) / `dark` (négatif B ou
     variante calée). Voir docs/visuels-pulp.md §6-7.

     Deux placements du texte (`variant` en frontmatter) :

     bande    (défaut) bandeau papier en bas, pleine largeur. Dimensionné
              pour trois lignes de récit — c'est le cold open.
     colonne  colonne de texte dans le TIERS GAUCHE. C'est la place que le
              prompt `2a-wide` réserve explicitement (« the left third left
              as quiet aged cream space ») : sur ces tirages, le sujet
              occupe la moitié droite et la gauche est vide par
              construction. Pour les slides qui portent un titre et
              plusieurs blocs, là où le bandeau déborderait. -->
<script setup>
import { computed } from 'vue'
import { useSlideContext, useDarkMode } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const { isDark } = useDarkMode()

// Dérivation par mode : dark si fourni, sinon on retombe sur la source crème.
const src = computed(() =>
  isDark.value && $frontmatter.dark ? $frontmatter.dark : $frontmatter.light,
)
</script>

<template>
  <div
    class="slidev-layout ambiance"
    :class="`ambiance--${$frontmatter.variant || 'bande'}`"
  >
    <img class="ambiance__bg" :src="src" alt="" />
    <div v-if="$slots.default" class="ambiance__band">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ambiance {
  position: relative;
  padding: 0;
  overflow: hidden;
  background: var(--color-paper);
}
.ambiance__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Fond papier translucide : porte le texte, lisible sur n'importe quelle
   image, dans les deux modes (couleurs = tokens). */
.ambiance__band {
  position: absolute;
  background: color-mix(in srgb, var(--color-paper) 88%, transparent);
  color: var(--color-ink);
  line-height: 1.3;
  backdrop-filter: blur(2px);
}

/* ── bande (défaut) : le cold open ─────────────────────────────────── */
.ambiance--bande .ambiance__band {
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-xl);
}

/* ── colonne : le tiers gauche que le prompt wide laisse vide ──────── */
/* 38 % et non 33 % : le tiers du prompt est une consigne de composition
   picturale, pas une garantie au pixel. La marge absorbe un sujet qui
   déborde un peu vers la gauche sans que le texte lui monte dessus. */
.ambiance--colonne .ambiance__band {
  top: 0;
  bottom: 0;
  left: 0;
  width: 38%;
  padding: var(--space-lg) var(--space-md) var(--space-lg) var(--space-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--text-base);
  /* PAS de fond ni de blur : la colonne couvre le tiers gauche CALME de l'image
     (vide par construction du prompt wide), le texte se lit directement dessus.
     Le bandeau, lui, couvre une zone dense et garde son fond papier 88 %. */
  background: none;
  backdrop-filter: none;
}
.ambiance--colonne .ambiance__band :deep(h1) {
  font-size: var(--title-3);
  margin-bottom: var(--space-md);
}
.ambiance--colonne .ambiance__band :deep(p) {
  margin-bottom: var(--space-sm);
}
/* Bord FRANC, pas de dégradé : même parti que le bandeau du cold open — un bloc
   semi-transparent posé net sur l'image pleine page. Le fondu de couture a été
   retiré (change slide14-ambiance-pleine) : il délavait la gauche. La
   semi-transparence + blur du bloc suffisent à adoucir le raccord. */
</style>
