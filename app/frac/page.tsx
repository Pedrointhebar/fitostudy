import { fracGroups } from "@/data/fracData";
import FracTable from "@/components/FracTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabela FRAC — FitoStudy",
  description: "Grupos FRAC de fungicidas com mecanismos de ação e resistência",
};

export default function FracPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">🧪</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Tabela FRAC
        </h1>
        <p style={{ color: "var(--muted)" }}>
          {fracGroups.length} grupos de fungicidas classificados pelo mecanismo de ação (Fungicide Resistance Action Committee).
        </p>
      </div>
      <FracTable groups={fracGroups} />
    </div>
  );
}
