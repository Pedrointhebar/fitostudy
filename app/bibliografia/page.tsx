import { mainReferences, complementaryReferences } from "@/data/refs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibliografia — FitoStudy",
  description: "Referências bibliográficas principais e complementares de fitopatologia.",
};

function RefCard({
  entry,
}: {
  entry: (typeof mainReferences)[number];
}) {
  const r = entry;
  const typeLabel =
    r.type === "book" ? "📘 Livro" : r.type === "article" ? "📄 Artigo" : "📑 Capítulo";

  return (
    <div
      className="rounded-xl p-5"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm mb-1" style={{ color: "var(--fg)" }}>
            {r.authors} ({r.year}).{" "}
            <em style={{ color: "var(--color-fito-green)" }}>{r.title}.</em>
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {r.source}
          </p>
          {r.note && (
            <p
              className="text-xs mt-2 italic"
              style={{
                color: "var(--color-fito-teal)",
                borderLeft: "2px solid var(--color-fito-teal)",
                paddingLeft: "8px",
              }}
            >
              {r.note}
            </p>
          )}
        </div>
        <span
          className="text-xs px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
          style={{
            backgroundColor: "var(--color-fito-light)",
            color: "var(--color-fito-green)",
          }}
        >
          {typeLabel}
        </span>
      </div>
    </div>
  );
}

export default function BibliografiaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">📚</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Bibliografia
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Referências bibliográficas utilizadas na elaboração do conteúdo do FitoStudy.
        </p>
      </div>

      {/* Main references */}
      <section className="mb-10">
        <h2
          className="text-xl font-bold mb-4 pb-2"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--fg)",
            borderBottom: "2px solid var(--border)",
          }}
        >
          Referências Principais
        </h2>
        <div className="space-y-4">
          {mainReferences.map((ref, i) => (
            <RefCard key={i} entry={ref} />
          ))}
        </div>
      </section>

      {/* Complementary references */}
      <section>
        <h2
          className="text-xl font-bold mb-4 pb-2"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--fg)",
            borderBottom: "2px solid var(--border)",
          }}
        >
          Referências Complementares
        </h2>
        <div className="space-y-4">
          {complementaryReferences.map((ref, i) => (
            <RefCard key={i} entry={ref} />
          ))}
        </div>
      </section>
    </div>
  );
}
