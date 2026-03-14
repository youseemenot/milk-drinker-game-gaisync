import React, { createContext, useContext } from 'react';

export type WorldTheme = 'fantasy' | 'cyberpunk' | 'pony' | 'office';

export interface Theme {
  mainBg: string;
  heading: string;
  subheading: string;
  panel: {
    bg: string;
    text: string;
    subtext: string;
  };
  button: {
    primary: {
      bg: string;
      hover: string;
      ring: string;
    };
    upgrade: {
      bg: string;
      hover: string;
      ring: string;
      text: string;
    };
  };
  helpIcon: {
    bg: string;
    hoverBg: string;
    text: string;
  };
  gameOver: {
    bg: string;
    heading: string;
    text: string;
    subtext: string;
  };
}

export const defaultTheme: Theme = {
  mainBg: 'bg-sky-100',
  heading: 'text-slate-800',
  subheading: 'text-slate-600',
  panel: {
    bg: 'bg-white/50',
    text: 'text-slate-800',
    subtext: 'text-slate-600',
  },
  button: {
    primary: {
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      ring: 'focus:ring-blue-300',
    },
    upgrade: {
      bg: 'bg-amber-500',
      hover: 'hover:bg-amber-600',
      ring: 'focus:ring-amber-300',
      text: 'text-white',
    },
  },
  helpIcon: {
    bg: 'bg-white/70',
    hoverBg: 'hover:bg-white',
    text: 'text-slate-700',
  },
  gameOver: {
    bg: 'bg-slate-800/90',
    heading: 'text-amber-300',
    text: 'text-slate-200',
    subtext: 'text-slate-400',
  },
};

export const themes: Record<WorldTheme, Theme> = {
  fantasy: {
    mainBg: 'bg-stone-900',
    heading: 'text-amber-400',
    subheading: 'text-stone-400',
    panel: {
      bg: 'bg-stone-800/60 border border-stone-700',
      text: 'text-amber-200',
      subtext: 'text-stone-400',
    },
    button: {
      primary: { bg: 'bg-yellow-800', hover: 'hover:bg-yellow-900', ring: 'focus:ring-yellow-500' },
      upgrade: { bg: 'bg-amber-600', hover: 'hover:bg-amber-700', ring: 'focus:ring-amber-400', text: 'text-white' },
    },
    helpIcon: { bg: 'bg-stone-800/80', hoverBg: 'hover:bg-stone-700', text: 'text-amber-300' },
    gameOver: { bg: 'bg-black/80', heading: 'text-amber-400', text: 'text-stone-300', subtext: 'text-stone-500' },
  },
  cyberpunk: {
    mainBg: 'bg-gray-950',
    heading: 'text-green-400',
    subheading: 'text-green-600',
    panel: {
      bg: 'bg-gray-900/50 border border-green-700',
      text: 'text-green-300',
      subtext: 'text-green-500',
    },
    button: {
      primary: { bg: 'bg-green-600', hover: 'hover:bg-green-700', ring: 'focus:ring-green-400' },
      upgrade: { bg: 'bg-lime-400', hover: 'hover:bg-lime-500', ring: 'focus:ring-lime-300', text: 'text-black' },
    },
    helpIcon: { bg: 'bg-gray-800/70', hoverBg: 'hover:bg-gray-700', text: 'text-green-400' },
    gameOver: { bg: 'bg-black/80', heading: 'text-green-400', text: 'text-gray-300', subtext: 'text-gray-500' },
  },
  pony: {
    mainBg: 'bg-pink-100',
    heading: 'text-purple-500',
    subheading: 'text-pink-500',
    panel: {
      bg: 'bg-white/70 border border-pink-200',
      text: 'text-gray-700',
      subtext: 'text-pink-600',
    },
    button: {
      primary: { bg: 'bg-sky-400', hover: 'hover:bg-sky-500', ring: 'focus:ring-sky-300' },
      upgrade: { bg: 'bg-yellow-400', hover: 'hover:bg-yellow-500', ring: 'focus:ring-yellow-300', text: 'text-black' },
    },
    helpIcon: { bg: 'bg-white/70', hoverBg: 'hover:bg-white', text: 'text-purple-500' },
    gameOver: { bg: 'bg-purple-200/90', heading: 'text-red-500', text: 'text-purple-800', subtext: 'text-purple-600' },
  },
  office: {
    mainBg: 'bg-slate-200',
    heading: 'text-slate-800',
    subheading: 'text-slate-600',
    panel: {
      bg: 'bg-white/80 border border-slate-300',
      text: 'text-slate-800',
      subtext: 'text-slate-500',
    },
    button: {
      primary: { bg: 'bg-blue-700', hover: 'hover:bg-blue-800', ring: 'focus:ring-blue-300' },
      upgrade: { bg: 'bg-teal-500', hover: 'hover:bg-teal-600', ring: 'focus:ring-teal-300', text: 'text-white' },
    },
    helpIcon: { bg: 'bg-white/70', hoverBg: 'hover:bg-white', text: 'text-slate-700' },
    gameOver: { bg: 'bg-slate-300/90', heading: 'text-red-700', text: 'text-slate-800', subtext: 'text-slate-600' },
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);