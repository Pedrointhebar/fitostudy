"use client";

import { useState } from "react";

interface MapNode {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  bg: string;
  info: string;
}

interface MapEdge {
  from: string;
  to: string;
  label?: string;
}

const nodes: MapNode[] = [
  {
    id: "doenca",
    label: "Doença de Planta",
    x: 430, y: 50,
    color: "var(--color-fito-green)",
    bg: "var(--color-fito-light)",
    info: "Processo dinâmico em que o funcionamento normal da planta é alterado por um agente causal (biótico ou abiótico).",
  },
  {
    id: "triangulo",
    label: "Triângulo da Doença",
    x: 430, y: 160,
    color: "#1e40af",
    bg: "#dbeafe",
    info: "Modelo que exige a sobreposição de 3 fatores: hospedeiro suscetível + patógeno virulento + ambiente favorável.",
  },
  {
    id: "hospedeiro",
    label: "Hospedeiro",
    x: 180, y: 250,
    color: "#166534",
    bg: "#dcfce7",
    info: "Planta suscetível ao patógeno. A resistência genética é a principal ferramenta de manejo.",
  },
  {
    id: "patogeno",
    label: "Patógeno",
    x: 430, y: 270,
    color: "#991b1b",
    bg: "#fee2e2",
    info: "Agente causal biótico: fungos, oomicetos, bactérias, vírus, nematoides, fitoplasmas, protozoários.",
  },
  {
    id: "ambiente",
    label: "Ambiente",
    x: 680, y: 250,
    color: "#92400e",
    bg: "#fef3c7",
    info: "Fatores climáticos (temperatura, umidade, chuva) e edáficos que favorecem ou inibem o desenvolvimento da doença.",
  },
  {
    id: "fungos",
    label: "Fungos",
    x: 130, y: 390,
    color: "#6b21a8",
    bg: "#f3e8ff",
    info: "Eucariontes com parede de quitina. Maiores causadores de doenças. Ex: Phakopsora (ferrugem soja), Botrytis, Fusarium.",
  },
  {
    id: "oomicetos",
    label: "Oomicetos",
    x: 290, y: 420,
    color: "#0f766e",
    bg: "#ccfbf1",
    info: "Stramenopila com parede de celulose. Ex: Phytophthora infestans (requeima), Plasmopara viticola (míldio).",
  },
  {
    id: "bacterias",
    label: "Bactérias",
    x: 430, y: 400,
    color: "#b45309",
    bg: "#fef9c3",
    info: "Procariontes. Penetram por ferimentos e aberturas. Ex: Ralstonia (murcha), Xanthomonas (cancro cítrico).",
  },
  {
    id: "virus",
    label: "Vírus",
    x: 570, y: 420,
    color: "#be185d",
    bg: "#fce7f3",
    info: "Acelulares. Parasitas intracelulares obrigatórios. Transmitidos por vetores. Ex: TMV, CMV, TSWV.",
  },
  {
    id: "nematoides",
    label: "Nematoides",
    x: 720, y: 390,
    color: "#065f46",
    bg: "#d1fae5",
    info: "Vermes cilíndricos com estilete. Causam galhas (Meloidogyne), lesões (Pratylenchus) e cistos (Heterodera).",
  },
  {
    id: "epidemiologia",
    label: "Epidemiologia",
    x: 130, y: 540,
    color: "#1e3a8a",
    bg: "#dbeafe",
    info: "Estudo do desenvolvimento de doenças em populações. Modelo de Vanderplank: taxa de infecção e inóculo inicial.",
  },
  {
    id: "controle",
    label: "Controle (MID)",
    x: 730, y: 540,
    color: "#14532d",
    bg: "#dcfce7",
    info: "Manejo Integrado de Doenças: resistência genética + controle cultural + biológico + químico (fungicidas/FRAC).",
  },
  {
    id: "sintomas",
    label: "Sintomas/Sinais",
    x: 430, y: 540,
    color: "#9a3412",
    bg: "#ffedd5",
    info: "Sintoma = resposta da planta (clorose, necrose, murcha). Sinal = estrutura do patógeno (esporos, micélio, exsudato).",
  },
];

const edges: MapEdge[] = [
  { from: "doenca", to: "triangulo" },
  { from: "triangulo", to: "hospedeiro" },
  { from: "triangulo", to: "patogeno" },
  { from: "triangulo", to: "ambiente" },
  { from: "patogeno", to: "fungos" },
  { from: "patogeno", to: "oomicetos" },
  { from: "patogeno", to: "bacterias" },
  { from: "patogeno", to: "virus" },
  { from: "patogeno", to: "nematoides" },
  { from: "doenca", to: "sintomas" },
  { from: "doenca", to: "epidemiologia" },
  { from: "doenca", to: "controle" },
  { from: "epidemiologia", to: "controle", label: "→" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function ConceptMap() {
  const [selected, setSelected] = useState<MapNode | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* SVG Map */}
      <div
        className="rounded-2xl overflow-auto"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          flex: "1 1 0",
        }}
      >
        <svg viewBox="0 0 860 620" style={{ width: "100%", minWidth: "600px", height: "auto" }}>
          {/* Edges */}
          {edges.map((edge, i) => {
            const from = getNode(edge.from);
            const to = getNode(edge.to);
            if (!from || !to) return null;
            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2;
            return (
              <g key={i}>
                <line
                  x1={from.x}
                  y1={from.y + 18}
                  x2={to.x}
                  y2={to.y - 18}
                  stroke="var(--border)"
                  strokeWidth="1.5"
                />
                {edge.label && (
                  <text x={mx} y={my} textAnchor="middle" fontSize="10" fill="var(--muted)">
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isSelected = selected?.id === node.id;
            const textLines = node.label.split(" ");
            const lineH = 16;
            const nodeW = Math.max(100, node.label.length * 7.5);
            const nodeH = 36 + (textLines.length > 2 ? 16 : 0);

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => setSelected(isSelected ? null : node)}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={-nodeW / 2}
                  y={-nodeH / 2}
                  width={nodeW}
                  height={nodeH}
                  rx="10"
                  ry="10"
                  fill={node.bg}
                  stroke={isSelected ? node.color : "var(--border)"}
                  strokeWidth={isSelected ? 2.5 : 1}
                />
                {textLines.map((line, li) => (
                  <text
                    key={li}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill={node.color}
                    y={(li - (textLines.length - 1) / 2) * lineH + 4}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info panel */}
      <div
        className="lg:w-72 rounded-2xl p-5 flex flex-col"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          minHeight: "200px",
        }}
      >
        {selected ? (
          <>
            <h3
              className="font-bold text-base mb-2"
              style={{ fontFamily: "var(--font-display)", color: selected.color }}
            >
              {selected.label}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
              {selected.info}
            </p>
            <button
              className="mt-4 text-xs self-start"
              style={{ color: "var(--muted)" }}
              onClick={() => setSelected(null)}
            >
              ✕ Fechar
            </button>
          </>
        ) : (
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Clique em um nó do mapa para ver mais informações.
          </p>
        )}
      </div>
    </div>
  );
}
