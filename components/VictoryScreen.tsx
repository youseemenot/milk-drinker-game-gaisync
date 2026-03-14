import React, { useState, useCallback } from 'react';
import { useTranslation } from '../LanguageContext';
import { useTheme, type WorldTheme } from '../ThemeContext';
import Character from './Character';
import PonyCharacter from './PonyCharacter';
import DwarfCharacter from './DwarfCharacter';
import OfficeCharacter from './OfficeCharacter';

interface VictoryScreenProps {
  workTime: number;
  worldTheme: WorldTheme;
  onRestart: () => void;
}

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const Confetti: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 3}s`,
        animationDelay: `${Math.random() * 4}s`,
      };
      const color = ['bg-yellow-400', 'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500'][i % 5];
      return <div key={i} className={`absolute top-[-10px] w-2 h-4 ${color} animate-confetti`} style={style}></div>;
    })}
  </div>
);

const VictoryScreen: React.FC<VictoryScreenProps> = ({ workTime, worldTheme, onRestart }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  const worldText = t.worlds[worldTheme];
  const shareText = worldText.shareVictory(formatTime(workTime), worldText.title);
  const shareUrl = "https://milk-drinker-game.fun";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [shareText]);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.victoryScreen.title,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      handleCopy();
    }
  }, [shareText, t, handleCopy]);

  const renderCharacter = () => {
    const props = { isDrinking: false, harmfulness: 0, isVictorious: true };
    switch (worldTheme) {
      case 'pony': return <PonyCharacter {...props} />;
      case 'fantasy': return <DwarfCharacter {...props} />;
      case 'office': return <OfficeCharacter {...props} />;
      case 'cyberpunk':
      default: return <Character {...props} />;
    }
  };

  return (
    <main className={`relative flex flex-col items-center justify-center min-h-screen font-sans p-4 overflow-hidden transition-colors duration-500 ${theme.mainBg}`}>
      <Confetti />
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-lg">
        <div className="w-full max-w-md flex flex-col items-center justify-center flex-grow -mt-4">
            {renderCharacter()}
        </div>
        <div className={`w-full mt-6 p-6 rounded-lg shadow-2xl animate-fade-in-up transition-colors duration-500 ${theme.gameOver.bg}`}>
            <h1 className={`text-4xl font-black drop-shadow-lg ${theme.heading}`}>{t.victoryScreen.title}</h1>
            <p className={`mt-2 text-xl ${theme.panel.text}`}>
                {t.victoryScreen.message(formatTime(workTime))}
            </p>
            <p className={`mt-4 text-md ${theme.subheading}`}>
                {worldText.victoryText}
            </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
            onClick={onRestart}
            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 active:scale-100"
            >
            {t.victoryScreen.playAgain}
            </button>
            {navigator.share && (
                <button onClick={handleShare} className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 active:scale-100">
                    {t.gameOver.share}
                </button>
            )}
            <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-6 py-3 bg-purple-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 active:scale-100"
            >
            {copied ? t.gameOver.copied : t.gameOver.copy}
            </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        @keyframes confetti {
            0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
            animation-name: confetti;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
      `}</style>
    </main>
  );
};

export default VictoryScreen;
