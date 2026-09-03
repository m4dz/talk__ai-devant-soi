## Why

Les slides 15, 24 et 26 n'affichent pas la trame halftone (« fond dot »)
que portent leurs voisines. Cause commune : toutes trois sont en
`layout: default`, le seul layout de contenu (avec `ambiance`) à ne pas
porter la classe `.pulp-bg`. Or ce sont des **pièces à conviction** (sorties
machine : plan de scènes en 15, artefacts du dispositif en 24/26), pas des
slides d'argument typographique — elles doivent porter la même patine que
la série qui les entoure. Le trou de texture les fait lire comme
« déshabillées ».

## What Changes

- Ajouter la classe `pulp-bg` à la `class:` frontmatter des trois slides :
  - Slide 15 — `slides/pages/03-lancement.md` : `class: plan-scenes` →
    `class: plan-scenes pulp-bg`.
  - Slide 24 — `slides/pages/05-descente-technique.md` :
    `class: artefact-slide` → `class: artefact-slide pulp-bg`.
  - Slide 26 — `slides/pages/05-descente-technique.md` :
    `class: artefact-slide` → `class: artefact-slide pulp-bg`.
- `.pulp-bg` est autonome (position + pseudo-éléments dot/grain en z-index
  négatif, `theme/styles/pulp.css`) : posée sur la racine du layout
  `default`, elle rend la trame derrière le contenu sans le perturber.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune requirement ne change. `deck-theme` → « Application parcimonieuse »
interdit d'**imposer** la texture à toutes les slides par défaut et veut
que les slides **argument typographiques** restent sobres. Ici l'ajout est
un **opt-in par slide** (le mécanisme même prévu par la spec) sur des
**pièces à conviction**, pas des slides d'argument. La règle de parcimonie
et la lisibilité (texture discrète, tokens par mode) restent respectées.
Changement de style pur → `skip_specs: true`.

## Impact

- `slides/pages/03-lancement.md` — frontmatter slide 15.
- `slides/pages/05-descente-technique.md` — frontmatter slides 24 et 26.
- Aucun token, layout ou asset modifié.
- Vérifier la trame **et la lisibilité** du tableau/artefacts en modes
  clair et sombre (la texture doit rester discrète derrière le contenu).
