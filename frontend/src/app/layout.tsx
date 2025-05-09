"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Footer from "@/components/Footer";
import LoadMockData from "@/components/LoadMockData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Investor Dashboard",
//   description: "A dashboard for investors to track their portfolios and notes.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${
          geistMono.variable
        } antialiased bg-stone-800 text-stone-100 gap-2 grid grid-rows-[auto_1fr] min-h-screen font-[family-name:var(--font-geist-sans)] transition-all ease-in ${
          openSidebar
            ? "grid-cols-[140px_1fr]"
            : "grid-cols-[40px_1fr] bg-slate-900/20"
        }`}
      >
        <Header />
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <main
          // style={{ gridArea: "main" }}
          // style={{
          //   border: "2px solid black", // Border around the grid itself
          // }}
          className="grid-cols-1 col-end-3 row-start-2 row-end-5 mt-12 border border-slate-800/50 rounded-md cols-start-2"
        >
          {children}
        </main>
        <Footer />
        <LoadMockData />
      </body>
    </html>
  );
}
