import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
        <title>Challenge Pool</title>
        <meta name="description" content="Some description here" />
        <meta
            name="keywords"
            content="Blockchain,AI,Artificial Intelligence,Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
            property="og:image"
            content=""
        />
        <meta name="twitter:card" content="summary" />
        <meta
            name="twitter:image"
            content=""
        />
    </head>
      <body className={clashDisplay.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}