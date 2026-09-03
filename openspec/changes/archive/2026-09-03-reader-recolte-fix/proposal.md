## Why

Sur la slide 42 (récolte, `<ChapterReader>`), le lecteur de chapitre est mal
posé : il **déborde de la slide et de l'overview**, le texte que le speaker
lit au départ est **déjà hors viewport**, et le défilement **saute** puis ne
descend pas jusqu'au bout. Cause racine : `.reader__text` est borné en
`max-height: 60vh`, or le canvas Slidev est une surface fixe **scalée par un
transform** — `vh` résout contre la vraie fenêtre, pas le canvas (piège
documenté dans le projet). En overview, chaque slide est réduite mais la
fenêtre reste pleine → 60vh devient gigantesque. Le « saut » vient en plus
d'un ancrage du défilement sur le bloc cloné (bond de `scrollTop` à t=0) et
d'un `scroll-behavior: smooth` rejoué à chaque `timeupdate`.

Accessoirement, slide 40 : la note du compteur à zéro affiche « Chapitre
prêt — le temps a bien été tenu » ; le speaker veut couper la queue.

## What Changes

- **Défilement repensé** (décision speaker) : au lieu d'ancrer le défilement
  sur la portion clonée (ce qui provoque un saut), le texte défile **en
  continu depuis le haut**, linéairement calé sur `currentTime/duration`,
  au rythme de l'audio cloné, **sans saut** — comme une lecture humaine du
  haut jusqu'au bout.
- **Le lecteur tient dans la slide** : `.reader__text` borné en **unités
  canvas (px)**, jamais en `vh` ; **cadre** visible pour le délimiter
  (bordure, rayon, padding) ; plus de débordement, y compris en overview.
- **Slide 42 en `scene` centré** : on abandonne `scene--plein` (plein-cadre)
  au profit d'un bloc encadré centré avec marges (décision speaker).
- **Défilement fluide** : retrait de `scroll-behavior: smooth` (source de la
  saccade) ; le calage se fait par petits pas de `timeupdate`.
- **Slide 40** : `Countdown.vue` — note d'état `ready` « Chapitre prêt — le
  temps a bien été tenu » → « Chapitre prêt ».

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

- `chapter-reader` :
  - **MODIFIED** « Défilement suivant la lecture » — le modèle de
    défilement passe d'un ancrage sur la portion clonée à un **défilement
    linéaire continu depuis le haut**, au rythme de l'audio, sans saut.
  - **ADDED** « Le lecteur reste dans les limites de la slide » — bornage en
    px canvas (pas de `vh`), cadre, aucun débordement.

Le retrait de la queue de note du compteur (slide 40) ne touche aucune
requirement (`deck-countdown` ne grave pas ce libellé).

## Impact

- `slides/components/ChapterReader.vue` — bornage px + cadre, `onTimeUpdate`
  (anchor = 0, map linéaire), retrait de `smooth`.
- `slides/pages/07-lecture.md` — slide 42 : `plein: true` retiré.
- `slides/components/Countdown.vue` — libellé note `ready` (slide 40).
- Valeur px du bornage (~400) **à caler au filage** ; vérifier clair/sombre,
  overview, et le défilement jusqu'à la dernière ligne.
