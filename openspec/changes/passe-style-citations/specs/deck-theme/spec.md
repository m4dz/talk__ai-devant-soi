# deck-theme — delta

## MODIFIED Requirements

### Requirement: Typographie pulp auto-hébergée

Le deck SHALL utiliser Sinzano Regular pour les **titres** et les **citations
en exergue**, et Atkinson Hyperlegible pour le corps de texte. Les deux fontes
MUST être servies depuis les assets du deck (auto-hébergées), jamais depuis un
service distant.

Le corps des **citations sourcées** (layout `citation-sourcee`) SHALL être
composé dans la **police de corps**, pas en Sinzano : parmi les citations,
seule la voix d'**exergue** porte Sinzano. La citation sourcée est traitée
comme une pièce à conviction (voir deck-layouts, « Layout citation sourcée »).

Aucun paragraphe de corps NE SHALL être composé en Sinzano.

#### Scenario: Fontes chargées localement

- **WHEN** le deck est affiché sans accès à Internet
- **THEN** Sinzano et Atkinson Hyperlegible s'affichent correctement,
  sans police de repli système

#### Scenario: Sinzano réservé aux titres et à l'exergue

- **WHEN** une citation sourcée et une citation en exergue sont comparées
- **THEN** l'exergue est en Sinzano et le corps de la citation sourcée est en
  police de corps
