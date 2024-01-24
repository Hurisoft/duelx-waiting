"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletProvider from "@/app/WalletProvider";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>DuelX</title>
        <meta name="description" content="Welcome to the future of friendly competition! The Challenge Pool platform is your gateway to thrilling, decentralized showdowns where wit and intuition take center stage." />
        <meta
          name="keywords"
          content="Blockchain,AI,Artificial Intelligence,Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://duelx.xyz/duelx-preview-image.jpg"
        />
        <meta name="twitter:card" content="Welcome to the future of friendly competition! The Challenge Pool platform is your gateway to thrilling, decentralized showdowns where wit and intuition take center stage." />
        <meta
          name="twitter:image"
          content="https://duelx.xyz/duelx-preview-image.jpg"
        />
      </head>
      <body
        className={`${clashDisplay.className} relative h-full flex flex-col min-h-screen`}
      >
        <WalletProvider>
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
