## Why

Au filage, quatre enchaînements cassent le rythme. On réordonne quatre slides
pour resserrer le tempo, et on propage le nouvel ordre dans les scripts source
(vérité de contenu) et les notes de navigation, pour qu'aucune couche ne mente
sur la séquence réelle.

## What Changes

- **Move 1 — §2** : la **question centrale** passe **avant** la citation Andrea
  (qui est ensuite déplacée, voir move 2). §2 se resserre en
  Assouline → clause → question → signature.
- **Move 2 — Andrea au seam §3→§4** : la réaction lauréat « tromperie /
  tricherie » (Jean-Baptiste Andrea) quitte le pivot §2 et se pose **après
  « On lance ? »**, en ouverture de la descente. Le mot « tricherie » est
  alors dit **deux fois** en trois slides (Andrea, puis « ce que l'Académie
  appelle tricherie ») — **redite voulue** : Andrea amorce la reprise.
- **Move 3 — entrée de la descente** : le cadre local « rien ne sort de cette
  pièce » passe **avant** « entrons dans l'atelier ». La contrainte ouvre la
  descente comme cadre, avant le beat boîte-noire.
- **Move 4 — remontée** : « Rouvrez la boîte » (inventaire des gestes +
  réponse au seuil) passe **avant** « La fabrique reste à notre main ». La
  règle devient une **conséquence en rappel** qui clôt la remontée vers le
  hand-off.
- **Propagation scripts** : `docs/scripts/02-*` et `docs/scripts/04-*` alignés
  sur le nouvel ordre (les scripts restent la source de vérité).
- **Réécriture des notes** : fils `←/→`, block-comments et repères `⚠` des
  slides déplacées et de leurs voisins, recâblés sur la séquence réelle.

Aucun **wording de contenu à l'écran** ne change ; seuls l'ordre, les scripts
et les notes de présentateur bougent.

## Capabilities

### Modified Capabilities

- `deck-content`: l'ordre du pivot §2, de l'entrée de la descente et de la
  remontée change ; la citation Andrea et le double « tricherie » sont
  relocalisés au seam §3→§4.

## Impact

- `slides/pages/02-goncourt.md`, `slides/pages/03-lancement.md`,
  `slides/pages/05-descente-technique.md` (ordre des blocs — déjà appliqué —
  + notes).
- `docs/scripts/02-sections-2-3-pivot-allumage.md`,
  `docs/scripts/04-section-5-descente-fabrique.md` (propagation de l'ordre).
- Notes de présentateur (fils `←/→`, block-comments, `⚠`) des slides
  9, 10, 15, 16, 17, 18, 30, 31, 32.
- Aucune incidence composant / live / build.
