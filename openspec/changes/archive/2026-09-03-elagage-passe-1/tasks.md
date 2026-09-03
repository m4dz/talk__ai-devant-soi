# Tasks

## 1. Préserver le contenu retiré

- [x] 1.1 Capturer les 7 slides (texte + notes + fonction + impact) dans
      `slides-retirees.md` **avant** toute suppression.

## 2. Retirer les slides du deck

- [x] 2.1 `01-cold-open.md` : retirer bio Gary (beat 2) et l'ironie (beat 5).
- [x] 2.2 `02-goncourt.md` : retirer « Elle n'a rien interdit / annoncé / attend ».
- [x] 2.3 `03-lancement.md` : retirer « Ce compteur, c'est notre contrat ».
- [x] 2.4 `05-descente-technique.md` : retirer l'aparté « gros modèle » et
      l'aphorisme « Compter n'est pas lire ».
- [x] 2.5 `07-lecture.md` : retirer « Le chapitre / Il est né ».

## 3. Vérifier

- [x] 3.1 `pnpm build` OK.
- [x] 3.2 Compte Slidev authoritatif : **44 slides** (= 51 − 7), coupes propres,
      voisins intacts (vérifié à l'export PNG).

## 4. Renumérotation commune

- [x] 4.1 Régénérer la planche contact numérotée 1-44 (nouvelle base commune).
- [x] 4.2 Diffuser la nouvelle planche comme référentiel de numérotation
      partagé (fait dans la conversation ; à archiver avec le deck si besoin).

## 5. Spec

- [x] 5.1 Delta `deck-content` (ADDED) notant le retrait, la préservation et la
      renumérotation.
- [x] 5.2 `openspec validate elagage-passe-1 --strict`.

## 6. Étape suivante (hors périmètre de ce changement)

- [x] 6.1 Reconstruction de l'arc narratif + scripts/notes → **changements dédiés**
      `refonte-arc-narratif` et `refonte-arc-figures-gestes` (en archivage). Hors
      périmètre de ce change ; pointeur seulement.
