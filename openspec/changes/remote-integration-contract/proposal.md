## Why

> **⚠ CHANGEMENT BLOQUÉ — NE PAS APPLIQUER.**
> La surface d'intégration côté machine n'existe pas encore (stack
> `fiction-assistant` : orchestrateur LangGraph et pipeline chapitre
> marqués « à venir » ; mode d'intégration frontend « non tranché »).
> Ce changement **fige le contrat** deck↔machine pour que la stack
> construise vers une cible précise. Il sera **appliqué le jour où** le
> pipeline de génération + TTS est joignable.

Le jalon 4 remplace le mode mock (jalon 3) par l'intégration réelle avec
la machine de génération du réseau local, plus le protocole de fallback
silencieux (non-négociable : « la démo doit être indistinguable de son
fallback »). Comme la stack n'est pas prête, on gèle d'abord le contrat.

## What Changes

Contrat gelé (détails HTTP dans `design.md`) :

- **`POST {VITE_GEN_HOST}/generate`** — déclenchement fire-and-forget de
  la génération, envoyé par le deck au lancement (section 3, sur V-click).
  Idempotent côté serveur.
- **`GET {VITE_GEN_HOST}/chapter`** — le chapitre généré en Markdown,
  contenant le marqueur `<!-- BASCULE -->`. Non-prêt → réponse « pas
  prêt » explicite.
- **`GET {VITE_GEN_HOST}/audio`** — le WAV **pré-rendu post-bascule**
  (voix clonée, `lire_chapitre.py --from "<!-- BASCULE -->"`). Non-prêt →
  « pas prêt ».
- **`GET {VITE_GEN_HOST}/status`** — **optionnel** : `{phase, ready}` pour
  enrichir le countdown. Le deck fonctionne sans (countdown autonome).
- **CORS** : la machine autorise l'origine du deck.
- **Protocole de fallback silencieux** : timeouts courts + retries
  silencieux ; à tout échec / non-prêt / CORS / réseau coupé, bascule
  **invisible** vers `public/fallback/chapitre.{md,wav}` embarqués.
  Raccourci discret pour forcer le fallback (escape hatch opérateur —
  clavier autorisé ici : contrôle technique, pas action scénique).
- `genClient` réel (branche `VITE_MOCK=0`) implémentant ce contrat ; le
  mock du jalon 3 reste le chemin par défaut jusqu'à bascule.

Non-goals : implémentation code (différée jusqu'à la stack) ; progression
réelle riche dans le countdown (dépend de `/status`, optionnel) ;
construction de l'API côté stack (autre repo).

## Capabilities

### New Capabilities

- `remote-integration`: contrat d'intégration réelle deck↔machine et
  protocole de fallback silencieux — comportement observable des appels
  (déclenchement, récupération chapitre/audio, statut optionnel), et
  garantie de bascule invisible vers les assets embarqués à toute
  défaillance.

## Impact

- **Futur (à l'application)** : `slides/lib/genClient.ts` (branche réelle),
  logique de fallback (dans `genClient` / `ChapterReader` / `session`),
  raccourci force-fallback, `.env` (`VITE_GEN_HOST` effectif).
- **Coordination** : la stack `fiction-assistant` doit exposer les 3
  endpoints requis (+ `/status` optionnel) et le CORS. À reporter dans son
  repo (« Intégration frontend » y est « non tranché »).
- **Dépendances / réseau** : appels HTTP **réseau local uniquement** ;
  aucun cloud. Fallback = zéro réseau.
