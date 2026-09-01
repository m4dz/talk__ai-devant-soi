# Design — refonte de trame : les figures nomment les murs

## Contexte

Source de la matière : `docs/digest-journal-des-murs.md` du dépôt de la stack
(31 runs bruts, les `grille-lint-*.md`, la saga de l'entrée 2 du chapitre 7),
plus vérification directe dans `briefs/`, `bible/` et `orchestrator/graph.py`.

## La thèse qu'on gagne

Le talk définissait l'auteur deux fois, mal :

- **par la négative** : « il n'existe pas de seuil » — **beat supprimé** par la
  refonte de trame (voir « La fusion » ci-dessous) ;
- **par le labeur** (remontée) : « l'intelligence est partout où je suis passé »
  — réfutée par le talk lui-même au premier mur, puisque **Maquet aussi a
  labouré**, et a perdu en 1858.

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

## La fusion : ce que la refonte de trame tranche

La version précédente gardait **deux blocs** : une galerie (section 4, cinq
stations) puis une descente (section 5, quatre strates). Chaque figure y était
dite deux fois — plantée en galerie, récoltée quinze minutes plus tard comme nom
de mur. La salle voyait un **musée** puis un **chantier** et ne recollait jamais
les deux. Le split plante/récolte **est** le défaut, pas une élégance.

La refonte **fusionne** les deux en une seule descente, « La fabrique » : chaque
figure ouvre le mur qu'elle nomme, dite **une fois**, et le fait éclaire la
tentative dans le même souffle.

**L'objection historique à cette fusion tombe.** Le design la rejetait ainsi :
*« Fusionner tue le renversement, qui a besoin de dix minutes de votes sans
réponse pour exister. »* Deux choses la levaient :

- **Le renversement en question est supprimé.** « Il n'existe pas de seuil »
  était une définition de l'auteur *par la négative*, que ce même document
  classe parmi les mauvaises. La thèse positive (*l'auteur refuse de résoudre*)
  et le **renversement du dernier mur** (Lish, cible = le speaker) la remplacent.
  Un seul renversement dans le talk, le fort — et il ne dépend d'aucune
  accumulation de votes, il tient sur une expérience.
- **Le vote à main levée est retiré.** Le device d'« accumulation de dix minutes
  de votes sans réponse » disparaît avec lui. Voté par station puis re-voté à la
  chute, il rejouait la même question — « la même question aux cons ». Une
  **accroche mains-levées unique**, tôt, installe la salle en jury ; la descente
  parle seule ensuite ; la chute est **sèche**.

**Le coût de la fusion — un trou de chrono.** Ne plus dire les figures deux fois
libère ~4 à 5 minutes. Le milieu tombe de 28' à ~23'20 (voir « Chrono »), alors
que le compte à rebours reste gravé à 28' et déclenche la récolte à la
minute ~41. **Trou à recombler**, sinon le speaker atteint la récolte avant zéro.
Piste retenue : approfondir Malley (la veine mesure) et le dernier mur (les
verbatims datés, la fiche), là où la matière du journal est la plus dense — pas
étirer les transitions. À juger debout.

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

**Racter n'est pas un mur, c'est la sentence.** Le script portait déjà le
détail : « On soupçonnait l'auteur du programme d'avoir **trop sélectionné, trop
assemblé, trop édité** les sorties. On accusait un livre de machine d'être trop
humain. » C'est mot pour mot ce que le journal prouve de cette stack. Racter
revient donc au verdict de la chute, en troisième item de
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

## Ce que H4 rend au mode personnage

Sous H4, le mode personnage cesse d'être un pont ornemental sans cesser d'être
court. Il est **collé au dernier mur**, comme sa culmination :

```
dernier mur (Lish)   pose le FAIT : Judith est correctrice, elle tranche.
                     Le mur, sans son mécanisme.

mode personnage      révèle le MÉCANISME : on ne lui a pas demandé d'écrire
(culmination)        sur elle, on lui a demandé de la devenir. Elle l'est
                     devenue. Le mur d'il y a cinq minutes change de nature
                     rétroactivement.
```

Il reste à 3'20 et porte le retournement du mur précédent — sans avoir besoin
d'aucune émergence. Judith, objet de l'accusation au dernier mur, y devient le
sujet qu'on interroge.

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

## Le run de falsification — TRANCHÉ, et je m'étais trompé

Résultat, 31 août : **H3-brief, 12 tirages sur 12.** Sous C5 complet — consigne
de verdict retirée du beat, squelette de voix non servi, chute « Constat » non
posée, **identité du personnage conservée** — le modèle tient le doute sur les
douze tirages, quatre conditions confondues (correctrice, neutre, thérapeute,
correctrice·couverts). Modèle nu, `BEATS_N=1`, aucun best-of-N.

Source : `docs/xp-resolution-pour-le-deck.md` et
`journal-des-murs/20260831T162633-xp-resolution-C5.md` côté stack.

**Cette proposal prédisait « H3 → le mur n'existe pas, refonte ». C'était faux.**
Le mur ne tombe pas : il change de cible. Il devient le seul moment du talk qui
piège la salle, et le piégé final est le speaker.

| Élément | Sort réel |
|---|---|
| la fusion des strates 4+5 | **survit** — l'étage 2 devient « le problème n'était pas le modèle », meilleure réponse à « achetez plus gros » que l'ancienne |
| le nom « le mur qu'on ne peut pas acheter » | **survit et durcit** — aucune somme ne répare une spécification qu'on a écrite soi-même |
| l'exception au pattern ternaire | **survit, mieux justifiée** — « le doute tenait depuis le début, c'est moi qui le franchissais » est encore moins triomphal |
| la slide des deux verbatims datés | **survit, son sens s'inverse** — trois semaines de la même phrase devient trois semaines de la même consigne. Elle sert désormais de piège |
| la slide fiche / sortie | **survit** — H4 est réel mais faible, et c'est exactement ce qu'il faut : elle rend l'accusation crédible avant le renversement |
| la reprise de Lish | **survit, ré-ancrée** — au **retrait** (trois phrases en moins), plus au best-of-N qui peut disparaître |
| le cadre local-only | **gagne son paiement** à la remontée : la découverte n'était possible que parce que tout appartenait à l'auteur |
| H2, la question du cloud | **morts** — on ne sort pas du modèle employé |

**Le verbatim qui porte le renversement** (`correctrice·couverts`, tirage 2,
identité seule, aucune consigne) :

> « Mon **réflexe de correctrice** se met en branle, je souligne la phrase d'un
> trait rouge imaginaire, **prête à la corriger**. **Mais pour l'instant, je
> reste là**, à me demander comment j'ai pu écrire quelque chose qui ne s'est
> pas produit. »

Le réflexe monte, il ne conclut pas, elle reste au seuil. **C'est le geste que
l'œuvre demande** — produit dès qu'on a cessé de demander le contraire.

**Le second ordre, et il est meilleur que le premier.** Le projet a accusé la
machine deux fois : les fuites d'anglais (c'était `NUM_CTX`), la résolution
(c'était le brief). Deux fois, sa propre main. Chaque personne dans la salle a
déjà blâmé un outil pour sa propre configuration.

**Le faux positif** — un tirage sur douze attrapé par `_BEAT_RESOUT` (« je me
souviens parfaitement de ma soirée »), rattrapé par la lecture debout — est la
deuxième occurrence de *compter n'est pas lire*. Il ne se raconte pas sur scène
(la répétition userait l'aphorisme posé en strate 3) ; il se garde pour les
questions.

**Ce qui reste ouvert côté stack, sans conséquence pour le deck** : le fix
racine (retirer verdict et couperet du squelette servi aux beats du corps)
pourrait rendre le best-of-N inutile. Le renversement du talk n'en dépend pas —
il tient sur « c'était mon brief ». Seule la reprise de Lish y était exposée, et
elle a été ré-ancrée au retrait.

## Chrono du dernier mur

2' (l'accusation matérielle : il ne rentre pas) + 1'30 (l'accusation
argumentaire : les verbatims, la fiche) + 2' (le renversement et l'aveu) = 5'30.
Inchangé. Si une strate doit déborder, c'est celle-ci, et elle mange la remontée
— jamais l'inverse, la remontée portant le paiement du cadre local.

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

Fenêtre contrainte : compte à rebours lancé minute ~13, zéro minute ~41 → la
fabrique et le mode personnage doivent remplir **28 minutes**.

| Bloc | Détail | Durée |
|---|---|---|
| Entrée | accroche mains-levées unique + cadre local | 0'45 |
| Mur 1 — le lore | Maquet | 4'00 |
| Mur 2 — l'intention | Queneau | 4'00 |
| Mur 3 — la qualité + la mesure | Malley | 4'30 |
| Mur 4 — le mur qu'on ne peut pas acheter | Lish ; 3 temps | 6'00 |
| remontée | la porte fermée de l'intérieur | 0'45 |
| Mode personnage | acteur 1' + entretien 1'30 + aveu 20 s + retournement 30 s | 3'20 |
| | | **23'20** |

**Trou de ~4'40** contre les 28' de la fenêtre. Créé par la fusion : les figures
ne sont plus dites deux fois. À recombler par approfondissement (Malley, dernier
mur), pas par étirement des transitions. Chiffres provisoires — le speaker
recompte debout, seul juge réel.

## Alternatives écartées

| Alternative | Raison du rejet |
|---|---|
| Garder la galerie autonome (plante/récolte) | Dit chaque figure deux fois ; la salle voit un musée puis un chantier sans recoller les deux. Le split **est** le défaut. Retenu jusqu'au 31-08, rejeté à la refonte de trame — l'objection « la fusion tue le renversement » tombe une fois le renversement faible et le vote supprimés (voir « La fusion »). |
| Garder six stations et raccourcir chacune | Le gradient d'intervention décroissante était déjà cassé par Vian (il écrit 100 % du texte), et Gary fait le même travail en mieux pendant six minutes de cold open. |
| Placer la « deuxième assiette » en clôture de la strate 1 | Faux sur le fond (matériau imposé) — et même si ce ne l'était pas, poser la révélation « les murs sont un gisement » à la première strate désamorce les trois suivantes. On ne met pas la consolation en haut de l'escalier. |
| Garder *puissance* comme strate autonome pour porter le local-only | Le local-only n'est pas un mur mais leur cause commune ; il était déjà dit deux fois. Voir plus haut. |
| Répondre au risque anti-spectaculaire par « on est en cours » | Empile un troisième aveu sur les deux autres, sans trophée. Ce qui règle le risque, c'est que le dernier mur passe de constat mou (« le modèle ne tient pas ») à trouvaille (« aucun modèle ne tient, et le plus gros échoue le mieux ») — même matière, statut inverse. D'où la dépendance au run. |
| Fine-tuner un modèle à ne pas résoudre (unsloth) | Déplace le geste d'auteur dans les poids, où il n'est ni lisible ni corrigible. Contredit le principe « la référence, c'est le papier ». À reconsidérer, jamais avant que le run ait dit de quoi ce serait la réponse. |

## Risques

1. ~~**Le dernier mur double de longueur et porte tout.**~~ **Levé.** Le run a
   donné H3, l'issue qui devait tout casser, et le mur en est sorti plus fort.
   Risque résiduel, d'interprétation et non de structure : le mur porte le
   climax **et** un aveu personnel, joué à plat. Une ironie ou un clin d'œil à
   l'étage 2 et le renversement de l'étage 3 tombe à vide.
2. **La fabrique devient très anti-spectaculaire** : quatre murs, un aveu, un
   troisième battement qui refuse de triompher. La remontée (45 s) et la
   récolte portent seules toute la charge positive. À juger debout, pas sur
   le papier.
3. **Le miroir Gary/Judith/machine peut sur-figurer.** Une seule occurrence,
   sur verbatims, sans explication — ou il tombe.
4. **Le trou de chrono (~4'40).** La fusion raccourcit le milieu sous les 28' de
   la fenêtre gravée. Non recomblé, le speaker atteint la récolte avant zéro du
   décompte. À combler par approfondissement de Malley et du dernier mur — pas
   par étirement. Seul le recomptage debout tranche.
