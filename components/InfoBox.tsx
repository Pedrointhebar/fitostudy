import type { InfoBoxVariant } from "@/data/topics";

interface InfoBoxProps {
  variant: InfoBoxVariant;
  title?: string;
  content: string;
}

const styles: Record<InfoBoxVariant, { border: string; bg: string; icon: string; titleColor: string }> = {
  note: {
    border: "#3B82F6",
    bg: "#EFF6FF",
    icon: "ℹ️",
    titleColor: "#1D4ED8",
  },
  warning: {
    border: "#BA7517",
    bg: "#FFFBEB",
    icon: "⚠️",
    titleColor: "#92400E",
  },
  important: {
    border: "#993C1D",
    bg: "#FFF5F0",
    icon: "❗",
    titleColor: "#7F1D1D",
  },
  tip: {
    border: "#3B6D11",
    bg: "#EAF3DE",
    icon: "💡",
    titleColor: "#1E4D00",
  },
};

export default function InfoBox({ variant, title, content }: InfoBoxProps) {
  const s = styles[variant];
  return (
    <div
      className="my-4 rounded-lg p-4"
      style={{
        borderLeft: `4px solid ${s.border}`,
        backgroundColor: s.bg,
      }}
    >
      {title && (
        <p className="font-semibold text-sm mb-1 flex items-center gap-2" style={{ color: s.titleColor }}>
          <span>{s.icon}</span>
          {title}
        </p>
      )}
      <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
        {content}
      </p>
    </div>
  );
}
