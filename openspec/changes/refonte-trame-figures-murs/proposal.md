## Why

Les expérimentations de la stack ont produit beaucoup plus de matière que la
trame ne pouvait en absorber, et cette matière **contredit la trame sur deux
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

Par ailleurs la section 4 porte six stations pour un temps de parole qui n'en
supporte pas six, et la station Vian fait doublon avec le cold open (pseudonyme,
paternité niée, fabrique qui dévore son auteur) tout en cassant le gradient
d'intervention humaine décroissante — Vian écrit 100 % du texte lui-même.

## What Changes

- **BREAKING** — Section 4 : **cinq** stations au lieu de six. **Vian/Vernon
  Sullivan est retiré.** Ordre conservé : Maquet, Lish, Malley, Oulipo, Racter.
- Chaque figure historique devient le **nom d'un mur franchi** dans la
  section 5. Les deux sections cessent d'être deux galeries parallèles : la 4
  plante, la 5 récolte. La figure revient au moment où le mur est nommé.
- **BREAKING** — Section 5 : les quatre strates sont **recoupées**. Les strates
  *puissance* et *seuil* fusionnent en un seul mur — « celui qu'on ne peut pas
  acheter » — parce qu'elles répondent à la même objection (« prenez un modèle
  plus gros ») à deux étages : il ne rentre pas, et s'il rentrait il échouerait
  mieux. Nouvelle liste : lore, intention, qualité+mesure, le mur qu'on ne peut
  pas acheter.
- La contrainte **local-only** cesse d'être une strate pour devenir le **cadre**
  de la descente : énoncée à l'entrée, reprise à la remontée. Elle est
  génératrice de tous les murs, pas l'un d'eux. (Elle était déjà dite deux fois :
  strate 4 et remontée.)
- La strate *qualité* absorbe la veine **mesure** du journal (le chronomètre qui
  dort, le lint vert par construction) et son aphorisme : *compter n'est pas
  lire*.
- **BREAKING** — Section 6 : l'exigence d'**émergence** est retirée. Elle est
  remplacée par un **aveu** — rien n'a émergé, tout a été composé — et
  l'entretien passe de trois questions à deux (la troisième, « celle qui
  déraille », n'a pas de candidat). Section ramenée de 5' à ~3'20.
- Le **pattern ternaire** des strates gagne une exception explicite : le dernier
  mur ne résout pas. Son troisième battement constate qu'il a fallu empêcher le
  modèle de résoudre, au lieu de célébrer une construction. Sans quoi la forme du
  talk fait exactement ce que le talk reproche à la machine.
- Le contenu du dernier mur est **gelé sous condition** : il dépend d'un run de
  falsification côté stack (la résolution est-elle un défaut d'alignement commun
  à tout modèle, un défaut de capacité de nemo, ou un bug de brief ?). Le deck
  porte le gabarit ; le texte se fige après le run.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

- `deck-content`: le nombre et la liste des cas de la section 4, le découpage
  des strates de la section 5, le statut de la contrainte local-only, l'exception
  au pattern ternaire, et le retrait de l'exigence d'émergence en section 6.

## Impact

- `CLAUDE.md` — section « Trame » : six stations → cinq, quatre strates
  renommées, section 6 redécrite. Mise à jour **simultanée** exigée par la
  règle 1 du workflow OpenSpec du projet.
- `docs/scripts/03-section-4-jeu-du-seuil.md` — suppression de la station 3,
  renumérotation, rappel de chaque figure dans son mur, chrono revu.
- `docs/scripts/04-section-5-descente-fabrique.md` — recoupe des strates,
  local-only déplacée en cadre, nouveaux placeholders (verbatims datés du
  journal des murs), chrono revu.
- `docs/scripts/05-section-6-mode-personnage.md` — beat d'émergence supprimé,
  aveu ajouté, entretien à deux questions.
- `docs/scripts/06-sections-7-8-recolte-chute.md` — beat 2 de la chute : le
  verdict accueille l'accusation de 1984 (Racter, « trop sélectionné, trop
  assemblé »).
- `docs/scripts/00-README.md` — table de chronologie.
- `slides/pages/04-jeu-du-seuil.md`, `05-descente-technique.md`,
  `06-mode-personnage.md`, `08-cloture.md`.
- `public/images/` + `CREDITS.md` — le portrait pulp de Vian, s'il existe, sort
  de l'inventaire du deck.
- **Hors périmètre de ce changement** : le run de falsification lui-même, qui
  vit dans le dépôt de la stack. Ce changement se contente d'en dépendre.

## Non-goals

- Ne fige pas le texte du dernier mur. Il reste en gabarit jusqu'au run.
- Ne touche ni au compte à rebours (28' gravées), ni au protocole de bascule,
  ni au design system.
- N'introduit aucun nouvel accessoire scénique.
