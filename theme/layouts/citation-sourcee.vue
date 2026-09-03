<!-- Citation SOURCÉE — la référence de publication est affichée à l'écran,
     jamais optionnelle : c'est la raison d'être de ce layout (rigueur
     factuelle, cf. spec deck-content « Aucune position d'Académie affirmée »).
     Frontmatter : `author` (qui parle), `reference` (publication, n°, date).
     Le corps cité est en slot.

     Passe de style (change passe-style-citations) : le corps est une PIÈCE À
     CONVICTION, pas une voix d'exergue — donc en POLICE DE CORPS, pas en
     Sinzano (l'exergue garde Sinzano). Il est mis en exergue sur un panneau
     semi-transparent, marqué d'un grand guillemet ouvrant en accent
     semi-transparent ancré haut-gauche. L'attribution est alignée à droite :
     auteur plus petit, puis la référence dans la `.cartouche` PARTAGÉE (la
     même que l'exergue et la sortie de clôture). Tokens uniquement. -->
<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()

// L'auteur se coupe sur SA PREMIÈRE virgule : le nom sur une ligne, son titre
// (juré, lauréat, maison…) sur la suivante. Les virgules suivantes (une maison
// à plusieurs sceaux) restent sur la ligne du titre.
const auteur = computed(() => {
  const a = ($frontmatter.author || '').trim()
  const i = a.indexOf(',')
  if (i === -1) return { nom: a, titre: '' }
  return { nom: a.slice(0, i + 1), titre: a.slice(i + 1).trim() }
})
</script>

<template>
  <div class="slidev-layout citation-sourcee pulp-bg">
    <figure class="citation-sourcee__card">
      <blockquote class="citation-sourcee__quote">
        <slot />
      </blockquote>

      <figcaption class="citation-sourcee__attribution">
        <p class="citation-sourcee__author">
          {{ auteur.nom }}<template v-if="auteur.titre"><br>{{ auteur.titre }}</template>
        </p>
        <p class="citation-sourcee__ref">
          <span class="cartouche">{{ $frontmatter.reference }}</span>
        </p>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.citation-sourcee {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Le bloc : posé, aligné à gauche, sur un voile d'encre. Le padding-top laisse
   le guillemet respirer au-dessus de la première ligne. */
.citation-sourcee__card {
  position: relative;
  margin: 0;
  max-width: 46ch;
  padding: 1.6em 2em 1.4em;
  background: var(--citation-panel);
  border-radius: 4px;
  text-align: left;
}

/* Grand guillemet ouvrant, en accent semi-transparent, ancré haut-gauche et
   posé DERRIÈRE le texte (z-index 0 vs 1). Semi-transparent → le texte reste
   lisible par-dessus. En Sinzano : la forme pulp du guillemet, pas un
   paragraphe — la règle « aucun paragraphe en Sinzano » ne le vise pas. */
.citation-sourcee__card::before {
  content: '\201C';
  position: absolute;
  top: -0.18em;
  left: 0.1em;
  z-index: 0;
  font-family: var(--font-title);
  font-size: 9rem;
  line-height: 1;
  color: var(--citation-quote);
  pointer-events: none;
}

/* Le corps cité : POLICE DE CORPS (pas Sinzano), au-dessus du guillemet. */
.citation-sourcee__quote {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--title-3);
  line-height: 1.35;
  color: var(--color-ink);
}
/* Répliques multiples (slides 6, 8, 10) : espacées, sous un seul guillemet. */
.citation-sourcee__quote :deep(p) {
  margin: 0;
}
.citation-sourcee__quote :deep(p + p),
.citation-sourcee__quote :deep(div) {
  margin-top: var(--space-sm);
}

/* Attribution : hiérarchie à droite. Auteur plus petit, puis la cartouche. */
.citation-sourcee__attribution {
  margin-top: var(--space-md);
  text-align: right;
}
.citation-sourcee__author {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-ink);
}
.citation-sourcee__ref {
  margin: var(--space-xs) 0 0;
}
</style>
