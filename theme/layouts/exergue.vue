<!-- Citation centrée en Sinzano — sections 2 (Goncourt) et 8 (Gary).
     Attribution optionnelle via frontmatter `source`. Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout exergue">
    <blockquote class="exergue__quote">
      <slot />
    </blockquote>
    <p v-if="$frontmatter.source" class="exergue__source">
      {{ $frontmatter.source }}
    </p>
  </div>
</template>

<style scoped>
.exergue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.exergue__quote {
  font-family: var(--font-title);
  font-size: var(--title-2);
  line-height: 1.1;
  max-width: 24ch;
  margin: 0;
}
.exergue__source {
  margin-top: var(--space-md);
  color: var(--color-muted);
  font-size: var(--text-lg);
}
</style>
