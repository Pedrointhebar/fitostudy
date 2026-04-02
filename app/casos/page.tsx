import { caseStudies } from "@/data/cases";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudos de Caso — FitoStudy",
  description: "3 estudos de caso interativos de fitopatologia com revelação progressiva.",
};

export default function CasosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">🧪</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Estudos de Caso
        </h1>
        <p style={{ color: "var(--muted)" }}>
          3 casos reais hipotéticos com revelação progressiva. Tente resolver antes de ver a solução!
        </p>
      </div>

      <div className="space-y-4">
        {caseStudies.map((c) => (
          <CaseStudyCard key={c.id} caseStudy={c} compact />
        ))}
      </div>
    </div>
  );
}
