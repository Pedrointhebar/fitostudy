import { timelineEvents } from "@/data/timelineEvents";
import Timeline from "@/components/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linha do Tempo — FitoStudy",
  description: "Linha do tempo histórica da fitopatologia",
};

export default function TimelinePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">📅</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Linha do Tempo
        </h1>
        <p style={{ color: "var(--muted)" }}>
          {timelineEvents.length} marcos históricos da fitopatologia — de ~1755 à atualidade.
        </p>
      </div>
      <Timeline events={timelineEvents} />
    </div>
  );
}
