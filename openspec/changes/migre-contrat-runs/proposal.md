## Why

Le client réel (`slides/lib/genClient.ts`) parle encore le contrat de la
keynote : `POST /generate` sans corps, puis les routes singleton `/status`,
`/events`, `/chapter`, `/audio`. La fabrique a changé de contrat (ADR-0005
côté factory, contrat par run) : elle répond `400` au POST sans corps et
`410` aux routes singleton. Avec `VITE_MOCK=0`, le deck arme donc son repli
embarqué à chaque lancement, en silence — règle « jamais d'erreur » oblige.
Personne ne le verrait sur scène : le chapitre lu serait toujours l'embarqué.

Côté fabrique, le change `prepared-plan` (tâche 5b) demande au deck de
reprendre le plan préparé et approuvé la veille : `prepared: "latest"`.

## What Changes

- **`slides/lib/genClient.ts`** — le lancement envoie
  `POST /generate {chapter, prepared}` (JSON) et retient le `run_id` de la
  réponse `202`. Toutes les lectures suivent ce run :
  `/runs/<id>/status`, `/runs/<id>/events`, `/runs/<id>/chapter`,
  `/runs/<id>/audio`. Un `202` sans `run_id` est un échec de lancement
  (même règle de reprise).
- **Relance** — la relance unique crée un nouveau run ; le deck suit le
  nouveau `run_id`, ferme le flux de l'ancien et rouvre celui du nouveau.
- **Sans run** — tant qu'aucun run n'est connu (premier POST en échec), le
  filet de zéro pose directement l'embarqué, sans appel distant.
- **`phase: queued`** — un run en file ne change rien à l'écran (comme
  `idle`).
- **`VITE_GEN_CHAPTER`** (défaut `7`) et **`VITE_GEN_PREPARED`** (défaut
  `latest` ; vide = génération complète sans plan préparé, pour répéter
  avant que la fabrique sache reprendre). Ajoutés à `.env.example`.

Compatibilité : la fabrique actuelle ignore `prepared` (clé inconnue), le
deck génère donc normalement d'ici à `prepared-plan`. Après, sans plan
préparé pour le chapitre, la fabrique répond `400` : relance unique, puis
repli embarqué — la veille de scène, préparer le plan est donc une étape du
runbook.

Hors périmètre : l'affichage du plan (`GET /runs/<id>/plan`), change
séparé (roadmap 7.2).

## Capabilities

### Modified Capabilities

- **remote-integration** — le déclenchement nomme le chapitre et le plan
  préparé, et le deck suit le run créé (relance comprise).

### New Capabilities

Aucune.

## Impact

- `slides/lib/genClient.ts` — contrat par run.
- `.env.example` — `VITE_GEN_CHAPTER`, `VITE_GEN_PREPARED`, routes à jour
  dans les commentaires.
- Mode mock inchangé (zéro réseau).
