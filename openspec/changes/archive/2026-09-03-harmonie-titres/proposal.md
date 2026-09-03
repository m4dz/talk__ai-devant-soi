## Why

Les titres Sinzano manquent d'homogénéité à deux endroits. (1) Sur la suite
12 → 16, ils sautillent `2 → 3 → 2 → 3 → 3 rem` : deux slides (12 signature,
14 bandeau ambiance) sont en `--title-3` là où 13/15/16 sont en `--title-2`.
Les slides **31** (inventaire de la remontée) et **36** (l'entretien) portent
le même défaut — un titre en `--title-3` sous-dimensionné. (2) À l'inverse,
les slides **exergue « aphorisme »** — la phrase à emporter d'une strate —
ne dominent pas assez : leur exergue est en `--title-2`, à égalité avec les
titres de contenu, alors que l'aphorisme doit trancher.

Par ailleurs la slide 15 empile **quatre** éléments rouges (titre, interdit,
en-têtes de tableau, filet du prompt) et son corps, centré verticalement,
fait arriver le tableau trop bas.

## What Changes

- **Titres de contenu harmonisés en `--title-2` (3rem)** (décision speaker).
  Slides déjà en title-2 : 13, 15, 16. Passent en title-2 :
  - `theme/layouts/signature.vue` — `.signature--with-figure h1` :
    title-3 → title-2 (slide 12 ; le nom long passe sur **deux lignes**,
    accepté). Single-use.
  - `theme/layouts/ambiance.vue` — `.ambiance--colonne h1` :
    title-3 → title-2 (slide 14). Single-use.
  - `theme/layouts/propos.vue` — `.propos--inventaire h1` :
    title-3 → title-2 (slide 31). Single-use.
  - `theme/layouts/entretien.vue` — `.entretien h1` :
    title-3 → title-2 (slide 36). Single-use. **Point de vigilance** : ce
    layout avait *réduit* son h1 à title-3 pour laisser la place aux trois
    Q/R ; title-2 est un entre-deux, à contrôler à l'œil (pas de
    chevauchement avec les échanges).
- **Exergue « aphorisme » en `--title-1` (4.5rem)** (décision speaker).
  `theme/layouts/exergue.vue` — `.exergue--aphorisme .exergue__quote` :
  title-2 → title-1. Change **global** au variant : affecte 5 slides
  (11 « Peut-on tracer la limite », 18, 29, 30, 37). Les variants `titre`
  (title-display) et `chute` (title-1) ne bougent pas. L'aphorisme domine
  alors le contenu (title-2) — hiérarchie voulue, pas une disharmonie.
- **Slide 15 — un seul rouge** (décision speaker) : rouge conservé
  uniquement sur l'interdit « aucune explication » (geste Carver). Passent
  en neutre : le **titre** `Chapitre 7 : l'anniversaire`, les **en-têtes de
  tableau** (`th`), le **filet** du bloc prompt.
- **Slide 15 — corps remonté** : le bloc de contenu est décalé vers le haut
  pour que le tableau ne tombe plus en bas de cadre.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune requirement ne change. Le deck varie **volontairement** les tailles
de titre par archétype (exergue-titre en title-display, exergue-aphorisme
désormais en title-1, contenu en title-2) ; il n'existe pas de règle globale
d'échelle à poser. La « règle de l'unique rouge » du design system porte sur
les **figures**, pas sur les slides de contenu ; réduire le rouge de la
slide 15 est un choix de style. Changement de style pur → `skip_specs: true`.

## Impact

- `theme/layouts/signature.vue`, `ambiance.vue`, `propos.vue`,
  `entretien.vue` — taille H1 (chaque variant single-use : slides 12, 14,
  31, 36).
- `theme/layouts/exergue.vue` — taille de l'exergue variant aphorisme
  (slides 11, 18, 29, 30, 37).
- `slides/pages/03-lancement.md` — `<style scoped>` de la slide 15
  (couleurs titre/`th`/filet + calage vertical du corps).
- Vérifier en séquence, **modes clair et sombre** : la suite 12→16, les
  slides 31 et 36, les 5 aphorismes, le wrap du nom slide 12, et l'entretien
  (slide 36) qui ne doit pas se faire manger par un titre trop gros.
