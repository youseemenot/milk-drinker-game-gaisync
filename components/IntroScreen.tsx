
import React from 'react';
import { type WorldTheme, themes } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

interface IntroScreenProps {
  onStart: () => void;
  worldTheme: WorldTheme;
  onGoBack: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart, worldTheme, onGoBack }) => {
  const { t } = useTranslation();
  const briefing = t.worlds[worldTheme].intro;
  const theme = themes[worldTheme];

  const buttonClasses = `px-10 py-5 text-white font-black text-2xl rounded-lg shadow-2xl focus:outline-none transition-all duration-300 transform hover:scale-110 active:scale-100 animate-pulse ${
    theme.button.primary.bg
  } ${theme.button.primary.hover} ${theme.button.primary.ring}`;

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen font-sans p-8 text-center transition-colors duration-500 ${theme.mainBg}`}>
      <div className="absolute top-4 right-4 z-10 flex gap-2 items-center">
        <LanguageSwitcher />
        <button
          onClick={onGoBack}
          title={t.game.backToWorlds}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${theme.helpIcon.bg} ${theme.helpIcon.hoverBg} ${theme.helpIcon.text}`}
          aria-label={t.game.backToWorlds}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </button>
      </div>

      <div className="max-w-3xl">
        <h1 className={`text-5xl font-bold mb-6 drop-shadow-lg animate-fade-in-down ${theme.heading}`} style={{ animationDelay: '0.2s' }}>
          {briefing.title}
        </h1>
        <p className={`text-lg mb-4 animate-fade-in-up ${theme.subheading}`} style={{ animationDelay: '0.5s' }}>
          {briefing.p1}
        </p>
        <p className={`text-lg mb-12 animate-fade-in-up ${theme.subheading}`} style={{ animationDelay: '0.8s' }}>
          {briefing.p2}
        </p>
        <button
          onClick={onStart}
          className={buttonClasses}
          aria-label={t.game.startGame}
        >
          {briefing.cta}
        </button>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default IntroScreen;
