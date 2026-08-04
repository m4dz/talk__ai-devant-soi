# Design — wireframe-trame

Le « pourquoi » est dans `proposal.md`, le « quoi observable » dans les
specs `deck-content` et `deck-layouts`.

## Contexte hérité (jalon 1)

- Racine Slidev = `slides/`. Rappel des recâblages : `theme: ../theme`,
  `publicDir: ../public`, config vite en objet nu (pnpm strict). Voir
  l'archive `bootstrap-deck-skeleton` (design D6).
- Tokens et thème dual-mode en place (`theme/styles/`). Les layouts de ce
  jalon consomment ces tokens, ne les modifient pas.

## Décisions

### D1 — Une section par fichier, imports `src:`

`slides/pages/01-cold-open.md` … `08-cloture.md`. `slides/slides.md`
garde le headmatter global (thème, fonts, colorSchema, favicon) puis
enchaîne les sections via `src: ./pages/0X-*.md`. La slide preuve du
jalon 1 est remplacée par la vraie première section (cold open).

### D2 — Layouts custom dans `theme/layouts/`

Slidev auto-charge les layouts d'un thème depuis `theme/layouts/*.vue`.
Quatre fichiers : `cold-open.vue`, `exergue.vue`, `case-card.vue`,
`wall.vue`. Chacun est un gabarit minimal (slots Vue + classes mappées
sur les tokens), sans logique ni illustration. Usage dans une slide via
`layout: case-card` en frontmatter de slide.

Données d'un `case-card` / `wall` passées en frontmatter de slide (props
du layout) plutôt qu'en markdown libre, pour un gabarit stable :
```yaml
---
layout: case-card
name: Dumas / Maquet
work: Les Trois Mousquetaires
balance: "Humain ████████░░ Machine"
---
Une ligne de contexte.
```

### D3 — Slots des composants live = placeholders inertes

Sections 3 et 7 : pas de composant Vue (jalon 3). On marque l'emplacement
par un bloc visuel inerte + commentaire :
```html
<!-- SLOT: GenerationTrigger (jalon 3) -->
<div class="slot">[ SLOT · GenerationTrigger ]</div>
```
Classe `.slot` stylée dans le thème (bordure tiretée sur `--color-rule`,
label en `--color-muted`). Zéro dépendance, zéro logique réseau. Le
countdown persistant (layer global 3→6) est **noté, pas câblé** ici.

### D4 — Marqueurs de blocage Goncourt

Slide 2 + beat 7 du cold open : contenu placeholder + marqueur visible
`<span class="todo">TODO · citation Goncourt sourcée</span>` et
commentaire HTML. Recherche `grep "TODO"` = liste des blocages restants.
Ces slides restent navigables (structure en place), juste non finalisées.

### D5 — Granularité hybride, beats ajustables

Récit (1, 4, 5) éclaté beat par beat ; argument (2, 6, 8) condensé. Le
nombre exact de beats du cold open et le découpage fin des 4 murs seront
**affinés au fil de l'écriture du déroulé** (scripts hors repo) : chaque
ajustement passe par une petite proposal (CLAUDE.md règle 4), mais la
structure des specs (ordre, cas, murs, derniers mots) reste stable.

## Risques / points ouverts

- **Citation Goncourt** : bloquant connu, 2 slides en attente. Non
  résolu dans ce jalon.
- **Contenu littéraire des slides récit** : volontairement placeholder ;
  la prose définitive vient des scripts de keynote, injectée plus tard.
- **`.slot` / layouts** à re-vérifier dans les deux modes (comme au
  jalon 1) — pas juste au build.
