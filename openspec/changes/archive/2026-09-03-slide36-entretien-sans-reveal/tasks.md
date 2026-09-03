## 1. Slide 36 — entretien affiché d'un bloc

- [x] 1.1 `slides/pages/06-mode-personnage.md`, slide `layout: entretien` :
      retirer `clicks: 3` du frontmatter.
- [x] 1.2 Les trois `<div v-click class="echange">` → `<div class="echange">`
      (retirer la directive `v-click`, garder l'ordre factuelle →
      interprétative → existentielle).
- [x] 1.3 Adapter la note scénique (`<!-- -->`) : « 1 « next » par question »
      ne tient plus (entretien lu d'un bloc) ; garder « commentaire sobre » et
      « NE JAMAIS pointer que c'est un rejeu ».

## 2. Vérification

- [x] 2.1 Slide 36, **clair et sombre** : les trois Q/R tiennent dans le cadre
      d'un seul coup, sans débordement (le layout `entretien` était calibré avec
      reveal — contrôler la hauteur une fois tout affiché).
- [x] 2.2 Séquence 35→36→37 : l'entretien reste lisible, l'aveu (slide suivante)
      inchangé.
- [x] 2.3 `openspec validate slide36-entretien-sans-reveal --strict`.
