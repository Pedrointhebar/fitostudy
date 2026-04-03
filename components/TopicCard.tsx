"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Topic } from "@/data/topics";
import type { ModuleProgress } from "@/lib/progress";
import { getProgressBadge, getReadingCompleted } from "@/lib/progress";
import { useEffect, useState } from "react";

interface TopicCardProps {
  topic: Topic;
  index: number;
  progress?: ModuleProgress | null;
}

export default function TopicCard({ topic, index, progress }: TopicCardProps) {
  const badge = getProgressBadge(progress ?? null);
  const [readingDone, setReadingDone] = useState(false);
  useEffect(() => {
    setReadingDone(getReadingCompleted(topic.slug));
  }, [topic.slug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="h-full"
    >
      <Link href={`/${topic.slug}`} className="block group h-full">
        <div
          className="h-full rounded-2xl p-5 flex flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          {/* Top row: module badge + quiz score */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: topic.badgeColor, color: topic.color }}
            >
              {topic.badge}
            </span>
            <div className="flex items-center gap-1">
              {readingDone && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                  title="Leitura concluída"
                >
                  ✓ lido
                </span>
              )}
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: badge.bg, color: badge.color }}
              >
                {badge.label}
              </span>
            </div>
          </div>

          {/* Icon + Title */}
          <div className="flex items-start gap-3 mb-2">
            <span className="text-3xl leading-none">{topic.icon}</span>
            <h2
              className="text-lg font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: topic.color }}
            >
              {topic.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>
            {topic.description}
          </p>

          {/* Key terms */}
          <div className="flex flex-wrap gap-1 mb-4">
            {topic.keyTerms.slice(0, 3).map((term) => (
              <span
                key={term}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: topic.badgeColor, color: topic.color }}
              >
                {term}
              </span>
            ))}
            {topic.keyTerms.length > 3 && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: "var(--muted)" }}>
                +{topic.keyTerms.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-auto">
            <span
              className="text-sm font-medium transition-transform group-hover:translate-x-1 inline-block"
              style={{ color: topic.color }}
            >
              Estudar →
            </span>
            <Link
              href={`/${topic.slug}/quiz`}
              onClick={(e) => e.stopPropagation()}
              className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: topic.badgeColor,
                color: topic.color,
                border: `1px solid ${topic.color}30`,
              }}
            >
              ✏️ Quiz
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
