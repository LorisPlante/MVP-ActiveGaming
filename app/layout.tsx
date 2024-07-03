import "./globals.css";
import { NextAuthProvider } from "./Providers";
import { ReactNode } from "react"; // Import ReactNode type

interface RootLayoutProps {
  children: ReactNode; // Specify children prop as ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <html lang="fr-FR">
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/medias/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/medias/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/medias/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/medias/img/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/medias/img/favicon/safari-pinned-tab.svg" color="#6a3aee" />
          <link rel="shortcut icon" href="/medias/img/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#161616" />
          <meta name="msapplication-config" content="/medias/img/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#161616" />
        </head>
        <body>
          <NextAuthProvider>
            <div className="max-w-3xl mx-auto">{children}</div>
          </NextAuthProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
