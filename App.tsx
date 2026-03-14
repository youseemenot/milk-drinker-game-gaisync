
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Character from './components/Character';
import PonyCharacter from './components/PonyCharacter';
import DwarfCharacter from './components/DwarfCharacter';
import OfficeCharacter from './components/OfficeCharacter';
import DrinkButton from './components/DrinkButton';
import HarmfulnessBar from './components/HarmfulnessBar';
import StatsDisplay from './components/StatsDisplay';
import ActionsPanel from './components/ActionsPanel';
import IntroScreen from './components/IntroScreen';
import GameOverScreen from './components/GameOverScreen';
import VictoryScreen from './components/VictoryScreen';
import HelpModal from './components/HelpModal';
import WorldSelectionScreen from './components/WorldSelectionScreen';
import AuthorsScreen from './components/AuthorsScreen';
import AboutGameScreen from './components/AboutGameScreen';
import { ThemeProvider, themes, defaultTheme } from './ThemeContext';
import type { WorldTheme } from './ThemeContext';
import {
  HARM_INCREMENT,
  HARM_UPDATE_INTERVAL_MS,
  MAX_MILK_LEVEL,
  MAX_GOALS,
  GOAL_COSTS,
  calculateUpgradeCost,
  calculateMilkCost,
  calculateRecovery,
} from './gameConfig';
import { useTranslation } from './LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

type GameState = 'intro' | 'worldSelection' | 'playing' | 'gameOver' | 'authors' | 'victory' | 'aboutGame';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [isDrinking, setIsDrinking] = useState(false);
  const [harmfulness, setHarmfulness] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [workDone, setWorkDone] = useState(0);
  const [spentWorkPoints, setSpentWorkPoints] = useState(0);
  const [milkDrank, setMilkDrank] = useState(0);
  const [milkLevel, setMilkLevel] = useState(0);
  const [completedGoalsCount, setCompletedGoalsCount] = useState(0);
  const [gameState, setGameState] = useState<GameState>('worldSelection');
  const [worldTheme, setWorldTheme] = useState<WorldTheme>('pony');
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => setIsPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (gameState !== 'playing' || !isPageVisible) return;

    const interval = setInterval(() => {
      if (!isDrinking) {
        setHarmfulness(prev => {
          const newHarm = Math.min(100, prev + HARM_INCREMENT);
          if (newHarm >= 100) {
            setGameState('gameOver');
            return 100;
          }
          return newHarm;
        });
      }
    }, HARM_UPDATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isDrinking, gameState, isPageVisible]);

  useEffect(() => {
    if (gameState !== 'playing' || !isPageVisible) return;
    const timeInterval = setInterval(() => {
      setWorkTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [gameState, isPageVisible]);

  const happinessLevel = useMemo(() => {
      if (harmfulness < 20) return 4;
      if (harmfulness < 40) return 3;
      if (harmfulness < 60) return 2;
      if (harmfulness < 80) return 1;
      return 0;
  }, [harmfulness]);

  useEffect(() => {
    if (gameState !== 'playing' || happinessLevel === 0 || !isPageVisible) {
      return;
    }

    let workIntervalTime: number;
    switch (happinessLevel) {
      case 4: workIntervalTime = 5000; break;
      case 3: workIntervalTime = 7000; break;
      case 2: workIntervalTime = 9000; break;
      case 1: workIntervalTime = 12000; break;
      default: return;
    }
    
    const workInterval = setInterval(() => {
      setWorkDone(prev => prev + 1);
    }, workIntervalTime);

    return () => clearInterval(workInterval);
  }, [gameState, happinessLevel, isPageVisible]);


  const milkCost = useMemo(() => calculateMilkCost(milkLevel), [milkLevel]);
  const canAffordMilk = workDone >= milkCost;

  const handleDrink = useCallback(() => {
    if (isDrinking || gameState !== 'playing' || !canAffordMilk) {
      return;
    }

    setWorkDone(prev => prev - milkCost);
    setSpentWorkPoints(prev => prev + milkCost);
    setIsDrinking(true);

    const reduction = calculateRecovery(milkLevel);
    setHarmfulness(prev => Math.max(0, prev - reduction));
    setMilkDrank(prev => prev + 1);
    
    setTimeout(() => {
      setIsDrinking(false);
    }, 2000);
  }, [isDrinking, gameState, milkLevel, canAffordMilk, milkCost]);

  const handleUpgradeMilk = useCallback(() => {
    const cost = calculateUpgradeCost(milkLevel);
    if (workDone >= cost && milkLevel < MAX_MILK_LEVEL) {
      setWorkDone(prev => prev - cost);
      setSpentWorkPoints(prev => prev + cost);
      setMilkLevel(prev => prev + 1);
    }
  }, [workDone, milkLevel]);

  const handleCompleteGoal = useCallback(() => {
    if (completedGoalsCount >= MAX_GOALS) return;

    const cost = GOAL_COSTS[completedGoalsCount];
    if (workDone >= cost) {
      setWorkDone(prev => prev - cost);
      setSpentWorkPoints(prev => prev + cost);
      setCompletedGoalsCount(prev => prev + 1);
    }
  }, [workDone, completedGoalsCount]);

  useEffect(() => {
    if (completedGoalsCount >= MAX_GOALS) {
      setGameState('victory');
    }
  }, [completedGoalsCount]);
  
  const startGame = useCallback(() => {
    setHarmfulness(0);
    setWorkTime(0);
    setWorkDone(0);
    setSpentWorkPoints(0);
    setMilkDrank(0);
    setMilkLevel(0);
    setCompletedGoalsCount(0);
    setIsDrinking(false);
    setIsHelpVisible(false);
    setGameState('playing');
  }, []);

  const handleSelectWorld = useCallback((theme: WorldTheme) => {
    setWorldTheme(theme);
    setGameState('intro');
  }, []);
  
  const handleRestart = useCallback(() => {
    setGameState('worldSelection');
  }, []);

  const handleShowAuthors = useCallback(() => {
    setGameState('authors');
  }, []);

  const handleShowAboutGame = useCallback(() => {
    setGameState('aboutGame');
  }, []);

  const toggleHelpModal = useCallback(() => {
    setIsHelpVisible(prev => !prev);
  }, []);
  
  if (gameState === 'authors') {
    return <AuthorsScreen onGoBack={handleRestart} />;
  }

  if (gameState === 'aboutGame') {
    return <AboutGameScreen onGoBack={handleRestart} />;
  }
  
  if (gameState === 'worldSelection') {
    return <WorldSelectionScreen onSelect={handleSelectWorld} onShowAuthors={handleShowAuthors} onShowAboutGame={handleShowAboutGame} />;
  }

  if (gameState === 'intro') {
    return <IntroScreen worldTheme={worldTheme} onStart={startGame} onGoBack={handleRestart} />;
  }

  const upgradeCost = calculateUpgradeCost(milkLevel);
  const totalWorkDone = workDone + spentWorkPoints;
  const selectedTheme = themes[worldTheme] || defaultTheme;
  const selectedWorldTexts = t.worlds[worldTheme];
  const drinkConfig = selectedWorldTexts.drink;
  const workUnitConfig = selectedWorldTexts.workUnit;

  if (gameState === 'victory') {
    return (
      <ThemeProvider value={selectedTheme}>
        <VictoryScreen 
          workTime={workTime} 
          worldTheme={worldTheme} 
          onRestart={handleRestart} 
        />
      </ThemeProvider>
    );
  }

  const renderCharacter = () => {
    if (gameState === 'gameOver') {
      return (
        <GameOverScreen 
          totalWorkDone={totalWorkDone} 
          milkDrank={milkDrank} 
          worldTheme={worldTheme}
          onRestart={handleRestart} 
        />
      );
    }
    
    const props = { isDrinking, harmfulness };

    switch (worldTheme) {
      case 'pony':
        return <PonyCharacter {...props} />;
      case 'fantasy':
        return <DwarfCharacter {...props} />;
      case 'office':
        return <OfficeCharacter {...props} />;
      default:
        return <Character {...props} />;
    }
  };

  return (
    <ThemeProvider value={selectedTheme}>
      <main className={`flex flex-col items-center justify-center min-h-screen font-sans p-4 overflow-hidden relative transition-colors duration-500 ${selectedTheme.mainBg}`}>
        {(gameState === 'playing' || gameState === 'gameOver') && (
          <div className="absolute top-4 right-4 flex gap-2 z-10 items-center">
            <LanguageSwitcher />
            {gameState === 'playing' && (
              <>
                <button
                  onClick={handleRestart}
                  title={t.game.backToWorlds}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${selectedTheme.helpIcon.bg} ${selectedTheme.helpIcon.hoverBg} ${selectedTheme.helpIcon.text}`}
                  aria-label={t.game.backToWorlds}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </button>
                <button
                  onClick={toggleHelpModal}
                  title={t.game.help}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl shadow-md transition-all duration-300 ${selectedTheme.helpIcon.bg} ${selectedTheme.helpIcon.hoverBg} ${selectedTheme.helpIcon.text}`}
                  aria-label={t.game.help}
                >
                  ?
                </button>
              </>
            )}
          </div>
        )}

        {isHelpVisible && <HelpModal onClose={toggleHelpModal} drinkConfig={drinkConfig} workUnitConfig={workUnitConfig} />}

        <div className="text-center mb-2">
          <h1 className={`text-4xl font-bold ${selectedTheme.heading}`}>{selectedWorldTexts.title}</h1>
          <p className={selectedTheme.subheading}>{selectedWorldTexts.subtitle}</p>
        </div>
        
        <StatsDisplay
          workTime={workTime}
          workDone={workDone}
          milkDrank={milkDrank}
          milkLevel={milkLevel + 1}
          drinkConfig={drinkConfig}
          workUnitConfig={workUnitConfig}
        />

        {gameState === 'playing' && (
          <div className="w-full max-w-sm my-2">
            <ActionsPanel
              worldTheme={worldTheme}
              onUpgrade={handleUpgradeMilk}
              upgradeCost={upgradeCost}
              currentWork={workDone}
              currentLevel={milkLevel}
              onCompleteGoal={handleCompleteGoal}
              completedCount={completedGoalsCount}
            />
          </div>
        )}

        <HarmfulnessBar percentage={harmfulness} worldTheme={worldTheme} />

        <div className="w-full max-w-md flex flex-col items-center justify-center flex-grow -mt-4">
          {renderCharacter()}
        </div>

        <div className="flex-shrink-0 py-8 h-28 flex items-center justify-center">
          {gameState === 'playing' && (
            <DrinkButton
              onClick={handleDrink}
              isDrinking={isDrinking}
              canAfford={canAffordMilk}
              cost={milkCost}
              drinkConfig={drinkConfig}
              workUnitConfig={workUnitConfig}
            />
          )}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
