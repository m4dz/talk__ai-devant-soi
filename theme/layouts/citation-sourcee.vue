<!-- Citation SOURCÉE — la référence de publication est affichée à l'écran,
     jamais optionnelle : c'est la raison d'être de ce layout (rigueur
     factuelle, cf. docs / spec deck-content « Aucune position d'Académie
     affirmée »). Frontmatter : `author` (qui parle), `reference`
     (publication, n°, date). Citation en slot. Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout citation-sourcee pulp-bg">
    <blockquote class="citation-sourcee__quote">
      <slot />
    </blockquote>

    <p class="citation-sourcee__author">{{ $frontmatter.author }}</p>

    <p class="citation-sourcee__ref">
      <span class="cartouche">{{ $frontmatter.reference }}</span>
    </p>
  </div>
</template>

<style scoped>
.citation-sourcee {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.citation-sourcee__quote {
  font-family: var(--font-title);
  font-size: var(--title-3);
  line-height: 1.15;
  max-width: 32ch;
  margin: 0;
}
.citation-sourcee__author {
  margin-top: var(--space-md);
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--color-ink);
}
/* La référence : petite, discrète, mais toujours présente. */
.citation-sourcee__ref {
  margin-top: var(--space-xs);
}
</style>
