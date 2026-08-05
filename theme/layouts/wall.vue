<!-- Un mur technique — section 5. n / problem en frontmatter, solution
     (qui ouvre le mur suivant) en slot. Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout wall pulp-bg">
    <div class="wall__n">Mur {{ $frontmatter.n }} / 4</div>
    <h2 class="wall__problem">{{ $frontmatter.problem }}</h2>
    <hr class="rule" />
    <div class="wall__solution">
      <span class="wall__label">Solution</span>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wall {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wall__n {
  font-family: var(--font-body);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  font-size: var(--text-base);
  margin-bottom: var(--space-sm);
}
.wall__problem {
  max-width: 26ch;
}
.wall__solution {
  margin-top: var(--space-sm);
  max-width: 52ch;
  font-size: var(--text-lg);
}
.wall__label {
  display: block;
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: var(--text-base);
  color: var(--color-muted);
  margin-bottom: var(--space-xs);
}
</style>
