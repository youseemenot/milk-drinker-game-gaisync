import React from 'react';
import {
  MAX_MILK_LEVEL,
  calculateUpgradeCost,
  calculateMilkCost,
  calculateRecovery,
} from '../gameConfig';
import { useTranslation } from '../LanguageContext';

interface HelpModalProps {
  onClose: () => void;
  drinkConfig: {
    helpTitle: string;
    helpDesc: string;
    costName: string;
    upgradeName: string;
  };
  workUnitConfig: {
    costName: string;
  };
}

const HelpModal: React.FC<HelpModalProps> = ({ onClose, drinkConfig, workUnitConfig }) => {
  const { t } = useTranslation();

  const tableData = Array.from({ length: MAX_MILK_LEVEL + 1 }, (_, i) => ({
    level: i + 1,
    recovery: calculateRecovery(i),
    upgradeCost: i < MAX_MILK_LEVEL ? calculateUpgradeCost(i) : '---',
    usageCost: calculateMilkCost(i),
  }));

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-xl">
          <h2 id="help-modal-title" className="text-2xl font-bold text-slate-800">{drinkConfig.helpTitle}</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors flex items-center justify-center text-2xl font-bold"
            aria-label={t.helpModal.close}
          >
            &times;
          </button>
        </header>

        <div className="overflow-y-auto p-4">
          <p className="text-slate-600 mb-4">
            {drinkConfig.helpDesc}
          </p>
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100 sticky top-0 z-10">
              <tr>
                <th className="p-3 font-semibold text-slate-700 border-b-2 border-slate-300">{t.helpModal.level}</th>
                <th className="p-3 font-semibold text-slate-700 border-b-2 border-slate-300">{t.helpModal.recovery}</th>
                <th className="p-3 font-semibold text-slate-700 border-b-2 border-slate-300">{t.helpModal.upgradeCost(workUnitConfig.costName)}</th>
                <th className="p-3 font-semibold text-slate-700 border-b-2 border-slate-300">{t.helpModal.usageCost(drinkConfig.costName, workUnitConfig.costName)}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-sky-50 border-b border-slate-200">
                  <td className="p-3 font-medium text-slate-800">{row.level}</td>
                  <td className="p-3 text-green-600 font-semibold">-{row.recovery}%</td>
                  <td className="p-3 text-amber-600">{row.upgradeCost}</td>
                  <td className="p-3 text-blue-600">{row.usageCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes slide-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default HelpModal;
