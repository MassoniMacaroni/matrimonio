import type { Metadata, Viewport } from "next";
import { Alex_Brush, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
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

export const metadata: Metadata = {
  title: "Jules & Jon | Wedding Celebration",
  description: "Join us in celebrating the wedding of Jules & Jon on September 18th, 2027 in Sydney.",
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
      className={`${alexBrush.variable} ${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f6efe5] text-[#4a2824] selection:bg-[#f2cdc7] selection:text-[#b3392d]">
        {children}
      </body>
    </html>
  );
}
