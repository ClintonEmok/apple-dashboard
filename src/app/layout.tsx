import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNav from "@/components/GlobalNav";
import SubNav from "@/components/SubNav";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Apple Design System — Dashboard Showcase",
  description: "A live component dashboard built with Apple's design tokens from the DESIGN.md spec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", minHeight: '100%' }}>
        <GlobalNav />
        <SubNav />
        <Sidebar />
        <main className="main-content" style={{ marginLeft: 240, marginTop: 96, padding: '32px 48px 48px', maxWidth: 1200 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
