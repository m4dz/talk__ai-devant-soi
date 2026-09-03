## Why

Slide 4 (cold open, beat 4) affiche ses deux lignes d'un seul bloc :
« Ajar, c'est Romain Gary. » puis « Et on ne reçoit le Goncourt qu'une
seule fois. » La seconde ligne est la **chute** du beat — la règle cruelle
qui rend le canular irréversible. Affichée d'emblée, elle est lue par la
salle avant d'être prononcée, ce qui contredit la requirement existante
« Une chute n'apparaît pas avant d'être dite » (`deck-content`).

## What Changes

- La 2e ligne de la slide 4 (`Et on ne reçoit le Goncourt qu'une seule
  fois.`) passe derrière un **pas (`v-click`)** : la ligne 1 s'affiche à
  l'entrée, la chute au clic suivant.
- Pilotage à la télécommande via l'avancée normale (« next »), aucun
  raccourci dédié — conforme au geste scénique du deck.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune requirement ne change. La slide est mise en **conformité** avec la
requirement déjà en vigueur `deck-content` → « Révélation calée sur les
silences du script » (scénario « Une chute n'apparaît pas avant d'être
dite »). Changement d'implémentation pur → `skip_specs: true`.

## Impact

- `slides/pages/01-cold-open.md` — beat 4 uniquement (la slide 4).
- Aucun composant, token ou asset touché.
- Vérifier le rendu du `v-click` en modes clair **et** sombre (layout
  `ambiance`, fond perdu).
