## Why

Le deck est fonctionnel et lisible (jalons 1-3, 5A) mais reste
typographiquement « nu » : l'identité **pulp / polar d'époque** voulue par
CLAUDE.md (texture tramée, grain papier, ornements de couverture) n'est
pas encore posée. C'est le sous-jalon 5B : donner la patine pulp **par la
palette, la texture et l'ornement typographique**, sans surcharger — les
slides « argument » restent minimales.

## What Changes

- **Textures de fond pulp** (CSS pur, hors-ligne) :
  - **halftone / trame** de points, discrète, en fond.
  - **grain papier** (bruit léger), discret.
  Pilotées par tokens (opacité, densité), déclinées dans les **deux modes**,
  appliquées **avec parcimonie** (slides récit / transitions), jamais au
  point de nuire à la lisibilité.
- **Ornements typographiques pulp** : filets, cartouche/bandeau de titre
  pour les slides récit, tirés du vocabulaire des couvertures pulp
  (référence : covers de magazines d'époque à collecter).
- **Tokens affinés** : ajustements palette/espacements pour la direction
  pulp (accent rouge à confirmer sur projecteur).
- Les slides **argument** conservent leur sobriété (le pulp passe par
  typo + palette + texture, pas par l'ajout d'éléments).

Non-goals : illustrations générées (5C) ; finalisation des 2 slides
bloquées par la citation Goncourt (#6) ; refonte des layouts fonctionnels.

## Capabilities

### Modified Capabilities

- `deck-theme`: ajout d'exigences — textures de fond pulp (halftone +
  grain) discrètes, dual-mode, sans perte de lisibilité ; ornements
  typographiques pulp optionnels ; le tout piloté par tokens.

## Impact

- **Ajouté** : styles de texture/ornement dans `theme/styles/`
  (ex. `pulp.css`), tokens de texture dans `tokens.css`.
- **Modifié** : `theme/styles/` (application parcimonieuse), éventuels
  ajustements de tokens palette.
- **Dépendances** : aucune (CSS pur — trame en dégradés, grain en SVG
  `feTurbulence` inline). **Réseau** : aucun (hors-ligne préservé).
