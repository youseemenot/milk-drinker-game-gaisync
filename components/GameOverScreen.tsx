import React, { useState, useCallback } from 'react';
import Tombstone from './Tombstone';
import WiltedFlower from './WiltedFlower';
import FiredBox from './FiredBox';
import ScrapPile from './ScrapPile';
import AchievementCard from './AchievementCard';
import { useTheme } from '../ThemeContext';
import type { WorldTheme } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';

interface GameOverScreenProps {
  totalWorkDone: number;
  milkDrank: number;
  worldTheme: WorldTheme;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ totalWorkDone, milkDrank, worldTheme, onRestart }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const message = t.worlds[worldTheme].gameOver;
  const worldText = t.worlds[worldTheme];
  
  const shareText = worldText.share(totalWorkDone, worldText.workUnit.costName, worldText.title);
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
          title: t.gameOver.shareTitle(worldText.title),
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      handleCopy();
    }
  }, [shareText, worldText.title, t, handleCopy]);

  const renderIcon = () => {
    switch (worldTheme) {
      case 'pony': return <WiltedFlower />;
      case 'office': return <FiredBox />;
      case 'cyberpunk': return <ScrapPile />;
      case 'fantasy':
      default: return <Tombstone />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-lg">
      {renderIcon()}
      <div className={`w-full mt-6 p-4 rounded-lg shadow-xl animate-fade-in-up transition-colors duration-500 ${theme.gameOver.bg}`}>
        <h2 className={`text-2xl font-bold drop-shadow-lg ${theme.gameOver.heading}`}>{message.heading}</h2>
        <p 
          className={`mt-2 ${theme.gameOver.text}`} 
          dangerouslySetInnerHTML={{ __html: `${message.p1(totalWorkDone, milkDrank)} ${message.p2}` }}
        />
        <p className={`mt-4 text-sm italic ${theme.gameOver.subtext}`}>
          {message.subtext}
        </p>
      </div>

      <AchievementCard 
        worldTheme={worldTheme} 
        totalWorkDone={totalWorkDone}
      />

      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <button
          onClick={onRestart}
          className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 active:scale-100"
          aria-label={t.gameOver.tryAgain}
        >
          {t.gameOver.tryAgain}
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

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default GameOverScreen;
