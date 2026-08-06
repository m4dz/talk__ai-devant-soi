## MODIFIED Requirements

### Requirement: Descente technique en quatre murs

La section 5 SHALL présenter quatre strates techniques en cascade, dans cet
ordre : (1) le modèle ignore le lore, (2) il perd l'intention narrative,
(3) la qualité littéraire est pauvre, (4) crash sous modèles plus lourds.

Chaque strate SHALL suivre le battement **ce qu'on a tenté → le mur → ce
que le mur a forcé à construire**, et SHALL exposer une **pièce à
conviction** : l'extrait raté, la grille de vérification ou les mesures qui
prouvent le mur. Tant que ces pièces authentiques n'existent pas, elles
SHALL apparaître en gabarit.

La section SHALL se clore par la règle de la fabrique (« la fabrique reste
à notre main ») puis par une **remontée** qui rouvre la boîte noire et
énumère ce qu'elle contient, avant de relancer vers la section suivante.

#### Scenario: Quatre murs enchaînés

- **WHEN** on parcourt la section 5
- **THEN** les quatre murs se succèdent dans l'ordre, chacun avec son
  problème et sa solution

#### Scenario: Chaque strate montre sa pièce à conviction

- **WHEN** une strate est présentée
- **THEN** une slide affiche la preuve du mur (extrait raté, grille ou
  mesures), authentique ou marquée en gabarit si elle n'existe pas encore

#### Scenario: Règle puis remontée

- **WHEN** on atteint la fin de la section 5
- **THEN** une slide énonce la règle de la fabrique, puis la remontée
  détaille le contenu de la boîte noire et relance vers la suite
