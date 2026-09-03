## Context

Voir proposal.md — Why. État actuel : `theme/layouts/ambiance.vue`, variant
`colonne`, pose un panneau papier 88 % sur le tiers gauche (`width: 38%`) plus
un `::after` en dégradé qui fond le bord droit dans l'image. Ce dégradé avait
été ajouté **exprès** pour masquer la couture verticale, jugée visible en
projection (cf. commentaire du layout). Le variant `bande` (cold open), lui, n'a
pas de dégradé : bord franc, et il tient. Seule la slide 14 emploie `colonne`.

## Goals / Non-Goals

**Goals :**
- Image plein cadre lisible sous un bloc gauche semi-transparent à bord franc.
- Aligner le traitement de `colonne` sur celui de `bande`.

**Non-Goals :**
- Toucher au variant `bande` (inchangé).
- Re-tirer l'asset (la composition réserve déjà la droite au sujet).
- Créer un nouveau variant : on modifie `colonne` en place (unique usage).

## Decisions

- **Retirer le `::after` en dégradé, bord franc.** Rationale : le speaker veut
  le parti du cold open (bloc net posé sur l'image), et le dégradé est ce qui
  « délave » la gauche. Alternative écartée : garder un fondu plus léger — mais
  ça reste un fondu, donc l'effet reproché.
- **Colonne SANS fond ni blur** : le texte se lit directement sur l'image.
  Rationale : la colonne couvre le tiers gauche CALME (vide par construction),
  et l'asset y offre déjà le bon contraste dans les deux modes — fond crème
  (texte encre) en clair, fond noir du **négatif** (texte papier) en sombre. Un
  fond papier n'apportait rien (étape intermédiaire 70 % écartée) et créait une
  couture. Sans fond : image ininterrompue, zéro couture, lisibilité portée par
  l'asset. Le bandeau garde son fond 88 % (zone dense) — d'où le traitement par
  placement. **Contrepartie** : ce placement EXIGE un asset dont la gauche
  contraste dans les deux modes (vérif au tirage, cf. spec).
- **Garder `width: 38%` et le centrage vertical** du bloc : seule la couture
  change, pas la géométrie du texte.

## Risks / Trade-offs

- **Aucune couture** : sans panneau ni fondu, l'image est ininterrompue — le
  risque de bord franc visible disparaît de lui-même.
- **La lisibilité dépend entièrement de l'asset.** Sans fond, un tirage dont la
  gauche ne contraste pas dans un mode rendrait le texte illisible. Ici le
  couple clair/négatif fournit le contraste dans les deux modes ; c'est une
  **contrainte sur l'asset** (inscrite en spec), pas une garantie du layout. À
  reconfirmer si l'asset de la slide 14 est re-tiré.
- À **vérifier au projecteur** dans les deux modes (contraste réel du texte sur
  les zones calmes).
