import type { Metadata, Viewport } from "next";
import { Alex_Brush, Fraunces, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const harmera = localFont({
  src: "../public/fonts/Harmera-Regular.otf",
  variable: "--font-harmera",
  display: "swap",
});

const primate = localFont({
  src: "../public/fonts/Primate-Regular.otf",
  variable: "--font-primate",
  display: "swap",
});

const pillar = localFont({
  src: "../public/fonts/Pillar-Regular.otf",
  variable: "--font-pillar",
  display: "swap",
});

const craze = localFont({
  src: "../public/fonts/Craze-Regular.otf",
  variable: "--font-craze",
  display: "swap",
});

const chunko = localFont({
  src: "../public/fonts/Chunko-Bold.otf",
  variable: "--font-chunko",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jules & Jon | Wedding Celebration",
  description: "Join us in celebrating the wedding of Jules & Jon on September 18th, 2027 in Sydney.",
  icons: {
    icon: "/images/khheart.png",
    shortcut: "/images/khheart.png",
    apple: "/images/khheart.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${alexBrush.variable} ${playfair.variable} ${plusJakarta.variable} ${harmera.variable} ${primate.variable} ${pillar.variable} ${craze.variable} ${chunko.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#f6efe5] text-[#4a2824] selection:bg-[#f2cdc7] selection:text-[#b3392d]"
      >
        {children}
      </body>
    </html>
  );
}
