"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Topic } from "@/data/topics";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

export default function TopicCard({ topic, index }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link href={`/${topic.slug}`} className="block group h-full">
        <div
          className="h-full rounded-2xl p-5 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          {/* Badge */}
          <span
            className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
            style={{
              backgroundColor: topic.badgeColor,
              color: topic.color,
            }}
          >
            {topic.badge}
          </span>

          {/* Icon + Title */}
          <div className="flex items-start gap-3 mb-2">
            <span className="text-3xl leading-none">{topic.icon}</span>
            <h2
              className="text-lg font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: topic.color }}
            >
              {topic.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {topic.description}
          </p>

          {/* Key terms preview */}
          <div className="flex flex-wrap gap-1 mt-auto">
            {topic.keyTerms.slice(0, 3).map((term) => (
              <span
                key={term}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: topic.badgeColor,
                  color: topic.color,
                }}
              >
                {term}
              </span>
            ))}
            {topic.keyTerms.length > 3 && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: "var(--muted)" }}>
                +{topic.keyTerms.length - 3}
              </span>
            )}
          </div>

          {/* Arrow */}
          <div
            className="mt-4 text-sm font-medium flex items-center gap-1 transition-transform group-hover:translate-x-1"
            style={{ color: topic.color }}
          >
            Estudar módulo →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
