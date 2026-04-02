import { notFound } from "next/navigation";
import { topics, getTopicBySlug } from "@/data/topics";
import ContentLayout from "@/components/ContentLayout";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return { title: "Módulo não encontrado" };
  return {
    title: `${topic.title} — FitoStudy`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const currentIndex = topics.findIndex((t) => t.slug === slug);
  const prev = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const next = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <div>
      <ContentLayout topic={topic} />

      {/* Navigation between modules */}
      <div
        className="max-w-4xl mx-auto px-4 pb-12 flex gap-4 flex-wrap"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
      >
        {prev && (
          <Link
            href={`/${prev.slug}`}
            className="flex-1 min-w-48 rounded-xl px-5 py-4 transition-colors text-sm"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
            }}
          >
            <p style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>
              ← Módulo anterior
            </p>
            <p className="font-semibold">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link
            href={`/${next.slug}`}
            className="flex-1 min-w-48 rounded-xl px-5 py-4 transition-colors text-sm text-right ml-auto"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--fg)",
            }}
          >
            <p style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "4px" }}>
              Próximo módulo →
            </p>
            <p className="font-semibold">{next.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
