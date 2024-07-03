"use client";

import React from 'react';
import Image from 'next/image';

interface OnboardingStepProps {
  nextStep?: () => void;
}

const OnboardingStep1: React.FC<OnboardingStepProps> = ({ nextStep }) => {
  const handleNext = () => {
    if (nextStep) {
      nextStep();
      console.log("Next step triggered");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
       className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/step1.jpeg")',
          filter: 'grayscale(100%)',
          zIndex: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div 
          className="absolute inset-0 bg-black opacity-20"
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
            zIndex: 2
          }}
        ></div>
      </div>
      
      <div className="relative z-10 text-center text-white p-5 rounded-md">
      <Image
          src="/logo2.svg" // Remplacez par le chemin réel de votre logo
          width={118}
          height={80}
          alt="Logo"
          className="mx-auto my-4"
        />
        
        <h1 className="text-3xl font-bold leading-[35px] tracking-[-0.44px] font-space-grotesk">
          Bienvenue chez Active Gaming !
        </h1>
        <p className="text-sm leading-[23px] tracking-[-0.44px] font-ubuntu mt-2">
          Améliorez vos compétences In-Game.
        </p>
        <p className="text-sm leading-[23px] tracking-[-0.44px] font-ubuntu">
          Grâce aux sports.
        </p>
        <button 
          onClick={handleNext} 
          className="mt-10 px-9 py-4 bg-[#583DFF]  text-[#FFFBFB] font-space-grotesk font-bold text-base leading-[10px] tracking-[-0.44px] border-2 border-[#583DFF] rounded-md"
        >
          Commencez
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep1;
