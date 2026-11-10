## 1. Client réel

- [x] 1.1 `generate()` : `POST /generate {chapter, prepared}` en JSON,
      `run_id` retenu ; `202` sans `run_id` → règle de reprise.
- [x] 1.2 Statut, flux, chapitre, audio sur `/runs/<id>/…`.
- [x] 1.3 Relance : nouveau `run_id`, flux de l'ancien fermé, flux du
      nouveau ouvert.
- [x] 1.4 Sans run connu : le filet de zéro pose l'embarqué sans appel.
- [x] 1.5 `phase: queued` ignorée à l'écran.
- [x] 1.6 `stop()` oublie le run.

## 2. Configuration

- [x] 2.1 `VITE_GEN_CHAPTER`, `VITE_GEN_PREPARED` (vide = sans plan) dans
      `genClient.ts` et `.env.example`.

## 3. Vérification

- [x] 3.1 `pnpm build` passe.
- [x] 3.2 Deck en mode réel contre un faux serveur au contrat par run :
      nominal (chapitre distant lu), échec précoce (relance sur un nouveau
      run, suivi), échec de la relance (embarqué), serveur coupé
      (embarqué à zéro). Vérifié 2026-11-10 (faux serveur + Playwright) :
      relance suivie sur le run 2 et son chapitre lu ; échec double → embarqué,
      pas de 3ᵉ POST ; serveur coupé → embarqué.
- [ ] 3.3 Contre la fabrique locale (répétition R1) : chapitre distant lu.
