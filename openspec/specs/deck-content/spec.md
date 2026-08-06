# deck-content Specification

## Purpose
Définit la structure narrative du deck : les 8 sections, leur ordre, les
beats obligatoires, les emplacements des composants live et les points de
contenu bloqués. Décrit ce que le deck raconte, indépendamment de la mise
en forme.
## Requirements
### Requirement: Huit sections ordonnées

Le deck SHALL présenter huit sections dans cet ordre : (1) cold open
Gary/Ajar, (2) position de l'Académie Goncourt, (3) lancement de la
génération live, (4) jeu du seuil, (5) descente technique, (6) résolution
architecturale, (7) lecture du chapitre, (8) clôture. Chaque section SHALL
vivre dans son propre fichier sous `slides/pages/`, importé par l'entrée
principale.

#### Scenario: Navigation de bout en bout

- **WHEN** on parcourt le deck de la première à la dernière slide
- **THEN** les huit sections se succèdent dans l'ordre défini, sans trou
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

### Requirement: Jeu du seuil à intervention décroissante

La section 4 SHALL présenter six cas historiques, un par slide, dans
l'ordre d'intervention humaine décroissante : Dumas/Maquet, Carver/Lish,
Vian/Vernon Sullivan, Ern Malley, Oulipo, Racter.

Chaque station SHALL porter à l'écran **la question du jeu** qui lui
correspond (« est-ce encore l'œuvre de… ? ») : c'est elle qui déclenche le
vote à main levée, mécanique centrale de la section.

La section SHALL se clore par un **renversement** — l'énoncé qu'il n'existe
pas de seuil à partir duquel l'œuvre cesse d'appartenir à son auteur, et la
mise en échec de la clause d'originalité posée en section 2 — puis par un
**pont** vers l'ouverture de la fabrique.

#### Scenario: Six cas dans l'ordre

- **WHEN** on parcourt la section 4
- **THEN** les six cas apparaissent chacun sur sa slide, dans l'ordre
  d'intervention humaine décroissante indiqué

#### Scenario: Question du jeu à chaque station

- **WHEN** une station du jeu du seuil est affichée
- **THEN** la question posée à la salle pour ce cas est visible à l'écran

#### Scenario: Renversement puis pont

- **WHEN** on atteint la fin de la section 4
- **THEN** une slide énonce qu'il n'existe pas de seuil, une autre montre
  que la clause d'originalité ne décrit aucun des cas vus, et une dernière
  fait le pont vers la descente dans la fabrique

### Requirement: Descente technique en quatre murs

La section 5 SHALL présenter quatre strates techniques en cascade, dans cet
ordre : (1) le modèle ignore le lore, (2) il perd l'intention narrative,
(3) la qualité littéraire est pauvre, (4) crash sous modèles plus lourds.

Chaque strate SHALL suivre le battement **ce qu'on a tenté → le mur → ce
que le mur a forcé à construire**, et SHALL exposer une **pièce à
conviction** : l'extrait raté, la grille de vérification ou les mesures qui
prouvent le mur. Tant que ces pièces authentiques n'existent pas, elles
SHALL apparaître en gabarit.

La section SHALL se clore par la règle de la fabrique (« la fabrique reste
à notre main ») puis par une **remontée** qui rouvre la boîte noire et
énumère ce qu'elle contient, avant de relancer vers la section suivante.

#### Scenario: Quatre murs enchaînés

- **WHEN** on parcourt la section 5
- **THEN** les quatre murs se succèdent dans l'ordre, chacun avec son
  problème et sa solution

#### Scenario: Chaque strate montre sa pièce à conviction

- **WHEN** une strate est présentée
- **THEN** une slide affiche la preuve du mur (extrait raté, grille ou
  mesures), authentique ou marquée en gabarit si elle n'existe pas encore

#### Scenario: Règle puis remontée

- **WHEN** on atteint la fin de la section 5
- **THEN** une slide énonce la règle de la fabrique, puis la remontée
  détaille le contenu de la boîte noire et relance vers la suite

### Requirement: Slot de lecture du chapitre

La section 7 SHALL contenir l'emplacement du lecteur de chapitre (slot de
composant live) et matérialiser le passage de la voix du speaker à la voix
clonée.

#### Scenario: Slot lecteur présent

- **WHEN** on atteint la section 7
- **THEN** un emplacement identifiable pour le lecteur de chapitre est
  présent

### Requirement: Dernière ligne de clôture

La section 8 SHALL se terminer par la ligne exacte : « Je me suis bien
amusé. Au revoir et merci. »

#### Scenario: Derniers mots exacts

- **WHEN** on atteint la dernière slide
- **THEN** elle affiche exactement « Je me suis bien amusé. Au revoir et
  merci. »

### Requirement: Illustrations des slides récit

Les slides récit SHALL porter une illustration pulp cohérente : chacun des
six cas du jeu du seuil SHALL présenter son portrait (buste ou
objet-figure), et le cold-open SHALL porter des ambiances. Les slides
argument NE SHALL PAS porter d'illustration. Toutes les illustrations
SHALL provenir de la génération locale, dans le style figé, et être
embarquées (hors-ligne).

#### Scenario: Chaque cas porte son portrait

- **WHEN** on parcourt la section 4 (jeu du seuil)
- **THEN** chacun des six cas affiche une illustration pulp qui lui est
  propre, dans le style commun

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

