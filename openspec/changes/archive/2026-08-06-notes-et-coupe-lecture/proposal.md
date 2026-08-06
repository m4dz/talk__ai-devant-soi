## Why

Deux besoins de répétition, tous deux liés à la scène :

1. **Couper la lecture proprement.** Le chapitre généré peut être trop long
   pour le temps restant. Le speaker doit pouvoir l'arrêter sans geste
   visible ni manipulation : avancer d'une slide doit suffire.
2. **Avoir le texte sous les yeux.** Le speaker répète avec le mode
   présentateur. Aujourd'hui les slides ne portent aucune note : le script
   est dans `docs/scripts/`, à côté, pas en face du bon écran.

## What Changes

- **La lecture s'interrompt en quittant la slide** : `ChapterReader` arrête
  l'audio sur `onSlideLeave`. Le « next » (télécommande) devient la coupe —
  cohérent avec la règle du projet : tout se pilote à la télécommande.
- **Notes de présentateur sur chaque slide** : le texte du beat
  correspondant, repris des scripts (`docs/scripts/`), placé en **dernier
  bloc de commentaire** de la slide — la syntaxe que Slidev interprète comme
  note. Les indications scéniques entre crochets sont conservées : ce sont
  elles qui portent le jeu.

Les commentaires de développement existants restent des commentaires (ils ne
sont pas en fin de slide) ; seule la note finale est lue par Slidev.

Non-goals : passe de style (annoncée séparément) ; contenu des gabarits.

## Capabilities

### Modified Capabilities

- `chapter-reader`: la lecture audio s'arrête quand la slide est quittée,
  pour permettre une coupe propre en scène.
- `deck-content`: chaque slide porte en note de présentateur le texte du
  beat qu'elle sert.

## Impact

- **Modifié** : `slides/components/ChapterReader.vue`, les huit fichiers de
  `slides/pages/` (ajout des notes).
- **Dépendances / réseau** : aucun.
