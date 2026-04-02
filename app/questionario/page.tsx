"use client";

import { useMemo } from "react";
import { quizQuestions, shuffleQuestions } from "@/data/quiz";
import QuizEngine from "@/components/QuizEngine";

export default function QuestionarioPage() {
  // Take 2 questions from each of the 11 modules for a balanced general quiz
  const generalQuestions = useMemo(() => {
    const byModule: Record<string, typeof quizQuestions> = {};
    quizQuestions.forEach((q) => {
      if (!byModule[q.moduleSlug]) byModule[q.moduleSlug] = [];
      byModule[q.moduleSlug].push(q);
    });
    const selected = Object.values(byModule).flatMap((qs) =>
      shuffleQuestions(qs).slice(0, 2)
    );
    return shuffleQuestions(selected);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">✏️</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Questionário Geral
        </h1>
        <p style={{ color: "var(--muted)" }}>
          {generalQuestions.length} questões de todos os módulos, embaralhadas a cada sessão.
          Para resultado salvo no progresso, use o quiz de cada módulo.
        </p>
      </div>
      <QuizEngine
        questions={generalQuestions}
        title="Questionário Geral — FitoStudy"
      />
    </div>
  );
}
