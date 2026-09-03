# Tasks

## 1. Document d'intention (fait en premier)

- [x] 1.1 `CLAUDE.md`, section 5 : « Entretien rejoué à **deux** questions
      (factuelle, interprétative) » → « à **trois** questions (factuelle,
      interprétative, existentielle) ».
- [x] 1.2 `CLAUDE.md`, section 5 : lever la règle « le dispositif du roman ne
      se spoile pas ici » **pour la seule question existentielle** — le
      personnage est poussé au bord du dispositif et le tient, sans que le
      dispositif soit nommé ni expliqué. La règle reste pleine pour le reste
      de la section (ligne d'identité, beats 1/3/4).

## 2. Spec `deck-content`

- [x] 2.1 Exigence « Le mode personnage » : progression à trois questions
      (factuelle → interprétative → existentielle).
- [x] 2.2 Scénario « Entretien à deux questions » → « à trois questions ».
- [x] 2.3 Vérifier que l'exigence « Aucune émergence affirmée » n'est **pas**
      touchée. *(Conservée mot pour mot, plus une phrase actant que la 3e
      question ne fait pas exception.)*

## 3. Script (source de vérité)

- [x] 3.1 `docs/scripts/05-…`, beat 2 : réécrire à trois questions, coller les
      verbatims du run INT-c (`2026-09-02T22-37-57Z`), fin de réponse 2 élaguée
      de « completely ».
- [x] 3.2 Remplacer la note « Deux questions, pas trois » par la décision du
      2026-09-03 (troisième conservée, elle tient sans conclure) ; scoper la
      règle de non-spoil à la fiche d'identité.

## 4. Slide + layout

- [x] 4.1 `slides/pages/06-mode-personnage.md` : `clicks: 3`, trois blocs
      verbatim, en-tête et notes de présentateur à jour.
- [x] 4.2 `theme/layouts/entretien.vue` : styles `.q` / `.r` / `.qui`,
      commentaire du layout à jour.

## 5. Validation

- [x] 5.1 `openspec validate entretien-question-realite --strict`.
- [x] 5.2 Export `--with-clicks` des deux modes vérifié (page 73, état
      pleinement révélé) : à 0.95rem la réponse existentielle passait sous le
      bord bas ; layout resserré (padding, titre, marges d'échange, corps à
      0.85rem / interligne 1.32) → les trois échanges tiennent avec marge
      basse, en dark ET en light.
