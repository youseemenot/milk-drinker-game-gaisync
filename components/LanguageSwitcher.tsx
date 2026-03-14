import React from 'react';
import { useTranslation, Language } from '../LanguageContext';
import { useTheme } from '../ThemeContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const theme = useTheme();

  const switchLang = (lang: Language) => {
    setLanguage(lang);
  };

  const baseClasses = 'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 transform';
  const activeClasses = `${theme.helpIcon.bg} ${theme.helpIcon.text} scale-105 ring-2 ring-white/30`;
  const inactiveClasses = `bg-black/20 text-white/60 hover:bg-black/30 hover:text-white`;

  return (
    <div className="flex gap-2 p-1 bg-black/10 rounded-full">
      <button
        onClick={() => switchLang('en')}
        className={`${baseClasses} ${language === 'en' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLang('ru')}
        className={`${baseClasses} ${language === 'ru' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'ru'}
        title="Переключить на русский"
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
