import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fontOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEERASH — Sovereign Enterprise Job & Task Marketplace",
  description: "Building Technology. Creating Opportunities. The premium Black & Gold enterprise marketplace with instant escrow settlement.",
  keywords: ["Enterprise", "Marketplace", "Jobs", "ATS", "Escrow", "AI Sourcing", "Sovereign"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${fontOutfit.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-bg-primary text-white-primary font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
