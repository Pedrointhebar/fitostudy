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

const MODULE_KEY = "fitostudy_progress";
const CASE_KEY = "fitostudy_cases";

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
