<!-- Diptyque-grille — variante asymétrique du diptyque : deux extraits empilés
     dans un rail à gauche (l'un plat, l'autre vivant), une grille de verdict en
     panneau à droite. Sert le geste Malley : la même grille valide les deux, un
     seul est vivant. Étiquettes des extraits en frontmatter (`haut` / `bas`),
     intitulé de grille en frontmatter (`verdict`). Slots nommés `#auteur`,
     `#machine`, `#grille`. Corps réduit via un token en scope. Tokens
     uniquement. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout dgrille pulp-bg">
    <h2 v-if="$frontmatter.titre" class="dgrille__titre">{{ $frontmatter.titre }}</h2>

    <div class="dgrille__corps">
      <!-- Rail gauche : les deux extraits empilés, chacun sous son étiquette. -->
      <section class="dgrille__rail">
        <div class="dgrille__extrait">
          <p class="dgrille__etiquette">{{ $frontmatter.haut }}</p>
          <div class="dgrille__texte"><slot name="auteur" /></div>
        </div>
        <div class="dgrille__extrait">
          <p class="dgrille__etiquette">{{ $frontmatter.bas }}</p>
          <div class="dgrille__texte"><slot name="machine" /></div>
        </div>
      </section>

      <!-- Panneau droit : la grille de lint, tout au vert. -->
      <section class="dgrille__panneau">
        <p v-if="$frontmatter.verdict" class="dgrille__verdict">{{ $frontmatter.verdict }}</p>
        <div class="dgrille__grille"><slot name="grille" /></div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.dgrille {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Corps réduit, en scope : les deux extraits + la grille doivent tenir. */
  --dg-text: 0.92rem;
}
.dgrille__titre {
  margin-bottom: var(--space-sm);
}
/* Asymétrie : le rail de textes prend un peu plus que le panneau-grille. */
.dgrille__corps {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-lg);
  align-items: start;
}
.dgrille__rail {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.dgrille__etiquette,
.dgrille__verdict {
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: var(--text-base);
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-rule);
  padding-bottom: var(--space-xs);
}
.dgrille__texte {
  font-size: var(--dg-text);
  line-height: 1.4;
}
/* Le panneau-grille : encadré filet + fond léger, comme une pièce à conviction. */
.dgrille__panneau {
  border: 1px solid var(--color-rule);
  background: color-mix(in srgb, var(--color-ink) 4%, transparent);
  padding: var(--space-sm) var(--space-md);
}
.dgrille__verdict {
  color: var(--color-accent);
}
/* La grille elle-même : tableau compact, marques en encre (pas de vert importé
   dans la palette pulp — l'uniformité des ✓ et l'intitulé portent « tout au
   vert »). */
.dgrille__grille :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--dg-text);
  line-height: 1.3;
}
.dgrille__grille :deep(thead) {
  display: none; /* en-tête « Run » inutile : une seule colonne de résultat */
}
.dgrille__grille :deep(td) {
  padding: 0.28em 0.4em;
  border-bottom: 1px solid var(--color-rule);
  vertical-align: baseline;
}
/* Première colonne : la règle. Dernière : la marque ✓, alignée à droite. */
.dgrille__grille :deep(td:last-child) {
  text-align: right;
  font-weight: 700;
  color: var(--color-ink);
  white-space: nowrap;
  padding-left: var(--space-sm);
}
.dgrille__grille :deep(tr:last-child td) {
  border-bottom: none;
}
</style>
