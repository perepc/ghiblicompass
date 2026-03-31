import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from './index';
import type { Lang, Translations } from './index';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <K extends keyof Translations>(key: K) => Translations[K];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  function t<K extends keyof Translations>(key: K): Translations[K] {
    return translations[lang][key] as Translations[K];
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
