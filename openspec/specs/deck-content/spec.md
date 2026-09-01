# deck-content Specification

## Purpose
Définit la structure narrative du deck : les 7 sections, leur ordre, les
beats obligatoires, les emplacements des composants live et les points de
contenu bloqués. Décrit ce que le deck raconte, indépendamment de la mise
en forme.
## Requirements
### Requirement: Sept sections ordonnées

Le deck SHALL présenter sept sections dans cet ordre : (1) cold open
Gary/Ajar, (2) position de l'Académie Goncourt, (3) lancement de la
génération live, (4) la fabrique — fusion de l'ancien jeu du seuil et de la
descente technique, (5) mode personnage, (6) récolte (lecture du chapitre),
(7) clôture. Chaque section SHALL vivre dans son propre fichier sous
`slides/pages/`, importé par l'entrée principale. Les fichiers ne sont pas
renumérotés : `04-jeu-du-seuil.md` a été supprimé et son contenu fusionné
dans `05-descente-technique.md`.

#### Scenario: Navigation de bout en bout

- **WHEN** on parcourt le deck de la première à la dernière slide
- **THEN** les sept sections se succèdent dans l'ordre défini, sans trou
  ni section dupliquée

### Requirement: Cold open in medias res

La section 1 SHALL démarrer directement dans le récit Gary/Ajar façon
thriller noir, **sans slide de titre ni introduction**. Elle SHALL ouvrir
sur la mort de Gary (rue du Bac) et se clore par un **beat de pivot** qui
relie l'affaire Ajar à l'IA au moyen de propos **attribués nominativement
et sourcés** d'un membre de l'Académie Goncourt. Le titre du talk SHALL
n'apparaître qu'à la fin de ce beat de pivot.

#### Scenario: Pas de slide de titre

- **WHEN** le deck est ouvert sur sa première slide
- **THEN** la première slide est un beat de récit, pas une page de titre
  ou de sommaire

#### Scenario: Pivot sourcé vers l'IA

- **WHEN** on atteint le dernier beat du cold open
- **THEN** il présente des propos attribués à un juré nommé et sourcés,
  reliant l'affaire Ajar au risque d'une œuvre assistée par IA, puis le
  titre du talk apparaît

### Requirement: Lancement de la génération à la section 3

La section 3 SHALL contenir l'emplacement du déclencheur de génération et
du compte à rebours (marqués comme slots de composants live). C'est le
point du déroulé où la génération est lancée et le compte à rebours
démarré.

#### Scenario: Slots présents à la section 3

- **WHEN** on atteint la section 3
- **THEN** un emplacement identifiable pour le déclencheur de génération
  et un pour le compte à rebours sont présents sur la slide

### Requirement: La fabrique — chaque figure ouvre son mur

La section 4, « La fabrique », fusionne l'ancien jeu du seuil et l'ancienne
descente technique. Elle SHALL présenter quatre murs techniques, chacun
**ouvert par la figure historique qui le nomme**, dite **une seule fois** à
cet endroit : le modèle ignore le lore (Dumas/Maquet), il perd l'intention
narrative (Queneau/Oulipo), la qualité littéraire est pauvre et les
instruments qui la mesurent mentent (Ern Malley), et **le mur qu'on ne peut
pas acheter** (Carver/Lish) — la machine s'effondre sous un modèle plus
lourd, et un modèle plus lourd ne tiendrait pas davantage le doute qu'il
faut tenir.

Aucune figure NE SHALL être « plantée » dans une galerie préalable pour être
« récoltée » plus tard : le fait historique et la tentative technique qu'il
éclaire SHALL être joués dans le même mouvement. **Racter** n'ouvre aucun
mur : il est réservé au verdict de la chute.

Chaque mur SHALL suivre le même **pattern ternaire**, dans cet ordre :

1. la **figure** et sa **pièce à conviction** — le cas historique qui nomme le
   mur, puis l'extrait raté, la grille de vérification ou les mesures qui
   prouvent le mur (marquée en gabarit tant que le contenu authentique
   n'existe pas) ;
2. le **mur**, dont l'intitulé NOMME LE PROBLÈME rencontré, suivi de ce que ce
   mur a forcé à construire ;
3. l'**aphorisme** du mur — sa phrase à emporter — **seul sur sa slide**.

Ce pattern SHALL être identique pour les quatre murs et **indépendant de leur
ordre** : permuter des murs NE SHALL PAS exiger de retoucher leur composition.
L'intitulé d'un mur NE SHALL PAS livrer l'aphorisme du mur : la conclusion
n'apparaît qu'après la solution.

**Exception au pattern, portée par le dernier mur uniquement.** Le troisième
battement du dernier mur NE SHALL PAS énoncer une construction victorieuse : il
SHALL constater qu'il a fallu **empêcher** le modèle de résoudre. Un talk dont la
thèse est que résoudre est le défaut de la machine ne peut pas offrir quatre
résolutions de forme sur quatre. Cette exception SHALL rester attachée au dernier
mur quel que soit l'ordre. Le dernier mur NE S'OUVRE PAS sur sa figure : Lish le
**referme** (l'ouvrir sur « le style par soustraction » télégraphierait le
piège).

La **devise de la section** SHALL être portée par la section elle-même et non par
l'un des murs, afin de rester en place quel que soit l'ordre. Elle SHALL être
suivie d'une **remontée** qui rouvre la boîte noire et énumère ce qu'elle
contient, avant de relancer vers la suite.

Les éléments qui dépendent du contenu d'un mur SHALL rester attachés à lui et le
suivre en cas de permutation — en particulier le rappel implicite à l'affaire
Gary, qui n'a de sens qu'après le mur de la qualité.

#### Scenario: Chaque mur ouvre sur sa figure

- **WHEN** on entre dans un mur de la fabrique
- **THEN** sa figure historique est nommée à l'ouverture, une seule fois, et
  n'est pas reprise dans une galerie séparée

#### Scenario: Quatre murs au même pattern

- **WHEN** on parcourt la fabrique
- **THEN** chacun des quatre murs présente successivement sa figure et sa pièce
  à conviction, son mur et son aphorisme seul

#### Scenario: Chaque mur montre sa pièce à conviction

- **WHEN** un mur est présenté
- **THEN** une slide affiche la preuve du mur (extrait raté, grille ou mesures),
  authentique ou marquée en gabarit si elle n'existe pas encore

#### Scenario: L'intitulé du mur ne livre pas la conclusion

- **WHEN** un mur est affiché
- **THEN** son intitulé nomme le problème rencontré, et l'aphorisme du mur
  n'apparaît qu'ensuite, sur sa propre slide

#### Scenario: Le dernier mur ne résout pas

- **WHEN** on atteint le troisième battement du dernier mur
- **THEN** il énonce que le doute ne tient que parce que le code a interdit au
  modèle de le résoudre, et n'affirme aucune victoire du modèle

#### Scenario: Permutation sans retouche

- **WHEN** l'ordre des murs est modifié
- **THEN** chaque mur conserve sa composition et ses éléments attachés (figure
  comprise), et la devise de section reste en fin de section

#### Scenario: Devise puis remontée

- **WHEN** on atteint la fin de la fabrique
- **THEN** la devise de la section est énoncée, puis la remontée détaille le
  contenu de la boîte noire et relance vers la suite

### Requirement: Pas de vote à main levée par cas ; accroche unique

Le deck NE SHALL PAS déclencher de vote à main levée par figure, par mur ou en
clôture (« est-ce encore l'œuvre de… ? », « alors, verdict ? »). La mécanique de
vote répété est retirée : elle rejouait la même question et prenait la salle pour
juge à répétition.

Une **accroche mains-levées unique** SHALL être posée une seule fois, tôt dans le
talk (à l'entrée de la fabrique, sur la question centrale), pour installer la
salle en position de jury. La chute SHALL être **sèche** : le chapitre lu à voix
haute est la réponse, et aucun vote final ne le suit.

#### Scenario: Aucun vote répété

- **WHEN** on parcourt le deck de bout en bout
- **THEN** aucune slide ne déclenche de vote à main levée hormis l'accroche
  unique du début, et la chute n'en porte aucun

#### Scenario: Accroche unique en ouverture

- **WHEN** on atteint l'accroche mains-levées
- **THEN** elle apparaît une seule fois, tôt dans le talk, et n'est pas rejouée
  par la suite

### Requirement: La contrainte locale est le cadre de la descente, pas une strate

Le deck SHALL énoncer la contrainte « rien ne sort de cette pièce » à
**l'entrée** de la fabrique et la reprendre à la **remontée**, comme ce qui a
**produit** les quatre murs — et non comme l'un d'eux.

Aucun mur NE SHALL porter cette contrainte comme thèse propre. Le matériau qui
l'illustrait (les chiffres du crash, la sortie de secours par clé d'API) SHALL
être servi à l'intérieur du dernier mur, comme premier étage de l'objection
« prenez un modèle plus gros ».

#### Scenario: Cadre à l'entrée et à la remontée

- **WHEN** on entre dans la fabrique, puis quand on atteint la remontée
- **THEN** la contrainte locale est énoncée aux deux endroits, présentée comme la
  cause des murs

#### Scenario: Aucun mur ne porte la contrainte

- **WHEN** on parcourt les quatre murs
- **THEN** aucun n'a la contrainte locale pour aphorisme ou pour intitulé de mur

### Requirement: Le dernier mur est un renversement dont la cible est le speaker

Le dernier mur SHALL se jouer en trois temps et NE SHALL PAS présenter la
résolution comme un défaut de la machine :

1. **l'accusation** — les verbatims datés et la fiche du personnage, servis de
   sorte que la salle conclue que le modèle est incapable de tenir le doute ;
2. **le renversement** — l'expérience qui casse cette conclusion : les trois
   sources de la consigne de verdict retirées, le personnage conservé, et le
   doute qui tient sur la totalité des tirages ;
3. **l'aveu** — le constat que le mur était dans ce que l'auteur servait à la
   machine, pas dans la machine.

Le deuxième temps SHALL montrer que l'identité du personnage **affleure sans
conclure** — le réflexe de trancher, visible et refusé — c'est-à-dire le geste
même que l'œuvre demande.

Le premier temps SHALL être joué **sans ironie ni signal** : la salle doit
adhérer à la conclusion fausse, sinon le renversement n'a rien à renverser.

#### Scenario: Les trois temps dans l'ordre

- **WHEN** on parcourt le dernier mur
- **THEN** les pièces d'accusation précèdent la pièce d'expérience, qui précède
  l'aphorisme, et aucune slide antérieure n'annonce le renversement

#### Scenario: Aucune imputation à la machine

- **WHEN** le dernier mur se termine
- **THEN** son aphorisme impute le franchissement du seuil à l'auteur, et non au
  modèle

#### Scenario: Le réflexe visible et refusé

- **WHEN** la pièce d'expérience est affichée
- **THEN** elle montre une sortie où le réflexe de trancher est nommé puis non
  suivi d'effet

### Requirement: La contrainte locale se paie à la remontée

La remontée SHALL énoncer que la contrainte locale est **ce qui a rendu la
découverte possible** : l'auteur n'a pu établir que la faute venait de lui que
parce que le modèle, le brief, la fiche et le code lui appartenaient tous.

Cet énoncé SHALL rester à la remontée et NE SHALL PAS être déplacé dans un mur :
c'est le paiement du cadre posé à l'entrée de la section.

#### Scenario: Le cadre est payé, pas répété

- **WHEN** on atteint la remontée
- **THEN** elle relie la contrainte locale à la possibilité même du renversement
  du dernier mur, sans réénoncer l'argument posé à l'entrée

### Requirement: Slot de lecture du chapitre

La section 6 (la récolte) SHALL contenir l'emplacement du lecteur de chapitre
(slot de composant live) et matérialiser le passage de la voix du speaker à la
voix clonée.

#### Scenario: Slot lecteur présent

- **WHEN** on atteint la section 6
- **THEN** un emplacement identifiable pour le lecteur de chapitre est présent

### Requirement: Dernière ligne de clôture

La section 7 (la chute) SHALL se terminer par la ligne exacte : « Je me suis
bien amusé. Au revoir et merci. »

#### Scenario: Derniers mots exacts

- **WHEN** on atteint la dernière slide
- **THEN** elle affiche exactement « Je me suis bien amusé. Au revoir et
  merci. »

### Requirement: Illustrations des slides récit

Les slides récit SHALL porter une illustration pulp cohérente : chacune des
**quatre** figures qui ouvrent un mur de la fabrique SHALL présenter son portrait
(buste ou objet-figure), et le cold-open SHALL porter des ambiances. **Racter**
est nommé au verdict de la chute mais NE SHALL PAS y porter de portrait : la
slide de verdict est délibérément austère (slide d'encre), et une illustration
y contredirait la sobriété de la clôture. Les slides argument NE SHALL PAS porter
d'illustration. Toutes les illustrations SHALL provenir de la génération locale,
dans le style figé, et être embarquées (hors-ligne).

#### Scenario: Chaque figure porte son portrait

- **WHEN** on parcourt la fabrique
- **THEN** chacune des quatre figures de mur affiche son illustration pulp à
  l'ouverture de son mur, dans le style commun

#### Scenario: Le verdict reste austère

- **WHEN** on atteint le verdict de la chute
- **THEN** Racter y est nommé en texte, sans portrait ni illustration

#### Scenario: Slides argument sans illustration

- **WHEN** on affiche une slide argument
- **THEN** elle ne porte aucune illustration, restant typographique

### Requirement: Aucune position d'Académie affirmée

Le deck NE SHALL JAMAIS affirmer que l'Académie Goncourt annonce, refuse,
interdit ou réglemente quoi que ce soit au sujet de l'IA — aucune position
officielle de ce type n'existe. Toute affirmation sur ce terrain SHALL être
un propos **attribué à une personne nommée**, ou une **clause d'éditeur**,
et SHALL afficher sa source à l'écran.

#### Scenario: Propos attribué et sourcé, jamais institutionnel

- **WHEN** une slide traite de la position sur l'IA côté Goncourt ou
  édition
- **THEN** elle attribue les propos à une personne ou une maison nommée et
  affiche la source (publication, numéro, date), sans jamais présenter une
  décision de l'Académie

### Requirement: Section 2 — pivot argumentatif

La section 2 SHALL présenter, dans l'ordre : les propos sourcés du juré
(peur et aveu d'impuissance), la **clause d'originalité** des éditeurs
(l'œuvre cédée doit être produite par l'auteur et non par une machine), et
la **question centrale du talk** — peut-on tracer la limite entre une
œuvre et sa fabrique. Elle SHALL se clore par l'identité du speaker.

#### Scenario: Enchaînement peur → clause → question

- **WHEN** on parcourt la section 2
- **THEN** les propos sourcés, la clause éditoriale et la question centrale
  apparaissent dans cet ordre, suivis de la signature du speaker

### Requirement: Section 3 — roman et contrat du compteur

La section 3 SHALL nommer le roman de démonstration et donner son accroche
d'univers, puis lancer la génération, puis énoncer le **contrat du compte
à rebours** : à zéro, un chapitre inédit existera, que personne n'a lu.

#### Scenario: Roman nommé avant le lancement

- **WHEN** on parcourt la section 3
- **THEN** le roman est nommé avec son accroche avant la slide de lancement

#### Scenario: Contrat du compteur énoncé

- **WHEN** le compte à rebours est lancé
- **THEN** la slide suivante énonce ce qui existera à zéro (un chapitre
  inédit, non lu)

### Requirement: Le mode personnage, culmination collée au dernier mur

La section 5, le mode personnage, SHALL suivre immédiatement le dernier mur de
la fabrique, comme sa **culmination** et non comme un pont ornemental autonome :
il révèle le mécanisme du mur Lish — on ne demande plus à la machine d'écrire
*sur* le personnage, on lui demande de le **devenir**. Judith, objet de
l'accusation au dernier mur, devient ici le sujet qu'on interroge.

Il SHALL montrer un **entretien** avec ce personnage, question par question, en
progression : une question factuelle, puis une question interprétative.

Il NE SHALL PAS rapporter d'**émergence** — aucun élément né d'un entretien et
entré dans le roman n'est documenté, et la section ne SHALL PAS en présenter un
reconstruit ou emprunté à une autre partie du dispositif. À la place, elle SHALL
énoncer que rien n'a émergé et que tout a été composé.

Il SHALL se clore par un retournement sur une question d'auteur **attribuée et
sourcée**.

#### Scenario: L'acteur en culmination du dernier mur

- **WHEN** on entre dans le mode personnage
- **THEN** il suit le dernier mur et présente la bascule d'écrire *sur* à
  *devenir* le personnage comme le mécanisme du mur qui précède

#### Scenario: Entretien à deux questions

- **WHEN** l'entretien est montré
- **THEN** deux questions apparaissent successivement, la factuelle puis
  l'interprétative, et aucune troisième question n'est présentée

#### Scenario: Aucune émergence affirmée

- **WHEN** on parcourt le mode personnage
- **THEN** aucune slide n'affirme qu'un élément produit par la machine est entré
  dans le roman, et une slide énonce que rien n'a émergé

#### Scenario: Retournement sourcé

- **WHEN** le mode personnage se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée avec
  sa source

### Requirement: Aucune émergence affirmée nulle part dans le deck

Le deck NE SHALL JAMAIS affirmer qu'un élément produit spontanément par la
machine est entré dans le roman. Aucun tel élément n'est documenté : le candidat
le plus cité, la « seconde assiette », figurait en **matériau imposé** dans le
brief de calibration du chapitre 2 servi au modèle.

Toute slide traitant de ce que la machine apporte SHALL le présenter comme
**composé** — produit par le dispositif et retenu par une sélection — jamais
comme émergent.

#### Scenario: Pas d'émergence affirmée

- **WHEN** on parcourt le deck de bout en bout
- **THEN** aucune slide n'affirme qu'un élément inventé par la machine est entré
  dans le roman

#### Scenario: L'apport est présenté comme composé

- **WHEN** une slide traite de ce que la machine apporte au roman
- **THEN** elle le présente comme le résultat d'une composition et d'une
  sélection, en nommant qui a sélectionné

### Requirement: Section 6 — la récolte

La section 6 SHALL ouvrir sur le **compte à rebours à zéro, seul à
l'écran**, sans autre contenu — c'est le silence le plus long du talk.
Elle SHALL ensuite présenter le chapitre né (son titre et ses mesures :
nombre de mots, scènes du plan accomplies), rappeler le contrat passé en
section 3, puis donner la lecture. Elle SHALL se clore par le retour au
micro : la question « à quel moment avez-vous cessé de m'entendre ? », la
révélation de la voix clonée, et le rapprochement avec la situation de
l'Académie en 1975.

#### Scenario: Le zéro seul à l'écran

- **WHEN** la section 6 s'ouvre
- **THEN** le compte à rebours occupe l'écran seul, sans autre élément de
  contenu

#### Scenario: Chapitre présenté avec ses mesures

- **WHEN** le chapitre est révélé
- **THEN** son titre et ses mesures (mots, scènes) sont affichés,
  authentiques ou en gabarit

#### Scenario: Retour au micro

- **WHEN** la lecture est terminée
- **THEN** une slide pose la question du moment de bascule, révèle que la
  voix était clonée, et rapproche la salle de l'Académie de 1975

### Requirement: Section 7 — la chute

La section 7 SHALL être **sèche** : le chapitre lu à voix haute est la réponse,
et aucun vote à main levée ne le suit. Elle SHALL poser la question « est-ce que
c'est mon œuvre ? » une seule fois, sans mains levées, puis énoncer le verdict
**sur fond noir**, en écho au cold open. Le verdict SHALL payer la clause
d'originalité posée en section 2 (« produite par l'auteur, non par une machine »)
en montrant qu'elle ne décrit aucun des livres que l'Académie a couronnés
(Maquet, Lish, le lecteur de Queneau), et SHALL y introduire **Racter** (1984)
comme l'accusation inverse — « trop sélectionné, trop assemblé, trop édité » —
que le speaker revendique. Elle SHALL sortir sur les derniers mots de Gary.

#### Scenario: Question posée sans vote

- **WHEN** on entre dans la section 7
- **THEN** la question « est-ce que c'est mon œuvre ? » est posée une fois, sans
  demande de mains levées ni vote

#### Scenario: Verdict sur fond noir, clause et Racter

- **WHEN** le verdict est affiché
- **THEN** la slide est sur fond noir dans les deux modes, réfute la clause
  d'originalité au moyen des figures de la fabrique, et introduit Racter en une
  phrase

### Requirement: Notes de présentateur portant le script

Chaque slide SHALL porter, en note de présentateur, le texte du beat de
script qu'elle sert, indications scéniques comprises. Les notes SHALL être
rédigées dans la forme que l'outil de présentation interprète comme note,
afin d'être visibles en mode présentateur pendant la répétition et le talk.

#### Scenario: Note visible en mode présentateur

- **WHEN** le speaker ouvre une slide en mode présentateur
- **THEN** il voit le texte du beat correspondant et ses indications
  scéniques

### Requirement: Révélation calée sur les silences du script

Les slides dont le script marque un silence, ou dont le corps est une
anaphore, SHALL révéler leur contenu **progressivement** plutôt que d'un
seul bloc, afin que l'apparition suive le débit du speaker et que les chutes
ne soient pas lues avant d'être prononcées.

La révélation SHALL être pilotée par l'avancée normale de la présentation
(« next »), donc utilisable à la télécommande, sans raccourci dédié.

#### Scenario: Une chute n'apparaît pas avant d'être dite

- **WHEN** une slide enchaîne plusieurs énoncés dont le dernier est une chute
- **THEN** les énoncés apparaissent successivement, la chute en dernier

#### Scenario: Anaphore révélée entrée par entrée

- **WHEN** une slide porte une liste anaphorique
- **THEN** ses entrées apparaissent une à une, pour que la répétition se
  construise devant la salle

#### Scenario: Pilotage à la télécommande

- **WHEN** le speaker avance la présentation
- **THEN** la révélation suivante se déclenche, sans autre commande
