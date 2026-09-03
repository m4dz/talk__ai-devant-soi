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
     (factuelle → interprétative → existentielle) qui fait l'argument, donc
     le type doit se lire. La troisième (« la nature de votre réalité ») a
     été CONSERVÉE — décision du 2026-09-03 : le run INT-c la tient sans
     conclure, elle n'a pas déraillé. -->
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
  padding: var(--space-md) var(--space-xl);
}

/* Le titre cède la place : il nomme la scène, il ne la domine pas. */
.entretien :deep(h1) {
  font-size: var(--title-3);
  margin-bottom: var(--space-sm);
}

/* Chaque échange : un filet à gauche les aligne et les compte visuellement,
   comme les entrées d'inventaire du layout propos. Vocabulaire commun. */
.entretien :deep(.echange) {
  max-width: 62ch;
  padding-left: var(--space-md);
  border-left: 2px solid var(--color-rule);
  margin-bottom: var(--space-xs);
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
  font-size: 0.72rem;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

/* La réponse reste au corps de texte : c'est un verbatim, pas une citation
   en exergue. Compatible gabarit (le contenu authentique n'existe pas
   encore). */
.entretien :deep(.gabarit-bloc) {
  font-size: var(--text-base);
  padding: var(--space-xs) var(--space-sm);
  margin: 0;
}

/* Verbatim authentique — question (l'intervieweur) et réponse (Judith).
   Sous le corps de texte : trois échanges complets, dont une réponse
   longue (INT-c), doivent tenir dans les ~343px utiles du canvas. Mesuré :
   0.85rem + interlignage serré laissent les trois blocs sans coupe, réponse
   2 (la plus longue, 4 lignes) comprise. Mesuré à l'export --with-clicks :
   à 0.95rem la réponse existentielle passait sous le bord bas. Ne pas
   remonter. */
.entretien :deep(.q),
.entretien :deep(.r) {
  max-width: 62ch;
  font-size: 0.85rem;
  line-height: 1.32;
  margin: 0 0 0.35rem 0;
}
/* La question : la voix de l'intervieweur, en retrait, italique. */
.entretien :deep(.q) {
  font-style: italic;
  color: var(--color-muted);
}
/* La réponse ferme l'échange : pas de marge basse résiduelle. */
.entretien :deep(.r) {
  margin-bottom: 0;
}
/* L'étiquette « Vous » / « Judith » : qui parle, en accent bref. */
.entretien :deep(.qui) {
  font-style: normal;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  margin-right: 0.4em;
}
</style>
