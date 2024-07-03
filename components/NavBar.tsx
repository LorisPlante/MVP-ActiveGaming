// components/BottomNavBar.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BottomNavBar = () => {
  const handleHomeClick = () => {
    console.log('Navigate to Home');
    // Implémentez ici la navigation vers la page d'accueil si nécessaire
  };

  const handleSearchClick = () => {
    console.log('Navigate to Search');
    // Implémentez ici la navigation vers la page de recherche si nécessaire
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[404px] h-[89px] flex justify-around items-center bg-black rounded-3xl">
       <Link href="/home">
      <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={handleHomeClick}>
        <Image src="/li_home.svg" alt="Home" width={24} height={24} />
        <span className="text-white text-xs">Home</span>
      </div>
      </Link>
      <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={handleSearchClick}>
        <Image src="/li_search.svg" alt="Search" width={24} height={24} />
        <span className="text-white text-xs">Search</span>
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <Link href="/user">
          <div className="flex flex-col items-center gap-1">
            <Image src="/li_user.svg" alt="Profile" width={24} height={24} />
            <span className="text-white text-xs">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
