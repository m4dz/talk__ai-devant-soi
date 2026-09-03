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

### Requirement: La contrainte locale se paie à la remontée

La remontée SHALL énoncer que la contrainte locale est **ce qui a rendu la
fabrique tenable à la main de l'auteur** : le modèle, le brief, la fiche et le
code lui appartenaient tous, donc chaque geste est resté le sien.

Cet énoncé SHALL rester à la remontée et NE SHALL PAS être déplacé dans un geste :
c'est le paiement du cadre posé à l'entrée de la section.

#### Scenario: Le cadre est payé, pas répété

- **WHEN** on atteint la remontée
- **THEN** elle relie la contrainte locale à la maîtrise de l'auteur sur chaque
  geste, sans réénoncer l'argument posé à l'entrée

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

### Requirement: Passe d'élagage 1 — sept slides retirées, contenu préservé

Le deck SHALL avoir retiré, à la passe d'élagage 1 (2026-09-02), les sept slides
listées ci-dessous, choisies par le speaker sur la planche contact commune. Le
contenu de chacune (texte à l'écran et notes de speaker) SHALL être **conservé**
hors du deck, dans `openspec/changes/elagage-passe-1/slides-retirees.md`, pour
être réutilisé lors de la reconstruction de l'arc narratif. Aucune de ces slides
NE SHALL être supprimée sans que son contenu soit préservé.

Slides retirées (numéro de la planche commune 52 slides) :

1. bio Gary — cold open beat 2 ;
2. l'ironie critique — cold open beat 5 ;
3. « Elle n'a rien interdit / annoncé / attend » — pivot Goncourt ;
4. « Ce compteur, c'est notre contrat » — allumage beat 3 ;
5. aparté « gros modèle » — geste Malley ;
6. aphorisme « Compter n'est pas lire » — geste Malley ;
7. « Le chapitre / Il est né » — récolte, révélation chiffrée.

Après cette passe, la numérotation de référence SHALL être celle de la
**nouvelle planche contact (44 slides)** régénérée depuis le deck élagué.

#### Scenario: Les sept slides sont absentes du deck

- **WHEN** on parcourt le deck élagué de bout en bout
- **THEN** aucune des sept slides listées n'apparaît, et le deck compte
  44 slides

#### Scenario: Le contenu retiré reste disponible

- **WHEN** on prépare la reconstruction de l'arc narratif
- **THEN** le texte et les notes de chacune des sept slides retirées sont
  disponibles dans `slides-retirees.md`, avec leur fonction narrative et
  l'impact de leur retrait

#### Scenario: La numérotation commune est rebasée

- **WHEN** on désigne une slide pour le travail slide par slide
- **THEN** le numéro renvoie à la nouvelle planche contact de 44 slides, et non
  à l'ancienne

### Requirement: Arc narratif figé — l'intention prime sur le wording

Le deck SHALL suivre la trame narrative figée dans
`openspec/changes/refonte-arc-narratif/design.md`. Cette trame est la **source
de vérité de l'intention** de chaque slide : le texte à l'écran pourra être
simplifié, mais l'**intention et le sens sous-jacent** de chaque slide SHALL
rester conformes à la trame.

La colonne vertébrale SHALL porter quatre fils : (1) la thèse — *on ne peut pas
différencier l'auteur de sa fabrique quand elle est de sa main* ; (2) le seuil
de la paternité ; (3) la contrainte locale ; (4) le pont dev, qui SHALL rester
**implicite** — jamais énoncé, jamais « vous les devs ».

#### Scenario: L'intention prime sur le texte

- **WHEN** le wording d'une slide est simplifié
- **THEN** son intention reste celle fixée par la trame `design.md`

#### Scenario: Le pont dev reste implicite

- **WHEN** on parcourt le deck de bout en bout
- **THEN** aucune slide n'énonce explicitement l'adresse aux développeurs ; le
  rapprochement craft/fabrique/auteur est seulement suggéré

### Requirement: La question de la paternité progresse, sans rebond

Le deck NE SHALL PAS rejouer la question « qui est l'auteur / est-ce mon
œuvre ? » en boucle. La question SHALL être traitée en **quatre temps distincts,
une seule fois chacun** :

1. **posée** — la question est ancienne, la littérature se l'est déjà posée ;
2. **aiguisée** — au geste Carver : « à force de retraits, à qui est la voix ? » ;
3. **répondue** — à la remontée : pas de seuil, la fabrique est de ma main ;
4. **affirmée** — à la chute : l'œuvre est mienne parce que la fabrique est
   mienne (affirmation, pas question).

#### Scenario: Quatre temps, une fois chacun

- **WHEN** on suit la question de la paternité dans le deck
- **THEN** elle est posée, puis aiguisée, puis répondue, puis affirmée, sans
  être re-posée en question à la chute

### Requirement: Deux slides ajoutées à la trame

Le deck SHALL comporter deux slides ajoutées par la refonte de l'arc :

1. **démystifier la fabrique** — entre le lancement et la descente : ce qui
   tourne est une boîte noire qu'on ouvre couche par couche ;
2. **le gros modèle** — au geste Malley : le modèle contient tout le savoir et
   tous les styles, et c'est **pour cela** que le résultat est moyen (composer à
   partir de tout n'est pas gage de qualité, au contraire).

#### Scenario: Les deux slides sont présentes

- **WHEN** on parcourt l'allumage puis le geste Malley
- **THEN** la slide « démystifier la fabrique » ouvre la descente, et la slide
  « le gros modèle » figure dans le geste Malley

### Requirement: La fabrique — cinq gestes d'auteur

La section 4 SHALL présenter la fabrique comme **cinq gestes d'auteur**, chacun
noué à une **figure historique** et prouvé par un **artefact du dispositif**
lisible **sans connaître le roman ni l'historique des expérimentations**. Le fil
directeur SHALL être : *on fait comme les autres auteurs, avec d'autres outils.*

Les cinq figures SHALL être, dans cet ordre par défaut : **Ern Malley** (juste
n'est pas bon ; mesurer n'est pas lire), **Maquet** (fournir la matière brute),
**Queneau/Oulipo** (écrire la machine, pas le texte), **Carver/Lish** (la qualité
vient en retranchant), **Racter** (la machine « créditée auteur », en fait curée
par l'humain). Racter SHALL faire la charnière vers le mode acteur (section 5).

Chaque geste SHALL suivre le battement : **la figure (anecdote) → notre geste,
montré par un artefact → (au besoin) un battement de seuil**. Le deck NE SHALL
PAS rejouer le pattern ternaire figure/pièce/mur/aphorisme des quatre murs, ni
présenter les figures comme des échecs de la machine : chaque anecdote SHALL
décrire un geste que **l'auteur** a posé.

L'artefact de chaque geste SHALL être un élément réel du dispositif : pour
Malley une grille de vérification **tout au vert** posée à côté d'un extrait
plat ; pour Maquet l'arborescence de la bible écrite à la main et une fiche ;
pour Queneau le graphe d'orchestration ; pour Carver la liste des interdits de
style (rayée) ; pour Racter l'entretien rejoué. Chaque artefact SHALL rester
compréhensible sans le contexte du roman, **hormis l'entretien Racter** dont le
contenu touche au roman ; cet entretien SHALL être **pré-généré et embarqué dans
les slides**, jamais joué en direct (contrainte matérielle : modèle partagé avec
la génération, `POST /chat` répond `409` pendant tout le run).

L'**aparté « gros modèle »** — il ne rentre pas dans la machine locale, et s'il
rentrait il produirait du juste-mais-mort en plus gros — SHALL être servi en une
phrase à l'intérieur du geste **Malley**, et NE SHALL PAS constituer un geste ni
un étage à part entière.

La **remontée** SHALL faire l'inventaire des gestes (bibliothèque, plan, voix,
interdits — tous à la main de l'auteur) puis **répondre à la question du seuil** :
il n'existe pas de seuil, l'auteur a **conçu l'atelier** comme un atelier
d'écriture, et l'Académie n'a **aucune réponse simple** à opposer parce que la
créativité n'en a pas.

#### Scenario: Cinq gestes reliés à un artefact

- **WHEN** on parcourt la fabrique
- **THEN** chacun des cinq gestes nomme sa figure, énonce le geste d'auteur
  correspondant, et montre un artefact réel du dispositif

#### Scenario: Pas de pattern ternaire ni d'échec de machine

- **WHEN** un geste est affiché
- **THEN** il ne rejoue pas la séquence figure/pièce/mur/aphorisme, et son
  anecdote décrit un geste de l'auteur, pas un ratage de la machine

#### Scenario: Artefacts lisibles hors contexte

- **WHEN** un artefact de geste est à l'écran
- **THEN** il se comprend sans le roman ni l'historique des expérimentations,
  sauf la démo Racter réservée au live

#### Scenario: Aparté gros modèle chez Malley

- **WHEN** le geste Malley est présenté
- **THEN** l'objection du modèle plus gros y est traitée en une phrase, et
  aucun autre geste ne la porte

#### Scenario: La remontée répond au seuil

- **WHEN** on atteint la remontée
- **THEN** elle inventorie les gestes de l'auteur et affirme qu'il n'existe pas
  de seuil, l'atelier étant sa conception

### Requirement: Pas de vote à main levée par cas ; accroche unique, question qui court

Le deck NE SHALL PAS déclencher de vote à main levée par figure, par geste ou en
clôture. Une **accroche mains-levées unique** SHALL être posée une seule fois, à
l'entrée de la fabrique, sur la question centrale (« à partir de quand l'œuvre
n'est-elle plus la vôtre ? »), pour installer la salle en jury.

Cette question SHALL ensuite **courir comme fil rouge rhétorique**, sans jamais
redevenir un vote : elle est **énoncée une seule fois** au cours des gestes (au
geste Carver, le plus fort), reste implicite ailleurs, et est **répondue** à la
remontée. La chute SHALL rester **sèche** : le chapitre lu est la réponse, aucun
vote final ne le suit.

#### Scenario: Aucun vote répété

- **WHEN** on parcourt le deck de bout en bout
- **THEN** aucune slide ne déclenche de vote à main levée hormis l'accroche
  unique du début, et la chute n'en porte aucun

#### Scenario: Le seuil court sans revoter

- **WHEN** la question du seuil réapparaît après l'accroche
- **THEN** elle est énoncée une seule fois (au geste Carver) puis répondue à la
  remontée, sans jamais redemander de mains levées

### Requirement: La contrainte locale est le cadre de la descente, pas un geste

Le deck SHALL énoncer la contrainte « rien ne sort de cette pièce » à
**l'entrée** de la fabrique et la **payer** à la remontée : elle est le cadre qui
**rend les gestes possibles** — sans elle, une clé d'API dispenserait de
construire la bibliothèque, l'atelier, la fiche de style et le correcteur.

Aucun geste NE SHALL porter cette contrainte comme thèse propre. Le matériau qui
l'illustrait (l'impossibilité du gros modèle en local, la sortie de secours par
clé d'API) SHALL être servi en une phrase à l'intérieur du geste **Malley**.

#### Scenario: Cadre à l'entrée et à la remontée

- **WHEN** on entre dans la fabrique puis qu'on atteint la remontée
- **THEN** la contrainte locale est posée à l'entrée comme cadre et payée à la
  remontée comme ce qui a rendu les gestes possibles

#### Scenario: Aucun geste ne porte la contrainte

- **WHEN** on parcourt les cinq gestes
- **THEN** aucun n'a la contrainte locale pour thèse, et son matériau
  n'apparaît qu'en une phrase chez Malley

### Requirement: Le mode personnage, culmination du geste Racter

La section 5, le mode personnage, SHALL suivre immédiatement le geste **Racter**
de la fabrique, comme sa **culmination** : Racter y ouvre la référence (machine
« créditée auteur », en fait curée par l'humain) avec **son illustration
réintroduite**, puis l'**entretien rejoué** — pré-généré et embarqué, jamais
live — **est** l'artefact de ce geste. On ne
demande plus à la machine d'écrire *sur* le personnage, on lui demande de le
**devenir**. Le personnage interrogé SHALL être **Judith**.

Il SHALL montrer un **entretien** avec ce personnage comprenant trois questions
**dans l'ordre** : une question factuelle, puis une question interprétative,
puis une question existentielle. Les trois échanges SHALL être **affichés
ensemble à l'entrée de la slide** (pas de dévoilement au pas de clic). (Décision
2026-09-03, run INT-c : la paire d'origine est étendue à trois questions, la
troisième — sur la nature de sa réalité — recevant un refus de comprendre, qui
est lui-même un geste de non-résolution.)

Il NE SHALL PAS rapporter d'**émergence** — aucun élément né d'un entretien et
entré dans le roman n'est documenté. À la place, il SHALL énoncer que rien n'a
émergé et que tout a été **composé et sélectionné**.

Il SHALL se clore par un retournement sur une question d'auteur **attribuée et
sourcée**.

#### Scenario: L'acteur en culmination du geste Racter

- **WHEN** on entre dans le mode personnage
- **THEN** il suit le geste Racter, réintroduit sa référence et son
  illustration, et présente la bascule d'écrire *sur* à *devenir* le personnage

#### Scenario: Entretien à trois questions

- **WHEN** l'entretien est montré
- **THEN** les trois questions sont présentées **ensemble à l'entrée de la
  slide**, dans l'ordre factuelle puis interprétative puis existentielle, et
  aucune quatrième n'est présentée

#### Scenario: Aucune émergence affirmée

- **WHEN** on parcourt le mode personnage
- **THEN** aucune slide n'affirme qu'un élément produit par la machine est entré
  dans le roman, et une slide énonce que rien n'a émergé, tout composé

#### Scenario: Retournement sourcé

- **WHEN** le mode personnage se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée avec
  sa source

