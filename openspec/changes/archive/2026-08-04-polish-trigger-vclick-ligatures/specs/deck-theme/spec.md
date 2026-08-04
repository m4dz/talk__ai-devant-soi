## ADDED Requirements

### Requirement: Ligatures Sinzano préservées

Le rendu des titres et citations en Sinzano SHALL préserver les ligatures
imbriquées de la fonte : aucune règle de style NE SHALL appliquer de
`letter-spacing` (tracking) sur les éléments composés en Sinzano.

#### Scenario: Titre sans tracking

- **WHEN** un titre ou une citation est composé en Sinzano
- **THEN** aucun espacement inter-lettres additionnel n'est appliqué, et
  les ligatures de la fonte s'affichent
