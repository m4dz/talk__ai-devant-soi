## Contexte

`<ChapterReader>` (slide 42) affiche le chapitre, découpé au marqueur
`BASCULE` : portion **avant** (lue à voix haute par le speaker) puis portion
**clonée** (couverte par le WAV). L'audio ne couvre que la portion clonée.

## Problème : `vh` dans un canvas scalé

Le canvas Slidev est une surface fixe (≈980×551) rendue par un `transform:
scale(...)` pour tenir dans la fenêtre. `max-height: 60vh` résout contre la
**fenêtre réelle**, pas le canvas :

- en présentation plein écran, 60vh ≫ hauteur du canvas scalé → le scroller
  dépasse la slide, le haut (portion parlée) sort du cadre ;
- en overview, la fenêtre reste pleine tandis que la slide est une
  miniature → 60vh est démesuré → débordement massif.

**Décision** : bornage en **px canvas**. Le canvas fait ~551u de haut ; un
lecteur centré avec marges tient dans ~400px (laisse ~75u haut/bas). Valeur
exacte à caler au filage (tâche de vérif).

## Défilement : ancrage → linéaire depuis le haut

Modèle actuel (`onTimeUpdate`) : `scrollTop = anchor + ratio·(max − anchor)`
avec `anchor = clonedBlock.offsetTop`. À t=0, `scrollTop` bondit de 0 à
`anchor` → **saut** (toute la portion parlée disparaît d'un coup). De plus
`scroll-behavior: smooth` relance son animation à chaque `timeupdate` (~4/s)
→ **saccade**.

**Décision speaker** : défilement **continu depuis le haut**, comme une
lecture humaine. Donc :

```
anchor = 0
ratio  = currentTime / duration        (0 → 1)
scrollTop = ratio · max                 (max = scrollHeight − clientHeight)
```

- `scroll-behavior: smooth` **retiré** : chaque `timeupdate` pose directement
  `scrollTop`, par petits pas (165s d'audio × ~4 Hz → pas sub-pixel, fluide).
- La mesure de `max` reste en pixels de layout (`scrollHeight`/`clientHeight`),
  cohérente avec `scrollTop` — pas de `getBoundingClientRect` (rects en px
  écran à cause du scale).

Conséquence assumée : la portion parlée (courte : 1-2 phrases) défile en tête
pendant les premières secondes d'audio. C'est le comportement voulu (« du
haut jusqu'au bout »), au prix d'un léger décalage initial parlé/cloné, sans
impact sur la lisibilité.

## Layout : `scene--plein` → `scene` centré encadré

`scene--plein` donnait au reader toute la surface (padding 0, stretch) pour
« la hauteur entière ». Avec un bornage px + cadre, ce n'est plus nécessaire
et c'était une cause du débordement.

**Décision speaker** : slide 42 en `scene` (centré), reader en **bloc encadré**
centré avec marges :

- `.reader__text` : `max-height: ~400px`, `max-width: 60ch`, `overflow-y:
  auto`, **cadre** `border: 1px solid var(--color-rule)`, `border-radius`,
  `padding` (tokens), fond hérité de la slide.
- `.reader` : plus de `height: 100%` (il se dimensionne au contenu borné, le
  layout `scene` le centre).
- `07-lecture.md` slide 42 : retirer `plein: true`.

Tokens uniquement (bordure `--color-rule`, espacements `--space-*`) → cadre
cohérent dans les deux modes.

## Hors périmètre reader : slide 40

`Countdown.vue` note d'état `ready` : « Chapitre prêt — le temps a bien été
tenu » → « Chapitre prêt ». Pur libellé, pas de spec touchée.
