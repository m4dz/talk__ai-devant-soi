## Why

Le cadre du lecteur (slide 42) est un mat crème FIXE (`--pulp-mat`) avec texte
figé sombre. En mode sombre c'est faux : le crème jure sur le fond d'encre, et
l'ombre pulp (noir sur noir) disparaît → le carton ne se détache plus. Il faut
adapter le ton au dark mode.

## What Changes

- `slides/components/ChapterReader.vue`, `.reader__text` : passer d'un mat
  crème fixe à un fond **mode-aware** :
  - fond `var(--color-paper)` (crème en clair — identique au rendu actuel ;
    encre en sombre) ;
  - **override sombre** : `html.dark .reader__text` lève le panneau d'un voile
    d'encre (`color-mix(--color-ink 10%, --color-paper)`) pour qu'il se
    détache du fond de slide (sinon l'ombre noire est invisible sur noir).
- Texte repassé en mode-aware : `.reader__spoken` → `var(--color-muted)`,
  `.reader__cloned` → `var(--color-ink)` (au lieu des `--pal-clair-*` figés).
- `box-shadow: var(--pulp-shadow)` conservé (déjà mode-aware).

## Capabilities

### New Capabilities
Aucune.

### Modified Capabilities
Aucune requirement ne change (le lecteur reste un cadre délimité). Habillage
UI → `skip_specs: true`.

## Impact

- `slides/components/ChapterReader.vue` uniquement.
- Vérifier le contraste et la lisibilité dans les DEUX modes (crème+sombre en
  clair, panneau levé + texte clair en sombre).
