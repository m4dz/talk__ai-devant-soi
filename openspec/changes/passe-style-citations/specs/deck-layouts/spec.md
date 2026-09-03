# deck-layouts — delta

## MODIFIED Requirements

### Requirement: Layout citation sourcée

Le deck SHALL fournir un layout de **citation sourcée** : la citation en
Sinzano, l'attribution de son auteur, et sa **référence de publication
affichée à l'écran** (titre, numéro, date). La référence NE SHALL PAS être
optionnelle sur ce layout — c'est sa raison d'être.

La mise en page SHALL porter une **hiérarchie typographique délibérée** entre
les trois niveaux : la citation domine, l'attribution la suit, la référence est
présente mais subordonnée. Les trois niveaux SHALL être distingués par des
tokens (taille, graisse, teinte), jamais par des valeurs codées en dur, et le
traitement pulp (trame, accent, ombre) de la slide SHALL être posé en intention
et non hérité par défaut. La respiration (marges, gouttières) SHALL laisser la
citation porter la slide sans surcharge.

#### Scenario: Citation avec sa source visible

- **WHEN** une slide utilise le layout de citation sourcée
- **THEN** la citation, son auteur et sa référence de publication sont
  affichés ensemble à l'écran

#### Scenario: Hiérarchie des trois niveaux

- **WHEN** une slide de citation sourcée est affichée
- **THEN** la citation domine visuellement, l'attribution vient ensuite, et la
  référence reste lisible mais subordonnée, la distinction venant de tokens

#### Scenario: Rendu dans les deux modes

- **WHEN** une slide de citation sourcée est basculée entre les deux modes
- **THEN** citation, attribution et référence restent lisibles, couleurs
  issues des tokens
