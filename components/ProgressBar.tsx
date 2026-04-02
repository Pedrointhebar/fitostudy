"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  color?: string;
  showPercent?: boolean;
}

export default function ProgressBar({
  value,
  max,
  label,
  color = "var(--color-fito-mid)",
  showPercent = true,
}: ProgressBarProps) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between text-sm mb-1.5">
          {label && <span style={{ color: "var(--fg)" }}>{label}</span>}
          {showPercent && (
            <span style={{ color: "var(--muted)" }}>
              {value}/{max} ({percentage}%)
            </span>
          )}
        </div>
      )}
      <div
        className="h-3 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--border)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
