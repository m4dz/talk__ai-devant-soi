# deck-content — delta

## ADDED Requirements

### Requirement: Arc narratif figé — l'intention prime sur le wording

Le deck SHALL suivre la trame narrative figée dans
`openspec/changes/refonte-arc-narratif/design.md`. Cette trame est la **source
de vérité de l'intention** de chaque slide : le texte à l'écran pourra être
simplifié, mais l'**intention et le sens sous-jacent** de chaque slide SHALL
rester conformes à la trame.

La colonne vertébrale SHALL porter quatre fils : (1) la thèse — *on ne peut pas
différencier l'auteur de sa fabrique quand elle est de sa main* ; (2) le seuil
de la paternité ; (3) la contrainte locale ; (4) le pont dev, qui SHALL rester
**implicite** — jamais énoncé, jamais « vous les devs ».

#### Scenario: L'intention prime sur le texte

- **WHEN** le wording d'une slide est simplifié
- **THEN** son intention reste celle fixée par la trame `design.md`

#### Scenario: Le pont dev reste implicite

- **WHEN** on parcourt le deck de bout en bout
- **THEN** aucune slide n'énonce explicitement l'adresse aux développeurs ; le
  rapprochement craft/fabrique/auteur est seulement suggéré

### Requirement: La question de la paternité progresse, sans rebond

Le deck NE SHALL PAS rejouer la question « qui est l'auteur / est-ce mon
œuvre ? » en boucle. La question SHALL être traitée en **quatre temps distincts,
une seule fois chacun** :

1. **posée** — la question est ancienne, la littérature se l'est déjà posée ;
2. **aiguisée** — au geste Carver : « à force de retraits, à qui est la voix ? » ;
3. **répondue** — à la remontée : pas de seuil, la fabrique est de ma main ;
4. **affirmée** — à la chute : l'œuvre est mienne parce que la fabrique est
   mienne (affirmation, pas question).

#### Scenario: Quatre temps, une fois chacun

- **WHEN** on suit la question de la paternité dans le deck
- **THEN** elle est posée, puis aiguisée, puis répondue, puis affirmée, sans
  être re-posée en question à la chute

### Requirement: Deux slides ajoutées à la trame

Le deck SHALL comporter deux slides ajoutées par la refonte de l'arc :

1. **démystifier la fabrique** — entre le lancement et la descente : ce qui
   tourne est une boîte noire qu'on ouvre couche par couche ;
2. **le gros modèle** — au geste Malley : le modèle contient tout le savoir et
   tous les styles, et c'est **pour cela** que le résultat est moyen (composer à
   partir de tout n'est pas gage de qualité, au contraire).

#### Scenario: Les deux slides sont présentes

- **WHEN** on parcourt l'allumage puis le geste Malley
- **THEN** la slide « démystifier la fabrique » ouvre la descente, et la slide
  « le gros modèle » figure dans le geste Malley
