import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface SignInBtnProps {
  nextStep?: () => void;
  previousStep?: () => void;
}

const SignInBtn: React.FC<SignInBtnProps> = ({ nextStep, previousStep }) => {
  // État local pour la gestion de la page actuelle (remarque : l'utilisation de useState ici est supprimée car l'état n'est pas utilisé)
  // const [currentPage, setCurrentPage] = useState(3);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Contenu par-dessus l'image de fond */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => signIn('google')}
          className="flex items-center gap-4 shadow-xl border-2 border-[#583DFF] rounded-md text-black py-2 px-4 hover:bg-gray-200 focus:outline-none"
        >
          <Image src="/google-logo.png" height={30} width={30} alt="Google logo" />
          <span className="text-black text-lg font-semibold">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignInBtn;
