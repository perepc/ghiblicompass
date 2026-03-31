import type { Lang } from '../../i18n';
import { useLanguage } from '../../i18n/LanguageContext';
import './Header.css';

interface HeaderProps {
  visibleCount: number;
  totalCount: number;
}

export function Header({ visibleCount, totalCount }: HeaderProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__compass">🧭</span>
        <div className="header__titles">
          <h1 className="header__title">Ghibli Compass</h1>
          <p className="header__subtitle">{t('subtitle')}</p>
        </div>
      </div>

      <div className="header__right">
        <div className="header__counter">
          <span className="header__counter-number">{visibleCount}</span>
          <span className="header__counter-label"> / {totalCount} {t('places')}</span>
        </div>

        <div className="lang-switcher">
          {(['es', 'en'] as Lang[]).map((l) => (
            <button
              key={l}
              className={`lang-switcher__btn ${lang === l ? 'lang-switcher__btn--active' : ''}`}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
