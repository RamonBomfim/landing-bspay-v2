import { Header } from "@/components/Header";
import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  Libre_Franklin,
  Plus_Jakarta_Sans,
  Poppins,
} from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  style: ["normal"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
  style: ["normal"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ["normal"],
  weight: ["500", "700"],
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
  style: ["normal"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "BS Pay",
  description: "Created by Ramon Bomfim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className={`${jakarta.variable} ${poppins.variable} ${ibmPlex.variable} ${franklin.variable}`}
      >
        <main className="flex flex-col w-full h-full bg-gray-white scroll-auto">
          <Header />

          {children}
        </main>
      </body>
    </html>
  );
}
