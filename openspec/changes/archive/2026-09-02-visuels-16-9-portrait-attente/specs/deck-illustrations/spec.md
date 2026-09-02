# deck-illustrations — delta

## ADDED Requirements

### Requirement: Outillage de génération versionné dans le repo

L'outillage qui produit les illustrations SHALL vivre dans le repo, pas dans
un cache utilisateur. Il SHALL comprendre un script d'amorçage idempotent
(environnement + modèle), un script de tirage piloté par un fichier de jobs
déclaratif, et ce fichier de jobs comme mémoire du chantier (nom d'asset, mode
de génération, prompt figé employé, dimensions, seeds, image de référence
éventuelle, `{SUJET}`).

Le tirage SHALL être reprenable : un asset déjà produit n'est pas régénéré.

Les images de référence personnelles servant d'entrée à une génération
conditionnée NE SHALL PAS être versionnées : l'artefact canonique est le PNG
produit, pas la source.

#### Scenario: Re-tirage reproductible depuis le repo seul

- **WHEN** un contributeur dispose du repo sur une machine vierge
- **THEN** l'amorçage installe l'environnement et le modèle, et le script de
  tirage rejoue les jobs déclarés sans qu'aucun paramètre ne soit retrouvé
  ailleurs que dans le repo

#### Scenario: Reprise après interruption

- **WHEN** un batch de tirage est relancé alors que certains fichiers existent
- **THEN** seuls les assets manquants sont générés

#### Scenario: Source personnelle non versionnée

- **WHEN** une génération conditionnée s'appuie sur une photo du speaker
- **THEN** la photo est ignorée par git et seul le PNG stylisé entre dans le
  repo

### Requirement: Prompts distincts pour les assets en fond perdu

Un asset destiné au **fond perdu 16:9** SHALL être tiré avec un prompt figé
propre à ce format, distinct du prompt des assets en objet 4:5. Les prompts
wide SHALL différer des prompts objet uniquement sur la composition
horizontale, la localisation de l'espace calme, et l'absence de bord de
feuille — le reste de la formule de style SHALL rester identique, pour que les
deux familles appartiennent à la même série visuelle.

Un asset en fond perdu NE SHALL PAS présenter une composition écrasée en
bandeau (cadrage portrait joué dans un cadre horizontal).

#### Scenario: Assets en objet non affectés

- **WHEN** un asset destiné à l'affichage en objet crème est tiré
- **THEN** il utilise le prompt objet d'origine, inchangé, au format portrait

### Requirement: Bord de feuille retiré par recadrage mesuré

Le prompt de style nomme un objet imprimé : le modèle dessine donc une feuille,
avec sa marge. Cette marge NE SHALL PAS être combattue par des clauses
négatives — l'expérience montre qu'elles la réduisent sans la supprimer, et
retirer le nom qui la provoque dériverait le style de la série.

Un asset **livré** en fond perdu NE SHALL PAS montrer de bord de feuille, de
marge ni de vignette claire. La marge SHALL être retirée en aval, par un
recadrage **mesuré sur chaque image** — jamais par une valeur fixe, l'épaisseur
variant d'un tirage et d'un bord à l'autre.

La détection du bord NE SHALL PAS reposer sur un seuil de luminance (inopérant
quand la marge est de la même teinte que le fond de l'illustration) ni sur une
mesure d'uniformité (la marge porte usure, rousseurs et plis). Elle SHALL
s'appuyer sur la frontière géométrique entre la feuille et l'illustration.

Le recadrage SHALL refuser d'opérer plutôt que de rogner le sujet lorsqu'aucune
frontière franche n'est détectée ou que la marge mesurée dépasse un plafond.

Le recadrage SHALL intervenir **avant** tout patch et toute dérivation de mode.

#### Scenario: Asset livré sans bord de feuille

- **WHEN** un asset de fond perdu est intégré au deck
- **THEN** l'illustration occupe tout le cadre, sans marge ni liseré clair sur
  aucun bord

#### Scenario: Marge de la même teinte que le fond

- **WHEN** l'asset est un sujet posé sur aplat crème, dont la marge est crème
- **THEN** le bord est tout de même détecté et retiré

#### Scenario: Refus plutôt que rognage du sujet

- **WHEN** aucune frontière franche n'est détectable, ou que la marge mesurée
  dépasse le plafond
- **THEN** le recadrage échoue explicitement, et le tirage est traité comme
  rejeté plutôt que rogné en silence

### Requirement: Assets de fond perdu au format du canvas

Une illustration destinée au fond perdu SHALL être tirée nativement au rapport
d'aspect du canvas de présentation, de sorte que le recadrage d'affichage ne
supprime aucun élément porteur de sens de la composition.

#### Scenario: Composition intégralement visible

- **WHEN** une illustration de fond perdu est affichée sur une slide
- **THEN** tous les éléments porteurs de sens de la composition sont visibles,
  sans recadrage qui en supprime

### Requirement: Portrait du speaker dans la série

Le deck SHALL comporter un portrait du speaker produit dans le même génome
visuel que la galerie des figures historiques : même prompt de style, même
format, même motif de portrait, même règle de l'unique élément rouge.

Ce portrait SHALL être produit par génération conditionnée à partir d'une
photographie du speaker, et non par description seule.

Son unique élément rouge SHALL être rattaché à la règle sémantique de la série
— le rouge désigne la main cachée — et ce rattachement NE SHALL PAS être
commenté sur scène.

#### Scenario: Cohérence de série

- **WHEN** le portrait du speaker est affiché après les portraits des figures
  historiques
- **THEN** il se lit comme un membre de la même galerie : même palette, même
  trame, même traitement du sujet

#### Scenario: Unique élément rouge rattaché

- **WHEN** le portrait est examiné selon les critères de sélection de la série
- **THEN** il ne porte qu'un seul élément rouge, et cet élément désigne une
  main cachée

### Requirement: La dérivation dark ne repeint pas les demi-tons

La dérivation par inversion classe chaque pixel vers l'une des trois encres de
la série. L'encre d'accent se situant à mi-luminance, un demi-ton neutre ou
chaud de trame peut en être plus proche que du papier ou de l'encre sombre :
l'inversion repeint alors en accent des surfaces qui n'en portaient pas.

L'inversion NE SHALL router un pixel vers l'encre d'accent que si ce pixel est
**réellement saturé** dans cette teinte à la source. La transition SHALL être
progressive, pour ne pas laisser de liseré au bord des aplats d'accent.

Cette garde NE SHALL PAS affaiblir les accents légitimes : un aplat d'accent de
la source SHALL rester un aplat d'accent après dérivation.

#### Scenario: Sujet entièrement tramé

- **WHEN** on dérive un asset dont le sujet est rendu en trame dense plutôt
  qu'en masses plates
- **THEN** la trame reste en papier et en encre sombre, et seul l'élément
  d'accent de la source ressort en accent

#### Scenario: Non-régression des accents existants

- **WHEN** on re-dérive un asset déjà validé qui porte un aplat d'accent
- **THEN** cet aplat est conservé

### Requirement: Aucun réglage de dérivation ne dégrade en silence

Un outil de dérivation NE SHALL PAS produire une image invalide sans le
signaler. Tout réglage accepté par l'outil SHALL produire un résultat
exploitable, ou échouer explicitement — jamais une image silencieusement
corrompue qu'un opérateur pourrait prendre pour un rendu correct.

#### Scenario: Réglage extrême

- **WHEN** un réglage de dérivation est poussé à une valeur extrême
- **THEN** l'outil produit une image exploitable, ou signale une erreur — mais
  ne rend jamais une image corrompue sans avertissement

## MODIFIED Requirements

### Requirement: Source crème unique, dérivation par mode

L'image source SHALL être unique et en crème (canonique). Le rendu dans les
deux modes NE SHALL PAS exiger deux images éditées à la main.

En mode objet, l'image garde son crème natif et se distingue du fond par
l'ombre et le grain — aucune dérivation n'est produite.

Pour le fond perdu, la variante sombre SHALL être **dérivée** de la source
crème, et la mécanique de dérivation SHALL être routée par **le fond de
l'image**, non par la section du talk :

- sujet posé sur un aplat crème → inversion sérigraphique (remap des encres
  crème/noir/rouge vers la palette dark), composition et trame préservées ;
- scène de nuit → calage du point noir sans inversion. L'inversion SHALL être
  interdite sur les scènes de nuit : inverser l'obscurité produit un jour
  délavé.

Toute dérivation SHALL être produite à partir de la source crème **patchée**
le cas échéant, jamais avant le patch.

#### Scenario: Objet lisible dans les deux modes

- **WHEN** une illustration-objet est affichée en mode clair puis sombre
- **THEN** elle reste distincte du fond et lisible dans les deux, sans seconde
  image éditée à la main

#### Scenario: Dérivation dark d'un sujet sur aplat crème

- **WHEN** une illustration de fond perdu posée sur un aplat crème doit
  exister en mode sombre
- **THEN** sa variante est dérivée par inversion des encres, composition et
  trame conservées

#### Scenario: Dérivation dark d'une scène de nuit

- **WHEN** une illustration de fond perdu est une scène de nuit
- **THEN** sa variante sombre est produite par calage du point noir, sans
  inversion
