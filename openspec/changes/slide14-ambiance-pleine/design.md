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
- **Colonne plus transparente que le bandeau** : `color-mix(paper 70%,
  transparent)` (le bandeau garde 88 %). Rationale : la colonne couvre le tiers
  gauche CALME de l'image (vide par construction) ; à 88 % elle lisait comme une
  marge crème opaque — le reproche « pas semi-transparente ». À 70 %, le grain et
  le vieillissement du papier transparaissent, le bloc se pose sur l'image. Le
  bandeau, lui, couvre une zone dense et a besoin de 88 % pour la lisibilité —
  d'où l'opacité par placement, pas une valeur unique. `blur(2px)` conservé.
- **Garder `width: 38%` et le centrage vertical** du bloc : seule la couture
  change, pas la géométrie du texte.

## Risks / Trade-offs

- **La couture verticale nette redevient visible.** C'est précisément ce que le
  dégradé masquait. Atténuation : la semi-transparence + `blur` du bloc adoucit
  déjà le raccord, et le cold open prouve qu'un bord franc passe en projection.
  À **vérifier au projecteur** dans les deux modes ; si le bord accroche trop,
  option de repli documentée (un filet ou un très léger fondu ≤ 1rem).
- Bloc plus opaque que l'image sur la gauche : voulu (lisibilité du titre), et
  identique au bandeau du cold open.
