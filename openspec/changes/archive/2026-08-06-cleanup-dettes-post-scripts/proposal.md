## Why

Trois dettes repérées à l'audit post-intégration des scripts (sections
1-3). Aucune ne change le comportement du deck — c'est du nettoyage, de la
traçabilité de décision et un ajustement de wording. `skip_specs: true`
en conséquence.

## What Changes

1. **`theme/styles/wireframe.css` supprimé** : ses deux classes (`.slot`
   placeholder de composant, `.todo` marqueur de blocage) ne sont plus
   utilisées nulle part — les slots ont été remplacés par les vrais
   composants live (jalon 3) et les marqueurs `TODO` sont tombés avec la
   levée du blocage Goncourt. Code mort, retiré avec son import.
2. **« À trancher » #5 acté dans `CLAUDE.md`** : le modèle de génération
   d'images local est tranché en pratique depuis le jalon 5C —
   **FLUX.2 Klein 4B** (Apache 2.0) via **mflux** (MLX, Apple Silicon).
   La question restait ouverte dans la constitution alors que la décision
   est prise et documentée.
3. **Slide identité (section 2, beat 3)** : le script laissait
   `[Prénom / m4dz]`. Le deck n'affichait que le pseudo ; on pose le nom
   complet avec le pseudo.
4. **Apostrophes typographiques** (repéré à la vérification) : les
   paragraphes écrits en HTML brut (`<p class="…">`) échappent au
   smartypants du markdown et gardaient des apostrophes droites (`n'est`)
   là où le reste du deck a des courbes (`n’est`). Corrigé sur les 4 blocs
   concernés (sections 2 et 3) — la typo porte le propos, l'incohérence se
   voit en projection.

Non-goals : fixtures de fallback (attendent le vrai chapitre de secours de
*L'Involontaire*) ; contenu des sections 4-8 (attend les scripts) ;
jalon 4.

## Capabilities

Aucune. `skip_specs: true` — suppression de code mort, mise à jour de
documentation, ajustement de wording : aucun comportement observable
spécifié ne change.

## Impact

- **Supprimé** : `theme/styles/wireframe.css` (+ son import dans
  `theme/styles/index.ts`).
- **Modifié** : `CLAUDE.md` (question #5 tranchée),
  `slides/pages/02-goncourt.md` (slide identité).
- **Dépendances / réseau** : aucun.
