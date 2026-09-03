## 1. Fond mode-aware

- [x] 1.1 `.reader__text` : `background: var(--pulp-mat)` → `var(--color-paper)`.
- [x] 1.2 Ajouter `html.dark .reader__text { background: color-mix(in srgb, var(--color-ink) 10%, var(--color-paper)); }`.

## 2. Texte mode-aware

- [x] 2.1 `.reader__spoken` : `var(--pal-clair-muted)` → `var(--color-muted)`.
- [x] 2.2 `.reader__cloned` : `var(--pal-clair-ink)` → `var(--color-ink)`.

## 3. Vérification

- [x] 3.1 Clair : crème + ombre (inchangé). Sombre : panneau levé sur l'encre,
      ombre/contour visibles, texte clair lisible.
