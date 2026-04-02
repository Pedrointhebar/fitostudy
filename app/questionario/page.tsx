import QuizEngine from "@/components/QuizEngine";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questionário — FitoStudy",
  description: "8 questões de múltipla escolha sobre fitopatologia com feedback explicativo.",
};

export default function QuestionarioPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">✏️</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Questionário
        </h1>
        <p style={{ color: "var(--muted)" }}>
          8 questões de múltipla escolha com feedback explicativo. As questões são embaralhadas a cada sessão.
        </p>
      </div>
      <QuizEngine />
    </div>
  );
}
