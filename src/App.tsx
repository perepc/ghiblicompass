import { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useLanguage } from './i18n/LanguageContext';
import { Header } from './components/Header/Header';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { GhibliMap } from './components/GhibliMap/GhibliMap';
import { useFilters } from './hooks/useFilters';
import { useGhibliFilms } from './hooks/useGhibliFilms';
import { LOCATIONS } from './data/locations';
import './App.css';

function AppContent() {
  const { filters, filteredLocations, toggleFilm, toggleType, clearAll } = useFilters();
  const { t } = useLanguage();
  const ghibliFilms = useGhibliFilms();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header
        visibleCount={filteredLocations.length}
        totalCount={LOCATIONS.length}
      />

      <div className="app__body">
        <button
          className="app__sidebar-toggle"
          onClick={() => setSidebarOpen((o) => !o)}
          aria-label={t('toggleFilters')}
        >
          {sidebarOpen ? '✕' : '☰'} {t('toggleFilters')}
        </button>

        <div className={`app__sidebar ${sidebarOpen ? 'app__sidebar--open' : ''}`}>
          <FilterPanel
            filters={filters}
            onToggleFilm={toggleFilm}
            onToggleType={toggleType}
            onClearAll={clearAll}
            visibleCount={filteredLocations.length}
            totalCount={LOCATIONS.length}
          />
        </div>

        <main className="app__map">
          <GhibliMap locations={filteredLocations} ghibliFilms={ghibliFilms} />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
