export type LocationType =
  | 'museo'
  | 'parque_tematico'
  | 'naturaleza'
  | 'ciudad'
  | 'onsen'
  | 'templo_santuario'
  | 'paisaje'
  | 'industria';

export interface Film {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  color: string;
}

export interface GhibliLocation {
  id: string;
  name: string;
  nameEn: string;
  nameJp: string;
  coordinates: [number, number];
  filmIds: string[];
  type: LocationType;
  description: string;
  descriptionEn: string;
  prefecture: string;
}

export interface FilterState {
  films: Set<string>;
  types: Set<LocationType>;
}
