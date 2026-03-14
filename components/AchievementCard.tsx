import React from 'react';
import type { WorldTheme } from '../ThemeContext';
import { themes } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';
import { worldStyles, worldCharacters } from '../worldConfig';


interface AchievementCardProps {
  worldTheme: WorldTheme;
  totalWorkDone: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ worldTheme, totalWorkDone }) => {
  const { t } = useTranslation();
  const theme = themes[worldTheme];
  const worldConfig = t.worlds[worldTheme];
  
  const getRank = (theme: WorldTheme, score: number): string => {
    const themeRanks = t.worlds[theme].ranks;
    let currentRank = themeRanks[0].title;
    for (const rank of themeRanks) {
        if (score >= rank.score) {
            currentRank = rank.title;
        } else {
            break;
        }
    }
    return currentRank;
  };
  
  const rankTitle = getRank(worldTheme, totalWorkDone);

  return (
    <div className={`w-full mt-6 rounded-2xl shadow-xl animate-fade-in-up border-4 ${theme.mainBg} ${theme.panel.bg} ${worldStyles[worldTheme].cardBorder}`} style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center">
            {/* Character Preview */}
            <div className={`w-2/5 h-48 relative flex items-center justify-center overflow-hidden rounded-l-lg ${worldStyles[worldTheme].previewBg}`}>
                <div className="transform scale-[0.5] mt-[-1rem]">
                    {worldCharacters[worldTheme]}
                </div>
            </div>
            {/* Stats */}
            <div className="w-3/5 p-4 text-left">
                <p className={`font-bold text-xl drop-shadow ${theme.heading}`}>
                    {rankTitle}
                </p>
                <p className={`mt-2 text-3xl font-black ${theme.panel.text}`}>
                    {totalWorkDone}
                </p>
                <p className={`text-sm ${theme.panel.subtext}`}>
                    {worldConfig.workUnit.statName}
                </p>

                <p className={`mt-4 text-lg font-semibold ${theme.subheading}`}>{t.achievementCard.challenge}</p>
                <p className="text-xs text-slate-500">milk-drinker-game.fun</p>
            </div>
        </div>
    </div>
  );
};

export default AchievementCard;
