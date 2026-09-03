import type { Snapshot } from './genClient'

// Fixtures du mode mock — transcription FIDÈLE du contrat back (/status +
// /events). Snapshots absolus, dans l'ordre chronologique (`elapsed_s` du
// contrat conservé pour l'ordre, PAS pour la cadence : le mock rejoue sur une
// horloge compressée). Inline (pas de fetch) : le mock reste à zéro réseau.
//
// Règles du contrat reprises ici :
//   · phase `generating` tout du long ; `tts` UNIQUEMENT sur « Restitution » ;
//     puis `ready` ;
//   · « Accumulation » / « Glissement » = sous-étapes d'UNE entrée d'écriture,
//     sans bande (elles tiennent la valeur d'Écriture — voulu) ;
//   · la machine n'envoie qu'une fenêtre glissante de <=5 notes : c'est le deck
//     qui accumule (testé via `pushNotes` au replay).

export type MockScenario = 'nominal' | 'error' | 'idle'

export const TIMELINE_NOMINAL: Snapshot[] = [
  { phase: 'generating', label: 'Invariants de la bible', detail: '(Qwen)', notes: ['12 faits dérivés, ils contraignent le plan'] },
  { phase: 'generating', label: "Plan d'entrées", detail: '(nemo, tentative 1/3)', notes: ['12 faits dérivés, ils contraignent le plan'] },
  { phase: 'generating', label: 'Contrôle du plan contre la bible', detail: '(Qwen)', notes: ['plan ramené de 5 à 4 entrées'] },
  { phase: 'generating', label: 'Écriture', detail: 'entrée 1/4 (nemo)', notes: ['plan ramené de 5 à 4 entrées'] },
  { phase: 'generating', label: 'Accumulation', detail: 'entrée 1 (essai 1)', notes: [] },
  { phase: 'generating', label: 'Glissement', detail: 'entrée 1 (banque)', notes: [] },
  { phase: 'generating', label: 'Écriture', detail: 'entrée 3/4 (nemo)', notes: ['Écriture : génération coupée à 1400 tokens, continuation demandée'] },
  { phase: 'generating', label: 'Relecture', detail: 'entrée 3/4 (nemo)', notes: [] },
  { phase: 'generating', label: 'Bascule des modèles', detail: 'nemo déchargé, Qwen prend la main', notes: [] },
  { phase: 'generating', label: 'Réparation linguistique', detail: 'entrée 2/4 (Qwen)', notes: [] },
  { phase: 'generating', label: 'Assemblage', detail: 'entrée 3 (Qwen)', notes: [] },
  { phase: 'generating', label: 'Pose des gestes', detail: '4 entrée(s)', notes: [] },
  { phase: 'generating', label: 'Cohérence par faits', detail: '(Qwen)', notes: ['chapitre prêt'] },
  { phase: 'tts', label: 'Restitution', detail: 'segment 2/3', notes: ['chapitre prêt'] },
  { phase: 'ready', label: 'Restitution', detail: 'segment 3/3', notes: ['chapitre prêt', 'lecture prête : 165 s restituées en 105 s (×1.57)'] },
]

// Échec de préflight : la machine émet un unique snapshot terminal `error`.
export const TIMELINE_ERROR: Snapshot[] = [
  { phase: 'error', label: '', detail: '', notes: ['ÉCHEC : préflight refusé : ...'], error: 'préflight refusé : swap saturé' },
]

// Annulation opérateur (`POST /cancel` côté machine) : `idle` en pleine
// écriture. Le deck l'IGNORE à l'affichage (ne revient pas à « pas lancé »).
export const TIMELINE_IDLE: Snapshot[] = [
  { phase: 'idle', label: 'Écriture', detail: 'entrée 2/4 (nemo)', notes: ['génération annulée'] },
]

export function timelineFor(scenario: MockScenario): Snapshot[] {
  if (scenario === 'error') return TIMELINE_ERROR
  if (scenario === 'idle') return TIMELINE_IDLE
  return TIMELINE_NOMINAL
}
