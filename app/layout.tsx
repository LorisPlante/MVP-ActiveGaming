


import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "../app/Providers";
import { ReactNode } from "react"; // Import ReactNode type

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode; // Specify children prop as ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <NextAuthProvider>
            <div className="max-w-3xl mx-auto">
            
              {children}
            </div>
          </NextAuthProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
