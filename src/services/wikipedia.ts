import type { Lang } from '../i18n';

export interface WikiSummary {
  extract: string;
  content_urls: {
    desktop: { page: string };
  };
  thumbnail?: { source: string };
}

const cache = new Map<string, WikiSummary | null>();

export async function fetchWikiSummary(
  slug: string,
  lang: Lang
): Promise<WikiSummary | null> {
  const key = `${lang}:${slug}`;
  if (cache.has(key)) return cache.get(key)!;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      cache.set(key, null);
      return null;
    }
    const data = (await res.json()) as WikiSummary;
    cache.set(key, data);
    return data;
  } catch {
    cache.set(key, null);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
