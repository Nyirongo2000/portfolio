import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/ui/shared/topnav";
import Footer from "./components/ui/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Nyirongo",
  description:
    "I am Oliver Nyirongo, a software developer and a creative designer.",
  keywords:
    "web developer, software developer, Malawi, startup, Oliver, Nyirongo, Tech, Technology, Payment Integration, Flutter, Fullstack developer, website generator, website, Malawi developer",
  openGraph: {
    title: "Oliver Nyirongo - Software Developer & Designer",
    description:
      "I am Oliver Nyirongo, a software developer and a creative designer.",
    url: "https://olivernyirongo.online/",
    siteName: "Oliver Nyirongo",
    images: [
      {
        url: "/icon.png", 
        width: 1200,
        height: 630,
        alt: "Oliver Nyirongo Portfolio",
      },
    ],
    type: "website",
  },
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
        <Footer />
      </body>
    </html>
  );
}
