## Why

Deux ajustements repérés après le jalon 3, à corriger avant le jalon 4 :

1. `GenerationTrigger` est déclenché par un **clic souris** — inutilisable
   à la télécommande. La règle projet est que toute action scénique passe
   par un **pas de clic Slidev** (le « next »), déjà appliquée au
   ChapterReader. Le trigger doit s'aligner.
2. La règle de titrage applique un `letter-spacing` qui **casse les
   ligatures imbriquées de Sinzano** — précisément l'identité pour
   laquelle la fonte a été choisie.

## What Changes

- **GenerationTrigger déclenché en V-click** : sur la slide de lancement,
  l'action `start()` + `generate()` est câblée sur un pas de clic
  (`$clicks`), donc **déclenchable à la télécommande**. Le bouton reste
  comme retour visuel et déclencheur de secours (souris, en répétition) ;
  le latch d'idempotence continue de garantir un seul démarrage.
- **Retrait du `letter-spacing` de titrage** : la règle titres du thème
  ne pose plus de tracking, restaurant les ligatures Sinzano.

Non-goals : conversion d'autres composants (déjà conformes) ; refonte
typographique (jalon design).

## Capabilities

### Modified Capabilities

- `live-generation`: ajout d'une exigence — le déclenchement de la
  génération est activable par l'avancée de présentation (télécommande),
  pas uniquement à la souris.
- `deck-theme`: ajout d'une exigence — les ligatures de Sinzano sont
  préservées (aucun tracking sur les titres/exergues).

## Impact

- **Modifié** : `slides/components/GenerationTrigger.vue` (watcher
  `$clicks`), `slides/pages/03-lancement.md` (`clicks: 1`),
  `theme/styles/base.css` (retrait `letter-spacing`).
- **Dépendances** : aucune. **Réseau** : aucun.
