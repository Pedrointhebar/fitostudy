export type InfoBoxVariant = "note" | "warning" | "important" | "tip";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  relatedModule: string;
  relatedModuleSlug: string;
  situation: string;
  challenge: string;
  solution: {
    diagnosis: string;
    explanation: string;
    correctApproach: string;
    infoBoxVariant: InfoBoxVariant;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "caso-1",
    title: "O Falso Fungo e o Manejo Ineficaz",
    subtitle: "Tomates com míldio tratados com fungicida errado",
    icon: "🍅",
    relatedModule: "Stramenopila",
    relatedModuleSlug: "stramenopila",
    situation:
      "Um produtor de tomates observa manchas necróticas escuras em folhas e hastes durante período de baixas temperaturas e alta umidade. A face inferior das folhas exibe um crescimento esbranquiçado característico (sinal visível). Preocupado, aplica um fungicida triazol (inibidor de ergosterol — DMI), o mesmo que usa contra oídio e outras micoses. Após dias, a doença continua avançando severamente, destruindo o talhão.",
    challenge:
      "Com base na classificação taxonômica e celular dos patógenos, identifique o provável grupo do agente etiológico, explique por que o controle químico falhou completamente e proponha a solução correta de manejo.",
    solution: {
      diagnosis:
        "Agente etiológico: Reino Stramenopila (oomiceto) — provavelmente Phytophthora infestans (requeima do tomate).",
      explanation:
        "O erro está na taxonomia. Oomicetos NÃO são fungos verdadeiros. Suas membranas não contêm ergosterol (possuem outros esteróis), e suas paredes são de celulose/glicanos — não de quitina. Os triazóis inibem especificamente a enzima CYP51 da via biossintética do ergosterol, que simplesmente não existe em Phytophthora. O fungicida não tinha alvo molecular, sendo completamente ineficaz — como tentar matar uma bactéria com antifúngico.",
      correctApproach:
        "Fungicidas específicos para oomicetos: fenilamidas (metalaxil/mefenoxam), fosetil-Al ou propamocarbe. Manejo complementar: reduzir umidade foliar com espaçamento adequado e irrigação por gotejamento, remover folhas infectadas e evitar aplicações em períodos de chuva.",
      infoBoxVariant: "important",
    },
  },
  {
    id: "caso-2",
    title: "O Mistério no Laboratório de Diagnose",
    subtitle: "Virose em mamão não diagnosticada pelos Postulados de Koch",
    icon: "🔬",
    relatedModule: "Vírus e Viroses",
    relatedModuleSlug: "virus",
    situation:
      "Um agrônomo visita um pomar de mamão com plantas raquíticas e folhas jovens exibindo mosaico (manchas verde-claras e verde-escuras intercaladas). Não há sinais de micélio, esporos ou exsudação bacteriana. Para diagnosticar, tritura tecido foliar sintomático e espalha em placas de Petri com meio nutritivo padrão (NBY), tentando seguir os Postulados de Koch. Após uma semana de incubação: nenhuma colônia. Há infestação severa de pulgões em toda a lavoura.",
    challenge:
      "Qual é o erro fundamental na metodologia de diagnose? Qual é o agente causal mais provável e como deve ser a estratégia correta de manejo integrado?",
    solution: {
      diagnosis:
        "Agente causal: Vírus de planta — provavelmente CMV (Cucumber Mosaic Virus) ou PRSV (Papaya Ringspot Virus), transmitidos por pulgões.",
      explanation:
        "O erro metodológico foi tentar cultivar um parasita intracelular obrigatório em meio artificial. Vírus não possuem metabolismo próprio e só se replicam dentro de células vivas do hospedeiro — nunca em meios nutritivos. O 2º Postulado de Koch (isolamento em cultura pura) é literalmente impossível para vírus. O diagnóstico correto usa: RT-PCR, ELISA com anticorpos específicos, microscopia eletrônica ou inoculação mecânica em hospedeiro indicador. A tríade mosaico sistêmico + incultivávelidade + pulgões vetores aponta inequivocamente para virose.",
      correctApproach:
        "1) Mudas certificadas livres de vírus de viveiros indexados; 2) Controle das populações de pulgões com óleos minerais (mais eficaz que inseticidas para vírus não-persistentes); 3) Cultivares resistentes ou transgênicas (mamão transgênico resistente ao PRSV); 4) Eliminar plantas reservatório (cucurbitáceas, tomateiros) nas bordas da lavoura; 5) Monitoramento por RT-PCR sazonal.",
      infoBoxVariant: "warning",
    },
  },
  {
    id: "caso-3",
    title: "O Adubo que Não Resolve",
    subtitle: "Reboleiras de soja amarelada confundidas com deficiência nutricional",
    icon: "🌱",
    relatedModule: "Nematoides",
    relatedModuleSlug: "nematoides",
    situation:
      "Uma lavoura de soja apresenta extensas 'reboleiras' — manchas circulares de plantas amarelecidas e com nanismo acentuado, distribuídas irregularmente pelo talhão. O produtor, convicto de que se trata de deficiência nutricional ou estresse hídrico, planeja uma adubação corretiva em alta dose de NPK. O agrônomo contratado arranca algumas plantas afetadas e nota raízes curtas, atrofiadas e repletas de galhas irregulares. O solo está bem irrigado e a análise química indica fertilidade adequada.",
    challenge:
      "Como o agrônomo deve desmentir a hipótese de deficiência nutricional? Que dano fisiológico o nematoide está causando e que complexo de doenças o produtor está ignorando?",
    solution: {
      diagnosis:
        "Etiologia real: Nematoides endoparasitas sedentários — Meloidogyne spp. (nematoide-das-galhas). As galhas nas raízes são patognomônicas.",
      explanation:
        "O amarelecimento e nanismo são sintomas SECUNDÁRIOS da incapacidade de absorção. O nematoide (juvenil J2) penetra nas raízes próximo ao meristema, migra até o cilindro vascular e induz células gigantes (células nutrivas), formando as galhas visíveis. As raízes parasitadas tornam-se estruturalmente inoperantes — mesmo com solo fértil e irrigado, a planta não consegue absorver água e nutrientes. Mais adubo no solo não resolve nada: o problema está na raiz, literalmente. O padrão de reboleiras é epidemiológico: nematoides têm mobilidade limitada, e a infestação se expande radialmente a partir de pontos de introdução (mudas, implementos, enxurrada).",
      correctApproach:
        "1) Rotação de culturas com espécies não-hospedeiras ou resistentes (Crotalaria spectabilis, braquiárias); 2) Cultivares de soja resistentes/tolerantes a Meloidogyne; 3) Nematicidas biológicos em sementes (Bacillus firmus, Purpureocillium lilacinum); 4) Análise nematológica do solo ANTES do plantio; 5) Desinfestar implementos entre talhões para evitar dispersão.",
      infoBoxVariant: "tip",
    },
  },
];

export function getCaseById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}
