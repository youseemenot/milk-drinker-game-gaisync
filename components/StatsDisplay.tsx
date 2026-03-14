import React from 'react';
import { useTheme } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';

interface StatsDisplayProps {
  workTime: number;
  workDone: number;
  milkDrank: number;
  milkLevel: number;
  drinkConfig: {
    statName: string;
    levelName: string;
  };
  workUnitConfig: {
    statName: string;
  };
}

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const StatsDisplay: React.FC<StatsDisplayProps> = ({ workTime, workDone, milkDrank, milkLevel, drinkConfig, workUnitConfig }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div className={`w-full max-w-sm flex justify-around text-center p-3 rounded-lg shadow-md border border-slate-200/50 transition-colors duration-500 ${theme.panel.bg}`}>
      <div className="px-2">
        <p className={`text-xs sm:text-sm font-medium ${theme.panel.subtext}`}>{t.game.stats.workTime}</p>
        <p className={`font-bold text-base sm:text-lg ${theme.panel.text}`} aria-label={`${t.game.stats.workTime}: ${formatTime(workTime)}`}>
          {formatTime(workTime)}
        </p>
      </div>
      <div className="px-2 border-x border-slate-300/50">
        <p className={`text-xs sm:text-sm font-medium ${theme.panel.subtext}`}>{workUnitConfig.statName}</p>
        <p className={`font-bold text-base sm:text-lg ${theme.panel.text}`} aria-label={`${workUnitConfig.statName}: ${workDone}`}>
          {workDone}
        </p>
      </div>
      <div className="px-2">
        <p className={`text-xs sm:text-sm font-medium ${theme.panel.subtext}`}>{drinkConfig.statName}</p>
        <p className={`font-bold text-base sm:text-lg ${theme.panel.text}`} aria-label={`${drinkConfig.statName}: ${milkDrank}`}>
          {milkDrank}
        </p>
      </div>
      <div className="px-2 border-l border-slate-300/50">
        <p className={`text-xs sm:text-sm font-medium ${theme.panel.subtext}`}>{drinkConfig.levelName}</p>
        <p className={`font-bold text-base sm:text-lg ${theme.panel.text}`} aria-label={`${drinkConfig.levelName}: ${milkLevel}`}>
          {milkLevel}
        </p>
      </div>
    </div>
  );
};

export default StatsDisplay;
