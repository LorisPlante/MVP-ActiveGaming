import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BattlePass } from "@/types/battlePass";
import Link from "next/link";
import BottomNavBar from "@/components/NavBar";

interface PassDetailsProps {
  selectedId: string;
}

const PassDetails: React.FC<PassDetailsProps> = ({ selectedId }) => {
  const [battlePasses, setBattlePasses] = useState<BattlePass[]>([]);

  useEffect(() => {
    const fetchBattlePasses = async () => {
      try {
        const response = await fetch("https://active-gaming.vercel.app/api/battlepasses");
        if (!response.ok) {
          throw new Error("Failed to fetch battle passes");
        }
        const data: BattlePass[] = await response.json();
        setBattlePasses(data);
      } catch (error) {
        console.error("Failed to fetch battle passes", error);
      }
    };

    fetchBattlePasses();
  }, []);

  const selectedBattlePass = battlePasses.find((pass) => pass._id === selectedId);

  const handleBuyPass = () => {
    // Marquer le pass comme acheté (mettre à jour en fonction de votre logique)
    const updatedPasses = battlePasses.map((pass) => {
      if (pass._id === selectedId) {
        return { ...pass, isPurchased: true };
      }
      return pass;
    });
    setBattlePasses(updatedPasses);
    // Redirection vers la page principale après l'achat
    window.location.href = "/home"; // ou utilisez Next.js Router pour une navigation plus fluide
  };

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center bg-[#1C1C1C]">
      <div className="flex flex-col items-center w-full max-w-screen-lg px-4 py-8">
        <div className="w-12 h-8 flex-shrink-0 mb-4">{selectedBattlePass && <Image src={selectedBattlePass.icon} alt="Logo" width={46.406} height={33} />}</div>
        {selectedBattlePass && (
          <>
            <div className="text-white text-center font-space-grotesk text-lg font-medium mb-6">${selectedBattlePass.price}</div>
            <h1 className="text-white text-center font-space-grotesk text-2xl font-semibold mb-6">DÉTAILS ET INFORMATION</h1>
            <div className="flex flex-row justify-center gap-5 mb-4">
              {selectedBattlePass.recompense1 && (
                <div className="flex flex-col items-center">
                  <Image src={selectedBattlePass.recompense1} alt="recompense1" width={50} height={50} />
                  <div className="text-white text-center font-space-grotesk text-sm">MONTURE</div>
                </div>
              )}
              {selectedBattlePass.recompense2 && (
                <div className="flex flex-col items-center">
                  <Image src={selectedBattlePass.recompense2} alt="recompense2" width={50} height={50} />
                  <div className="text-white text-center font-space-grotesk text-sm">ARME</div>
                </div>
              )}
              {selectedBattlePass.recompense3 && (
                <div className="flex flex-col items-center">
                  <Image src={selectedBattlePass.recompense3} alt="recompense3" width={50} height={50} />
                  <div className="text-white text-center font-space-grotesk text-sm">SKIN</div>
                </div>
              )}
              {selectedBattlePass.recompense4 && (
                <div className="flex flex-col items-center">
                  <Image src={selectedBattlePass.recompense4} alt="recompense4" width={50} height={50} />
                  <div className="text-white text-center font-space-grotesk text-sm">TITLE</div>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-white text-center font-space-grotesk text-2xl font-semibold mb-6">DÉFIS À RÉALISER</h1>
              <div className="flex flex-row justify-center gap-5 mb-6">
                {selectedBattlePass.Defis_img1 && (
                  <div className="flex flex-col items-center">
                    <Image src={selectedBattlePass.Defis_img1} alt="Defis_img1" width={100} height={100} />
                    <div className="text-white text-center font-space-grotesk text-sm">{selectedBattlePass.Defis_text1}</div>
                  </div>
                )}
                {selectedBattlePass.Defis_img2 && (
                  <div className="flex flex-col items-center">
                    <Image src={selectedBattlePass.Defis_img2} alt="Defis_img2" width={100} height={100} />
                    <div className="text-white text-center font-space-grotesk text-sm">{selectedBattlePass.Defis_text2}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-6">
              <button
                className="border-2 border-[#583DFF] bg-[#583DFF] hover:bg-purple-700 text-white font-space-grotesk font-semibold py-2 px-6 rounded-lg focus:outline-none"
                onClick={handleBuyPass}>
                Acheter
              </button>
            </div>
          </>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default PassDetails;
