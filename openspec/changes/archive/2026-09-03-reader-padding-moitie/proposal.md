## Why

Le padding du cadre du lecteur (slide 42) reste trop épais. Le speaker veut
le réduire de moitié.

## What Changes

- `slides/components/ChapterReader.vue`, `.reader__text` :
  `padding: var(--space-sm)` (1 rem) → `var(--space-xs)` (0,5 rem).

## Capabilities

### New Capabilities
Aucune.

### Modified Capabilities
Aucune requirement ne change. Retouche UI pure → `skip_specs: true`.

## Impact

- `slides/components/ChapterReader.vue` uniquement.
