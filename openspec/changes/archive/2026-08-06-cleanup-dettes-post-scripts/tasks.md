# Tasks — cleanup-dettes-post-scripts

## 1. Code mort

- [x] 1.1 Supprimer `theme/styles/wireframe.css` et son import dans
  `theme/styles/index.ts`
- [x] 1.2 Vérifier qu'aucune slide ne référence `.slot` / `.todo`

## 2. Traçabilité de décision

- [x] 2.1 `CLAUDE.md` — acter « À trancher » #5 : FLUX.2 Klein 4B via mflux
  (renvoyer vers `docs/visuels-pulp.md` et `CREDITS.md`)

## 3. Slide identité

- [x] 3.1 `pages/02-goncourt.md` — nom complet + pseudo sur la signature

## 3bis. Apostrophes typographiques

- [x] 3.2 Remplacer les apostrophes droites par des courbes dans les blocs
  `<p>` en HTML brut (4 blocs, sections 2 et 3) ; vérifier qu'il n'en reste
  aucune

## 4. Vérification

- [x] 4.1 `pnpm run build` OK ; invariant hors-ligne (0 URL externe)
- [x] 4.2 Export PNG de la slide identité (deux modes) : rendu intact
- [x] 4.3 Aucune régression visuelle liée au retrait de `wireframe.css`
  (les classes n'étaient plus utilisées)
