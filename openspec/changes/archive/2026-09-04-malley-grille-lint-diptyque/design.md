## Context

Slide artefact du geste Malley (`slides/pages/05-descente-technique.md`,
`layout: diptyque`, titre « Grille de style : tout au vert »). Aujourd'hui :
deux extraits (`::gauche::` = auteur, `::droite::` = machine) côte à côte, la
grille n'existe que dans les notes de présentateur. Le layout `diptyque`
(`theme/layouts/diptyque.vue`) est **symétrique** (deux colonnes `1fr 1fr` de
même poids) et sert aussi le geste Carver/Lish — on ne le touche pas.

Les retours de run sont dans `stack fictional writing/grille-lint-*.md`
(hors repo deck, non versionnés ici) : chaque fichier porte un bloc
**« Mécanique — échec si présent (AUTO) »**, 6 règles binaires × N runs,
marques `✓` / `✗`. Plusieurs runs sont **mécaniquement tout au vert** (ex.
`grille-lint-chapitre-7.md` run CH7 : 6/6 ✓ ; `grille-lint-session-6-C.md`
run C2 : 6/6 ✓). C'est la matière de la grille à montrer.

## Goals / Non-Goals

**Goals:**
- Montrer une grille de lint réelle, tout au vert, à droite.
- Empiler les deux extraits (auteur au-dessus, machine en dessous) à gauche.
- Tenir dans le cadre, deux modes, tokens uniquement.

**Non-Goals:**
- Modifier les verbatims des deux extraits (figés `refonte-arc-figures-gestes`).
- Rendre la grille depuis une source live / runtime (copie en dur dans la slide).
- Toucher au layout `diptyque` symétrique ni au geste Carver.
- Afficher les blocs manuels / structurels de la grille (trop longs, illisibles
  à distance) — seul le bloc mécanique binaire est retenu.

## Decisions

**D1 — Nouveau layout `diptyque-grille`, pas de réutilisation du `diptyque`.**
Le `diptyque` est symétrique et partagé avec Carver ; le besoin ici est
asymétrique (rail de textes + panneau-grille). Nouveau
`theme/layouts/diptyque-grille.vue` :
- `grid-template-columns` asymétrique (rail texte plus large, panneau-grille
  plus étroit — cible ~ `1.1fr 0.9fr`, à régler à l'œil).
- Colonne gauche : slot `#gauche` (les deux extraits empilés, chacun précédé
  de son étiquette via frontmatter `haut` / `bas`, ou étiquettes inline).
- Colonne droite : slot `#grille` (le tableau markdown de la grille) sous un
  intitulé (frontmatter `verdict`, ex. « Lint de style — tout au vert »).
- Frontmatter `titre` conservé.
- Panneau-grille : encadré filet + fond léger (tokens `--color-rule`,
  `--color-surface`/équivalent), à la manière de `piece-a-conviction`.
- Marques `✓` teintées de l'accent « validé » (vert ? le design system est
  encre/papier/rouge sang — **décision de teinte à trancher en implémentation** :
  soit un vert token ajouté en scope, soit garder l'encre et laisser le mot
  « tout au vert » + l'uniformité des ✓ porter le sens ; **préférence : ✓ en
  encre, uniformes, pas de vert importé** pour ne pas casser la palette pulp).

**D2 — Grille = bloc mécanique binaire, 6 lignes, une colonne de résultats.**
On ne montre qu'**un run**, tout au vert (pas la matrice multi-runs : illisible
et hors sujet). Les 6 règles, verbatim des fichiers de run :
1. Lexique pastiche (indicible, ténèbres, effroi…)
2. Tic d'IA (« une part de moi », « un mélange de »…)
3. Point d'exclamation hors dialogue
4. Incise adverbiale ou prépositionnelle (« d'un ton surpris »)
5. Élision manquante (« je te appelle »)
6. Passé simple
→ chaque ligne `✓`. Source citée en commentaire de slide (run CH7 /
`grille-lint-chapitre-7.md`). Copie en dur dans la slide, pas de dépendance.

**D3 — Empilement gauche + réduction de corps.**
Les deux extraits empilés + la grille tiennent sur une slide en réduisant la
taille de corps. La taille se règle par un token **en scope du layout**
(`--text-*` local), jamais un token global. Extrait auteur = le long (Étalon 2),
extrait machine = le court resserré : l'asymétrie de longueur est voulue.

**D4 — Étiquettes.** Reprendre les étiquettes existantes « L'auteur » /
« La machine » au-dessus de chaque extrait empilé.

## Risks / Trade-offs

- **Densité.** Deux extraits (dont un long) + 6 lignes de grille sur une slide :
  risque de surcharge, contre la contrainte « design sobre ». Mitigation :
  corps réduit, panneau-grille compact, extrait machine court. À valider en
  répétition, projeté, dans les deux modes.
- **Teinte des ✓.** Pas de vrai « vert » dans la palette (encre/papier/rouge).
  Le titre et l'uniformité portent le « tout au vert » ; ✓ en encre. Si le sens
  ne passe pas projeté, trancher un vert token en scope (D1).
- **Source hors repo.** La grille vient de `stack fictional writing/` (non
  versionné dans le deck) : le verbatim est recopié dans la slide, donc figé et
  autonome ; noter la provenance en commentaire pour la traçabilité.
- **Honnêteté du « tout au vert ».** Le run C1 dont vient l'extrait machine
  affiché n'est pas 6/6 brut (l'extrait est resserré aux phrases vertes, cf.
  `refonte-arc-figures-gestes`). La grille montrée illustre l'état « tout au
  vert » atteint en calibration (run CH7/C2), cohérent avec le propos « une
  grille verte par construction » — pas une capture trompeuse d'un run précis.
