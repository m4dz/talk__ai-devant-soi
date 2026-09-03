## Why

Le layout `citation-sourcee` remplit son cahier des charges fonctionnel
(citation + auteur + référence, dans les deux modes) mais **sa mise en page
n'a pas eu de passe de style dédiée** : citation centrée en Sinzano, auteur
centré, cartouche de source centrée — sans hiérarchie ni traitement pulp
délibéré. Ces slides portent des propos **sourcés**, pièces à conviction du
talk (Assouline, clause Madrigall, Andrea, Le Tellier) : elles méritent un
traitement propre qui les distingue de la voix lyrique de l'exergue.

Tâche extraite de `refonte-arc-narratif` (ex-7.1), sortie en change propre.

## What Changes

### Périmètre — 5 slides `citation-sourcee`

**6** (cold open, Assouline), **8**, **9**, **10** (goncourt : Assouline,
clause Madrigall, Andrea), **38** (mode personnage, Le Tellier). Le trio
goncourt (8/9/10) est traité ensemble pour rester homogène.

### Refonte du layout `citation-sourcee`

- **Corps de citation en police de corps, plus en Sinzano.** La citation
  sourcée est une pièce à conviction ; l'exergue garde Sinzano pour ses punchs
  lyriques. Sépare visuellement les deux voix. → divergence de règle Sinzano
  actée (voir delta `deck-theme`).
- **Mise en exergue du bloc cité** : panneau **semi-transparent** sous la
  citation, et un **grand guillemet ouvrant en accent, semi-transparent, ancré
  en haut à gauche** du bloc. Panneau et guillemet en **tokens**, lisibles dans
  les deux modes, sans masquer le texte. La composition passe de **centrée** à
  **alignée à gauche**.
- **Attribution en hiérarchie, à droite** : l'auteur **plus petit, aligné à
  droite** sous le bloc ; puis la **référence dans la cartouche partagée**
  (encadré), également alignée à droite.
- **Multi-répliques** : les slides à deux répliques (6, 8, 10 — dont un
  `v-click`) tiennent dans le même bloc sous **un seul** guillemet ouvrant.

### Harmonisation de la source de clôture (slide 46)

La sortie Gary (`08-cloture`, `exergue variant: chute`) porte sa source dans un
`<p class="sig-gary">` **custom**. On l'enveloppe dans la **`.cartouche`
partagée** → encadré capitales, **style de source homogène** avec les citations.
On la garde **en place** (pas via le frontmatter `source:` du layout) pour
conserver le `v-click` du 3ᵉ clic ; une `font-size` de corps évite que la
cartouche hérite du grand corps de l'exergue.

## Impact

- Specs : `deck-layouts` — **MODIFIED** « Layout citation sourcée » (corps en
  police de corps, panneau + guillemet, attribution à droite, cartouche
  partagée) ; `deck-theme` — **MODIFIED** « Typographie pulp auto-hébergée »
  (Sinzano réservé aux titres et à l'exergue ; citations sourcées en corps).
- Code : `theme/layouts/citation-sourcee.vue` + styles + tokens
  (`--citation-panel`, `--citation-quote`) ; slides `01-cold-open.md`,
  `02-goncourt.md`, `06-mode-personnage.md` (emplois), `08-cloture.md`
  (frontmatter `source`).
- `.cartouche` (globale, `pulp.css`) **inchangée** — réutilisée telle quelle.
- Aucune dépendance bloquante ; indépendant des refontes d'arc (archivées).
