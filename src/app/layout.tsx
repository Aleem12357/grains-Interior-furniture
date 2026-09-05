import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRAINS | Artisanal Interior Architecture & Modern 3D Furniture Showcase",
  description: "Experience luxury interior craftsmanship and interactive 3D furniture design with GRAINS. Timeless elegance for elevated living.",
  keywords: ["Interior Design", "Furniture", "Luxury Interiors", "3D Furniture", "GRAINS Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#F5F2EB] text-[#1C1917] selection:bg-[#9A7B56] selection:text-white">
        {children}
      </body>
    </html>
  );
}
