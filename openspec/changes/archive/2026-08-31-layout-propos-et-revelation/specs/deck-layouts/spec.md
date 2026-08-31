## ADDED Requirements

### Requirement: Layout propos et ses variantes

Le deck SHALL fournir un layout **propos** pour ce que le speaker adresse à
la salle, décliné en trois variantes qui décrivent la forme du **corps** —
le titre restant libre, y compris interrogatif :

- **plain** : un énoncé et son développement ;
- **question** : la question domine visuellement, le corps reste minimal, et
  l'espace laissé vide sous la phrase EST un élément de composition, pas un
  défaut de remplissage ;
- **inventaire** : une liste anaphorique dont les entrées sont visuellement
  parallèles (même alignement, même poids), avec une chute optionnelle en
  accent.

Toutes les variantes SHALL tirer leurs couleurs et leurs tailles des tokens
et rendre correctement dans les deux modes.

#### Scenario: Trois formes distinctes

- **WHEN** trois slides utilisent respectivement les variantes plain,
  question et inventaire
- **THEN** leur composition diffère visiblement : développement pour plain,
  domination de la question et vide assumé pour question, entrées parallèles
  pour inventaire

#### Scenario: Titre interrogatif avec corps en inventaire

- **WHEN** une slide porte une question en titre et une liste anaphorique en
  corps
- **THEN** la variante inventaire s'applique sans que le titre ait à changer
  de nature

#### Scenario: Rendu dans les deux modes

- **WHEN** une slide en layout propos est basculée entre les deux modes
- **THEN** titre, corps et accent restent lisibles, couleurs issues des tokens
