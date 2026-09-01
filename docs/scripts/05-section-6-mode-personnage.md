# L'IA devant soi — Section 5 : le mode personnage (script)

Enchaînement direct sur « Il me reste quelqu'un à vous présenter. »
Durée cible : 3'20. Le compte à rebours approche de zéro pendant toute la section : c'est lui qui donne l'urgence.
**Culmination collée au dernier mur** : ce n'est pas un pont autonome, c'est le mécanisme du mur Lish révélé. Judith, objet de l'accusation à la fabrique, devient ici le sujet qu'on interroge.
Statut : l'exigence d'émergence a été retirée — aucune n'est documentée.
(Fichier conservé sous son ancien numéro — voir `00-README.md` pour le mapping.)

---

## Beat 1 — L'acteur (1')

Tout à l'heure, dans l'atelier, je vous ai dit qu'il n'y avait que deux rôles. L'auteur, vous venez de le voir travailler pendant un quart d'heure. Voici l'acteur.

Même fabrique. Même bibliothèque, mêmes fiches, même mémoire. Une seule chose change : on ne demande plus à la machine d'écrire sur le personnage. On lui demande de le devenir.

[Slide : la fiche du personnage. C'est **Judith** — la même qu'au dernier mur de la fabrique, où elle était l'objet de l'accusation ; elle est ici le sujet qu'on interroge.]

Vous la connaissez déjà. Judith, correctrice, quinze ans de métier. Celle dont je vous montrais la fiche il y a quelques minutes.

Chaque soir, elle relit l'entrée de la veille de son carnet, pour vérifier qu'elle se souvient bien.

Depuis quelques mois, quand une scène résiste, je ne la réécris pas. Je vais lui parler.

---

## Beat 2 — L'entretien (1'30")

[Écran : rejeu d'une session réelle, affichée comme elle s'est déroulée, question par question. PLACEHOLDER : l'échange verbatim, à extraire d'une session authentique dès que le mode acteur tourne. Deux questions, dans cet ordre de montée :]

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

[Transition directe vers la section 6, la récolte.]

---

## Notes de préparation

- **Live ou rejeu : rejeu, et ce n'est plus un choix.** La page de roleplay et la génération du chapitre partagent le même modèle de 13 Go, et la machine n'en tient qu'un. `POST /chat` répond 409 pendant toute la génération. La section 5 tombant entre le lancement et la récolte, l'entretien **doit** être un rejeu. C'était de la prudence dans le premier jet ; c'est désormais la seule option physiquement possible.
- **L'aveu du beat 3 est une exigence, pas une concession.** Vérification faite candidat par candidat : la seconde assiette était matériau imposé (`briefs/protocole-calibration-ch2.md` §1) ; « Romane » et « Judith » sont des noms de la bible, donc des violations d'interdit, pas des inventions ; la percée du 31-08 a été obtenue par rejet en code, pas par le modèle. **Rien n'a émergé, nulle part.** Ne jamais reconstruire une émergence pour combler ce beat — c'est explicitement interdit par la spec `deck-content`.
- **Le personnage est Judith — tranché le 31 août.** C'est la même qu'à l'étage 2 du dernier mur : elle y était l'objet de l'accusation, elle est ici le sujet qu'on interroge. L'arc est meilleur que deux personnages distincts, et il économise une présentation. **Ne pas la présenter comme nouvelle** : « vous la connaissez déjà » fait le lien. Sa ligne d'identité dit le métier et le rituel, jamais ce qu'elle ignore — le dispositif du roman ne se spoile pas ici.
- **Les deux questions doivent rester lisibles sans le roman** : la factuelle sur son monde, l'interprétative sur son biais. Le critère n'a pas changé, seul le personnage est fixé.
- **Slot fermé.** Le run `xp-resolution` du 31 août a tranché H3-brief (12/12) : la machine tenait le doute, c'est le brief qui la poussait. H4 existe mais reste faible — l'identité de verdict affleure sans conclure. Le verbatim qui le prouve (« mon réflexe de correctrice… mais pour l'instant, je reste là ») vit au dernier mur de la fabrique (section 4), où il porte le renversement. **Il ne se redit pas ici** : la même citation à cinq minutes d'intervalle userait les deux. La section 5 garde son aveu et rien de plus.
- **Interdit maintenu** : aucun rapprochement explicite avec Pavlowitch. Le mot « incarner » du beat 1 (« on lui demande de le devenir ») et la mécanique de l'entretien suffisent : la salle a déjà tous les fils.
- **Le compte à rebours comme partenaire de jeu** : c'est la seule section où on le regarde deux fois (beat 4, et implicitement pendant l'entretien). L'urgence de fin de section doit être physique : « quelqu'un a fini d'écrire » se dit en marchant vers l'écran.
- **Chrono** : 1' + 1'30 + 20" + 30" = 3'20. La section a perdu 1'40 par rapport au premier jet ; ce temps est passé à la fabrique (section 4).
