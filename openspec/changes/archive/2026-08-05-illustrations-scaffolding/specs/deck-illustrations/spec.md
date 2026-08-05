## Purpose

Rendu des illustrations pulp du deck : l'illustration comme objet papier
crème (source canonique unique), sa gestion dans les deux modes, et
l'absence de typographie dans l'image.

## ADDED Requirements

### Requirement: Illustration comme objet crème

Une illustration SHALL être affichée comme un **objet** posé sur le fond
courant (cadre papier crème, ombre portée, léger décalage angulaire), et
NON en fond perdu par défaut. Le décalage angulaire SHALL être stable pour
un même asset (déterministe, seedé sur le nom de fichier), pas aléatoire à
chaque rendu.

#### Scenario: Rendu en objet stable

- **WHEN** une illustration est affichée via le composant d'objet
- **THEN** elle apparaît encadrée avec une ombre portée et un léger tilt
  qui reste identique d'un affichage à l'autre pour le même fichier

### Requirement: Source crème unique, dérivation par mode

L'image source SHALL être unique et en crème (canonique). Le rendu dans
les deux modes NE SHALL PAS exiger deux images éditées à la main : en
mode objet, l'image garde son crème natif et se distingue du fond par
l'ombre et le grain ; pour le fond perdu, la variante sombre SHALL être
**dérivée** de la source crème par inversion sérigraphique (remap des
encres crème/noir/rouge vers la palette dark), composition et trame
préservées.

#### Scenario: Objet lisible dans les deux modes

- **WHEN** une illustration-objet est affichée en mode clair puis sombre
- **THEN** elle reste distincte du fond et lisible dans les deux, sans
  seconde image éditée à la main

#### Scenario: Dérivation dark du fond perdu

- **WHEN** une illustration en fond perdu doit exister en mode sombre
- **THEN** sa variante est dérivée de la source crème par inversion des
  encres, en conservant composition et trame

### Requirement: Aucune typographie dans l'image

Les illustrations NE SHALL PAS contenir de texte : toute typographie
(titre, légende) relève de Slidev/Sinzano. Les légendes SHALL être rendues
**hors** de l'image.

#### Scenario: Légende hors image

- **WHEN** une illustration porte une légende
- **THEN** la légende est rendue en Sinzano sous l'objet, pas incrustée
  dans l'image
