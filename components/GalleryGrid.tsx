"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

interface GalleryGridProps {
  items: GalleryItem[];
}

const filterOptions = [
  { label: "Todos", value: "all" },
  { label: "Sinal", value: "sinal" },
  { label: "Sintoma", value: "sintoma" },
  { label: "Ambos", value: "ambos" },
];

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [filter, setFilter] = useState("all");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const modules = Array.from(new Set(items.map((i) => i.moduleSlug)));

  const filtered = items.filter((item) => {
    const signMatch = filter === "all" || item.signOrSymptom === filter;
    const modMatch = moduleFilter === "all" || item.moduleSlug === moduleFilter;
    return signMatch && modMatch;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
              style={{
                backgroundColor: filter === opt.value ? "var(--color-fito-green)" : "var(--surface)",
                color: filter === opt.value ? "white" : "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <select
          className="px-3 py-1.5 rounded-full text-xs font-semibold outline-none"
          style={{
            backgroundColor: "var(--surface)",
            color: "var(--fg)",
            border: "1px solid var(--border)",
          }}
          value={moduleFilter}
          onChange={(e) => setModuleFilter(e.target.value)}
        >
          <option value="all">Todos os módulos</option>
          {modules.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
        {filtered.length} {filtered.length === 1 ? "imagem" : "imagens"}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            className="rounded-2xl overflow-hidden text-left transition-transform hover:scale-[1.02] hover:shadow-lg"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
            onClick={() => setLightbox(item)}
          >
            <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span
                className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "white" }}
              >
                {item.signOrSymptom}
              </span>
            </div>
            <div className="p-3">
              <p className="font-semibold text-sm leading-snug mb-1" style={{ color: "var(--fg)" }}>
                {item.title}
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {item.pathogen}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{ backgroundColor: "var(--bg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-72 bg-gray-100">
              <img
                src={lightbox.imageUrl}
                alt={lightbox.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-5">
              <h2
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
              >
                {lightbox.title}
              </h2>
              <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                {lightbox.pathogen} — {lightbox.host}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg)" }}>
                {lightbox.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {lightbox.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border)" }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
