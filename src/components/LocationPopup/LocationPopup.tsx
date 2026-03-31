import type { GhibliLocation } from '../../types';
import { FILMS_MAP } from '../../data/films';
import { TYPE_LABELS, TYPE_ICONS } from '../FilterPanel/typeConfig';
import './LocationPopup.css';

interface LocationPopupProps {
  location: GhibliLocation;
}

export function LocationPopup({ location }: LocationPopupProps) {
  const primaryFilm = FILMS_MAP[location.filmIds[0] ?? ''];

  return (
    <div className="popup">
      {primaryFilm && (
        <div
          className="popup__film-banner"
          style={{ background: primaryFilm.color }}
        >
          <span className="popup__film-name">{primaryFilm.title}</span>
          {primaryFilm.year > 0 && (
            <span className="popup__film-year">({primaryFilm.year})</span>
          )}
        </div>
      )}

      <div className="popup__body">
        <div className="popup__type-badge">
          <span>{TYPE_ICONS[location.type]}</span>
          <span>{TYPE_LABELS[location.type]}</span>
        </div>

        <h3 className="popup__name">{location.name}</h3>
        <p className="popup__name-jp">{location.nameJp}</p>

        <p className="popup__prefecture">
          <span className="popup__prefecture-icon">📍</span>
          {location.prefecture}
        </p>

        <p className="popup__description">{location.description}</p>

        {location.filmIds.length > 1 && (
          <div className="popup__films">
            <span className="popup__films-label">También en:</span>
            <div className="popup__films-list">
              {location.filmIds.slice(1).map((fid) => {
                const film = FILMS_MAP[fid];
                if (!film) return null;
                return (
                  <span
                    key={fid}
                    className="popup__film-chip"
                    style={{ borderColor: film.color, color: film.color }}
                  >
                    {film.title}
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
