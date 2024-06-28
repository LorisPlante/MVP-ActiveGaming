"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";
import Navbar from "../components/NavBar";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <header className= "bg-[#EDEAFF]" >
           
          <Navbar />
         
        </header>
        <main className="flex justify-center mt-8">
          <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200 max-w-md mx-auto">
            {session?.user?.image && (
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={60}
                height={60}
                alt="User Profile Picture"
              />
            )}
            <div>
              Name: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
              Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <div className="flex justify-center mt-8">
        <SignInBtn />
      </div>
    );
  }
}
