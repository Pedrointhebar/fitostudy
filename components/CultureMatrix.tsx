"use client";

import { useState } from "react";
import type { CultureEntry, CultureDisease } from "@/data/cultureMatrix";
import { pathogenGroupNames } from "@/data/cultureMatrix";

interface CultureMatrixProps {
  cultures: CultureEntry[];
}

const importanceColors = {
  alta: { bg: "#fee2e2", color: "#991b1b", label: "Alta" },
  média: { bg: "#fef3c7", color: "#92400e", label: "Média" },
  baixa: { bg: "#dcfce7", color: "#166534", label: "Baixa" },
};

export default function CultureMatrix({ cultures }: CultureMatrixProps) {
  const [selected, setSelected] = useState<{ culture: CultureEntry; group: string; diseases: CultureDisease[] } | null>(null);
  const [filter, setFilter] = useState("");

  const filtered = cultures.filter((c) =>
    !filter || c.culture.toLowerCase().includes(filter.toLowerCase())
  );

  function getCellCount(culture: CultureEntry, group: string): number {
    return (culture.pathogenGroups[group] ?? []).length;
  }

  function getCellMax(culture: CultureEntry, group: string): string {
    const diseases = culture.pathogenGroups[group] ?? [];
    if (diseases.length === 0) return "";
    const hasHigh = diseases.some((d) => d.importance === "alta");
    return hasHigh ? "alta" : diseases.some((d) => d.importance === "média") ? "média" : "baixa";
  }

  return (
    <div>
      <input
        className="mb-4 w-full max-w-xs px-4 py-2 rounded-xl text-sm outline-none"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--fg)",
        }}
        placeholder="Filtrar cultura…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full text-xs">
          <thead>
            <tr style={{ backgroundColor: "var(--color-fito-light)" }}>
              <th
                className="px-3 py-3 text-left font-semibold sticky left-0"
                style={{
                  color: "var(--color-fito-green)",
                  backgroundColor: "var(--color-fito-light)",
                  minWidth: "110px",
                }}
              >
                Cultura
              </th>
              {pathogenGroupNames.map((g) => (
                <th
                  key={g}
                  className="px-3 py-3 text-center font-semibold"
                  style={{ color: "var(--fg)", minWidth: "80px" }}
                >
                  {g}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((culture, i) => (
              <tr
                key={culture.culture}
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--surface)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <td
                  className="px-3 py-2 font-semibold sticky left-0 flex items-center gap-1"
                  style={{
                    color: "var(--fg)",
                    backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--surface)",
                  }}
                >
                  <span>{culture.icon}</span>
                  <span>{culture.culture}</span>
                </td>
                {pathogenGroupNames.map((g) => {
                  const count = getCellCount(culture, g);
                  const maxImp = getCellMax(culture, g);
                  const imp = maxImp as keyof typeof importanceColors;
                  return (
                    <td key={g} className="px-3 py-2 text-center">
                      {count > 0 ? (
                        <button
                          onClick={() =>
                            setSelected({
                              culture,
                              group: g,
                              diseases: culture.pathogenGroups[g] ?? [],
                            })
                          }
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs transition-transform hover:scale-110"
                          style={{
                            backgroundColor: importanceColors[imp]?.bg ?? "#f3f4f6",
                            color: importanceColors[imp]?.color ?? "#374151",
                          }}
                          title={`${count} doença${count > 1 ? "s" : ""}`}
                        >
                          {count}
                        </button>
                      ) : (
                        <span style={{ color: "var(--border)" }}>—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 text-xs">
        {Object.entries(importanceColors).map(([key, val]) => (
          <span
            key={key}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full"
            style={{ backgroundColor: val.bg, color: val.color }}
          >
            <span className="font-bold">●</span> Importância {val.label}
          </span>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "var(--bg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ backgroundColor: "var(--color-fito-light)", borderBottom: "1px solid var(--border)" }}
            >
              <div>
                <p className="font-bold" style={{ color: "var(--color-fito-green)" }}>
                  {selected.culture.icon} {selected.culture.culture} — {selected.group}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {selected.diseases.length} doença{selected.diseases.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button onClick={() => setSelected(null)} style={{ color: "var(--muted)" }}>✕</button>
            </div>
            <div className="p-5 space-y-3">
              {selected.diseases.map((disease) => {
                const imp = disease.importance as keyof typeof importanceColors;
                return (
                  <div
                    key={disease.name}
                    className="rounded-xl p-3"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--fg)" }}>
                          {disease.name}
                        </p>
                        <p className="text-xs italic" style={{ color: "var(--muted)" }}>
                          {disease.pathogen}
                        </p>
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold shrink-0"
                        style={{
                          backgroundColor: importanceColors[imp].bg,
                          color: importanceColors[imp].color,
                        }}
                      >
                        {importanceColors[imp].label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
