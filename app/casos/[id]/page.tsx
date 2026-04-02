import { notFound } from "next/navigation";
import { caseStudies, getCaseById } from "@/data/cases";
import CaseStudyCard from "@/components/CaseStudyCard";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const c = getCaseById(id);
  if (!c) return { title: "Caso não encontrado" };
  return { title: `${c.title} — FitoStudy`, description: c.subtitle };
}

export default async function CasoPage({ params }: Props) {
  const { id } = await params;
  const caseStudy = getCaseById(id);
  if (!caseStudy) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.id === id);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" style={{ color: "var(--color-fito-green)" }}>Início</Link>
        <span>›</span>
        <Link href="/casos" style={{ color: "var(--color-fito-green)" }}>Estudos de Caso</Link>
        <span>›</span>
        <span>{caseStudy.title}</span>
      </div>

      <CaseStudyCard caseStudy={caseStudy} compact={false} />

      {/* Navigation */}
      <div
        className="mt-8 flex gap-4 flex-wrap"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
      >
        {prev && (
          <Link
            href={`/casos/${prev.id}`}
            className="flex-1 min-w-44 rounded-xl px-5 py-4 text-sm"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
            }}
          >
            <p style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>← Caso anterior</p>
            <p className="font-semibold">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link
            href={`/casos/${next.id}`}
            className="flex-1 min-w-44 rounded-xl px-5 py-4 text-sm text-right ml-auto"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
            }}
          >
            <p style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>Próximo caso →</p>
            <p className="font-semibold">{next.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
