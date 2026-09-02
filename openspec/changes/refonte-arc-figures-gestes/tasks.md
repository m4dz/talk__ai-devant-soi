# Tasks

## 1. Document d'intention (fait en premier)

- [x] 1.1 Réécrire la section « Trame » de `CLAUDE.md`, point 4 (la fabrique) :
      remplacer « quatre murs / pattern ternaire / dernier mur renversement »
      par « cinq gestes d'auteur (Malley → Maquet → Queneau → Carver → Racter),
      chacun figure → geste → artefact de code ». Acter la coupe du run
      `xp-resolution`, le fil rouge du seuil qui répond, Racter au geste 5 +
      reprise à la chute, l'aparté gros modèle chez Malley.
- [x] 1.2 Reporter dans `CLAUDE.md` les décisions tranchées (Queneau=LangGraph,
      Maquet=nous, seuil unique chez Carver).

## 2. Delta spec deck-content

- [x] 2.1 Valider `openspec validate refonte-arc-figures-gestes --strict`.

## 3. Section 4 — la fabrique (`slides/pages/05-descente-technique.md`)

Cible : ~16 slides. Réutiliser les layouts `exergue`, `case-card`,
`piece-a-conviction`, `diptyque`.

- [x] 3.1 **Entrée** — conserver « Rien ne sort de cette pièce » (cadre) et
      l'accroche mains-levées unique « À partir de quand l'œuvre n'est-elle plus
      la vôtre ? ». Ajuster le second pour ouvrir la **question qui court**.
- [x] 3.2 **Geste 1 — Malley** : case-card Malley ; slide artefact **diptyque**
      (layout `diptyque`) — gauche extrait machine creux (run C1, resserré),
      droite étalon humain (`style-auteur.md:134`), grille lint **tout au vert**,
      cadre « les deux passent la grille, un seul est vivant » → « compter n'est
      pas lire » ; aparté gros modèle en une phrase. Verbatims figés : voir
      `design.md` § « Diptyque Malley ».
- [x] 3.3 **Geste 2 — Maquet** : case-card Maquet/Dumas (valence « perd le
      nom ») ; slide artefact **arbre `bible/`** (12 fichiers, 1131 l.) en `tree`
      typographié + **barres texturées halftone** (rappel jauge `balance`) +
      **zoom `lexique-correction.md` §A** (métier documenté, pas inventé) ; sting
      « Maquet en a écrit dix fois plus, et a perdu le nom », laissé ouvert.
      Rendu figé : voir `design.md` § « Maquet ».
- [x] 3.4 **Geste 3 — Queneau** : case-card Oulipo ; slide artefact **DAG
      LangGraph** — SVG statique inline (9 nœuds glosés, boucle `glisse→write`
      surlignée rouge sang) + encart 1 ligne de code, caption « j'ai écrit
      l'atelier, pas le chapitre ». Pas de Mermaid, pas de composant. Forme +
      glose figées : voir `design.md` § « DAG Queneau ».
- [x] 3.5 **Geste 4 — Carver** : case-card Carver/Lish ; slide artefact **liste
      des interdits rayée rouge** (`style-auteur.md:103`, render A — le crayon de
      Lish), titre « ma fiche de style dit quoi barrer » ; puis **le seuil énoncé
      unique** sur sa slide (`exergue`), formulation provisoire à éprouver au
      filage. Verbatims + seuil figés : voir `design.md` § « Carver ».
- [x] 3.6 **Remontée** : inventaire des gestes (tous à ma main) + réponse au
      seuil (pas de seuil, j'ai conçu l'atelier, l'Académie sans réponse simple).
- [x] 3.7 **Supprimer** : slides du run `xp-resolution` (accusation Judith,
      12/12, « c'est moi qui franchissais »), l'ancien 4e mur en tant que mur,
      les aphorismes et pièces du pattern ternaire devenus orphelins, le pont
      Gary explicite.

## 4. Section 5 — mode acteur / Racter (`slides/pages/06-mode-personnage.md`)

- [x] 4.1 **Geste 5 — Racter** : réintroduire la référence Racter + son
      illustration (`cas-06-racter-s47.png`) en ouverture ; la machine « auteur »
      en fait curée par l'humain.
- [x] 4.2 Poser la structure de l'**entretien rejoué** (2 échanges : factuel puis
      interprétatif) — pré-généré et embarqué, **jamais live**. **Verbatims en
      gabarit** tant que la paire de questions n'est pas tranchée (3 combos
      parqués : voir `design.md` § « Racter »). Conserver **l'aveu** (rien n'a
      émergé, tout composé/sélectionné) et le **retournement Le Tellier**.
- [x] 4.3 Retirer toute reprise du renversement `xp-resolution` si présente.
- [ ] 4.4 **BLOQUÉ** — générer en amont les sessions d'interview, choisir la paire,
      remplacer les gabarits d'entretien par les verbatims. Hors périmètre apply
      immédiat.

## 5. Section 7 — la chute (`slides/pages/08-cloture.md`)

- [x] 5.1 Reprise Racter d'une ligne au verdict (« trop sélectionné, trop
      assemblé, trop édité ») ; vérifier la sortie « Je me suis bien amusé. Au
      revoir et merci. »

## 6. Cohérence & recette

- [x] 6.1 Relire le fil du seuil de bout en bout : posé (entrée) → énoncé une
      fois (Carver) → répondu (remontée). Aucune répétition parasite.
- [x] 6.2 Vérifier qu'aucune slide ne dépend du roman ou du labo pour être
      comprise, hors la démo Racter (contenu, admis en live).
- [x] 6.3 Export PNG + planche contact, relecture des deux modes (dark/light).
- [x] 6.4 Mettre à jour `CREDITS.md` si de nouveaux extraits d'artefacts
      (grille, fiche, graphe, interdits) entrent à l'écran.
- [ ] 6.5 `openspec validate --strict` : **OK (vert)**. **ARCHIVE DIFFÉRÉ** — le
      change reste actif tant que 4.4 (verbatims d'entretien Racter) n'est pas
      fait ; on archive après génération des sessions.
