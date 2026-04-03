"use client";

import ReadingProgress from "@/components/ReadingProgress";
import NoteEditor from "@/components/NoteEditor";

interface TopicPageClientProps {
  slug: string;
  moduleTitle: string;
}

export default function TopicPageClient({ slug, moduleTitle }: TopicPageClientProps) {
  return (
    <>
      <ReadingProgress slug={slug} />
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <NoteEditor slug={slug} moduleTitle={moduleTitle} />
      </div>
    </>
  );
}
