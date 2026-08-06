## ADDED Requirements

### Requirement: Section 6 — le mode personnage

La section 6 SHALL présenter le second rôle de la fabrique, l'**acteur** :
même mémoire et mêmes fiches que l'auteur, mais on ne demande plus à la
machine d'écrire *sur* le personnage — on lui demande de le **devenir**.

Elle SHALL montrer un **entretien** avec un personnage, question par
question, en progression : une question factuelle, une question
interprétative, puis celle dont la réponse n'était écrite nulle part. Elle
SHALL énoncer que cette dernière réponse est cohérente avec tout sans
provenir d'aucune fiche. Elle SHALL rapporter une **émergence** : un élément
né d'un entretien et entré dans le roman. Elle SHALL se clore par un
retournement sur une question d'auteur **attribuée et sourcée**.

#### Scenario: L'acteur présenté comme second rôle

- **WHEN** on entre dans la section 6
- **THEN** elle présente l'acteur comme le second rôle de la même fabrique,
  et la bascule d'écrire *sur* à *devenir* le personnage

#### Scenario: Entretien en progression

- **WHEN** l'entretien est montré
- **THEN** les questions apparaissent successivement, de la plus factuelle
  à celle dont la réponse n'était écrite nulle part

#### Scenario: Retournement sourcé

- **WHEN** la section 6 se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée
  avec sa source

### Requirement: Section 7 — la récolte

La section 7 SHALL ouvrir sur le **compte à rebours à zéro, seul à
l'écran**, sans autre contenu — c'est le silence le plus long du talk.
Elle SHALL ensuite présenter le chapitre né (son titre et ses mesures :
nombre de mots, scènes du plan accomplies), rappeler le contrat passé en
section 3, puis donner la lecture. Elle SHALL se clore par le retour au
micro : la question « à quel moment avez-vous cessé de m'entendre ? », la
révélation de la voix clonée, et le rapprochement avec la situation de
l'Académie en 1975.

#### Scenario: Le zéro seul à l'écran

- **WHEN** la section 7 s'ouvre
- **THEN** le compte à rebours occupe l'écran seul, sans autre élément de
  contenu

#### Scenario: Chapitre présenté avec ses mesures

- **WHEN** le chapitre est révélé
- **THEN** son titre et ses mesures (mots, scènes) sont affichés,
  authentiques ou en gabarit

#### Scenario: Retour au micro

- **WHEN** la lecture est terminée
- **THEN** une slide pose la question du moment de bascule, révèle que la
  voix était clonée, et rapproche la salle de l'Académie de 1975

### Requirement: Section 8 — la chute

La section 8 SHALL poser un **dernier vote à main levée** sur le chapitre
qui vient d'être lu — septième station du jeu du seuil — puis nommer
l'hésitation de la salle comme étant la démonstration elle-même. Elle SHALL
énoncer le verdict **sur fond noir**, en écho au cold open, avant la sortie
sur les derniers mots de Gary.

#### Scenario: Dernier vote puis hésitation nommée

- **WHEN** on entre dans la section 8
- **THEN** la question « est-ce que c'est mon œuvre ? » est posée, puis
  l'hésitation de la salle est désignée comme la démonstration

#### Scenario: Verdict sur fond noir

- **WHEN** le verdict est affiché
- **THEN** la slide est sur fond noir dans les deux modes, en écho au
  cold open
