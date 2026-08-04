## Why

Le jalon 1 a posé le socle (thème dual-mode, typo, build hors-ligne). Il
n'y a encore aucun contenu : le deck ne raconte rien. Le jalon 2 pose la
**trame complète des 8 sections en wireframe texte seul**, pour obtenir
un deck navigable de bout en bout dont le rythme et l'ossature narrative
sont validables avant d'investir dans les composants live (jalon 3) et
les illustrations (jalon 5).

## What Changes

- **8 sections en fichiers séparés** dans `slides/pages/`
  (`01-cold-open.md` … `08-cloture.md`), importées par `slides/slides.md`
  via `src:`.
- **Granularité hybride** : récit (cold open, jeu du seuil, murs) éclaté
  beat par beat ; argument (Goncourt, résolution, clôture) en 1-2 slides.
  ≈ 24-26 slides.
- **Layouts custom minimaux** (thème local, pilotés tokens, aucune
  illustration) :
  - `cold-open` — récit noir, texte court plein cadre
  - `exergue` — citation Sinzano centrée (Goncourt, clôture Gary)
  - `case-card` — un cas du seuil (nom · œuvre · part humaine/IA · ligne)
  - `wall` — un mur technique (problème → solution, numéroté)
- **Slots des composants live** marqués en placeholder (texte/commentaire,
  pas de stub Vue) : `GenerationTrigger` + `Countdown` (section 3),
  `ChapterReader` (section 7). Le câblage réel est jalon 3.
- **Blocages Goncourt isolés** : slide 2 et beat 7 du cold open en
  placeholder `TODO` tant que la citation officielle exacte et sourcée
  n'est pas fournie (« À trancher » #6). Le reste de la trame n'en dépend
  pas et avance.

Non-goals : composants live fonctionnels (jalon 3), countdown persistant
en layer global (jalon 3), illustrations / covers pulp (jalon 5), export
PDF final (jalon 5), contenu littéraire définitif des slides récit (affiné
en parallèle dans les scripts de keynote, hors repo).

## Capabilities

### New Capabilities

- `deck-content`: structure narrative du deck — les 8 sections, leur
  ordre, les beats obligatoires de chaque section, les emplacements des
  composants live et les points de contenu bloqués. Décrit CE QUE le deck
  raconte et dans quel ordre, indépendamment de la mise en forme.
- `deck-layouts`: catalogue des layouts de présentation custom
  (cold-open, exergue, case-card, wall) et leur contrat d'usage
  (structure de contenu attendue, consommation exclusive des tokens).

### Modified Capabilities

<!-- Aucune. deck-theme (jalon 1) reste inchangé : les layouts consomment
     ses tokens sans en modifier le contrat. -->

## Impact

- **Nouveau** : `slides/pages/01…08-*.md`, `theme/layouts/*.vue`
  (cold-open, exergue, case-card, wall), extension de `slides/slides.md`
  (imports `src:`).
- **Modifié** : `slides/slides.md` (la slide preuve du jalon 1 devient /
  cède la place à la trame).
- **Dépendances** : aucune nouvelle.
- **Bloqué** : 2 slides en attente de la citation Goncourt.
