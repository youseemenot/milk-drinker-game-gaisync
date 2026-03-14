import React from 'react';

const animationStyles = `
  @keyframes flicker {
    0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100% {
      opacity: 0.99;
      text-shadow: -1px -1px 0 #f00, 1px -1px 0 #f00, -1px 1px 0 #f00, 1px 1px 0 #f00, 0 0 5px #f00, 0 0 15px #f00, 0 0 20px #f00;
    }
    20%, 21.9%, 63%, 63.9%, 65%, 69.9% {
      opacity: 0.4;
      text-shadow: none;
    }
  }
  @keyframes pulse-red {
    0%, 100% { box-shadow: 0 0 10px 2px rgba(255,0,0,0.5); }
    50% { box-shadow: 0 0 20px 5px rgba(255,0,0,0.8); }
  }
`;

const ScrapPile: React.FC = () => {
  return (
    <>
      <style>{animationStyles}</style>
      <div className="flex flex-col items-center justify-end h-80 mt-12 text-center">
        <div className="relative w-56 h-48">
          {/* Main Pile */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-slate-700 rounded-t-2xl border-2 border-slate-800 transform -skew-y-3">
             <div className="absolute w-20 h-10 bg-slate-800 rounded-md top-4 left-2 transform rotate-12"></div>
             <div className="absolute w-24 h-8 bg-slate-600 rounded-sm bottom-2 right-4 transform -rotate-6"></div>
          </div>
          
          {/* Broken Arm */}
          <div className="absolute bottom-10 left-0 w-8 h-20 bg-slate-500 border-2 border-slate-900 rounded-lg transform -rotate-[75deg] z-10"></div>
          
          {/* Wires */}
          <div className="absolute bottom-12 right-8 w-1 h-12 bg-yellow-500 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-8 right-4 w-1 h-16 bg-red-500 rounded-full transform rotate-45"></div>

          {/* Broken Optic */}
          <div 
            className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-8 rounded-md border-2 border-black bg-red-500"
            style={{ animation: 'pulse-red 2s ease-in-out infinite' }}
          ></div>

          {/* SYSTEM FAILURE text */}
          <p
            className="absolute -top-4 w-full text-center font-mono text-xl text-red-500"
            style={{ animation: 'flicker 3s linear infinite' }}
          >
            SYSTEM_FAILURE
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrapPile;
