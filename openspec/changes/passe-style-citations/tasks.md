# Tasks

## 1. Tokens

- [x] 1.1 `theme/styles/tokens.css` : ajouter `--citation-panel` (fond
      semi-transparent du bloc cité) et `--citation-quote` (guillemet ouvrant,
      accent semi-transparent), mappés pour les DEUX modes depuis les palettes,
      sans valeur codée en dur.

## 2. Layout `citation-sourcee.vue`

- [x] 2.1 Corps cité en **police de corps** (`--font-body`), plus en Sinzano.
- [x] 2.2 Bloc cité aligné à gauche sur **panneau semi-transparent**
      (`--citation-panel`), avec **grand guillemet ouvrant** (`--citation-quote`)
      ancré haut-gauche, en arrière-plan, sans masquer le texte.
- [x] 2.3 Attribution : **auteur plus petit, aligné à droite** sous le bloc ;
      **référence en `.cartouche` alignée à droite** dessous.
- [x] 2.4 Multi-répliques dans le même bloc, **un seul** guillemet ; le
      `v-click` de la 2ᵉ réplique (slides 6, 8) continue de fonctionner.

## 3. Clôture

- [x] 3.1 `08-cloture.md` slide 46 : envelopper la source Gary dans la
      `.cartouche` partagée **en place** (pas via frontmatter `source:` — le
      `v-click` du 3ᵉ clic doit être conservé). Réduire le `<style>` à
      `font-size: var(--text-base)` + marge (sinon la cartouche hérite du grand
      corps de l'exergue et devient énorme).

## 4. Vérification par slide

- [x] 4.1 Slides **6, 8, 9, 10, 38** relues dans les **deux modes** : texte
      lisible, guillemet non masquant, attribution à droite, cartouche source.
- [x] 4.2 Slide **46** : source Gary en cartouche, cohérente avec les citations.
- [ ] 4.3 Export PNG des slides touchées ; planche contact de contrôle.

## 5. Spec & recette

- [x] 5.1 Delta `deck-layouts` finalisé (corps en corps, panneau + guillemet,
      attribution à droite, cartouche partagée ; source toujours non optionnelle).
- [x] 5.2 Delta `deck-theme` finalisé (Sinzano réservé titres + exergue ;
      citations sourcées en corps).
- [x] 5.3 `CLAUDE.md` : Design system — noter que le corps des citations
      sourcées est en police de corps (Sinzano reste aux titres et à l'exergue).
- [x] 5.4 `openspec validate passe-style-citations --strict`.
