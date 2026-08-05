# L'IA devant soi — Section 5 : la descente dans la fabrique (script)

Enchaînement direct sur « Descendons. »
Durée cible : 14 minutes. Le compte à rebours tourne pendant toute la section.
Registre : la langue de l'atelier. Le terme technique apparaît une fois, entre parenthèses, puis disparaît.
Battement de chaque strate : ce qu'on a tenté, le mur, ce que le mur a forcé à construire.

---

## Strate 1 — Le lore (3')

Premier soir. Premier essai. On fait ce que tout le monde fait : on demande.

« Écris-moi le chapitre suivant. »

Et la machine obéit. Elle écrit vite. Elle écrit proprement.

[Slide : EXTRAIT RATÉ n°1, authentique et daté, issu du journal des murs. Idéal : une contradiction de lore flagrante, un personnage mort qui revient, un lieu qui change de nom.]

Elle écrit proprement n'importe quoi. [Commenter l'extrait réel : ce qu'elle a inventé, ce qu'elle a contredit, ce qu'elle a oublié.]

Voilà le premier mur. La machine ne connaît pas mon monde. Elle connaît tous les mondes, ce qui est pire : elle remplit mes silences avec la moyenne de toutes les histoires déjà écrites.

Le réflexe, tout le monde l'a : donnons-lui tout. On colle les chapitres, les fiches, la bible entière dans la demande. Et là, deuxième leçon du même soir : la machine suffoque. Le plan de travail déborde. Tout ce qu'on lui donne en vrac, elle le tient mal, et la machine locale n'a pas les épaules pour tenir davantage.

Ce que le mur force à construire : une mémoire. Pas un tas. Une bibliothèque, avec un bibliothécaire.

Chaque personnage, chaque lieu, chaque fait du monde : une fiche. Découpée, rangée, indexée (une base vectorielle et du RAG, pour les intimes). Et quand la machine écrit une scène, le bibliothécaire ne lui apporte pas la bibliothèque. Il lui apporte les trois fiches qui comptent pour cette scène-là.

Un principe est né ce soir-là, et il ne bougera plus : la référence, c'est le papier. Mes fiches sont des fichiers texte que je peux lire, corriger, déchirer. La bibliothèque indexée n'est jamais qu'une copie. Le jour où elles se contredisent, c'est le papier qui a raison.

---

## Strate 2 — L'intention (3')

Deuxième mur, quelques soirs plus tard. La machine sait tout, maintenant. Elle n'oublie plus qui est mort. Elle ne rebaptise plus mes rues.

[Slide : EXTRAIT RATÉ n°2, authentique : une scène qui dérive, qui meuble, qui conclut au milieu, qui perd son objectif.]

Mais regardez ce qu'elle en fait. [Commenter l'extrait réel : la dérive, le remplissage, la scène qui n'accomplit rien.] Elle sait tout, et elle ne sait pas où elle va. Elle remplit la scène au lieu de la servir.

La mémoire ne remplace pas le dessein.

Ce que ce mur force à construire : arrêter de demander un chapitre. Plus jamais. On décompose. D'abord un plan de scènes : ce que chaque scène doit accomplir, ce qu'elle révèle, ce qu'elle retient. Puis scène par scène : écrire, relire, vérifier contre les fiches, recommencer si ça casse.

Ce n'est plus une demande. C'est un atelier, avec des postes de travail qui s'enchaînent (un graphe d'orchestration, LangGraph pour les intimes). Et dans cet atelier, deux rôles seulement. L'auteur, qui écrit. Et l'acteur. L'acteur, je vous le présente plus tard.

[PLACEHOLDER TOOLS : si la stack utilise des outils délégués le jour J, une phrase ici, pas plus : « L'atelier s'est aussi équipé de quelques instruments qu'il manie seul », plus l'exemple concret. Sinon, supprimer ce bloc. Trancher au gel du script.]

[Geste vers l'écran, vers le compte à rebours.]

Et ce plan de scènes que je vous ai montré tout à l'heure, avant de lancer la machine ? C'est cet atelier qui l'exécute. Là. Maintenant. Poste par poste.

---

## Strate 3 — La qualité (3'30")

Troisième mur. Le plus cruel.

Elle sait tout. Elle va où on lui dit. Et c'est mauvais.

[Slide : EXTRAIT RATÉ n°3, authentique : un passage factuellement juste, structurellement propre, et littérairement plat.]

Pas faux, cette fois. Mauvais. [Commenter l'extrait réel.] Plat. Générique. Une prose de nulle part, correcte comme un rapport. Tout est vrai, rien n'est vivant.

Et c'est la leçon la plus importante de toute la descente : le style n'est pas dans le modèle. Le modèle contient tous les styles, c'est-à-dire aucun.

Alors on fait ce qu'aucun d'entre nous n'avait fait depuis le lycée : on définit ce qu'est bien écrire. Pas en général. Pour ce roman-là. Une fiche de style : la voix du narrateur, ses phrases courtes, ses obsessions, ce qu'elle s'interdit. Une voix contractuelle, écrite noir sur blanc.

Et pour la faire respecter, un correcteur impitoyable (un lint de style, pour les intimes) : une grille de règles binaires. Ça passe, ou ça casse.

[Slide : la grille de vérification, et un extrait réel qui casse le lint, avec la règle qui casse surlignée.]

Chaque sortie y passe. On calibre comme on règle un instrument : plusieurs runs, des réglages différents, un run de contrôle pour savoir si la voix vient de la fiche ou du hasard.

Et un soir, ça tient. Une voix qui n'existe nulle part ailleurs. Qui n'est ni la mienne, ni celle du modèle. Une voix fabriquée, trait par trait, jusqu'à devenir reconnaissable entre mille.

[Temps.]

On a déjà rencontré quelqu'un, ce soir, qui a fabriqué une voix jusqu'à ce qu'elle devienne reconnaissable entre mille.

[Ne rien ajouter. La salle fait le lien.]

Alors je sais ce que la moitié d'entre vous pense depuis deux minutes. Tout ce travail, la fiche, le correcteur, les calibrations, pour arracher une voix à un petit modèle. Alors qu'il suffirait de prendre un modèle plus gros. Plus de milliards de paramètres, plus de finesse native, moins de bricolage.

[Temps.]

---

## Strate 4 — La puissance (2'30")

On a pris un modèle plus gros.

[Slide : les chiffres réels du crash, mesurés : mots par seconde, mémoire saturée, durée projetée de génération d'un chapitre. PLACEHOLDER CHIFFRES à remplir depuis les runs de test.]

La machine est tombée à genoux. [Commenter les chiffres réels : le débit qui s'effondre, le chapitre qui passerait de X minutes à X heures.] Ce compte à rebours, là-bas ? Avec le gros modèle, il afficherait encore des heures au moment où on se dirait au revoir.

Et la sortie de secours, vous la connaissez tous. Elle tient en une ligne : une clé d'API, et tout devient facile. Le muscle des autres, dans le nuage des autres.

Sauf que ce soir, rien ne sort de la pièce. Et ce n'est pas une posture. C'est le mur qui rend honnête.

Parce que quand on ne peut pas acheter la qualité en muscle, il ne reste qu'une façon de l'obtenir : la construire en architecture. La bibliothèque, l'atelier, la fiche de style, le correcteur : tout ce que je viens de vous montrer existe parce que la solution de facilité était bouchée. Chaque point de qualité de ce roman a été gagné en comprenant quelque chose. Pas en payant quelqu'un.

[Slide : la règle, seule.]

La fabrique reste à notre main.

---

## La remontée (2')

Remontons. Regardez le chemin.

Quatre murs. Le lore, l'intention, la qualité, la puissance. Et à chaque étage, la même sortie de secours nous tendait les bras : sous-traiter, prendre la clé magique, ne rien comprendre. On ne l'a jamais prise. Pas par vertu. Parce que la contrainte était le voyage : chaque mur nous a forcés à comprendre une chose qu'on aurait payée pour ignorer.

Alors maintenant, rouvrez la boîte noire. Celle du début, celle qui faisait peur à l'Académie. Qu'est-ce qu'il y a dedans ?

Une bibliothèque que j'ai écrite, fiche par fiche. Un plan que j'ai voulu, scène par scène. Une voix que j'ai réglée, trait par trait. Un correcteur qui applique mes règles, et seulement les miennes.

Où est l'intelligence, dans cette fabrique ? Elle est partout où je suis passé.

[Temps.]

Alors, la question du début : une fabrique qu'on tient à ce point, qui en est l'auteur ?

Ne répondez pas tout de suite. Il me reste quelqu'un à vous présenter.

[Transition directe vers la section 6.]

---

## Notes de préparation

- **Placeholders à remplir depuis le journal des murs** : extrait raté n°1 (contradiction de lore), n°2 (scène qui dérive), n°3 (plat correct), extrait qui casse le lint (avec la règle en cause), chiffres réels du crash de la strate 4 (débit, mémoire, durée projetée). Chaque extrait doit être authentique et daté : la salle sent la reconstruction. Les commentaires d'extraits entre crochets s'écriront quand les extraits existeront.
- **La strate 3 porte les skills** : fiche de style, grille de lint, runs de calibration avec contrôle. Termes techniques entre parenthèses une seule fois, conformément à la règle de registre.
- **Le placeholder tools (strate 2)** : une phrase maximum si présents le jour J, suppression sinon. Décision au gel du script.
- **Le pont Gary de la strate 3** : « on a déjà rencontré quelqu'un, ce soir » est la deuxième et dernière allusion entre le cold open et la section 6 (avec « incarnait » au renversement de la 4). Ne jamais prononcer les noms ici.
- **La charnière strate 3/4** : l'objection d'économie (« tout ce travail alors qu'un gros modèle aurait suffi ») doit être déroulée avec son raisonnement complet avant le [Temps], pour que « On a pris un modèle plus gros » tombe comme une réponse. Si une strate déborde, couper ailleurs, jamais cette charnière.
- **Chrono interne** : 3 + 3 + 3'30 + 2'30 + 2 = 14'. La strate 3 est la seule autorisée à déborder (jusqu'à 4') en mangeant la remontée (ramenée à 1'30) : c'est elle qui porte le plus de sens par minute.
- **Cohérence d'accessoires** : trois objets scéniques dans le talk, le livre de Queneau (section 4), le compte à rebours (permanent), la voix clonée (section 7). La section 5 n'introduit aucun objet nouveau : ses slides d'extraits ratés sont ses pièces à conviction.
