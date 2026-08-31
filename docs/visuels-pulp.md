# Visuels pulp — spec de génération et d'intégration (v2.3)

> Référence pour Claude Code (projet Slidev « L'IA devant soi »).
> Principe directeur : **on ne génère qu'en crème**. La dualité light/dark est
> résolue en aval — jamais dans la génération. L'image crème est la source
> canonique ; les modes sont des dérivations (même logique que Markdown → ChromaDB).
>
> v2.3 (après passage hi-res) : découverte de la non-reproductibilité des
> seeds entre résolutions (§0bis), 3 re-tirages arbitrés (Dumas, Vian,
> rue-pluie) avec {SUJET} corrigés, presence patché + négatif B produit,
> patchs numériques documentés comme mécanique légitime, évolutions Carver
> et Oulipo consignées. Prompts 2a et 2b toujours FIGÉS.

## 0. État de série

| asset | statut | fichier canonique / action | dérivation dark |
|---|---|---|---|
| cas-01-dumas-maquet | **re-tirer (hi-res)** | s42 rejeté : deux plumes | objet A (négatif B possible) |
| cas-02-carver-lish | **gardé** | `cas-02-carver-lish-s43.png` | objet A (négatif B possible) |
| ~~cas-03-vian-sullivan~~ | **asset supprimé** — station retirée du deck (2026-08-31) | — | — |
| cas-04-ern-malley | **gardé — référence de série** | `cas-04-ern-malley-s45.png` | objet A ; **négatif B validé** |
| cas-05-oulipo | **gardé** | `cas-05-oulipo-s46.png` (voir note §0ter) | objet A (négatif B possible) |
| cas-06-racter | **gardé** | `cas-06-racter-s47.png` | objet A (négatif B possible) |
| coldopen-02-presence | **gardé (patché)** | `coldopen-02-presence-s303-patch.png` | **négatif B : `...-patch-dark.png` (produit)** |
| coldopen-05-rue-pluie | **re-tirer (hi-res)** | s203-hi-res rejeté : voiture rouge + sources multiples | usage direct calé (`--cale-noir`) |

### 0bis. Reproductibilité — RÈGLE CRITIQUE

**Le seed ne survit pas au changement de résolution.** Flux redistribue le
bruit initial sur une autre grille latente : même seed, autre image (constaté
au passage hi-res sur s103, s203, s303). Conséquences :

1. Un seed ne reproduit un tirage qu'à résolution ET paramètres strictement
   identiques.
2. Tout passage hi-res est un **nouveau tirage** : re-sélection complète par
   les critères §5, aucune validation basse résolution n'est transférable.
3. **L'artefact canonique est le fichier PNG**, pas le seed. Le seed consigné
   ne sert qu'à la traçabilité et au re-tirage à paramètres constants.
4. Corollaire pratique : générer les seeds de sélection **directement à la
   résolution finale** — sélectionner en basse résolution fait le travail
   deux fois.

### 0ter. Évolutions consignées (hi-res, acceptées)

- **Carver (s43)** : le X validé est devenu une barre unique traversant la
  bouche — « réduit au silence par l'éditeur ». Un seul trait rouge, sens
  durci. Accepté.
- **Oulipo (s46)** : le fil rouge unique est devenu un arbre ramifié —
  lecture requalifiée de « un chemin choisi » vers « l'arbre des
  combinaisons » (Queneau). Un seul élément rouge connexe. Accepté.
  **Vérification requise à taille de projection** : les pages portent du
  pseudo-texte (diégétique, hors clause « no text » qui vise le lettrage de
  couverture) — si un glyphe forme accidentellement un mot lisible,
  re-tirage.

## 1. Motifs retenus (5)

1. **Buste sur aplat** — figure seule en buste, fond crème vieilli, ombre
   portée dure, regard sous le chapeau. *(défaut portraits)*
2. **La présence derrière** — figure géante en surplomb dominant des figures
   normales qui ignorent sa présence. *(ambiances à thèse : Ajar derrière Gary)*
   **Variation assumée — « la figure contenue »** : la petite figure marche
   *à l'intérieur* de la silhouette du géant, blanc dans la masse noire
   (asset coldopen-02 : Gary logé dans Ajar). Issue d'un accident de
   composition, promue au canon ; ne pas la forcer dans un {SUJET}, la
   sélectionner quand elle émerge.
3. **Masqué par le col** — chapeau + col relevé rouge, seuls les yeux visibles.
   Le masquage vient du vêtement, pas de l'ombre.
4. **L'objet-figure** — un objet criblé/marqué (cible, machine à écrire, page)
   traité comme un portrait, cadré serré. *(Racter, Oulipo)*
5. **Rue-scène nocturne** — nuit en aplats peints, masses noires sur lumière
   crème pâle, une seule lueur rouge. *(ambiances Paris 1975 — prompt frère 2b)*

### Règle sémantique du rouge

**L'élément rouge unique désigne toujours la main cachée** — l'auteur
dissimulé, l'intervention invisible : la plume de Maquet, la barre de Lish,
la cravate de Vian (l'homme derrière Sullivan — le rouge marque l'auteur
dissimulé, jamais le pseudonyme-façade : le masque reste crème), les lèvres
peintes d'Ern Malley, l'arbre-chemin de l'Oulipo, l'encre de Racter,
l'écharpe du géant (presence). Le rouge n'est jamais décoratif et **jamais
atmosphérique** (pas de sol irradié, pas de ciel rouge, pas de masse, pas de
véhicule rouge). Critère de brief ({SUJET}) et de sélection des tirages.

### Règles négatives

- jamais plus d'un sujet dominant ;
- **exactement un** élément rouge par image ;
- jamais de rouge en masse, en lumière d'ambiance, ou porté par un objet
  sans signification (véhicule, mobilier) ;
- jamais de tons chair — peau et visages rendus en papier crème + modelé
  d'encre noire ;
- jamais de texte dans l'image (la typo est du ressort de Slidev/Sinzano ;
  le pseudo-texte diégétique illisible est toléré, cf. §0ter).

## 2. Prompts figés (mflux / Flux)

Deux prompts frères, tous deux FIGÉS. Aucun autre prompt ne doit exister.
Toute correction passe par le {SUJET}, la sélection de seeds, ou un patch §4bis.

### 2a. Portraits & objets-figures (motifs 1–4)

```
A vintage 1930s pulp detective magazine cover painting of {SUJET}, original
gouache illustration before any lettering was added, painted in the flat
simplified style of a single mid-century commercial illustrator, the subject
large in the frame filling the lower two thirds, bold shapes with hard-edged
cast shadows, strict limited palette of deep ink black and warm cream with
exactly one blood-red accent element, no flesh tones, skin and faces rendered
as cream paper with black ink shading, coarse visible halftone dot screen
across all tonal areas, a faint sparse halftone tint over the cream
background, visibly aged pulp paper with fold creases, foxing spots and worn
edges, slight ink misregistration, the upper third left as quiet aged cream
space, no text, no letters, no typography
```

### 2b. Ambiances (motif 5)

```
A vintage 1930s pulp detective magazine cover painting of {SUJET}, original
gouache illustration before any lettering was added, painted in the flat
simplified style of a single mid-century commercial illustrator, a night scene
rendered as flat painted shapes, deep black masses against pale cream light,
windows glowing pale cream, no orange, no amber, no yellow, exactly one small
red glow, blacks as pure deep ink black, no blue tones, bold shapes with
hard-edged cast shadows, strict limited palette of deep ink black and warm
cream, no flesh tones, coarse visible halftone dot screen across all tonal
areas, visibly aged pulp paper with fold creases, foxing spots and worn edges,
slight ink misregistration, the upper third left as quiet dark space, no text,
no letters, no typography
```

### Décision ouverte — plis en fond perdu

Inchangée (v2.2) : garder par défaut — le fond perdu est un document d'époque
projeté, le pli dit « pièce du dossier ». À valider en répétition sur
projecteur. Escalade : (1) seeds dont les plis évitent le ciel, (2) « subtle
fold creases » dans 2b uniquement.

## 3. Règles de {SUJET} — OBLIGATOIRES

1. **Nommer l'unique élément rouge** dans le {SUJET}, et le rattacher à la
   main cachée (règle sémantique). Marquer son unicité (« a single… ») et ne
   donner au rouge **aucun support ambigu** : « red car tail-light » a produit
   une voiture entière rouge — préférer un objet dont le rouge ne peut pas
   déborder (lanterne, tampon, écharpe).
2. **Habiller pour exclure** : décrire positivement la tenue/les accessoires
   pour ne laisser aucune place à un rouge concurrent (les négations tiennent
   mal).
3. **Jamais de rouge atmosphérique** dans les ambiances : la lueur rouge est
   un objet localisé, pas une lumière de scène.
4. **Verrouiller l'expression** quand elle porte le sens : « expressionless »
   pour un masque vide, sans quoi Flux improvise (sourire apparu au hi-res).

### {SUJET} pour les 3 re-tirages hi-res

- **cas-01-dumas-maquet** : `a distinguished 19th century writer in a black
  tailcoat and bow tie, bust portrait, a massive featureless dark silhouette
  looming behind him, holding one single red quill feather`
- ~~**cas-03-vian-sullivan**~~ *(asset supprimé le 2026-08-31 — station retirée ; prompt conservé comme trace de workflow)* : `a confident man in a plain black suit and white
  shirt with a single red tie, holding a blank white expressionless theater
  mask with empty black eyes and no mouth beside his face, bust portrait,
  plain background`
- **coldopen-05-rue-pluie** : `a rain-slicked Paris street at night seen from
  a low angle, tall haussmannian facades as flat black silhouettes, two or
  three windows glowing pale cream, a black vintage car parked along the
  curb, one single small red street lantern glowing, its reflection in the
  wet pavement`

## 4. Workflow de tirage

1. Générer **3–4 seeds** par asset, **à la résolution finale** (§0bis-4).
2. Sélectionner par les critères §5 — la sélection est le mécanisme principal
   d'application de la règle du rouge, pas le prompt.
3. Consigner le seed retenu (table §0, suffixe de fichier) — traçabilité,
   pas reproductibilité (§0bis).
4. Les accidents heureux (rouge-main-cachée, figure contenue, barre-silence,
   arbre combinatoire) se *sélectionnent* et se documentent ; ils ne se
   forcent pas dans le prompt.

### 4bis. Patchs numériques — mécanique légitime

Quand un tirage est excellent à un défaut ponctuel près, un patch ciblé est
préférable à un re-tirage (qui rejoue toute la loterie). Conditions : le
patch corrige une violation de règle (rouge surnuméraire), il est local, et
il est indiscernable d'un tirage natif. Méthode : masque colorimétrique +
spatial (sélection des pixels rouges dans la zone fautive), recoloration en
encre `#0f0d0b`. Précédent : bandeau de chapeau de presence-s303 (5 227 px),
patché puis inversé — voir `coldopen-02-presence-s303-patch.png` et
`...-patch-dark.png`. Un rouge posé sur une masse noire peut aussi être
*éteint* de cette façon (il disparaît dans la silhouette).
Toujours patcher la source crème, puis re-dériver les modes.

## 5. Critères de sélection des tirages

Rejeter tout tirage qui présente :

1. plus d'un élément rouge, ou du rouge en masse/atmosphérique/sans
   signification (hi-res : Dumas deux plumes, presence bandeau — patché,
   rue-pluie voiture rouge + sources multiples) ;
2. duplication du sujet ou figure parasite ;
3. tons chair, ocres, dorés — ou dérive rose/orangée même localisée ;
4. rupture de style — photo, gravure, image-dans-l'image, dégradés aérographe ;
5. dérive de palette dans les ambiances : orange/ambre aux fenêtres, noirs
   bleu-gris, ciel gris clair affaiblissant les masses, dérive verte ;
6. fond parasite derrière un portrait — l'aplat crème doit rester plat ;
7. élément central absent, objet non tenu, ou **expression divergente du
   {SUJET}** (hi-res : sourire sur le masque vide de Vian) ;
8. ombre portée douce ou absente sur les objets-figures ;
9. sujet trop petit, flottant dans le vide ;
10. fausses déchirures ou vieillissement traversant le sujet (les plis dans
    le *ciel* des ambiances relèvent de la décision ouverte §2) ;
11. fond si dense en trame qu'il concurrence la typo du tiers haut ;
12. pseudo-texte diégétique formant des mots lisibles à taille de projection.

## 6. Intégration Slidev — stratégie A (défaut) : l'illustration comme objet

Inchangée. L'image n'est jamais affichée en fond perdu ni inversée en mode
light : rectangle de papier crème posé sur le fond courant.

Composant wrapper `PulpFigure.vue` :

- conteneur : fond `--paper` (valeur du mode courant), padding ~0.5rem,
  ombre portée dure décalée (`box-shadow: 6px 6px 0 rgba(0,0,0,.35)` en
  dark, plus douce en light), rotation aléatoire légère et stable par asset
  (−1.5° à +1.5°, seedée sur le nom de fichier) ;
- l'image garde son crème natif (#ede3d0 vs #f2e7d0, écart voulu) ;
- props : `src`, `caption?` (Sinzano sous l'objet), `tilt?`.

Chevauchement typo : titre Sinzano dans le tiers haut, le sujet peut mordre
sur le titre (z-index titre < figure).

## 7. Modes dark — mécanique par famille d'assets

Le négatif ne préserve le sens que si le fond est un aplat neutre — le
critère de routage est **le fond de l'image, pas la section du talk** :
presence est une ambiance à thèse mais son aplat crème en fait un candidat
au négatif (correction v2.3 ; le `--cale-noir` n'y faisait qu'un ajustement
cosmétique).

| asset dark en fond perdu | mécanique |
|---|---|
| sujet sur aplat crème (motifs 1–4, presence) | **négatif B** — sur la source *patchée* le cas échéant |
| scène de nuit (rue-pluie) | **usage direct + `--cale-noir`** |

### 7a. Négatif B — inversion sérigraphique

`python inverser_mode.py entree.png sortie-dark.png [--dur] [--puissance N]`

| encre source | cible dark |
|---|---|
| crème papier | `#0f0d0b` |
| noir d'encre | `#ede3d0` |
| rouge sang | `#e11d1d` |

Validés : Ern Malley, presence (patché). Interdit sur les scènes de nuit :
inverser l'obscurité produit un jour délavé (planche v2).
Précaution : les rousseurs de bord virent en piqueté rouge sombre sur le
champ noir — léger crop ou vignettage CSS côté Slidev.

### 7b. Scènes de nuit — calage du point noir

`python inverser_mode.py entree.png sortie-calee.png --cale-noir
[--percentile 0.5]`

Remap linéaire par canal vers `#0f0d0b`, purge la dominante bleue, aucune
inversion. Validé sur les livrables hi-res (point noir mesuré exactement sur
15/13/11). **À refaire sur le re-tirage de rue-pluie.**

## 8. Nommage des assets

`{section}-{motif}-{slug}-s{seed}.png`
+ `-patch.png` (source patchée, devient canonique)
+ `-dark.png` (négatif B) ou `-cale.png` (scène de nuit calée).
Ex. : `coldopen-02-presence-s303-patch-dark.png`.

## 9. Reste à faire (chantier visuel)

1. Re-tirage hi-res ×3 avec les {SUJET} du §3 : Dumas, Vian, rue-pluie
   (3–4 seeds chacun, à résolution finale, sélection critères §5).
2. `--cale-noir` sur le rue-pluie retenu.
3. Vérification Oulipo à taille de projection (critère 12).
4. Validation des plis en fond perdu sur projecteur réel (décision ouverte §2).
