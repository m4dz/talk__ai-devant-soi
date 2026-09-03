## Why

Slide 43, l'ouverture de la chute, est en `layout: propos / variant: plain` :
titre `--title-2` calé à gauche dans la colonne 58ch. C'est l'**affirmation**
de la thèse (temps 4 : l'œuvre est mienne parce que la fabrique est mienne) —
elle mérite le traitement des **aphorismes de strate** (slides 11, 18, 29…),
centré et dominant, pour trancher comme eux. Correction du speaker : le mot
final devient **« ouvrage »** (le terme du métier, la chose fabriquée), avec
**« ouvrage » en rouge** pour porter l'accent.

## What Changes

- **Slide 43 (`slides/pages/08-cloture.md`, 1re slide)** : passe en
  `layout: exergue` (variant **aphorisme** = défaut du layout) — même style que
  slides 11 et 18 : phrase centrée, `--title-1`, blockquote, `pulp-bg`.
  - `layout: propos` → `layout: exergue`
  - retirer `variant: plain`
  - `# C'est mon œuvre.` → `C'est mon ouvrage.` (l'exergue rend le contenu en
    blockquote, pas en `<h1>` — comme les autres slides aphorisme)
  - conserver `noCountdown: true`
- **Correction du mot final** : « œuvre » → **« ouvrage »**, avec « ouvrage »
  **en rouge** (`<span style="color: var(--color-accent)">`, s'adapte
  clair/sombre). L'affirmation (temps 4) est préservée ; « ouvrage » renforce
  le cadrage métier/fabrique. Les notes scéniques gardent « œuvre » comme glose
  conceptuelle.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune. Changement de **layout + wording d'une slide** : l'**intention**
(l'affirmation de la chute, temps 4 « affirmée » : l'œuvre/ouvrage est mienne)
ne change pas — « ouvrage » reste l'affirmation, dans le registre métier. Le
deck choisit volontairement ses layouts par archétype ; aucune règle spec ne
fige le layout ou le mot exact d'une slide (cf. `deck-content` « l'intention
prime sur le texte »). Style + wording, intention préservée → `skip_specs: true`.

## Impact

- `slides/pages/08-cloture.md` — frontmatter + ligne de contenu de la slide 43.
- Vérifier **clair et sombre** : la phrase centrée `--title-1` tient sur une ou
  deux lignes propres, et l'enchaînement vers la slide 44 (declaration) reste
  cohérent (deux slides de chute qui se suivent, l'une aphorisme, l'autre
  déclaration — contrôler que ça ne fait pas redite visuelle).
