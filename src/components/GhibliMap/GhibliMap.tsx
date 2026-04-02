import { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { GhibliLocation, GhibliApiFilm } from '../../types';
import { FILMS_MAP } from '../../data/films';
import { LocationPopup } from '../LocationPopup/LocationPopup';
import { useLanguage } from '../../i18n/LanguageContext';
import 'leaflet/dist/leaflet.css';
import './GhibliMap.css';

// Fix Leaflet default icon paths with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function createGhibliIcon(color: string, isMultiFilm: boolean): L.DivIcon {
  const size = 26;
  const borderWidth = isMultiFilm ? 3 : 2;
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle
        cx="${size / 2}"
        cy="${size / 2}"
        r="${size / 2 - borderWidth}"
        fill="${color}"
        stroke="white"
        stroke-width="${borderWidth}"
        opacity="0.95"
      />
      ${
        isMultiFilm
          ? `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - borderWidth - 5}" fill="white" opacity="0.4" />`
          : ''
      }
    </svg>
  `;

  return L.divIcon({
    html: svgContent,
    className: 'ghibli-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2 + 4)],
  });
}

interface FitBoundsProps {
  locations: GhibliLocation[];
}

function FitBoundsOnChange({ locations }: FitBoundsProps) {
  const map = useMap();
  const prevCount = useRef(locations.length);

  useEffect(() => {
    if (locations.length === 0) return;
    if (locations.length === prevCount.current) return;
    prevCount.current = locations.length;

    const bounds = L.latLngBounds(
      locations.map((l) => l.coordinates as L.LatLngTuple)
    );
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
    }
  }, [locations, map]);

  return null;
}

interface GhibliMapProps {
  locations: GhibliLocation[];
  ghibliFilms: GhibliApiFilm[];
}

export function GhibliMap({ locations, ghibliFilms }: GhibliMapProps) {
  const { t } = useLanguage();

  return (
    <div className="ghibli-map-wrapper">
      <MapContainer
        center={[36.5, 136.0]}
        zoom={5}
        className="ghibli-map"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://maps.google.com">Google Maps</a>'
          url="https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['0', '1', '2', '3']}
          maxZoom={20}
        />

        <FitBoundsOnChange locations={locations} />

        {locations.map((loc) => {
          const primaryFilm = FILMS_MAP[loc.filmIds[0] ?? ''];
          const color = primaryFilm?.color ?? '#9E9E9E';
          const isMultiFilm = loc.filmIds.length > 1;
          const icon = createGhibliIcon(color, isMultiFilm);

          return (
            <Marker
              key={loc.id}
              position={loc.coordinates as L.LatLngTuple}
              icon={icon}
            >
              <Popup>
                <LocationPopup location={loc} ghibliFilms={ghibliFilms} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {locations.length === 0 && (
        <div className="ghibli-map__empty">
          <span className="ghibli-map__empty-icon">🗺️</span>
          <p>{t('noResults')}</p>
          <p>{t('tryOther')}</p>
        </div>
      )}
    </div>
  );
}
