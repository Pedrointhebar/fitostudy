"use client";

import { useState, useMemo } from "react";
import { quizQuestions, shuffleQuestions } from "@/data/quiz";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizEngine() {
  const [questions] = useState(() => shuffleQuestions(quizQuestions));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[current];
  const answered = selected !== null;
  const isCorrect = answered && selected === question.correctIndex;

  const score = useMemo(
    () =>
      answers.reduce<number>(
        (acc, ans, i) => (ans === questions[i].correctIndex ? acc + 1 : acc),
        0
      ),
    [answers, questions]
  );

  const progress = ((current + (answered ? 1 : 0)) / questions.length) * 100;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
    setShowExplanation(false);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
      setSelected(answers[current + 1]);
      setShowExplanation(false);
    }
  }

  function handleRestart() {
    setAnswers(new Array(quizQuestions.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setShowExplanation(false);
  }

  const percentage = Math.round((score / questions.length) * 100);

  const resultMessage =
    percentage >= 87
      ? "Excelente! Você domina os conceitos de fitopatologia."
      : percentage >= 62
      ? "Bom resultado! Revise alguns módulos para consolidar o conhecimento."
      : percentage >= 37
      ? "Continue estudando! Revise os módulos com mais atenção."
      : "Não desanime! Leia os módulos com calma e tente novamente.";

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-10"
      >
        <div className="text-7xl mb-6">
          {percentage >= 87 ? "🏆" : percentage >= 62 ? "🌿" : percentage >= 37 ? "📚" : "🌱"}
        </div>
        <h2
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          {percentage}% de acertos
        </h2>
        <p className="text-lg mb-2" style={{ color: "var(--fg)" }}>
          {score} de {questions.length} questões corretas
        </p>
        <p className="mb-8 text-sm" style={{ color: "var(--muted)" }}>
          {resultMessage}
        </p>

        {/* Score bars */}
        <div className="mb-8 space-y-3 text-left">
          {questions.map((q, i) => {
            const correct = answers[i] === q.correctIndex;
            return (
              <div key={q.id} className="flex items-center gap-3 text-sm">
                <span style={{ color: correct ? "#16a34a" : "#dc2626", fontSize: "18px" }}>
                  {correct ? "✓" : "✗"}
                </span>
                <span className="flex-1 truncate" style={{ color: "var(--fg)" }}>
                  {q.question.substring(0, 60)}...
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: correct ? "#dcfce7" : "#fee2e2",
                    color: correct ? "#166534" : "#991b1b",
                  }}
                >
                  {q.topic}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleRestart}
          className="px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-fito-green)" }}
        >
          Tentar novamente
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2" style={{ color: "var(--muted)" }}>
          <span>Questão {current + 1} de {questions.length}</span>
          <span style={{ color: "var(--color-fito-green)" }}>{score} acerto{score !== 1 ? "s" : ""}</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: "var(--color-fito-mid)" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Topic badge */}
          <span
            className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-4"
            style={{ backgroundColor: "var(--color-fito-light)", color: "var(--color-fito-teal)" }}
          >
            {question.topic}
          </span>

          {/* Question */}
          <h2
            className="text-xl font-bold mb-6 leading-snug"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
          >
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => {
              let bg = "var(--surface)";
              let border = "var(--border)";
              let textColor = "var(--fg)";

              if (answered) {
                if (idx === question.correctIndex) {
                  bg = "#dcfce7";
                  border = "#16a34a";
                  textColor = "#166534";
                } else if (idx === selected) {
                  bg = "#fee2e2";
                  border = "#dc2626";
                  textColor = "#991b1b";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className="w-full text-left px-5 py-4 rounded-xl transition-all text-sm font-medium"
                  style={{
                    backgroundColor: bg,
                    border: `2px solid ${border}`,
                    color: textColor,
                    cursor: answered ? "default" : "pointer",
                  }}
                >
                  <span className="font-bold mr-2">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div
                className="rounded-xl px-5 py-4 mb-3"
                style={{
                  backgroundColor: isCorrect ? "#dcfce7" : "#fee2e2",
                  border: `1px solid ${isCorrect ? "#16a34a" : "#dc2626"}`,
                }}
              >
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: isCorrect ? "#166534" : "#991b1b" }}
                >
                  {isCorrect ? "✓ Resposta correta!" : "✗ Resposta incorreta"}
                </p>
              </div>

              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--color-fito-teal)" }}
              >
                {showExplanation ? "▲ Ocultar explicação" : "▼ Ver explicação"}
              </button>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 p-4 rounded-xl text-sm leading-relaxed"
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  {question.explanation}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Next button */}
          {answered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleNext}
              className="w-full py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-fito-green)" }}
            >
              {current + 1 >= questions.length ? "Ver resultado" : "Próxima questão →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
