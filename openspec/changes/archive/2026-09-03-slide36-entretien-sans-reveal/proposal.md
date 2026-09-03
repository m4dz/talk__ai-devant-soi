## Why

L'entretien de Judith (slide 36, `layout: entretien`) révèle ses trois échanges
**un par un** au pas de clic (`clicks: 3`, trois `<div v-click>`). Le speaker
veut désormais **tout le contenu affiché à l'entrée** de la slide : les trois
Q/R visibles d'un bloc, sans reveal progressif ni battement par question.

## What Changes

- **Slide 36 (`slides/pages/06-mode-personnage.md`, `layout: entretien`)** :
  retirer `clicks: 3` du frontmatter ; les trois `<div v-click class="echange">`
  deviennent `<div class="echange">`. Les trois échanges s'affichent **ensemble
  à l'entrée**, dans l'ordre inchangé (factuelle → interprétative → existentielle).
- **Notes de la slide** : l'indication scénique « 1 « next » par question,
  commentaire sobre » ne tient plus — la retirer/adapter (l'entretien est lu
  d'un bloc).
- **`deck-content`** : la requirement « Le mode personnage, culmination du geste
  Racter » impose un entretien « en progression » et son scénario « Entretien à
  trois questions » dit que les questions « apparaissent successivement ».
  Override décidé par le speaker (2026-09-03) : l'**ordre** est conservé, mais
  l'affichage devient **simultané à l'entrée**.

**Non-goal** : changer le contenu, l'ordre, ou le nombre des questions (trois,
factuelle → interprétative → existentielle), le refus de comprendre en Q3, ou
le statut de rejeu. Seul le **mode d'apparition** change.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

- **deck-content** : la requirement « Le mode personnage, culmination du geste
  Racter » — l'entretien n'apparaît plus **successivement** (au pas de clic)
  mais **d'un bloc à l'entrée**, l'ordre des trois questions restant fixé.

## Impact

- `slides/pages/06-mode-personnage.md` — slide entretien : frontmatter
  (`clicks`) + les trois `v-click` + la note scénique.
- `openspec/specs/deck-content/spec.md` — via le delta.
- CLAUDE.md **inchangé** : il ne fixe que l'ordre et le nombre des questions
  (trois : factuelle, interprétative, existentielle), pas le mode de reveal.
- Vérifier **clair et sombre** : les trois échanges tiennent dans le cadre sans
  reveal (le layout `entretien` avait été calibré pour trois Q/R — contrôler
  qu'aucun débordement n'apparaît une fois tout affiché d'un coup).
