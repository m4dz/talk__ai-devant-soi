## Why

L'artefact du geste **Malley** (slide « Grille de style : tout au vert »)
doit, selon `deck-content`, montrer *une grille de vérification tout au vert
posée à côté d'un extrait plat*. L'implémentation actuelle n'affiche que les
**deux extraits** côte à côte (layout `diptyque`) : la grille de lint est
**dite à l'oral mais jamais montrée**. Le public entend « la grille les valide
tous les deux » sans voir la grille. On répare l'écart : on affiche une grille
de lint réelle, tirée des retours de run, tout au vert.

## What Changes

- La slide artefact Malley passe d'un **diptyque symétrique** (deux extraits
  côte à côte) à une composition **asymétrique** : colonne de gauche = les
  **deux extraits empilés** (l'auteur au-dessus, la machine en dessous, chacun
  sous son étiquette) ; colonne de droite = une **grille de lint réelle, tout
  au vert**.
- La grille affichée est un **extrait authentique** des retours de run : le
  bloc **« Mécanique — échec si présent »** (6 règles binaires), tout au vert
  (`grille-lint-session-6-C.md`, run C2 / `grille-lint-chapitre-7.md`, run CH7
  — mécanique 6/6 ✓). Elle littéralise le propos : *la même grille valide les
  deux, un seul est vivant.*
- **Nouveau layout** `diptyque-grille` : rail de textes empilés à gauche,
  panneau-grille (le verdict) à droite. Tokens uniquement, lisible dans les
  deux modes.
- Réduction de la taille de corps (via tokens du layout) pour que les deux
  extraits **et** la grille tiennent sans débordement.

Hors périmètre : les **verbatims** des deux extraits (figés à la refonte
`refonte-arc-figures-gestes`), le fil rouge du seuil, l'ordre des gestes,
l'aparté « gros modèle ». Le layout `diptyque` existant reste inchangé (il
sert encore le geste Carver/Lish).

## Capabilities

### New Capabilities
<!-- aucune -->

### Modified Capabilities

- `deck-layouts`: ajout d'un layout `diptyque-grille` (rail de textes empilés
  + panneau-grille de verdict), asymétrique, distinct du `diptyque` symétrique.
- `deck-content`: l'artefact du geste Malley SHALL **rendre** une grille de
  lint tout au vert (extrait de run réel) à côté des deux extraits, désormais
  empilés — la grille n'est plus seulement énoncée à l'oral.

## Impact

- `theme/layouts/diptyque-grille.vue` (nouveau).
- `slides/pages/05-descente-technique.md` — slide `layout: diptyque`
  « Grille de style : tout au vert » repassée sous `layout: diptyque-grille`.
- Tokens de taille de corps (dans le nouveau layout, en scope) ; aucun token
  global modifié.
- Source de données : `stack fictional writing/grille-lint-*.md` (retours de
  run) — copiée en dur dans la slide, pas de dépendance runtime.
- Les deux modes (dark/light) à re-tester sur cette slide.
