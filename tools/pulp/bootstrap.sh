#!/usr/bin/env bash
# Amorçage de l'outillage de génération pulp — idempotent.
#
# Trois couches, trois durées de vie (cf. design du changement
# visuels-16-9-portrait-attente) :
#   - le venv        jetable, reconstruit par ce script ;
#   - jobs.tsv/tails versionnés — c'est la mémoire du chantier ;
#   - les PNG        canoniques, dans public/images/.
#
# Ce script ne génère rien. Il rend `generer.sh` exécutable sur une machine
# vierge : environnement, mflux épinglé, poids du modèle.
#
# Usage :  tools/pulp/bootstrap.sh
# Surcharges :  PULP_VENV=/chemin/venv  tools/pulp/bootstrap.sh

set -euo pipefail

ICI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Le venv vit hors du repo : c'est un artefact machine, pas un artefact projet.
PULP_VENV="${PULP_VENV:-$HOME/.cache/pulpvenv}"
MFLUX_VERSION="0.18.0"
MODEL_REPO="black-forest-labs/FLUX.2-klein-4B"

echo "== Amorçage pulp =="
echo "venv   : $PULP_VENV"
echo "mflux  : $MFLUX_VERSION"
echo "modèle : $MODEL_REPO"
echo

# ── 1. Environnement ────────────────────────────────────────────────────
# mflux/MLX ne tourne que sur Apple Silicon.
if [ "$(uname -s)" != "Darwin" ] || [ "$(uname -m)" != "arm64" ]; then
  echo "ERREUR : mflux exige macOS sur Apple Silicon (MLX)." >&2
  exit 1
fi

if [ ! -x "$PULP_VENV/bin/python" ]; then
  echo "[venv] création"
  python3 -m venv "$PULP_VENV"
else
  echo "[venv] déjà présent"
fi

INSTALLEE="$("$PULP_VENV/bin/pip" show mflux 2>/dev/null | awk '/^Version:/{print $2}')"
if [ "$INSTALLEE" = "$MFLUX_VERSION" ]; then
  echo "[mflux] $MFLUX_VERSION déjà installé"
else
  echo "[mflux] installation de $MFLUX_VERSION (trouvé : ${INSTALLEE:-rien})"
  "$PULP_VENV/bin/pip" install --quiet --upgrade pip
  "$PULP_VENV/bin/pip" install --quiet "mflux==$MFLUX_VERSION"
fi

# ── 2. Accessibilité du dépôt de modèle ─────────────────────────────────
# Le pull est le seul blocage dur possible de tout le chantier : si le dépôt
# est gated, on veut le savoir ici, pas au milieu d'un batch de vingt tirages.
echo "[modèle] vérification de l'accès à $MODEL_REPO"
CODE="$(curl -sS -o /dev/null -w '%{http_code}' \
  "https://huggingface.co/api/models/$MODEL_REPO" || echo "000")"

case "$CODE" in
  200) echo "[modèle] dépôt public, accessible" ;;
  401|403)
    cat >&2 <<EOF

ERREUR : $MODEL_REPO répond $CODE — dépôt gated ou privé.

  Le chantier visuel est bloqué ici. Deux voies :
    1. accepter les conditions du dépôt sur huggingface.co, puis
       $PULP_VENV/bin/hf auth login
    2. arbitrer avec le speaker sur un autre modèle — ce qui change le
       génome visuel de TOUTE la série, pas seulement des nouveaux assets.

EOF
    exit 1 ;;
  000) echo "[modèle] ATTENTION : pas de réseau, vérification impossible" ;;
  *)   echo "[modèle] ATTENTION : réponse inattendue ($CODE)" ;;
esac

# ── 3. Poids ────────────────────────────────────────────────────────────
# mflux quantifie au chargement à partir des poids complets : il faut le
# dépôt entier, pas un sous-ensemble.
CACHE_HF="${HF_HOME:-$HOME/.cache/huggingface}/hub"
SNAPSHOT="$CACHE_HF/models--${MODEL_REPO//\//--}"

if [ -d "$SNAPSHOT" ]; then
  echo "[poids] déjà en cache ($(du -sh "$SNAPSHOT" 2>/dev/null | cut -f1))"
else
  echo "[poids] téléchargement — plusieurs Go, une seule fois"
  "$PULP_VENV/bin/hf" download "$MODEL_REPO"
fi

# ── 4. Dossiers de travail (ignorés par git) ────────────────────────────
mkdir -p "$ICI/sources" "$ICI/tirages"

echo
echo "== Prêt =="
echo "Tirage :  tools/pulp/generer.sh"
echo "Sondes  : voir tasks.md lot 4 — P1/P2/P3 AVANT tout batch."
