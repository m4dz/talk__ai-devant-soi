# CREDITS

Source et licence de chaque asset du deck. Contrainte : tout est
auto-hébergé (aucun CDN au runtime).

## Polices

### Sinzano (titrage / exergue)

- **Fichier** : `public/fonts/sinzano-regular.woff2`
- **Fonderie** : Typodermic Fonts (Ray Larabie)
- **Licence** : commerciale — achat desktop + webfont pour
  l'auto-hébergement. **Licence acquise pour ce projet.**
- **Usage** : titres et citations en exergue uniquement. Jamais de
  paragraphe de corps.
- **Note** : ne jamais substituer par une version « free download » non
  licenciée.

<!-- TODO : compléter avec le numéro de licence / facture d'achat. -->

### Atkinson Hyperlegible (corps de texte)

- **Fichiers** : `public/fonts/atkinson-hyperlegible-{400,700}-{normal,italic}.woff2`
- **Auteur** : Braille Institute of America
- **Licence** : SIL Open Font License 1.1 (libre)
- **Source** : Fontsource (`atkinson-hyperlegible`, sous-ensemble latin)
- **Usage** : corps de texte, conçue pour une lisibilité maximale
  (utile en projection).

## Fixtures (provisoires)

### Chapitre de démonstration — `public/fallback/chapitre.{md,wav}`

- **Texte** : extrait de *Le Horla* (Guy de Maupassant, domaine public).
  Contient le marqueur `<!-- BASCULE -->` après la 1ʳᵉ phrase (point de
  relais voix speaker → voix clonée).
- **Audio** : synthèse voix clonée (pipeline TTS local du projet), WAV
  24 kHz mono.
- **Statut** : **fixtures provisoires** pour le mode mock (jalon 3B).
  Remplacées par le vrai chapitre de secours + audio au jalon 4 / TTS.
- **Source** : copiées depuis `~/Sources/m4dz/ia-devant-soi/TTS/test.{md,wav}`.

## Illustrations

**Toutes générées en local** (cohérent avec la thèse du talk), esthétique
couverture pulp homogène. Modèle : **FLUX.2 Klein 4B** (Black Forest Labs,
licence Apache 2.0) via **mflux** (MLX, Apple Silicon). Prompt de style
figé + workflow : [`docs/visuels-pulp.md`](docs/visuels-pulp.md). On ne
génère qu'en crème (source canonique) ; les modes dark sont des
dérivations (`tools/inverser_mode.py`). Seed consigné dans le nom de
fichier (traçabilité, pas reproductibilité — cf. §0bis du doc).

Assets dans `public/images/` :

> `cas-03-vian-sullivan-s600.png` a été **supprimé** avec la station Vian
> (changement `refonte-trame-figures-murs`, 2026-08-31). Le prompt de tirage
> reste consigné dans `docs/visuels-pulp.md` comme trace du workflow.
>
> Les deux ambiances du cold open ont été **re-tirées en 16:9 natif**
> (changement `visuels-16-9-portrait-attente`, 2026-09-02). Les versions 4:5
> (`coldopen-02-presence-s303-patch*`, `coldopen-05-rue-pluie-s700*`) sont
> retirées : rendues en fond perdu dans un canvas 16:9, elles étaient
> recadrées par le milieu et perdaient leur composition.

| fichier | cas / beat | obtention | dérivation dark |
|---|---|---|---|
| `cas-01-dumas-maquet-s500.png` | Dumas / Maquet | prompt `2a`, 768×960 | objet A |
| `cas-02-carver-lish-s43.png` | Carver / Lish | prompt `2a`, 768×960 | objet A |
| `cas-04-ern-malley-s45.png` | Ern Malley | prompt `2a`, 768×960 | objet A |
| `cas-05-oulipo-s46.png` | Oulipo | prompt `2a`, 768×960 | objet A |
| `cas-06-racter-s47.png` | Racter | prompt `2a`, 768×960 | objet A |
| `ident-01-m4dz-s822.png` | signature du speaker | prompt `2a`, **mode `edit`** conditionné par une photo du speaker, 768×960 | aucune (objet crème) |
| `coldopen-02-presence-s801{,-dark}.png` | cold-open (Ajar/Gary) | prompt `2a-wide`, 1280×720 → recadré 1180×664 | négatif B, `--puissance 14` |
| `coldopen-05-rue-pluie-s913-patch{,-cale}.png` | cold-open (Paris nuit) | prompt `2b-wide`, 1280×720 → recadré → 28 rouges éteints | `--cale-noir` |
| `fabrique-04-usine-machine-s930{,-dark}.png` | section 3, « Pas écrit seul » | prompt `2a-wide`, 1280×720 → recadré 1253×705 | négatif B, `--puissance 14` |

**Portrait du speaker.** `ident-01-m4dz-s822.png` est produit par génération
conditionnée à partir d'une photographie personnelle du speaker. La photo
source **n'est pas versionnée** (`tools/pulp/sources/`, ignoré par git) :
l'artefact canonique est le PNG stylisé, la source n'a pas à voyager dans un
repo public.

**Slide d'attente — non générée.** Le cardiogramme
(`slides/components/Cardiogramme.vue`) est un tracé SVG composé de tokens du
thème, pas un asset image. Aucun modèle n'intervient : Flux ne trace pas une
ligne fine exacte, et les tokens donnent les deux modes sans second fichier.

Note : les patchs numériques (extinction de rouges surnuméraires) et les
recadrages de bord de feuille sont documentés dans `docs/visuels-pulp.md`
§4bis et §4ter, et outillés par `tools/pulp/eteindre.py` et
`tools/pulp/recadrer.py`. Ils s'appliquent toujours à la source crème, avant
dérivation des modes.
