import React from 'react';

interface CharacterProps {
  isDrinking: boolean;
  harmfulness: number;
  isVictorious?: boolean;
}

const animationStyles = `
  @keyframes drill-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes laser-pulse {
    0%, 100% { height: 0; opacity: 0.5; }
    50% { height: 3rem; opacity: 1; }
  }

  @keyframes sparks-fly {
    0% { transform: translateY(0) translateX(0); opacity: 1; }
    100% { transform: translateY(30px) translateX(var(--spark-x)); opacity: 0; }
  }

  @keyframes zap-effect {
    0%, 100% { 
      opacity: 0; 
      transform: translateY(2rem) scale(0.8);
    }
    10% { 
      opacity: 1; 
      transform: translateY(-4rem) scale(1);
    }
    50% {
      opacity: 1;
      transform: translateY(-4rem) scale(1.1);
    }
    90% {
      opacity: 0;
      transform: translateY(-4rem) scale(0.9);
    }
  }

  @keyframes zap-flash {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(2.5) contrast(2); }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 50%, 90% { transform: translateX(-3px) rotate(-1deg); }
    30%, 70% { transform: translateX(3px) rotate(1deg); }
  }
  
  @keyframes victory-glow {
      0%, 100% { box-shadow: 0 0 20px 10px rgba(52, 211, 153, 0.7), 0 0 30px 15px rgba(52, 211, 153, 0.4); }
      50% { box-shadow: 0 0 30px 15px rgba(52, 211, 153, 0.9), 0 0 45px 25px rgba(52, 211, 153, 0.6); }
  }
`;

const LaserDrill: React.FC = () => (
  <div className="absolute top-[3rem] left-1/2 w-8 h-24 transform -translate-x-1/2">
    {/* Drill Body */}
    <div className="w-full h-12 bg-gray-600 rounded-t-md border-2 border-gray-700"></div>
    {/* Drill Bit */}
    <div 
      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-8 bg-gray-500 origin-center"
      style={{ animation: 'drill-spin 0.2s linear infinite' }}
    >
        <div className="absolute inset-x-0 top-0 h-4 bg-yellow-400" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
    </div>
    {/* Laser Beam */}
    <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-red-500 rounded-full shadow-[0_0_10px_2px_rgba(255,0,0,0.8)]"
        style={{ animation: 'laser-pulse 1s ease-in-out infinite' }}
    ></div>
  </div>
);

const getRobotStyles = (h: number) => {
    if (h < 20) return { optic: 'bg-cyan-400 shadow-[0_0_15px_4px_rgba(0,255,255,0.7)]', body: 'bg-slate-600', sparks: 'opacity-0' };
    if (h < 60) return { optic: 'bg-yellow-400 shadow-[0_0_15px_4px_rgba(255,255,0,0.7)]', body: 'bg-slate-700', sparks: 'opacity-0' };
    return { optic: 'bg-red-500 shadow-[0_0_15px_4px_rgba(255,0,0,0.7)] animate-pulse', body: 'bg-slate-800', sparks: 'opacity-100' };
};

const Character: React.FC<CharacterProps> = ({ isDrinking, harmfulness, isVictorious = false }) => {
  const { optic: opticColor, body: bodyColor, sparks: sparksOpacity } = getRobotStyles(harmfulness);
  const victoriousAnimation = isVictorious ? 'victory-glow 2s ease-in-out infinite' : 'none';

  return (
    <>
      <style>{animationStyles}</style>
      <div className={`relative w-48 h-80 mt-12 ${isDrinking ? 'animate-shake' : ''}`} style={{animation: isDrinking ? 'shake 0.1s linear infinite' : 'none' }}>
        
        {/* Robot Body */}
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 rounded-t-2xl border-4 border-slate-900 shadow-lg transition-colors duration-500 ${bodyColor} ${isDrinking ? 'animate-zap-flash' : ''}`} style={{ animationName: isVictorious ? 'victory-glow' : '', animationDuration: '2s', animationIterationCount: 'infinite' }}>
            {/* Damage Texture */}
             <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${harmfulness > 70 ? 'opacity-100' : 'opacity-0'}`}></div>
             {/* Sparks */}
             <div className={`absolute top-1/2 left-1/2 w-px h-px transition-opacity duration-500 ${sparksOpacity}`}>
                <div className="absolute w-2 h-2 bg-yellow-300 rounded-full" style={{'--spark-x': '20px', animation: 'sparks-fly 0.5s linear infinite 0.1s'} as React.CSSProperties}></div>
                <div className="absolute w-1 h-1 bg-orange-400 rounded-full" style={{'--spark-x': '-15px', animation: 'sparks-fly 0.4s linear infinite 0.3s'} as React.CSSProperties}></div>
                <div className="absolute w-2 h-2 bg-white rounded-full" style={{'--spark-x': '10px', animation: 'sparks-fly 0.6s linear infinite 0.5s'} as React.CSSProperties}></div>
             </div>
        </div>

        {/* Robot Head */}
        <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-28 h-20 bg-slate-500 rounded-t-full border-4 border-slate-900 flex items-center justify-center transition-all duration-500 ease-in-out ${isDrinking ? 'rotate-[-10deg] translate-y-[-0.5rem]' : ''} ${isVictorious ? 'animate-pulse' : ''}`}>
          {/* Optic */}
          <div className={`w-16 h-8 rounded-md border-2 border-black transition-colors duration-500 ${isVictorious ? 'bg-green-400 shadow-[0_0_15px_4px_rgba(52,211,153,0.9)]' : opticColor}`}></div>
        </div>

        {/* Arms and Drill */}
        <div className={`absolute top-28 left-1/2 -translate-x-1/2 w-48 h-32 transition-transform duration-300 ${isDrinking ? 'translate-y-8 opacity-50' : 'translate-y-0 opacity-100'}`}>
           {/* Left Arm */}
           <div className="absolute top-8 left-0 w-8 h-20 bg-slate-500 border-2 border-slate-900 rounded-lg transform -rotate-45"></div>
           {/* Right Arm */}
           <div className="absolute top-8 right-0 w-8 h-20 bg-slate-500 border-2 border-slate-900 rounded-lg transform rotate-45"></div>
           <LaserDrill />
        </div>

        {/* Электрошокер */}
        <div
          className={`absolute top-1/2 left-1/2 w-20 h-20 transform -translate-x-1/2 ${isDrinking ? 'opacity-100' : 'opacity-0'}`}
          style={{ animation: isDrinking ? 'zap-effect 2s ease-in-out forwards' : 'none' }}
        >
           <div className="relative w-full h-full">
              {/* Корпус */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-700 border-2 border-gray-900 rounded-md"></div>
              {/* Контакты */}
              <div className="absolute top-2 left-[calc(50%-1rem)] w-3 h-6 bg-yellow-400 border border-yellow-600 rounded-t-md"></div>
              <div className="absolute top-2 left-[calc(50%+0.25rem)] w-3 h-6 bg-yellow-400 border border-yellow-600 rounded-t-md"></div>
              {/* Разряд */}
               <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 filter drop-shadow-[0_0_3px_#ff0]" viewBox="0 0 100 100">
                  <path d="M 40 70 L 45 50 L 55 50 L 60 30" stroke="#ffff00" strokeWidth="8" fill="none" strokeLinecap="round" />
               </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;