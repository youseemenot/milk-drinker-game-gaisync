import React from 'react';
import { useTheme } from '../ThemeContext';
import { useTranslation } from '../LanguageContext';

interface DrinkButtonProps {
  onClick: () => void;
  isDrinking: boolean;
  canAfford: boolean;
  cost: number;
  drinkConfig: {
    verb: string;
    name: string;
    drinkingText: string;
  };
  workUnitConfig: {
    costName: string;
  }
}

const DrinkButton: React.FC<DrinkButtonProps> = ({ onClick, isDrinking, canAfford, cost, drinkConfig, workUnitConfig }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDisabled = isDrinking || !canAfford;

  let buttonText;
  if (isDrinking) {
    buttonText = drinkConfig.drinkingText;
  } else if (cost > 0) {
    buttonText = t.game.drinkButton.withCost(drinkConfig.verb, drinkConfig.name, cost, workUnitConfig.costName);
  } else {
    buttonText = t.game.drinkButton.free(drinkConfig.verb, drinkConfig.name);
  }

  const buttonClasses = `px-8 py-4 text-white font-bold text-xl rounded-lg shadow-lg focus:outline-none transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-inner transform hover:scale-105 active:scale-100 ${
    isDisabled ? '' : `${theme.button.primary.bg} ${theme.button.primary.hover} ${theme.button.primary.ring}`
  }`;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
    >
      {buttonText}
    </button>
  );
};

export default DrinkButton;
