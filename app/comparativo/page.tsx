import { pathogenGroups } from "@/data/comparativeGroups";
import ComparativeTable from "@/components/ComparativeTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparativo de Patógenos — FitoStudy",
  description: "Tabela comparativa dos principais grupos de patógenos vegetais",
};

export default function ComparativoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">⚖️</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Comparativo de Patógenos
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Compare os {pathogenGroups.length} grupos de patógenos vegetais em características estruturais e epidemiológicas.
        </p>
      </div>
      <ComparativeTable groups={pathogenGroups} />
    </div>
  );
}
