## ADDED Requirements

### Requirement: L'artefact Malley rend une grille de lint tout au vert

L'artefact du geste **Malley** SHALL **rendre à l'écran** une **grille de lint
tout au vert** — pas seulement l'énoncer à l'oral. La grille SHALL être un
**extrait authentique des retours de run** (le bloc de contrôles binaires
« Mécanique — échec si présent », tel que produit par l'outillage de lint), et
chacun de ses contrôles SHALL y figurer **au vert** (validé). La grille SHALL
être posée **à côté** des deux extraits comparés, dont l'un est plat (machine)
et l'autre vivant (auteur), pour littéraliser le propos : *la même grille les
valide tous les deux, un seul est vivant.*

Les deux extraits comparés SHALL être **empilés** (l'un au-dessus de l'autre)
et la grille SHALL occuper une colonne à part, de sorte que la grille soit
visible en même temps que les deux textes. Les **verbatims** des deux extraits
(figés à la refonte de l'arc en cinq gestes) NE SHALL PAS changer. La grille
SHALL rester **compréhensible sans le contexte du roman** : ses lignes sont des
règles de style génériques (lexique pastiche, tic d'IA, ponctuation, incise,
élision, temps verbal).

#### Scenario: La grille tout au vert est montrée, pas seulement dite

- **WHEN** on affiche la slide artefact du geste Malley
- **THEN** une grille de lint réelle, dont tous les contrôles sont au vert,
  est visible à l'écran, à côté des deux extraits comparés

#### Scenario: Deux extraits empilés, grille séparée

- **WHEN** on affiche la slide artefact du geste Malley
- **THEN** l'extrait auteur et l'extrait machine sont empilés dans une même
  colonne et la grille occupe une colonne distincte, les trois étant lisibles
  ensemble
