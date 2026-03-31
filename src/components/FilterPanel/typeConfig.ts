import type { LocationType } from '../../types';
import type { Lang } from '../../i18n';
import { translations } from '../../i18n';

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

export function getTypeLabel(type: LocationType, lang: Lang): string {
  return translations[lang].types[type];
}

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
