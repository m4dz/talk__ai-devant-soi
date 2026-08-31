# L'IA devant soi — Section 6 : habiter les personnages (premier jet)

Enchaînement direct sur « Il me reste quelqu'un à vous présenter. »
Durée cible : 3'20. Le compte à rebours approche de zéro pendant toute la section : c'est lui qui donne l'urgence.
Statut : deuxième jet. L'exigence d'émergence a été retirée — aucune n'est documentée.

---

## Beat 1 — L'acteur (1')

Tout à l'heure, dans l'atelier, je vous ai dit qu'il n'y avait que deux rôles. L'auteur, vous venez de le voir travailler pendant un quart d'heure. Voici l'acteur.

Même fabrique. Même bibliothèque, mêmes fiches, même mémoire. Une seule chose change : on ne demande plus à la machine d'écrire sur le personnage. On lui demande de le devenir.

[Slide : la fiche du personnage. PLACEHOLDER : nom, une ligne d'identité, choisis parmi les personnages principaux du roman. Le personnage doit avoir un secret ou un angle mort connu de la salle de rien : c'est ce qui rendra l'entretien lisible sans contexte.]

Je vous présente [NOM]. [Une phrase de présentation : qui il/elle est dans le roman, sans spoiler.] Depuis quelques mois, quand une scène résiste, je ne la réécris pas. Je vais lui parler.

---

## Beat 2 — L'entretien (1'30")

[Écran : rejeu d'une session réelle, affichée comme elle s'est déroulée, question par question. PLACEHOLDER : l'échange verbatim, à extraire d'une session authentique dès que le mode acteur tourne. Trois questions suffisent, dans cet ordre de montée :]

[Question 1 — factuelle. Le personnage connaît son monde : un détail précis, vérifiable dans les fiches. La salle comprend que la mémoire tient.]

[Question 2 — interprétative. Le personnage a un point de vue : on l'interroge sur un autre personnage, sur un événement, et il répond avec son biais, sa mauvaise foi, son angle mort. La salle comprend que ce n'est plus une base de données qui répond.]

[Deux questions, pas trois. La troisième — « celle qui déraille » — a été retirée : aucune session n'en a produit une qui tienne, et une question spectaculaire reconstruite se sent à la seconde.]

[Commentaire en direct pendant le rejeu : sobre, deux phrases maximum, laisser l'échange se lire.]

---

## Beat 3 — L'aveu (20")

Vous attendez la suite. Je la connais, la suite : le moment où je vous raconte que la machine a inventé quelque chose, et que ce quelque chose est entré dans le roman.

Je ne l'ai pas.

Rien n'a émergé. J'ai cherché, j'ai relu trente et un runs. Le seul objet dont j'étais sûr qu'elle l'avait inventé — une seconde assiette sur une table — était dans le brief que je lui avais servi. Elle ne l'a pas trouvé. Elle l'a exécuté.

Tout ce qui est bon dans ce livre a été composé. Rien n'a poussé tout seul.

[Temps. Ne pas rattraper, ne pas adoucir, ne pas enchaîner trop vite. C'est la phrase la plus crédible du talk : un orateur qui dit « je n'ai pas de miracle à vous montrer » dans une keynote sur l'IA achète tout le reste.]

---

## Beat 4 — Le retournement (30")

[Slide : la question de Le Tellier, sourcée Télérama : « Être un auteur signifiera-t-il, dorénavant, être un bon prompteur ? »]

Un romancier, lauréat du Goncourt, pose la question dans ce même dossier de Télérama.

Après ce que vous venez de voir, je crois que la question est mal posée. Je ne rédige pas des instructions. Je dirige un atelier. J'interroge mes personnages. Je tranche ce qui entre au roman et ce qui n'y entrera jamais.

[Regard au compte à rebours, qui approche de zéro.]

Et pendant que je vous parlais, là-bas, quelqu'un a fini d'écrire.

[Transition directe vers la section 7, la récolte.]

---

## Notes de préparation

- **Live ou rejeu : rejeu, et ce n'est plus un choix.** La page de roleplay et la génération du chapitre partagent le même modèle de 13 Go, et la machine n'en tient qu'un. `POST /chat` répond 409 pendant toute la génération. La section 6 tombant entre le lancement et la récolte, l'entretien **doit** être un rejeu. C'était de la prudence dans le premier jet ; c'est désormais la seule option physiquement possible.
- **L'aveu du beat 3 est une exigence, pas une concession.** Vérification faite candidat par candidat : la seconde assiette était matériau imposé (`briefs/protocole-calibration-ch2.md` §1) ; « Romane » et « Judith » sont des noms de la bible, donc des violations d'interdit, pas des inventions ; la percée du 31-08 a été obtenue par rejet en code, pas par le modèle. **Rien n'a émergé, nulle part.** Ne jamais reconstruire une émergence pour combler ce beat — c'est explicitement interdit par la spec `deck-content`.
- **Le choix du personnage** : privilégier celui dont l'entretien est le plus lisible sans connaître le roman. Le critère : la question 2 doit être savoureuse même pour quelqu'un qui découvre le personnage à l'instant.
- **Slot en attente — le mécanisme.** Si le run de falsification désigne l'issue H4 (l'identité du personnage), un beat de 20 s s'ajoute avant le retournement : le dernier mur de la section 5 a posé le *fait* (elle est correctrice, elle tranche), la section 6 révèle le *mécanisme* (on lui a demandé de la devenir, elle l'est devenue) et le mur d'il y a cinq minutes change de nature rétroactivement. Ne rien écrire avant le run.
- **Interdit maintenu** : aucun rapprochement explicite avec Pavlowitch. Le mot « incarner » du beat 1 (« on lui demande de le devenir ») et la mécanique de l'entretien suffisent : la salle a déjà tous les fils.
- **Le compte à rebours comme partenaire de jeu** : c'est la seule section où on le regarde deux fois (beat 4, et implicitement pendant l'entretien). L'urgence de fin de section doit être physique : « quelqu'un a fini d'écrire » se dit en marchant vers l'écran.
- **Chrono** : 1' + 1'30 + 20" + 30" = 3'20. La section a perdu 1'40 par rapport au premier jet ; ce temps est passé à la section 5.
