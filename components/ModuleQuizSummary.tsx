"use client";

import Link from "next/link";
import type { ModuleProgress } from "@/lib/progress";
import { getProgressBadge } from "@/lib/progress";
import type { Topic } from "@/data/topics";

interface ModuleQuizSummaryProps {
  topic: Topic;
  progress: ModuleProgress | null;
}

export default function ModuleQuizSummary({ topic, progress }: ModuleQuizSummaryProps) {
  const badge = getProgressBadge(progress);

  const statusLabel =
    !progress
      ? "Pendente"
      : progress.score >= Math.ceil(progress.total * 0.8)
      ? "Aprovado"
      : progress.score <= Math.floor(progress.total * 0.4)
      ? "Revisar"
      : "Completo";

  const statusColor =
    statusLabel === "Aprovado"
      ? { bg: "#dcfce7", color: "#166534" }
      : statusLabel === "Revisar"
      ? { bg: "#fef3c7", color: "#92400e" }
      : statusLabel === "Completo"
      ? { bg: "#dbeafe", color: "#1e40af" }
      : { bg: "var(--surface)", color: "var(--muted)" };

  return (
    <div
      className="rounded-xl px-4 py-4 flex items-center gap-4"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
    >
      <span className="text-2xl">{topic.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm truncate" style={{ color: "var(--fg)" }}>
          {topic.title}
        </p>
        {progress && (
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            {new Date(progress.completedAt).toLocaleDateString("pt-BR")}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: statusColor.bg, color: statusColor.color }}
        >
          {statusLabel}
        </span>
        <span
          className="text-sm font-bold"
          style={{ color: badge.color }}
        >
          {badge.label}
        </span>
        <Link
          href={`/${topic.slug}/quiz`}
          className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: topic.badgeColor,
            color: topic.color,
          }}
        >
          {progress ? "Refazer" : "Iniciar"}
        </Link>
      </div>
    </div>
  );
}
