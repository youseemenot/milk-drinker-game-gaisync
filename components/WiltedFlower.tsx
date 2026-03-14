import React from 'react';
import { useTranslation } from '../LanguageContext';

const WiltedFlower: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-end h-80 mt-12 text-center text-gray-800">
      <div className="relative w-44 h-60">
        {/* Stem */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-40 bg-green-800 rounded-t-full origin-bottom -rotate-12"></div>
        {/* Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 transform -rotate-45">
          {/* Petals */}
          <div className="absolute w-12 h-12 bg-purple-400 rounded-full top-0 left-0 opacity-70 transform -rotate-12"></div>
          <div className="absolute w-12 h-12 bg-purple-400 rounded-full top-0 right-0 opacity-70 transform rotate-12"></div>
          <div className="absolute w-12 h-12 bg-purple-400 rounded-full bottom-0 left-0 opacity-70 transform rotate-12"></div>
          <div className="absolute w-12 h-12 bg-purple-400 rounded-full bottom-0 right-0 opacity-70 transform -rotate-12"></div>
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-800 rounded-full"></div>
        </div>
        <p className="absolute bottom-0 -right-8 font-serif text-slate-500 text-lg">{t.wiltedFlower.text}</p>
      </div>
    </div>
  );
};

export default WiltedFlower;
