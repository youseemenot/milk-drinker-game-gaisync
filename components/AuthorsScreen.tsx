


import React, { useState, useCallback } from 'react';
import { useTranslation } from '../LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

// --- Crypto Icons (self-contained SVGs) ---
const EthereumIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#627EEA"/>
    <path d="M12.0239 17.5V13.344L15.3889 11.364L12.0239 17.5Z" fill="white" fillOpacity="0.6"/>
    <path d="M12.0239 17.5L8.65894 11.364L12.0239 13.344V17.5Z" fill="white"/>
    <path d="M12.0239 10.32L15.3819 11.364L12.0239 6.5L8.66594 11.364L12.0239 10.32Z" fill="white" fillOpacity="0.6"/>
  </svg>
);

const TronIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#EF0027"/>
        <path d="M16.9234 6.0791L7.75146 11.3506L12.3364 13.4862L16.9234 6.0791Z" fill="white"/>
        <path d="M12.3369 13.4861L7.75195 17.6536L12.3369 19.9999V13.4861Z" fill="white" fillOpacity="0.7"/>
    </svg>
);


// --- QR Code Placeholder ---
const QRCodePlaceholder = () => (
  <div className="bg-white p-1 rounded-md shadow-inner w-28 h-28 mx-auto">
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="fill-current text-black">
      <path d="M0 0 H40 V40 H0 Z M10 10 H30 V30 H10 Z M60 0 H100 V40 H60 Z M70 10 H90 V30 H70 Z M0 60 H40 V100 H0 Z M10 70 H30 V90 H10 Z M65 65 H75 V75 H65 Z M85 65 H95 V75 H85 Z M65 85 H75 V95 H65 Z M85 85 H95 V95 H85 Z M45 45 H55 V55 H45 Z M45 25 H55 V35 H45 Z M25 45 H35 V55 H25 Z M45 65 H55 V75 H45 Z M25 75 H35 V85 H25 Z M75 45 H85 V55 H75 Z M50 10 H60 V20 H50 Z" />
    </svg>
  </div>
);

// --- Main Authors Screen ---
const AuthorsScreen: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const { t } = useTranslation();
  const T_AUTHORS = t.authorsScreen;
  
  const authors = [
    { name: T_AUTHORS.son.name, role: T_AUTHORS.son.role, icon: '💡', color: 'text-yellow-300' },
    { name: T_AUTHORS.daughter.name, role: T_AUTHORS.daughter.role, icon: '😈', color: 'text-purple-400' },
    { name: T_AUTHORS.dad.name, role: T_AUTHORS.dad.role, icon: '⌨️', color: 'text-sky-400' },
    { name: T_AUTHORS.mom.name, role: T_AUTHORS.mom.role, icon: '😇', color: 'text-rose-400' },
    { name: T_AUTHORS.ai.name, role: T_AUTHORS.ai.role, icon: '🤖', color: 'text-green-400' },
  ];

  const wallets = [
      { name: 'Ethereum', address: '0x77d953F7c1179A22dB76DAe9B39ec728F187f96D', icon: <EthereumIcon />, },
      { name: 'TRON', address: 'TWy31DR18yyYpH11kgqJCCeVwTFVz7yr4g', icon: <TronIcon />, },
  ];
  
  const handleCopy = useCallback((address: string) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2500);
    });
  }, []);

  const formatAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans p-6 sm:p-8 text-center overflow-y-auto">
      <div className="w-full max-w-5xl">
        {/* Back Button */}
        <div className="w-full flex justify-between items-center mb-6">
          <button
            onClick={onGoBack}
            className="px-6 py-2 bg-amber-700/80 text-white font-bold rounded-lg shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all duration-300 transform hover:scale-105"
          >
            &larr; {T_AUTHORS.backButton}
          </button>
          <LanguageSwitcher />
        </div>

        {/* --- About Us Section --- */}
        <section className="animate-fade-in-down mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-300 mb-4 drop-shadow-lg">
            {T_AUTHORS.mainTitle}
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            {T_AUTHORS.mainDescription}
          </p>
        </section>

        {/* --- Authors Grid --- */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {authors.map((author, index) => (
              <div 
                key={author.name} 
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-amber-500/10"
                style={{ animation: `fade-in-up 0.7s ease-out forwards ${0.3 + index * 0.1}s`, opacity: 0 }}
              >
                <div className={`text-6xl mb-4 ${author.color}`}>{author.icon}</div>
                <h2 className={`text-2xl font-bold mb-2 ${author.color}`}>{author.name}</h2>
                <p className="text-slate-400 text-sm">{author.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Donations Section --- */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-300 mb-4 drop-shadow-lg">
                {T_AUTHORS.supportTitle}
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
                {T_AUTHORS.supportDescription}
            </p>
            <div className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {wallets.map((wallet) => (
                  <div key={wallet.name} className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-sky-500/10">
                    <h3 className="text-xl font-bold text-slate-200 flex items-center">{wallet.icon} {wallet.name}</h3>
                    <QRCodePlaceholder />
                    <div className="bg-black/30 p-2 rounded-lg text-xs w-full break-words">
                        {formatAddress(wallet.address)}
                    </div>
                    <button
                      onClick={() => handleCopy(wallet.address)}
                      className={`w-full px-4 py-2 font-bold text-base rounded-lg shadow-md transition-colors duration-200 ${copiedAddress === wallet.address ? 'bg-green-600 text-white' : 'bg-sky-600 hover:bg-sky-500 text-white'}`}
                    >
                      {copiedAddress === wallet.address ? t.gameOver.copied : t.gameOver.copy}
                    </button>
                  </div>
                ))}
              </div>
            </div>
        </section>

      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default AuthorsScreen;