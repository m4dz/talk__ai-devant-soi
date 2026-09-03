## Why

Slide 14 (`ambiance`, variant `colonne`) rend le texte dans une colonne du
tiers gauche dont le bord droit est **fondu dans l'image** par un dégradé, pour
éviter une couture nette. Résultat : l'image paraît **délavée à gauche** et ne
se lit pas comme un fond perdu plein cadre. Le speaker veut le **même parti que
le cold open** — image pleine page, texte dans un **bloc semi-transparent à bord
franc** posé dessus — mais ici en **bloc vertical à gauche** au lieu du bandeau
bas.

## What Changes

- **Le placement `colonne` perd son fond ET son dégradé** : le texte se lit
  **directement sur l'image** pleine page, dans le tiers gauche calme que
  l'asset réserve. Ni panneau, ni fondu, ni couture — l'image porte le texte.
- **Suppression du dégradé de fondu** (`::after`) — il délavait la gauche — et
  du fond papier du bloc colonne : inutile vu l'image (gauche calme et
  contrastée dans les deux modes). **BREAKING** au sens spec : l'ancienne règle
  « pas de bord franc » (le dégradé) est retirée, et la colonne n'a plus de
  bloc du tout.
- L'image reste **plein cadre** (`object-fit: cover`), ininterrompue sous le
  texte. La lisibilité vient de l'asset : gauche crème (texte encre) en clair,
  gauche sombre du négatif (texte papier) en sombre.
- Le **bandeau** (`bande`, cold open) garde son bloc semi-transparent : il
  couvre une zone dense et en a besoin. Inchangé.
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
