export interface DiagnosisResult {
  group: string;
  confidence: "provável" | "possível";
  description: string;
  examples: string[];
  moduleSlug: string;
  controlHints: string[];
}

export interface DiagnosisNode {
  id: string;
  question?: string;
  result?: DiagnosisResult;
  yes?: string;
  no?: string;
  yesLabel?: string;
  noLabel?: string;
}

export const diagnosisTree: DiagnosisNode[] = [
  {
    id: "1",
    question: "A planta apresenta sintomas visíveis (manchas, murcha, galhas, deformações)?",
    yes: "2",
    no: "result-abiotico-oculto",
    yesLabel: "Sim",
    noLabel: "Não / estresse abiótico suspeito",
  },
  {
    id: "2",
    question: "Há sinais visíveis do patógeno na planta (estruturas como esporos, micélio, exsudatos)?",
    yes: "3",
    no: "2b",
    yesLabel: "Sim (sinais visíveis)",
    noLabel: "Não (apenas sintomas)",
  },
  {
    id: "2b",
    question: "Os sintomas afetam principalmente o sistema vascular (murcha súbita, descoloração do xilema)?",
    yes: "result-vascular",
    no: "4",
    yesLabel: "Sim (murcha/vascular)",
    noLabel: "Não",
  },
  {
    id: "3",
    question: "Os sinais são pulverulentos/pós na superfície foliar?",
    yes: "result-oideo",
    no: "4b",
    yesLabel: "Sim (pó branco ou colorido)",
    noLabel: "Não (outros sinais)",
  },
  {
    id: "4",
    question: "Os sintomas são principalmente nas raízes ou colo (apodrecimento, galhas)?",
    yes: "4c",
    no: "4d",
    yesLabel: "Sim (raízes/colo)",
    noLabel: "Não (parte aérea)",
  },
  {
    id: "4b",
    question: "Os sinais são pustulosas/uredossoros (ferrugem) na face abaxial das folhas?",
    yes: "result-ferrugem",
    no: "5",
    yesLabel: "Sim (pústulas ferrugem)",
    noLabel: "Não",
  },
  {
    id: "4c",
    question: "Há galhas nas raízes (nódulos arredondados)?",
    yes: "result-nematoides",
    no: "result-podridao-raiz",
    yesLabel: "Sim (galhas)",
    noLabel: "Não (podridão/escurecimento)",
  },
  {
    id: "4d",
    question: "Os sintomas foliares apresentam padrão de mosaico, mosqueado ou deformação foliar?",
    yes: "result-viral",
    no: "5b",
    yesLabel: "Sim (mosaico/deformação)",
    noLabel: "Não",
  },
  {
    id: "5",
    question: "Os sinais na face inferior das folhas são efusões esbranquiçadas (esporulação de míldio)?",
    yes: "6",
    no: "result-fungo-necrotrofico",
    yesLabel: "Sim (efusão branca abaxial)",
    noLabel: "Não",
  },
  {
    id: "5b",
    question: "Há exsudação bacteriana (corrimento viscoso, odor fétido) ou lesões úmidas com halo?",
    yes: "result-bacteria",
    no: "6b",
    yesLabel: "Sim (exsudato/lesão úmida)",
    noLabel: "Não",
  },
  {
    id: "6",
    question: "Os tecidos afetados mostram lesões aquosas que avançam rapidamente sem halo definido?",
    yes: "result-oomiceto",
    no: "result-mildio-verdadeiro",
    yesLabel: "Sim (lesão aquosa rápida)",
    noLabel: "Não (míldio com halo)",
  },
  {
    id: "6b",
    question: "Há superbrotamentos, virescence (pétalas verdes) ou amarelecimento sistêmico?",
    yes: "result-fitoplasma",
    no: "6c",
    yesLabel: "Sim (vassoura-de-bruxa/virescence)",
    noLabel: "Não",
  },
  {
    id: "6c",
    question: "Os sintomas são manchas foliares com formato irregular e halo clorótico?",
    yes: "result-fungo-ascomiceto",
    no: "result-abiotico",
    yesLabel: "Sim (manchas com halo)",
    noLabel: "Não (possível causa abiótica)",
  },
  // ── Terminal result nodes ─────────────────────────────────────────────────
  {
    id: "result-oideo",
    result: {
      group: "Oídio (Erysiphales)",
      confidence: "provável",
      description:
        "Fungo biotrófico que coloniza a superfície foliar com micélio branco pulverulento. O pó branco são conídios e conidióforos do fungo. Favorecido por clima quente e seco com umidade noturna alta.",
      examples: ["Blumeria graminis (cereais)", "Erysiphe necator (videira)", "Podosphaera xanthii (cucurbitáceas)", "Oidium mangiferae (manga)"],
      moduleSlug: "fungos",
      controlHints: [
        "Fungicidas DMI (triazóis, FRAC grupo 3)",
        "Estrobilurinas (FRAC grupo 11)",
        "Enxofre (FRAC grupo M)",
        "Variedades resistentes",
        "Evitar excesso de nitrogênio",
      ],
    },
  },
  {
    id: "result-ferrugem",
    result: {
      group: "Ferrugem (Uredinales)",
      confidence: "provável",
      description:
        "Fungos biotróficos da ordem Uredinales (Basidiomycota). Pústulas (uredossoros) geralmente alaranjadas, amarelas ou marrons na face inferior das folhas. Ciclo de vida complexo com até 5 tipos de esporos.",
      examples: ["Puccinia striiformis (ferrugem amarela do trigo)", "Phakopsora pachyrhizi (ferrugem asiática da soja)", "Hemileia vastatrix (ferrugem do café)", "Uromyces appendiculatus (feijão)"],
      moduleSlug: "fungos",
      controlHints: [
        "Triazóis (FRAC 3) + estrobilurinas (FRAC 11) em mistura",
        "Fungicidas do grupo SDHI (FRAC 7)",
        "Variedades resistentes (quando disponíveis)",
        "Monitoramento e início precoce do controle",
        "Sistemas de alerta epidemiológico",
      ],
    },
  },
  {
    id: "result-oomiceto",
    result: {
      group: "Oomiceto (Phytophthora / Pythium)",
      confidence: "provável",
      description:
        "Pseudo-fungos do reino Stramenopila. Lesões aquosas de progressão rápida, frequentemente com esporulação branca sob alta umidade. Phytophthora causa requeima e gomose; Pythium causa tombamento de mudas.",
      examples: ["Phytophthora infestans (requeima da batata/tomate)", "Phytophthora cinnamomi (gomose do abacateiro)", "Pythium aphanidermatum (tombamento de mudas)", "Phytophthora capsici (pimentão)"],
      moduleSlug: "oomicetos",
      controlHints: [
        "Metalaxil/mefenoxam (FRAC 4) — atenção à resistência",
        "Mandipropamide, iprovalicarb (FRAC 40)",
        "Oxatiapiprolin (FRAC 49)",
        "Cobre (FRAC M)",
        "Evitar excesso de umidade no solo",
        "Drenagem adequada",
      ],
    },
  },
  {
    id: "result-mildio-verdadeiro",
    result: {
      group: "Míldio (Peronosporaceae)",
      confidence: "provável",
      description:
        "Oomicetos da família Peronosporaceae. Efusão branca a acinzentada na face abaxial com manchas cloróticas na face adaxial. Favorecidos por clima frio e úmido.",
      examples: ["Plasmopara viticola (míldio da videira)", "Peronospora destructor (cebola)", "Bremia lactucae (alface)", "Pseudoperonospora cubensis (pepino/melão)"],
      moduleSlug: "oomicetos",
      controlHints: [
        "Mancozebe (FRAC M) — protetor",
        "Metalaxil (FRAC 4) — sistêmico",
        "Fungicidas CAA (FRAC 40)",
        "Rotação de grupos FRAC",
        "Reduzir molhamento foliar",
      ],
    },
  },
  {
    id: "result-fungo-necrotrofico",
    result: {
      group: "Fungo Necrotrófico",
      confidence: "possível",
      description:
        "Fungos que matam tecido vegetal para se alimentar. Geralmente produzem lesões com centro necrosado e bordas bem definidas. Produzem toxinas e enzimas líticas. Exemplos comuns: Botrytis, Sclerotinia, Alternaria, Colletotrichum.",
      examples: ["Botrytis cinerea (mofo cinzento)", "Sclerotinia sclerotiorum (podridão-branca)", "Alternaria solani (pinta-preta)", "Colletotrichum spp. (antracnose)"],
      moduleSlug: "fungos",
      controlHints: [
        "Fungicidas multissítio (mancozebe, captan — FRAC M)",
        "Iprodione, boscalida (FRAC 7)",
        "Controle biológico com Trichoderma spp.",
        "Reduzir umidade (ventilação, irrigação)",
        "Eliminação de restos culturais",
      ],
    },
  },
  {
    id: "result-fungo-ascomiceto",
    result: {
      group: "Fungo Ascomiceto (mancha foliar)",
      confidence: "possível",
      description:
        "Manchas foliares causadas por ascomicetos ou seus anamorfos. Lesões com bordas definidas, frequentemente com halo amarelado. Podem ter sinais (acérvulos, picnídios) visíveis nas lesões.",
      examples: ["Cercospora zeae-maydis (mancha cinzenta do milho)", "Septoria tritici (septoriose do trigo)", "Mycosphaerella fijiensis (sigatoka-negra da banana)", "Elsinoë ampelina (antracnose da videira)"],
      moduleSlug: "fungos",
      controlHints: [
        "Triazóis (FRAC 3)",
        "Estrobilurinas (FRAC 11)",
        "SDHI (FRAC 7)",
        "Variedades resistentes",
        "Rotação de culturas",
      ],
    },
  },
  {
    id: "result-vascular",
    result: {
      group: "Doença Vascular (Fusarium / Verticillium / Ralstonia)",
      confidence: "provável",
      description:
        "Murcha vascular causada por colonização e obstrução do xilema. Corte transversal do caule mostra descoloração marrom-escura nos vasos. Pode ser causada por fungos (Fusarium, Verticillium) ou bactérias (Ralstonia).",
      examples: ["Fusarium oxysporum (murcha-de-fusarium do tomate)", "Verticillium dahliae (verticílio do algodão)", "Ralstonia solanacearum (murcha bacteriana)", "Clavibacter michiganensis (cancro bacteriano do tomate)"],
      moduleSlug: "bacterias",
      controlHints: [
        "Variedades resistentes (principal medida)",
        "Rotação de culturas com gramíneas",
        "Solarização do solo",
        "Enxertia em porta-enxerto resistente",
        "Controle biológico (Trichoderma para Fusarium)",
        "Não há cura para plantas já infectadas",
      ],
    },
  },
  {
    id: "result-nematoides",
    result: {
      group: "Nematoides (Meloidogyne spp.)",
      confidence: "provável",
      description:
        "Galhas nas raízes são sintoma característico de nematoides do gênero Meloidogyne. A planta pode mostrar sintomas de deficiência nutricional e murcha mesmo com solo úmido.",
      examples: ["Meloidogyne incognita (nematoide-das-galhas)", "Meloidogyne javanica", "Meloidogyne arenaria", "Meloidogyne enterolobii (virulento, quebra resistência)"],
      moduleSlug: "nematoides",
      controlHints: [
        "Rotação de culturas com não-hospedeiras",
        "Variedades resistentes (gene Mi em tomate)",
        "Solarização do solo",
        "Nematicidas biológicos (Pochonia chlamydosporia, Bacillus firmus)",
        "Material propagativo sadio",
      ],
    },
  },
  {
    id: "result-podridao-raiz",
    result: {
      group: "Podridão de Raiz/Colo",
      confidence: "possível",
      description:
        "Podridão de raízes e colo por fungos de solo (Fusarium, Pythium, Rhizoctonia, Sclerotinia) ou oomicetos. Escurecimento e apodrecimento dos tecidos basais. Tombamento em mudas.",
      examples: ["Pythium spp. (tombamento)", "Rhizoctonia solani (damping-off, podridão radicular)", "Fusarium solani (podridão radicular do feijão)", "Sclerotinia sclerotiorum (podridão branca)"],
      moduleSlug: "fungos",
      controlHints: [
        "Tratamento de sementes",
        "Drenagem do solo",
        "Rotação de culturas",
        "Biocontroladores (Trichoderma)",
        "Fungicidas no sulco (thiamethoxam, metalaxil)",
      ],
    },
  },
  {
    id: "result-viral",
    result: {
      group: "Virose",
      confidence: "provável",
      description:
        "Vírus de plantas causam padrão de mosaico (alternância verde claro/escuro), mosqueado, clareamento de nervuras, deformações foliares e nanismo. Não há cura para plantas infectadas.",
      examples: ["TMV - Tobacco Mosaic Virus", "CMV - Cucumber Mosaic Virus", "PVY - Potato Virus Y", "TSWV - Tomato Spotted Wilt Virus (tospovirose)", "TYLCV - Tomato Yellow Leaf Curl Virus"],
      moduleSlug: "virus",
      controlHints: [
        "Controle do vetor (afídeos, tripes, mosca-branca)",
        "Uso de sementes certificadas (livres de vírus)",
        "Eliminação de plantas infectadas (roguing)",
        "Variedades resistentes/tolerantes",
        "Barreira física (telas anti-afídeo em mudas)",
        "Higienização de ferramentas",
      ],
    },
  },
  {
    id: "result-bacteria",
    result: {
      group: "Bacteriose",
      confidence: "provável",
      description:
        "Doenças bacterianas geralmente mostram lesões úmidas, exsudatos viscosos (em alta umidade), halo amarelado ao redor das lesões e odor fétido (podridões moles). Bactérias penetram por aberturas naturais ou ferimentos.",
      examples: ["Xanthomonas spp. (manchas bacterianas)", "Pseudomonas syringae (cancro bacteriano)", "Pectobacterium carotovorum (podridão mole)", "Ralstonia solanacearum (murcha bacteriana)", "Erwinia amylovora (fogo bacteriano)"],
      moduleSlug: "bacterias",
      controlHints: [
        "Calda bordalesa e produtos cúpricos",
        "Bactericidas (estreptomicina — uso restrito)",
        "Sementes sadias e tratadas",
        "Evitar ferimentos e molhamento foliar excessivo",
        "Variedades resistentes",
        "Eliminação de material infectado",
      ],
    },
  },
  {
    id: "result-fitoplasma",
    result: {
      group: "Fitoplasma / Liberibacter",
      confidence: "provável",
      description:
        "Prokariotos do floema transmitidos por insetos vetores (cigarrinhas, psilídeos). Sintomas sistêmicos como superbrotamentos (vassoura-de-bruxa), esverdeamento de flores (virescence), amarelecimento e declínio progressivo.",
      examples: ["'Ca. Phytoplasma mali' (declínio da pereira)", "'Ca. Liberibacter asiaticus' (HLB/Greening dos citros)", "Fitoplasma do enfezamento do milho", "Fitoplasma do superbrotamento do tomateiro"],
      moduleSlug: "fitoplasmas",
      controlHints: [
        "Controle do vetor (cigarrinhas/psilídeos com inseticidas)",
        "Material propagativo indexado e certificado",
        "Erradicação de plantas infectadas",
        "Manejo de plantas daninhas hospedeiras do vetor",
        "Não há cura disponível",
      ],
    },
  },
  {
    id: "result-abiotico",
    result: {
      group: "Causa Abiótica",
      confidence: "possível",
      description:
        "Sintomas sem agente biológico identificável. Podem ser causados por deficiências nutricionais, toxicidade, pH inadequado, excesso ou falta de água, temperaturas extremas, poluentes ou fitotoxicidade de pesticidas.",
      examples: ["Deficiência de ferro (clorose internerval)", "Toxicidade por manganês (manchas marrons)", "Queima por frio/geada", "Fitotoxicidade de herbicidas", "Deficiência de boro (deformação de pontos de crescimento)"],
      moduleSlug: "conceitos-classificacao",
      controlHints: [
        "Análise de solo e foliar",
        "Correção de pH do solo",
        "Adubação equilibrada",
        "Manejo de irrigação",
        "Eliminação da causa primária",
      ],
    },
  },
  {
    id: "result-abiotico-oculto",
    result: {
      group: "Provável Causa Abiótica / Estresse",
      confidence: "possível",
      description:
        "Planta sem sintomas visíveis claros pode estar sob estresse abiótico (hídrico, térmico, salino) ou em fase inicial de infecção. Recomenda-se monitoramento e análise de solo.",
      examples: ["Estresse hídrico (murcha temporária)", "Estresse salino", "Compactação do solo", "Deficiência nutricional incipiente"],
      moduleSlug: "conceitos-classificacao",
      controlHints: [
        "Análise de solo",
        "Monitoramento regular",
        "Irrigação adequada",
        "Amostragem de raízes para nematoides",
      ],
    },
  },
];

export function getNodeById(id: string): DiagnosisNode | undefined {
  return diagnosisTree.find((n) => n.id === id);
}
