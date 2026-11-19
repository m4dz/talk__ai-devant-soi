## Why

Côté fabrique, le plan du chapitre se prépare et s'approuve la veille
(`factory prepare`, ADR-0028) ; sur scène, `POST /generate {chapter: 7,
prepared: "latest"}` reprend ce plan dans un nouveau run, qui en porte une
copie dès sa création. Décision de l'auteur (fabrique, `prepared-plan`,
2026-10-19) : **le deck montre ce plan sur scène**, lu sur l'API
(`GET /runs/<id>/plan`, sur le run qu'il a lancé). Roadmap 7.2 ; le change
`migre-contrat-runs` (dont celui-ci part) l'avait laissé hors périmètre.

## What Changes

- **`slides/lib/genClient.ts`** — après le `202`, une lecture de
  `/runs/<id>/plan` (timeout court, retries silencieux, sans `await` : ni le
  sondage ni le flux n'attendent). `200` non vide → le texte est posé tel quel
  dans le store ; `204`, non-2xx, transport en échec, texte vide → rien. La
  relance relit le plan du nouveau run (sans effet si celui du premier est déjà
  posé).
- **`slides/lib/session.ts`** — champ `plan` et `setPlan()` : posé **une fois
  par session**, jamais remplacé ni effacé avant le reset (relance, échec,
  repli : le plan affiché ne bouge plus). Remis à `null` par `start()` et
  `reset()`.
- **`slides/components/RunPlan.vue`** (nouveau) — rend le plan **verbatim** :
  seule la syntaxe de titre Markdown (`# `) est consommée pour la mise en
  forme ; chaque autre ligne est rendue caractère pour caractère, numéros de
  liste compris, en texte (jamais en HTML). Sans plan, le composant ne rend
  rien. Filet neutre à gauche, corps réduit par token en scope, apparition en
  fondu.
- **`slides/pages/03-lancement.md`** — `<RunPlan />` sous le bouton-timer de
  la slide « On lance ? » ; marges verticales de cette slide ramenées à
  `--space-lg` (classe `lancement`) pour que le plan de scène (titre + cinq
  lignes) tienne dans le canvas. Sans plan, le corps reste centré comme avant.
- **`slides/lib/mockTimeline.ts`** — `MOCK_PLAN`, **gabarit neutre** (un
  titre « Plan du chapitre (répétition) », une ligne, trois lignes numérotées
  sans contenu) posé par le mock juste après le lancement, dans les trois
  scénarios. Le deck n'embarque ni n'invente le plan de l'auteur.

## Décisions

- **Le plan apparaît après le lancement, sur la slide de lancement.** Il n'est
  connu qu'avec le `run_id`, et le runbook de la fabrique place l'affichage au
  même temps que le `POST` (section 3). La slide « Chapitre 7 : l'anniversaire »
  qui précède reste inchangée.
- **Enrichissement, comme les étapes.** Un run accepté puis en échec au
  préflight garde son plan : il est copié dans le run à sa création. **Aucune
  réplique du script ne doit pointer ce plan.**
- **Copie au repli** (décision de l'auteur, 2026-11-19). Sur le chemin de
  repli (`POST` refusé, machine injoignable, échec du run), le deck montre une
  copie embarquée du plan (`public/fallback/plan.md`, le `plan.md` du run
  préparé, recopié la veille comme le chapitre de repli) : le repli ne se lit
  pas à l'écran. Posée quand le repli s'arme ou se matérialise, jamais avant :
  aucun run n'est relancé ensuite, la copie ne masque donc jamais un plan
  servi.
- **Verbatim, borné à 7 lignes** (décision de l'auteur, 2026-11-19). Le texte
  est celui de l'auteur : ni réécrit, ni réordonné. L'affichage s'arrête aux
  7 premières lignes de texte (titre et lignes vides non comptés), la dernière
  terminée par « … ». Le titre Markdown est le seul balisage interprété ; un autre balisage
  (gras…) s'afficherait tel quel.

## Questions à l'auteur (tranchées le 2026-11-19)

1. **Indistinguabilité.** → copie embarquée au repli. Le plan rend le chemin nominal (plan sous le bouton)
   distinguable du repli (rien) pour qui sait regarder — même arbitrage que les
   étapes de la pilule. Embarquer une copie du plan comme repli le rendrait
   invisible, mais figerait dans le deck un texte que la préparation de la
   veille peut changer.
2. **Doublon avec la slide précédente.** « Chapitre 7 : l'anniversaire »
   montre déjà un plan (texte du deck, tableau) juste avant le lancement. La
   garder, l'alléger, ou la remplacer par le plan du run est un choix de mise
   en scène, hors de ce change. → la slide reste telle quelle (c'est le brief
   en pièce à conviction, pas un plan).
3. **Longueur.** La mise en page tient le plan de scène actuel (44 mots,
   7 lignes). Un plan nettement plus long déborderait du canvas. → borné à
   7 lignes de texte, la dernière terminée par « … ».

## Capabilities

### Modified Capabilities

- **remote-integration** — le deck lit et montre le plan du run lancé, en
  enrichissement.

### New Capabilities

Aucune.

## Impact

- `slides/lib/genClient.ts`, `slides/lib/session.ts`,
  `slides/lib/mockTimeline.ts`, `slides/components/RunPlan.vue`,
  `slides/pages/03-lancement.md`, `CLAUDE.md` (principes de la démo live).
- Aucun changement de configuration : la route se déduit de `VITE_GEN_HOST`.
- Côté fabrique : rien (route `GET /runs/<id>/plan` déjà servie).
