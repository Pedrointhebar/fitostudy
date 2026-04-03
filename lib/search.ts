import { topics } from "@/data/topics";
import { glossaryTerms } from "@/data/glossary";
import { quizQuestions } from "@/data/quiz";
import { flashcards } from "@/data/flashcards";
import { caseStudies } from "@/data/cases";
import { timelineEvents } from "@/data/timelineEvents";

export interface SearchResult {
  type: "module" | "glossary" | "quiz" | "flashcard" | "case" | "timeline";
  title: string;
  excerpt: string;
  url: string;
  moduleSlug?: string;
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Modules
  for (const topic of topics) {
    results.push({
      type: "module",
      title: topic.title,
      excerpt: topic.description,
      url: `/${topic.slug}`,
      moduleSlug: topic.slug,
    });
  }

  // Glossary terms
  for (const term of glossaryTerms) {
    results.push({
      type: "glossary",
      title: term.term,
      excerpt: term.definition.slice(0, 120) + (term.definition.length > 120 ? "…" : ""),
      url: `/glossario`,
    });
  }

  // Quiz questions
  for (const q of quizQuestions) {
    results.push({
      type: "quiz",
      title: q.question.slice(0, 80) + (q.question.length > 80 ? "…" : ""),
      excerpt: `Quiz — ${q.topic}`,
      url: `/${q.moduleSlug}/quiz`,
      moduleSlug: q.moduleSlug,
    });
  }

  // Flashcards
  for (const card of flashcards) {
    results.push({
      type: "flashcard",
      title: card.front.slice(0, 80) + (card.front.length > 80 ? "…" : ""),
      excerpt: card.back.slice(0, 120) + (card.back.length > 120 ? "…" : ""),
      url: `/flashcards`,
      moduleSlug: card.moduleSlug,
    });
  }

  // Cases
  for (const c of caseStudies) {
    results.push({
      type: "case",
      title: c.title,
      excerpt: c.subtitle ?? "",
      url: `/casos/${c.id}`,
    });
  }

  // Timeline events
  for (const event of timelineEvents) {
    results.push({
      type: "timeline",
      title: `${event.year} — ${event.title}`,
      excerpt: event.description.slice(0, 120) + (event.description.length > 120 ? "…" : ""),
      url: `/timeline`,
      moduleSlug: event.moduleSlug,
    });
  }

  return results;
}

export function search(query: string, items: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];
  const words = query.toLowerCase().trim().split(/\s+/);
  const scored = items
    .map((item) => {
      const haystack = `${item.title} ${item.excerpt}`.toLowerCase();
      let score = 0;
      for (const word of words) {
        if (item.title.toLowerCase().includes(word)) score += 2;
        if (item.excerpt.toLowerCase().includes(word)) score += 1;
      }
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 10).map((r) => r.item);
}
