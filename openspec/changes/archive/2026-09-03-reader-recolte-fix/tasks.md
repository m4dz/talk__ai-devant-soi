## 1. Bornage px + cadre du lecteur

- [x] 1.1 `ChapterReader.vue` `.reader__text` : `max-height: 60vh` →
      `max-height: 400px` (unités canvas, à caler au filage).
- [x] 1.2 Ajouter le cadre : `border: 1px solid var(--color-rule)`,
      `border-radius` (token/valeur douce), `padding: var(--space-sm)`
      (ou `--space-md`). Garder `max-width: 60ch`.
- [x] 1.3 `.reader` : retirer `height: 100%` (le bloc se dimensionne au
      contenu borné, centré par `scene`).

## 2. Défilement continu depuis le haut

- [x] 2.1 `onTimeUpdate` : `anchor = 0` → `scrollTop = ratio * max`
      (`ratio = currentTime / duration`, `max = scrollHeight − clientHeight`).
      Supprimer l'usage de `clonedBlock.offsetTop` comme ancre. (`clonedBlock`
      peut rester pour le style de la portion clonée, mais ne sert plus au
      calage.)
- [x] 2.2 `.reader__text` : retirer `scroll-behavior: smooth` (la saccade
      venait du smooth rejoué à chaque `timeupdate`).

## 3. Slide 42 en scene centré

- [x] 3.1 `slides/pages/07-lecture.md`, slide 42 : retirer `plein: true` du
      frontmatter (le lecteur passe en `scene` centré).

## 4. Slide 40 — note du compteur

- [x] 4.1 `slides/components/Countdown.vue` : « Chapitre prêt — le temps a
      bien été tenu » → « Chapitre prêt ».

## 5. Vérification

- [x] 5.1 Slide 42 : le lecteur est encadré, centré, ne déborde pas — y
      compris en **overview**. Modes clair et sombre.
- [x] 5.2 Le texte lu au départ (portion parlée) est visible en haut, dans
      le cadre, pas hors viewport.
- [x] 5.3 Défilement : continu depuis le haut, sans saut ni saccade, la
      dernière ligne atteinte en fin d'audio (mode mock). Caler la valeur
      `max-height` au besoin.
- [x] 5.4 Slide 40 : la note affiche « Chapitre prêt » (sans la queue).
