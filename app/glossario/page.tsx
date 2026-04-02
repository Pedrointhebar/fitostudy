import GlossarySearch from "@/components/GlossarySearch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossário — FitoStudy",
  description: "Glossário de fitopatologia com 36+ termos e busca em tempo real.",
};

export default function GlossarioPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">📖</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Glossário de Fitopatologia
        </h1>
        <p style={{ color: "var(--muted)" }}>
          36+ termos essenciais com definições. Busque por termo, categoria ou palavra-chave.
        </p>
      </div>
      <GlossarySearch />
    </div>
  );
}
