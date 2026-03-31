import { useState } from 'react';
import { Header } from './components/Header/Header';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { GhibliMap } from './components/GhibliMap/GhibliMap';
import { useFilters } from './hooks/useFilters';
import { LOCATIONS } from './data/locations';
import './App.css';

export default function App() {
  const { filters, filteredLocations, toggleFilm, toggleType, clearAll } =
    useFilters();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Header
        visibleCount={filteredLocations.length}
        totalCount={LOCATIONS.length}
      />

      <div className="app__body">
        {/* Mobile sidebar toggle */}
        <button
          className="app__sidebar-toggle"
          onClick={() => setSidebarOpen((o) => !o)}
          aria-label="Abrir/cerrar panel de filtros"
        >
          {sidebarOpen ? '✕' : '☰'} Filtros
        </button>

        {/* Desktop: sidebar always visible; Mobile: toggled */}
        <div
          className={`app__sidebar ${sidebarOpen ? 'app__sidebar--open' : ''}`}
        >
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
          <GhibliMap locations={filteredLocations} />
        </main>
      </div>
    </div>
  );
}
