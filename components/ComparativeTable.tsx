"use client";

import { useState } from "react";
import type { PathogenGroup } from "@/data/comparativeGroups";

interface ComparativeTableProps {
  groups: PathogenGroup[];
}

const columns = [
  { key: "kingdom", label: "Reino" },
  { key: "cellType", label: "Tipo Celular" },
  { key: "cellWall", label: "Parede Celular" },
  { key: "canCultureInVitro", label: "Cultivo in vitro" },
  { key: "habitat", label: "Habitat" },
];

export default function ComparativeTable({ groups }: ComparativeTableProps) {
  const [search, setSearch] = useState("");
  const [highlightKey, setHighlightKey] = useState<string | null>(null);

  const filtered = groups.filter((g) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      g.name.toLowerCase().includes(q) ||
      g.kingdom.toLowerCase().includes(q) ||
      g.examples.some((e) => e.toLowerCase().includes(q))
    );
  });

  function cellValue(group: PathogenGroup, key: string): string {
    if (key === "canCultureInVitro") {
      return (group as PathogenGroup & Record<string, unknown>)[key] ? "Sim" : "Não (obrigatório)";
    }
    return String((group as PathogenGroup & Record<string, unknown>)[key] ?? "");
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <input
          className="flex-1 px-4 py-2 rounded-xl text-sm outline-none"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--fg)",
          }}
          placeholder="Filtrar grupos (ex: fungi, vírus, oomiceto…)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: "var(--color-fito-light)" }}>
              <th
                className="px-4 py-3 text-left font-semibold"
                style={{ color: "var(--color-fito-green)", minWidth: "140px" }}
              >
                Grupo
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left font-semibold cursor-pointer hover:underline"
                  style={{
                    color: highlightKey === col.key ? "var(--color-fito-green)" : "var(--fg)",
                    minWidth: "120px",
                  }}
                  onClick={() => setHighlightKey(highlightKey === col.key ? null : col.key)}
                >
                  {col.label}
                  {highlightKey === col.key && " ▼"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((group, i) => (
              <tr
                key={group.name}
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--surface)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <td className="px-4 py-3 font-semibold" style={{ color: "var(--fg)" }}>
                  {group.name}
                </td>
                {columns.map((col) => {
                  const val = cellValue(group, col.key);
                  const isNo = val === "Não (obrigatório)";
                  const isYes = val === "Sim";
                  return (
                    <td
                      key={col.key}
                      className="px-4 py-3"
                      style={{
                        color: isNo ? "#991b1b" : isYes ? "#166534" : "var(--fg)",
                        backgroundColor:
                          highlightKey === col.key ? "rgba(59,109,17,0.04)" : undefined,
                      }}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((group) => (
          <div
            key={group.name}
            className="rounded-xl p-4"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
          >
            <h3 className="font-bold text-sm mb-2" style={{ color: "var(--fg)" }}>
              {group.name}
            </h3>
            <div className="text-xs space-y-1" style={{ color: "var(--muted)" }}>
              <p><strong>Exemplos:</strong> {group.examples.slice(0, 2).join(", ")}</p>
              <p><strong>Sintomas:</strong> {group.symptoms.slice(0, 2).join(", ")}</p>
              <p><strong>Controle:</strong> {group.controlMethods.slice(0, 2).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
