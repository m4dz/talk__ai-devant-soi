## ADDED Requirements

### Requirement: Révélation calée sur les silences du script

Les slides dont le script marque un silence, ou dont le corps est une
anaphore, SHALL révéler leur contenu **progressivement** plutôt que d'un
seul bloc, afin que l'apparition suive le débit du speaker et que les chutes
ne soient pas lues avant d'être prononcées.

La révélation SHALL être pilotée par l'avancée normale de la présentation
(« next »), donc utilisable à la télécommande, sans raccourci dédié.

#### Scenario: Une chute n'apparaît pas avant d'être dite

- **WHEN** une slide enchaîne plusieurs énoncés dont le dernier est une chute
- **THEN** les énoncés apparaissent successivement, la chute en dernier

#### Scenario: Anaphore révélée entrée par entrée

- **WHEN** une slide porte une liste anaphorique
- **THEN** ses entrées apparaissent une à une, pour que la répétition se
  construise devant la salle

#### Scenario: Pilotage à la télécommande

- **WHEN** le speaker avance la présentation
- **THEN** la révélation suivante se déclenche, sans autre commande
