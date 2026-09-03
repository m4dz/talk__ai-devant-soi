## 1. Timer dans le bouton (GenerationTrigger)

- [x] 1.1 `slides/components/GenerationTrigger.vue` : `label` computed →
      idle `Lancer la génération`, running `mm:ss` depuis `session.remaining`
      (même formule que `Countdown`/`global-bottom`, `tabular-nums`).
- [x] 1.2 Retirer le `statusLabel` map (plus de texte d'état) ; conserver le
      point qui pulse en running. Mettre à jour les commentaires (l'ancien
      justifiait l'égalité `error`/`generating` du libellé).
- [x] 1.3 Vérifier `tabular-nums` sur le bouton pour éviter le jitter du
      timer.

## 2. Slide 16 — retrait Countdown + centrage

- [x] 2.1 `slides/pages/03-lancement.md`, slide 16 : retirer `<Countdown />`
      du bloc `.launch-controls` (note + journal disparaissent).
- [x] 2.2 Centrer `.launch-controls` sur la largeur de la slide (sortir de la
      colonne 58ch du layout `propos` — cf. design.md), en clair et sombre.
- [x] 2.3 Vérifier l'import de `Countdown` : la slide 07-lecture l'utilise
      encore (`:feed="false"`) — ne pas casser cet usage.

## 3. Fixture mock (mockTimeline.ts)

- [x] 3.1 Créer `slides/lib/mockTimeline.ts` : transcrire `timeline_nominale`,
      `timeline_erreur`, `timeline_idle` du contrat back (snapshots absolus :
      `phase`, `label`, `detail`, `notes`, ordre par `elapsed_s`).
- [x] 3.2 Typer les snapshots sur l'interface `Snapshot` de `genClient`
      (exporter `Snapshot` si besoin).

## 4. Mock réaliste (genClient.ts)

- [x] 4.1 Remplacer `MOCK_FEED` / `mockGenerate` : rejouer la timeline
      sélectionnée sur horloge compressée.
- [x] 4.2 Snapshots `generating`/`tts` → `applySnapshot(s, 'stream')`
      (zéro réseau).
- [x] 4.3 Terminal `ready` → charger le chapitre embarqué + `applyStatus`
      (pas d'appel distant).
- [x] 4.4 Sélecteur `VITE_MOCK_SCENARIO` (défaut `nominal`) : `error` rejoue
      le snapshot d'échec (chemin `handleError` → repli), `idle` rejoue
      l'annulation ignorée.
- [x] 4.5 `clearMockTimers` couvre tous les timers du replay (nettoyage sur
      `stop()`/`reset`).

## 5. Config + doc

- [x] 5.1 `.env.example` : ajouter `VITE_MOCK_SCENARIO=nominal` (commenté :
      `nominal|error|idle`).
- [x] 5.2 `CLAUDE.md` : contrat `<Countdown>` — le timer du lancement est
      porté par le déclencheur ; retirer « affiché en grand sur la slide de
      lancement » et « En grand : étape + récit » (le grand chiffre et le
      récit en grand tombent ; la pilule garde l'étiquette seule).
- [x] 5.3 Vérifier `docs/scripts/` (section 3) : aucune réplique ne décrit un
      grand compteur à l'écran ; ajuster si un mot scénique y fait référence.

## 6. Vérification

- [x] 6.1 Slide 16, mode mock nominal : bouton centré, timer qui décompte dans
      le label, aucun grand chiffre, aucune note/journal. Clair + sombre.
- [x] 6.2 Sections 4-6 : pilule de coin intacte (label d'étape seul), timer
      qui poursuit.
- [x] 6.3 Étapes affichées = vocabulaire du contrat (« Écriture — entrée 1/4 »,
      « Bascule des modèles », « Restitution »…), phase `tts` seulement sur la
      restitution.
- [x] 6.4 Scénario `error` : repli silencieux, chapitre embarqué à zéro,
      indistinguable. Scénario `idle` : affichage non réinitialisé, chapitre
      posé à zéro.
- [x] 6.5 Slide 07-lecture : chapitre + audio servis normalement (usage
      `Countdown :feed="false"` intact).
- [x] 6.6 `openspec validate corrige-lancement-timer-et-mock-reel --strict`.
