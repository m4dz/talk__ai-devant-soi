<!-- Un cas du jeu du seuil — section 4. name / work / balance en
     frontmatter, ligne de contexte en slot. Portrait pulp optionnel via
     `figure` (frontmatter) → <PulpFigure> (objet crème, stratégie A).
     Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div
    class="slidev-layout case-card pulp-bg"
    :class="{ 'case-card--with-figure': $frontmatter.figure }"
  >
    <div class="case-card__text">
      <p class="case-card__balance">{{ $frontmatter.balance }}</p>
      <h2 class="case-card__name">{{ $frontmatter.name }}</h2>
      <p class="case-card__work">{{ $frontmatter.work }}</p>
      <hr class="rule" />
      <div class="case-card__context">
        <slot />
      </div>
    </div>

    <PulpFigure
      v-if="$frontmatter.figure"
      class="case-card__figure"
      :src="$frontmatter.figure"
    />
  </div>
</template>

<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* Avec portrait : texte à gauche, objet à droite. */
.case-card--with-figure {
  flex-direction: row;
  align-items: center;
  gap: var(--space-xl);
}
.case-card__text {
  flex: 1 1 0;
  min-width: 0;
}
.case-card__figure {
  flex: 0 0 auto;
}
/* px = unités canvas (fiables). L'objet tient dans la hauteur de slide,
   le texte garde sa colonne. */
.case-card--with-figure .case-card__figure :deep(img) {
  max-height: 430px;
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
