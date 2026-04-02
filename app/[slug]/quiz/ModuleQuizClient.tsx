"use client";

import Link from "next/link";
import type { Topic } from "@/data/topics";
import type { QuizQuestion } from "@/data/quiz";
import QuizEngine from "@/components/QuizEngine";

interface Props {
  topic: Topic;
  questions: QuizQuestion[];
}

export default function ModuleQuizClient({ topic, questions }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" style={{ color: "var(--color-fito-green)" }}>Início</Link>
        <span>›</span>
        <Link href={`/${topic.slug}`} style={{ color: "var(--color-fito-green)" }}>
          {topic.title}
        </Link>
        <span>›</span>
        <span>Quiz</span>
      </div>

      {/* Header */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: `linear-gradient(135deg, ${topic.badgeColor} 0%, var(--surface) 100%)`,
          border: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <span
              className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
              style={{ backgroundColor: topic.color, color: "#fff" }}
            >
              {topic.badge}
            </span>
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: topic.color }}
            >
              Quiz — {topic.title}
            </h1>
          </div>
        </div>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {questions.length} questões · Resultado salvo automaticamente · Embaralhado a cada sessão
        </p>
      </div>

      <QuizEngine
        questions={questions}
        moduleSlug={topic.slug}
        title={`Quiz: ${topic.title}`}
      />

      <div className="mt-10 text-center">
        <Link href={`/${topic.slug}`} className="text-sm font-medium" style={{ color: "var(--color-fito-teal)" }}>
          ← Voltar ao módulo
        </Link>
      </div>
    </div>
  );
}
