import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'
import { FAQ } from '@/components/ui/faq'
import { ContactBanner } from '@/components/ui/contact-banner'


export const metadata: Metadata = {
  title: "We Are Kids Teaching Kids Code - Compute the Future",
  description: "Compute the Future is passionate about teaching coding, empowering the next generation to make an impact through tech.",
  openGraph: {
    images: [
      {
        url: "/images/meta/meta-og.jpg",
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
        <main className="flex-1 container mx-auto px-6 py-16 lg:px-8 xl:px-12 2xl:max-w-[1400px]  bg-[url('/graphics/grid-bg.png')] bg-contain">
          {children}
        </main>
        <ContactBanner/>
        <Footer/>
      </body>
    </html>
  );
}
