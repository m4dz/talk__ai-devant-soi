## Why

Les expérimentations de la stack ont produit beaucoup plus de matière que la
trame ne pouvait en absorber, et cette matière **contredit la trame sur trois
points**.

1. Le journal des murs a un fil rouge — *la machine ne tient pas le seuil, elle
   le franchit à la place du personnage* — qui partage le mot central de la
   section 4 sans y être relié. Le talk a donc deux « seuils » qui ne se
   rencontrent jamais, alors que leur collision est sa meilleure thèse
   disponible : **l'auteur est celui qui refuse de résoudre.**
2. La section 6 promet une **émergence** (un élément né d'un entretien, entré au
   roman) qui **n'existe pas**. Vérification faite : ni le mode acteur ni les
   murs n'en produisent. Le candidat le plus cité — la « deuxième assiette » —
   était **matériau imposé** dans `briefs/protocole-calibration-ch2.md` §1 dès le
   09-08. Le modèle ne l'a pas inventé, il l'a exécuté. La section 6 tient
   aujourd'hui sur un placeholder que rien ne viendra remplir.
3. **La galerie et la descente disent les mêmes figures deux fois.** La
   section 4 « plante » les cas historiques, la section 5 les « récolte » quinze
   minutes plus tard comme noms de murs. La salle voit un **musée** (cinq
   stations), puis un **chantier** (quatre strates), et ne recolle jamais les
   deux : le fait et la tentative qu'il éclaire sont séparés par tout le milieu
   du talk. Le split plante/récolte **est** le défaut, pas une élégance.

Par ailleurs la section 4 portait six stations pour un temps de parole qui n'en
supporte pas six, et la station Vian faisait doublon avec le cold open
(pseudonyme, paternité niée, fabrique qui dévore son auteur) tout en cassant le
gradient d'intervention humaine décroissante — Vian écrit 100 % du texte
lui-même.

## What Changes

- **BREAKING — fusion des sections 4 et 5.** La galerie autonome disparaît. Les
  deux sections deviennent **une seule descente, « La fabrique »** : chaque
  figure historique est dite **une seule fois**, à **l'ouverture de son mur**, et
  ne « revient » plus quinze minutes plus tard. Le fait éclaire la tentative dans
  le même souffle. Fin du plante/récolte.
- Quatre murs, chacun ouvert par sa figure : **lore** (Dumas/Maquet), **intention**
  (Queneau/Oulipo — livre physique), **qualité + mesure** (Ern Malley), **le mur
  qu'on ne peut pas acheter** (Carver/Lish). **Vian/Vernon Sullivan reste retiré.**
  **Racter** n'est pas un mur : il revient au **verdict de la chute**.
- **BREAKING — le renversement « il n'existe pas de seuil » est supprimé.**
  C'était une définition de l'auteur **par la négative**, que le design classe
  lui-même parmi les mauvaises. La thèse positive (*l'auteur refuse de résoudre*)
  et le **renversement du dernier mur** (Lish, cible = le speaker) la remplacent.
  Un seul renversement dans le talk, le fort.
- **BREAKING — le vote à main levée est retiré.** Plus de question « est-ce
  encore l'œuvre de… ? » par station, ni de vote final à la chute (« la même
  question aux cons »). Une **accroche mains-levées unique** au début du talk
  suffit à installer la salle en jury. La descente parle seule ensuite.
- Les strates *puissance* et *seuil* restent fusionnées en un seul mur — « celui
  qu'on ne peut pas acheter » — parce qu'elles répondent à la même objection
  (« prenez un modèle plus gros ») à deux étages : il ne rentre pas, et s'il
  rentrait il échouerait mieux.
- La contrainte **local-only** est le **cadre** de la descente : énoncée à
  l'entrée, payée à la remontée. Elle est génératrice de tous les murs, pas l'un
  d'eux.
- La strate *qualité* absorbe la veine **mesure** du journal (le chronomètre qui
  dort, le lint vert par construction) et son aphorisme : *compter n'est pas
  lire*.
- **Le mode personnage (ex-section 6) devient la culmination collée au dernier
  mur.** Ce n'est plus un pont ornemental posé après la descente : c'est le
  mécanisme du mur Lish révélé (on n'a pas demandé d'écrire *sur* Judith, on a
  demandé de la *devenir*). L'exigence d'**émergence** reste retirée, remplacée
  par un **aveu** — rien n'a émergé, tout a été composé — l'entretien à deux
  questions, le retournement sourcé (Le Tellier).
- **Le pattern ternaire garde son exception** : le dernier mur ne résout pas. Son
  troisième battement constate qu'il a fallu empêcher le modèle de résoudre. Sans
  quoi la forme du talk fait exactement ce que le talk reproche à la machine.
- **La chute devient sèche.** Le chapitre lu à voix haute *est* la réponse : plus
  de re-vote. Verdict + Racter (« trop sélectionné, trop assemblé, trop
  édité ») + les derniers mots de Gary.

Le contenu du dernier mur, jadis gelé sous condition, est **tranché** : run de
falsification du 31-08, **H3-brief, 12/12** — la machine tenait le doute, c'est
le brief qui la poussait. Le mur ne tombe pas, il change de cible.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

- `deck-content`: la disparition de la galerie autonome au profit d'une descente
  où chaque figure ouvre son mur, le retrait du renversement « pas de seuil »,
  le retrait du vote à main levée, le statut de la contrainte local-only,
  l'exception au pattern ternaire, le mode personnage en culmination, et le
  retrait de l'exigence d'émergence.

## Impact

- `CLAUDE.md` — section « Trame » : fusion des sections 4 et 5 en « La fabrique »,
  retrait des cinq stations autonomes, du renversement « pas de seuil » et du
  vote ; section 6 recadrée en culmination ; chute sèche. Mise à jour
  **simultanée** exigée par la règle 1 du workflow OpenSpec du projet.
- `docs/scripts/03-section-4-jeu-du-seuil.md` + `04-section-5-descente-fabrique.md`
  — **fusionnés** en une descente unique ; chaque figure à l'ouverture de son
  mur ; retrait du renversement « pas de seuil », du pont et du vote ; Racter
  déplacé vers la chute ; chrono revu (trou de ~3' à recombler).
- `docs/scripts/05-section-6-mode-personnage.md` — recadré en culmination collée
  au dernier mur ; beat d'émergence supprimé, aveu conservé, entretien à deux
  questions.
- `docs/scripts/06-sections-7-8-recolte-chute.md` — chute sèche, retrait du vote
  final ; le verdict accueille Racter (« trop sélectionné, trop assemblé »).
- `docs/scripts/00-README.md` — table de chronologie, renumérotation 8 → 7.
- `slides/pages/04-jeu-du-seuil.md` + `05-descente-technique.md` — **fusionnés** ;
  chaque mur ouvre sur sa figure ; retrait des slides de vote et de la slide
  « pas de seuil ». `06-mode-personnage.md`, `08-cloture.md` recadrés.
- **Décision de renumérotation des fichiers** (garder les numéros 04/05 ou
  renuméroter en 7 sections) à trancher au moment de l'apply.
- `public/images/` + `CREDITS.md` — le portrait pulp de Vian reste hors
  inventaire.
- **Hors périmètre** : le run de falsification lui-même, clos côté stack. Ce
  changement s'appuie sur son résultat.

## Non-goals

- Ne touche ni au compte à rebours (28' gravées), ni au protocole de bascule,
  ni au design system.
- N'introduit aucun nouvel accessoire scénique.
