## Why

Deux retouches sur le lecteur (slide 42), suite au filage :
1. La ligne d'indication `.reader__hint` (« La voix clonée prend le relais. »)
   **révèle la bascule** speaker → voix clonée à l'écran — exactement ce que
   le deck s'interdit (aucune surface ne doit trahir le relais).
2. Le `padding` du cadre (`--space-md`, 2 rem) est trop épais sur un cadre
   borné à 400px.

## What Changes

- `slides/components/ChapterReader.vue` : supprimer le paragraphe
  `.reader__hint` (les deux variantes) et sa règle CSS.
- `.reader__text` : `padding: var(--space-md)` → `var(--space-sm)`.

## Capabilities

### New Capabilities
Aucune.

### Modified Capabilities
Aucune requirement ne change (aucune ne grave l'indication ni le padding).
Retouche UI pure → `skip_specs: true`.

## Impact

- `slides/components/ChapterReader.vue` uniquement.
