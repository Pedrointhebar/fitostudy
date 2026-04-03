"use client";

import { useState } from "react";
import Link from "next/link";
import { diagnosisTree, getNodeById, type DiagnosisNode, type DiagnosisResult } from "@/data/diagnosisTree";

export default function DiagnosisKey() {
  const [history, setHistory] = useState<string[]>(["1"]);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const currentId = history[history.length - 1];
  const currentNode = getNodeById(currentId);

  function answer(nextId: string) {
    const next = getNodeById(nextId);
    if (!next) return;
    setHistory([...history, nextId]);
    if (next.result) {
      setResult(next.result);
    }
  }

  function back() {
    if (history.length <= 1) return;
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    const prevId = newHistory[newHistory.length - 1];
    const prevNode = getNodeById(prevId);
    if (prevNode?.result) {
      setResult(prevNode.result);
    } else {
      setResult(null);
    }
  }

  function restart() {
    setHistory(["1"]);
    setResult(null);
  }

  const confidenceColor = result?.confidence === "provável" ? "#166534" : "#92400e";
  const confidenceBg = result?.confidence === "provável" ? "#dcfce7" : "#fef3c7";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-1 mb-4">
        {history.map((id, i) => {
          const n = getNodeById(id);
          return (
            <span key={id} className="flex items-center gap-1">
              {i > 0 && <span style={{ color: "var(--muted)" }}>›</span>}
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: i === history.length - 1 ? "var(--color-fito-light)" : "var(--surface)",
                  color: i === history.length - 1 ? "var(--color-fito-green)" : "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {n?.result ? n.result.group.split(" ")[0] : `Passo ${i + 1}`}
              </span>
            </span>
          );
        })}
      </div>

      {!result && currentNode && (
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p
            className="text-lg font-semibold mb-6 leading-snug"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
          >
            {currentNode.question}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {currentNode.yes && (
              <button
                onClick={() => answer(currentNode.yes!)}
                className="flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-colors text-white"
                style={{ backgroundColor: "var(--color-fito-green)" }}
              >
                {currentNode.yesLabel ?? "Sim"}
              </button>
            )}
            {currentNode.no && (
              <button
                onClick={() => answer(currentNode.no!)}
                className="flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--fg)",
                  border: "2px solid var(--border)",
                }}
              >
                {currentNode.noLabel ?? "Não"}
              </button>
            )}
          </div>
        </div>
      )}

      {result && (
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--surface)", border: "2px solid var(--color-fito-green)" }}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: confidenceBg, color: confidenceColor }}
              >
                {result.confidence === "provável" ? "Diagnóstico provável" : "Diagnóstico possível"}
              </span>
              <h2
                className="text-xl font-bold mt-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
              >
                {result.group}
              </h2>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg)" }}>
            {result.description}
          </p>

          <div className="mb-4">
            <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--muted)" }}>
              Exemplos
            </p>
            <ul className="space-y-1">
              {result.examples.map((ex) => (
                <li key={ex} className="text-sm flex items-start gap-2" style={{ color: "var(--fg)" }}>
                  <span style={{ color: "var(--color-fito-mid)" }}>•</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--muted)" }}>
              Controle
            </p>
            <ul className="space-y-1">
              {result.controlHints.map((h) => (
                <li key={h} className="text-sm flex items-start gap-2" style={{ color: "var(--fg)" }}>
                  <span style={{ color: "var(--color-fito-teal)" }}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link
              href={`/${result.moduleSlug}`}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--color-fito-green)" }}
            >
              Ver módulo →
            </Link>
            <button
              onClick={back}
              className="px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              ← Voltar
            </button>
            <button
              onClick={restart}
              className="px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              Reiniciar
            </button>
          </div>
        </div>
      )}

      {!result && history.length > 1 && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={back}
            className="px-4 py-2 rounded-xl text-sm font-medium"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
              border: "1px solid var(--border)",
            }}
          >
            ← Voltar
          </button>
          <button
            onClick={restart}
            className="px-4 py-2 rounded-xl text-sm font-medium"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}
