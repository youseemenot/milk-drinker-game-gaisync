import React from 'react';
import { useTranslation } from '../LanguageContext';

const Tombstone: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-end h-80 mt-12 text-center text-gray-800">
      <div className="w-44 h-60 bg-slate-400 rounded-t-[50%] border-4 border-slate-600 shadow-xl flex flex-col items-center justify-center p-4">
        <p className="font-bold text-3xl font-serif">{t.tombstone.rip}</p>
        <p className="text-slate-700 text-sm mt-4">{t.tombstone.epitaph}</p>
      </div>
      <div className="w-52 h-5 bg-slate-500 rounded-sm border-x-2 border-b-2 border-slate-600"></div>
    </div>
  );
};

export default Tombstone;
