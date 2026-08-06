## Why

`pnpm run build` échoue sur cette machine :

```
Error: Cannot find matching keyid: {...}
  at verifySignature (corepack.cjs)
  at fetchLatestStableVersion (corepack.cjs)
```

Chaîne de causes :

1. `/Users/m4dz/Sources/m4dz/talks/.node-version` (dossier **parent**, commun
   à tous les talks) force **Node 22.13.1** ;
2. Node 22.13.1 embarque **corepack 0.30.0** ;
3. corepack 0.30.0 ne connaît pas **pnpm 11** (sorti après lui), donc il
   ignore le `packageManager` pinné et tente de résoudre « latest stable »
   en ligne ;
4. ses clés de signature du registre npm sont périmées → la vérification
   échoue → build mort.

Le contournement utilisé jusqu'ici (`COREPACK_INTEGRITY_KEYS=0`) désactive
la vérification de signature : acceptable pour débloquer, pas pour un projet
qu'on va builder en conditions de scène.

Node **24.15.0** est déjà installé et embarque corepack **0.34.6**, qui
connaît pnpm 11 et a des clés à jour.

## What Changes

- **`.node-version` dans le repo** : `24.15.0`. Il prend le pas sur le
  fichier du dossier parent **pour ce projet uniquement** — les autres talks
  ne sont pas touchés.
- **`package.json`** : champ `engines.node` (`>=24`) pour que l'exigence soit
  lisible sans connaître nodenv.
- **`CLAUDE.md`** : la stack du deck note le runtime attendu et la raison
  (le piège corepack/pnpm 11), pour ne pas le redécouvrir en répétition.

Vérifié sous Node 24.15.0, **sans aucun contournement** : `pnpm -v` →
11.9.0, `pnpm run build` → OK, `slidev export` (chromium) → OK.

## Capabilities

Aucune. `skip_specs: true` — configuration de toolchain, aucun comportement
observable du deck ne change.

## Impact

- **Ajouté** : `.node-version`.
- **Modifié** : `package.json` (`engines`), `CLAUDE.md`.
- **Réseau / dépendances** : aucun changement de dépendance ; `node_modules`
  reste valide (build et export testés).

## Effet de bord rencontré

Changer de version de Node a sorti `openspec` du PATH : le binaire global
n'était installé que sous Node 22. Réinstallé en version identique (1.7.0)
sous Node 24. À garder en tête pour tout autre outil global utilisé par le
projet.
