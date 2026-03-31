import { useState, useMemo, useCallback } from 'react';
import type { FilterState, LocationType, GhibliLocation } from '../types';
import { LOCATIONS } from '../data/locations';

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>({
    films: new Set<string>(),
    types: new Set<LocationType>(),
  });

  const toggleFilm = useCallback((filmId: string) => {
    setFilters((prev) => {
      const next = new Set(prev.films);
      if (next.has(filmId)) {
        next.delete(filmId);
      } else {
        next.add(filmId);
      }
      return { ...prev, films: next };
    });
  }, []);

  const toggleType = useCallback((type: LocationType) => {
    setFilters((prev) => {
      const next = new Set(prev.types);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return { ...prev, types: next };
    });
  }, []);

  const clearAll = useCallback(() => {
    setFilters({ films: new Set(), types: new Set() });
  }, []);

  const filteredLocations = useMemo<GhibliLocation[]>(() => {
    return LOCATIONS.filter((loc) => {
      const filmMatch =
        filters.films.size === 0 ||
        loc.filmIds.some((id) => filters.films.has(id));
      const typeMatch =
        filters.types.size === 0 || filters.types.has(loc.type);
      return filmMatch && typeMatch;
    });
  }, [filters]);

  return {
    filters,
    filteredLocations,
    totalLocations: LOCATIONS.length,
    toggleFilm,
    toggleType,
    clearAll,
  };
}
