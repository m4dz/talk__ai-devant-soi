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

| fichier | cas / beat | dérivation dark |
|---|---|---|
| `cas-01-dumas-maquet-s500.png` | Dumas / Maquet | objet A |
| `cas-02-carver-lish-s43.png` | Carver / Lish | objet A |
| ~~`cas-03-vian-sullivan-s600.png`~~ | Vian / Sullivan — **station retirée** (`refonte-trame-figures-murs`) ; fichier conservé, plus référencé par le deck | objet A |
| `cas-04-ern-malley-s45.png` | Ern Malley | objet A |
| `cas-05-oulipo-s46.png` | Oulipo | objet A |
| `cas-06-racter-s47.png` | Racter | objet A |
| `coldopen-05-rue-pluie-s700{,-cale}.png` | cold-open (Paris nuit) | `--cale-noir` |
| `coldopen-02-presence-s303-patch{,-dark}.png` | cold-open (Ajar/Gary) | négatif B (patché) |

Note : `presence` a été retouchée numériquement (patch du bandeau de
chapeau rouge surnuméraire, cf. doc §4bis) avant dérivation dark.
