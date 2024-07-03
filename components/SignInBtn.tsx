"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { signIn } from "next-auth/react";

interface OnboardingStepProps {
  nextStep?: () => void;
  previousStep?: () => void;
}

const SignInBtn: React.FC<OnboardingStepProps> = ({ nextStep, previousStep }) =>  {
  const [currentPage, setCurrentPage] = useState(3); // Supposons que 3 soit la page actuelle pour la connexion

 
  return (
    <div >
     
     
      {/* Contenu par-dessus l'image de fond */}
      <div >
       
      
        <button
          onClick={() => signIn("google")}
         
         
        >
          <Image src="/google-logo.png" height={30} width={30} alt="Google logo" />
          <span className="text-white text-center font-poppins text-lg font-semibold leading-[27px] px-4">
            Sign in with Google
          </span>
        </button>
      </div>

     </div>
  );
};

export default SignInBtn;
