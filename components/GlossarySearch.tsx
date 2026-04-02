"use client";

import { useState, useMemo } from "react";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";
import { motion, AnimatePresence } from "framer-motion";

export default function GlossarySearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return glossaryTerms.filter((t) => {
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      const matchesCat = activeCategory === "Todos" || t.category === activeCategory;
      return matchesQuery && matchesCat;
    });
  }, [query, activeCategory]);

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔍</span>
        <input
          type="text"
          placeholder="Buscar termo ou definição..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
            color: "var(--fg)",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
            style={{ color: "var(--muted)" }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["Todos", ...glossaryCategories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors"
            style={{
              backgroundColor:
                activeCategory === cat ? "var(--color-fito-green)" : "var(--surface)",
              color: activeCategory === cat ? "#fff" : "var(--fg)",
              border: "1px solid var(--border)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
        {filtered.length} {filtered.length === 1 ? "termo encontrado" : "termos encontrados"}
      </p>

      {/* Terms list */}
      <div className="space-y-2">
        <AnimatePresence>
          {filtered.map((term) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <button
                className="w-full text-left rounded-xl px-5 py-4 transition-all"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor:
                    expanded === term.term ? "var(--color-fito-light)" : "var(--surface)",
                }}
                onClick={() =>
                  setExpanded(expanded === term.term ? null : term.term)
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="font-semibold text-base"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
                      >
                        {term.term}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--color-fito-light)",
                          color: "var(--color-fito-teal)",
                        }}
                      >
                        {term.category}
                      </span>
                    </div>
                    {expanded === term.term && (
                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: "var(--fg)" }}
                      >
                        {term.definition}
                      </p>
                    )}
                  </div>
                  <span style={{ color: "var(--muted)", flexShrink: 0 }}>
                    {expanded === term.term ? "▲" : "▼"}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-12" style={{ color: "var(--muted)" }}>
            <p className="text-4xl mb-3">🔍</p>
            <p>Nenhum termo encontrado para &quot;{query}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
