"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FlashCard } from "@/data/flashcards";
import {
  saveFlashcardReview,
  getFlashcardProgress,
  getDueFlashcards,
} from "@/lib/progress";

interface FlashcardDeckProps {
  cards: FlashCard[];
  dueOnly?: boolean;
}

const qualityLabels: { q: 0 | 1 | 2 | 3 | 4 | 5; label: string; color: string; bg: string }[] = [
  { q: 0, label: "Não lembro", color: "#991b1b", bg: "#fee2e2" },
  { q: 1, label: "Errado", color: "#b45309", bg: "#fef3c7" },
  { q: 2, label: "Difícil", color: "#b45309", bg: "#fef9c3" },
  { q: 3, label: "Ok", color: "#1e40af", bg: "#dbeafe" },
  { q: 4, label: "Bom", color: "#166534", bg: "#dcfce7" },
  { q: 5, label: "Fácil!", color: "#14532d", bg: "#bbf7d0" },
];

export default function FlashcardDeck({ cards, dueOnly = false }: FlashcardDeckProps) {
  const [queue, setQueue] = useState<FlashCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [done, setDone] = useState(false);
  const [stats, setStats] = useState({ reviewed: 0, easy: 0, hard: 0 });

  useEffect(() => {
    if (dueOnly) {
      const dueIds = getDueFlashcards(cards.map((c) => c.id));
      setQueue(cards.filter((c) => dueIds.includes(c.id)));
    } else {
      setQueue([...cards]);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setDone(false);
    setStats({ reviewed: 0, easy: 0, hard: 0 });
  }, [cards, dueOnly]);

  const card = queue[currentIndex];

  function handleRate(quality: 0 | 1 | 2 | 3 | 4 | 5) {
    if (!card) return;
    saveFlashcardReview(card.id, quality);
    const isEasy = quality >= 4;
    setStats((s) => ({
      reviewed: s.reviewed + 1,
      easy: isEasy ? s.easy + 1 : s.easy,
      hard: !isEasy ? s.hard + 1 : s.hard,
    }));
    const next = currentIndex + 1;
    if (next >= queue.length) {
      setDone(true);
    } else {
      setCurrentIndex(next);
      setIsFlipped(false);
    }
  }

  function restart() {
    setQueue([...cards]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setDone(false);
    setStats({ reviewed: 0, easy: 0, hard: 0 });
  }

  if (queue.length === 0) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p className="text-4xl mb-3">🎉</p>
        <p className="font-bold text-lg" style={{ color: "var(--fg)" }}>
          {dueOnly ? "Nenhum card pendente para revisão!" : "Nenhum card disponível."}
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
          {dueOnly ? "Volte mais tarde ou estude todos os cards." : ""}
        </p>
      </div>
    );
  }

  if (done) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p className="text-4xl mb-3">✅</p>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Sessão concluída!
        </h2>
        <div className="flex justify-center gap-6 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: "var(--fg)" }}>{stats.reviewed}</p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Revisados</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: "#166534" }}>{stats.easy}</p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Fáceis</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: "#991b1b" }}>{stats.hard}</p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Difíceis</p>
          </div>
        </div>
        <button
          onClick={restart}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{ backgroundColor: "var(--color-fito-green)" }}
        >
          Estudar novamente
        </button>
      </div>
    );
  }

  const progress = ((currentIndex) / queue.length) * 100;
  const fp = getFlashcardProgress(card.id);
  const nextReview = new Date(fp.nextReview).toLocaleDateString("pt-BR");

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex-1 h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--border)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: "var(--color-fito-mid)" }}
          />
        </div>
        <span className="text-sm font-medium shrink-0" style={{ color: "var(--muted)" }}>
          {currentIndex + 1} / {queue.length}
        </span>
      </div>

      {/* Card */}
      <div
        className="relative cursor-pointer select-none"
        style={{ perspective: "1000px", height: "280px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <motion.div
          className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: "var(--surface)",
            border: "2px solid var(--color-fito-green)",
            backfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full mb-4"
            style={{
              backgroundColor: "var(--color-fito-light)",
              color: "var(--color-fito-green)",
            }}
          >
            {card.moduleSlug}
          </span>
          <p className="text-lg font-semibold leading-snug" style={{ color: "var(--fg)" }}>
            {card.front}
          </p>
          {card.hint && (
            <p className="text-xs mt-3 italic" style={{ color: "var(--muted)" }}>
              Dica: {card.hint}
            </p>
          )}
          <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
            Clique para revelar
          </p>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: "var(--color-fito-light)",
            border: "2px solid var(--color-fito-green)",
            backfaceVisibility: "hidden",
            rotateY: 180,
          }}
          animate={{ rotateY: isFlipped ? 360 : 180 }}
          transition={{ duration: 0.4 }}
        >
          <p
            className="text-base leading-relaxed whitespace-pre-line"
            style={{ color: "var(--fg)" }}
          >
            {card.back}
          </p>
          <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
            Próxima revisão: {nextReview}
          </p>
        </motion.div>
      </div>

      {/* Rating buttons */}
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6"
          >
            {qualityLabels.map(({ q, label, color, bg }) => (
              <button
                key={q}
                onClick={() => handleRate(q)}
                className="py-2 rounded-xl text-xs font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: bg, color }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isFlipped && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsFlipped(true)}
            className="px-6 py-2 rounded-xl text-sm font-medium"
            style={{
              backgroundColor: "var(--color-fito-light)",
              color: "var(--color-fito-green)",
            }}
          >
            Revelar resposta
          </button>
        </div>
      )}
    </div>
  );
}
