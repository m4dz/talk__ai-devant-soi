<!-- Ambiance cold-open en fond perdu — motifs récit plein cadre.
     Source mode-swap : `light` (crème canonique) / `dark` (négatif B ou
     variante calée). Le texte vit dans un bandeau papier, lisible dans les
     deux modes. Voir docs/visuels-pulp.md §6-7. -->
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
  <div class="slidev-layout ambiance">
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
/* Bandeau papier translucide : porte le texte, lisible sur n'importe quelle
   image, dans les deux modes (couleurs = tokens). */
.ambiance__band {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--space-md) var(--space-xl);
  background: color-mix(in srgb, var(--color-paper) 88%, transparent);
  color: var(--color-ink);
  font-size: var(--text-xl);
  line-height: 1.3;
  backdrop-filter: blur(2px);
}
</style>
