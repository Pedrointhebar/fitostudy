import { cultures } from "@/data/cultureMatrix";
import CultureMatrix from "@/components/CultureMatrix";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matriz de Culturas — FitoStudy",
  description: "Matriz de culturas agrícolas versus grupos de patógenos",
};

export default function CulturasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">🌾</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Matriz Culturas × Patógenos
        </h1>
        <p style={{ color: "var(--muted)" }}>
          {cultures.length} culturas agrícolas e seus principais problemas fitossanitários. Clique nas células para detalhes.
        </p>
      </div>
      <CultureMatrix cultures={cultures} />
    </div>
  );
}
