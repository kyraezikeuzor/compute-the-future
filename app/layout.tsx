import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'
import { ContactBanner } from '@/components/ui/contact-banner'


export const metadata: Metadata = {
  title: "We Are Kids Teaching Kids Code - Compute the Future",
  description: "Compute the Future is passionate about teaching coding, empowering the next generation to make an impact through tech.",
  openGraph: {
    images: [
      {
        url: "/images/meta/meta-og.png",
        width: 1200,
        height: 630,
        alt: "We Are Kids Teaching Kids Code - Compute the Future",
      },
    ],
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
        <Navbar/>
        <main className="flex-1 container mx-auto px-6 py-28 lg:px-16 xl:px-28 2xl:max-w-[1400px]  bg-[url('/graphics/grid-bg.png')] bg-contain">
          {children}
        </main>
        <ContactBanner/>
        <Footer/>
      </body>
    </html>
  );
}
