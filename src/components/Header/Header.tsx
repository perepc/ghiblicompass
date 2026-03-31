import './Header.css';

interface HeaderProps {
  visibleCount: number;
  totalCount: number;
}

export function Header({ visibleCount, totalCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__compass">🧭</span>
        <div className="header__titles">
          <h1 className="header__title">Ghibli Compass</h1>
          <p className="header__subtitle">Mapa de localizaciones de Studio Ghibli en Japón</p>
        </div>
      </div>
      <div className="header__counter">
        <span className="header__counter-number">{visibleCount}</span>
        <span className="header__counter-label"> / {totalCount} lugares</span>
      </div>
    </header>
  );
}
