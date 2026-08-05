# deck-export Specification

## Purpose
Export du deck en PDF de support distribué après le talk : mode
papier/light, une slide par page, produit entièrement en local.
## Requirements
### Requirement: Export PDF en mode papier/light

Le deck SHALL pouvoir être exporté en PDF dans le **mode clair**
(papier crème / encre), quel que soit le mode actif à la présentation. Le
PDF SHALL contenir **une slide par page**, dans l'ordre du déroulé.

#### Scenario: PDF clair, une slide par page

- **WHEN** on exporte le deck en PDF
- **THEN** le fichier produit est en mode papier/light, avec une page par
  slide dans l'ordre des sections

### Requirement: Export hors-ligne

L'export SHALL s'effectuer entièrement en local (moteur de rendu embarqué),
sans aucune requête réseau externe.

#### Scenario: Export sans réseau externe

- **WHEN** on lance l'export avec le réseau externe coupé
- **THEN** le PDF est produit sans erreur et sans requête vers un domaine
  externe

### Requirement: Lisibilité du support

Le PDF SHALL être lisible en impression et à l'écran : titres Sinzano,
corps Atkinson et accent rouge rendus avec un contraste suffisant sur le
fond papier.

#### Scenario: Contenu lisible dans le PDF

- **WHEN** on ouvre le PDF exporté
- **THEN** titres, corps et accent sont lisibles et fidèles à la palette
  claire

