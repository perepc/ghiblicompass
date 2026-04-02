import { useState, useEffect } from 'react';
import type { GhibliLocation, GhibliApiFilm } from '../../types';
import { FILMS_MAP } from '../../data/films';
import { TYPE_ICONS, getTypeLabel } from '../FilterPanel/typeConfig';
import { useLanguage } from '../../i18n/LanguageContext';
import { fetchWikiSummary } from '../../services/wikipedia';
import { matchGhibliFilm } from '../../services/ghibliApi';
import './LocationPopup.css';

interface LocationPopupProps {
  location: GhibliLocation;
  ghibliFilms: GhibliApiFilm[];
}

export function LocationPopup({ location, ghibliFilms }: LocationPopupProps) {
  const { lang, t } = useLanguage();
  const primaryFilm = FILMS_MAP[location.filmIds[0] ?? ''];

  const name = lang === 'en' ? location.nameEn : location.name;
  const description = lang === 'en' ? location.descriptionEn : location.description;
  const filmTitle = primaryFilm
    ? lang === 'en' ? primaryFilm.titleEn : primaryFilm.title
    : '';

  // Wikipedia summary (lazy, cached)
  const [wikiLoading, setWikiLoading] = useState(false);
  const [wikiExtract, setWikiExtract] = useState<string | null>(null);
  const [wikiUrl, setWikiUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!location.wikiSlug) return;
    setWikiLoading(true);
    setWikiExtract(null);
    fetchWikiSummary(location.wikiSlug, lang).then((summary) => {
      if (summary) {
        // Trim to ~200 chars for the excerpt
        const extract = summary.extract.length > 220
          ? summary.extract.slice(0, 220).replace(/\s\S+$/, '') + '…'
          : summary.extract;
        setWikiExtract(extract);
        setWikiUrl(summary.content_urls.desktop.page);
      }
      setWikiLoading(false);
    });
  }, [location.wikiSlug, lang]);

  // Ghibli API film enrichment
  const enrichedFilm = primaryFilm
    ? matchGhibliFilm(primaryFilm.titleEn, ghibliFilms)
    : undefined;

  return (
    <div className="popup">
      {primaryFilm && (
        <div className="popup__film-banner" style={{ background: primaryFilm.color }}>
          <span className="popup__film-name">{filmTitle}</span>
          {primaryFilm.year > 0 && (
            <span className="popup__film-year">({primaryFilm.year})</span>
          )}
        </div>
      )}

      <div className="popup__body">
        <div className="popup__type-badge">
          <span>{TYPE_ICONS[location.type]}</span>
          <span>{getTypeLabel(location.type, lang)}</span>
        </div>

        <h3 className="popup__name">{name}</h3>
        <p className="popup__name-jp">{location.nameJp}</p>

        <p className="popup__prefecture">
          <span className="popup__prefecture-icon">📍</span>
          {location.prefecture}
        </p>

        <p className="popup__description">{description}</p>

        {/* Film enrichment from Ghibli API */}
        {enrichedFilm && (
          <div className="popup__film-meta">
            <span className="popup__film-meta-item">
              <span className="popup__film-meta-label">{t('director')}:</span>
              {enrichedFilm.director}
            </span>
            {enrichedFilm.rt_score !== '0' && (
              <span className="popup__film-meta-item">
                <span className="popup__film-meta-label">{t('rtScore')}:</span>
                🍅 {enrichedFilm.rt_score}%
              </span>
            )}
          </div>
        )}

        {/* Multi-film chips */}
        {location.filmIds.length > 1 && (
          <div className="popup__films">
            <span className="popup__films-label">{t('alsoIn')}</span>
            <div className="popup__films-list">
              {location.filmIds.slice(1).map((fid) => {
                const film = FILMS_MAP[fid];
                if (!film) return null;
                const title = lang === 'en' ? film.titleEn : film.title;
                return (
                  <span
                    key={fid}
                    className="popup__film-chip"
                    style={{ borderColor: film.color, color: film.color }}
                  >
                    {title}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Sources section */}
        {location.wikiSlug && (
          <div className="popup__sources">
            <span className="popup__sources-title">📚 {t('sources')}</span>

            {wikiLoading && (
              <span className="popup__sources-loading">{t('loadingSources')}</span>
            )}

            {wikiExtract && (
              <p className="popup__wiki-extract">{wikiExtract}</p>
            )}

            {wikiUrl && (
              <a
                href={wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="popup__source-link"
              >
                <span>📖</span>
                <span>{t('wikiSource')}</span>
                <span className="popup__source-link-arrow">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
