# Tasks

> **Refonte de trame (fusion), 31-08 — après coup.** Les groupes 1 à 6
> ci-dessous décrivent la **passe pré-fusion** (retrait de Vian, figures ↔ murs
> en plante/récolte, recoupe des strates). Ils restent `[x]` en historique mais
> sont **supersédés** par le **groupe 8** : la galerie autonome et le
> plante/récolte sont abandonnés au profit d'une descente unique où chaque
> figure ouvre son mur, le renversement « pas de seuil » et le vote sont
> supprimés, le mode personnage devient la culmination collée au dernier mur, et
> la chute devient sèche. Implémenter le groupe 8 via `/opsx:apply`.

## 1. Document d'intention (à faire en premier — règle 1 du workflow)

- [x] 1.1 `CLAUDE.md`, section « Trame » : point 4, six stations → **cinq**,
      Vian retiré, et mention que chaque figure nomme un mur de la section 5
- [x] 1.2 `CLAUDE.md`, point 5 : nouvelle liste de strates (lore, intention,
      qualité+mesure, le mur qu'on ne peut pas acheter) ; la contrainte locale
      devient le cadre de la descente, pas une strate
- [x] 1.3 `CLAUDE.md`, point 6 : section 6 réduite, exigence d'émergence retirée,
      entretien à deux questions
- [x] 1.4 `CLAUDE.md`, section « Contexte » : ajouter la thèse « l'auteur est
      celui qui refuse de résoudre » et sa règle de mise en scène (une seule
      occurrence, sur verbatims, jamais expliquée)
- [x] 1.5 `CLAUDE.md`, « À trancher » : ajouter l'entrée du run de falsification
      comme préalable bloquant du dernier mur, avec ses trois issues

## 2. Scripts (source de vérité du contenu)

- [x] 2.1 `docs/scripts/03-section-4-jeu-du-seuil.md` : supprimer la station 3
      (Vian), renuméroter, recaler le chrono à 8'15
- [x] 2.2 Même fichier : ajouter aux notes de préparation la table figure ↔ mur,
      et la consigne que chaque figure sera reprise nominativement plus tard
- [x] 2.3 Même fichier, station 1 : réécrire la clôture de Maquet sur l'inversion
      de rôle (la machine fait les premiers jets, le speaker fait le Dumas) et le
      jugement de 1858
- [x] 2.4 `docs/scripts/04-section-5-descente-fabrique.md` : ajouter l'entrée de
      section qui pose la contrainte locale comme cadre (0'15)
- [x] 2.5 Même fichier : fusionner les strates *puissance* et *seuil* en « le mur
      qu'on ne peut pas acheter », deux étages, 5'30 — **texte du 3ᵉ battement en
      gabarit** jusqu'au run
- [x] 2.6 Même fichier, strate qualité : absorber la veine mesure (le chronomètre
      qui dort, le lint vert par construction) et poser l'aphorisme *compter n'est
      pas lire*, 4'00
- [x] 2.7 Même fichier : nommer Maquet, Queneau, Malley, Lish dans leur strate
      respective, une fois chacun
- [x] 2.8 Même fichier, remontée : retirer le doublon local-only de l'ancienne
      strate 4, garder la version forte, ramener à 0'45
- [x] 2.9 `docs/scripts/05-section-6-mode-personnage.md` : supprimer le beat 3
      (émergence) et la question 3 de l'entretien ; ajouter le beat d'aveu ;
      recaler à 3'20
- [x] 2.10 `docs/scripts/06-sections-7-8-recolte-chute.md`, beat 2 de la chute :
      ajouter Racter en troisième item du verdict (« trop sélectionné, trop
      assemblé, trop édité ») ; reprendre 20 s sur le beat 3
- [x] 2.11 `docs/scripts/00-README.md` : table de chronologie, liste des
      placeholders, et retrait de Vian de la liste des vérifications factuelles
- [x] 2.12 Ajouter aux placeholders des scripts les verbatims datés à extraire du
      journal des murs (ch2-run-2 du 09-08 ; entrée 2 du ch7 du 31-08)

## 3. Slides

- [x] 3.1 `slides/pages/04-jeu-du-seuil.md` : retirer la slide Vian, vérifier la
      numérotation et les transitions
- [x] 3.2 `slides/pages/05-descente-technique.md` : recouper en quatre strates,
      ajouter la slide d'entrée (cadre local-only)
- [x] 3.3 Même fichier : composer le dernier mur avec ses trois battements, le
      troisième marqué en gabarit
- [x] 3.4 Même fichier : slide de comparaison des deux verbatims datés
      (09-08 / 31-08) comme pièce à conviction du dernier mur
- [x] 3.5 `slides/pages/06-mode-personnage.md` : retirer la slide d'émergence et
      la question 3, ajouter la slide d'aveu
- [x] 3.6 `slides/pages/08-cloture.md` : intégrer Racter au verdict
- [x] 3.7 Vérifier que le pattern ternaire reste indépendant de l'ordre pour les
      quatre strates, exception du dernier mur comprise

## 4. Assets

- [x] 4.1 Vian retiré du deck. **Écart assumé** : le PNG n'est pas supprimé de
      `public/images/` (asset généré, suppression peu réversible pour un gain
      de quelques centaines de Ko). Sa ligne de `CREDITS.md` est barrée et
      annotée « station retirée, fichier conservé, plus référencé »
- [x] 4.2 Vérifier que les cinq cas restants ont chacun leur illustration

## 5. Vérifications

- [x] 5.1 `openspec validate refonte-trame-figures-murs --strict`
- [x] 5.2 Build vert, export PNG des 69 slides, planche de contact relue.
      **Reste au speaker** : la relecture en mode sombre (l'export ne rend
      que le mode clair)
- [x] 5.3 Chrono vérifié à l'arithmétique : 8'15 + 16'30 + 3'20 = 28'05,
      table du README à jour. **Reste au speaker** : le recomptage à voix
      haute, seul juge réel
- [x] 5.4 Recherche textuelle : aucune occurrence de « Vian », « Vernon
      Sullivan », ni d'affirmation d'émergence dans les sources du deck
- [x] 5.5 Inventaire des gabarits : le dernier mur y figure

## 6. Le run de falsification — clos

- [x] 6.1 Provenance de `_BEAT_RESOUT` confirmée : « Je n'ai pas rêvé » récidive
      dans 4 entrées du journal, sur toutes les sessions
- [x] 6.2 C5 complet tiré côté stack, quatre conditions, modèle nu, `BEATS_N=1`
- [x] 6.3 Résultat : **H3-brief, 12/12**. La machine tenait le doute ; c'est le
      brief qui la poussait. H2 et la question du cloud sont sans objet
- [x] 6.4 Lignes de la fiche récupérées (`bible/fiche-judith.md`, chunk voix
      L23-27, plus L124 / L135 / L181) et intégrées à la slide de l'étage 2
- [x] 6.5 Décision cloud : **sans objet**
- [x] 6.6 Dernier mur figé — accusation → renversement → aveu. La prédiction
      « H3 = refonte » était fausse : la structure a tenu, le mur a gagné

## 7. Suites, hors périmètre

- [ ] 7.1 Suivre le fix racine côté stack. Sans conséquence pour le deck : le
      renversement tient sur « c'était mon brief », et Lish a été ré-ancré au
      retrait
- [ ] 7.2 Jouer le dernier mur à voix haute — l'étage 2 doit être crédible sans
      ironie, sinon l'étage 3 ne renverse rien

## 8. Refonte fusion (delta) — supersède les groupes 1-6

- [x] 8.1 `CLAUDE.md`, section « Trame » : fusionner sections 4 et 5 en « La
      fabrique » ; retirer les cinq stations autonomes, le renversement « il
      n'existe pas de seuil », le pont, et le vote à main levée ; noter que
      chaque figure ouvre son mur (dite une fois) ; Racter au verdict de la
      chute
- [x] 8.2 `CLAUDE.md` : recadrer le mode personnage en **culmination collée** au
      dernier mur (Judith objet de l'accusation → sujet interrogé) ; chute
      **sèche**, retirer « dernier vote à main levée » ; conserver l'accroche
      mains-levées unique d'ouverture
- [x] 8.3 Fusionner `docs/scripts/03-section-4-jeu-du-seuil.md` et
      `04-section-5-descente-fabrique.md` en un script de descente unique :
      chaque mur ouvre sur sa figure, retrait du renversement « pas de seuil »,
      du pont et du vote, Racter déplacé vers la chute
- [x] 8.4 `docs/scripts/05-section-6-mode-personnage.md` : recadrer en
      culmination collée, retirer toute référence au vote ; entretien à deux
      questions et aveu conservés
- [x] 8.5 `docs/scripts/06-sections-7-8-recolte-chute.md` : chute sèche, retirer
      le vote final ; garder Racter au verdict
- [x] 8.6 Fusionner `slides/pages/04-jeu-du-seuil.md` et
      `05-descente-technique.md` : chaque mur ouvre sur sa figure, retrait des
      slides de vote et de la slide « pas de seuil »
- [x] 8.7 `slides/pages/06-mode-personnage.md` : culmination collée, pas de
      vote ; `08-cloture.md` : chute sèche, pas de vote final
- [x] 8.8 **Trancher la renumérotation des fichiers** : garder les numéros
      04/05 (fusion sous un numéro) ou renuméroter le deck en 7 sections. Reporter
      la décision dans `CLAUDE.md` et `docs/scripts/00-README.md`
- [x] 8.9 **Recombler le trou de chrono (~4'40)** : approfondir Malley (veine
      mesure) et le dernier mur (verbatims datés, fiche), pas étirer les
      transitions. Mettre à jour la table de `00-README.md`
- [x] 8.10 `openspec validate refonte-trame-figures-murs --strict`, build vert,
      export PNG relu, recherche textuelle : plus aucune occurrence de vote à
      main levée par cas ni de « il n'existe pas de seuil »
