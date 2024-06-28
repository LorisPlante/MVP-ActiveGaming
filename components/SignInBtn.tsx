"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-custom-gradient">
      <Image
        src="/logo.png" // Remplacez par le chemin réel de votre logo
        width={118}
        height={80}
        alt="Logo"
        className="flex-shrink-0"
      />
      <div className="text-center text-white font-poppins text-2xl font-semibold leading-5 mb-6 mt-4">
        Améliorez vos compétences In-Game grâce aux sports !
      </div>
      <button
        onClick={() => signIn("google")}
        className="flex items-center gap-4 shadow-xl rounded-full p-3 bg-[#EDEAFF] text-black"
      >
        <Image src="/google-logo.png" height={30} width={30} alt="Google logo" />
        <span className="text-[#16057D] text-center font-poppins text-lg font-semibold leading-[27px] px-4">
          Sign in with Google
        </span>
      </button>
    </div>
  );
}
