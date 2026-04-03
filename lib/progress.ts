import { sm2 } from "@/lib/spacedRepetition";

export interface ModuleProgress {
  slug: string;
  score: number;
  total: number;
  completedAt: string; // ISO date string
}

export interface CaseProgress {
  id: string;
  viewedAt: string;
}

export interface FlashcardProgress {
  cardId: string;
  easiness: number;
  interval: number;
  repetitions: number;
  nextReview: string; // ISO date string
}

const MODULE_KEY = "fitostudy_progress";
const CASE_KEY = "fitostudy_cases";
const FLASHCARD_KEY = "fitostudy_flashcards";
const NOTES_KEY_PREFIX = "fitostudy_notes_";
const READING_KEY_PREFIX = "fitostudy_reading_";

export function saveProgress(slug: string, score: number, total: number): void {
  if (typeof window === "undefined") return;
  const all = getAllProgress();
  const idx = all.findIndex((p) => p.slug === slug);
  const entry: ModuleProgress = {
    slug,
    score,
    total,
    completedAt: new Date().toISOString(),
  };
  if (idx >= 0) {
    all[idx] = entry;
  } else {
    all.push(entry);
  }
  localStorage.setItem(MODULE_KEY, JSON.stringify(all));
}

export function getProgress(slug: string): ModuleProgress | null {
  if (typeof window === "undefined") return null;
  const all = getAllProgress();
  return all.find((p) => p.slug === slug) ?? null;
}

export function getAllProgress(): ModuleProgress[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(MODULE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCaseViewed(id: string): void {
  if (typeof window === "undefined") return;
  const all = getAllCaseProgress();
  if (!all.find((c) => c.id === id)) {
    all.push({ id, viewedAt: new Date().toISOString() });
    localStorage.setItem(CASE_KEY, JSON.stringify(all));
  }
}

export function getAllCaseProgress(): CaseProgress[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CASE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(MODULE_KEY);
  localStorage.removeItem(CASE_KEY);
  // Also clear flashcard progress
  localStorage.removeItem(FLASHCARD_KEY);
  // Clear all notes and reading progress
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.startsWith(NOTES_KEY_PREFIX) || key.startsWith(READING_KEY_PREFIX))) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach((k) => localStorage.removeItem(k));
}

export function getProgressBadge(
  progress: ModuleProgress | null
): { label: string; color: string; bg: string } {
  if (!progress) return { label: "Pendente", color: "#6b7280", bg: "#f3f4f6" };
  const { score, total } = progress;
  if (score >= Math.ceil(total * 0.8))
    return { label: `${score}/${total} ✓`, color: "#166534", bg: "#dcfce7" };
  if (score <= Math.floor(total * 0.4))
    return { label: `${score}/${total} ↺`, color: "#92400e", bg: "#fef3c7" };
  return { label: `${score}/${total}`, color: "#1e40af", bg: "#dbeafe" };
}

// ── Flashcard Progress ──────────────────────────────────────────────────────

function getAllFlashcardProgress(): FlashcardProgress[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(FLASHCARD_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getFlashcardProgress(cardId: string): FlashcardProgress {
  const all = getAllFlashcardProgress();
  return (
    all.find((p) => p.cardId === cardId) ?? {
      cardId,
      easiness: 2.5,
      interval: 0,
      repetitions: 0,
      nextReview: new Date().toISOString(),
    }
  );
}

export function saveFlashcardReview(
  cardId: string,
  quality: 0 | 1 | 2 | 3 | 4 | 5
): void {
  if (typeof window === "undefined") return;
  const all = getAllFlashcardProgress();
  const current = all.find((p) => p.cardId === cardId) ?? {
    cardId,
    easiness: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date().toISOString(),
  };

  const result = sm2(quality, current.repetitions, current.easiness, current.interval);
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + result.interval);

  const updated: FlashcardProgress = {
    cardId,
    easiness: result.easiness,
    interval: result.interval,
    repetitions: result.repetitions,
    nextReview: nextReview.toISOString(),
  };

  const idx = all.findIndex((p) => p.cardId === cardId);
  if (idx >= 0) {
    all[idx] = updated;
  } else {
    all.push(updated);
  }
  localStorage.setItem(FLASHCARD_KEY, JSON.stringify(all));
}

export function getDueFlashcards(allCardIds: string[]): string[] {
  const all = getAllFlashcardProgress();
  const now = new Date();
  return allCardIds.filter((id) => {
    const progress = all.find((p) => p.cardId === id);
    if (!progress) return true; // never reviewed → due
    return new Date(progress.nextReview) <= now;
  });
}

// ── Notes ────────────────────────────────────────────────────────────────────

export function saveNotes(slug: string, text: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${NOTES_KEY_PREFIX}${slug}`, text);
}

export function getNotes(slug: string): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(`${NOTES_KEY_PREFIX}${slug}`) ?? "";
}

// ── Reading Progress ─────────────────────────────────────────────────────────

export function setReadingCompleted(slug: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${READING_KEY_PREFIX}${slug}`, "1");
}

export function getReadingCompleted(slug: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(`${READING_KEY_PREFIX}${slug}`) === "1";
}

export function getAllReadingCompleted(): string[] {
  if (typeof window === "undefined") return [];
  const slugs: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(READING_KEY_PREFIX) && localStorage.getItem(key) === "1") {
      slugs.push(key.slice(READING_KEY_PREFIX.length));
    }
  }
  return slugs;
}
