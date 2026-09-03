## 1. Harmoniser les titres de contenu en title-2

- [x] 1.1 `theme/layouts/signature.vue` : `.signature--with-figure :deep(h1)`
      `--title-3` → `--title-2`. Mettre à jour le commentaire qui justifiait
      title-3 (wrap sur 2 lignes désormais accepté). Slide 12.
- [x] 1.2 `theme/layouts/ambiance.vue` : `.ambiance--colonne .ambiance__band
      :deep(h1)` `--title-3` → `--title-2`. Slide 14.
- [x] 1.3 `theme/layouts/propos.vue` : `.propos--inventaire :deep(h1)`
      `--title-3` → `--title-2`. Slide 31.
- [x] 1.4 `theme/layouts/entretien.vue` : `.entretien :deep(h1)`
      `--title-3` → `--title-2`. Mettre à jour le commentaire (l'ancien
      justifiait title-3 pour la place des Q/R). Slide 36.
- [x] 1.5 Confirmer que 13/15/16 sont déjà en title-2 (propos--plain +
      override `.plan-scenes h1`) — aucune retouche.

## 2. Exergue aphorisme en title-1

- [x] 2.1 `theme/layouts/exergue.vue` : `.exergue--aphorisme .exergue__quote`
      `--title-2` → `--title-1`. Mettre à jour le commentaire. Affecte les
      slides 11, 18, 29, 30, 37 (variants `titre` et `chute` intacts).

## 3. Slide 15 — un seul rouge

- [x] 3.1 `slides/pages/03-lancement.md`, slide 15 : retirer le rouge du
      **titre** (`<span class="rouge">` autour de `Chapitre 7 :
      l'anniversaire`).
- [x] 3.2 En-têtes de tableau `th` : `color: var(--color-accent)` → neutre
      (`--color-ink` / `--color-fg`).
- [x] 3.3 Filet du bloc prompt : `border-left` `--color-accent` →
      `--color-rule`.
- [x] 3.4 Conserver le rouge **uniquement** sur `aucune explication`
      (`.plan-prompt .rouge`) — vérifier qu'il reste le seul rouge.

## 4. Slide 15 — remonter le corps

- [x] 4.1 `.plan-scenes` : décaler le contenu vers le haut (p. ex.
      `justify-content: center` → `flex-start` avec léger offset, ou réduire
      les marges du bloc prompt) pour que le tableau ne tombe plus en bas.

## 5. Vérification

- [x] 5.1 Suite 12→16 : titres homogènes (3rem), pas de saut. Clair + sombre.
- [x] 5.2 Slides 31 et 36 : titres en title-2, cohérents. Slide 36
      (entretien) : le titre ne mange pas la place des trois Q/R.
- [x] 5.3 Aphorismes (11, 18, 29, 30, 37) : exergue en title-1, dominant,
      sans débordement ni perte de ligatures Sinzano. Clair + sombre.
- [x] 5.4 Slide 12 : nom sur deux lignes sans chevaucher le portrait.
- [x] 5.5 Slide 15 : un seul rouge ; tableau remonté et lisible.
