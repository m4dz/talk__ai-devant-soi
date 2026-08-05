## Why

Les scripts de keynote des sections 1 à 3 sont écrits, et ils **lèvent le
blocage #6** — mais pas comme anticipé. Il n'existe **aucune position
officielle de l'Académie Goncourt** sur l'IA : la pièce à conviction est un
**dossier de sources** (Télérama n°3981, 29/04/2026) — les aveux de Pierre
Assouline, juré depuis 2012, et la clause d'originalité renforcée des
éditeurs. Le wireframe (jalon 2) supposait une citation d'Académie : il est
donc **factuellement faux** sur ce point, et son découpage de beats diverge
du script réel.

Ce changement aligne les sections 1-3 sur les scripts, remplace les
placeholders `TODO` par du contenu sourcé, et pose les valeurs du roman de
démonstration.

## What Changes

- **Section 1 — cold-open réécrit en 7 beats** (script) : le corps (rue du
  Bac, 2 décembre 1980) → la gloire et la chute → Ajar → la fabrique
  (Pavlowitch) → la cruauté → la révélation (« On ne rend pas un
  Goncourt ») → **le pivot** : les mots d'Assouline (« affaire Ajar 2.0 »,
  « Aucun d'entre nous n'est armé pour repérer une utilisation de
  ChatGPT »), puis le titre tombe.
  Remplace les 6 beats provisoires (dont l'ouverture « Paris, 1975 »).
- **Section 2 — le pivot (3 beats)** : citation Assouline **avec sa source
  affichée** ; la **clause éditeurs** (Madrigall : l'œuvre cédée « doit
  être produite par l'auteur, et non par une machine ») ; la **question**
  centrale du talk (« Peut-on tracer la limite entre une œuvre et sa
  fabrique ? ») ; la signature du speaker.
- **Section 3 — l'allumage (3 beats)** : le roman **L'Involontaire** et son
  accroche d'univers ; le lancement (trigger + countdown déjà en place) ;
  le **contrat du compteur** (« un chapitre entier, que personne n'a jamais
  lu, pas même moi »).
- **Layout `citation-sourcee`** : citation en exergue **avec source
  affichée à l'écran** (titre, numéro, date) — exigence de rigueur du
  script.
- **Suppression des deux marqueurs `TODO`** (blocage #6 clos).

**Garde-fou factuel non négociable** : ne jamais écrire ou dire que
l'Académie « annonce », « refuse » ou « interdit » quoi que ce soit — rien
de tel n'existe. Ce qui est montré, c'est la **peur** et l'**aveu
d'impuissance**, attribués nominativement et sourcés.

Non-goals : sections 4-8 (déjà en place) ; contenu littéraire du chapitre
généré ; timing scénique (répétition).

## Capabilities

### Modified Capabilities

- `deck-content`: le beat de révélation du cold-open et la section 2 ne
  reposent plus sur une citation d'Académie inexistante mais sur des
  propos attribués et sourcés ; ajout des exigences de contenu pour la
  section 2 (clause, question) et la section 3 (roman, contrat) ; retrait
  de l'exigence de marqueurs `TODO`.
- `deck-layouts`: ajout d'un layout de citation sourcée (source affichée).

## Impact

- **Modifié** : `slides/pages/01-cold-open.md` (réécriture 7 beats),
  `02-goncourt.md` (section 2 complète), `03-lancement.md` (roman +
  contrat), `theme/layouts/` (+ `citation-sourcee.vue`).
- **Levé** : blocage « À trancher » #6 → à reporter dans `CLAUDE.md`.
- **Dépendances / réseau** : aucun.
