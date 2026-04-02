import { topics } from "@/data/topics";
import TopicCard from "@/components/TopicCard";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="text-5xl block mb-4">🌿</span>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          FitoStudy
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Plataforma de estudo de fitopatologia para estudantes de agronomia.
          Explore os 11 módulos, consulte o glossário e teste seus conhecimentos.
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a
            href="/glossario"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-fito-teal)" }}
          >
            📖 Glossário
          </a>
          <a
            href="/questionario"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-fito-amber)" }}
          >
            ✏️ Questionário
          </a>
          <a
            href="/bibliografia"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
              border: "1px solid var(--border)",
            }}
          >
            📚 Bibliografia
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="grid grid-cols-3 gap-4 rounded-2xl p-6 mb-12"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        {[
          { value: "11", label: "Módulos" },
          { value: "36+", label: "Termos no glossário" },
          { value: "8", label: "Questões no quiz" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
            >
              {value}
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Topic grid */}
      <h2
        className="text-2xl font-bold mb-6"
        style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
      >
        Módulos de Conteúdo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map((topic, index) => (
          <TopicCard key={topic.slug} topic={topic} index={index} />
        ))}
      </div>
    </div>
  );
}
