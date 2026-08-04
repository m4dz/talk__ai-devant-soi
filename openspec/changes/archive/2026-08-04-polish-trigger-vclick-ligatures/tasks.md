# Tasks — polish-trigger-vclick-ligatures

## 1. GenerationTrigger en V-click

- [x] 1.1 `pages/03-lancement.md` — ajouter `clicks: 1` (pas de lancement)
- [x] 1.2 `GenerationTrigger.vue` — watcher `$clicks` : au seuil →
  `onTrigger()` (start + generate), idempotent ; conserver le clic souris
  comme secours + le feedback visuel

## 2. Ligatures Sinzano

- [x] 2.1 `theme/styles/base.css` — retirer `letter-spacing` de la règle
  titres (`.slidev-layout h1,h2,h3,.title`)

## 3. Vérification

- [x] 3.1 `pnpm run build` OK
- [x] 3.2 Au navigateur : avancer (télécommande = flèche) sur la slide de
  lancement → génération démarre ; re-déclenchement (souris/flèche) = pas
  de relance
- [x] 3.3 Titres/exergues Sinzano : ligatures visibles (comparer cold-open
  / exergue) ; les deux modes
- [x] 3.4 Invariant hors-ligne : build sans URL externe
