<!-- Signature — la slide d'identité du speaker (section 2).
     Portrait pulp à GAUCHE, propos en slot à droite.

     Pourquoi un layout dédié et pas une variante de `propos` ni un
     détournement de `case-card` :
       - `propos` est le layout le plus partagé du deck (plain / question /
         inventaire / declaration). Lui greffer un mode flex-row pour un
         one-shot mettrait toutes ces slides sous risque de régression.
       - `case-card` porte un MODÈLE DE CONTENU (name / work / balance /
         question) : la grammaire du jeu du seuil. La signature n'est pas un
         cas ; la réutiliser obligerait à mentir sur les champs.

     La parenté avec la galerie se tient par HÉRITAGE VISUEL, pas par partage
     de code : même PulpFigure, même flex-row, mêmes tokens d'espacement,
     même plafond de hauteur sur l'objet. Le miroir (figure en premier) est la
     seule différence structurelle.

     L'objet reste crème dans les deux modes (stratégie A) : aucune
     dérivation dark n'est attendue pour ce portrait. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div
    class="slidev-layout signature pulp-bg"
    :class="{ 'signature--with-figure': $frontmatter.figure }"
  >
    <PulpFigure
      v-if="$frontmatter.figure"
      class="signature__figure"
      :src="$frontmatter.figure"
    />

    <div class="signature__corps">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.signature {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* Avec portrait : objet à gauche, propos à droite — miroir de case-card. */
.signature--with-figure {
  flex-direction: row;
  align-items: center;
  gap: var(--space-xl);
}
.signature__figure {
  flex: 0 0 auto;
}
.signature__corps {
  flex: 1 1 0;
  min-width: 0;
  max-width: 58ch;
}

/* px = unités canvas (fiables). Même plafond que le layout de cas, pour que
   les deux objets se lisent à la même échelle d'une slide à l'autre. */
.signature--with-figure .signature__figure :deep(img) {
  max-height: 380px;
}

/* Le nom du speaker est long en Sinzano : sur une colonne amputée de l'objet,
   il passerait sur deux lignes en title-2. Même correctif que case-card. */
.signature :deep(h1) {
  font-size: var(--title-2);
  margin-bottom: var(--space-md);
}
.signature--with-figure :deep(h1) {
  font-size: var(--title-3);
  margin-bottom: var(--space-sm);
}
.signature :deep(p) {
  font-size: var(--text-lg);
  line-height: 1.5;
}
.signature--with-figure :deep(p) {
  font-size: var(--text-base);
}
</style>
