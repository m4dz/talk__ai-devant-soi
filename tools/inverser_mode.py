#!/usr/bin/env python3
"""Dérivations dark des visuels pulp : inversion sérigraphique et calage noir.

Deux opérations mutuellement exclusives :

1. INVERSION (défaut) — motifs 1-4 uniquement (portraits, objets-figures).
   L'image générée (mflux, base crème) est une quasi-bichromie crème/noir +
   accent rouge. Chaque pixel est classé (doucement ou strictement) vers ces
   3 encres, puis remappé vers la palette dark. Composition et trame halftone
   strictement préservées. INTERDIT sur les scènes de nuit : inverser la
   luminance d'une nuit produit un jour délavé (validé sur planche v2).

2. CALAGE NOIR (--cale-noir) — ambiances (motif 5) destinées au fond perdu
   dark. Les noirs Flux sortent gris-bleu ; remap linéaire par canal ramenant
   le percentile bas de chaque canal sur la composante correspondante de
   #0f0d0b (fond dark du deck). Supprime la dominante bleue. Pas d'inversion.

Usage :
    python inverser_mode.py entree.png sortie.png [--dur] [--puissance N]
    python inverser_mode.py entree.png sortie.png --cale-noir [--percentile P]

Dépendances : pillow, numpy.
"""

import argparse
import sys

import numpy as np
from PIL import Image

# Encres attendues dans l'image générée (prompt figé, base crème)
SOURCE = {
    "creme": (0xED, 0xE3, 0xD0),   # papier
    "noir":  (0x0F, 0x0D, 0x0B),   # encre
    "rouge": (0xB3, 0x14, 0x1C),   # accent (valeur light du deck)
}

# Palette cible du mode dark
CIBLE = {
    "creme": (0x0F, 0x0D, 0x0B),   # papier -> noir d'encre
    "noir":  (0xED, 0xE3, 0xD0),   # encre -> blanc cassé
    "rouge": (0xE1, 0x1D, 0x1D),   # rouge remappé (valeur dark)
}

ORDRE = ["creme", "noir", "rouge"]

# Garde de saturation de l'ancre rouge (cf. `inverser`). Un pixel n'est
# candidat au rouge que si son canal R domine le plus fort des deux autres.
# 30 laisse passer les rouges d'aplat de la série (écharpe, lèvres, ruban)
# et bloque les demi-tons chauds de trame ; le flou évite le liseré.
SATURATION_MIN = 30.0
SATURATION_FLOU = 40.0
# Pénalité de distance appliquée à l'ancre rouge quand la porte est fermée :
# assez grande pour la mettre hors jeu quelle que soit la teinte.
ECART_HORS_JEU = 1000.0

FOND_DARK = (0x0F, 0x0D, 0x0B)     # point noir cible du calage


def inverser(img: Image.Image, dur: bool, puissance: float = 4.0) -> Image.Image:
    """Classe chaque pixel vers les 3 encres source et remappe vers la cible.

    Mode doux : poids w_i = 1 / (dist_i + eps)^puissance, normalisés, puis
    couleur de sortie = somme pondérée des cibles. `puissance` élevée ->
    classement plus tranché ; 4.0 garde des transitions correctes sur les
    dégradés tout en écrasant peu la trame.
    """
    px = np.asarray(img.convert("RGB"), dtype=np.float32)        # (H, W, 3)
    anchors = np.array([SOURCE[k] for k in ORDRE], np.float32)   # (3, 3)
    targets = np.array([CIBLE[k] for k in ORDRE], np.float32)    # (3, 3)

    diff = px[:, :, None, :] - anchors[None, None, :, :]
    dist = np.sqrt((diff ** 2).sum(axis=-1))                     # (H, W, 3)

    # Garde de saturation sur l'ancre rouge.
    #
    # L'ancre rouge (#b3141c) est à MI-LUMINANCE : en distance RGB pure, un
    # demi-ton chaud de trame (~140,120,105) en est plus proche que du crème
    # ou de l'encre. Sur une image à masses plates (presence) ça ne se voit
    # pas ; sur une image entièrement tramée (la fabrique) ça repeint la
    # moitié du sujet en piqueté rouge — mesuré : 18 000 px parasites contre
    # 4 800 px de vrai ruban, et la puissance n'y change rien puisque ces
    # pixels sont réellement classés rouge, pas mal mélangés.
    #
    # On exige donc que le pixel soit RÉELLEMENT rouge (canal R dominant)
    # pour que l'ancre rouge entre en jeu. Transition douce : pas de masque
    # binaire, qui laisserait un liseré au bord des aplats rouges.
    dominance = px[:, :, 0] - np.maximum(px[:, :, 1], px[:, :, 2])
    porte = np.clip((dominance - SATURATION_MIN) / SATURATION_FLOU, 0.0, 1.0)
    # Éloigner l'ancre rouge là où la porte est fermée la met hors jeu.
    i_rouge = ORDRE.index("rouge")
    dist[:, :, i_rouge] += (1.0 - porte) * ECART_HORS_JEU

    if dur:
        out = targets[dist.argmin(axis=-1)]
    else:
        # Poids en log : `1 / (dist + 1) ** puissance` déborde en float32 dès
        # une puissance d'environ 20 (inf → NaN après normalisation → cast
        # invalide → image cassée, SANS erreur). Le passage en log est
        # mathématiquement identique et stable pour toute puissance : on
        # soustrait le max avant l'exponentielle, comme un softmax.
        logw = -puissance * np.log(dist + 1.0, dtype=np.float64)
        logw -= logw.max(axis=-1, keepdims=True)
        w = np.exp(logw)
        w /= w.sum(axis=-1, keepdims=True)
        out = np.einsum("hwk,kc->hwc", w, targets.astype(np.float64))

    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), "RGB")


def caler_noir(img: Image.Image, percentile: float = 0.5) -> Image.Image:
    """Cale le point noir de l'image sur le fond dark du deck (#0f0d0b).

    Remap linéaire par canal : [p, 255] -> [cible, 255] où p est le
    percentile bas du canal. Les valeurs sous p sont écrêtées à la cible.
    Le remap par canal supprime la dominante (noirs bleu-gris de Flux).
    """
    px = np.asarray(img.convert("RGB"), dtype=np.float32)
    out = np.empty_like(px)
    for c in range(3):
        p = np.percentile(px[:, :, c], percentile)
        cible = float(FOND_DARK[c])
        if p >= 254.0:                       # canal dégénéré, ne rien faire
            out[:, :, c] = px[:, :, c]
            continue
        v = np.clip(px[:, :, c], p, 255.0)
        out[:, :, c] = cible + (v - p) * (255.0 - cible) / (255.0 - p)
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), "RGB")


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("entree", help="PNG généré (base crème)")
    p.add_argument("sortie", help="PNG de sortie")
    p.add_argument("--dur", action="store_true",
                   help="inversion : quantification stricte 3 teintes")
    p.add_argument("--puissance", type=float, default=4.0,
                   help="inversion douce : netteté du classement "
                        "(défaut 4.0 ; plus haut = plus tranché)")
    p.add_argument("--cale-noir", action="store_true",
                   help="ambiances : calage du point noir sur #0f0d0b, "
                        "sans inversion")
    p.add_argument("--percentile", type=float, default=0.5,
                   help="calage : percentile bas par canal (défaut 0.5)")
    args = p.parse_args()

    if args.cale_noir and args.dur:
        p.error("--cale-noir et --dur sont mutuellement exclusifs")

    img = Image.open(args.entree)
    if args.cale_noir:
        res = caler_noir(img, percentile=args.percentile)
    else:
        res = inverser(img, dur=args.dur, puissance=args.puissance)
    res.save(args.sortie)
    print(f"OK : {args.sortie}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
