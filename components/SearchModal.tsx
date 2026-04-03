"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { buildSearchIndex, search, type SearchResult } from "@/lib/search";

const typeLabels: Record<SearchResult["type"], string> = {
  module: "Módulo",
  glossary: "Glossário",
  quiz: "Quiz",
  flashcard: "Flashcard",
  case: "Caso",
  timeline: "Timeline",
};

const typeColors: Record<SearchResult["type"], string> = {
  module: "#dcfce7",
  glossary: "#dbeafe",
  quiz: "#fef3c7",
  flashcard: "#f3e8ff",
  case: "#fee2e2",
  timeline: "#e0f2fe",
};

interface SearchModalProps {
  onClose: () => void;
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [index] = useState(() => buildSearchIndex());
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setResults(search(query, index));
    setSelected(0);
  }, [query, index]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[selected]) {
      navigate(results[selected].url);
    }
  }

  function navigate(url: string) {
    router.push(url);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh]"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span style={{ color: "var(--muted)" }}>🔍</span>
          <input
            ref={inputRef}
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: "var(--fg)" }}
            placeholder="Buscar módulos, glossário, flashcards…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
          />
          <kbd
            className="text-xs px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            ESC
          </kbd>
        </div>

        {results.length > 0 ? (
          <ul className="max-h-[60vh] overflow-y-auto py-2">
            {results.map((r, i) => (
              <li key={`${r.type}-${r.url}-${i}`}>
                <button
                  className="w-full text-left px-4 py-2.5 flex items-start gap-3 transition-colors"
                  style={{
                    backgroundColor: i === selected ? "var(--surface)" : "transparent",
                  }}
                  onMouseEnter={() => setSelected(i)}
                  onClick={() => navigate(r.url)}
                >
                  <span
                    className="text-xs px-1.5 py-0.5 rounded font-semibold shrink-0 mt-0.5"
                    style={{ backgroundColor: typeColors[r.type], color: "#374151" }}
                  >
                    {typeLabels[r.type]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: "var(--fg)" }}>
                      {r.title}
                    </p>
                    <p className="text-xs truncate" style={{ color: "var(--muted)" }}>
                      {r.excerpt}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : query ? (
          <p className="px-4 py-6 text-center text-sm" style={{ color: "var(--muted)" }}>
            Nenhum resultado para &quot;{query}&quot;
          </p>
        ) : (
          <p className="px-4 py-6 text-center text-sm" style={{ color: "var(--muted)" }}>
            Digite para pesquisar em todo o conteúdo
          </p>
        )}
      </div>
    </div>
  );
}
