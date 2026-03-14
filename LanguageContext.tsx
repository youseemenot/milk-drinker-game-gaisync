import React, { createContext, useState, useContext, useMemo } from 'react';
import { translations, ru } from './i18n';

export type Language = 'en' | 'ru';

// Using 'ru' as the template for type inference, as it's the original language and complete.
export type Translation = typeof ru; 

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English as requested

  const t = useMemo(() => translations[language] as Translation, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
