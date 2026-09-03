# deck-content — delta

## MODIFIED Requirements

### Requirement: Le mode personnage, culmination du geste Racter

La section 5, le mode personnage, SHALL suivre immédiatement le geste **Racter**
de la fabrique, comme sa **culmination** : Racter y ouvre la référence (machine
« créditée auteur », en fait curée par l'humain) avec **son illustration
réintroduite**, puis l'**entretien rejoué** — pré-généré et embarqué, jamais
live — **est** l'artefact de ce geste. On ne
demande plus à la machine d'écrire *sur* le personnage, on lui demande de le
**devenir**. Le personnage interrogé SHALL être **Judith**.

Il SHALL montrer un **entretien** avec ce personnage comprenant trois questions
**dans l'ordre** : une question factuelle, puis une question interprétative,
puis une question existentielle. Les trois échanges SHALL être **affichés
ensemble à l'entrée de la slide** (pas de dévoilement au pas de clic). (Décision
2026-09-03, run INT-c : la paire d'origine est étendue à trois questions, la
troisième — sur la nature de sa réalité — recevant un refus de comprendre, qui
est lui-même un geste de non-résolution.)

Il NE SHALL PAS rapporter d'**émergence** — aucun élément né d'un entretien et
entré dans le roman n'est documenté. À la place, il SHALL énoncer que rien n'a
émergé et que tout a été **composé et sélectionné**.

Il SHALL se clore par un retournement sur une question d'auteur **attribuée et
sourcée**.

#### Scenario: L'acteur en culmination du geste Racter

- **WHEN** on entre dans le mode personnage
- **THEN** il suit le geste Racter, réintroduit sa référence et son
  illustration, et présente la bascule d'écrire *sur* à *devenir* le personnage

#### Scenario: Entretien à trois questions

- **WHEN** l'entretien est montré
- **THEN** les trois questions sont présentées **ensemble à l'entrée de la
  slide**, dans l'ordre factuelle puis interprétative puis existentielle, et
  aucune quatrième n'est présentée

#### Scenario: Aucune émergence affirmée

- **WHEN** on parcourt le mode personnage
- **THEN** aucune slide n'affirme qu'un élément produit par la machine est entré
  dans le roman, et une slide énonce que rien n'a émergé, tout composé

#### Scenario: Retournement sourcé

- **WHEN** le mode personnage se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée avec
  sa source
