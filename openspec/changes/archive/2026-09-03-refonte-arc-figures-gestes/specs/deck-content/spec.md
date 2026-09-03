# deck-content — delta

## REMOVED Requirements

### Requirement: Le dernier mur est un renversement dont la cible est le speaker


**Raison du retrait** : le climax de falsification (run `xp-resolution` :
accusation via la fiche du personnage, expérience « 12 tirages sur 12 »,
aphorisme « c'est moi qui franchissais ») est **coupé**. Il exige tout
l'historique des expérimentations pour être lisible — illisible pour la salle,
et jugé tel par le speaker. Le talk n'a plus de renversement de falsification ;
la thèse est portée par le fil rouge du seuil (voir « La fabrique — cinq gestes
d'auteur ») et sa réponse à la remontée.

### Requirement: La fabrique — chaque figure ouvre son mur

**Raison du retrait** : refonte de la section 4 en **cinq gestes d'auteur** (voir ADDED « La fabrique — cinq gestes d'auteur »). L'arc « quatre murs à pattern ternaire » est abandonné — scénarios et intitulé remplacés.

### Requirement: Pas de vote à main levée par cas ; accroche unique

**Raison du retrait** : renommée et resserrée autour du fil rouge du seuil (voir ADDED « …accroche unique, question qui court »).

### Requirement: La contrainte locale est le cadre de la descente, pas une strate

**Raison du retrait** : le vocabulaire « mur/strate » devient « geste » (voir ADDED « …pas un geste »).

### Requirement: Le mode personnage, culmination collée au dernier mur

**Raison du retrait** : recollée au **geste Racter** et portée à **trois questions** (voir ADDED « …culmination du geste Racter »).

## MODIFIED Requirements

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

## ADDED Requirements

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

Il SHALL montrer un **entretien** avec ce personnage, en progression : une
question factuelle, puis une question interprétative, puis une question
existentielle. (Décision 2026-09-03, run INT-c : la paire d'origine est étendue
à trois questions, la troisième — sur la nature de sa réalité — recevant un
refus de comprendre, qui est lui-même un geste de non-résolution.)

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
- **THEN** trois questions apparaissent successivement, la factuelle puis
  l'interprétative puis l'existentielle, et aucune quatrième n'est présentée

#### Scenario: Aucune émergence affirmée

- **WHEN** on parcourt le mode personnage
- **THEN** aucune slide n'affirme qu'un élément produit par la machine est entré
  dans le roman, et une slide énonce que rien n'a émergé, tout composé

#### Scenario: Retournement sourcé

- **WHEN** le mode personnage se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée avec
  sa source
