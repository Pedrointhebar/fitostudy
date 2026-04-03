import DiagnosisKey from "@/components/DiagnosisKey";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico — FitoStudy",
  description: "Chave dicotômica interativa para diagnóstico de doenças de plantas",
};

export default function DiagnosticoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">🔍</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Chave de Diagnóstico
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Responda as perguntas sobre os sintomas observados para identificar o provável grupo de patógenos.
        </p>
      </div>
      <DiagnosisKey />
    </div>
  );
}
