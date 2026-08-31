# L'IA devant soi — Section 5 : la descente dans la fabrique (script)

Enchaînement direct sur « Descendons. »
Durée cible : 16'30. Le compte à rebours tourne pendant toute la section.
Registre : la langue de l'atelier. Le terme technique apparaît une fois, entre parenthèses, puis disparaît.
Battement de chaque strate : ce qu'on a tenté, le mur, ce que le mur a forcé à construire.
**Exception, et elle est voulue : le dernier mur ne résout pas.**
Chaque figure de la section 4 revient nommée dans sa strate. Rien n'a été annoncé : la reprise doit surprendre.

---

## L'entrée — le cadre (15")

Avant de descendre, une règle. Rien de ce que vous allez voir ne sort de cette pièce. Pas un appel, pas une clé d'API, pas un octet.

Ce n'est pas une posture. C'est ce qui a construit tout ce qu'il y a en bas.

[Descendre. Ne pas argumenter — la règle se pose, elle ne se défend pas. Elle sera reprise à la remontée, et nulle part entre les deux : le compte à rebours est une machine locale qui travaille sous leurs yeux, il fait le rappel tout seul.]

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

[Temps.]

Tout à l'heure je vous ai dit que dans ma fabrique, la machine était mon Maquet.

Un Maquet, ça ne s'improvise pas. Le vrai passait ses journées dans les archives avant d'écrire une ligne.

Le mien a besoin qu'on les lui apporte.

---

## Strate 2 — L'intention (3')

Deuxième mur, quelques soirs plus tard. La machine sait tout, maintenant. Elle n'oublie plus qui est mort. Elle ne rebaptise plus mes rues.

[Slide : EXTRAIT RATÉ n°2, authentique : une scène qui dérive, qui meuble, qui conclut au milieu, qui perd son objectif.]

Mais regardez ce qu'elle en fait. [Commenter l'extrait réel : la dérive, le remplissage, la scène qui n'accomplit rien.] Elle sait tout, et elle ne sait pas où elle va. Elle remplit la scène au lieu de la servir.

La mémoire ne remplace pas le dessein.

Ce que ce mur force à construire : arrêter de demander un chapitre. Plus jamais. On décompose. D'abord un plan de scènes : ce que chaque scène doit accomplir, ce qu'elle révèle, ce qu'elle retient. Puis scène par scène : écrire, relire, vérifier contre les fiches, recommencer si ça casse.

Ce n'est plus une demande. C'est un atelier, avec des postes de travail qui s'enchaînent (un graphe d'orchestration, LangGraph pour les intimes). Et dans cet atelier, deux rôles seulement. L'auteur, qui écrit. Et l'acteur. L'acteur, je vous le présente plus tard.

[PLACEHOLDER TOOLS : si la stack utilise des outils délégués le jour J, une phrase ici, pas plus : « L'atelier s'est aussi équipé de quelques instruments qu'il manie seul », plus l'exemple concret. Sinon, supprimer ce bloc. Trancher au gel du script.]

[Temps.]

Queneau n'a écrit aucun de ses cent mille milliards de poèmes. Il a écrit la machine qui les fabrique, et il a laissé quelqu'un d'autre tourner les bandelettes.

Ce plan de scènes, ces postes de travail : ce sont mes bandelettes.

L'exécutant, ce soir, c'est elle.

[Geste vers l'écran, vers le compte à rebours.]

Et ce plan de scènes que je vous ai montré tout à l'heure, avant de lancer la machine ? C'est cet atelier qui l'exécute. Là. Maintenant. Poste par poste.

---

## Strate 3 — La qualité, et la mesure (4')

Troisième mur. Le plus cruel.

Elle sait tout. Elle va où on lui dit. Et c'est mauvais.

[Slide : EXTRAIT RATÉ n°3, authentique : un passage factuellement juste, structurellement propre, et littérairement plat.]

Pas faux, cette fois. Mauvais. [Commenter l'extrait réel.] Plat. Générique. Une prose de nulle part, correcte comme un rapport. Tout est vrai, rien n'est vivant.

Et c'est la leçon la plus importante de toute la descente : le style n'est pas dans le modèle. Le modèle contient tous les styles, c'est-à-dire aucun.

Alors on fait ce qu'aucun d'entre nous n'avait fait depuis le lycée : on définit ce qu'est bien écrire. Pas en général. Pour ce roman-là. Une fiche de style : la voix du narrateur, ses phrases courtes, ses obsessions, ce qu'elle s'interdit. Une voix contractuelle, écrite noir sur blanc.

Et pour la faire respecter, un correcteur impitoyable (un lint de style, pour les intimes) : une grille de règles binaires. Ça passe, ou ça casse.

[Slide : la grille de vérification, et un extrait réel qui casse le lint, avec la règle qui casse surlignée.]

Chaque sortie y passe. On calibre comme on règle un instrument : plusieurs runs, des réglages différents, un run de contrôle pour savoir si la voix vient de la fiche ou du hasard.

[Temps.]

Et puis un soir, la grille est verte. Tout au vert. Et le texte est mort.

[Slide : la grille verte, et l'extrait qu'elle a laissé passer.]

Le correcteur validait des règles que je lui avais apprises à valider. Il ne mesurait pas le geste, il mesurait sa propre présence. Une grille verte par construction.

Et pendant qu'on y est, l'autre humiliation de la même semaine.

[Slide : les deux chiffres, seuls. PLACEHOLDER — les valeurs exactes depuis le journal des murs : durée de mur contre durée de calcul.]

La machine dormait. Le chronomètre comptait son sommeil comme du travail. J'ai passé des jours à optimiser une lenteur qui n'existait pas.

[Temps.]

1943. Deux poètes fabriquent Ern Malley un après-midi, avec un dictionnaire et un rapport sur le drainage des marécages. Ces poèmes passent tous les critères de la revue d'avant-garde. Tous. Ils sont publiés en numéro spécial.

Personne n'avait mal compté. Ils avaient mal lu.

[Slide : l'aphorisme, seul.]

Compter n'est pas lire.

[Temps.]

Alors on rouvre la grille, on la falsifie contre des textes qu'on sait mauvais, on la recalibre. Et cette fois on lit debout. Chaque sortie, à voix haute, sans la grille.

Et un soir, ça tient. Une voix qui n'existe nulle part ailleurs. Qui n'est ni la mienne, ni celle du modèle. Une voix fabriquée, trait par trait, jusqu'à devenir reconnaissable entre mille.

[Temps.]

On a déjà rencontré quelqu'un, ce soir, qui a fabriqué une voix jusqu'à ce qu'elle devienne reconnaissable entre mille.

[Ne rien ajouter. La salle fait le lien.]

Alors je sais ce que la moitié d'entre vous pense depuis deux minutes. Tout ce travail, la fiche, le correcteur, les calibrations, pour arracher une voix à un petit modèle. Alors qu'il suffirait de prendre un modèle plus gros. Plus de milliards de paramètres, plus de finesse native, moins de bricolage.

[Temps.]

---

## Strate 4 — Le mur qu'on ne peut pas acheter (5'30)

> Fusion des anciennes strates *puissance* et *seuil*. Les deux répondaient à la
> même objection à deux étages. **Le contenu est figé depuis le run
> `xp-resolution` du 31 août** (12/12 — CLAUDE.md « À trancher » point 7, tranché).
> Structure : accusation → preuve apparente → renversement. C'est la seule
> strate du talk qui piège la salle, et sa cible est le speaker.

### Étage 1 — il ne rentre pas (2')

On a pris un modèle plus gros.

[Slide : PIÈCE À CONVICTION — les chiffres réels du crash, mesurés : mots par seconde, mémoire saturée, durée projetée de génération d'un chapitre. PLACEHOLDER CHIFFRES.]

La machine est tombée à genoux. [Commenter les chiffres réels : le débit qui s'effondre, le chapitre qui passerait de X minutes à X heures.] Ce compte à rebours, là-bas ? Avec le gros modèle, il afficherait encore des heures au moment où on se dirait au revoir.

Et la sortie de secours, vous la connaissez tous. Elle tient en une ligne : une clé d'API, et tout devient facile.

Je vous ai dit en entrant ce qu'il en était.

[Ne pas développer. La contrainte a été posée à l'entrée de la descente, elle se paie à la remontée. Ici, un rappel d'une phrase, pas un argument.]

[Temps.]

Alors la question honnête, celle que vous êtes en train de vous poser : est-ce que j'aurais eu le roman avec le gros modèle ?

### Étage 2 — l'accusation (1'30)

Non. Et pour vous le prouver, je vais d'abord vous montrer ce que j'ai cru pendant trois semaines.

[Slide : PIÈCE À CONVICTION — les deux verbatims datés, côte à côte.]

Neuf août. Premier soir du projet. Frappe directe, aucune mémoire, aucun outillage. Ma narratrice relit une ligne de son carnet qui la contredit, et elle écrit ceci :

« Je n'ai pas rêvé. »

Trente et un août. Cinq architectures plus tard. Une bibliothèque, un atelier, une fiche de style, un correcteur. Et elle écrit ceci :

« Verdict : coquille. Ma mémoire m'a joué un tour. Je n'ai pas rêvé. »

[Temps. Laisser la salle lire les deux.]

La même phrase. Trois semaines, cinq architectures, et le même mot. Elle revient dans quatre entrées de mon journal de bord, sur toutes les sessions.

Mon roman tient sur un doute. Une femme relit son propre carnet et ne se reconnaît pas dedans. Tout le livre est là : elle ne doit pas comprendre.

Et la machine, à chaque fois, lui donne la réponse.

[Temps.]

J'ai même fini par comprendre pourquoi. Regardez.

[Slide : la fiche à gauche, la sortie à droite. PLACEHOLDER — les lignes exactes de la fiche, à intégrer verbatim.]

Cette femme, dans ma bible, est correctrice. Son métier, c'est de rendre des verdicts. C'est écrit noir sur blanc dans sa fiche, et cette fiche, la machine la lit avant chaque paragraphe.

[Temps.]

Le défaut de la machine était une citation du personnage.

J'étais très content de moi. J'avais mon coupable.

[Ne pas ironiser sur « content de moi ». Le dire à plat. Le piège ne fonctionne que si la salle croit qu'on est arrivé à la conclusion.]

### Étage 3 — le renversement (2')

Sauf que j'ai fait une dernière expérience. Avant-hier.

Je lui ai retiré trois choses. Pas le personnage — le personnage reste, correctrice, avec son métier. Trois phrases que je lui servais sans y penser.

Dans le brief : « elle amorce un verdict ».

Dans le squelette de sa voix, servi avant chaque paragraphe, une étape numérotée : « le verdict de correction ».

Et derrière, posé par mon propre code : le mot « Constat ».

Trois phrases. Je les ai enlevées. J'ai relancé douze fois.

[Slide : 12 / 12.]

Douze fois sur douze, elle tient le doute.

[Temps. Long.]

Elle tenait depuis le début. C'est moi qui la poussais à franchir.

[Temps.]

Et voilà le meilleur. Avec l'identité seule, sans aucune consigne, elle écrit ceci :

« Mon réflexe de correctrice se met en branle, je souligne la phrase d'un trait rouge imaginaire, prête à la corriger. Mais pour l'instant, je reste là. »

Le réflexe monte. Il ne conclut pas. Elle reste au seuil.

C'est exactement ce que mon roman demande. La machine a écrit le geste que je n'arrivais pas à lui arracher — à la seconde où j'ai cessé de lui demander le contraire.

[Temps.]

Et ce n'est pas la première fois. Au premier soir du projet, elle glissait des mots anglais dans un texte français. J'ai accusé le modèle pendant des jours. C'était un réglage de fenêtre de contexte. Le mien.

Deux fois j'ai accusé la machine. Deux fois c'était ma main.

[Temps.]

Ce correctif, au fait : trois phrases en moins. Gordon Lish n'a rien ajouté aux nouvelles de Carver. Il a coupé.

Ma voix, ce sont mes retraits.

[Slide : l'aphorisme, seul.]

Le doute tenait depuis le début. C'est moi qui le franchissais.

[NE PAS CONCLURE. Ne pas remonter d'un ton, ne pas marquer de silence de conclusion. Enchaîner directement sur la remontée : cette strate est la seule qui ne se referme pas.]

---

## La remontée (45")

Remontons. Regardez le chemin.

Quatre murs. Et à chaque étage, la même porte de sortie : sous-traiter, prendre la clé, ne rien comprendre.

Elle était ouverte à chaque étage. Je l'ai fermée moi-même, avant de descendre.

Pas par vertu. Parce que la contrainte était le voyage : chaque mur m'a forcé à comprendre une chose que j'aurais payée pour ignorer.

Et il y a une chose que je n'aurais jamais découverte autrement. Le fautif, c'était moi. Il a fallu que tout m'appartienne — le modèle, le brief, la fiche, le code — pour que je puisse le prouver. Derrière une API, on ne sait jamais que le coupable était son propre prompt.

[Slide : la règle, seule.]

La fabrique reste à notre main.

[Temps.]

Alors rouvrez la boîte noire. Celle du début, celle qui faisait peur à l'Académie. Une bibliothèque que j'ai écrite, fiche par fiche. Un plan que j'ai voulu, scène par scène. Une voix que j'ai réglée, trait par trait. Un correcteur qui applique mes règles, et seulement les miennes.

Où est l'intelligence, dans cette fabrique ? Elle est partout où je suis passé.

[Temps.]

Une fabrique qu'on tient à ce point, qui en est l'auteur ?

Ne répondez pas tout de suite. Il me reste quelqu'un à vous présenter.

[Transition directe vers la section 6.]

---

## Notes de préparation

- **Placeholders à remplir depuis le journal des murs** : extrait raté n°1 (contradiction de lore), n°2 (scène qui dérive), n°3 (plat correct), extrait qui casse le lint (avec la règle en cause), la grille verte et l'extrait qu'elle laisse passer, les deux chiffres du chronomètre qui dort, les chiffres du crash (étage 1), et **les lignes exactes de la fiche du personnage** pour la slide de l'étage 2 — celles-ci sont livrées : `bible/fiche-judith.md`, chunk voix L23-27, plus L124 / L135 / L181. Chaque extrait doit être authentique et daté : la salle sent la reconstruction.
- **Les deux verbatims datés de l'étage 2 sont acquis**, et ils ne dépendent d'aucune hypothèse : la phrase « Je n'ai pas rêvé » récidive dans quatre entrées du journal, sur toutes les sessions (ch2 → S4 → S6 → ch7). C'est un attracteur stable, pas une coïncidence. La slide tient quelle que soit l'issue du run.
- **L'étage 3 est le climax du talk, et c'est un aveu.** Il repose sur le run `xp-resolution` du 31 août : C5 complet (consigne de verdict retirée du beat, squelette de voix non servi, chute « Constat » non posée, identité du personnage conservée), modèle nu, `BEATS_N=1`, quatre conditions, **12 tirages sur 12 tiennent le doute**. Chiffres et verbatims dans `docs/xp-resolution-pour-le-deck.md` côté stack.
- **Le piège de l'étage 2 ne fonctionne que joué à plat.** « J'étais très content de moi, j'avais mon coupable » se dit sans ironie et sans clin d'œil : la salle doit croire qu'on est arrivé à la conclusion, sinon le renversement de l'étage 3 n'a rien à renverser. C'est la seule mise en scène du talk qui demande au speaker de jouer sa propre erreur au présent.
- **Les deux accusations** — les fuites d'anglais (c'était `NUM_CTX`), la résolution (c'était le brief) — se disent l'une après l'autre, sans commentaire. La salle fait la somme.
- **Ne jamais dire que le best-of-N était inutile** tant que le fix racine n'est pas vérifié sur le vrai pipeline côté stack. L'étage 3 n'en a pas besoin : son renversement tient sur « c'était mon brief », pas sur ce qui a remplacé le correctif.
- **Le faux positif du détecteur** (un tirage sur douze, rattrapé par la lecture debout) est la deuxième occurrence de *compter n'est pas lire*, posé en strate 3. Ne pas le raconter sur scène — la répétition userait l'aphorisme. Le garder en réserve pour les questions.
- **La contrainte locale se dit deux fois, pas trois** : à l'entrée de la descente et à la remontée. L'étage 1 y fait un rappel d'**une phrase** (« je vous ai dit en entrant ce qu'il en était ») et n'argumente pas. Si la répétition revient à la rédaction, c'est l'étage 1 qui coupe.
- **Les reprises de figures**, une par strate, jamais annoncées :
  Maquet en strate 1 (il fournit la matière, il faut la lui apporter) ;
  Queneau en strate 2 (il a écrit la machine, pas les poèmes) ;
  Malley en strate 3 (ses poèmes passaient tous les critères — *compter n'est pas lire*) ;
  Lish à l'étage 3 du dernier mur — **ancré au retrait, plus au best-of-N** : le correctif, ce sont trois phrases en moins, et Lish n'a rien ajouté à Carver, il a coupé.
  Racter ne revient pas ici : il revient au verdict de la section 8.
- **L'exception au pattern ternaire** est portée par le dernier mur seul, et elle est structurelle : un talk dont la thèse est que résoudre est le défaut de la machine ne peut pas offrir quatre résolutions de forme sur quatre. L'étage 3 constate qu'il a fallu *empêcher*, il ne célèbre pas. Ne pas remonter d'un ton à la fin de cette strate, ne pas marquer de silence de conclusion : enchaîner sur la remontée.
- **Le pont Gary de la strate 3** : « on a déjà rencontré quelqu'un, ce soir » est la deuxième et dernière allusion entre le cold open et la section 6 (avec « incarnait » au renversement de la 4). Ne jamais prononcer les noms ici.
- **La charnière strate 3 / dernier mur** : l'objection d'économie (« tout ce travail alors qu'un gros modèle aurait suffi ») doit être déroulée avec son raisonnement complet avant le [Temps], pour que « On a pris un modèle plus gros » tombe comme une réponse. Si une strate déborde, couper ailleurs, jamais cette charnière.
- **Chrono interne** : 15" + 3' + 3' + 4' + 5'30 + 45" = 16'30. Le dernier mur se répartit en 2' + 1'30 + 2'. Si une strate doit déborder, c'est lui, et il mange la remontée — jamais l'inverse : la remontée porte le paiement du cadre local.
- **Cohérence d'accessoires** : trois objets scéniques dans le talk, le livre de Queneau (section 4), le compte à rebours (permanent), la voix clonée (section 7). La section 5 n'introduit aucun objet nouveau : ses slides d'extraits ratés sont ses pièces à conviction.
