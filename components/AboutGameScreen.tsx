
import React from 'react';
import { useTranslation } from '../LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const AboutGameScreen: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const { t } = useTranslation();
  const T_ABOUT = t.aboutGame;

  const sections = [
    { title: T_ABOUT.coreLoop.title, text: T_ABOUT.coreLoop.text },
    { title: T_ABOUT.upgrades.title, text: T_ABOUT.upgrades.text },
    { title: T_ABOUT.goal.title, text: T_ABOUT.goal.text },
    { title: T_ABOUT.worlds.title, text: T_ABOUT.worlds.text },
    { title: T_ABOUT.fairPlay.title, text: T_ABOUT.fairPlay.text },
    { title: T_ABOUT.languages.title, text: T_ABOUT.languages.text },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans p-6 sm:p-8 text-center overflow-y-auto">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-6">
          <button
            onClick={onGoBack}
            className="px-6 py-2 bg-amber-700/80 text-white font-bold rounded-lg shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all duration-300 transform hover:scale-105"
          >
            &larr; {t.authorsScreen.backButton}
          </button>
          <LanguageSwitcher />
        </div>

        {/* --- Main Content --- */}
        <section className="animate-fade-in-down text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-300 mb-4 drop-shadow-lg text-center">
            {T_ABOUT.title}
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12 text-center">
            {T_ABOUT.description}
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg"
                style={{ animation: `fade-in-up 0.7s ease-out forwards ${0.3 + index * 0.1}s`, opacity: 0 }}
              >
                <h2 className="text-2xl font-bold text-green-400 mb-3">{section.title}</h2>
                <p className="text-slate-300 whitespace-pre-line leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </section>
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
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default AboutGameScreen;
