import type { GhibliApiFilm } from '../types';

const GHIBLI_API = 'https://ghibliapi.vercel.app/films';

let cachedFilms: GhibliApiFilm[] | null = null;

export async function fetchGhibliFilms(): Promise<GhibliApiFilm[]> {
  if (cachedFilms) return cachedFilms;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(GHIBLI_API, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as GhibliApiFilm[];
    cachedFilms = data;
    return data;
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

/** Match a local film title to a Ghibli API entry by English title */
export function matchGhibliFilm(
  titleEn: string,
  films: GhibliApiFilm[]
): GhibliApiFilm | undefined {
  const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = normalise(titleEn);
  return films.find((f) => normalise(f.title) === target);
}
