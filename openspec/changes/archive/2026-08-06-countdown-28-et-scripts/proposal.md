## Why

Les scripts complets de la keynote (8 sections) sont arrivés et **actent
des valeurs que le deck contredit** :

- le compte à rebours est **28 minutes, gravé** (lancement ~minute 13,
  zéro au début de la section 7) — le deck est encore sur 35 ;
- il est affiché **des sections 3 à 7** — le deck s'arrête à la section 6.

Par ailleurs le rappel discret est gaté sur des **numéros de page en dur**
(19→34). Trois sections vont être réécrites d'après les scripts : ces
bornes casseraient à chaque fois. Le risque était déjà noté comme
« fragile » — on le supprime maintenant, avant d'entamer les réécritures.

Enfin, les scripts sont désormais la **source de vérité du contenu** du
deck. Ils ne vivaient que dans un dossier temporaire (déjà vidé deux fois
par des crashes) : on les versionne.

## What Changes

- **Durée du compte à rebours : 28 minutes** par défaut
  (`VITE_COUNTDOWN_MINUTES`), au lieu de 35.
- **Gating du rappel discret par frontmatter, plus par numéros de page** :
  le pill s'affiche dès que la session tourne, **sauf** sur les slides qui
  s'en excluent explicitement (`noCountdown: true`). Les sections 1-2 sont
  naturellement exclues (la session n'a pas démarré) ; la slide de
  lancement s'exclut (elle porte le compte à rebours en grand). Résultat :
  **plus aucune dépendance au nombre de slides** — les réécritures de
  sections ne pourront plus casser l'affichage.
- **Scripts versionnés** dans `docs/scripts/` (7 fichiers) + mise à jour de
  `CLAUDE.md`, qui affirme aujourd'hui que les scripts sont « hors scope de
  ce repo » (règle 1 : pas de divergence silencieuse).
- `CLAUDE.md` : la trame documentée est corrigée là où les scripts l'ont
  fait bouger (section 5 = quatre strates de la descente ; section 6 = le
  mode personnage, et non la résolution architecturale, qui est absorbée
  par la section 5).

Non-goals : réécriture des sections 4, 5, 6, 7, 8 (changements suivants) ;
gabarits de placeholders (avec la section concernée).

## Capabilities

### Modified Capabilities

- `deck-countdown`: la durée par défaut passe à 28 minutes et la fenêtre
  d'affichage du rappel discret couvre les sections 3 à 7 ; l'exigence est
  reformulée en termes de sections et d'exclusion explicite, sans référence
  à des numéros de slide.

## Impact

- **Modifié** : `slides/components/Countdown.vue`,
  `slides/components/GenerationTrigger.vue` (durée par défaut),
  `.env.example`, `slides/global-bottom.vue` (gating), en-têtes de slides
  concernées (`noCountdown`), `CLAUDE.md`.
- **Ajouté** : `docs/scripts/` (7 fichiers de script).
- **Dépendances / réseau** : aucun.
