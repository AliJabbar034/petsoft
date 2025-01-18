import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interMono = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetSoft - Pet daycare software",
  description: "Take care of people pets responsibly with PetSoft. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${interMono.className} antialiased  text-sm text-zinc-900 bg-[#E5EBEC] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
