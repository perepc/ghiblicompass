import type { GhibliLocation } from '../../types';
import { FILMS_MAP } from '../../data/films';
import { TYPE_ICONS, getTypeLabel } from '../FilterPanel/typeConfig';
import { useLanguage } from '../../i18n/LanguageContext';
import './LocationPopup.css';

interface LocationPopupProps {
  location: GhibliLocation;
}

export function LocationPopup({ location }: LocationPopupProps) {
  const { lang, t } = useLanguage();
  const primaryFilm = FILMS_MAP[location.filmIds[0] ?? ''];

  const name = lang === 'en' ? location.nameEn : location.name;
  const description = lang === 'en' ? location.descriptionEn : location.description;
  const filmTitle = primaryFilm
    ? lang === 'en' ? primaryFilm.titleEn : primaryFilm.title
    : '';

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
      </div>
    </div>
  );
}
