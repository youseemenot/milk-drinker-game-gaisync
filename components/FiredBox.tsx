import React from 'react';
import { useTranslation } from '../LanguageContext';

const FiredBox: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-end h-80 mt-12 text-center">
      <div className="relative w-52 h-40">
        {/* Box */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-32 bg-yellow-700 border-4 border-yellow-900 rounded-md">
          <div className="w-full h-8 bg-yellow-600 border-b-4 border-yellow-900"></div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-900/30"></div>
        </div>
        
        {/* Items in box */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex items-end justify-center">
            {/* Plant */}
            <div className="relative w-12 h-20 -mr-4">
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-orange-800 rounded-t-md"></div>
                <div className="absolute -top-4 left-4 w-4 h-12 bg-green-700 rounded-full transform -rotate-12"></div>
                <div className="absolute -top-2 left-0 w-8 h-8 bg-green-600 rounded-full transform rotate-12"></div>
            </div>
            {/* Stapler */}
            <div className="w-12 h-6 bg-red-600 border-2 border-red-800 rounded-sm mb-8 transform -rotate-20 z-10"></div>
            {/* Picture Frame */}
            <div className="w-10 h-12 bg-blue-300 border-4 border-white rounded-sm mb-4 ml-2 transform rotate-12 shadow-md"></div>
        </div>
        <p className="absolute bottom-0 -right-8 font-serif text-slate-600 text-lg transform -rotate-6">{t.firedBox.text}</p>
      </div>
    </div>
  );
};

export default FiredBox;
