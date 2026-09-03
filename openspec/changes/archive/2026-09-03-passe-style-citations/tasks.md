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
- [x] 2.5 Césure **nom / titre** de l'auteur : `<br>` après la première
      virgule ; virgules internes du titre non césurées.

## 3. Typographie française (contenu)

- [x] 3.1 Espace fine insécable (U+202F) après « / avant » et avant ? ! ; sur
      les slides de citation (01, 02, 06).
- [x] 3.2 Slide 10 : `<br>` forcé entre les deux répliques.

## 4. Clôture

- [x] 4.1 `08-cloture.md` slide 46 : source Gary dans la `.cartouche` partagée
      **en place** (pas via frontmatter `source:` — conserver le `v-click`).
- [x] 4.2 Règle `.exergue--chute .sig-gary` dans **`theme/styles/base.css`**
      (pas de `<style>` de slide : casse le compilateur Slidev) : `font-size`
      de corps + `margin-inline: auto` pour **recentrer** horizontalement.

## 5. Spec & recette

- [x] 5.1 Delta `deck-layouts` finalisé (corps en corps, panneau + guillemet,
      attribution nom/titre à droite, cartouche partagée, typo FR ; source
      toujours non optionnelle).
- [x] 5.2 Delta `deck-theme` finalisé (Sinzano réservé titres + exergue ;
      citations sourcées en corps).
- [x] 5.3 `CLAUDE.md` : Design system — noter que le corps des citations
      sourcées est en police de corps (Sinzano reste aux titres et à l'exergue).
- [x] 5.4 `openspec validate passe-style-citations --strict`.

## 6. Vérification par slide

- [x] 6.1 Slides **6, 8, 9, 10, 38** relues dans les **deux modes** : texte
      lisible, guillemet non masquant, attribution nom/titre à droite, cartouche
      source, fines insécables.
- [x] 6.2 Slide **46** : source centrée (delta mesuré 0), cohérente avec les
      citations.
- [x] 6.3 Vérification visuelle par capture (chrome-devtools), les deux modes.
      Export PNG Slidev + planche formels non lancés (verif ad-hoc jugée
      suffisante pour ce périmètre).
