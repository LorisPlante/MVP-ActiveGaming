// pages/_app.tsx

import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import 'tailwindcss/tailwind.css'; // Importez le fichier de styles Tailwind CSS
import BottomNavBar from '../components/NavBar';
import SignOutBtn from '../components/SignOutBtn'; // Assurez-vous que c'est bien 'SignOutBtn'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="bg-gray-900 min-h-screen flex flex-col">
       
        <Component {...pageProps} />
      
        <BottomNavBar />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
