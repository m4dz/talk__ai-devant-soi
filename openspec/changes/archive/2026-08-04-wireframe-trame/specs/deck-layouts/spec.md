## Purpose

Catalogue des layouts de présentation custom du deck et leur contrat
d'usage : quelle structure de contenu chaque layout attend, et la règle
commune de consommation exclusive des tokens du design system.

## ADDED Requirements

### Requirement: Layouts pilotés par les tokens

Tout layout custom du deck SHALL tirer ses couleurs, polices, espacements
et tailles exclusivement des tokens du thème (custom properties), sans
valeur codée en dur, et SHALL rendre correctement dans les deux modes
(sombre et clair).

#### Scenario: Rendu dual-mode d'un layout

- **WHEN** une slide utilisant un layout custom est basculée entre mode
  sombre et clair
- **THEN** couleurs, polices et espacements suivent les tokens du mode
  actif, sans élément codé en dur qui casse la palette

### Requirement: Layout cold-open

Le deck SHALL fournir un layout `cold-open` pour le récit noir : texte
court plein cadre, sans ornement de titre de section. Il porte les beats
de la section 1.

#### Scenario: Récit sans chrome de section

- **WHEN** une slide utilise le layout `cold-open`
- **THEN** elle affiche un texte de récit court en plein cadre, sans
  bandeau de titre de section ni numéro de slide proéminent

### Requirement: Layout exergue

Le deck SHALL fournir un layout `exergue` pour les citations en Sinzano,
centrées, avec attribution optionnelle de la source. Il sert la citation
Goncourt (section 2) et les derniers mots de Gary (section 8).

#### Scenario: Citation centrée en Sinzano

- **WHEN** une slide utilise le layout `exergue`
- **THEN** la citation s'affiche en Sinzano, centrée, avec la source en
  attribution si fournie

### Requirement: Layout case-card

Le deck SHALL fournir un layout `case-card` pour un cas du jeu du seuil,
exposant : le nom, l'œuvre, la part d'intervention humaine vs machine, et
une ligne de contexte.

#### Scenario: Structure d'un cas

- **WHEN** une slide utilise le layout `case-card`
- **THEN** elle présente le nom, l'œuvre, l'équilibre humain/machine et
  une ligne de contexte de façon distincte et lisible

### Requirement: Layout wall

Le deck SHALL fournir un layout `wall` pour un mur technique, exposant un
numéro d'ordre, l'énoncé du problème et la solution qui ouvre le mur
suivant.

#### Scenario: Structure d'un mur

- **WHEN** une slide utilise le layout `wall`
- **THEN** elle présente le numéro du mur, le problème rencontré et la
  solution associée
