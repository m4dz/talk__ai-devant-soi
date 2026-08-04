# Design — remote-integration-contract (CONTRAT GELÉ)

> Ce document **fige le contrat HTTP** deck↔machine. Il est la référence
> que la stack `fiction-assistant` doit satisfaire. Aucun code n'est écrit
> tant que le pipeline de génération + TTS n'est pas joignable.

## État de la stack (pourquoi bloqué)

`fiction-assistant/CLAUDE.md` « État actuel » : LangGraph, pipeline
chapitre et intégration frontend sont non faits / « non tranché ». Ollama
+ ChromaDB + indexeur existent, mais rien n'expose de génération de
chapitre par HTTP. Le contrat ci-dessous est donc une **cible**, pas une
description de l'existant.

## Contrat HTTP (base `VITE_GEN_HOST`)

Le `genClient` (déjà en place, contrat 4 opérations, jalon 3) mappe ainsi :

| Op client   | HTTP                         | Réponse prête            | Non prêt |
|-------------|------------------------------|--------------------------|----------|
| `generate()`| `POST /generate`             | `202 Accepted`           | —        |
| `chapter()` | `GET /chapter`               | `200` `text/markdown`    | `204`/`404` |
| `audio()`   | `GET /audio`                 | `200` `audio/wav`        | `204`/`404` |
| `status()`  | `GET /status` *(optionnel)*  | `200` `{phase,ready}`    | absent OK |

- `POST /generate` : **fire-and-forget**, idempotent côté serveur (un
  second POST ne relance pas). Corps minimal ou vide.
- `GET /chapter` : Markdown du chapitre, **contient `<!-- BASCULE -->`**
  (posé par le pipeline après la 1ʳᵉ phrase). Avant disponibilité → `204`
  ou `404` (le deck retente puis fallback).
- `GET /audio` : WAV **pré-rendu de la portion post-bascule**
  (`lire_chapitre.py --from "<!-- BASCULE -->"`), voix clonée. Lu depuis 0.
- `GET /status` : `phase ∈ {generating, tts, ready}`, `ready: bool`.
  **Optionnel** — le countdown est autonome ; `/status` n'enrichit que
  l'affichage. Peut ne jamais être implémenté.
- **CORS** : la machine renvoie `Access-Control-Allow-Origin` pour
  l'origine du deck (à configurer côté stack, tracer dans son repo).
- **Audio host** : `/audio` peut être servi par `VITE_GEN_HOST` ou
  `VITE_TTS_HOST` selon où tourne Qwen3-TTS (« À trancher » #4 : recommandé
  sur la machine de génération → un seul host).

## Protocole de fallback silencieux

- **Timeouts courts** (≈ 3–5 s/appel) + **quelques retries silencieux**.
- **Déclencheurs de bascule** : timeout, erreur HTTP, CORS, réseau coupé,
  ou ressource `204/404` au moment de la lecture (section 7).
- **Cible** : `public/fallback/chapitre.{md,wav}` déjà embarqués (jalon 3B).
- **Invisibilité** (non-négociable #2) : aucune UI d'erreur, aucun
  indicateur de mode. « Un WAV en remplace un autre, rien d'autre ne
  change » (RUNBOOK TTS).
- **Escape hatch** : raccourci clavier discret forçant le fallback —
  contrôle opérateur, **exception assumée** à la règle « pas de clavier »
  (celle-ci vise les actions scéniques ; ici c'est un filet technique).

## Timing (contrainte dure)

Le WAV est **pré-rendu** pendant la queue du compte à rebours (TTS ≈ 1×
temps réel, RUNBOOK). Le deck ne fait que **récupérer** un fichier prêt en
section 7 — il ne déclenche pas de synthèse live. À profiler le jour J :
la synthèse doit finir avant la section 7.

## Décisions gelées (rappel)

- Intégration **hybride** : `GET /chapter` + `GET /audio` requis ;
  `/status` optionnel (point d'extension countdown).
- Lancement : le deck **envoie `POST /generate`** (fire-and-forget).
- Contrat client inchangé (les 4 ops du `genClient` existent déjà) → au
  déblocage, on n'écrit que la branche réelle + le fallback, pas les
  composants.

## Points ouverts (à trancher au déblocage)

- « À trancher » #1 : IP fixe vs mDNS pour `VITE_GEN_HOST` (reco IP fixe).
- « À trancher » #4 : host de l'audio (gen vs TTS) — reco un seul host.
- Valeurs exactes timeouts / nb de retries — à caler en répétition réseau.
- Reporter le contrat dans le repo `fiction-assistant` (item « Intégration
  frontend »).
