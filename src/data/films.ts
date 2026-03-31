import type { Film } from '../types';

export const FILMS: Film[] = [
  { id: 'totoro', title: 'Mi vecino Totoro', year: 1988, color: '#4CAF50' },
  { id: 'mononoke', title: 'La princesa Mononoke', year: 1997, color: '#558B2F' },
  { id: 'chihiro', title: 'El viaje de Chihiro', year: 2001, color: '#FF9800' },
  { id: 'ponyo', title: 'Ponyo', year: 2008, color: '#2196F3' },
  { id: 'whisper', title: 'Si escuchas tu corazón', year: 1995, color: '#9C27B0' },
  { id: 'fireflies', title: 'La tumba de las luciérnagas', year: 1988, color: '#607D8B' },
  { id: 'yesterday', title: 'Recuerdos del ayer', year: 1991, color: '#FF5722' },
  { id: 'pompoko', title: 'Pompoko', year: 1994, color: '#795548' },
  { id: 'wind', title: 'El viento se levanta', year: 2013, color: '#00BCD4' },
  { id: 'marnie', title: 'Cuando Marnie estuvo aquí', year: 2014, color: '#3F51B5' },
  { id: 'kaguya', title: 'El cuento de la Princesa Kaguya', year: 2013, color: '#E91E63' },
  { id: 'laputa', title: 'El castillo en el cielo', year: 1986, color: '#FFC107' },
  { id: 'kiki', title: "La entrega a domicilio de Kiki", year: 1989, color: '#F44336' },
  { id: 'nausicaa', title: 'Nausicaä del Valle del Viento', year: 1984, color: '#009688' },
  { id: 'howl', title: 'El castillo ambulante', year: 2004, color: '#FF6F00' },
  { id: 'general', title: 'General / Museo & Parques', year: 0, color: '#9E9E9E' },
];

export const FILMS_MAP: Record<string, Film> = Object.fromEntries(
  FILMS.map((f) => [f.id, f])
);
