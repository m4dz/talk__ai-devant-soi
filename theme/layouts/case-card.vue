<!-- Un cas du jeu du seuil — section 4. name / work / balance en
     frontmatter, ligne de contexte en slot. Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout case-card">
    <p class="case-card__balance">{{ $frontmatter.balance }}</p>
    <h2 class="case-card__name">{{ $frontmatter.name }}</h2>
    <p class="case-card__work">{{ $frontmatter.work }}</p>
    <hr class="rule" />
    <div class="case-card__context">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.case-card__balance {
  font-family: var(--font-body);
  letter-spacing: 0.15em;
  color: var(--color-muted);
  font-size: var(--text-lg);
  margin-bottom: var(--space-sm);
}
.case-card__name {
  margin-bottom: var(--space-xs);
}
.case-card__work {
  font-style: italic;
  color: var(--color-muted);
  font-size: var(--text-lg);
}
.case-card__context {
  margin-top: var(--space-sm);
  max-width: 52ch;
}
</style>
