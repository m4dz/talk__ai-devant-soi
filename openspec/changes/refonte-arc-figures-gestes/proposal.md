## Why

La fabrique actuelle (quatre murs à pattern ternaire) ne convainc pas le
speaker : trop dense, trop tournée vers des expérimentations internes dont la
salle n'a aucune clé. Trois défauts précis.

1. **Les figures illustrent le mauvais geste.** Les murs racontent ce que la
   *machine* a raté (elle ignore le lore, perd l'intention…). Or la thèse du
   talk est un geste d'*auteur*, pas un échec de machine. Chaque figure
   historique décrit en réalité un geste que **nous avons posé** : Maquet
   fournit la matière, Queneau écrit le générateur, Malley montre que juste ≠
   bon, Lish coupe. Le talk sera plus fort si chaque anecdote dit *« on a fait
   comme cet auteur, avec d'autres outils »*.

2. **Le climax repose sur un labo invisible.** Les slides 40-44 (run
   `xp-resolution`, accusation via la fiche de Judith, « 12/12 », « c'est moi
   qui franchissais ») exigent tout l'historique des expérimentations pour
   avoir un sens — que même le speaker juge illisible pour la salle. Ce
   renversement est **coupé**.

3. **La matière montrable existait, mais on ne la montrait pas.** La stack
   contient des artefacts qui se lisent **sans le roman ni le labo** : l'arbre
   `bible/` écrit à la main, le graphe LangGraph (`graph.py`), les grilles de
   lint toutes vertes, la liste des interdits de style, la démo mode acteur.
   On illustrait avec des verbatims internes ; on va illustrer avec le code.

Décision fondatrice : le talk réinjecte **la question du seuil directement dans
la narration** — *« en déployant ces outils, est-ce que je perds la
paternité ? »* — et **y répond** : non, parce que j'ai conçu l'atelier comme un
atelier d'écriture traditionnel. Cet avis ne sera pas partagé par tous, et
c'est le propos : l'Académie n'a aucune réponse simple à opposer, parce que la
créativité n'en a pas. *« Je me suis bien amusé, au revoir, et merci. »*

## What Changes

- **BREAKING — les « quatre murs » deviennent « cinq gestes d'auteur ».** Fin
  du pattern ternaire figure/pièce/mur/aphorisme. Chaque geste = **la figure
  (anecdote) → notre geste montré par un artefact de code → (au besoin) un
  battement de seuil**. Ordre : **Malley → Maquet → Queneau → Carver → Racter**.
- **BREAKING — le renversement « c'est moi qui franchissais » est supprimé.**
  Les slides du run `xp-resolution` (accusation Judith, 12/12) sont coupées.
  Le talk n'a plus de climax de falsification.
- **Chaque geste est illustré par un artefact réel, lisible hors contexte** :
  Malley → grille de lint verte + texte plat ; Maquet → arbre `bible/` +
  fiche ; Queneau → DAG LangGraph ; Carver → liste des interdits + étalons
  avant/après ; Racter → la démo mode acteur.
- **Le fil rouge du seuil court, allégé.** La question est posée une fois à
  l'entrée (accroche mains-levées unique, conservée), **énoncée une seule fois**
  au geste Carver (le plus fort), implicite ailleurs, et **répondue** à la
  remontée.
- **Racter passe des murs au geste 5** et **ouvre le mode acteur** (Judith) : la
  machine « créditée auteur », en fait curée par l'humain. Sa **référence et son
  illustration**, disparues, sont **réintroduites** ; il est **rappelé une ligne
  à la chute** (« trop sélectionné, trop édité »).
- **L'aparté « gros modèle »** (il ne rentre pas, et s'il rentrait il ferait du
  juste-mais-mort en plus gros) est **rattaché à Malley**, en une phrase — plus
  un mur, plus un étage. Placement de travail, révisable.
- **La contrainte local-only** reste le **cadre** (entrée + remontée),
  inchangée.
- **CLAUDE.md est réécrit simultanément** (section « Trame », point 4 de la
  fabrique) pour refléter le nouvel arc — cette proposal ne contredit pas le
  document d'intention en silence.

## Impact

- Specs : `deck-content` (MODIFIED × 4, REMOVED × 1).
- Slides : sections 4-5 (`05-descente-technique.md`, `06-mode-personnage.md`),
  globales ~21-58, réécrites/coupées — passage de ~30 à ~16 slides.
- Sections 6-7 (récolte, chute) : la chute réintroduit la reprise Racter.
- CLAUDE.md : section « Trame » (fabrique) réécrite.
- Hors périmètre : composants live, countdown, TTS, thème, layouts (les layouts
  `case-card` / `piece-a-conviction` / `exergue` / `diptyque` existants sont
  réutilisés ; aucun nouveau layout requis a priori).
