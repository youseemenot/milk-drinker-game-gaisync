import React from 'react';

interface DwarfCharacterProps {
  isDrinking: boolean;
  harmfulness: number;
  isVictorious?: boolean;
}

const animationStyles = `
  @keyframes swing {
    0%, 100% { transform: rotate(25deg); }
    50% { transform: rotate(-35deg); }
  }

  @keyframes fly-in-horn {
    0% {
      opacity: 0;
      transform: translateY(6rem) translateX(2rem) scale(0.5) rotate(90deg);
    }
    20%, 80% {
      opacity: 1;
      transform: translateY(-3.5rem) translateX(-2rem) scale(1) rotate(-45deg);
    }
    100% {
      opacity: 0;
      transform: translateY(6rem) translateX(2rem) scale(0.5) rotate(90deg);
    }
  }
  @keyframes victory-glow-dwarf {
      0%, 100% { filter: drop-shadow(0 0 10px #fbbF24) brightness(1.1); }
      50% { filter: drop-shadow(0 0 20px #facc15) drop-shadow(0 0 5px #fff) brightness(1.3); }
  }
`;

const Pickaxe: React.FC = () => (
  <div className="absolute top-[-2rem] left-[4.5rem] w-28 transform -rotate-45" style={{ transformOrigin: '0 0' }}>
    <div className="w-24 h-4 bg-yellow-900 rounded-sm border-2 border-yellow-950" />
    <div className="absolute top-[-1rem] left-[5.5rem] w-4 h-9 bg-gray-500 border-2 border-gray-600 rounded-md">
      <div className="absolute -top-1 left-[-0.85rem] w-6 h-3 bg-gray-400 border-2 border-gray-500 rounded-sm transform rotate-45" />
    </div>
  </div>
);

const getDwarfStyles = (h: number) => {
    if (h < 20) return { beard: 'bg-orange-600', eye: 'h-2.5', body: 'bg-blue-800', droop: 'rotate-[-10deg]' };
    if (h < 40) return { beard: 'bg-orange-700', eye: 'h-2.5', body: 'bg-blue-800', droop: 'rotate-[-15deg]' };
    if (h < 60) return { beard: 'bg-amber-800', eye: 'h-2', body: 'bg-blue-900', droop: 'rotate-[-20deg]' };
    if (h < 80) return { beard: 'bg-amber-900', eye: 'h-2', body: 'bg-slate-700', droop: 'rotate-[-25deg]' };
    return { beard: 'bg-yellow-950', eye: 'h-1.5', body: 'bg-slate-800', droop: 'rotate-[-30deg]' };
};

const DwarfCharacter: React.FC<DwarfCharacterProps> = ({ isDrinking, harmfulness, isVictorious = false }) => {
  const { beard: beardColor, eye: eyeBaseHeight, body: bodyColor, droop: beardDroop } = getDwarfStyles(harmfulness);
  const eyeHeightClass = isDrinking ? 'h-1' : eyeBaseHeight;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="relative w-48 h-80 mt-12">
        
        {/* Head Area */}
        <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-32 h-28 transition-all duration-500 ease-in-out ${isDrinking ? 'rotate-[-25deg] translate-y-[-1.5rem]' : ''}`}>
          {/* Beard */}
          <div 
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-24 rounded-t-lg rounded-b-[50%] border-4 border-black shadow-lg transition-colors duration-500 ${beardColor}`} 
            style={{ 
              transform: isDrinking ? 'rotate(5deg)' : beardDroop, 
              transitionProperty: 'transform, background-color',
              animation: isVictorious ? 'victory-glow-dwarf 1.5s ease-in-out infinite' : 'none'
            }} 
          />
          
          {/* Face */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-12 bg-orange-200 rounded-t-full">
            {/* Eyes */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-5">
              <div className={`w-3 bg-black rounded-full transition-all duration-500 ${eyeHeightClass}`}></div>
              <div className={`w-3 bg-black rounded-full transition-all duration-500 ${eyeHeightClass}`}></div>
            </div>
             {/* Nose */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-6 bg-orange-300 rounded-full border-2 border-orange-400"></div>
          </div>
          
          {/* Helmet */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-14 bg-slate-600 rounded-t-full border-4 border-slate-800 overflow-hidden">
             <div className="absolute -bottom-1 left-0 w-full h-4 bg-slate-700 border-t-4 border-slate-800"></div>
          </div>
        </div>

        {/* Body */}
        <div className={`absolute top-36 left-1/2 -translate-x-1/2 w-24 h-24 rounded-b-xl border-4 border-black shadow-lg transition-colors duration-500 ${bodyColor}`}></div>

        {/* Arms and Pickaxe */}
        <div
          className={`absolute top-44 left-1/2 -translate-x-1/2 w-32 h-16 transition-opacity duration-300 ${isDrinking ? 'opacity-0' : 'opacity-100'}`}
          style={{
            transformOrigin: '50% 0',
            animation: !isDrinking && !isVictorious ? 'swing 1.8s ease-in-out infinite' : 'none',
            transform: isVictorious ? 'rotate(-25deg) translateY(-2rem)' : 'none',
            transition: 'transform 0.5s'
          }}
        >
          {/* Left arm */}
          <div className="absolute top-0 left-[-1.5rem] w-16 h-8 bg-orange-200 rounded-full border-4 border-black transform rotate-45 -translate-x-4"></div>
          {/* Right arm */}
          <div className="absolute top-2 left-[4.5rem] w-16 h-8 bg-orange-200 rounded-full border-4 border-black transform -rotate-12 translate-x-1"></div>
          <Pickaxe />
        </div>
        
        {/* Drinking Horn */}
        <div
          className={`absolute top-1/2 left-1/2 w-12 h-20 transform -translate-x-1/2 ${isDrinking ? 'opacity-100' : 'opacity-0'}`}
          style={{ animation: isDrinking ? 'fly-in-horn 2s ease-in-out forwards' : 'none' }}
        >
           <div className="relative w-12 h-20 bg-yellow-900 border-4 border-yellow-950/50 rounded-b-[50%] rounded-t-xl overflow-hidden transform -rotate-12">
                <div className="absolute top-0 left-0 w-full h-4 bg-gray-400/30"></div>
                {/* Foam */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-6 bg-amber-100 rounded-t-full">
                    <div className="absolute -bottom-2 right-0 w-4 h-4 bg-amber-100 rounded-full"></div>
                    <div className="absolute -bottom-1 left-2 w-3 h-3 bg-amber-100 rounded-full"></div>
                </div>
           </div>
        </div>

      </div>
    </>
  );
};

export default DwarfCharacter;