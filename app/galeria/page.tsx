import { galleryItems } from "@/data/gallery";
import GalleryGrid from "@/components/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria — FitoStudy",
  description: "Galeria de imagens de doenças de plantas com filtros por sintoma e módulo",
};

export default function GaleriaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-4xl block mb-3">🖼️</span>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fito-green)" }}
        >
          Galeria Fitossanitária
        </h1>
        <p style={{ color: "var(--muted)" }}>
          {galleryItems.length} imagens de sintomas e sinais de doenças de plantas. Clique para ampliar.
        </p>
      </div>
      <GalleryGrid items={galleryItems} />
    </div>
  );
}
