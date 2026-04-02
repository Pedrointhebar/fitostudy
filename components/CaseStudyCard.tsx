"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/data/cases";
import InfoBox from "./InfoBox";
import { saveCaseViewed, getAllCaseProgress } from "@/lib/progress";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  compact?: boolean;
}

export default function CaseStudyCard({ caseStudy, compact = false }: CaseStudyCardProps) {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    const all = getAllCaseProgress();
    setViewed(all.some((c) => c.id === caseStudy.id));
  }, [caseStudy.id]);

  function handleReveal() {
    setPhase(3);
    if (!viewed) {
      saveCaseViewed(caseStudy.id);
      setViewed(true);
    }
  }

  if (compact) {
    return (
      <Link href={`/casos/${caseStudy.id}`} className="block group">
        <div
          className="rounded-2xl p-5 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">{caseStudy.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {viewed && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                  >
                    ✓ Visto
                  </span>
                )}
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "var(--color-fito-light)", color: "var(--color-fito-teal)" }}
                >
                  {caseStudy.relatedModule}
                </span>
              </div>
              <h3
                className="font-bold text-lg mb-1 leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
              >
                {caseStudy.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {caseStudy.subtitle}
              </p>
            </div>
          </div>
          <div
            className="mt-3 text-sm font-medium transition-transform group-hover:translate-x-1 inline-block"
            style={{ color: "var(--color-fito-green)" }}
          >
            Resolver caso →
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
    >
      {/* Header */}
      <div
        className="px-6 py-5"
        style={{ backgroundColor: "var(--color-fito-light)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-start gap-4">
          <span className="text-5xl">{caseStudy.icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ backgroundColor: "var(--color-fito-green)", color: "#fff" }}
              >
                Estudo de Caso
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#fff", color: "var(--color-fito-teal)" }}
              >
                📚 {caseStudy.relatedModule}
              </span>
              {viewed && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                >
                  ✓ Concluído
                </span>
              )}
            </div>
            <h2
              className="text-2xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
            >
              {caseStudy.title}
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              {caseStudy.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Phase 1: Situation */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-fito-teal)" }}
          >
            📋 Fase 1 — Situação
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
            {caseStudy.situation}
          </p>
        </div>

        {/* Phase 2: Challenge */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--color-amber-light, #FAEEDA)",
                  border: "1px solid var(--color-amber, #BA7517)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--color-amber, #BA7517)" }}
                >
                  🤔 Fase 2 — Desafio
                </p>
                <p className="text-sm font-medium leading-relaxed" style={{ color: "#78350f" }}>
                  {caseStudy.challenge}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 3: Solution */}
        <AnimatePresence>
          {phase === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-fito-green)" }}
              >
                ✅ Fase 3 — Solução
              </p>
              <div
                className="rounded-xl p-5 mb-4"
                style={{
                  backgroundColor: "var(--color-fito-light)",
                  border: "1px solid var(--color-fito-mid)",
                }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--color-fito-green)" }}>
                  🔎 Diagnóstico
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
                  {caseStudy.solution.diagnosis}
                </p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--fg)" }}>
                  💡 Explicação
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
                  {caseStudy.solution.explanation}
                </p>
              </div>
              <InfoBox
                variant={caseStudy.solution.infoBoxVariant}
                title="Manejo correto"
                content={caseStudy.solution.correctApproach}
              />
              <div className="mt-4">
                <Link
                  href={`/${caseStudy.relatedModuleSlug}`}
                  className="text-sm font-medium"
                  style={{ color: "var(--color-fito-teal)" }}
                >
                  → Revisar módulo: {caseStudy.relatedModule}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="flex gap-3 flex-wrap">
          {phase === 1 && (
            <button
              onClick={() => setPhase(2)}
              className="px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-fito-amber)" }}
            >
              Ver desafio →
            </button>
          )}
          {phase === 2 && (
            <button
              onClick={handleReveal}
              className="px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-fito-green)" }}
            >
              Ver solução ✓
            </button>
          )}
          {phase === 3 && (
            <button
              onClick={() => setPhase(1)}
              className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              ↺ Recomeçar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
