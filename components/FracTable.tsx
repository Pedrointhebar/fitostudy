"use client";

import { useState } from "react";
import type { FracGroup } from "@/data/fracData";

interface FracTableProps {
  groups: FracGroup[];
}

const riskColors = {
  alto: { color: "#991b1b", bg: "#fee2e2" },
  médio: { color: "#92400e", bg: "#fef3c7" },
  baixo: { color: "#166534", bg: "#dcfce7" },
};

export default function FracTable({ groups }: FracTableProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<FracGroup | null>(null);

  const filtered = groups.filter((g) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      g.name.toLowerCase().includes(q) ||
      g.commonName.toLowerCase().includes(q) ||
      g.activeIngredients.some((a) => a.toLowerCase().includes(q)) ||
      g.targetPathogens.some((p) => p.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      <input
        className="w-full mb-4 px-4 py-2 rounded-xl text-sm outline-none"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
        }}
        placeholder="Buscar por nome, ingrediente ativo, patógeno…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-3">
        {filtered.map((group) => {
          const risk = riskColors[group.resistanceRisk];
          const isOpen = selected?.code === group.code;

          return (
            <div
              key={group.code}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <button
                className="w-full flex items-center gap-4 p-4 text-left"
                style={{ backgroundColor: "var(--surface)" }}
                onClick={() => setSelected(isOpen ? null : group)}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: "var(--color-fito-light)", color: "var(--color-fito-green)" }}
                >
                  {group.code}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>
                    {group.name}
                  </p>
                  <p className="text-xs truncate" style={{ color: "var(--muted)" }}>
                    {group.targetSite}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ backgroundColor: risk.bg, color: risk.color }}
                  >
                    Resistência {group.resistanceRisk}
                  </span>
                  <span style={{ color: "var(--muted)" }}>{isOpen ? "▲" : "▼"}</span>
                </div>
              </button>

              {isOpen && (
                <div
                  className="px-4 pb-4 pt-2"
                  style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
                        Ingredientes ativos
                      </p>
                      <ul className="space-y-0.5">
                        {group.activeIngredients.map((ai) => (
                          <li key={ai} style={{ color: "var(--fg)" }}>• {ai}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
                        Patógenos-alvo
                      </p>
                      <ul className="space-y-0.5">
                        {group.targetPathogens.map((p) => (
                          <li key={p} style={{ color: "#166534" }}>✓ {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
                        Ineficaz contra
                      </p>
                      <ul className="space-y-0.5">
                        {group.notEffectiveAgainst.map((p) => (
                          <li key={p} style={{ color: "#991b1b" }}>✗ {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
                        Exemplos comerciais
                      </p>
                      <ul className="space-y-0.5">
                        {group.examples.map((e) => (
                          <li key={e} style={{ color: "var(--fg)" }}>• {e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="mt-3 p-3 rounded-lg text-xs leading-relaxed"
                    style={{ backgroundColor: "var(--surface)", color: "var(--muted)" }}
                  >
                    {group.notes}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
