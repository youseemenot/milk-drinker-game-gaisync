// Константы для логики вредности
export const HARM_DURATION_SECONDS = 120; // 2 минуты для достижения 100%
export const HARM_UPDATE_INTERVAL_MS = 100; // Обновление 10 раз в секунду
export const HARM_INCREMENT = (100 / HARM_DURATION_SECONDS) * (HARM_UPDATE_INTERVAL_MS / 1000);

// Константы для системы улучшения молока
export const MAX_MILK_LEVEL = 18; // 10% (база) + 18 * 5% = 100%
export const calculateUpgradeCost = (level: number): number => (level + 1) * 5;

// Константы для стоимости молока
export const calculateMilkCost = (level: number): number => {
  if (level === 0) return 0; // Первый уровень бесплатный
  return Math.floor((level + 1) / 2); // 1 очко за 2-3, 2 за 4-5 и т.д.
};

// Расчет восстановления
export const calculateRecovery = (level: number): number => 10 + 5 * level;

// Константы для победной цели
export const MAX_GOALS = 5;
export const GOAL_COSTS = [5, 10, 20, 35, 50];