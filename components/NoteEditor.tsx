"use client";

import { useEffect, useRef, useState } from "react";
import { saveNotes, getNotes } from "@/lib/progress";
import { exportNotesAsPDF } from "@/lib/pdfExport";

interface NoteEditorProps {
  slug: string;
  moduleTitle: string;
}

export default function NoteEditor({ slug, moduleTitle }: NoteEditorProps) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setText(getNotes(slug));
  }, [slug]);

  function handleChange(val: string) {
    setText(val);
    setSaved(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      saveNotes(slug, val);
      setSaved(true);
    }, 800);
  }

  async function handleExport() {
    await exportNotesAsPDF(moduleTitle, text);
  }

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold"
        onClick={() => setOpen(!open)}
        style={{ color: "var(--fg)" }}
      >
        <span>📝 Minhas notas</span>
        <span style={{ color: "var(--muted)" }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          <textarea
            className="w-full rounded-xl p-3 text-sm resize-y outline-none min-h-[120px]"
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--border)",
              color: "var(--fg)",
              fontFamily: "var(--font-body)",
            }}
            placeholder="Escreva suas notas sobre este módulo…"
            value={text}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs" style={{ color: "var(--muted)" }}>
              {saved ? "✓ Salvo automaticamente" : "Digitando…"}
            </span>
            <button
              onClick={handleExport}
              disabled={!text.trim()}
              className="text-xs px-3 py-1.5 rounded-lg font-medium transition-opacity disabled:opacity-40"
              style={{
                backgroundColor: "var(--color-fito-light)",
                color: "var(--color-fito-green)",
              }}
            >
              Exportar PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
