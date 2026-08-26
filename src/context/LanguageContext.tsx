import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../i18n/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode | string) => void;
  t: TranslationDictionary;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aa_site_language') as LanguageCode;
      if (saved && TRANSLATIONS[saved]) {
        return saved;
      }
    }
    return 'EN';
  });

  const setLanguage = (newLang: LanguageCode | string) => {
    const upper = (newLang || 'EN').toUpperCase() as LanguageCode;
    const resolved: LanguageCode = TRANSLATIONS[upper] ? upper : 'EN';
    setLanguageState(resolved);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('aa_site_language', resolved);
      } catch {
        // ignore
      }
    }
  };

  const isRtl = language === 'AR';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language.toLowerCase();
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [language, isRtl]);

  const currentTranslations = TRANSLATIONS[language] || TRANSLATIONS.EN;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslations,
        isRtl,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: 'EN',
      setLanguage: () => {},
      t: TRANSLATIONS.EN,
      isRtl: false,
    };
  }
  return context;
};
