"use client";

import { useState, useMemo } from "react";
import { flashcards } from "@/data/flashcards";
import { getDueFlashcards } from "@/lib/progress";
import FlashcardDeck from "@/components/FlashcardDeck";

const modules = Array.from(new Set(flashcards.map((c) => c.moduleSlug)));

export default function FlashcardsPage() {
  const [selectedModule, setSelectedModule] = useState("all");
  const [dueOnly, setDueOnly] = useState(false);

  const filtered = useMemo(
    () =>
      selectedModule === "all"
        ? flashcards
        : flashcards.filter((c) => c.moduleSlug === selectedModule),
    [selectedModule]
  );

  const dueCount = getDueFlashcards(flashcards.map((c) => c.id)).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="text-4xl block mb-3">🃏</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Flashcards
        </h1>
        <p style={{ color: "var(--muted)" }}>
          {flashcards.length} cards com algoritmo de repetição espaçada (SM-2).
          {dueCount > 0 && (
            <span
              className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
            >
              {dueCount} pendentes
            </span>
          )}
        </p>
      </div>

      {/* Controls */}
      <div
        className="rounded-2xl p-4 mb-6 flex flex-wrap gap-3 items-center"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <select
          className="px-3 py-2 rounded-xl text-sm outline-none flex-1"
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid var(--border)",
            color: "var(--fg)",
          }}
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
        >
          <option value="all">Todos os módulos ({flashcards.length} cards)</option>
          {modules.map((m) => {
            const count = flashcards.filter((c) => c.moduleSlug === m).length;
            return (
              <option key={m} value={m}>
                {m} ({count} cards)
              </option>
            );
          })}
        </select>
        <button
          onClick={() => setDueOnly(!dueOnly)}
          className="px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          style={{
            backgroundColor: dueOnly ? "#fef3c7" : "var(--bg)",
            color: dueOnly ? "#92400e" : "var(--fg)",
            border: "1px solid var(--border)",
          }}
        >
          {dueOnly ? "📅 Só pendentes" : "📅 Só pendentes"}
        </button>
      </div>

      <FlashcardDeck cards={filtered} dueOnly={dueOnly} />
    </div>
  );
}
