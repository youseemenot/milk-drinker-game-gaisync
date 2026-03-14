

import React from 'react';
import type { WorldTheme } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';
import { worldStyles, worldCharacters } from '../worldConfig';
import LanguageSwitcher from './LanguageSwitcher';

interface WorldSelectionScreenProps {
  onSelect: (theme: WorldTheme) => void;
  onShowAuthors: () => void;
  onShowAboutGame: () => void;
}

const WorldSelectionScreen: React.FC<WorldSelectionScreenProps> = ({ onSelect, onShowAuthors, onShowAboutGame }) => {
  const { t } = useTranslation();
  const worldIds: WorldTheme[] = ['fantasy', 'cyberpunk', 'pony', 'office'];

  const worlds = worldIds.map(id => ({
    id,
    name: t.worlds[id].selectionName,
    description: t.worlds[id].selectionDescription,
    character: worldCharacters[id],
    styles: {
        ...worldStyles[id],
        cardBg: id === 'fantasy' ? 'bg-stone-800' : id === 'cyberpunk' ? 'bg-gray-900' : id === 'pony' ? 'bg-purple-200' : 'bg-slate-100',
        button: id === 'fantasy' ? 'bg-yellow-800 hover:bg-yellow-700 text-amber-200' : id === 'cyberpunk' ? 'bg-green-600 hover:bg-green-500 text-white' : id === 'pony' ? 'bg-sky-400 hover:bg-sky-500 text-white' : 'bg-blue-700 hover:bg-blue-600 text-white',
        title: id === 'fantasy' ? 'text-amber-400' : id === 'cyberpunk' ? 'text-green-400' : id === 'pony' ? 'text-purple-500' : 'text-slate-800',
        descriptionText: id === 'fantasy' ? 'text-stone-400' : id === 'cyberpunk' ? 'text-green-600' : id === 'pony' ? 'text-pink-500' : 'text-slate-600',
    }
  }));

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans p-8 text-center">
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10">
        <LanguageSwitcher />
      </div>

      <div className="w-full" /> {/* Spacer for top */}
      
      <main className="max-w-7xl w-full animate-fade-in-down">
        <h1 className="text-5xl font-bold text-amber-300 mb-4 drop-shadow-lg">
          {t.worldSelection.title}
        </h1>
        <p className="text-lg text-slate-400 mb-12">
          {t.worldSelection.subtitle}
        </p>
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {worlds.map((world, index) => (
            <div
              key={world.id}
              className={`flex flex-col w-full max-w-[17rem] rounded-2xl border-4 shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 overflow-hidden ${world.styles.cardBorder} ${world.styles.cardBg}`}
              style={{ animation: `fade-in-down 0.8s ease-out forwards ${0.5 + index * 0.15}s`, opacity: 0 }}
            >
              {/* Character Preview */}
              <div className={`h-56 relative flex items-center justify-center overflow-hidden ${world.styles.previewBg}`}>
                 <div className="transform scale-[0.6] mt-[-1.5rem]">
                   {world.character}
                 </div>
              </div>

              {/* World Info */}
              <div className="p-4 flex-grow flex flex-col">
                <h2 className={`text-2xl font-bold mb-2 ${world.styles.title}`}>{world.name}</h2>
                <p className={`flex-grow text-sm ${world.styles.descriptionText}`}>{world.description}</p>
              </div>

              {/* Select Button */}
              <div className="p-4 pt-0">
                 <button
                    onClick={() => onSelect(world.id)}
                    className={`w-full px-4 py-2 font-bold text-base rounded-lg shadow-lg transition-colors duration-200 ${world.styles.button}`}
                 >
                    {t.worldSelection.selectButton}
                 </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full text-center py-4 flex justify-center items-center gap-6">
        <button
          onClick={onShowAboutGame}
          className="text-slate-500 hover:text-amber-300 transition-colors duration-300 text-sm"
        >
          {t.aboutGame.button}
        </button>
        <button
          onClick={onShowAuthors}
          className="text-slate-500 hover:text-amber-300 transition-colors duration-300 text-sm"
        >
          {t.authors}
        </button>
      </footer>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WorldSelectionScreen;