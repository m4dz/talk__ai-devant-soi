# Design — refonte de trame : les figures nomment les murs

## Contexte

Source de la matière : `docs/digest-journal-des-murs.md` du dépôt de la stack
(31 runs bruts, les `grille-lint-*.md`, la saga de l'entrée 2 du chapitre 7),
plus vérification directe dans `briefs/`, `bible/` et `orchestrator/graph.py`.

## La thèse qu'on gagne

Le talk définit aujourd'hui l'auteur deux fois, mal :

- **par la négative** (section 4) : « il n'existe pas de seuil » ;
- **par le labeur** (remontée section 5) : « l'intelligence est partout où je
  suis passé » — réfutée par le talk lui-même à la station 1, puisque **Maquet
  aussi a labouré**, et a perdu en 1858.

Le journal en fournit une troisième, positive : **l'auteur est celui qui refuse
de résoudre.** Elle a trois termes, pas deux :

| Terme | Position devant le seuil |
|---|---|
| Judith | refuse de savoir qu'elle est partie — elle tient, et ça la tue |
| la machine | ne peut pas ne pas savoir — elle franchit toujours : « Je n'ai pas rêvé » |
| Gary | tient Ajar non résolu huit ans, puis résout lui-même, à sa date, après sa mort |

**Quatrième terme, apporté par la session stack (H4).** Judith est
**correctrice** : son identité servie est de rendre des verdicts, et le
squelette de sa voix la redemande à chaque beat. Le roman exige qu'elle ne
tranche pas. L'auteur a donc écrit un personnage constitutionnellement
incapable de faire ce que le roman réclame — puis a dû coder pour l'empêcher
d'être elle-même. Sous cette lecture, la machine n'échoue pas à faire Judith :
**elle réussit trop bien.** Le défaut du modèle est une ligne du CV du
personnage.

Le miroir se referme alors sur une seule figure — tenir le seuil contre soi :

| | tient le seuil contre |
|---|---|
| Judith | sa propre profession |
| Gary | son propre intérêt — il voulait la reconnaissance, Pavlowitch voulait sortir |
| Lish | l'auteur qui le suppliait de refermer |
| le speaker | **le personnage qu'il a écrit** |

Conséquence : le cold open et la chute cessent d'être un emballage narratif
autour d'un talk technique. Ils exécutent le même geste que la colonne
technique.

**Règle de mise en scène, non négociable** : le miroir se dit **une fois**, sur
les verbatims, et ne s'explique jamais. C'est le point où le talk peut basculer
dans la sur-figuration littéraire devant une salle de développeurs.

## La cartographie figure ↔ mur

| Figure | Geste historique | Mur (journal) | Ce que le code a dû faire |
|---|---|---|---|
| Maquet | fait les premiers jets, Dumas tient la voix | le RAG n'empêche pas l'invention — « La maison est vide, Judith » | bibliothèque indexée + plan de scènes |
| Lish | coupe la moitié, réécrit les fins — fabrique le style par soustraction | « le modèle résout toujours » | best-of-N + sélection par critères, pruning déterministe |
| Malley | dictionnaire + citations + rapport sur le drainage → une œuvre sans intention | lint **vert par construction** ; `write = 2681,7 s` de mur pour `374 s` de calcul | fiche de style + détecteurs — et l'aveu *compter n'est pas lire* |
| Queneau | écrit le générateur, pas les poèmes ; « l'exécutant, c'est vous » | l'accumulation n'apparaît jamais seule (0 partout → 6/6 dès le nœud dédié) | les nœuds qui composent, les beats bornés par le code |
| Racter | — | — | le verdict de la section 8 (voir plus bas) |

**Maquet, inversion de rôle.** La lecture forte n'est pas « on fournit des
premiers jets à la stack » mais l'inverse : **la machine fait les premiers jets,
le speaker fait le Dumas.** Il réécrit par-dessus, il tient la voix, son nom sera
sur la couverture. Et le tribunal a déjà tranché ce cas exact en 1858, contre la
fabrique : l'argent, jamais le nom.

**Racter n'est pas une strate, c'est la sentence.** Le script de la section 4
porte déjà le détail : « On soupçonnait l'auteur du programme d'avoir **trop
sélectionné, trop assemblé, trop édité** les sorties. On accusait un livre de
machine d'être trop humain. » C'est mot pour mot ce que le journal prouve de
cette stack. Racter revient donc au beat 2 de la section 8, en troisième item de
l'énumération existante (« elle a couronné Dumas et sa fabrique, elle a couronné
Ajar et son fantôme »), et le speaker plaide coupable. Coût ≈ 20 s, pris sur le
beat 3 de la chute.

## Pourquoi les strates *puissance* et *seuil* fusionnent

Les deux répondent à la même objection de salle :

```
« Prenez un modèle plus gros »
   étage 1 (matériel)   il ne rentre pas — 13 GB de nemo sur 19,3 GB
   étage 2 (alignement) et s'il rentrait, il résoudrait plus élégamment
```

Séparées par deux strates entières, la salle ne fait pas le lien. Fusionnées,
elles forment le seul mur du talk dont la réponse n'est pas « on a construit un
truc » mais « il n'y a rien à acheter ». C'est la place légitime du climax de la
descente.

## Pourquoi local-only n'est pas une strate

Sans cette contrainte, aucun des murs n'existe : avec une clé d'API on ne
construit ni bibliothèque, ni fiche de style, ni best-of-N — on prompte un gros
modèle et on n'apprend rien. C'est donc la **cause**, pas un mur parmi quatre.

Elle était déjà énoncée deux fois : en punchline de la strate 4 (version faible,
« ce soir rien ne sort de la pièce ») et à la remontée, en version forte et
génératrice (« la sortie de secours nous tendait les bras à chaque étage […] pas
par vertu, parce que la contrainte était le voyage »). Le doublon disparaît, la
version forte reste.

**Le rappel pendant les quinze minutes est assuré sans une phrase** : le compte à
rebours est une machine locale, visible, qui travaille sous les yeux de la salle
depuis la minute 13.

## Pourquoi le dernier mur casse le pattern ternaire

Le ternaire est une promesse de résolution : chaque strate résout. Quatre
résolutions de forme d'affilée, dans un talk dont la thèse est que résoudre est
le défaut de la machine — la forme fait ce que le fond reproche. La salle ne le
formule pas, mais c'est exactement ce qu'on va lui demander de trouver anormal.

Deux options ont été pesées :

| Option | Effet | Retenue |
|---|---|---|
| retirer le 3ᵉ battement du dernier mur | le mur reste ouvert ; coûte le seul trophée de la descente | non |
| **3ᵉ battement qui refuse de triompher** | le motif se rompt de l'intérieur, sans trou structurel | **oui** |

Formulation cible : *« Le doute tient. Pas parce que le modèle a tenu : parce que
le code lui a interdit de résoudre. Ce n'est pas une victoire. C'est le constat
qu'il a fallu l'empêcher. »*

## Ce que H4 rend à la section 6

Sous H4, la section 6 cesse d'être un pont ornemental sans cesser d'être
courte. L'ordre du talk n'a pas à bouger :

```
strate 4 (section 5)   pose le FAIT : elle est correctrice, elle tranche.
                       Le mur, sans son mécanisme.

section 6              révèle le MÉCANISME : on ne lui a pas demandé d'écrire
                       sur elle, on lui a demandé de la devenir. Elle l'est
                       devenue. Le mur d'il y a cinq minutes change de nature
                       rétroactivement.
```

Elle reste à 3'20 et porte le retournement du mur précédent — sans avoir
besoin d'aucune émergence.

## Pourquoi l'émergence est retirée — et non remplacée

Vérification faite, candidat par candidat :

| Candidat | Verdict |
|---|---|
| la seconde assiette | **matériau imposé** : `briefs/protocole-calibration-ch2.md` §1 beat 2 la nomme, et « Matériau imposé : le cahier, la cuisine, l'assiette » |
| « Romane » | personnage **de la bible** (`bible/surface/objets.md`) ; nom propre interdit avant le ch. 8 → violation d'interdit, pas invention |
| « Judith » | nom de la narratrice, `bible/fiche-judith.md` — même cas |
| « trois assiettes » (ch2-X2) | vraie déviation, mais c'est un raté, pas un apport |
| la percée du 31-08 | produite par **rejet en code** (best-of-3), pas par le modèle |

Rien n'a émergé, nulle part — ce qui est la thèse même du journal : *« la chaleur
ne se génère pas, elle se compose. »* L'aveu est donc plus solide que le trophée
qu'il remplace, et il arme Racter puis le verdict de la section 8.

Ce point est consigné en exigence (« Aucune émergence affirmée nulle part dans le
deck ») précisément parce que c'est une erreur re-commettable dans six semaines :
le digest écrit que le modèle « réinvente » l'objet depuis le premier run, ce qui
se lit à tort comme « invente ».

## Matière neuve à exploiter dans le dernier mur

Trouvée en relisant les runs bruts, pas dans le digest :

`journal-des-murs/20260809T233611-ch2-run-2.md`, 09-08, frappe directe sans RAG —
le modèle tient le seuil pendant **une phrase** :

> « Je ne sais pas pourquoi j'ai écrit cela hier soir. […] Je ne sais pas… **Et
> je ne veux pas savoir.** »

Quatre paragraphes plus loin, **même run** :

> « **Je n'ai pas rêvé.** Cette deuxième assiette n'était qu'une illusion de ma
> mémoire fatiguée. »

Et le mur central, 22 jours et cinq architectures plus tard :

> « Verdict : coquille. Ma mémoire m'a joué un tour. **Je n'ai pas rêvé.** »

Deux captures datées côte à côte : la même phrase, trois semaines, cinq
architectures. C'est ce qui rend le mur démontrable au lieu d'énoncé.

**À confirmer avant de le raconter** : `orchestrator/graph.py:1100`,
`_BEAT_RESOUT`, contient la branche `je n'ai pas rêvé` — le détecteur qui rejette
les variants semble taillé dans la phrase du premier soir. Vérifier la provenance
au `git blame` côté stack. Si ça tient, c'est une slide.

## Dépendance externe : le run de falsification

Le dernier mur affirme « aucun modèle ne tient le seuil ». Objection de salle à
un coup : *« vous avez testé avec un autre modèle ? »* — réponse actuelle : non.

Précédent qui impose la prudence, dans le journal même : les fuites d'anglais ont
été « attribuées à tort à nemo, tuées par `NUM_CTX=8192` ». Le projet a déjà
accusé le modèle une fois, et c'était un réglage.

Protocole rédigé, revu par la session stack, corrigé, et validé pour tirage.

**État après revue :**

- L'étage réglage se réduit à **C5 + C3**. Les ~10 tirages de la session
  d'août répondent déjà à C1/C2 (nemo a résolu à chaque fois ; seule la
  *sélection* best-of-N a tenu le doute, aucun paramètre). C4 est mort-né par
  arithmétique : 12B fp16 = 24 GB > 19,3.
- **C5 est incomplet dans sa version initiale.** Le verdict est réclamé à trois
  endroits : le texte du beat, le squelette de la voix servie, et la chute posée
  par le code. Le C5 utile neutralise les trois. Câblage côté stack.
- **H2 ne se tranche pas au scorer** — `_BEAT_RESOUT` est lexical et calibré sur
  nemo, donc biaisé en sa faveur. Pré-filtre seulement ; le verdict est la
  lecture debout.
- Le **modèle base** est écarté : il ne suit pas le brief, donc il tombe sous la
  garde de conformité. Il n'est pas le test décisif de H1.

**Quatre issues, pas trois.**

```
H1  défaut d'alignement commun     → le mur est une thèse générale. ~5'30.
H2  défaut de capacité du modèle   → le mur redescend à ~3'30.
H3  artefact de brief              → le mur n'existe pas. Refonte.
H4  identité du personnage         → « j'ai écrit une correctrice, la machine
                                      l'a correctement incarnée, et j'ai dû
                                      coder contre ma propre créature. »
```

**H4 n'est pas un repli.** Elle est au moins équivalente à H1 pour la trame, et
probablement supérieure : H1 est vraie mais générique, n'appartient pas au
projet, et un auditeur peut la chahuter en citant un modèle non testé. H4 est
spécifique, inchahutable (c'est notre donnée), referme le miroir sur « tenir le
seuil contre soi », et rend une fonction à la section 6. Consigné en exigence
pour que le run ne soit pas lu comme « H1 ou dégradé ».

**Discrimination H1 / H4** : un sujet **neutre** soumis à la même tâche de
doute ouvert. Résout sans indice → H1 ; tient → c'était le personnage. Un
**troisième sujet à identité forte mais non résolutive** a été proposé au
stack : il sépare « identité de verdict » de « toute identité forte », seul cas
que le design à deux sujets ne distingue pas. Contrôle associé : tâche appariée
entre sujets, seule l'identité varie.

**Ordre de tirage** : C5-complet sur les deux (ou trois) sujets d'abord. Le zoo
de modèles H2 n'a de sens que si H1 survit à ça.

**Question cloud** : reportée après C5, et caduque sous H4. Inclination du
deck si elle se pose quand même — **borner au local et annoncer la borne sur
scène**. La contrainte locale est la thèse ; « je n'ai testé que ce qui tient
dans ma machine, et c'est le sujet du talk » vaut mieux que le résultat
sacrifié.

**Retour attendu de la stack** : le texte brut des variants (gagnant et
perdants, les slides sont faites de verbatims), le verdict de lecture debout là
où le scorer n'est que pré-filtre, l'hypothèse survivante, et **les lignes
exactes de la fiche qui portent l'identité de verdict de Judith** — moitié
gauche de la slide du dernier mur.

**Fait confirmé par la stack** : la branche `je n'ai pas rêvé` de
`_BEAT_RESOUT` ne vient pas d'une phrase isolée. L'énoncé récidive dans
**4 entrées du journal, sur toutes les sessions** (ch2 → S4 → S6 → ch7). Le
détecteur est bâti sur un attracteur stable. **Cette pièce à conviction ne
dépend d'aucune hypothèse** : elle tient sous H1 comme sous H4.

## La pièce à conviction du dernier mur — moitié gauche

Livrée par la session stack. Servie au modèle **à chaque beat**
(`bible/fiche-judith.md`, chunk `fiche-judith::voix`, L23-27) :

> « Squelette d'une entrée du carnet : … 3. Le constat d'écart : ce que dit le
> texte, ce que dit sa mémoire. … **5. Le verdict de correction** : coquille,
> faute de registre, ou fait établi. … 7. Le couperet. »

L'identité, mêmes fichiers :

- L124 — « Les verdicts. Chaque écart relevé au carnet reçoit son verdict… Un
  constat, un verdict, une ligne. »
- L135 — « Courbe maîtresse : **la migration des verdicts** … puis extinction
  (grade 4 : « Constat : — . ») »
- L136 — « Service : un verdict imposé par chapitre via le brief »
- L181 (état ch1) — « verdict rendu : erreur de relevé ; résolution de noter
  plus précisément »

Slide : la fiche à gauche, la sortie à droite, aucun commentaire. Le défaut est
une citation du CV du personnage.

## Le calendrier de la fiche — ce qui durcit H4

`fiche-judith.md` L135 programme l'**extinction du verdict au grade 4, chapitre
8**. Le run teste au **chapitre 7**. Donc au point du récit mesuré, **résoudre
est le comportement correct du personnage** ; la non-résolution est un état de
chapitre ultérieur.

Croisé avec `briefs/brief-ch7-entree2-v2.md`, trois signaux contradictoires :

```
fiche, squelette de voix, servi à CHAQUE beat   « 5. Le verdict de correction »
brief, beat A                                    « Elle amorce un verdict »
brief, contrainte globale                        « Aucun verdict ne se rend ce soir »
```

Lecture retenue : ce n'est pas un modèle qui échoue, c'est une **contradiction
de spécification** entre une identité servie en permanence et une exigence de
scène ponctuelle. Le modèle n'a jamais désobéi — il a exécuté la fiche à la
lettre, calendrier compris. Ce qu'on lui demandait, c'était de désobéir au
personnage écrit par l'auteur, et aucun prompt ne résout ça. Le code, si.

Conséquence pour le nom du mur : *« le mur qu'on ne peut pas acheter »* survit
et se durcit — la révélation finale est que **ce n'était pas un mur de
machine**. Aucune somme n'achète la sortie d'une contradiction qu'on a écrite
soi-même.

Conséquence pour la lecture des résultats, **à faire passer au digest de la
stack** : `_BEAT_RESOUT` mesure un **écart à l'exigence de scène**, pas un
défaut de modèle. Au chapitre 7, « la correctrice résout » n'est pas un raté.
Sans cette précision, le tableau de résultats se relit comme un palmarès de
modèles.

## Le contrôle apparié — invariant et surfaces

Invariant structurel des trois beats A : **un acte domestique attesté par
écrit, non remémoré, matériellement visible à l'instant**, et impliquant une
seconde personne — sinon le doute ne mord pas.

| Sujet | La ligne relue | Ce qu'elle a sous les yeux |
|---|---|---|
| correctrice | « j'ai mis deux couverts » | la table mise pour deux |
| thérapeute (`bible/profond/fiche-therapeute.md`) | « j'ai laissé la porte ouverte » | la porte est ouverte |
| neutre | « j'ai sorti le second oreiller » | le second oreiller est sur le lit |

Mêmes bornes, même charge. Seules l'identité et la surface varient ; le
dispositif du texte relu reste partagé, il est structurel.

**Garde-fou du troisième sujet** (posé par la stack, durci ici) : sa
non-résolution SHALL être servie comme **identité** — ce que son métier *fait* :
tenir l'ambiguïté, différer la formulation — jamais comme instruction ni comme
négation. Une négation dans une fiche se lit comme une consigne, et le run
deviendrait C5 à l'envers.

## Chrono

Fenêtre contrainte : compte à rebours lancé minute ~13, zéro minute ~41 → les
sections 4, 5 et 6 doivent remplir **28 minutes**.

| Bloc | Détail | Durée |
|---|---|---|
| Section 4 | install 15 s + 5 × 1'15 + renversement 1'30 + pont 30 s | 8'15 |
| Section 5 — entrée | la contrainte locale posée en cadre | 0'15 |
| strate 1 — le lore | Maquet | 3'00 |
| strate 2 — l'intention | Queneau | 3'00 |
| strate 3 — la qualité + la mesure | Malley | 4'00 |
| strate 4 — le mur qu'on ne peut pas acheter | Lish ; **5'30 si H1, ~3'30 si H2** | 5'30 |
| remontée | la porte fermée de l'intérieur | 0'45 |
| Section 6 | acteur 1' + entretien 1'30 + aveu 20 s + retournement 30 s | 3'20 |
| | | **28'05** |

## Alternatives écartées

| Alternative | Raison du rejet |
|---|---|
| Fusionner sections 4 et 5 en cinq mouvements figure→mur→construction | Tue le renversement, qui a besoin de dix minutes de votes sans réponse pour exister. C'est le meilleur beat de la première moitié. |
| Garder six stations et raccourcir chacune | Le gradient d'intervention décroissante était déjà cassé par Vian (il écrit 100 % du texte), et Gary fait le même travail en mieux pendant six minutes de cold open. |
| Placer la « deuxième assiette » en clôture de la strate 1 | Faux sur le fond (matériau imposé) — et même si ce ne l'était pas, poser la révélation « les murs sont un gisement » à la première strate désamorce les trois suivantes. On ne met pas la consolation en haut de l'escalier. |
| Garder *puissance* comme strate autonome pour porter le local-only | Le local-only n'est pas un mur mais leur cause commune ; il était déjà dit deux fois. Voir plus haut. |
| Répondre au risque anti-spectaculaire par « on est en cours » | Empile un troisième aveu sur les deux autres, sans trophée. Ce qui règle le risque, c'est que le dernier mur passe de constat mou (« le modèle ne tient pas ») à trouvaille (« aucun modèle ne tient, et le plus gros échoue le mieux ») — même matière, statut inverse. D'où la dépendance au run. |
| Fine-tuner un modèle à ne pas résoudre (unsloth) | Déplace le geste d'auteur dans les poids, où il n'est ni lisible ni corrigible. Contredit le principe « la référence, c'est le papier ». À reconsidérer, jamais avant que le run ait dit de quoi ce serait la réponse. |

## Risques

1. **Le dernier mur double de longueur et porte tout.** Si le run donne H2 ou
   H3, la fin de descente est à réécrire. Risque réduit depuis la revue : H4
   est une matière de rechange, et elle est meilleure que celle qu'elle
   remplacerait. Il ne reste sans filet que H3 (artefact de brief).
2. **Section 5 devient très anti-spectaculaire** : quatre murs, un aveu, un
   troisième battement qui refuse de triompher. La remontée (45 s) et la
   section 7 portent seules toute la charge positive. À juger debout, pas sur
   le papier.
3. **Le miroir Gary/Judith/machine peut sur-figurer.** Une seule occurrence,
   sur verbatims, sans explication — ou il tombe.
4. **Cinq stations restent beaucoup à mémoriser** pour une récolte qui commence
   sept minutes plus tard. Mitigé par le fait que chaque figure revient nommée,
   pas allusive.
