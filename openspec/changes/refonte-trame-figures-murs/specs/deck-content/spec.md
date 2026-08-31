## MODIFIED Requirements

### Requirement: Jeu du seuil à intervention décroissante

La section 4 SHALL présenter **cinq** cas historiques, un par slide, dans
l'ordre d'intervention humaine décroissante : Dumas/Maquet, Carver/Lish,
Ern Malley, Oulipo, Racter.

Chaque station SHALL porter à l'écran **la question du jeu** qui lui
correspond (« est-ce encore l'œuvre de… ? ») : c'est elle qui déclenche le
vote à main levée, mécanique centrale de la section.

Chacune des cinq figures SHALL être **reprise nominativement** dans la
section 5, au moment où le mur qu'elle nomme est franchi ou nommé — à
l'exception de Racter, repris en section 8 dans le verdict. La galerie
historique de la section 4 n'est donc pas autonome : elle **plante** des
noms que la descente **récolte**.

La section SHALL se clore par un **renversement** — l'énoncé qu'il n'existe
pas de seuil à partir duquel l'œuvre cesse d'appartenir à son auteur, et la
mise en échec de la clause d'originalité posée en section 2 — puis par un
**pont** vers l'ouverture de la fabrique.

#### Scenario: Cinq cas dans l'ordre

- **WHEN** on parcourt la section 4
- **THEN** les cinq cas apparaissent chacun sur sa slide, dans l'ordre
  d'intervention humaine décroissante indiqué, et aucune station Vian/Vernon
  Sullivan n'est présente

#### Scenario: Question du jeu à chaque station

- **WHEN** une station du jeu du seuil est affichée
- **THEN** la question posée à la salle pour ce cas est visible à l'écran

#### Scenario: Chaque figure est reprise plus tard

- **WHEN** on parcourt les sections 5 et 8
- **THEN** chacune des cinq figures de la section 4 y est nommée une fois,
  attachée au mur ou au verdict qu'elle désigne

#### Scenario: Renversement puis pont

- **WHEN** on atteint la fin de la section 4
- **THEN** une slide énonce qu'il n'existe pas de seuil, une autre montre
  que la clause d'originalité ne décrit aucun des cas vus, et une dernière
  fait le pont vers la descente dans la fabrique

### Requirement: Descente dans la fabrique en quatre strates ternaires

La section 5 SHALL présenter quatre strates techniques : le modèle ignore le
lore, il perd l'intention narrative, la qualité littéraire est pauvre et les
instruments qui la mesurent mentent, et **le mur qu'on ne peut pas acheter**
— la machine s'effondre sous un modèle plus lourd, et un modèle plus lourd
ne tiendrait pas davantage le doute qu'il faut tenir.

Chaque strate SHALL suivre le même **pattern ternaire**, dans cet ordre :

1. une **pièce à conviction** — l'extrait raté, la grille de vérification ou
   les mesures qui prouvent le mur (marquée en gabarit tant que le contenu
   authentique n'existe pas) ;
2. le **mur**, dont l'intitulé NOMME LE PROBLÈME rencontré, suivi de ce que
   ce mur a forcé à construire ;
3. l'**aphorisme** de la strate — sa phrase à emporter — **seul sur sa
   slide**.

Ce pattern SHALL être identique pour les quatre strates et **indépendant de
leur ordre** : permuter des strates NE SHALL PAS exiger de retoucher leur
composition. L'intitulé d'un mur NE SHALL PAS livrer l'aphorisme de sa
strate : la conclusion n'apparaît qu'après la solution.

**Exception au pattern, portée par la dernière strate uniquement.** Le
troisième battement du dernier mur NE SHALL PAS énoncer une construction
victorieuse : il SHALL constater qu'il a fallu **empêcher** le modèle de
résoudre. Un talk dont la thèse est que résoudre est le défaut de la machine
ne peut pas offrir quatre résolutions de forme sur quatre. Cette exception
SHALL rester attachée à la dernière strate quel que soit l'ordre.

La **devise de la section** SHALL être portée par la section elle-même et non
par l'une des strates, afin de rester en place quel que soit l'ordre. Elle
SHALL être suivie d'une **remontée** qui rouvre la boîte noire et énumère ce
qu'elle contient, avant de relancer vers la section suivante.

Les éléments qui dépendent du contenu d'une strate SHALL rester attachés à
elle et la suivre en cas de permutation — en particulier le rappel implicite
à l'affaire Gary, qui n'a de sens qu'après la strate de la qualité.

#### Scenario: Quatre strates au même pattern

- **WHEN** on parcourt la section 5
- **THEN** chacune des quatre strates présente successivement sa pièce à
  conviction, son mur et son aphorisme seul

#### Scenario: Chaque strate montre sa pièce à conviction

- **WHEN** une strate est présentée
- **THEN** une slide affiche la preuve du mur (extrait raté, grille ou
  mesures), authentique ou marquée en gabarit si elle n'existe pas encore

#### Scenario: L'intitulé du mur ne livre pas la conclusion

- **WHEN** un mur est affiché
- **THEN** son intitulé nomme le problème rencontré, et l'aphorisme de la
  strate n'apparaît qu'ensuite, sur sa propre slide

#### Scenario: Le dernier mur ne résout pas

- **WHEN** on atteint le troisième battement de la dernière strate
- **THEN** il énonce que le doute ne tient que parce que le code a interdit
  au modèle de le résoudre, et n'affirme aucune victoire du modèle

#### Scenario: Permutation sans retouche

- **WHEN** l'ordre des strates est modifié
- **THEN** chaque strate conserve sa composition et ses éléments attachés,
  et la devise de section reste en fin de section

#### Scenario: Devise puis remontée

- **WHEN** on atteint la fin de la section 5
- **THEN** la devise de la section est énoncée, puis la remontée détaille le
  contenu de la boîte noire et relance vers la suite

### Requirement: Section 6 — le mode personnage

La section 6 SHALL présenter le second rôle de la fabrique, l'**acteur** :
même mémoire et mêmes fiches que l'auteur, mais on ne demande plus à la
machine d'écrire *sur* le personnage — on lui demande de le **devenir**.

Elle SHALL montrer un **entretien** avec un personnage, question par
question, en progression : une question factuelle, puis une question
interprétative.

Elle NE SHALL PAS rapporter d'**émergence** — aucun élément né d'un entretien
et entré dans le roman n'est documenté, et la section ne SHALL PAS en
présenter un reconstruit ou emprunté à une autre partie du dispositif. À la
place, elle SHALL énoncer que rien n'a émergé et que tout a été composé.

Elle SHALL se clore par un retournement sur une question d'auteur
**attribuée et sourcée**.

#### Scenario: L'acteur présenté comme second rôle

- **WHEN** on entre dans la section 6
- **THEN** elle présente l'acteur comme le second rôle de la même fabrique,
  et la bascule d'écrire *sur* à *devenir* le personnage

#### Scenario: Entretien à deux questions

- **WHEN** l'entretien est montré
- **THEN** deux questions apparaissent successivement, la factuelle puis
  l'interprétative, et aucune troisième question n'est présentée

#### Scenario: Aucune émergence affirmée

- **WHEN** on parcourt la section 6
- **THEN** aucune slide n'affirme qu'un élément produit par la machine est
  entré dans le roman, et une slide énonce que rien n'a émergé

#### Scenario: Retournement sourcé

- **WHEN** la section 6 se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée
  avec sa source

### Requirement: Illustrations des slides récit

Les slides récit SHALL porter une illustration pulp cohérente : chacun des
**cinq** cas du jeu du seuil SHALL présenter son portrait (buste ou
objet-figure), et le cold-open SHALL porter des ambiances. Les slides
argument NE SHALL PAS porter d'illustration. Toutes les illustrations
SHALL provenir de la génération locale, dans le style figé, et être
embarquées (hors-ligne).

#### Scenario: Chaque cas porte son portrait

- **WHEN** on parcourt la section 4 (jeu du seuil)
- **THEN** chacun des cinq cas affiche une illustration pulp qui lui est
  propre, dans le style commun

#### Scenario: Slides argument sans illustration

- **WHEN** on affiche une slide argument
- **THEN** elle ne porte aucune illustration, restant typographique

## ADDED Requirements

### Requirement: La contrainte locale est le cadre de la descente, pas une strate

Le deck SHALL énoncer la contrainte « rien ne sort de cette pièce » à
**l'entrée** de la section 5 et la reprendre à la **remontée**, comme ce qui
a **produit** les quatre murs — et non comme l'un d'eux.

Aucune strate NE SHALL porter cette contrainte comme thèse propre. Le
matériau qui l'illustrait (les chiffres du crash, la sortie de secours par
clé d'API) SHALL être servi à l'intérieur du dernier mur, comme premier
étage de l'objection « prenez un modèle plus gros ».

#### Scenario: Cadre à l'entrée et à la remontée

- **WHEN** on entre dans la section 5, puis quand on atteint la remontée
- **THEN** la contrainte locale est énoncée aux deux endroits, présentée
  comme la cause des murs

#### Scenario: Aucune strate ne porte la contrainte

- **WHEN** on parcourt les quatre strates
- **THEN** aucune n'a la contrainte locale pour aphorisme ou pour intitulé
  de mur

### Requirement: Le contenu du dernier mur est gelé sous condition

Le dernier mur SHALL rester en **gabarit** tant que le run de falsification
mené côté stack n'a pas tranché entre ses **quatre** issues : la résolution est
un défaut d'alignement commun à tout modèle instruit, un défaut de capacité du
modèle employé, un artefact du brief servi, ou **une conséquence de l'identité
du personnage** — la narratrice est une correctrice dont le métier servi est de
rendre des verdicts, et la machine résout parce qu'elle l'incarne correctement.

Le deck NE SHALL PAS traiter cette dernière issue comme un repli : elle est
**au moins équivalente** aux autres pour la thèse, puisqu'elle dit que l'auteur
a dû coder contre sa propre créature. L'issue retenue SHALL être celle que le
run désigne, sans préférence par défaut pour l'énoncé le plus général.

Le deck SHALL porter la structure du mur (pièce à conviction, intitulé,
troisième battement non résolutif) sans figer son texte, et le gabarit SHALL
être repérable par l'inventaire des gabarits.

#### Scenario: Gabarit repérable tant que le run n'a pas tranché

- **WHEN** on recherche les marqueurs de gabarit dans les sources
- **THEN** le contenu du dernier mur figure dans l'inventaire des slides en
  attente

#### Scenario: La structure existe sans le texte

- **WHEN** on parcourt le dernier mur avant le run
- **THEN** ses trois battements sont présents et navigables, le texte
  définitif étant marqué en attente

#### Scenario: L'issue « identité du personnage » n'est pas dégradée

- **WHEN** le run désigne l'identité du personnage comme cause de la
  résolution
- **THEN** le dernier mur est écrit sur cette issue à pleine longueur, sans
  formulation qui la présente comme un résultat par défaut ou amoindri

### Requirement: Aucune émergence affirmée nulle part dans le deck

Le deck NE SHALL JAMAIS affirmer qu'un élément produit spontanément par la
machine est entré dans le roman. Aucun tel élément n'est documenté : le
candidat le plus cité, la « seconde assiette », figurait en **matériau
imposé** dans le brief de calibration du chapitre 2 servi au modèle.

Toute slide traitant de ce que la machine apporte SHALL le présenter comme
**composé** — produit par le dispositif et retenu par une sélection — jamais
comme émergent.

#### Scenario: Pas d'émergence affirmée

- **WHEN** on parcourt le deck de bout en bout
- **THEN** aucune slide n'affirme qu'un élément inventé par la machine est
  entré dans le roman

#### Scenario: L'apport est présenté comme composé

- **WHEN** une slide traite de ce que la machine apporte au roman
- **THEN** elle le présente comme le résultat d'une composition et d'une
  sélection, en nommant qui a sélectionné
