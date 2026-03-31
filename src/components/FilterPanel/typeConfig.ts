import type { LocationType } from '../../types';

export const TYPE_LABELS: Record<LocationType, string> = {
  museo: 'Museo',
  parque_tematico: 'Parque Temático',
  naturaleza: 'Naturaleza',
  ciudad: 'Ciudad',
  onsen: 'Onsen',
  templo_santuario: 'Templo / Santuario',
  paisaje: 'Paisaje',
  industria: 'Industria',
};

export const TYPE_ICONS: Record<LocationType, string> = {
  museo: '🏛️',
  parque_tematico: '🎡',
  naturaleza: '🌲',
  ciudad: '🏘️',
  onsen: '♨️',
  templo_santuario: '⛩️',
  paisaje: '🏔️',
  industria: '⚙️',
};

export const ALL_TYPES: LocationType[] = [
  'museo',
  'parque_tematico',
  'naturaleza',
  'ciudad',
  'onsen',
  'templo_santuario',
  'paisaje',
  'industria',
];
