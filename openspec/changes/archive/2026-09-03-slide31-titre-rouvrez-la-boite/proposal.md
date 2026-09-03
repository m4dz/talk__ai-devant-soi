## Why

Le titre de la slide 31 (remontée, inventaire des gestes) est « Rouvrez la
boîte noire ». Le speaker le veut plus court à l'écran — « Rouvrez la boîte » —
pour qu'il frappe. Le qualificatif « noire » est déjà porté par le contexte (la
boîte noire effrayante du début, ouverte couche par couche), il n'a pas besoin
d'être répété dans le grand titre.

## What Changes

- **Slide 31 (`slides/pages/05-descente-technique.md`, l.497)** : titre
  `# Rouvrez la boîte noire` → `# Rouvrez la boîte`. Circonflexe conservé
  (cohérent avec les autres « boîte » du deck).
- **La métaphore de la boîte noire n'est pas retirée** : elle reste dans les
  notes et l'arc (« la boîte noire du début, vidée sous leurs yeux » ; le pont
  dev implicite). Seul le grand titre est raccourci.

**Non-goal** : effacer la métaphore boîte noire du talk. Les occurrences des
notes/indications scéniques (l.6, 15, 483, 508, 515) restent.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune. Simplification de **wording de titre** : la métaphore de la boîte noire
et le pont dev implicite restent portés par l'arc et les notes — l'intention
narrative ne change pas. Cas couvert par le scénario `deck-content`
« L'intention prime sur le texte ». Aucune requirement ne change →
`skip_specs: true`.

## Impact

- `slides/pages/05-descente-technique.md` — slide 31, ligne du titre `# `.
- Vérifier en séquence 30→31→32, **clair et sombre** : le titre raccourci reste
  lisible, l'inventaire (v-clicks) et la chute « pas de seuil » inchangés.
- Aucun autre fichier : la métaphore boîte noire reste dans les notes.
