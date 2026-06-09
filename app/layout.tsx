import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aegis Auto Film | Calgary Paint Protection Film",

  description:
    "Mobile Paint Protection Film, Ceramic Coating, and Pre-Cut PPF Kits in Calgary, Alberta.",

  keywords: [
    "PPF Calgary",
    "Paint Protection Film Calgary",
    "Mobile PPF Calgary",
    "Ceramic Coating Calgary",
    "Pre Cut PPF Kit",
    "BMW PPF Calgary",
    "Cybertruck PPF Calgary",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
