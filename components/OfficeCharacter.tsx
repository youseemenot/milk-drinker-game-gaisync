import React from 'react';

interface OfficeCharacterProps {
  isDrinking: boolean;
  harmfulness: number;
  isVictorious?: boolean;
}

const animationStyles = `
  @keyframes typing {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  @keyframes fly-in-coffee {
    0% {
      opacity: 0;
      transform: translateY(6rem) translateX(3rem) scale(0.5) rotate(45deg);
    }
    20%, 80% {
      opacity: 1;
      transform: translateY(-3.5rem) translateX(-2.5rem) scale(1) rotate(-15deg);
    }
    100% {
      opacity: 0;
      transform: translateY(6rem) translateX(3rem) scale(0.5) rotate(45deg);
    }
  }
  @keyframes victory-throw {
      0% { transform: translateY(0) rotate(0); }
      100% { transform: translateY(-3rem) rotate(-30deg); }
  }
`;

const getOfficeWorkerStyles = (h: number) => {
    if (h < 20) return { posture: 'translate-y-0', eye: 'h-2.5', tie: 'rotate-0', mouth: 'happy', paperOpacity: 'opacity-0' };
    if (h < 40) return { posture: 'translate-y-1', eye: 'h-2.5', tie: 'rotate-2', mouth: 'neutral', paperOpacity: 'opacity-0' };
    if (h < 60) return { posture: 'translate-y-2', eye: 'h-2', tie: 'rotate-4', mouth: 'neutral', paperOpacity: 'opacity-50' };
    if (h < 80) return { posture: 'translate-y-4', eye: 'h-2', tie: 'rotate-12', mouth: 'sad', paperOpacity: 'opacity-100' };
    return { posture: 'translate-y-6', eye: 'h-1.5', tie: 'rotate-[25deg] translate-x-1', mouth: 'very-sad', paperOpacity: 'opacity-100' };
};

const Mouth: React.FC<{ state: string }> = ({ state }) => {
    switch (state) {
        case 'very-sad': return <div className="absolute bottom-3 w-8 h-4 border-2 border-black rounded-b-none rounded-t-full"></div>;
        case 'sad': return <div className="absolute bottom-4 w-6 h-3 border-2 border-black rounded-b-none rounded-t-full"></div>;
        case 'neutral': return <div className="absolute bottom-5 w-6 h-0.5 bg-black"></div>;
        default: return <div className="absolute bottom-4 w-8 h-3 bg-red-400 border border-black rounded-b-full"></div>;
    }
};

const PaperStack: React.FC = () => (
    <div className="absolute bottom-0 right-[-3rem] w-12 h-16">
        <div className="absolute w-12 h-2 bg-white border border-slate-300 rounded-sm transform rotate-[-2deg]"></div>
        <div className="absolute bottom-10 w-12 h-2 bg-white border border-slate-300 rounded-sm transform rotate-[3deg]"></div>
        <div className="absolute bottom-7 w-12 h-2 bg-white border border-slate-300 rounded-sm transform rotate-[-1deg]"></div>
        <div className="absolute bottom-4 w-12 h-2 bg-white border border-slate-300 rounded-sm transform rotate-[2deg]"></div>
        <div className="absolute bottom-1 w-12 h-2 bg-white border border-slate-300 rounded-sm transform rotate-[-4deg]"></div>
    </div>
);

const OfficeCharacter: React.FC<OfficeCharacterProps> = ({ isDrinking, harmfulness, isVictorious = false }) => {
  const { posture, eye: eyeBaseHeight, tie, mouth, paperOpacity } = getOfficeWorkerStyles(harmfulness);
  const eyeHeightClass = isDrinking ? 'h-1' : eyeBaseHeight;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="relative w-80 h-80 mt-12 flex items-end justify-center">
        {/* Cubicle Background */}
        <div className="absolute inset-x-0 top-0 h-64 bg-slate-300 rounded-t-lg border-2 border-slate-400"></div>
        {/* Desk */}
        <div className="absolute bottom-0 w-full h-24 bg-stone-500 rounded-md border-4 border-stone-700"></div>

        <div className={`relative transition-transform duration-500 ${isVictorious ? 'translate-y-[-1rem]' : posture}`}>
            {/* Paper Stack */}
            <div className={`transition-opacity duration-500 ${paperOpacity}`}>
                <PaperStack />
            </div>

            {/* Character */}
            <div className="relative w-40 h-56">
                {/* Chair */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-24 bg-gray-800 rounded-t-md"></div>
            
                {/* Body */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-28 bg-sky-200 rounded-t-lg border-2 border-black">
                    {/* Tie */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-6 h-16 origin-top transition-transform duration-500 ${isVictorious ? 'rotate-[-15deg]' : tie}`}>
                        <div className="w-6 h-6 bg-red-700 transform-gpu" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-12 bg-red-700" style={{ clipPath: 'polygon(100% 100%, 0 100%, 50% 0)' }}></div>
                    </div>
                </div>

                {/* Head */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 transition-all duration-500 ease-in-out ${isDrinking ? 'rotate-[-20deg] translate-y-[-1rem]' : ''} ${isVictorious ? 'rotate-[10deg]' : ''}`}>
                    <div className="absolute w-full h-full bg-orange-200 rounded-full border-2 border-black flex items-center justify-center">
                        <div className="flex gap-4">
                            <div className={`w-3 bg-black rounded-full transition-all duration-500 ${eyeHeightClass}`}></div>
                            <div className={`w-3 bg-black rounded-full transition-all duration-500 ${eyeHeightClass}`}></div>
                        </div>
                        <div className="absolute w-full h-full flex items-center justify-center">
                            <Mouth state={isVictorious ? 'happy' : mouth} />
                        </div>
                    </div>
                </div>

                {/* Arms & Keyboard */}
                <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-10 transition-opacity duration-300 ${isDrinking ? 'opacity-0' : 'opacity-100'}`}>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-sm transition-opacity ${isVictorious ? 'opacity-0' : 'opacity-100'}`}></div>
                    {/* Left Hand */}
                    <div className="absolute bottom-2 left-2 w-8 h-6 bg-orange-200 border-2 border-black rounded-sm" style={{animation: !isVictorious && 'typing 0.4s ease-in-out infinite alternate', transform: isVictorious ? 'translateY(-2rem) rotate(-45deg)' : 'none', transition: 'transform 0.5s'}}></div>
                    {/* Right Hand */}
                    <div className="absolute bottom-2 right-2 w-8 h-6 bg-orange-200 border-2 border-black rounded-sm" style={{animation: !isVictorious && 'typing 0.4s ease-in-out infinite alternate-reverse', transform: isVictorious ? 'translateY(-2.5rem) rotate(45deg)' : 'none', transition: 'transform 0.5s'}}></div>
                </div>
            </div>
        </div>

        {/* Coffee Mug */}
        <div
          className={`absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 ${isDrinking ? 'opacity-100' : 'opacity-0'}`}
          style={{ animation: isDrinking ? 'fly-in-coffee 2s ease-in-out forwards' : 'none' }}
        >
           <div className="relative w-12 h-12 bg-white rounded-lg border-2 border-gray-400">
                <div className="w-full h-full bg-yellow-900/80 rounded-md"></div>
                {/* Handle */}
                <div className="absolute -right-3 top-2 w-4 h-6 border-2 border-gray-400 rounded-r-full bg-white"></div>
           </div>
        </div>
      </div>
    </>
  );
};

export default OfficeCharacter;