## Why

Slide 29 (geste Carver, `layout: exergue`) empile **deux phrases sur la même
ligne** — l'aphorisme « La voix, c'est ce que j'ai coupé. » et la question du
seuil « Alors, à qui est la voix ? » — qui fusionnent à l'écran en un seul bloc
Sinzano, lourd et confus (mesuré : trois lignes pleines, la question noyée dans
l'aphorisme). L'aphorisme seul frappe plus fort ; la question du seuil n'a pas
besoin d'être imprimée pour être posée.

## What Changes

- **Slide 29 (`slides/pages/05-descente-technique.md`)** : le texte à l'écran
  devient **le seul aphorisme** — « La voix, c'est ce que j'ai coupé. » La
  ligne « Alors, à qui est la voix ? » **quitte l'écran**.
- **La question du seuil n'est pas supprimée du talk** : elle **descend dans
  les notes speaker** de la slide (elle y figure déjà comme indication). Le
  seuil reste **énoncé une seule fois au geste Carver**, désormais **dit à voix
  haute** plutôt qu'imprimé. Le temps 2 (« aiguisée ») et la réponse à la
  remontée sont intacts.
- **`CLAUDE.md`** : micro-note sur le geste Carver — le seuil s'y énonce **à
  l'oral** (l'écran ne porte que l'aphorisme). L'intention (« C'est ici que le
  seuil s'énonce, en question ») ne change pas.

**Non-goal** : retirer le seuil du récit. S'il fallait le supprimer
entièrement (plus dit du tout), ce serait un autre changement, avec deltas
`deck-content` (temps 2 « aiguisée », scénario « Le seuil court sans revoter »)
et refonte de la réponse à la remontée. Ce n'est **pas** ce changement.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune. Simplification de **wording de slide** : la question du seuil reste
énoncée (à l'oral) au geste Carver, donc l'intention narrative est préservée —
c'est exactement le cas couvert par le scénario `deck-content` « L'intention
prime sur le texte » (le wording d'une slide est simplifié, l'intention reste
celle de la trame). Aucune requirement ne change → `skip_specs: true`.

## Impact

- `slides/pages/05-descente-technique.md` — slide 29 : corps (une ligne au lieu
  de deux) + notes (accueille la question orale).
- `CLAUDE.md` — micro-note geste Carver (seuil oral, non imprimé).
- Vérifier `docs/scripts/04-section-5-descente-fabrique.md` : la réplique du
  seuil doit rester présente (le speaker la dit), même si l'écran ne l'imprime
  plus.
- Vérifier en séquence 28→30, **clair et sombre** : l'aphorisme seul ne doit
  pas paraître orphelin, l'enchaînement vers « La fabrique reste à notre main »
  (slide 30) reste lisible.
