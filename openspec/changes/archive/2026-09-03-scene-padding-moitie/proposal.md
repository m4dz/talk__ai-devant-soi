## Why

Trop d'air autour du lecteur (slide 42) : le layout hérite du padding global
`.slidev-layout` = `--space-xl` (5 rem). Le speaker veut moitié moins d'air
autour du cadre.

## What Changes

- `theme/layouts/scene.vue`, `.scene` : `padding: calc(var(--space-xl) / 2)`
  (2,5 rem) au lieu du `--space-xl` (5 rem) hérité de `.slidev-layout`.
- Le padding **global** `.slidev-layout` n'est PAS touché (toutes les autres
  slides gardent leur air). Seul le layout `scene` est resserré — ses deux
  slides (40 compteur, 42 lecteur) sont des « dispositif seul » qui gagnent à
  moins de marge.

## Capabilities

### New Capabilities
Aucune.

### Modified Capabilities
Aucune requirement ne change. Réglage de marge de layout → `skip_specs: true`.

## Impact

- `theme/layouts/scene.vue` (slides 40 et 42).
