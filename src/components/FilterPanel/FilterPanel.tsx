import type { FilterState, LocationType } from '../../types';
import { FILMS } from '../../data/films';
import { TYPE_ICONS, getTypeLabel, ALL_TYPES } from './typeConfig';
import { useLanguage } from '../../i18n/LanguageContext';
import './FilterPanel.css';

interface FilterPanelProps {
  filters: FilterState;
  onToggleFilm: (filmId: string) => void;
  onToggleType: (type: LocationType) => void;
  onClearAll: () => void;
  visibleCount: number;
  totalCount: number;
}

export function FilterPanel({
  filters,
  onToggleFilm,
  onToggleType,
  onClearAll,
  visibleCount,
  totalCount,
}: FilterPanelProps) {
  const { lang, t } = useLanguage();
  const hasActiveFilters = filters.films.size > 0 || filters.types.size > 0;

  return (
    <aside className="filter-panel">
      <div className="filter-panel__header">
        <h2 className="filter-panel__title">{t('filters')}</h2>
        {hasActiveFilters && (
          <button className="filter-panel__clear-btn" onClick={onClearAll}>
            {t('clearAll')}
          </button>
        )}
      </div>

      <div className="filter-panel__count">
        {t('showing')} <strong>{visibleCount}</strong> {t('of')} {totalCount} {t('locations')}
      </div>

      {/* ── Películas / Films ──────────────────────────────────────────── */}
      <section className="filter-section">
        <h3 className="filter-section__title">
          {t('films')}
        </h3>
        <div className="filter-chips">
          {FILMS.map((film) => {
            const active = filters.films.has(film.id);
            const filmTitle = lang === 'en' ? film.titleEn : film.title;
            return (
              <button
                key={film.id}
                className={`filter-chip ${active ? 'filter-chip--active' : ''}`}
                style={
                  active
                    ? { background: film.color, borderColor: film.color, color: '#fff' }
                    : { borderColor: film.color + '80' }
                }
                onClick={() => onToggleFilm(film.id)}
                title={film.year > 0 ? `${filmTitle} (${film.year})` : filmTitle}
              >
                <span className="filter-chip__dot" style={{ background: film.color }} />
                <span className="filter-chip__label">{filmTitle}</span>
                {film.year > 0 && (
                  <span className="filter-chip__year">{film.year}</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Tipos / Types ──────────────────────────────────────────────── */}
      <section className="filter-section">
        <h3 className="filter-section__title">
          {t('placeType')}
        </h3>
        <div className="filter-chips filter-chips--types">
          {ALL_TYPES.map((type) => {
            const active = filters.types.has(type);
            return (
              <button
                key={type}
                className={`filter-chip filter-chip--type ${active ? 'filter-chip--active-type' : ''}`}
                onClick={() => onToggleType(type)}
              >
                <span>{TYPE_ICONS[type]}</span>
                <span className="filter-chip__label">{getTypeLabel(type, lang)}</span>
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
