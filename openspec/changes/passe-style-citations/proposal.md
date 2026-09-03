## Why

Le layout `citation-sourcee` remplit son cahier des charges fonctionnel
(citation + auteur + référence, dans les deux modes) mais **sa mise en page
n'a pas eu de passe de style dédiée**. Les slides qui l'emploient — cold open
beat 6 (le pivot vers l'IA), pivot beats 8/9/10 (Assouline, clause Madrigall)
— portent des propos **sourcés**, pièces à conviction du talk : leur hiérarchie
typographique (citation vs attribution vs référence), leur respiration et leur
traitement pulp doivent être **délibérés**, pas hérités par défaut.

Tâche extraite de `refonte-arc-narratif` (ex-7.1), sortie en change propre pour
ne pas retenir l'archivage de la refonte : la refonte est appliquée, ce polish
est un travail distinct, encore à concevoir.

## What Changes

- Passe de style sur le layout `citation-sourcee` : hiérarchie citation /
  attribution / référence explicitée, respiration et traitement pulp (trame,
  accent, ombre) posés en intention, pas seulement « lisible ».
- Vérification slide par slide des emplois : cold open 6, pivot 8/9/10 — dans
  les deux modes.
- Le concret (échelle, gouttières, placement de la source) se tranche **dans
  ce change**, à la première itération de style ; la proposal ne le fige pas.

## Impact

- Spec : `deck-layouts` — **MODIFIED** « Layout citation sourcée » (ajout d'une
  clause de hiérarchie/traitement délibéré, sans retirer l'exigence de source).
- Code : `theme/layouts/citation-sourcee.vue`, styles associés ; slides
  `01-cold-open.md`, `02-goncourt.md` (emplois).
- Aucune dépendance bloquante : indépendant des refontes d'arc.
