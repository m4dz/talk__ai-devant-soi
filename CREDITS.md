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

<!-- À compléter au jalon 5 : générées en local (esthétique pulp) et/ou
     domaine public. Une entrée par asset : fichier, source, licence. -->
