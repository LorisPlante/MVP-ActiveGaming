"use client"; // Ajouter ceci en haut du fichier

import React, { useState } from 'react';
import Image from 'next/image';

interface OnboardingStepProps {
  nextStep?: () => void;
  previousStep?: () => void;
  goToStep?: (step: number) => void;
}

const OnboardingStep2: React.FC<OnboardingStepProps> = ({ nextStep, previousStep }) => {
  const [currentPage, setCurrentPage] = useState(1); // Assurez-vous que 2 est la page actuelle

  const handleNext = () => {
    if (nextStep) {
      nextStep();
      console.log("Next step triggered");
    }
  };

  const handlePrevious = () => {
    if (previousStep) {
      previousStep();
      console.log("Previous step triggered");
    }
  };

  const goToPage = (pageNumber: number) => {
    // Assurez-vous de gérer le changement de page ici
    setCurrentPage(pageNumber);
    // Logic to navigate to the specific onboarding step
    // This is a placeholder, update with your actual navigation logic
    if (pageNumber === 2 && nextStep) {
      nextStep();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Image de fond avec filtre */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/step2.jpeg")',
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
        {/* Superposition noire avec dégradé */}
        <div
          className="absolute inset-0 bg-black opacity-20"
          style={{
            zIndex: 2
          }}
        ></div>
      </div>
      
      {/* Contenu textuel et bouton */}
      <div className="relative z-10 text-center text-white p-5 rounded-md">
      <Image
          src="/logo2.svg" // Remplacez par le chemin réel de votre logo
          width={118}
          height={80}
          alt="Logo"
          className="mx-auto my-4"
        />
        <h1 className="text-3xl font-bold leading-10 tracking-wide font-space-grotesk">
          S’AMELIORER
        </h1>
       
        <p className="text-sm leading-6 font-ubuntu mt-2">
          Améliorez vos compétences In-Game.
        </p>
        <p className="text-sm leading-6 font-ubuntu">
          Grâce aux sports.
        </p>
      </div>

      {/* Rectangles indicateurs */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <div className="flex space-x-2">
          <div
            onClick={() => goToPage(1)}
            className={`w-12 h-2.5 rounded-full cursor-pointer ${currentPage === 1 ? ' bg-[#583DFF]' : 'bg-gray-300'}`}
            style={{ width: '48px', height: '9px', borderRadius: '14px' }}
          ></div>
          <div
            onClick={() => goToPage(2)}
            className={`w-12 h-2.5 rounded-full cursor-pointer ${currentPage === 2 ? ' bg-[#583DFF]' : 'bg-gray-300'}`}
            style={{ width: '48px', height: '9px', borderRadius: '14px' }}
          ></div>
          <div
            onClick={() => goToPage(3)}
            className={`w-12 h-2.5 rounded-full cursor-pointer ${currentPage === 3 ? ' bg-[#583DFF]' : 'bg-gray-300'}`}
            style={{ width: '48px', height: '9px', borderRadius: '14px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
