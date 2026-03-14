
import React from 'react';
import Character from './components/Character';
import PonyCharacter from './components/PonyCharacter';
import DwarfCharacter from './components/DwarfCharacter';
import OfficeCharacter from './components/OfficeCharacter';
import type { WorldTheme } from './ThemeContext';

export const worldStyles: Record<WorldTheme, { cardBorder: string; previewBg: string; }> = {
  fantasy: { cardBorder: 'border-amber-600', previewBg: 'bg-gradient-to-br from-stone-900 to-stone-700' },
  cyberpunk: { cardBorder: 'border-green-500', previewBg: 'bg-gradient-to-br from-gray-950 to-cyan-900' },
  pony: { cardBorder: 'border-pink-400', previewBg: 'bg-gradient-to-br from-pink-300 to-sky-200' },
  office: { cardBorder: 'border-blue-600', previewBg: 'bg-gradient-to-br from-slate-300 to-slate-200' }
};

export const worldCharacters: Record<WorldTheme, React.ReactNode> = {
    fantasy: React.createElement(DwarfCharacter, { isDrinking: false, harmfulness: 10 }),
    cyberpunk: React.createElement(Character, { isDrinking: false, harmfulness: 10 }),
    pony: React.createElement(PonyCharacter, { isDrinking: false, harmfulness: 10 }),
    office: React.createElement(OfficeCharacter, { isDrinking: false, harmfulness: 10 })
};
