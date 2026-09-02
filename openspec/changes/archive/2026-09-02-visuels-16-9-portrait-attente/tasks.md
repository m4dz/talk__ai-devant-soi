# Tasks

## 1. Document d'intention (fait en premier)

- [x] 1.1 `CLAUDE.md`, section « Structure du repo » : ajouter `tools/pulp/`
      (bootstrap, generer, jobs.tsv, sources/ ignoré) à côté de
      `tools/inverser_mode.py`.
- [x] 1.2 `CLAUDE.md`, section « Illustrations » : acter que les assets de
      fond perdu sont tirés nativement en 16:9, et que la slide d'attente est
      un tracé SVG tokenisé — pas un asset généré.
- [x] 1.3 `CLAUDE.md`, section « Trame » : mentionner la slide d'attente en
      amont du cold open (le talk ouvre toujours sans slide de titre ; la
      slide d'attente n'en est pas une).

## 2. Outillage `tools/pulp/`

- [x] 2.1 Créer `tools/pulp/bootstrap.sh` : venv, `mflux==0.18.0`, pull de
      `black-forest-labs/FLUX.2-klein-4B`. Idempotent, ne refait rien de ce
      qui existe. Signaler clairement si le repo modèle demande une
      authentification HuggingFace.
- [x] 2.2 Créer `tools/pulp/jobs.tsv` : colonnes `name`, `mode`
      (`txt2img` | `edit`), `tail` (`A` | `B` | `A-wide` | `B-wide`), `w`, `h`,
      `seeds`, `ref`, `sujet`. Y porter les trois jobs de ce changement.
- [x] 2.3 Créer `tools/pulp/generer.sh` : lit `jobs.tsv`, route le binaire
      selon `mode`, reprend par fichier existant, log horodaté avec le pic
      mémoire MLX.
- [x] 2.4 `.gitignore` : ajouter `tools/pulp/sources/`.
- [x] 2.5 Copier la photo de référence du speaker dans
      `tools/pulp/sources/m4dz-ref.jpg` (hors git).

## 3. Prompts — `docs/visuels-pulp.md` v2.4

- [x] 3.1 §2 : ajouter `2a-wide` et `2b-wide`, avec le diff des trois clauses
      explicité (composition horizontale, espace calme à gauche + bas
      dégagé, texture bord à bord sans bord de feuille). Reformuler la règle
      « deux prompts frères » en « quatre prompts figés, deux familles de
      format ». Conserver `2b` malgré son orphelinat, en le notant.
- [x] 3.2 §3 : ajouter le `{SUJET}` de `ident-01-m4dz` et celui des deux
      re-tirages 16:9.
- [x] 3.3 §5 : ajouter les critères 13 (bord de feuille / marge / vignette
      claire visible sur un asset fond perdu) et 14 (composition écrasée en
      bandeau).
- [x] 3.4 §7 : reformuler le routage de dérivation dark par **le fond de
      l'image**, pas la section du talk — aligner sur le delta spec.
- [x] 3.5 §0 : refaire la table d'état de série (nouveaux formats, nouveaux
      seeds, `ident-01-m4dz`, assets 4:5 retirés).
- [x] 3.6 §9 : vider le reste-à-faire des points traités, y consigner ce qui
      reste ouvert (plis en fond perdu sur projecteur, vérification Oulipo).

## 4. Probes — GATE avant tout batch

- [x] 4.1 **P0** : exécuter `bootstrap.sh`, vérifier que les poids se
      téléchargent. Si le repo est gated, s'arrêter et arbitrer avec le
      speaker avant d'aller plus loin.
- [x] 4.2 **P1** : un tirage `2b-wide` en 1280×720, relever `Peak MLX
      memory`. Au-delà de ~17 Go, ajouter `--mlx-cache-limit-gb 12` ; si le
      pic ne redescend pas, replier sur 1024×576 et le consigner.
      **MESURÉ : 16,72 Go sur 18, ~58 s le tirage.** Passe, mais 1,3 Go de
      marge : ne rien lancer de lourd en parallèle d'un batch.
- [x] 4.3 **P2** : relire le même tirage — un bord de feuille apparaît-il ?
      **ÉCHEC ×2, arbitré** : la clause négative réduit la marge de moitié
      (40 → 20 px) sans la supprimer — `magazine cover painting` nomme un
      objet imprimé, et §3.2 dit que les négations ne défont pas un nom.
      Décision : correction en aval par recadrage mesuré (§4ter), le prompt
      figé n'est plus négocié. Clause améliorée conservée.
- [x] 4.5 Créer `tools/pulp/recadrer.py` — détection du bord par crête de
      gradient (ni luminance : marge crème sur fond crème ; ni platitude :
      la marge porte rousseurs et plis), refus au-delà d'un plafond de 12 %.
- [x] 4.6 Recadrer les deux assets retenus (`--cadrer 16:9`) avant patch et
      dérivation.
- [x] 4.4 **P3** : deux tirages `ident-01-m4dz`, l'un depuis la photo brute,
      l'autre depuis une version désaturée. Retenir le bras qui tient
      `no flesh tones`. Si l'édition conditionnée laisse survivre la
      colorimétrie dans les deux cas, basculer sur
      `mflux-generate-flux2 --image-path --image-strength` et consigner la
      valeur retenue dans `jobs.tsv`.
      **RÉSULTAT : la source brute tient** — pas de désaturation nécessaire.
      Mais deux autres défauts sont apparus : deux paires de goggles (corrigé
      par « a single pair … only one pair of goggles ») et un **visage
      anamorphosé**, étiré verticalement de 1,25× sur les 4 tirages. Cause :
      référence carrée 1080×1080 servie à un cadre 4:5. Corrigé en recadrant
      la référence au rapport de sortie (864×1080). Règle consignée en §3bis.
- [x] 4.7 `tools/pulp/eteindre.py` — extinction des rouges surnuméraires
      (§4bis outillé). Nécessaire parce que le {SUJET} de `rue-pluie` a échoué
      **trois fois** à tenir « exactement un rouge » : une rue porte des
      lampadaires au pluriel, le modèle les allume tous.

## 5. Tirages

- [x] 5.1 `coldopen-02-presence` : 4 seeds en 1280×720, tail `2a-wide`.
      Sélection par les critères §5 (13 et 14 inclus).
- [x] 5.2 `coldopen-05-rue-pluie` : 4 seeds en 1280×720, tail `2b-wide`.
      Sélection idem.
- [x] 5.3 `ident-01-m4dz` : 4 seeds en 768×960, tail `2a`, mode `edit` avec
      la photo de référence. Sélection idem.
- [x] 5.4 Consigner les seeds retenus dans `jobs.tsv` et dans la table §0 —
      traçabilité, pas reproductibilité (§0bis-3).

## 6. Dérivations et intégration des assets

- [x] 6.1 `presence` : patcher tout rouge surnuméraire (§4bis) sur la source
      crème, **puis** dériver en négatif via `tools/inverser_mode.py`.
- [x] 6.2 `rue-pluie` : dériver via `tools/inverser_mode.py --cale-noir`.
- [x] 6.3 Déposer les PNG dans `public/images/`, retirer les assets 4:5
      remplacés.
- [x] 6.4 Mettre à jour les frontmatters `light:` / `dark:` des deux slides
      d'ambiance de `slides/pages/01-cold-open.md`.
- [x] 6.5 `CREDITS.md` : table des assets à jour, mention du modèle et du
      mode d'obtention (dont l'édition conditionnée pour le portrait), et
      note explicite que la slide d'attente n'est pas un asset généré.

## 7. Layout `signature`

- [x] 7.1 Créer `theme/layouts/signature.vue` : flex-row, **figure en
      premier**, corps en slot. Tokens uniquement, plafond de hauteur de
      l'objet aligné sur celui du layout de cas.
- [x] 7.2 Redescendre la taille du titre en présence de la figure, comme le
      fait le layout de cas (le nom du speaker passera sur deux lignes
      autrement).
- [x] 7.3 Basculer la slide de signature de `slides/pages/02-goncourt.md` sur
      `layout: signature` + `figure: /images/ident-01-m4dz-sXXX.png`. Le corps
      markdown et ses styles scoped restent inchangés.
- [x] 7.4 Vérifier le rendu dans les deux modes (l'objet reste crème, aucune
      dérivation attendue).

## 8. Slide d'attente

- [x] 8.1 Créer `slides/components/Cardiogramme.vue` : SVG plein cadre,
      ligne plate au tiers inférieur, un seul battement. Ligne en
      `--color-ink`, battement en `--color-accent`, fond en `--color-paper`.
- [x] 8.2 Ajouter la trame halftone du tracé par masque SVG tuilé. **Aucun
      `mix-blend-mode`** (règle déjà écrite dans `theme/styles/pulp.css`).
- [x] 8.3 Animer le défilement du tracé et le passage périodique du
      battement, en transformation composée GPU. Armer sur `onSlideEnter`,
      désarmer sur `onSlideLeave` — vérifier qu'aucune animation ne tourne
      une fois la slide quittée.
- [x] 8.4 Ajouter le pas de clic qui tue le battement (v-click, pas de
      raccourci clavier ni de minutage) ; la ligne devient plate.
- [x] 8.5 Créer `slides/pages/00-attente.md` sur `layout: scene` avec
      `plein: true`, et l'importer en tête de `slides/slides.md`, avant
      `01-cold-open.md`.
- [x] 8.6 Respecter `prefers-reduced-motion` : sans mouvement, la slide
      affiche le tracé statique avec son battement.

## 9. Vérification et clôture

- [x] 9.1 Régénérer l'export PNG des slides et la planche contact — la
      numérotation a glissé de +1.
- [x] 9.2 Passer les deux slides d'ambiance, la signature et l'attente en
      mode clair puis sombre ; vérifier qu'aucun élément ne casse la palette.
- [x] 9.3 Vérifier l'export PDF : la slide d'attente fait la page de
      couverture du support. **Fait** — 52 pages, 219 Mo. Le rendu page à page
      n'a pas pu être vérifié en image (ghostscript absent de la machine) ; la
      couverture est garantie par la position de `00-attente.md` en tête de
      `slides.md`, vérifiée à l'export PNG.
- [x] 9.4 `openspec validate visuels-16-9-portrait-attente --strict` → valid.
      (L'archivage n'est pas une tâche du change : c'est l'action qui le
      clôt une fois la liste finie.)

## 10. Fabrique — slide « Pas écrit seul » (ajout en cours de change)

- [x] 10.1 Job `fabrique-04-usine-machine` dans `jobs.tsv` : prompt `2a-wide`,
      motif 4 (l'objet-figure), 1280×720, seeds 930-933. Sujet : une usine
      bâtie en pièces de machine à écrire. **Le clavier est un organe du
      bâtiment, pas le sujet** — sans quoi l'asset entrerait en doublon avec
      la machine à écrire de Racter, que la refonte réintroduit à l'écran.
- [x] 10.2 Unique élément rouge : le **ruban encreur**, qui traverse toute la
      fabrique. Rattachement à la main cachée : tout ce que la machine
      imprime passe par lui.
- [x] 10.3 Variante `colonne` du layout `ambiance` : texte dans le tiers
      gauche que le prompt wide laisse vide par construction. Vérifié par
      mesure : 0,0 % de pixels sombres dans les 38 % gauches du tirage retenu.
- [x] 10.4 Tirage `s930` retenu, recadré, dérivé en négatif B ; slide
      `03-lancement.md` basculée sur `ambiance / variant: colonne`.
- [x] 10.5 **Deux défauts de `inverser_mode.py` corrigés** (bloquants pour cet
      asset) : (a) overflow float32 de la pondération dès `--puissance ≈ 20`,
      produisant une image cassée **sans erreur** — passage en log ;
      (b) l'ancre rouge étant à mi-luminance, tout demi-ton chaud de trame
      était classé rouge (18 067 px parasites sur la fabrique) — ajout d'une
      garde de saturation. Non-régression vérifiée sur `presence` et `malley`.
- [x] 10.6 Dérivations dark regénérées avec l'outil corrigé (`fabrique`,
      `presence`). Doc §0, §1, §6bis, §7a et `CREDITS.md` mis à jour.
