
import React from 'react';
import { useTranslation } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import { GOAL_COSTS, MAX_GOALS, MAX_MILK_LEVEL } from '../gameConfig';
import type { WorldTheme } from '../ThemeContext';

interface ActionsPanelProps {
  worldTheme: WorldTheme;
  currentWork: number;
  onUpgrade: () => void;
  upgradeCost: number;
  currentLevel: number;
  onCompleteGoal: () => void;
  completedCount: number;
}

const ActionsPanel: React.FC<ActionsPanelProps> = ({
  worldTheme,
  currentWork,
  onUpgrade,
  upgradeCost,
  currentLevel,
  onCompleteGoal,
  completedCount,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const worldConfig = t.worlds[worldTheme];
  const drinkConfig = worldConfig.drink;
  const workUnitConfig = worldConfig.workUnit;
  const worldGoals = worldConfig.goals;
  
  const T_PANEL = t.actionsPanel;

  // --- Upgrade Logic ---
  const isMaxLevel = currentLevel >= MAX_MILK_LEVEL;
  const canAffordUpgrade = currentWork >= upgradeCost;
  const capitalizedUpgradeName = drinkConfig.upgradeName.charAt(0).toUpperCase() + drinkConfig.upgradeName.slice(1);
  const upgradeButtonClasses = `w-full px-4 py-2 font-bold text-base rounded-lg shadow-lg focus:outline-none transition-all duration-300 disabled:bg-gray-400/50 disabled:text-white/70 disabled:cursor-not-allowed disabled:shadow-inner transform hover:scale-105 active:scale-100 ${
    canAffordUpgrade ? `${theme.button.upgrade.bg} ${theme.button.upgrade.hover} ${theme.button.upgrade.ring} ${theme.button.upgrade.text}` : 'bg-gray-500 text-white'
  }`;
  
  // --- Goal Logic ---
  const isAllGoalsCompleted = completedCount >= MAX_GOALS;
  const nextGoalIndex = completedCount;
  const nextGoalCost = GOAL_COSTS[nextGoalIndex];
  const canAffordGoal = currentWork >= nextGoalCost;
  const currentGoalNumber = Math.min(completedCount + 1, MAX_GOALS);
  const goalButtonClasses = `w-full px-4 py-2 font-bold text-base rounded-lg shadow-lg focus:outline-none transition-all duration-300 disabled:bg-gray-400/50 disabled:text-white/70 disabled:cursor-not-allowed disabled:shadow-inner transform hover:scale-105 active:scale-100 ${
    canAffordGoal ? `${theme.button.upgrade.bg} ${theme.button.upgrade.hover} ${theme.button.upgrade.ring} ${theme.button.upgrade.text}` : 'bg-gray-500 text-white'
  }`;

  return (
    <div className={`p-3 rounded-lg shadow-md border space-y-3 transition-colors duration-500 ${theme.panel.bg} border-slate-200/50`}>
      {/* --- Upgrade Section --- */}
      <div className="text-center">
        {isMaxLevel ? (
          <div className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg shadow-md border border-green-300 text-base">
            {T_PANEL.upgrade.maxLevel(capitalizedUpgradeName)}
          </div>
        ) : (
          <button
            onClick={onUpgrade}
            disabled={!canAffordUpgrade}
            className={upgradeButtonClasses}
            aria-label={T_PANEL.upgrade.ariaLabel(drinkConfig.upgradeName, currentLevel + 2, upgradeCost, workUnitConfig.costName)}
          >
            {T_PANEL.upgrade.buttonText(drinkConfig.upgradeName, upgradeCost, workUnitConfig.costName)}
          </button>
        )}
      </div>

      {/* Divider */}
      <hr className="border-slate-300/30" />

      {/* --- Goal Section --- */}
      <div className="text-center">
        <h3 className={`font-bold mb-2 text-lg ${theme.panel.text}`}>
          {T_PANEL.goal.title(currentGoalNumber, MAX_GOALS)}
        </h3>

        {isAllGoalsCompleted ? (
          <div className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg shadow-md border border-green-300 text-base">
            {T_PANEL.goal.allCompleted}
          </div>
        ) : (
          <>
            <p className={`mb-2 ${theme.panel.text}`}>{worldGoals[nextGoalIndex]}</p>
            <button
              onClick={onCompleteGoal}
              disabled={!canAffordGoal}
              className={goalButtonClasses}
            >
              {T_PANEL.goal.buttonText(nextGoalCost, workUnitConfig.costName)}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ActionsPanel;
