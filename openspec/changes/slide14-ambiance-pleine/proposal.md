## Why

Slide 14 (`ambiance`, variant `colonne`) rend le texte dans une colonne du
tiers gauche dont le bord droit est **fondu dans l'image** par un dégradé, pour
éviter une couture nette. Résultat : l'image paraît **délavée à gauche** et ne
se lit pas comme un fond perdu plein cadre. Le speaker veut le **même parti que
le cold open** — image pleine page, texte dans un **bloc semi-transparent à bord
franc** posé dessus — mais ici en **bloc vertical à gauche** au lieu du bandeau
bas.

## What Changes

- **Le placement `colonne` du layout `ambiance` adopte le traitement du bandeau
  (`bande`)** : un bloc semi-transparent à **bord franc**, posé sur une image
  **pleine page**, sans dégradé de couture.
- **Suppression du dégradé de fondu** (`::after`) et de la contrainte « pas de
  bord franc » : **BREAKING** au sens spec — c'est l'inverse de la règle
  actuelle, assumé (le cold open a déjà un bord franc et tient en projection).
- L'image reste **plein cadre** (`object-fit: cover`) ; le bloc gauche la
  recouvre en partie mais la laisse lire dessous (semi-transparence), comme le
  bandeau du cold open.
- Périmètre réel : **slide 14 seule** (unique usage de `variant: colonne`).

## Capabilities

### New Capabilities

<!-- aucune -->

### Modified Capabilities

- `deck-layouts` : la règle « Layout ambiance et placement du texte » change —
  le placement en colonne devient un bloc semi-transparent à **bord franc** sur
  image pleine page (traitement du bandeau), et la contrainte interdisant un
  bord franc visible est retirée.

## Impact

- Spec : `deck-layouts` — MODIFIED « Layout ambiance et placement du texte ».
- Code : `theme/layouts/ambiance.vue` (variant `colonne` : retrait du dégradé
  `::after`, alignement du panneau sur `bande`). Aucune slide autre que 14
  n'emploie `colonne`.
- Aucun asset à re-tirer : `fabrique-04-usine-machine` réserve déjà sa moitié
  droite au sujet, la gauche calme accueille le bloc.
