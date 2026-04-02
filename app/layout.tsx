import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitoStudy — Fitopatologia para Agronomia",
  description:
    "Plataforma de estudo de fitopatologia com módulos completos, glossário interativo e questionários para estudantes de agronomia.",
  keywords: ["fitopatologia", "agronomia", "doenças de plantas", "estudo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="py-6 px-4 text-center text-sm" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}>
            <p>
              FitoStudy © {new Date().getFullYear()} — Material de estudo para Agronomia
            </p>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
