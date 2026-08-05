## ADDED Requirements

### Requirement: Layout citation sourcée

Le deck SHALL fournir un layout de **citation sourcée** : la citation en
Sinzano, l'attribution de son auteur, et sa **référence de publication
affichée à l'écran** (titre, numéro, date). La référence NE SHALL PAS être
optionnelle sur ce layout — c'est sa raison d'être.

#### Scenario: Citation avec sa source visible

- **WHEN** une slide utilise le layout de citation sourcée
- **THEN** la citation, son auteur et sa référence de publication sont
  affichés ensemble à l'écran

#### Scenario: Rendu dans les deux modes

- **WHEN** une slide de citation sourcée est basculée entre les deux modes
- **THEN** citation, attribution et référence restent lisibles, couleurs
  issues des tokens
