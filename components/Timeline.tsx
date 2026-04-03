"use client";

import { useState } from "react";
import type { TimelineEvent } from "@/data/timelineEvents";

interface TimelineProps {
  events: TimelineEvent[];
}

const categoryColors: Record<TimelineEvent["category"], { color: string; bg: string; label: string }> = {
  descoberta: { color: "#1e40af", bg: "#dbeafe", label: "Descoberta" },
  epidemia: { color: "#991b1b", bg: "#fee2e2", label: "Epidemia" },
  método: { color: "#6b21a8", bg: "#f3e8ff", label: "Método" },
  controle: { color: "#166534", bg: "#dcfce7", label: "Controle" },
  moderno: { color: "#0f766e", bg: "#ccfbf1", label: "Era Moderna" },
};

export default function Timeline({ events }: TimelineProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const categories = ["all", ...Object.keys(categoryColors)] as const;

  const filtered = activeCategory === "all"
    ? events
    : events.filter((e) => e.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const info = cat === "all"
            ? { label: "Todos", color: "var(--color-fito-green)", bg: "var(--color-fito-light)" }
            : categoryColors[cat as TimelineEvent["category"]];
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
              style={{
                backgroundColor: activeCategory === cat ? info.bg : "var(--surface)",
                color: activeCategory === cat ? info.color : "var(--muted)",
                border: `1px solid ${activeCategory === cat ? info.bg : "var(--border)"}`,
              }}
            >
              {cat === "all" ? "Todos" : categoryColors[cat as TimelineEvent["category"]].label}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: "var(--border)" }}
        />

        <div className="space-y-6">
          {filtered.map((event, i) => {
            const cat = categoryColors[event.category];
            const isExpanded = expanded === `${event.year}-${i}`;

            return (
              <div key={`${event.year}-${i}`} className="relative pl-14">
                {/* Dot */}
                <div
                  className="absolute left-3 top-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: cat.bg, border: `2px solid ${cat.color}` }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
                >
                  <button
                    className="w-full text-left px-4 py-4"
                    onClick={() => setExpanded(isExpanded ? null : `${event.year}-${i}`)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--color-fito-green)", fontFamily: "var(--font-display)" }}
                          >
                            {event.year}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ backgroundColor: cat.bg, color: cat.color }}
                          >
                            {cat.label}
                          </span>
                        </div>
                        <p className="font-semibold text-sm leading-snug" style={{ color: "var(--fg)" }}>
                          {event.title}
                        </p>
                      </div>
                      <span style={{ color: "var(--muted)" }} className="shrink-0 text-xs mt-1">
                        {isExpanded ? "▲" : "▼"}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div
                      className="px-4 pb-4 pt-1"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--fg)" }}>
                        {event.description}
                      </p>
                      <div
                        className="rounded-xl p-3 text-sm"
                        style={{ backgroundColor: cat.bg, color: cat.color }}
                      >
                        <strong>Importância:</strong> {event.significance}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
