## REMOVED Requirements

### Requirement: Descente technique en quatre murs

**Raison** : l'ordre des strates était gravé dans le requirement (« en
cascade, dans cet ordre ») et son battement ne disait rien de la place de
l'aphorisme de strate. Remplacé ci-dessous par un pattern ternaire uniforme
et explicitement indépendant de l'ordre. Les scénarios « Quatre murs
enchaînés » et « Règle puis remontée » disparaissent avec lui : le premier
asseyait l'ordre fixe, le second nommait « règle » ce qui devient la devise
de section.

## ADDED Requirements

### Requirement: Descente dans la fabrique en quatre strates ternaires

La section 5 SHALL présenter quatre strates techniques : le modèle ignore le
lore, il perd l'intention narrative, la qualité littéraire est pauvre, la
machine s'effondre sous un modèle plus lourd.

Chaque strate SHALL suivre le même **pattern ternaire**, dans cet ordre :

1. une **pièce à conviction** — l'extrait raté, la grille de vérification ou
   les mesures qui prouvent le mur (marquée en gabarit tant que le contenu
   authentique n'existe pas) ;
2. le **mur**, dont l'intitulé NOMME LE PROBLÈME rencontré, suivi de ce que
   ce mur a forcé à construire ;
3. l'**aphorisme** de la strate — sa phrase à emporter — **seul sur sa
   slide**.

Ce pattern SHALL être identique pour les quatre strates et **indépendant de
leur ordre** : permuter des strates NE SHALL PAS exiger de retoucher leur
composition. L'intitulé d'un mur NE SHALL PAS livrer l'aphorisme de sa
strate : la conclusion n'apparaît qu'après la solution.

La **devise de la section** SHALL être portée par la section elle-même et non
par l'une des strates, afin de rester en place quel que soit l'ordre. Elle
SHALL être suivie d'une **remontée** qui rouvre la boîte noire et énumère ce
qu'elle contient, avant de relancer vers la section suivante.

Les éléments qui dépendent du contenu d'une strate SHALL rester attachés à
elle et la suivre en cas de permutation — en particulier le rappel implicite
à l'affaire Gary, qui n'a de sens qu'après la strate de la qualité.

#### Scenario: Quatre strates au même pattern

- **WHEN** on parcourt la section 5
- **THEN** chacune des quatre strates présente successivement sa pièce à
  conviction, son mur et son aphorisme seul

#### Scenario: Chaque strate montre sa pièce à conviction

- **WHEN** une strate est présentée
- **THEN** une slide affiche la preuve du mur (extrait raté, grille ou
  mesures), authentique ou marquée en gabarit si elle n'existe pas encore

#### Scenario: L'intitulé du mur ne livre pas la conclusion

- **WHEN** un mur est affiché
- **THEN** son intitulé nomme le problème rencontré, et l'aphorisme de la
  strate n'apparaît qu'ensuite, sur sa propre slide

#### Scenario: Permutation sans retouche

- **WHEN** l'ordre des strates est modifié
- **THEN** chaque strate conserve sa composition et ses éléments attachés,
  et la devise de section reste en fin de section

#### Scenario: Devise puis remontée

- **WHEN** on atteint la fin de la section 5
- **THEN** la devise de la section est énoncée, puis la remontée détaille le
  contenu de la boîte noire et relance vers la suite
