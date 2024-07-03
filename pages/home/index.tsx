import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BattlePass } from '@/types/battlePass';
import BottomNavBar from '@/components/NavBar';

const PassDeCombat = () => {
  const [battlePasses, setBattlePasses] = useState<BattlePass[]>([]);

  useEffect(() => {
    const fetchBattlePasses = async () => {
      try {
        const response = await fetch('/api/battlepasses');
        if (!response.ok) {
          throw new Error('Failed to fetch battle passes');
        }
        const data: BattlePass[] = await response.json();
        setBattlePasses(data);
      } catch (error) {
        console.error('Failed to fetch battle passes', error);
      }
    };

    fetchBattlePasses();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center bg-[#1C1C1C]">
      <div className="flex flex-col items-center w-full max-w-screen-lg px-4 py-8">
        <div className="w-12 h-8 flex-shrink-0 mb-4">
          <Image src="/logo2.svg" alt="Logo" width={46.406} height={33} />
        </div>
        <h1 className="text-white text-center font-space-grotesk text-2xl font-semibold mb-6">
          CHOISIS TON PASS
        </h1>
        <div className="flex flex-col items-center gap-6">
          {battlePasses.map((pass) => (
            <div key={pass._id}>
              <Link href={`/pass/${pass._id}`} legacyBehavior>
                <div className="cursor-pointer relative w-[300px] h-[129px] flex-shrink-0">
                  <Image
                    src={pass.image}
                    alt={pass.text}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <div className="absolute bottom-4 right-4 text-white text-right font-space-grotesk text-lg font-light">
                    {pass.text}
                    <div className="font-medium">
                      ${pass.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default PassDeCombat;