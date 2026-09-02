## Why

Après la refonte de la fabrique (cinq gestes) et deux passes d'élagage, le deck
a beaucoup bougé. Il faut **reconstruire une trame narrative propre** et la
faire porter par les slides, avant de simplifier les textes. Objectif : une
intention claire et large par slide, un arc qui progresse au lieu de rebondir,
et des notes de speaker qui servent une **keynote parlée en bullets** (pas un
texte récité).

Trame validée avec le speaker (voir [`design.md`](design.md)).

## What Changes

- **Colonne vertébrale reformulée** : thèse = *on ne peut pas différencier
  l'auteur de sa fabrique quand elle est de sa main* ; ajout du **pont dev
  implicite** (le craft forge la fabrique, elle reste l'outil, on reste
  l'auteur) ; miroir 1975 déprioritisé.
- **La question de la paternité cesse de rebondir** : posée → aiguisée →
  répondue → affirmée, une fois chacune (11/19 → 29 → 32 → 43).
- **Deux slides ajoutées** : `17` démystifier la fabrique (porte de la
  descente), `22` le gros modèle (plus de savoir = plus moyen).
- **Reframes** : `16` fusionne le contrat du compteur ; `19` « la littérature
  s'est déjà posé la question » (au lieu du vote mains-levées) ; `41` la récolte
  montre *ce qu'on a produit et comment* (plus de stats) ; `43` la chute
  **affirme** au lieu de demander.
- **Notes de speaker refondues en bullet-points** : idées-clés glanceables +
  accroches vers les slides adjacentes, sur tout le deck.
- « Compter n'est pas lire » : conservé **en note**, plus en slide.

## Impact

- Deck : 44 → **46 slides** (2 ajouts) ; reframes sur `16`, `19`, `41`, `43` ;
  notes refondues sur l'ensemble.
- Specs : `deck-content` (delta à écrire quand l'implémentation avance).
- Dépendances : les verbatims de l'entretien Racter (`36`) restent en gabarit
  (générés en amont, séparément).
- Ce changement **fige d'abord la trame** (design) ; l'implémentation
  (slides + notes) suit par lots.
