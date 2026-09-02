## Why

Trois manques constatés sur la branche d'élagage, et un quatrième qui les
sous-tend.

1. **Les deux ambiances du cold open sont massacrées à l'affichage.** Elles
   sont tirées en 768×960 (4:5) et rendues en fond perdu (`object-fit: cover`)
   dans un canvas 16:9. Le crop ne garde qu'une bande médiane. Sur
   `coldopen-02-presence`, il mange **le chapeau du géant ET l'homme qui marche
   en bas** — c'est-à-dire les deux termes de la thèse (Gary logé dans Ajar).
   Le motif 2 est mort à l'écran.

2. **La slide de signature est nue.** Le speaker n'apparaît pas dans le deck,
   alors que la galerie pulp est peuplée des figures qu'il convoque. Un
   portrait de lui, dans le même génome visuel et portant l'unique élément
   rouge, l'inscrit dans la galerie sans qu'un mot le dise.

3. **Le talk n'a pas de slide d'attente.** Il ouvre sur la mort de Gary, sans
   titre ni bonjour. Il manque l'écran qui tourne pendant que la salle
   s'installe et qui permet au speaker d'entrer.

4. **L'outillage de génération n'est pas dans le repo.** Le venv mflux, les
   scripts de batch et les brouillons vivent dans `~/.cache/` (`pulpvenv/`,
   `pulp-final.sh`, `pulp-retirage-hires.sh`). Les poids `FLUX.2-klein-4B` ont
   été purgés du cache HuggingFace. Aucun re-tirage n'est reproductible par le
   repo seul, et la mémoire du chantier (jobs, seeds, `{SUJET}`) n'est
   versionnée qu'en prose dans `docs/visuels-pulp.md`. Toute demande visuelle
   future repart de zéro.

## What Changes

### Outillage — `tools/pulp/`

Le générateur remonte du cache vers le repo : `bootstrap.sh` (venv + mflux +
pull des poids, idempotent), `generer.sh` (lecture de `jobs.tsv`, reprise par
fichier existant, log horodaté), `jobs.tsv` (mémoire déclarative du chantier :
nom, mode, tail, dimensions, seeds, référence, `{SUJET}`). La photo source du
portrait vit dans `tools/pulp/sources/`, **ignorée par git**.

### Prompts — `docs/visuels-pulp.md` v2.4

La règle §2 (« deux prompts frères, tous deux FIGÉS, aucun autre prompt ne
doit exister ») devient **quatre prompts figés** : `2a`/`2b` inchangés pour
les assets en objet crème 4:5, plus `2a-wide`/`2b-wide` pour les assets en
fond perdu 16:9. Trois clauses seulement diffèrent — la composition
horizontale, la localisation de l'espace calme, et la suppression du bord de
feuille. Deux critères de rejet §5 s'ajoutent (bord de feuille visible ;
composition écrasée en bandeau).

### Assets

- `coldopen-02-presence` et `coldopen-05-rue-pluie` **re-tirés en 1280×720**,
  avec leurs dérivations dark refaites (négatif B pour l'un, `--cale-noir`
  pour l'autre). Les PNG 4:5 sont retirés.
- `ident-01-m4dz` **créé** en 768×960 par édition conditionnée
  (`mflux-generate-flux2-edit`) à partir d'une photo du speaker. Motif 1
  (buste sur aplat), tail `2a` inchangé. L'unique élément rouge est le verre
  miroir des lunettes, rattaché à la règle sémantique de la main cachée : les
  verres cachent le regard.

### Layout

`theme/layouts/signature.vue` — nouveau, one-shot : figure à **gauche**, corps
en slot à droite. Héritage visuel de `case-card--with-figure` (même
`PulpFigure`, même flex-row, mêmes tokens de gap, même plafond de hauteur),
sans partage de code.

### Slide d'attente

`slides/pages/00-attente.md` + `slides/components/Cardiogramme.vue`, montés sur
le layout `scene` existant en mode `plein`. Tracé SVG plein cadre : ligne plate
à un tiers du bas, **un seul battement**. Trait en `--color-ink`, battement en
`--color-accent`, fond en `--color-paper` — les deux modes sortent des tokens,
sans second fichier. Le tracé porte sa propre trame halftone. Le tracé défile
et le battement passe périodiquement ; un pas de clic Slidev tue le battement
et la ligne s'aplatit, ce qui donne l'entrée du speaker.

## Impact

- **Specs** : `deck-illustrations` (outillage versionné, prompts wide, assets
  fond perdu, portrait du speaker), `deck-layouts` (layout `signature`, slide
  d'attente et son contrat d'animation).
- **Code** : `tools/pulp/*`, `.gitignore`, `theme/layouts/signature.vue`,
  `slides/components/Cardiogramme.vue`, `slides/pages/00-attente.md`,
  `slides/slides.md`, `slides/pages/02-goncourt.md` (slide signature),
  `public/images/*`.
- **Docs** : `docs/visuels-pulp.md` → v2.4, `CREDITS.md`, `CLAUDE.md`
  (structure du repo : `tools/pulp/`).
- **Numérotation** : la slide d'attente devient la slide 1, tout le deck glisse
  de +1. **Vérifié : aucun fichier du repo ne stocke un numéro de slide** — ni
  les specs, ni les scripts de la keynote, ni les layouts, ni le contenu. Le
  décalage ne périme donc que des artefacts *externes* au repo (planches
  contact de travail, repères mentaux du speaker). Il n'y a rien à
  re-synchroniser dans le code, ni maintenant ni après un autre changement.
- **Coordination** : le changement `refonte-arc-figures-gestes` porte sur
  `deck-content` (sections 4-5). Aucun périmètre commun — il ne touche ni le
  cold open, ni la signature, ni l'outillage. Seul `CLAUDE.md` est commun, sur
  des sections différentes. Les deux décalent la numérotation, sans
  conséquence d'après le point précédent.
- **Matériel** : re-téléchargement des poids `black-forest-labs/FLUX.2-klein-4B`
  (purgés). M3 Pro 18 Go, pic mesuré 14,94 Go à 768×960 → la montée en
  1280×720 doit être sondée avant le batch.

## Non-goals

- **Ne pas re-tirer la galerie des cas** (`cas-01`…`cas-06`). Elle est rendue
  en objet crème 4:5, non croppée : le problème d'aspect ne la concerne pas.
  Le prompt `2a` reste figé pour elle.
- **Ne pas générer le cardiogramme avec mflux.** Flux ne trace pas une ligne
  fine exacte sur du noir, l'objet n'appartient pas au génome pulp, et un PNG
  imposerait une dérivation dark que `inverser_mode.py` n'est pas calibré à
  produire.
- **Pas d'upscale** des assets 16:9 vers 1920×1080. Les upscalers lissent la
  trame halftone, qui est l'identité de la série. À rouvrir seulement si
  1280×720 se révèle insuffisant en projection réelle.
- **Pas de seconde slide d'attente.** Tranché : il n'y en a qu'une.
