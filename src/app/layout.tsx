import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/ui/shared/topnav";
import Footer from "./components/ui/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Nyirongo",
  description:
    "i am oliver nyirongo a software developer and a creative designer.",
  keywords:"web developer, software developer, Malawi, startup,Oliver,Nyirongo,Tech, Technology,Payment Intergration,Flutter,Fullstack developer, website generatior,website, malawi developer,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
