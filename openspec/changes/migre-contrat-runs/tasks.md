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
      **Reste ouverte** : aucun run avec les vrais modèles (Ollama occupé).
      Fait le 2026-11-19 contre le vrai serveur de la fabrique
      (`factory.api.server` de `main` 8835d1c, non modifié), servi en
      processus avec les doublures des tests de la fabrique (`tests/fakes` :
      faux modèle, faux Chroma ; préflight machine et voix remplacés), runs
      dans un dossier jetable, deck buildé en `VITE_MOCK=0` servi par la
      fabrique (même origine), piloté par Playwright :
      - nominal : plan préparé (`factory prepare`, faux modèle) →
        `POST /generate {chapter: 7, prepared: "latest"}` `202` → run repris
        suivi (statut, flux) → `ready` → `/chapter` et `/audio` `200` →
        chapitre distant lu (audio en blob, texte ≠ embarqué) ;
      - préflight refusé au 1er run : relance sur un nouveau `run_id`, suivie
        jusqu'au chapitre distant ;
      - préflight refusé deux fois : 2 POST, pas de 3ᵉ, embarqué à zéro ;
      - aucun plan préparé : `400` ×2, embarqué à zéro.
      Reste pour R1 : le même parcours sur la machine de scène, vrais
      modèles — préflight réel, empreinte contre les vrais digests Ollama,
      durée, voix clonée, marqueurs dans le chapitre réel.
