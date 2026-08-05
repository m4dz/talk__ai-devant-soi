# Tasks — countdown-28-et-scripts

## 1. Durée 28 minutes

- [x] 1.1 `Countdown.vue` + `GenerationTrigger.vue` : défaut 28 (au lieu de 35)
- [x] 1.2 `.env.example` : `VITE_COUNTDOWN_MINUTES=28` + note « gravé par le
  script, zéro au début de la section 7 »

## 2. Gating par frontmatter (fin des numéros de page)

- [x] 2.1 `global-bottom.vue` : afficher le pill dès que la session tourne,
  sauf si la slide courante déclare `noCountdown: true` — plus aucune borne
  de page
- [x] 2.2 Vérifier que la frontmatter de la slide courante est accessible
  depuis le layer global (API Slidev) ; sinon, replier sur une solution
  équivalente sans numéros de page
- [x] 2.3 Poser `noCountdown: true` sur la slide de lancement (countdown
  plein écran) et sur les slides de la section 8

## 3. Scripts versionnés

- [x] 3.1 Copier les 7 fichiers de script dans `docs/scripts/`
- [x] 3.2 `CLAUDE.md` : les scripts sont dans le repo (retirer « hors scope »),
  pointer `docs/scripts/`

## 4. Trame corrigée dans CLAUDE.md

- [x] 4.1 Section 5 = les quatre strates de la descente ; section 6 = le mode
  personnage (la résolution architecturale est absorbée par la section 5) ;
  compte à rebours 28 min affiché 3→7

## 5. Vérification

- [x] 5.1 `pnpm run build` OK ; hors-ligne intact
- [x] 5.2 Au navigateur : lancer la génération → pill absent sur la slide de
  lancement, présent sur les slides suivantes, absent en section 8
- [x] 5.3 Countdown démarre bien à 28:00
