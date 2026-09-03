## Why

Le cadre du lecteur (slide 42) est une simple bordure. Le speaker veut
l'habiller comme les objets pulp montés (`.pulp-figure__object`, ex. slide
20) : un carton mat crème avec ombre portée, façon photo épinglée sur le mur.

## What Changes

- `slides/components/ChapterReader.vue`, `.reader__text` : remplacer
  `border` + `border-radius` par le traitement pulp —
  `background: var(--pulp-mat)` (carton crème) + `box-shadow:
  var(--pulp-shadow)`. Padding conservé.
- **Piège mode sombre** : `--pulp-mat` est **crème fixe** dans les deux
  modes ; le texte doit donc être figé en encre sombre, sinon il devient
  illisible en dark (où `--color-ink` vire au clair). `.reader__spoken` →
  `var(--pal-clair-muted)`, `.reader__cloned` → `var(--pal-clair-ink)`
  (toujours sombres, comme sur un objet pulp crème).

## Capabilities

### New Capabilities
Aucune.

### Modified Capabilities
Aucune requirement ne change : `chapter-reader` demande que le lecteur soit
**visuellement délimité par un cadre** — le carton mat + ombre le délimite
tout autant qu'une bordure (la « bordure » citée dans le scénario n'était
qu'un exemple). Habillage UI pur → `skip_specs: true`.

## Impact

- `slides/components/ChapterReader.vue` uniquement (`.reader__text`,
  `.reader__spoken`, `.reader__cloned`).
- Vérifier la lisibilité du texte sur le mat crème en modes clair **et**
  sombre.
