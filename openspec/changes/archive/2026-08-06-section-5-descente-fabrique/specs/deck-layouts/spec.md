## ADDED Requirements

### Requirement: Layout pièce à conviction

Le deck SHALL fournir un layout **pièce à conviction** : un intitulé de ce
qu'on montre, un bloc de preuve mis en évidence (extrait, grille, mesures),
et un commentaire court sous le bloc. Il SHALL rendre correctement un
contenu authentique comme un contenu marqué en gabarit, dans les deux modes.

#### Scenario: Preuve mise en évidence

- **WHEN** une slide utilise le layout pièce à conviction
- **THEN** le bloc de preuve se distingue clairement de son intitulé et de
  son commentaire

#### Scenario: Compatible gabarit

- **WHEN** la preuve authentique n'existe pas encore
- **THEN** le layout accueille un marqueur de gabarit sans perdre sa mise
  en page
