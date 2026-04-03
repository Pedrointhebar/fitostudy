import ConceptMap from "@/components/ConceptMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa Conceitual — FitoStudy",
  description: "Mapa conceitual interativo de fitopatologia",
};

export default function MapaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">🗺️</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Mapa Conceitual
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Visualize as relações entre os principais conceitos de fitopatologia. Clique nos nós para mais informações.
        </p>
      </div>
      <ConceptMap />
    </div>
  );
}
