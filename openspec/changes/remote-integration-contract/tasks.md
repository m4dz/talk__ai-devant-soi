# Tasks — remote-integration-contract

> **⚠ BLOQUÉ — NE PAS DÉMARRER.** En attente de la stack
> `fiction-assistant` (LangGraph + pipeline chapitre + endpoints HTTP +
> CORS). Ce changement est un **contrat gelé** ; les tâches ci-dessous ne
> s'appliquent qu'une fois la machine joignable. Prérequis de déblocage :
> `POST /generate`, `GET /chapter`, `GET /audio` répondent sur le réseau
> local, CORS configuré.

## 0. Préalable (côté stack, autre repo)

- [ ] 0.1 Exposer `POST /generate`, `GET /chapter`, `GET /audio`
  (+ `/status` optionnel), CORS ouvert à l'origine du deck
- [ ] 0.2 Le pipeline pose `<!-- BASCULE -->` et pré-rend le WAV
  post-bascule ; profiler le timing (synthèse finie avant section 7)

## 1. Client réel

- [ ] 1.1 `slides/lib/genClient.ts` — branche réelle (`VITE_MOCK=0`) :
  `generate`→POST, `chapter`→GET md, `audio`→GET wav, `status`→GET
  optionnel, avec timeouts courts + retries silencieux
- [ ] 1.2 `.env` — `VITE_GEN_HOST` effectif (IP fixe jour J)

## 2. Fallback silencieux

- [ ] 2.1 Bascule invisible vers `public/fallback/chapitre.{md,wav}` à
  tout échec / non-prêt (dans `genClient` / `session` / `ChapterReader`)
- [ ] 2.2 Escape hatch : raccourci discret force-fallback (opérateur)
- [ ] 2.3 Garantir : jamais de blocage, jamais d'erreur affichée

## 3. Vérification

- [ ] 3.1 Contre un **stub HTTP local** : chapitre + audio récupérés,
  affichés/lus (chemin nominal)
- [ ] 3.2 Coupure réseau / stub éteint → bascule silencieuse vers embarqué,
  indistinguable
- [ ] 3.3 Timeouts / 404 / CORS → fallback, aucun blocage ni erreur
- [ ] 3.4 Les deux modes ; invariant hors-ligne (fallback = 0 réseau)
- [ ] 3.5 **E2E réel = jour J** sur la machine de scène (hors CI)
