
import React from 'react';
import { useTheme, type WorldTheme } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';

interface HarmfulnessBarProps {
  percentage: number;
  worldTheme: WorldTheme;
}

const HarmfulnessBar: React.FC<HarmfulnessBarProps> = ({ percentage, worldTheme }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const cappedPercentage = Math.min(100, Math.max(0, percentage));

  const getBarColor = (p: number): string => {
    if (p < 40) return 'bg-green-500';
    if (p < 70) return 'bg-yellow-400';
    return 'bg-red-600';
  };

  const barColor = getBarColor(cappedPercentage);
  const roundedPercentage = Math.round(cappedPercentage);
  
  // Use world-specific harmfulness text if available
  const harmfulnessText = t.worlds[worldTheme].harmfulnessText(roundedPercentage);
  const harmfulnessLabel = t.worlds[worldTheme].harmfulnessLabel;

  return (
    <div className="w-full max-w-sm px-4">
      <p className={`text-center font-semibold mb-2 ${theme.subheading}`} aria-live="polite">
        {harmfulnessText}
      </p>
      <div
        className="w-full bg-gray-300 rounded-full h-6 shadow-inner overflow-hidden border-2 border-gray-400"
        role="progressbar"
        aria-valuenow={cappedPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={harmfulnessLabel}
      >
        <div
          className={`h-full rounded-full transition-all duration-150 ease-linear ${barColor}`}
          style={{ width: `${cappedPercentage}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default HarmfulnessBar;
