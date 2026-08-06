<!-- Pièce à conviction — les extraits ratés, la grille de lint, les mesures
     du crash. Le script le dit : la section 5 n'introduit aucun objet
     scénique, ses slides de preuve SONT ses pièces à conviction.
     Frontmatter : `intitule` (ce qu'on montre), `commentaire` (une ligne
     sous le bloc). Preuve dans le slot. Tokens uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout piece pulp-bg">
    <p v-if="$frontmatter.intitule" class="piece__intitule">
      {{ $frontmatter.intitule }}
    </p>

    <div class="piece__preuve">
      <slot />
    </div>

    <p v-if="$frontmatter.commentaire" class="piece__commentaire">
      {{ $frontmatter.commentaire }}
    </p>
  </div>
</template>

<style scoped>
.piece {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* L'intitulé : petit, en capitales, comme une étiquette de dossier. */
.piece__intitule {
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: var(--text-base);
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}
/* Le bloc de preuve : encadré, sur fond légèrement contrasté. */
.piece__preuve {
  border-left: 3px solid var(--color-accent);
  padding: var(--space-sm) var(--space-md);
  background: color-mix(in srgb, var(--color-ink) 5%, transparent);
  font-size: var(--text-base);
  line-height: 1.5;
  max-width: 68ch;
  max-height: 300px;
  overflow: hidden;
}
.piece__commentaire {
  margin-top: var(--space-md);
  max-width: 60ch;
  color: var(--color-muted);
  font-size: var(--text-lg);
}
</style>
