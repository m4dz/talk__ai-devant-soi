## Why

L'entretien du mode personnage (section 5) était spécifié à **deux** questions
— factuelle puis interprétative — et le contenu restait en gabarit faute de
session authentique. Six rejeux ont été tirés le 2026-09-02
(`sessions/judith/`). L'analyse a tranché :

1. **La factuelle et l'interprétative tiennent** — le run INT-c
   (`2026-09-02T22-37-57Z`) produit une interprétative qui atteint enfin la
   cible du design : Judith classe tout, puis bute sur la seule phrase qu'elle
   n'a jamais pu classer (« Le temps est une invention humaine, il n'existe pas
   vraiment » — coquille ? registre ? fait établi ?) et **ne conclut pas**.
   C'est le refus de résoudre, à l'écran.

2. **La troisième question — celle sur la nature de sa réalité — était réputée
   coupée** (« celle qui déraille », aucune session ne la tenait). Les rejeux du
   2026-09-02 la tiennent : sommée de douter de son existence, Judith se
   replie sur son métier (« Ma réalité, c'est ce que je lis sur la page ») sans
   capituler ni « comprendre » le piège. Le speaker décide de **la conserver** :
   elle n'a pas déraillé, elle prolonge la montée.

Conséquence : l'entretien passe de **deux à trois** questions
(factuelle → interprétative → existentielle), et la troisième **effleure le
dispositif du roman**. Or CLAUDE.md posait l'inverse (« le dispositif du roman
ne se spoile pas ici »). Ce changement acte la décision et réconcilie les trois
documents qui la contredisent : le script (source de vérité), CLAUDE.md, et la
spec `deck-content`.

## What Changes

- **Spec `deck-content`** : l'entretien passe de deux à **trois** questions ;
  la troisième est **existentielle** (elle interroge la réalité du personnage).
  La contrainte « aucune émergence affirmée » est **inchangée** — la troisième
  question ne produit aucun apport prétendu émergent, elle montre une tenue.
- **CLAUDE.md, section 5** : « deux questions » → « trois questions
  (factuelle, interprétative, existentielle) ». La règle « le dispositif ne se
  spoile pas ici » est **levée pour la seule question existentielle**, et
  seulement à ce degré : le personnage est poussé au bord du dispositif et le
  **tient**, sans que le dispositif soit nommé ni expliqué.
- **Script `docs/scripts/05-…`** : beat 2 réécrit à trois questions, verbatims
  du run INT-c collés (fin de réponse 2 élaguée de la fuite d'anglais
  « completely » — leak `NUM_CTX`, élagage de transcription autorisé par
  l'en-tête du fichier de session). La note « Deux questions, pas trois » est
  remplacée.
- **Slide `slides/pages/06-mode-personnage.md` + layout `entretien.vue`** :
  `clicks` 2 → 3, trois blocs verbatim, style question/réponse. *(déjà en place,
  tracé ici pour l'archive.)*

## Impact

- Specs : `deck-content` (une exigence, un scénario modifiés).
- Docs : `CLAUDE.md` (section 5), `docs/scripts/05-section-6-mode-personnage.md`.
- Code : `slides/pages/06-mode-personnage.md`, `theme/layouts/entretien.vue`.
- Contrainte non touchée : **aucune émergence affirmée** reste pleine et
  entière ; l'aveu (beat 3) est conservé mot pour mot.
