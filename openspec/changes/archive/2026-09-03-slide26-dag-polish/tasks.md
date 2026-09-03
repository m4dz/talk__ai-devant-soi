## 1. Étiquette de titre

- [x] 1.1 Ajouter `<p class="dag__label">Une orchestration</p>` en tête du
      bloc `.dag` (avant le `<svg>`). Créer la règle `.artefact-slide
      .dag__label` calquée sur `.maquet__label` (font-body, majuscules,
      `letter-spacing: 0.1em`, `--text-sm`, `color: var(--color-accent)`,
      petite marge basse). Pas de h1.

## 2. Flèche rouge (boucle de reprise)

- [x] 2.1 Remplacer le `path` de la boucle rouge
      (`M 604 94 C 590 24, 300 24, 254 46 L 254 94`) par un arc symétrique
      `M 604 96 C 604 30, 254 30, 254 96` — départ haut de GLISSER, arrivée
      haut d'ÉCRIRE, tangente finale verticale.
- [x] 2.2 Vérifier que `marker-end="url(#ahr)"` (pointe rouge) s'aligne
      dans l'axe vertical d'ÉCRIRE (x=254) et pointe bien vers le nœud.
- [x] 2.3 Vérifier que le label « recommence si ça casse » (x=429, y=22)
      reste lisible au-dessus de l'arc (apex ~y=46), sans chevauchement.

## 3. Fragment de code remonté

- [x] 3.1 `.dag__inset` : réduire le `margin-top` (actuellement
      `var(--space-sm)`) pour rapprocher le code du graphe.

## 4. Supprimer la ligne du bas

- [x] 4.1 Retirer le `<p class="dag__caption">J'ai écrit l'atelier, pas le
      chapitre.</p>` et sa règle CSS `.dag__caption` devenue inutile.

## 5. Vérification

- [x] 5.1 Slide 26 : étiquette « Une orchestration » présente (registre
      `.maquet__label`), flèche rouge alignée dans l'axe d'ÉCRIRE, code
      remonté, plus de ligne en bas. Modes clair et sombre.
- [x] 5.2 Le graphe reste lisible, pas de débordement après ajout de
      l'étiquette.
