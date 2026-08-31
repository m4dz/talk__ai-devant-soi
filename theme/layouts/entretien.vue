<!-- Entretien — l'échange rejoué de la section 6 (le mode acteur).
     Une suite de questions typées et de réponses, révélées une par une.

     C'est le corps le plus dense du deck : la slide vivait en layout par
     défaut, donc avec un h1 à --title-1 qui mangeait la place dont les trois
     échanges avaient besoin. Le layout titre plus petit et structure la
     densité au lieu de la subir.

     Le balisage attendu dans la slide (le layout le style, la slide ne
     porte plus de <style scoped>) :

       # Titre
       <div v-click class="echange">
         <p class="role">Question factuelle</p>
         …la réponse, gabarit ou verbatim authentique…
       </div>

     `role` porte le TYPE de la question — c'est la montée des trois types
     (factuelle → interprétative → celle qui déraille) qui fait l'argument,
     donc le type doit se lire. -->
<template>
  <div class="slidev-layout entretien pulp-bg">
    <slot />
  </div>
</template>

<style scoped>
.entretien {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Marge réduite : trois échanges plus leurs cartouches ne tiennent pas
     dans le padding standard du deck. La slide débordait déjà avant ce
     layout — le troisième échange était coupé en pleine ligne. Mesuré sur
     le canvas 980x551 : 3rem de marge verticale laissent 455px de hauteur
     utile, les trois échanges en demandent ~321. */
  padding: var(--space-lg) var(--space-xl);
}

/* Le titre cède la place : il nomme la scène, il ne la domine pas. */
.entretien :deep(h1) {
  font-size: var(--title-3);
  margin-bottom: var(--space-md);
}

/* Chaque échange : un filet à gauche les aligne et les compte visuellement,
   comme les entrées d'inventaire du layout propos. Vocabulaire commun. */
.entretien :deep(.echange) {
  max-width: 62ch;
  padding-left: var(--space-md);
  border-left: 2px solid var(--color-rule);
  margin-bottom: var(--space-sm);
}
.entretien :deep(.echange:last-child) {
  margin-bottom: 0;
}

/* Le type de question, en cartouche d'accent : c'est l'étiquette de la
   pièce, pas la pièce. */
.entretien :deep(.role) {
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
}

/* La réponse reste au corps de texte : c'est un verbatim, pas une citation
   en exergue. Compatible gabarit (le contenu authentique n'existe pas
   encore). */
.entretien :deep(.gabarit-bloc) {
  font-size: var(--text-base);
  padding: var(--space-xs) var(--space-sm);
  margin: 0;
}
</style>
