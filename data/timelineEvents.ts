export interface TimelineEvent {
  year: number | string;
  title: string;
  description: string;
  significance: string;
  category: "descoberta" | "epidemia" | "método" | "controle" | "moderno";
  moduleSlug?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1755,
    title: "Tillet demonstra transmissibilidade do carvão do trigo",
    description:
      "Mathieu Tillet demonstrou experimentalmente que o carvão do trigo (Tilletia caries) é transmissível de planta a planta, desafiando as teorias de geração espontânea.",
    significance: "Primeiro experimento demonstrando a natureza contagiosa de uma doença de planta.",
    category: "descoberta",
    moduleSlug: "conceitos-classificacao",
  },
  {
    year: 1807,
    title: "Prévost prova que esporos causam carvão do trigo",
    description:
      "Bénédict Prévost demonstrou que os esporos do fungo Tilletia caries eram a causa do carvão do trigo e que o tratamento com sulfato de cobre das sementes poderia prevenir a doença.",
    significance: "Primeiro experimento de controle químico de doença de planta com resultado positivo documentado.",
    category: "controle",
    moduleSlug: "fungos",
  },
  {
    year: 1845,
    title: "Grande Epidemia da Batata na Irlanda (início)",
    description:
      "Phytophthora infestans devastou as plantações de batata em toda a Irlanda e Europa. Mais de 1 milhão de irlandeses morreram de fome e 1-2 milhões emigraram entre 1845 e 1849.",
    significance: "O evento histórico que demonstrou o impacto catastrófico das doenças de plantas e impulsionou a fitopatologia como ciência.",
    category: "epidemia",
    moduleSlug: "oomicetos",
  },
  {
    year: 1861,
    title: "De Bary prova natureza parasitária de Phytophthora infestans",
    description:
      "Heinrich Anton de Bary demonstrou experimentalmente que P. infestans era o agente causal da requeima da batata, não um produto da doença. Aplicou os princípios que viriam a ser os postulados de Koch.",
    significance: "Nascimento da fitopatologia moderna como ciência experimental. De Bary é considerado o 'pai da fitopatologia'.",
    category: "descoberta",
    moduleSlug: "oomicetos",
  },
  {
    year: 1876,
    title: "Robert Koch publica os Postulados de Koch",
    description:
      "Robert Koch estabeleceu os quatro critérios (postulados) para provar a relação causal entre um microrganismo e uma doença. Embora desenvolvidos para doenças humanas, foram adaptados para a fitopatologia.",
    significance: "Fundamentação metodológica da microbiologia e fitopatologia experimental.",
    category: "método",
    moduleSlug: "conceitos-classificacao",
  },
  {
    year: 1878,
    title: "T.J. Burrill descreve bactéria fitopatogênica",
    description:
      "Thomas Jonathan Burrill identificou que o fogo bacteriano das rosáceas era causado por uma bactéria (Erwinia amylovora), provando que bactérias podiam causar doenças em plantas.",
    significance: "Primeira prova de que bactérias causam doenças de plantas — abertura do campo da bacteriologia vegetal.",
    category: "descoberta",
    moduleSlug: "bacterias",
  },
  {
    year: 1882,
    title: "Calda Bordalesa descoberta por Millardet",
    description:
      "Alexis Millardet observou que as videiras borrifadas com mistura de sulfato de cobre e cal (para afastar ladrões) estavam protegidas do míldio. Desenvolveu a Calda Bordalesa como fungicida.",
    significance: "Primeiro fungicida sistemático amplamente usado, ainda em uso mais de 140 anos depois.",
    category: "controle",
    moduleSlug: "fungos",
  },
  {
    year: 1892,
    title: "Iwanowski descobre os vírus (agente filtrável)",
    description:
      "Dmitri Iwanowski demonstrou que o agente causador do mosaico do tabaco passava por filtros que retinham bactérias. O 'agente filtrável' foi o primeiro vírus descrito.",
    significance: "Descoberta dos vírus como nova classe de agentes infecciosos — fundação da virologia.",
    category: "descoberta",
    moduleSlug: "virus",
  },
  {
    year: 1898,
    title: "Beijerinck nomeia o 'contagium vivum fluidum' (vírus)",
    description:
      "Martinus Beijerinck confirmou os achados de Iwanowski e propôs que o agente do mosaico do tabaco era um 'contagium vivum fluidum' — líquido vivo contagioso — diferente de qualquer organismo conhecido.",
    significance: "Conceituação dos vírus como nova categoria de agentes infecciosos, distinta das bactérias.",
    category: "descoberta",
    moduleSlug: "virus",
  },
  {
    year: 1904,
    title: "Erlwein descreve nematoides fitopatogênicos",
    description:
      "Primeiras descrições sistemáticas de nematoides como causadores de doenças em plantas cultivadas, estabelecendo a nematologia vegetal como disciplina.",
    significance: "Reconhecimento dos nematoides como importantes patógenos de plantas.",
    category: "descoberta",
    moduleSlug: "nematoides",
  },
  {
    year: 1926,
    title: "Embora demonstrado em 1890s, primeiro trabalho sobre carvões e ferrugens classifica Uredinales",
    description:
      "Consolidação taxonômica dos Uredinales (ferrugens) e Ustilaginales (carvões) como ordem dentro dos Basidiomycota, com ciclos de vida complexos e múltiplos hospedeiros.",
    significance: "Base para o entendimento dos ciclos epidemiológicos de ferrugens.",
    category: "descoberta",
    moduleSlug: "fungos",
  },
  {
    year: 1943,
    title: "Vanderplank desenvolve modelos matemáticos de epidemias",
    description:
      "J.E. Vanderplank desenvolveu os primeiros modelos matemáticos quantitativos para descrever o progresso de epidemias de doenças de plantas, introduzindo os conceitos de taxa de infecção e inóculo inicial.",
    significance: "Fundação da epidemiologia quantitativa de plantas — possibilitando previsão e manejo racional de epidemias.",
    category: "método",
    moduleSlug: "epidemiologia",
  },
  {
    year: 1967,
    title: "Doë et al. descrevem fitoplasmas (MLOs)",
    description:
      "Doi e colaboradores descreveram os primeiros Mycoplasma-like Organisms (MLOs) em tecidos de plantas doentes, mais tarde renomeados Fitoplasmas. Eram visíveis apenas em microscopia eletrônica.",
    significance: "Descoberta de nova classe de patógenos (procariotos sem parede celular) em plantas.",
    category: "descoberta",
    moduleSlug: "fitoplasmas",
  },
  {
    year: 1970,
    title: "Primeiro fungicida sistêmico (benzimidazóis) lançado comercialmente",
    description:
      "O benomyl (Benlate®) foi o primeiro fungicida sistêmico lançado comercialmente, revolucionando o controle de doenças fúngicas por ser translocado na planta e ter ação curativa.",
    significance: "Início da era dos fungicidas sistêmicos — e dos primeiros relatos de resistência fúngica.",
    category: "controle",
    moduleSlug: "fungos",
  },
  {
    year: 1975,
    title: "Primeiros relatos de resistência a benzimidazóis",
    description:
      "Apenas 5 anos após o lançamento dos benzimidazóis, foram reportados os primeiros casos de fungos resistentes a estes fungicidas, demonstrando a pressão de seleção exercida pelo uso massivo.",
    significance: "Demonstrou a necessidade de rotação de fungicidas e manejo de resistência — origem do sistema FRAC.",
    category: "método",
    moduleSlug: "fungicidas",
  },
  {
    year: 1980,
    title: "Agrobacterium tumefaciens como ferramenta de engenharia genética",
    description:
      "Pesquisadores descobriram que o mecanismo de transferência do plasmídeo Ti de Agrobacterium poderia ser utilizado para inserir genes de interesse em plantas — base da transgenia vegetal.",
    significance: "A bactéria fitopatogênica tornou-se a principal ferramenta de transformação genética de plantas.",
    category: "moderno",
    moduleSlug: "bacterias",
  },
  {
    year: 1983,
    title: "Triazóis chegam ao mercado (propiconazol, tebuconazol)",
    description:
      "Os fungicidas do grupo dos triazóis (Inibidores da Biossíntese de Ergosterol — IBE) foram lançados, oferecendo controle sistêmico de grande espectro com menor risco de resistência que os benzimidazóis.",
    significance: "Os triazóis tornaram-se o grupo de fungicidas mais importante mundialmente, ainda amplamente usados.",
    category: "controle",
    moduleSlug: "fungicidas",
  },
  {
    year: 1992,
    title: "Estrobilurinas chegam ao mercado (azoxistrobina)",
    description:
      "A azoxistrobina (Amistar®) foi lançada — derivada de compostos naturais de fungos. Alta eficácia, amplo espectro e ação sistêmica. Rapidamente tornou-se o fungicida mais vendido do mundo.",
    significance: "Revolução no controle de doenças fúngicas — nova classe mecanística (inibição do complexo III).",
    category: "controle",
    moduleSlug: "fungicidas",
  },
  {
    year: 2001,
    title: "Ferrugem asiática da soja detectada no Brasil",
    description:
      "Phakopsora pachyrhizi foi detectada pela primeira vez no Brasil em 2001, rapidamente se espalhando por todo o cinturão sojicultor. Tornou-se a doença mais cara de controlar na história da agricultura brasileira.",
    significance: "Demonstrou a velocidade de disseminação de patógenos em áreas tropicais e a importância do monitoramento.",
    category: "epidemia",
    moduleSlug: "fungos",
  },
  {
    year: 2004,
    title: "HLB / Greening dos Citros detectado no Brasil",
    description:
      "O Huanglongbing (HLB), causado por 'Candidatus Liberibacter asiaticus', foi detectado em São Paulo em 2004 — transmitido pelo psilídeo Diaphorina citri. Rapidamente se espalhou por todo o cinturão citrícola.",
    significance: "A doença mais destrutiva dos citros no mundo chegou ao Brasil, sem cura conhecida.",
    category: "epidemia",
    moduleSlug: "fitoplasmas",
  },
  {
    year: 2010,
    title: "Brusone do trigo (Pyricularia) detectado na Bolívia e Bangladesh",
    description:
      "A brusone do trigo causada por Pyricularia oryzae Triticum foi detectada em novas regiões (Bolívia 2002, Bangladesh 2016), demonstrando expansão geográfica alarmante de um patógeno devastador.",
    significance: "Alerta global sobre a capacidade de expansão de patógenos em trigo, cereal essencial à segurança alimentar.",
    category: "epidemia",
    moduleSlug: "fungos",
  },
  {
    year: 2016,
    title: "Fusarium wilt Tropical Race 4 (TR4) ameaça produção mundial de banana",
    description:
      "Fusarium oxysporum f.sp. cubense TR4 se espalhou da Ásia para América Latina, ameaçando a variedade Cavendish que representa 95% da produção mundial de banana para exportação.",
    significance: "Risco global à segurança alimentar — principal variedade comercial de banana sem resistência genética eficaz.",
    category: "epidemia",
    moduleSlug: "fungos",
  },
  {
    year: 2020,
    title: "Ferramentas de inteligência artificial para diagnóstico de doenças",
    description:
      "Desenvolvimento de aplicativos e plataformas com IA para diagnóstico de doenças de plantas a partir de fotografias, utilizando redes neurais convolucionais treinadas com milhões de imagens.",
    significance: "Democratização do diagnóstico fitossanitário — agricultores com smartphones podem identificar doenças em campo.",
    category: "moderno",
    moduleSlug: "conceitos-classificacao",
  },
  {
    year: "Atual",
    title: "Manejo Integrado e Agricultura de Precisão",
    description:
      "Integração de sensoriamento remoto, drones, IoT e modelagem climática para monitoramento e manejo preditivo de doenças. CRISPR/Cas9 para desenvolvimento de variedades resistentes.",
    significance: "A fitopatologia entra na era digital — manejo baseado em dados, inteligência artificial e biotecnologia avançada.",
    category: "moderno",
    moduleSlug: "manejo-integrado",
  },
];
