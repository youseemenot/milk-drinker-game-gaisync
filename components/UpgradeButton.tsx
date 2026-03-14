import React from 'react';
import { useTheme } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';

interface UpgradeButtonProps {
  onUpgrade: () => void;
  cost: number;
  currentWork: number;
  currentLevel: number;
  maxLevel: number;
  drinkConfig: {
    upgradeMax: string;
    upgradeName: string;
  };
  workUnitConfig: {
    costName: string;
  };
}

const UpgradeButton: React.FC<UpgradeButtonProps> = ({ onUpgrade, cost, currentWork, currentLevel, maxLevel, drinkConfig, workUnitConfig }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const T_PANEL = t.actionsPanel;
  const capitalizedName = drinkConfig.upgradeName.charAt(0).toUpperCase() + drinkConfig.upgradeName.slice(1);

  if (currentLevel >= maxLevel) {
    return (
      <div className="text-center">
        <div className="px-6 py-3 bg-green-200 text-green-800 font-semibold rounded-lg shadow-md border border-green-300 text-base">
          {T_PANEL.upgrade.maxLevel(capitalizedName)}
        </div>
      </div>
    );
  }

  const canAfford = currentWork >= cost;
  
  const buttonClasses = `w-full px-6 py-3 font-bold text-lg rounded-lg shadow-lg focus:outline-none transition-all duration-300 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed disabled:shadow-inner transform hover:scale-105 active:scale-100 ${
    canAfford ? `${theme.button.upgrade.bg} ${theme.button.upgrade.hover} ${theme.button.upgrade.ring} ${theme.button.upgrade.text}` : ''
  }`;

  return (
    <button
      onClick={onUpgrade}
      disabled={!canAfford}
      className={buttonClasses}
      aria-label={T_PANEL.upgrade.ariaLabel(drinkConfig.upgradeName, currentLevel + 2, cost, workUnitConfig.costName)}
    >
      {T_PANEL.upgrade.buttonText(drinkConfig.upgradeName, cost, workUnitConfig.costName)}
    </button>
  );
};

export default UpgradeButton;