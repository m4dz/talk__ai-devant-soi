## Why

Slide 12 (section 2, beat 3 — la signature m4dz) affiche sa dernière ligne
`Cette fois, je ne le fais pas seul.` en même temps que le reste du bloc.
C'est la **chute** de la slide — celle qui lance l'allumage. Affichée
d'emblée, elle est lue avant d'être prononcée, ce qui contredit la
requirement existante `deck-content` → « Une chute n'apparaît pas avant
d'être dite ».

## What Changes

- La dernière ligne de la slide 12 (`Cette fois, je ne le fais pas seul.`,
  `<p class="accent-line">`) passe derrière un **pas (`v-click`)** :
  identité + « Depuis 30 ans, j'essaie d'écrire. » à l'entrée, la chute au
  clic suivant.
- Pilotage à la télécommande via l'avancée normale (« next »), aucun
  raccourci dédié.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune requirement ne change. La slide est mise en **conformité** avec la
requirement déjà en vigueur `deck-content` → « Révélation calée sur les
silences du script » (scénario « Une chute n'apparaît pas avant d'être
dite »). Changement d'implémentation pur → `skip_specs: true`.

## Impact

- `slides/pages/02-goncourt.md` — beat 3 (la signature) uniquement.
- Aucun composant, token ou asset touché. Le `<style scoped>` de la slide
  reste inchangé (la classe `accent-line` s'applique dans le `v-click`).
- Vérifier le rendu en modes clair **et** sombre (layout `signature`).
