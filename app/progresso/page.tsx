"use client";

import { useEffect, useState } from "react";
import { topics } from "@/data/topics";
import { caseStudies } from "@/data/cases";
import { flashcards } from "@/data/flashcards";
import {
  getAllProgress,
  getAllCaseProgress,
  resetProgress,
  getDueFlashcards,
  type ModuleProgress,
  type CaseProgress,
} from "@/lib/progress";
import ModuleQuizSummary from "@/components/ModuleQuizSummary";
import ProgressBar from "@/components/ProgressBar";
import { motion } from "framer-motion";

export default function ProgressoPage() {
  const [progressMap, setProgressMap] = useState<Record<string, ModuleProgress>>({});
  const [caseProgress, setCaseProgress] = useState<CaseProgress[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [dueCount, setDueCount] = useState(0);
  const [reviewedCount, setReviewedCount] = useState(0);

  function load() {
    const all = getAllProgress();
    const map: Record<string, ModuleProgress> = {};
    all.forEach((p) => (map[p.slug] = p));
    setProgressMap(map);
    setCaseProgress(getAllCaseProgress());
    const allIds = flashcards.map((c) => c.id);
    setDueCount(getDueFlashcards(allIds).length);
    // Count reviewed = total - due (rough approximation of cards studied)
    setReviewedCount(allIds.length - getDueFlashcards(allIds).length);
  }

  useEffect(() => { load(); }, []);

  function handleReset() {
    resetProgress();
    setProgressMap({});
    setCaseProgress([]);
    setShowConfirm(false);
  }

  const completedModules = Object.keys(progressMap).length;
  const approvedModules = Object.values(progressMap).filter(
    (p) => p.score >= Math.ceil(p.total * 0.8)
  ).length;
  const casesViewed = caseProgress.length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="text-4xl block mb-3">📊</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Meu Progresso
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Acompanhe sua evolução nos quizzes de cada módulo.
        </p>
      </div>

      {/* Overall progress */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <h2
          className="text-xl font-bold mb-5"
          style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
        >
          Visão Geral
        </h2>
        <div className="space-y-4">
          <ProgressBar
            value={completedModules}
            max={topics.length}
            label="Módulos com quiz realizado"
            color="var(--color-fito-mid)"
          />
          <ProgressBar
            value={approvedModules}
            max={topics.length}
            label="Módulos aprovados (≥80%)"
            color="#16a34a"
          />
          <ProgressBar
            value={casesViewed}
            max={caseStudies.length}
            label="Estudos de caso concluídos"
            color="var(--color-fito-teal)"
          />
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            { value: completedModules, max: topics.length, label: "Quiz feitos", color: "#1e40af" },
            { value: approvedModules, max: topics.length, label: "Aprovados", color: "#166534" },
            { value: casesViewed, max: caseStudies.length, label: "Casos vistos", color: "var(--color-fito-teal)" },
          ].map(({ value, max, label, color }) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color }}
              >
                {value}<span className="text-base font-normal" style={{ color: "var(--muted)" }}>/{max}</span>
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Module list */}
      <h2
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
      >
        Módulos
      </h2>
      <div className="space-y-3 mb-8">
        {topics.map((topic) => (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ModuleQuizSummary
              topic={topic}
              progress={progressMap[topic.slug] ?? null}
            />
          </motion.div>
        ))}
      </div>

      {/* Flashcard stats section */}
      <h2
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
      >
        Flashcards
      </h2>
      <div
        className="rounded-2xl p-5 mb-8 flex flex-wrap gap-6 items-center justify-between"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <div className="flex gap-6">
          <div className="text-center">
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
            >
              {flashcards.length}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Total de cards</p>
          </div>
          <div className="text-center">
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#166534" }}
            >
              {reviewedCount}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Revisados</p>
          </div>
          <div className="text-center">
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#92400e" }}
            >
              {dueCount}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>Pendentes hoje</p>
          </div>
        </div>
        <a
          href="/flashcards"
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--color-fito-green)" }}
        >
          Estudar flashcards →
        </a>
      </div>

      {/* Cases section */}
      <h2
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
      >
        Estudos de Caso
      </h2>
      <div className="space-y-3 mb-10">
        {caseStudies.map((c) => {
          const seen = caseProgress.some((cp) => cp.id === c.id);
          return (
            <div
              key={c.id}
              className="rounded-xl px-4 py-3 flex items-center gap-4"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate" style={{ color: "var(--fg)" }}>
                  {c.title}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{c.relatedModule}</p>
              </div>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                style={{
                  backgroundColor: seen ? "#dcfce7" : "var(--surface)",
                  color: seen ? "#166534" : "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {seen ? "✓ Visto" : "Pendente"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Reset */}
      <div
        className="rounded-xl p-5"
        style={{
          backgroundColor: "#fff5f0",
          border: "1px solid #fca5a5",
        }}
      >
        <p className="text-sm font-semibold mb-1" style={{ color: "#991b1b" }}>
          Zerar progresso
        </p>
        <p className="text-xs mb-3" style={{ color: "#b91c1c" }}>
          Remove todos os resultados de quizzes e estudos de caso salvos.
        </p>
        {!showConfirm ? (
          <button
            onClick={() => setShowConfirm(true)}
            className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}
          >
            Zerar progresso
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "#dc2626" }}
            >
              Confirmar reset
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: "var(--surface)", color: "var(--fg)", border: "1px solid var(--border)" }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
