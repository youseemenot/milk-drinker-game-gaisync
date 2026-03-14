import React from 'react';

interface PonyCharacterProps {
  isDrinking: boolean;
  harmfulness: number;
  isVictorious?: boolean;
}

const animationStyles = `
  @keyframes tail-swish {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(15deg); }
  }

  @keyframes hoof-tap {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes fly-in-drink {
    0% {
      opacity: 0;
      transform: translateY(5rem) scale(0.5);
    }
    20%, 80% {
      opacity: 1;
      transform: translateY(-4rem) scale(1) rotate(-30deg);
    }
    100% {
      opacity: 0;
      transform: translateY(5rem) scale(0.5);
    }
  }

  @keyframes victory-bounce {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes victory-sparkle {
    0% { transform: scale(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: scale(1.5) translateY(var(--y-end)) translateX(var(--x-end)); opacity: 0; }
  }
`;

const getPonyStyles = (h: number) => {
    if (h < 20) return { filter: 'saturate(1.2) brightness(1.1)', eye: 'h-3', mouth: 'happy' };
    if (h < 40) return { filter: 'saturate(1)', eye: 'h-3', mouth: 'happy' };
    if (h < 60) return { filter: 'saturate(0.8)', eye: 'h-2', mouth: 'neutral' };
    if (h < 80) return { filter: 'saturate(0.6) brightness(0.9)', eye: 'h-2', mouth: 'sad' };
    return { filter: 'saturate(0.4) grayscale(0.2) brightness(0.8)', eye: 'h-1', mouth: 'very-sad' };
};

const PonyMouth: React.FC<{ mouthState: string }> = ({ mouthState }) => {
    switch (mouthState) {
        case 'very-sad':
            return <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-5 border-2 border-black rounded-b-none rounded-t-full"></div>;
        case 'sad':
            return <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-4 border-2 border-black rounded-b-none rounded-t-full"></div>;
        case 'neutral':
            return <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-black rounded-full"></div>;
        default: // happy
            return <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-300 border-2 border-black rounded-b-full"></div>;
    }
};

const PonyCharacter: React.FC<PonyCharacterProps> = ({ isDrinking, harmfulness, isVictorious = false }) => {
    const { filter: bodyFilter, eye: eyeBaseHeight, mouth: mouthState } = getPonyStyles(harmfulness);
    const eyeHeightClass = isDrinking ? 'h-1' : eyeBaseHeight;
    const isHappy = harmfulness < 40;

    return (
        <>
            <style>{animationStyles}</style>
            <div 
                className="relative w-72 h-80 mt-12"
                style={{ animation: isVictorious ? 'victory-bounce 0.8s ease-in-out infinite' : 'none' }}
            >
                {isVictorious && (
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 w-1 h-1">
                            <div className="absolute w-3 h-3 bg-yellow-300 rounded-full" style={{'--x-end': '60px', '--y-end': '-80px', animation: 'victory-sparkle 1s linear infinite 0.1s'} as React.CSSProperties}></div>
                            <div className="absolute w-2 h-2 bg-pink-400 rounded-full" style={{'--x-end': '-70px', '--y-end': '-50px', animation: 'victory-sparkle 1.2s linear infinite 0.3s'} as React.CSSProperties}></div>
                            <div className="absolute w-3 h-3 bg-sky-300 rounded-full" style={{'--x-end': '80px', '--y-end': '20px', animation: 'victory-sparkle 0.9s linear infinite 0.5s'} as React.CSSProperties}></div>
                            <div className="absolute w-2 h-2 bg-purple-400 rounded-full" style={{'--x-end': '-50px', '--y-end': '60px', animation: 'victory-sparkle 1.1s linear infinite 0.7s'} as React.CSSProperties}></div>
                        </div>
                    </div>
                )}

                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-pink-300 rounded-3xl border-4 border-black transition-all duration-500"
                    style={{ filter: bodyFilter }}
                >
                    <div
                        className="absolute -right-12 top-2 w-16 h-24 bg-gradient-to-t from-purple-400 via-sky-400 to-yellow-300 rounded-[50%_50%_50%_20%] border-4 border-black transform -rotate-45"
                        style={{
                            transformOrigin: 'top right',
                            animation: !isDrinking && (isHappy || isVictorious) ? 'tail-swish 1.5s ease-in-out infinite' : 'none',
                            transition: 'transform 0.5s',
                            transform: `rotate(${(isHappy || isVictorious) ? '-15deg' : '-35deg'})`
                        }}
                    ></div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 flex justify-between" style={{ filter: bodyFilter }}>
                    <div className="w-8 h-10 bg-pink-400 border-4 border-black rounded-b-xl" style={{ animation: !isDrinking && (isHappy || isVictorious) ? 'hoof-tap 2s ease-in-out infinite 0.2s' : 'none' }}></div>
                    <div className="w-8 h-10 bg-pink-400 border-4 border-black rounded-b-xl"></div>
                    <div className="w-8 h-10 bg-pink-400 border-4 border-black rounded-b-xl"></div>
                    <div className="w-8 h-10 bg-pink-400 border-4 border-black rounded-b-xl"></div>
                </div>

                <div
                    className={`absolute top-10 left-[calc(50%-1rem)] -translate-x-1/2 w-28 h-28 transition-all duration-500 ease-in-out ${isDrinking ? 'rotate-[-20deg] translate-y-[-1rem] translate-x-[-1rem]' : ''}`}
                    style={{ filter: bodyFilter }}
                >
                    <div className="relative w-full h-full">
                        <div className="absolute w-28 h-28 bg-pink-300 rounded-full border-4 border-black"></div>
                        <div className="absolute -bottom-2 -left-4 w-16 h-10 bg-pink-300 rounded-full border-4 border-black"></div>

                        <div className="absolute -top-4 -right-4 w-20 h-28">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400 via-sky-400 to-yellow-300 rounded-[50%_50%_20%_50%] border-4 border-black transform rotate-12"></div>
                            <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-yellow-300 via-sky-400 to-purple-400 rounded-[50%_50%_50%_20%] border-4 border-black transform rotate-12"></div>
                        </div>

                        <div className="absolute top-8 right-6 flex gap-4">
                            <div className={`w-3 bg-black rounded-full transition-all duration-500 ${eyeHeightClass}`}></div>
                        </div>

                        <div className="absolute bottom-5 left-2 w-12 h-12">
                           <PonyMouth mouthState={isVictorious ? 'happy' : mouthState} />
                        </div>
                    </div>
                </div>
                
                <div
                  className={`absolute top-1/2 left-1/2 w-8 h-16 transform -translate-x-1/2 ${isDrinking ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animation: isDrinking ? 'fly-in-drink 2s ease-in-out forwards' : 'none' }}
                >
                   <div className="relative w-8 h-16">
                      <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-t-lg rounded-b-md border-2 border-gray-500 shadow-inner flex flex-col justify-end overflow-hidden">
                        <div className="w-full bg-gradient-to-t from-pink-400 via-yellow-300 to-sky-400 h-4/5"></div>
                      </div>
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-4 bg-red-500 rounded-t-sm border-x-2 border-t-2 border-gray-600"></div>
                  </div>
                </div>
            </div>
        </>
    );
};

export default PonyCharacter;