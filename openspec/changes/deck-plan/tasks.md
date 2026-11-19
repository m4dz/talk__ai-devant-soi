## 1. Client et store

- [x] 1.1 `session.plan` + `setPlan()` : posé une fois par session, remis à
      `null` par `start()` et `reset()`.
- [x] 1.2 `genClient` : lecture de `/runs/<id>/plan` après le `202`, sans
      `await` ; `204` / non-2xx / transport / texte vide → rien.
- [x] 1.3 Relance : lecture du plan du nouveau run (sans effet si déjà posé).
- [x] 1.4 Mock : `MOCK_PLAN`, gabarit neutre, posé juste après le lancement
      dans les trois scénarios, zéro réseau.

## 2. Affichage

- [x] 2.1 `RunPlan.vue` : rendu verbatim (titre `# ` seul interprété, lignes
      en texte), rien sans plan, fondu à l'apparition, tokens en scope.
- [x] 2.2 `<RunPlan />` sous le bouton-timer de « On lance ? » ; marges
      verticales de la slide à `--space-lg` pour que le plan tienne.
- [x] 2.3 `CLAUDE.md` : principe d'affichage du plan (enrichissement, verbatim,
      aucune réplique ne le pointe).

## 3. Vérification

- [x] 3.1 Build (`slidev build`) en mock et en réel.
- [x] 3.2 Mock (Playwright, 2026-11-19) : gabarit sous le bouton en `nominal`
      et en `error`, aucune requête réseau ; slide lisible en clair et sombre.
- [x] 3.3 Réel contre le serveur de la fabrique (`factory.api.server` de
      `main` 8835d1c, non modifié, servi avec les doublures de ses tests : faux
      modèle, faux Chroma, préflight et voix remplacés ; runs dans un dossier
      jetable), deck servi sur une autre origine (CORS) + Playwright :
      plan préparé → `/runs/<id>/plan` `200`, texte affiché identique au
      `plan.md` servi (titre `# ` consommé) ; préflight refusé au 1er run →
      relance, plan inchangé à l'écran, chapitre distant lu ; aucun plan
      préparé (`400` ×2) → rien sous le bouton ; run sans plan
      (`VITE_GEN_PREPARED=` vide, `204`) → rien sous le bouton, chapitre lu.
## 4. Décisions de l'auteur (2026-11-19)

- [x] 4.1 Copie embarquée `public/fallback/plan.md` (= `stage_plan` du
      chapitre 7, comme `plan.md`), posée quand le repli s'arme ou se
      matérialise.
- [x] 4.2 `RunPlan.vue` : 7 lignes de texte, la dernière terminée par « … »
      (sur une 8ᵉ ligne, un plan de 7 lignes aérées débordait de 2 px).
- [x] 4.3 Slide « Chapitre 7 : l'anniversaire » inchangée.
- [x] 4.4 `CLAUDE.md` : copie au repli, borne, recopie la veille.
- [x] 4.5 Vérification (2026-11-19) : build réel, fabrique injoignable +
      Playwright → relance, repli, copie sous le bouton, texte identique au
      `stage_plan` ; copie de 12 lignes → 7, la dernière avec « … », bas du
      plan à 695 px sur 720 (648 pour le plan réel), clair et sombre.

## 5. Répétition

- [ ] 3.4 Répétition R1, vraie fabrique et vrais modèles : plan approuvé la
      veille affiché au lancement ; relire la slide sur projecteur.
