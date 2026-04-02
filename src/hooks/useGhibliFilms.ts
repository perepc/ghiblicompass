import { useState, useEffect } from 'react';
import { fetchGhibliFilms } from '../services/ghibliApi';
import type { GhibliApiFilm } from '../types';

export function useGhibliFilms() {
  const [films, setFilms] = useState<GhibliApiFilm[]>([]);

  useEffect(() => {
    fetchGhibliFilms().then(setFilms).catch(() => {});
  }, []);

  return films;
}
