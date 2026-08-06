## ADDED Requirements

### Requirement: Layout diptyque

Le deck SHALL fournir un layout **diptyque** : deux colonnes de même poids,
chacune avec son étiquette, pour comparer deux versions d'un même texte
côte à côte. Il SHALL rester lisible dans les deux modes et tirer ses
couleurs des tokens.

#### Scenario: Deux colonnes étiquetées

- **WHEN** une slide utilise le layout diptyque
- **THEN** les deux versions s'affichent côte à côte, chacune sous son
  étiquette, sans qu'une colonne domine visuellement l'autre
