"use client";

import { useEffect, useState, useRef } from "react";
import { setReadingCompleted, getReadingCompleted } from "@/lib/progress";

interface ReadingProgressProps {
  slug: string;
  onComplete?: () => void;
}

export default function ReadingProgress({ slug, onComplete }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const calledComplete = useRef(false);

  useEffect(() => {
    setCompleted(getReadingCompleted(slug));
  }, [slug]);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.min(100, (scrollTop / docHeight) * 100);
      setProgress(pct);

      if (pct >= 80 && !calledComplete.current) {
        calledComplete.current = true;
        setCompleted(true);
        setReadingCompleted(slug);
        onComplete?.();
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, onComplete]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1">
      <div
        className="h-full transition-all duration-100"
        style={{
          width: `${progress}%`,
          backgroundColor: completed ? "#16a34a" : "var(--color-fito-mid)",
        }}
      />
      {completed && (
        <div
          className="absolute right-3 top-1 text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: "#dcfce7", color: "#166534", marginTop: "4px" }}
        >
          ✓ Leitura concluída
        </div>
      )}
    </div>
  );
}
