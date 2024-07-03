// pages/user/index.tsx

import { SessionProvider, useSession } from 'next-auth/react';
import Image from 'next/image';
import SignInBtn from '../../components/SignInBtn';
import SignOutBtn from '../../components/SignOutBtn';


export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === 'authenticated') {
    return (
      <SessionProvider session={session}>
        <div className="bg-[#1C1C1C] min-h-screen">
          <header className="flex flex-col items-center py-11 gap-15">
            <h1 className="w-68 h-18 flex-shrink-0 gap-3 text-white text-center font-bold text-lg font-space-grotesk">
              MON PROFILE
            </h1>
            <Image
              className="rounded-full overflow-hidden border-4 border-blue-600 filter drop-shadow-xl gap-15"
              src={session?.user?.image}
              width={70}
              height={70}
              alt="User Profile Picture"
            />
          </header>
          <main className="flex justify-center gap-10">
            <div className="p-0 rounded-md flex flex-col max-w-md mx-auto">
              <svg
                className="w-24 h-0 mx-auto"
                stroke="#583DFF"
                strokeWidth="1"
              />
              <div className="text-white text-center font-space-grotesk font-bold text-xl">
                {session?.user?.name}
              </div>
              <div className="flex justify-around mt-4">
                <div className="inline-flex p-3 items-start gap-4 flex-col items-center">
                  <Image src="/Alarm.svg" alt="Icon 1" width={32} height={32} />
                  <span className="text-white text-center font-space-grotesk font-semibold text-lg leading-5">
                    130
                  </span>
                  <span className="text-white text-center font-space-grotesk text-sm leading-2">
                    Heures
                  </span>
                </div>
                <div className="inline-flex p-3 items-start gap-4 flex-col items-center">
                  <Image src="/FireSimple.svg" alt="Icon 2" width={32} height={32} />
                  <span className="text-white text-center font-space-grotesk font-semibold text-lg leading-5">
                    1200
                  </span>
                  <span className="text-white text-center font-space-grotesk text-sm leading-2">
                    Calories
                  </span>
                </div>
                <div className="inline-flex p-3 items-start gap-4 flex-col items-center">
                  <Image src="/Heartbeat.svg" alt="Icon 3" width={32} height={32} />
                  <span className="text-white text-center font-space-grotesk font-semibold text-lg leading-5">
                    500
                  </span>
                  <span className="text-white text-center font-space-grotesk text-sm leading-2">
                    Entraînements
                  </span>
                </div>
                <div className="inline-flex p-3 items-start gap-4 flex-col items-center">
                  <Image src="/Gift.svg" alt="Icon 4" width={32} height={32} />
                  <span className="text-white text-center font-space-grotesk font-semibold text-lg leading-5">
                    300
                  </span>
                  <span className="text-white text-center font-space-grotesk text-sm leading-2">
                    Récompenses
                  </span>
                </div>
              </div>
            </div>
          </main>
          
        
        </div>
        
      </SessionProvider>
      
    );
  } else {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#1C1C1C]">
       
         
      </div>
    );
  }
}
