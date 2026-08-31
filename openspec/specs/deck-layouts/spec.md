# deck-layouts Specification

## Purpose
Catalogue des layouts de présentation custom du deck et leur contrat
d'usage : quelle structure de contenu chaque layout attend, et la règle
commune de consommation exclusive des tokens du design system.
## Requirements
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

### Requirement: Layout diptyque

Le deck SHALL fournir un layout **diptyque** : deux colonnes de même poids,
chacune avec son étiquette, pour comparer deux versions d'un même texte
côte à côte. Il SHALL rester lisible dans les deux modes et tirer ses
couleurs des tokens.

#### Scenario: Deux colonnes étiquetées

- **WHEN** une slide utilise le layout diptyque
- **THEN** les deux versions s'affichent côte à côte, chacune sous son
  étiquette, sans qu'une colonne domine visuellement l'autre

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

### Requirement: Layout noir

Le deck SHALL fournir un layout **noir** qui impose sa propre palette —
fond d'encre, texte papier — **indépendamment du mode actif**. Il sert les
moments où le noir est un choix de mise en scène et non une conséquence du
thème.

#### Scenario: Noir dans les deux modes

- **WHEN** une slide utilise le layout noir, en mode clair comme en mode
  sombre
- **THEN** elle s'affiche sur fond d'encre avec un texte lisible en papier

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

