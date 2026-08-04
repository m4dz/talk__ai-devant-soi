import { fileURLToPath } from 'node:url'

// Slidev prend le dossier de l'entrée (slides/) comme racine projet.
// On pointe publicDir vers le public/ de la racine du repo (structure
// CLAUDE.md) pour que polices + favicon soient bundlés dans dist/.
// Sans ça : assets absents du build → contrainte hors-ligne cassée.
//
// NB : pas d'`import { defineConfig } from 'vite'` — sous pnpm (node_modules
// strict), `vite` n'est pas une dépendance directe donc non résolvable ici.
// Slidev charge et merge cet objet de config tel quel ; defineConfig ne
// servait qu'au typage.
export default {
  publicDir: fileURLToPath(new URL('../public', import.meta.url)),
}
