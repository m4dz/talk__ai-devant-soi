## 1. Layout diptyque-grille

- [x] 1.1 Créer `theme/layouts/diptyque-grille.vue` : deux colonnes asymétriques
      (rail texte ~`1.1fr` / panneau-grille ~`0.9fr`), titre en frontmatter
      `titre`, intitulé de grille en frontmatter `verdict`, slots `#gauche`
      (extraits empilés) et `#grille`.
- [x] 1.2 Colonne gauche : empiler les deux extraits, chacun sous son étiquette
      (« L'auteur » au-dessus, « La machine » en dessous) ; réutiliser le style
      d'étiquette du `diptyque` existant (tokens).
- [x] 1.3 Colonne droite : panneau-grille encadré (filet `--color-rule`, fond
      léger façon `piece-a-conviction`), tableau lisible, marques `✓` uniformes
      en encre (pas de vert importé — cf. design D1).
- [x] 1.4 Réduire la taille de corps via un token **en scope du layout**
      (`--text-*` local), jamais un token global, pour que tout tienne.
- [x] 1.5 Vérifier : aucune couleur ni taille codée en dur ; tout en tokens.

## 2. Slide Malley

- [x] 2.1 Dans `slides/pages/05-descente-technique.md`, passer la slide
      « Grille de style : tout au vert » de `layout: diptyque` à
      `layout: diptyque-grille`.
- [x] 2.2 Empiler les deux extraits existants dans `#gauche` (verbatims
      inchangés : auteur = Étalon 2 ; machine = run C1 resserré).
- [x] 2.3 Remplir `#grille` avec le bloc mécanique tout au vert (6 règles ✓,
      verbatim, cf. design D2) ; citer la source en commentaire de slide
      (`grille-lint-chapitre-7.md`, run CH7).
- [x] 2.4 Renseigner `verdict` (ex. « Lint de style — tout au vert ») et garder
      `titre`.

## 3. Validation

- [x] 3.1 `openspec validate malley-grille-lint-diptyque --strict` passe.
- [x] 3.2 Rendre la slide dans les **deux modes** (dark/light) : deux extraits
      + grille tiennent sans débordement, tout lisible projeté.
- [x] 3.3 Relire à l'oral : le propos « la même grille les valide tous les deux,
      un seul est vivant » est désormais montré, pas seulement dit.
