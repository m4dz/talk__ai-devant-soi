## Why

La slide 26 (geste Queneau, l'artefact : le DAG d'orchestration LangGraph)
a quatre défauts de mise en page : pas de titre, une flèche rouge de boucle
de reprise au tracé absurde (arc plat, pointe désaxée), un fragment de code
trop bas (margin-top excessif) et une ligne de trop en bas de slide.

## What Changes

- **Étiquette de titre** : ajouter une étiquette à la slide 26 —
  **« Une orchestration »** — sous forme de `<p class="dag__label">`, stylée
  comme les `.maquet__label` de la slide 24 (majuscules, tracking, accent,
  `--text-sm`). **Pas** un h1.
- **Flèche rouge (boucle de reprise GLISSER → ÉCRIRE)** : remplacer le tracé
  actuel (`M 604 94 C 590 24, 300 24, 254 46 L 254 94`, arc plat + stub
  vertical) par un **arc propre et symétrique** dont la tangente d'arrivée
  est verticale, pour que la **pointe rouge s'aligne dans l'axe** de la
  colonne ÉCRIRE (x=254). Nouveau tracé : `M 604 96 C 604 30, 254 30,
  254 96`.
- **Fragment de code** (`.dag__inset`) : réduire le `margin-top` — le
  remonter sous le graphe.
- **Ligne en bas** : supprimer le `.dag__caption` « J'ai écrit l'atelier,
  pas le chapitre. » — la seule ligne en bas de la slide. Le punchline du
  geste Queneau reste porté par la slide 25 (case-card : « Il a écrit la
  machine »), rien n'est perdu.

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune requirement ne change. `deck-content` demande, pour Queneau, « le
graphe d'orchestration » comme artefact — l'étiquette « Une orchestration »
le renforce ; retirer la légende ne retire pas le geste (porté par la
slide 25). Polish visuel/mise en page pur → `skip_specs: true`.

## Impact

- `slides/pages/05-descente-technique.md` — slide 26 uniquement (markup +
  `<style>` de `.dag`).
- Aucun layout, token ou asset touché.
- Cohérence : la slide 24 étiquette ses blocs avec `.maquet__label`
  (accent, majuscules) ; la slide 26 reçoit le même registre via
  `.dag__label`.
- Vérifier à l'œil (clair + sombre) : la nouvelle flèche rouge pointe bien
  dans l'axe d'ÉCRIRE, sans chevaucher le label « recommence si ça casse ».
