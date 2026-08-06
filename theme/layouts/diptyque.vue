<!-- Diptyque — deux colonnes de même poids pour comparer deux versions d'un
     même texte (script section 4 : la version Carver et la version Lish).
     Étiquettes en frontmatter (`gauche` / `droite`), contenus dans les slots
     nommés `#gauche` et `#droite`. Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout diptyque pulp-bg">
    <h2 v-if="$frontmatter.titre" class="diptyque__titre">{{ $frontmatter.titre }}</h2>

    <div class="diptyque__grille">
      <section class="diptyque__col">
        <p class="diptyque__etiquette">{{ $frontmatter.gauche }}</p>
        <div class="diptyque__corps"><slot name="gauche" /></div>
      </section>

      <section class="diptyque__col">
        <p class="diptyque__etiquette">{{ $frontmatter.droite }}</p>
        <div class="diptyque__corps"><slot name="droite" /></div>
      </section>
    </div>

    <div v-if="$slots.default" class="diptyque__pied"><slot /></div>
  </div>
</template>

<style scoped>
.diptyque {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.diptyque__titre {
  margin-bottom: var(--space-md);
}
/* Deux colonnes strictement de même poids : aucune ne domine. */
.diptyque__grille {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  align-items: start;
}
.diptyque__etiquette {
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: var(--text-base);
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  padding-bottom: var(--space-xs);
}
.diptyque__corps {
  font-size: var(--text-base);
  line-height: 1.45;
}
.diptyque__pied {
  margin-top: var(--space-md);
  color: var(--color-muted);
  font-size: var(--text-base);
}
</style>
