import React from 'react';
import { useTranslation } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import { GOAL_COSTS, MAX_GOALS } from '../gameConfig';
import type { WorldTheme } from '../ThemeContext';

interface GoalsPanelProps {
  worldTheme: WorldTheme;
  completedCount: number;
  currentWork: number;
  onCompleteGoal: () => void;
}

const GoalsPanel: React.FC<GoalsPanelProps> = ({ worldTheme, completedCount, currentWork, onCompleteGoal }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const T_PANEL = t.actionsPanel;
  const worldGoals = t.worlds[worldTheme].goals;
  const workUnitConfig = t.worlds[worldTheme].workUnit;
  const nextGoalIndex = completedCount;
  const nextGoalCost = GOAL_COSTS[nextGoalIndex];
  const canAffordNext = currentWork >= nextGoalCost;
  const allGoalsCompleted = completedCount >= MAX_GOALS;
  const currentGoalNumber = Math.min(completedCount + 1, MAX_GOALS);

  const buttonClasses = `w-full px-4 py-2 font-bold text-base rounded-lg shadow-lg focus:outline-none transition-all duration-300 disabled:bg-gray-400/50 disabled:text-white/70 disabled:cursor-not-allowed disabled:shadow-inner transform hover:scale-105 active:scale-100 ${
    canAffordNext ? `${theme.button.upgrade.bg} ${theme.button.upgrade.hover} ${theme.button.upgrade.ring} ${theme.button.upgrade.text}` : 'bg-gray-500 text-white'
  }`;

  return (
    <div className={`p-3 rounded-lg shadow-md border transition-colors duration-500 ${theme.panel.bg} border-slate-200/50`}>
      <h3 className={`text-center font-bold mb-2 text-lg ${theme.panel.text}`}>{T_PANEL.goal.title(currentGoalNumber, MAX_GOALS)}</h3>
      <ul className="space-y-1 mb-3 text-sm">
        {worldGoals.map((goal, index) => (
          <li 
            key={index} 
            className={`flex items-center transition-all duration-300 ${index < completedCount ? `${theme.panel.subtext} line-through` : theme.panel.text}`}
          >
            <span className={`mr-2 font-bold ${index < completedCount ? 'text-green-500' : 'text-amber-500'}`}>
              {index < completedCount ? '✔' : '•'}
            </span>
            <span>{goal} - </span>
            <span className="font-semibold ml-1">{GOAL_COSTS[index]} {workUnitConfig.costName}</span>
          </li>
        ))}
      </ul>
      {allGoalsCompleted ? (
        <div className="text-center px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg shadow-md border border-green-300 text-base">
          {T_PANEL.goal.allCompleted}
        </div>
      ) : (
        <button
          onClick={onCompleteGoal}
          disabled={!canAffordNext}
          className={buttonClasses}
        >
          {T_PANEL.goal.buttonText(nextGoalCost, workUnitConfig.costName)}
        </button>
      )}
    </div>
  );
};

export default GoalsPanel;