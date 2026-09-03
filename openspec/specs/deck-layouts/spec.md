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

Le deck SHALL fournir un layout `exergue` pour les moments où une seule
phrase occupe la slide, en Sinzano, centrée, avec attribution optionnelle de
la source.

`exergue` SHALL accepter un **variant décrivant le rôle du moment** — et non
la longueur du texte :

- `titre` — le titre du talk lui-même ;
- `aphorisme` (défaut) — la phrase à emporter d'une strate ou d'une section ;
- `chute` — les derniers mots, qui closent le talk.

Ces rôles SHALL recevoir des traitements typographiques distincts : deux
moments de poids différent NE SHALL PAS s'afficher à l'identique. En
particulier, le titre du talk et les derniers mots NE SHALL PAS partager le
traitement des aphorismes de strate.

Le variant `aphorisme` SHALL conserver le traitement existant, afin que les
slides déjà réglées ne bougent pas.

#### Scenario: Citation centrée en Sinzano

- **WHEN** une slide utilise le layout `exergue`
- **THEN** la citation s'affiche en Sinzano, centrée, avec la source en
  attribution si fournie

#### Scenario: Trois rôles de moment distincts

- **WHEN** on compare une slide `titre`, une slide `aphorisme` et une slide
  `chute`
- **THEN** les trois traitements se distinguent à l'œil, et aucun ne se
  confond avec un autre

#### Scenario: Les aphorismes déjà réglés ne bougent pas

- **WHEN** une slide `exergue` ne déclare aucun variant
- **THEN** elle s'affiche exactement comme avant l'introduction des variants

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

### Requirement: Inversion de valeur relative au mode

Le deck SHALL fournir un **modificateur d'inversion de valeur**, applicable à
n'importe quelle slide par sa seule déclaration de classe et sans changer de
layout.

L'inversion SHALL procéder par **échange des tokens de valeur** (papier,
encre, filet, texte atténué) sur la slide, et non par des couleurs écrites en
dur : elle traverse ainsi tout layout qui consomme les tokens, sans qu'aucun
layout soit modifié.

L'inversion SHALL être **relative au mode actif** : sur fond papier elle rend
une slide d'encre, sur fond d'encre une slide papier. Une slide inversée NE
SHALL JAMAIS se confondre avec le fond courant du deck, quel que soit le mode.

#### Scenario: Contraste garanti dans les deux modes

- **WHEN** une slide porte le modificateur d'inversion, en mode clair puis en
  mode sombre
- **THEN** dans chaque mode elle s'affiche en valeur opposée au reste du deck,
  et le moment scénique se lit dans les deux

#### Scenario: L'inversion traverse les layouts

- **WHEN** le modificateur est posé sur des slides de layouts différents
- **THEN** chacune s'inverse correctement sans modification de son layout,
  parce que l'inversion agit sur les tokens et non sur le layout

#### Scenario: Ce que l'inversion ne traverse pas

- **WHEN** une slide inversée porte une illustration pulp ou un fond
  d'ambiance
- **THEN** l'illustration conserve sa valeur propre (l'objet crème documenté
  dans le style figé), et le contraste résultant est vérifié à l'œil

### Requirement: Layout entretien

Le deck SHALL fournir un layout pour l'**entretien rejoué** de la section 6,
qui présente une suite de questions typées et leurs réponses. C'est le corps
le plus dense du deck : le layout SHALL structurer cette densité — chaque
question distinguée de sa réponse, chaque type de question identifiable — au
lieu de laisser couler un bloc de texte.

Il SHALL être compatible avec le marquage gabarit, le contenu authentique de
l'entretien n'existant pas encore.

#### Scenario: Questions typées et distinguées

- **WHEN** la slide d'entretien est affichée
- **THEN** chaque question se distingue de sa réponse et porte son type, sans
  former un seul bloc de texte

### Requirement: Aucune slide sans traitement

Aucune slide du deck NE SHALL rester sur le layout par défaut de Slidev :
chaque slide SHALL déclarer un layout du thème. Les slides qui n'existent que
pour accueillir un composant live SHALL recevoir un traitement scénique,
plutôt que d'apparaître comme des slides inachevées.

#### Scenario: Inventaire sans layout par défaut

- **WHEN** on inventorie les layouts de toutes les slides du deck
- **THEN** aucune n'utilise le layout par défaut

#### Scenario: Slot de composant traité

- **WHEN** une slide accueille un composant live (décompte, lecteur de
  chapitre)
- **THEN** elle porte un layout du thème et se présente comme une slide
  composée, non comme une slide vide

### Requirement: Layout signature

Le deck SHALL fournir un layout `signature` pour la slide d'identité du
speaker : une illustration-objet à **gauche** et le corps du propos à droite.

Ce layout SHALL hériter visuellement du traitement d'un cas illustré — même
composant d'objet crème, même disposition en colonnes, mêmes tokens
d'espacement, même plafond de hauteur sur l'objet — **sans** réutiliser le
modèle de contenu d'un cas (nom, œuvre, équilibre, question), qui ne
s'applique pas à la signature.

Le corps SHALL être fourni en slot, pour que la slide existante n'ait à
changer que sa déclaration de layout.

Le titre SHALL rester sur une composition tenable lorsque l'objet occupe sa
colonne : sa taille SHALL être réduite en présence d'une figure, comme le fait
déjà le layout de cas.

#### Scenario: Objet à gauche, propos à droite

- **WHEN** la slide de signature est affichée
- **THEN** le portrait apparaît en objet crème à gauche et le corps du propos
  à droite, dans les deux modes

#### Scenario: Air de famille avec la galerie

- **WHEN** la slide de signature est comparée à une slide de cas illustrée
- **THEN** l'objet est traité de la même façon (cadre, ombre, tilt stable,
  hauteur), sans que la slide expose les champs propres à un cas

### Requirement: Slide d'attente

Le deck SHALL ouvrir sur une slide d'attente, affichée avant le premier beat
du récit, destinée à tourner pendant l'installation de la salle et à couvrir
l'entrée du speaker.

Son motif SHALL être un tracé vectoriel, non une image générée : une ligne
traversant le cadre au tiers inférieur, portant **un seul battement**,
parcourue par un **spot lumineux d'oscilloscope** — un curseur en tête d'une
courte traîne — qui balaie le cadre de gauche à droite en boucle. Le tracé
n'est PAS persistant : le spot l'écrit en le traversant et la traîne s'éteint
derrière lui — l'écran est vide devant le spot et redevient vide derrière la
traîne.

Le spot et sa traîne SHALL rouler sur **le même chemin** (même géométrie, même
`pathLength`), de sorte qu'ils restent synchronisés sur toute forme — plate ou
battante.

Le tracé SHALL déborder le cadre de part et d'autre, de sorte que l'entrée du
spot par la gauche et son retour de balayage se produisent **hors champ**,
découpés par le viewport : aucun fondu ni saut visible au bouclage.

Le tracé et le spot SHALL être composés de tokens (accent pour le trait vif,
fond issu du mode), en un seul fichier, sans couleur codée en dur. Le battement
SHALL rester le seul motif de la slide. Le tracé NE SHALL PAS porter de trame
halftone : un faisceau d'oscilloscope rayonne (halo), il ne s'imprime pas — et
le fond de la slide porte déjà la trame de la série. Le halo NE SHALL PAS être
obtenu par un mode de fusion, proscrit sur les surfaces du deck.

La slide d'attente SHALL s'afficher en **mode sombre absolu**, indépendamment
du mode global du deck (voir deck-theme, « Sombre absolu opt-in par slide ») :
c'est une slide-instrument, sur fond d'encre par principe. Elle déroge donc au
principe des deux modes, qui reste la règle pour toute autre slide.

L'animation SHALL être armée à l'entrée sur la slide et désarmée à la sortie :
aucune animation NE SHALL continuer à tourner sur une slide inactive, toutes
les slides étant montées en permanence.

L'arrêt du battement SHALL être déclenché par un pas de clic de présentation
(télécommande), jamais par un raccourci clavier ni par un minutage. Au clic, le
battement disparaît mais **le balayage continue** sur une ligne devenue plate :
l'oscilloscope tourne toujours, il n'écrit plus qu'un plat.

#### Scenario: Attente affichée avant le récit

- **WHEN** le deck est ouvert au début
- **THEN** la première slide est la slide d'attente, et le premier beat du
  récit vient après elle

#### Scenario: Deux modes sans second fichier

- **WHEN** le deck est basculé entre mode clair et mode sombre
- **THEN** la slide d'attente reste sur fond d'encre dans les deux cas (sombre
  absolu, voir deck-theme), sans ressource supplémentaire ni couleur codée en
  dur — spot et traîne en accent, tracé et fond en tokens

#### Scenario: Bouclage sans saut visible

- **WHEN** le spot achève un balayage et repart de la gauche
- **THEN** l'entrée et le retour se font hors du cadre, sans fondu ni saut
  perceptible à l'écran

#### Scenario: Animation désarmée hors de la slide

- **WHEN** la présentation a quitté la slide d'attente
- **THEN** aucune animation de cette slide ne continue à s'exécuter

#### Scenario: Arrêt du battement à la télécommande

- **WHEN** le speaker avance d'un pas de clic sur la slide d'attente
- **THEN** le battement disparaît et le balayage se poursuit sur une ligne
  devenue plate

### Requirement: Layout ambiance et placement du texte

Le deck SHALL fournir un layout `ambiance` qui rend une illustration en fond
perdu, avec bascule de source selon le mode.

Ce layout SHALL offrir deux placements du texte, choisis en frontmatter :

- un **bandeau en bas**, pleine largeur, dimensionné pour quelques lignes de
  récit — le placement par défaut ;
- une **colonne dans le tiers gauche**, pour les slides qui portent un titre et
  plusieurs blocs, que le bandeau ne peut pas accueillir sans déborder ou sans
  manger l'image.

Le placement en colonne NE SHALL être employé qu'avec un asset dont la
composition réserve effectivement le tiers gauche — c'est-à-dire un asset tiré
avec un prompt de fond perdu, dont la clause de composition laisse cette zone
calme. Cette disponibilité SHALL être vérifiée sur le tirage retenu, pas
supposée depuis le prompt.

La couture entre la colonne et l'image NE SHALL PAS produire de bord franc
visible en projection.

#### Scenario: Bandeau pour un beat de récit

- **WHEN** une slide d'ambiance porte quelques lignes de récit
- **THEN** le texte s'affiche dans un bandeau en bas, lisible par-dessus
  l'image dans les deux modes

#### Scenario: Colonne pour une slide à plusieurs blocs

- **WHEN** une slide d'ambiance porte un titre et plusieurs blocs de texte
- **THEN** le texte s'affiche en colonne dans le tiers gauche, sans recouvrir
  le sujet de l'illustration

#### Scenario: Vérification de la zone calme avant intégration

- **WHEN** un asset est destiné au placement en colonne
- **THEN** l'occupation du tiers gauche est mesurée sur le tirage retenu, et
  l'asset est écarté de ce placement si le sujet y déborde

