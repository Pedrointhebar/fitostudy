import type { Topic, ContentBlock } from "@/data/topics";
import InfoBox from "./InfoBox";

interface ContentLayoutProps {
  topic: Topic;
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "heading":
      if (block.level === 2) {
        return (
          <h2
            key={idx}
            className="text-2xl font-bold mt-10 mb-4 pb-2"
            style={{
              fontFamily: "var(--font-display)",
              borderBottom: "2px solid var(--border)",
              color: "var(--fg)",
            }}
          >
            {block.content}
          </h2>
        );
      }
      return (
        <h3
          key={idx}
          className="text-xl font-bold mt-7 mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
        >
          {block.content}
        </h3>
      );

    case "text":
      return (
        <p key={idx} className="leading-relaxed mb-4 text-base" style={{ color: "var(--fg)" }}>
          {block.content}
        </p>
      );

    case "infobox":
      return (
        <InfoBox
          key={idx}
          variant={block.variant!}
          title={block.title}
          content={block.content!}
        />
      );

    case "list":
      return (
        <ul key={idx} className="mb-4 space-y-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
              <span style={{ color: "var(--color-fito-mid)", marginTop: "2px" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div key={idx} className="overflow-x-auto mb-6 rounded-xl" style={{ border: "1px solid var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--color-fito-light)" }}>
                {block.headers?.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "var(--color-fito-green)", borderBottom: "1px solid var(--border)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows?.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    backgroundColor: ri % 2 === 0 ? "var(--surface)" : "var(--bg)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 align-top"
                      style={{ color: "var(--fg)" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "keyterms":
      return (
        <div key={idx} className="flex flex-wrap gap-2 my-4">
          {block.terms?.map((term) => (
            <span
              key={term}
              className="text-sm px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: "var(--color-fito-light)",
                color: "var(--color-fito-green)",
              }}
            >
              {term}
            </span>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function ContentLayout({ topic }: ContentLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div
        className="rounded-2xl p-8 mb-10"
        style={{
          background: `linear-gradient(135deg, ${topic.badgeColor} 0%, var(--surface) 100%)`,
          border: "1px solid var(--border)",
        }}
      >
        <span
          className="inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4"
          style={{ backgroundColor: topic.color, color: "#fff" }}
        >
          {topic.badge}
        </span>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl">{topic.icon}</span>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: topic.color }}
          >
            {topic.title}
          </h1>
        </div>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          {topic.description}
        </p>
      </div>

      {/* Key terms */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
          Termos-chave
        </p>
        <div className="flex flex-wrap gap-2">
          {topic.keyTerms.map((term) => (
            <span
              key={term}
              className="text-sm px-3 py-1 rounded-full"
              style={{
                backgroundColor: topic.badgeColor,
                color: topic.color,
                border: `1px solid ${topic.color}30`,
              }}
            >
              {term}
            </span>
          ))}
        </div>
      </div>

      {/* Content blocks */}
      <div>{topic.content.map((block, idx) => renderBlock(block, idx))}</div>
    </article>
  );
}
