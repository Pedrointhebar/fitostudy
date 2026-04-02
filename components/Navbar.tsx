"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Módulos" },
  { href: "/glossario", label: "Glossário" },
  { href: "/questionario", label: "Questionário" },
  { href: "/bibliografia", label: "Bibliografia" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-hidden>🌿</span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
          >
            FitoStudy
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  backgroundColor: active ? "var(--color-fito-light)" : "transparent",
                  color: active ? "var(--color-fito-green)" : "var(--fg)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-lg"
              style={{ border: "1px solid var(--border)" }}
              aria-label="Alternar tema"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ border: "1px solid var(--border)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: active ? "var(--color-fito-light)" : "transparent",
                  color: active ? "var(--color-fito-green)" : "var(--fg)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
