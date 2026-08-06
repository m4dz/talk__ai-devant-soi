# deck-placeholders Specification

## Purpose
Marquage des contenus en attente dans le deck : une slide dont le contenu
définitif n'existe pas encore doit le dire, visiblement et de façon
inventoriable, plutôt que d'afficher un contenu inventé qui passerait pour
réel.
## Requirements
### Requirement: Gabarit visible pour contenu en attente

Une slide dont le contenu définitif n'est pas encore disponible SHALL
afficher un **marqueur de gabarit** visible, indiquant ce qui manque. Le
deck NE SHALL PAS présenter de contenu inventé (faux extrait, fausse
mesure, faux verbatim) comme s'il était authentique.

#### Scenario: Slide en attente signalée

- **WHEN** on affiche une slide dont le contenu réel n'est pas encore
  intégré
- **THEN** un marqueur de gabarit indique visiblement ce qui reste à
  fournir

#### Scenario: Aucun faux contenu

- **WHEN** un contenu authentique (extrait, mesure, verbatim) manque
- **THEN** la slide affiche le gabarit plutôt qu'un contenu fabriqué
  ressemblant à du réel

### Requirement: Inventaire des gabarits

Les marqueurs de gabarit SHALL être repérables par une recherche textuelle
sur les sources du deck, afin de tenir l'inventaire de ce qui reste à
fournir avant le gel du contenu.

#### Scenario: Inventaire par recherche

- **WHEN** on recherche le marqueur de gabarit dans les sources
- **THEN** on obtient la liste exhaustive des slides en attente de contenu

