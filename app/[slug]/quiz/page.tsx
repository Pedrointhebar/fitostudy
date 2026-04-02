import { notFound } from "next/navigation";
import { topics, getTopicBySlug } from "@/data/topics";
import { getQuestionsByModule } from "@/data/quiz";
import type { Metadata } from "next";
import ModuleQuizClient from "./ModuleQuizClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return { title: "Quiz não encontrado" };
  return {
    title: `Quiz: ${topic.title} — FitoStudy`,
    description: `5 questões sobre ${topic.title}`,
  };
}

export default async function ModuleQuizPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const questions = getQuestionsByModule(slug);

  return <ModuleQuizClient topic={topic} questions={questions} />;
}
