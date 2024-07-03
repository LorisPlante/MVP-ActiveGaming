"use client";

import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignOutBtn() {
  const { status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "https://active-gaming.vercel.app/" });
  };

  return (
    <div className="bg-[#EDEAFF] flex justify-center items-center min-h-screen">
      {status === "authenticated" ? (
        <button onClick={handleSignOut} className="bg-slate-900 text-white px-6 py-2 rounded-md">
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn("google")} className="bg-slate-900 text-white px-6 py-2 rounded-md">
          Sign In
        </button>
      )}
    </div>
  );
}
