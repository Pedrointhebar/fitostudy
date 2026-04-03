"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { quizQuestions, type QuizQuestion } from "@/data/quiz";
import { topics } from "@/data/topics";

type Screen = "config" | "quiz" | "results";

interface PerModuleStats {
  slug: string;
  title: string;
  correct: number;
  total: number;
}

export default function RevisaoPage() {
  const [screen, setScreen] = useState<Screen>("config");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [questionsPerSession, setQuestionsPerSession] = useState(10);

  // Quiz state
  const [queue, setQueue] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<{ qId: string; correct: boolean; moduleSlug: string }[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const modules = Array.from(new Set(quizQuestions.map((q) => q.moduleSlug)));

  function toggleModule(slug: string) {
    setSelectedModules((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function selectAll() {
    setSelectedModules(modules);
  }

  function startQuiz() {
    const mods = selectedModules.length > 0 ? selectedModules : modules;
    const pool = quizQuestions.filter((q) => mods.includes(q.moduleSlug));
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, questionsPerSession);
    setQueue(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers([]);
    setElapsed(0);
    setScreen("quiz");
  }

  useEffect(() => {
    if (screen === "quiz") {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [screen]);

  function formatTime(secs: number) {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function handleAnswer(idx: number) {
    if (showFeedback) return;
    setSelectedAnswer(idx);
    setShowFeedback(true);
    const q = queue[currentIndex];
    setAnswers((prev) => [
      ...prev,
      { qId: q.id, correct: idx === q.correctIndex, moduleSlug: q.moduleSlug },
    ]);
  }

  function handleNext() {
    const next = currentIndex + 1;
    if (next >= queue.length) {
      if (timerRef.current) clearInterval(timerRef.current);
      setScreen("results");
    } else {
      setCurrentIndex(next);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }

  const q = queue[currentIndex];
  const correctCount = answers.filter((a) => a.correct).length;

  // Per-module stats
  const perModule: PerModuleStats[] = Array.from(
    new Set(answers.map((a) => a.moduleSlug))
  ).map((slug) => {
    const topicInfo = topics.find((t) => t.slug === slug);
    const modAnswers = answers.filter((a) => a.moduleSlug === slug);
    return {
      slug,
      title: topicInfo?.title ?? slug,
      correct: modAnswers.filter((a) => a.correct).length,
      total: modAnswers.length,
    };
  });

  if (screen === "config") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <span className="text-4xl block mb-3">⏱️</span>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
          >
            Revisão Rápida
          </h1>
          <p style={{ color: "var(--muted)" }}>
            Configure sua sessão de revisão com timer.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-bold mb-4" style={{ color: "var(--fg)" }}>
            Selecionar módulos
          </h2>
          <button
            onClick={selectAll}
            className="mb-3 text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: "var(--color-fito-light)", color: "var(--color-fito-green)" }}
          >
            Selecionar todos
          </button>
          <div className="grid grid-cols-2 gap-2">
            {modules.map((slug) => {
              const topic = topics.find((t) => t.slug === slug);
              const isSelected = selectedModules.includes(slug);
              return (
                <button
                  key={slug}
                  onClick={() => toggleModule(slug)}
                  className="rounded-xl px-3 py-2 text-sm text-left transition-colors"
                  style={{
                    backgroundColor: isSelected ? "var(--color-fito-light)" : "var(--bg)",
                    color: isSelected ? "var(--color-fito-green)" : "var(--fg)",
                    border: `1px solid ${isSelected ? "var(--color-fito-green)" : "var(--border)"}`,
                    fontWeight: isSelected ? "600" : "400",
                  }}
                >
                  {topic?.icon} {topic?.title ?? slug}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-bold mb-4" style={{ color: "var(--fg)" }}>
            Número de questões
          </h2>
          <div className="flex flex-wrap gap-2">
            {[5, 10, 15, 20].map((n) => (
              <button
                key={n}
                onClick={() => setQuestionsPerSession(n)}
                className="w-14 h-14 rounded-xl font-bold text-lg transition-colors"
                style={{
                  backgroundColor: questionsPerSession === n ? "var(--color-fito-green)" : "var(--bg)",
                  color: questionsPerSession === n ? "white" : "var(--fg)",
                  border: "1px solid var(--border)",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="w-full py-4 rounded-xl font-bold text-white text-lg"
          style={{ backgroundColor: "var(--color-fito-green)" }}
        >
          Iniciar revisão →
        </button>
      </div>
    );
  }

  if (screen === "quiz" && q) {
    const progress = (currentIndex / queue.length) * 100;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
            {currentIndex + 1} / {queue.length}
          </span>
          <span
            className="text-sm font-bold px-3 py-1 rounded-full font-mono"
            style={{ backgroundColor: "var(--surface)", color: "var(--fg)", border: "1px solid var(--border)" }}
          >
            ⏱ {formatTime(elapsed)}
          </span>
        </div>

        {/* Progress */}
        <div
          className="h-2 rounded-full overflow-hidden mb-6"
          style={{ backgroundColor: "var(--border)" }}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, backgroundColor: "var(--color-fito-mid)" }}
          />
        </div>

        {/* Question */}
        <div
          className="rounded-2xl p-6 mb-4"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p
            className="text-xs font-semibold mb-3"
            style={{ color: "var(--muted)" }}
          >
            {q.moduleSlug}
          </p>
          <p
            className="text-lg font-semibold leading-snug"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
          >
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-4">
          {q.options.map((opt, i) => {
            let bg = "var(--surface)";
            let color = "var(--fg)";
            let border = "1px solid var(--border)";

            if (showFeedback) {
              if (i === q.correctIndex) {
                bg = "#dcfce7"; color = "#166534"; border = "2px solid #166534";
              } else if (i === selectedAnswer) {
                bg = "#fee2e2"; color = "#991b1b"; border = "2px solid #991b1b";
              }
            } else if (selectedAnswer === i) {
              bg = "var(--color-fito-light)"; color = "var(--color-fito-green)";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm transition-colors"
                style={{ backgroundColor: bg, color, border }}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showFeedback && (
          <div
            className="rounded-xl p-4 mb-4 text-sm leading-relaxed"
            style={{
              backgroundColor: selectedAnswer === q.correctIndex ? "#dcfce7" : "#fef3c7",
              color: selectedAnswer === q.correctIndex ? "#166534" : "#92400e",
            }}
          >
            <strong>{selectedAnswer === q.correctIndex ? "Correto! " : "Incorreto. "}</strong>
            {q.explanation}
          </div>
        )}

        {showFeedback && (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl font-bold text-white"
            style={{ backgroundColor: "var(--color-fito-green)" }}
          >
            {currentIndex + 1 < queue.length ? "Próxima →" : "Ver resultados"}
          </button>
        )}
      </div>
    );
  }

  if (screen === "results") {
    const accuracy = queue.length > 0 ? Math.round((correctCount / queue.length) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <span className="text-5xl block mb-3">
            {accuracy >= 80 ? "🏆" : accuracy >= 60 ? "👍" : "📚"}
          </span>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
          >
            Resultados
          </h1>
        </div>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold" style={{ color: "#166534" }}>{correctCount}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Certas</p>
            </div>
            <div>
              <p className="text-3xl font-bold" style={{ color: "var(--color-fito-green)" }}>{accuracy}%</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Acertos</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-mono" style={{ color: "var(--fg)" }}>
                {formatTime(elapsed)}
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>Tempo</p>
            </div>
          </div>
        </div>

        {perModule.length > 0 && (
          <div
            className="rounded-2xl p-6 mb-6"
            style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h2 className="font-bold mb-4" style={{ color: "var(--fg)" }}>Desempenho por módulo</h2>
            <div className="space-y-3">
              {perModule.map((m) => {
                const acc = Math.round((m.correct / m.total) * 100);
                return (
                  <div key={m.slug}>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: "var(--fg)" }}>{m.title}</span>
                      <span style={{ color: "var(--muted)" }}>
                        {m.correct}/{m.total} ({acc}%)
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--border)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${acc}%`,
                          backgroundColor: acc >= 80 ? "#16a34a" : acc >= 60 ? "var(--color-fito-mid)" : "#dc2626",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => { setScreen("config"); setSelectedModules([]); }}
            className="flex-1 py-3 rounded-xl font-bold text-white"
            style={{ backgroundColor: "var(--color-fito-green)" }}
          >
            Nova sessão
          </button>
          <button
            onClick={startQuiz}
            className="flex-1 py-3 rounded-xl font-semibold"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
              border: "1px solid var(--border)",
            }}
          >
            Repetir mesma config
          </button>
        </div>
      </div>
    );
  }

  return null;
}
