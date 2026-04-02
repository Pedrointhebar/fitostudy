export interface QuizQuestion {
  id: string;
  moduleSlug: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ── CONCEITOS E CLASSIFICAÇÃO ──────────────────────────────────────────────
  {
    id: "cc-1",
    moduleSlug: "conceitos-classificacao",
    topic: "Conceitos e Classificação",
    question: "O que desencadeou o desenvolvimento da fitopatologia como ciência moderna?",
    options: [
      "Descoberta de vírus por Iwanowski (1892)",
      "Epidemia do míldio da batata na Irlanda (1845–1847)",
      "Publicação dos postulados de Koch (1876)",
      "Introdução dos primeiros fungicidas cúpricos",
    ],
    correctIndex: 1,
    explanation:
      "A devastação por Phytophthora infestans causou mais de 2 milhões de mortes/emigrações na Irlanda, impulsionando a pesquisa sobre doenças de plantas.",
  },
  {
    id: "cc-2",
    moduleSlug: "conceitos-classificacao",
    topic: "Conceitos e Classificação",
    question: "Segundo a definição do material didático, doença de planta é:",
    options: [
      "Qualquer alteração morfológica visível causada por insetos ou ácaros",
      "Um processo dinâmico e fisiológico em que o funcionamento normal da planta é alterado pela irritação contínua de um agente causal",
      "A ausência de crescimento vegetal por deficiência hídrica",
      "A presença de qualquer microorganismo no tecido vegetal",
    ],
    correctIndex: 1,
    explanation:
      "A definição oficial engloba tanto causas bióticas quanto abióticas e destaca o caráter contínuo e fisiológico do processo.",
  },
  {
    id: "cc-3",
    moduleSlug: "conceitos-classificacao",
    topic: "Conceitos e Classificação",
    question: "Quais são os três vértices do triângulo da doença?",
    options: [
      "Solo, clima e patógeno",
      "Patógeno, hospedeiro e vetor",
      "Hospedeiro suscetível, patógeno virulento e ambiente favorável",
      "Fungo, bactéria e vírus",
    ],
    correctIndex: 2,
    explanation:
      "O triângulo da doença representa que a doença só ocorre quando os três fatores se sobrepõem simultaneamente no espaço e no tempo.",
  },
  {
    id: "cc-4",
    moduleSlug: "conceitos-classificacao",
    topic: "Conceitos e Classificação",
    question: "Uma doença causada por deficiência de ferro é classificada como:",
    options: [
      "Biótica, pois envolve metabolismo",
      "Abiótica, pois não há patógeno vivo envolvido",
      "Fúngica, pois altera a clorofila",
      "Viral, pois afeta a síntese proteica",
    ],
    correctIndex: 1,
    explanation:
      "Doenças abióticas (não-infecciosas) são causadas por fatores físicos ou químicos do ambiente, sem envolvimento de patógeno vivo.",
  },
  {
    id: "cc-5",
    moduleSlug: "conceitos-classificacao",
    topic: "Conceitos e Classificação",
    question:
      "As perdas anuais causadas por doenças de plantas na produção agrícola global representam aproximadamente:",
    options: ["1% a 3%", "5% a 8%", "10% a 15%", "30% a 40%"],
    correctIndex: 2,
    explanation:
      "Segundo o material da disciplina, doenças de plantas causam perdas de 10% a 15% da produção agrícola global.",
  },

  // ── SINTOMATOLOGIA ────────────────────────────────────────────────────────
  {
    id: "si-1",
    moduleSlug: "sintomatologia",
    topic: "Sintomatologia",
    question:
      "Qual é a diferença fundamental entre sintoma e sinal em fitopatologia?",
    options: [
      "Sintoma é observado nas raízes; sinal, nas folhas",
      "Sintoma é a reação da planta doente; sinal é a estrutura física do próprio patógeno visível na planta",
      "Sintoma indica doença abiótica; sinal indica doença biótica",
      "São sinônimos usados em contextos diferentes",
    ],
    correctIndex: 1,
    explanation:
      "Sintomas (manchas, murcha, galhas) são respostas da planta. Sinais (micélios, escleródios, esporos) são estruturas do próprio patógeno.",
  },
  {
    id: "si-2",
    moduleSlug: "sintomatologia",
    topic: "Sintomatologia",
    question: "Galhas hiperplásticas são classificadas como qual tipo de sintoma?",
    options: [
      "Necrose — morte celular localizada",
      "Hipoplasia — crescimento reduzido",
      "Hipertrofia/hiperplasia — crescimento excessivo anormal",
      "Clorose — perda de pigmentos",
    ],
    correctIndex: 2,
    explanation:
      "Galhas resultam de crescimento excessivo e anormal de tecidos. Causadas por Meloidogyne, Agrobacterium, fitoplasmas, entre outros.",
  },
  {
    id: "si-3",
    moduleSlug: "sintomatologia",
    topic: "Sintomatologia",
    question: "O padrão de mosaico foliar se caracteriza por:",
    options: [
      "Lesões necróticas circulares e delimitadas",
      "Manchas verde-claras e verde-escuras intercaladas no limbo foliar",
      "Escurecimento uniforme de toda a lâmina foliar",
      "Presença de pústulas pulverulentas na face abaxial",
    ],
    correctIndex: 1,
    explanation:
      "O mosaico é sintoma sistêmico característico de viroses, causado pela multiplicação desigual do vírus nas células.",
  },
  {
    id: "si-4",
    moduleSlug: "sintomatologia",
    topic: "Sintomatologia",
    question: "Escleródios visíveis na superfície da planta são considerados:",
    options: [
      "Sintoma — reação da planta ao patógeno",
      "Sinal — estrutura física do patógeno",
      "Sintoma abiótico de estresse hídrico",
      "Metabólito secundário da planta hospedeira",
    ],
    correctIndex: 1,
    explanation:
      "Escleródios são estruturas de resistência do fungo (ex: Sclerotinia sclerotiorum), portanto sinais do patógeno.",
  },
  {
    id: "si-5",
    moduleSlug: "sintomatologia",
    topic: "Sintomatologia",
    question: "Nanismo em plantas é classificado como:",
    options: [
      "Hipertrofia sistêmica",
      "Necrose vascular",
      "Hipoplasia — redução do crescimento normal",
      "Antracnose generalizada",
    ],
    correctIndex: 2,
    explanation:
      "Nanismo e enfezamento são sintomas de hipoplasia, comuns em viroses, fitoplasmas e doenças vasculares.",
  },

  // ── ETIOLOGIA ─────────────────────────────────────────────────────────────
  {
    id: "et-1",
    moduleSlug: "etiologia",
    topic: "Etiologia",
    question: "Qual é a sequência correta dos Postulados de Koch?",
    options: [
      "Inoculação → isolamento → associação → reisolamento",
      "Associação → isolamento em cultura pura → inoculação → reisolamento",
      "Isolamento → associação → reisolamento → inoculação",
      "Associação → inoculação → reisolamento → isolamento",
    ],
    correctIndex: 1,
    explanation:
      "Os postulados seguem lógica experimental: (1) associação, (2) isolamento puro, (3) inoculação reproduzindo sintomas, (4) reisolamento idêntico.",
  },
  {
    id: "et-2",
    moduleSlug: "etiologia",
    topic: "Etiologia",
    question:
      "Por que os Postulados de Koch têm limitações para vírus e fitoplasmas?",
    options: [
      "Porque vírus e fitoplasmas são inofensivos fora da planta",
      "Porque são parasitas biotróficos obrigatórios que não crescem em meios de cultura artificiais",
      "Porque o postulado 1 (associação) não se aplica a eles",
      "Porque vírus não possuem material genético",
    ],
    correctIndex: 1,
    explanation:
      "O 2º postulado exige isolamento em cultura pura, impossível para vírus (replicação intracelular obrigatória) e fitoplasmas (incultiváveis in vitro).",
  },
  {
    id: "et-3",
    moduleSlug: "etiologia",
    topic: "Etiologia",
    question: "Um patógeno biotrófico obrigatório se define como:",
    options: [
      "Aquele que mata o tecido do hospedeiro antes de colonizá-lo",
      "Aquele que só consegue se desenvolver em tecido vivo do hospedeiro",
      "Aquele que vive exclusivamente no solo sem hospedeiro",
      "Aquele que infecta apenas uma espécie de planta",
    ],
    correctIndex: 1,
    explanation:
      "Biotrófos obrigatórios (ferrugens, oídios, vírus, fitoplasmas) dependem de células vivas para completar seu ciclo.",
  },
  {
    id: "et-4",
    moduleSlug: "etiologia",
    topic: "Etiologia",
    question: "Virulência se diferencia de patogenicidade porque:",
    options: [
      "São sinônimos — usados em contextos diferentes",
      "Patogenicidade é a capacidade geral de causar doença; virulência é o grau de patogenicidade em um hospedeiro específico",
      "Virulência é ausência total de patogenicidade",
      "Patogenicidade descreve intensidade; virulência descreve capacidade",
    ],
    correctIndex: 1,
    explanation:
      "Patogenicidade = capacidade geral. Virulência = intensidade relativa em hospedeiro/raça específica.",
  },
  {
    id: "et-5",
    moduleSlug: "etiologia",
    topic: "Etiologia",
    question: "A etiologia de uma doença inclui:",
    options: [
      "Apenas a descrição dos sintomas externos visíveis",
      "O estudo das causas e dos agentes responsáveis pela doença",
      "O monitoramento das populações de insetos vetores",
      "A quantificação das perdas econômicas em campo",
    ],
    correctIndex: 1,
    explanation:
      "Etiologia investiga o agente causal (fungo, bactéria, vírus, nematoide, fator abiótico), sua natureza e como origina a doença.",
  },

  // ── NEMATOIDES ────────────────────────────────────────────────────────────
  {
    id: "ne-1",
    moduleSlug: "nematoides",
    topic: "Nematoides",
    question: "Como os nematoides fitoparasitas se alimentam nas raízes?",
    options: [
      "Absorvem nutrientes diretamente pela cutícula sem perfurar células",
      "Usam o estilete como agulha para perfurar células, injetar enzimas e sugar nutrientes",
      "Liberam toxinas no solo que são absorvidas passivamente pela raiz",
      "Penetram no xilema e bloqueiam o fluxo de água",
    ],
    correctIndex: 1,
    explanation:
      "O estilete funciona como seringa: perfura, injeta enzimas digestivas e aspira o conteúdo celular.",
  },
  {
    id: "ne-2",
    moduleSlug: "nematoides",
    topic: "Nematoides",
    question:
      "Além do dano direto, por que as feridas causadas por nematoides são perigosas?",
    options: [
      "Porque alteram o pH do solo em torno das raízes",
      "Porque servem como portas de entrada para fungos e bactérias, formando complexos de doenças",
      "Porque liberam compostos tóxicos que inibem o crescimento radicular",
      "Porque destroem os pelos absorventes irreversivelmente",
    ],
    correctIndex: 1,
    explanation:
      "As lesões criadas pelo estilete facilitam a entrada de patógenos secundários (Fusarium, Pythium, bactérias), resultando em complexos muito mais graves.",
  },
  {
    id: "ne-3",
    moduleSlug: "nematoides",
    topic: "Nematoides",
    question:
      "No Estudo de Caso 3 (lavoura de soja com reboleiras), qual foi o erro do produtor ao planejar adubação corretiva?",
    options: [
      "Usou o fertilizante errado para o tipo de solo",
      "As raízes com galhas de Meloidogyne estão inoperantes — mais adubo no solo não resolve porque a planta não consegue absorvê-lo",
      "A adubação em reboleiras não é recomendada agronomicamente",
      "O amarelecimento indicava excesso de nutrientes, não deficiência",
    ],
    correctIndex: 1,
    explanation:
      "O nematoide parasita o tecido radicular estruturalmente. O amarelecimento e nanismo são sintomas secundários da incapacidade de absorção.",
  },
  {
    id: "ne-4",
    moduleSlug: "nematoides",
    topic: "Nematoides",
    question:
      "Qual estágio de Meloidogyne é o único livre no solo e infectante?",
    options: [
      "J1 — primeiro juvenil (dentro do ovo)",
      "J2 — segundo juvenil",
      "J3 — terceiro juvenil",
      "Fêmea adulta sedentária",
    ],
    correctIndex: 1,
    explanation:
      "O J2 é o único estágio livre no solo que penetra ativamente nas raízes próximo ao meristema.",
  },
  {
    id: "ne-5",
    moduleSlug: "nematoides",
    topic: "Nematoides",
    question:
      "As 'reboleiras' observadas na lavoura de soja são característica epidemiológica de nematoses porque:",
    options: [
      "Nematoides se dispersam pelo vento em padrão circular",
      "Nematoides têm mobilidade limitada no solo — a infestação se expande radialmente a partir de pontos de introdução",
      "O padrão circular indica deficiência de nutrientes, não nematoides",
      "Nematoides afetam apenas as bordas das lavouras",
    ],
    correctIndex: 1,
    explanation:
      "Nematoides se movem poucos centímetros por conta própria. A disseminação ocorre lentamente a partir de focos (mudas, implementos, água), criando o padrão de reboleiras.",
  },

  // ── PROTOZOÁRIOS ──────────────────────────────────────────────────────────
  {
    id: "pr-1",
    moduleSlug: "protozoarios",
    topic: "Protozoários",
    question: "Onde Phytomonas habita na planta hospedeira?",
    options: [
      "Xilema — vasos condutores de água",
      "Floema ou tubos laticíferos",
      "Mesofilo foliar e cloroplastos",
      "Epiderme e tecidos de revestimento",
    ],
    correctIndex: 1,
    explanation:
      "Phytomonas coloniza o floema e os laticíferos, interferindo no transporte de fotoassimilados e causando declínio rápido.",
  },
  {
    id: "pr-2",
    moduleSlug: "protozoarios",
    topic: "Protozoários",
    question: "Como Phytomonas é transmitido de planta para planta?",
    options: [
      "Por cigarrinhas de forma persistente propagativa",
      "Por percevejos (Hemiptera)",
      "Por pulgões de forma não-persistente",
      "Por contato mecânico durante tratos culturais",
    ],
    correctIndex: 1,
    explanation:
      "Diferente dos fitoplasmas (cigarrinhas), Phytomonas é transmitido por percevejos fitófagos como Dysdercus spp. e Lincus spp.",
  },
  {
    id: "pr-3",
    moduleSlug: "protozoarios",
    topic: "Protozoários",
    question:
      "Qual grupo foi reclassificado no reino Protozoa, conforme o material didático?",
    options: [
      "Oomicetos causadores de míldio",
      "Plasmodioforomicetos causadores da hérnia das crucíferas",
      "Fungos mitospóricos causadores de antracnose",
      "Espiroplasmas causadores de stubborn",
    ],
    correctIndex: 1,
    explanation:
      "Plasmodiophora brassicae (hérnia das crucíferas) foi reclassificado no reino Protozoa — exemplo de como a taxonomia evolui com biologia molecular.",
  },
  {
    id: "pr-4",
    moduleSlug: "protozoarios",
    topic: "Protozoários",
    question:
      "Os sintomas causados por Phytomonas em coqueiro e cafeeiro incluem:",
    options: [
      "Galhas radiculares e nanismo",
      "Mosaico foliar e distorção de folhas jovens",
      "Murchamento e declínio rápido da planta",
      "Podridão mole com odor fermentativo",
    ],
    correctIndex: 2,
    explanation:
      "Phytomonas coloniza tecidos condutores, comprometendo o transporte de fotoassimilados e causando murcha progressiva e declínio rápido.",
  },
  {
    id: "pr-5",
    moduleSlug: "protozoarios",
    topic: "Protozoários",
    question:
      "A qual família pertence Phytomonas, o principal protozoário fitopatogênico?",
    options: [
      "Plasmodiidae",
      "Trypanosomatidae",
      "Entamoebidae",
      "Apicomplexa",
    ],
    correctIndex: 1,
    explanation:
      "Phytomonas pertence à família Trypanosomatidae — a mesma dos agentes da doença de Chagas e leishmaniose.",
  },

  // ── STRAMENOPILA ─────────────────────────────────────────────────────────
  {
    id: "st-1",
    moduleSlug: "stramenopila",
    topic: "Stramenopila",
    question:
      "Por que oomicetos são filogeneticamente mais próximos de algas pardas do que de fungos?",
    options: [
      "Porque vivem em ambientes aquáticos",
      "Porque possuem parede celular de celulose e glicanos (não quitina) e produzem zoósporos biflagelados",
      "Porque são multicelulares como as algas",
      "Porque realizam fotossíntese em condições de baixa luminosidade",
    ],
    correctIndex: 1,
    explanation:
      "Parede de celulose/glicanos (não quitina), talo diploide dominante e zoósporos biflagelados são características das algas pardas, não de fungos.",
  },
  {
    id: "st-2",
    moduleSlug: "stramenopila",
    topic: "Stramenopila",
    question:
      "No Estudo de Caso 1 (produtor de tomates), por que o fungicida triazol falhou completamente?",
    options: [
      "A dose aplicada foi insuficiente para o nível de infestação",
      "Triazóis inibem síntese de ergosterol — e oomicetos não possuem ergosterol em suas membranas",
      "O patógeno havia desenvolvido resistência ao princípio ativo",
      "Triazóis só funcionam em condições de baixa umidade",
    ],
    correctIndex: 1,
    explanation:
      "Triazóis (DMI) têm como alvo a biossíntese de ergosterol, presente em fungos verdadeiros. Oomicetos possuem composição lipídica diferente, sendo naturalmente insensíveis.",
  },
  {
    id: "st-3",
    moduleSlug: "stramenopila",
    topic: "Stramenopila",
    question:
      "O crescimento esbranquiçado na face inferior das folhas de tomate do Estudo de Caso 1 é um sinal de:",
    options: [
      "Oídio (fungo Ascomycota)",
      "Míldio causado por Phytophthora (oomiceto)",
      "Bactéria produtora de exopolissacarídeos",
      "Viroide sistêmico",
    ],
    correctIndex: 1,
    explanation:
      "Esporulação esbranquiçada/acinzentada na face abaxial foliar, associada a manchas necróticas e condições de frio e umidade, é sinal clássico de míldio por oomicetos.",
  },
  {
    id: "st-4",
    moduleSlug: "stramenopila",
    topic: "Stramenopila",
    question: "Qual fungicida deve ser recomendado para controlar Phytophthora?",
    options: [
      "Tebuconazol (triazol — inibe ergosterol)",
      "Azoxistrobina (estrobilurina — inibe respiração mitocondrial)",
      "Metalaxil (fenilamida — específico para oomicetos)",
      "Carbendazim (benzimidazol — inibe beta-tubulina)",
    ],
    correctIndex: 2,
    explanation:
      "Fenilamidas (metalaxil, mefenoxam) atuam na RNA polimerase ribossomal I de oomicetos. O produtor do Estudo de Caso 1 deveria ter usado metalaxil.",
  },
  {
    id: "st-5",
    moduleSlug: "stramenopila",
    topic: "Stramenopila",
    question:
      "Por que temperaturas baixas e alta umidade favorecem epidemias de Phytophthora?",
    options: [
      "Porque o fungo se reproduz mais rápido em condições frias",
      "Porque zoósporos biflagelados nadam em filmes de água e são produzidos em maior número em temperaturas mais baixas",
      "Porque as plantas ficam mais suscetíveis no inverno",
      "Porque pesticidas são menos eficazes em baixas temperaturas",
    ],
    correctIndex: 1,
    explanation:
      "Em temperaturas mais baixas, esporângios liberam zoósporos (em vez de germinar diretamente), multiplicando o número de unidades infectivas.",
  },

  // ── FUNGOS ────────────────────────────────────────────────────────────────
  {
    id: "fu-1",
    moduleSlug: "fungos",
    topic: "Micologia — Fungos",
    question:
      "Qual é o componente principal da parede celular de fungos verdadeiros, que os distingue dos oomicetos?",
    options: [
      "Celulose e glicanos",
      "Peptidoglicano",
      "Quitina",
      "Pectina e lignina",
    ],
    correctIndex: 2,
    explanation:
      "Quitina é exclusiva da parede celular de fungos verdadeiros. Oomicetos têm celulose; bactérias têm peptidoglicano.",
  },
  {
    id: "fu-2",
    moduleSlug: "fungos",
    topic: "Micologia — Fungos",
    question:
      "Ferrugens biotróficas (como Phakopsora pachyrhizi na soja) pertencem a:",
    options: [
      "Ascomycota — produzem ascósporos em ascos",
      "Basidiomycota — produzem basidiósporos",
      "Oomycota — produzem zoósporos biflagelados",
      "Deuteromycota — sem fase sexuada conhecida",
    ],
    correctIndex: 1,
    explanation:
      "Ferrugens (Uredinales) são Basidiomycota biotróficos. Phakopsora pachyrhizi causa a ferrugem-asiática da soja, com perdas bilionárias anuais no Brasil.",
  },
  {
    id: "fu-3",
    moduleSlug: "fungos",
    topic: "Micologia — Fungos",
    question:
      "Fungos Ascomycota frequentemente se reproduzem assexuadamente por:",
    options: [
      "Zoósporos biflagelados",
      "Basidiósporos em basídios",
      "Conídios",
      "Oósporos sexuados",
    ],
    correctIndex: 2,
    explanation:
      "Conídios são esporos assexuados produzidos em conidióforos, característicos da fase anamórfica de Ascomycota (Alternaria, Cercospora, Colletotrichum).",
  },
  {
    id: "fu-4",
    moduleSlug: "fungos",
    topic: "Micologia — Fungos",
    question: "Carvões (Ustilago, Tilletia) são classificados como:",
    options: [
      "Ascomycota necrotróficos",
      "Basidiomycota parasitas de grãos e cereais",
      "Oomicetos de solo",
      "Fungos mitospóricos sem fase sexuada",
    ],
    correctIndex: 1,
    explanation:
      "Carvões (Ustilaginales) são Basidiomycota que parasitam grãos e inflorescências de cereais, transformando tecidos em massas de esporos escuros (teliosporos).",
  },
  {
    id: "fu-5",
    moduleSlug: "fungos",
    topic: "Micologia — Fungos",
    question:
      "O grupo mais diverso de fitopatógenos, responsável pela maioria das doenças de plantas, é:",
    options: [
      "Bactérias gram-negativas",
      "Oomicetos do Reino Stramenopila",
      "Fungos verdadeiros (Reino Fungi)",
      "Vírus de RNA",
    ],
    correctIndex: 2,
    explanation:
      "Conforme o material didático, fungos verdadeiros compõem o grupo mais diverso de fitopatógenos — eucariontes, heterotróficos, que formam micélio.",
  },

  // ── BACTÉRIAS ─────────────────────────────────────────────────────────────
  {
    id: "ba-1",
    moduleSlug: "bacterias",
    topic: "Bactérias",
    question:
      "Por que bactérias fitopatogênicas não conseguem penetrar a cutícula intacta?",
    options: [
      "Porque são muito grandes para atravessar a barreira lipídica",
      "Porque não produzem enzimas cutinase suficientes — dependem de ferimentos ou aberturas naturais",
      "Porque a cutícula é impermeável a todos os microrganismos",
      "Porque bactérias só infectam raízes, não partes aéreas",
    ],
    correctIndex: 1,
    explanation:
      "Diferente de muitos fungos (que penetram mecanicamente via apressório), bactérias dependem de ferimentos mecânicos ou aberturas naturais (estômatos, hidatódios, lenticelas).",
  },
  {
    id: "ba-2",
    moduleSlug: "bacterias",
    topic: "Bactérias",
    question: "Ralstonia solanacearum causa murcha porque:",
    options: [
      "Produz toxinas que destroem cloroplastos",
      "Coloniza e bloqueia os vasos do xilema com exopolissacarídeos",
      "Infecta o floema e impede translocação de açúcares",
      "Produz etileno que causa abscisão foliar prematura",
    ],
    correctIndex: 1,
    explanation:
      "Ralstonia multiplica-se no xilema produzindo EPS que obstruem mecanicamente o fluxo de água — a planta 'morre de sede' com água disponível no solo.",
  },
  {
    id: "ba-3",
    moduleSlug: "bacterias",
    topic: "Bactérias",
    question:
      "Erwinia/Pectobacterium causa podridões moles principalmente por meio de:",
    options: [
      "Bloqueio do xilema com exopolissacarídeos",
      "Enzimas pectinolíticas que degradam a lamela média das células vegetais",
      "Toxinas que despolarizam membranas celulares",
      "Sistema de secreção tipo III que suprime a HR",
    ],
    correctIndex: 1,
    explanation:
      "Enzimas pectinolíticas degradam a pectina da lamela média, desintegrando a coesão entre células e causando a maceração aquosa das podridões moles.",
  },
  {
    id: "ba-4",
    moduleSlug: "bacterias",
    topic: "Bactérias",
    question:
      "Estômatos e hidatódios são importantes para bactérias fitopatogênicas porque:",
    options: [
      "São locais de síntese de compostos antimicrobianos",
      "São aberturas naturais usadas como vias de entrada na planta",
      "Secretam exsudatos que atraem bactérias patogênicas",
      "São os únicos locais onde bactérias conseguem se multiplicar",
    ],
    correctIndex: 1,
    explanation:
      "Na ausência de ferimentos, bactérias como Xanthomonas entram através de aberturas naturais — estômatos, hidatódios (bordas das folhas) e lenticelas.",
  },
  {
    id: "ba-5",
    moduleSlug: "bacterias",
    topic: "Bactérias",
    question: "Agrobacterium tumefaciens causa galha da coroa através de:",
    options: [
      "Enzimas pectinolíticas que estimulam divisão celular",
      "Transferência de T-DNA do plasmídeo Ti para o genoma da planta",
      "Toxinas que ativam genes de crescimento da planta",
      "Exopolissacarídeos que bloqueiam receptores hormonais",
    ],
    correctIndex: 1,
    explanation:
      "O T-DNA integra-se ao genoma vegetal e codifica genes para biossíntese descontrolada de auxinas e citocininas, causando tumores. Base da transformação genética de plantas.",
  },

  // ── MLO/MICOPLASMAS ───────────────────────────────────────────────────────
  {
    id: "ml-1",
    moduleSlug: "mlomicoplasmas",
    topic: "MLO/Fitoplasmas",
    question:
      "O que diferencia fitoplasmas de todos os outros procariontes fitopatogênicos?",
    options: [
      "Fitoplasmas produzem esporos de resistência no solo",
      "Fitoplasmas não possuem parede celular e são parasitas obrigatórios do floema",
      "Fitoplasmas são gram-positivos com parede espessa de peptidoglicano",
      "Fitoplasmas se multiplicam em meios de cultura artificiais simples",
    ],
    correctIndex: 1,
    explanation:
      "Mollicutes são únicos por não possuírem parede celular — daí a sensibilidade à tetraciclina e morfologia pleomórfica. Habitam exclusivamente o floema e são incultiváveis in vitro.",
  },
  {
    id: "ml-2",
    moduleSlug: "mlomicoplasmas",
    topic: "MLO/Fitoplasmas",
    question:
      "Vassoura-de-bruxa, filodia e amarelecimento generalizado são sintomas típicos de:",
    options: [
      "Fungos Basidiomycota biotróficos",
      "Fitoplasmas (MLOs)",
      "Oomicetos do gênero Phytophthora",
      "Nematoides do gênero Pratylenchus",
    ],
    correctIndex: 1,
    explanation:
      "Fitoplasmas perturbam o balanço hormonal da planta, causando vassoura-de-bruxa (proliferação de brotações axilares), filodia (pétalas → folhas) e amarelecimento.",
  },
  {
    id: "ml-3",
    moduleSlug: "mlomicoplasmas",
    topic: "MLO/Fitoplasmas",
    question: "Como fitoplasmas são transmitidos de planta para planta no campo?",
    options: [
      "Por contato mecânico durante podas e colheita",
      "Por cigarrinhas (Cicadellidae) de forma persistente propagativa",
      "Por fungos do solo (Olpidium, Polymyxa)",
      "Por sementes e material de propagação vegetativa",
    ],
    correctIndex: 1,
    explanation:
      "O fitoplasma replica-se no inseto vetor (cigarrinha), que permanece infectivo por toda a vida após período de latência. Cigarrinhas são os vetores exclusivos.",
  },
  {
    id: "ml-4",
    moduleSlug: "mlomicoplasmas",
    topic: "MLO/Fitoplasmas",
    question: "Por que fitoplasmas recebem status de 'Candidatus' na nomenclatura?",
    options: [
      "Porque foram descritos recentemente (após 2000)",
      "Porque nunca foram cultivados em meio sintético puro in vitro",
      "Porque infectam apenas hospedeiros silvestres não cultivados",
      "Porque seu genoma nunca foi completamente sequenciado",
    ],
    correctIndex: 1,
    explanation:
      "O Código Internacional de Nomenclatura Bacteriana exige cultivo puro para descrição formal. Fitoplasmas incultiváveis recebem status 'Candidatus'.",
  },
  {
    id: "ml-5",
    moduleSlug: "mlomicoplasmas",
    topic: "MLO/Fitoplasmas",
    question:
      "A sensibilidade de fitoplasmas à tetraciclina é importante porque:",
    options: [
      "Permite o tratamento curativo definitivo de plantas infectadas",
      "Comprovou sua natureza procariótica e os distinguiu de vírus",
      "É usada como principal método de controle em pomares comerciais",
      "Indica que possuem parede celular de peptidoglicano",
    ],
    correctIndex: 1,
    explanation:
      "Quando a tetraciclina causava remissão temporária dos sintomas, isso provou que o agente era procariótico (não um vírus), confirmando historicamente a natureza bacteriana dos MLOs.",
  },

  // ── VÍRUS ─────────────────────────────────────────────────────────────────
  {
    id: "vi-1",
    moduleSlug: "virus",
    topic: "Vírus e Viroses",
    question:
      "No Estudo de Caso 2 (pomar de mamão), por que nenhuma colônia cresceu nas placas de Petri após uma semana?",
    options: [
      "O meio de cultura usado era inadequado para o patógeno em questão",
      "O agrônomo tentou cultivar um parasita intracelular obrigatório — vírus não crescem em meios artificiais",
      "A temperatura da incubadora estava errada para o patógeno",
      "As amostras foram contaminadas durante o processamento",
    ],
    correctIndex: 1,
    explanation:
      "Esse é exatamente o erro do Estudo de Caso 2. Vírus são parasitas intracelulares obrigatórios que só se replicam dentro de células vivas.",
  },
  {
    id: "vi-2",
    moduleSlug: "virus",
    topic: "Vírus e Viroses",
    question:
      "No Estudo de Caso 2, a combinação de mosaico sistêmico + ausência de crescimento em cultura + infestação de pulgões indica:",
    options: [
      "Infecção por Phytophthora (oomiceto)",
      "Doença viral transmitida por pulgões (afídeos)",
      "Infecção por fitoplasma transmitido por cigarrinhas",
      "Deficiência mineral com infestação secundária de pulgões",
    ],
    correctIndex: 1,
    explanation:
      "Mosaico sistêmico (sintoma viral) + impossibilidade de cultivo (parasita obrigatório) + pulgões presentes (vetores clássicos) = diagnóstico de virose, provavelmente CMV.",
  },
  {
    id: "vi-3",
    moduleSlug: "virus",
    topic: "Vírus e Viroses",
    question:
      "Qual é a diferença estrutural entre um vírus e um viroide?",
    options: [
      "Vírus tem RNA; viroide tem DNA",
      "Vírus possui ácido nucleico + capa proteica (capsídeo); viroide é apenas RNA circular nu, sem capsídeo",
      "Vírus é maior; viroide é menor mas tem capsídeo",
      "Vírus infecta animais; viroide infecta apenas plantas",
    ],
    correctIndex: 1,
    explanation:
      "Viroides (Diener, 1971) são os menores agentes infecciosos conhecidos — apenas RNA circular (246–399 nt), sem qualquer proteína associada.",
  },
  {
    id: "vi-4",
    moduleSlug: "virus",
    topic: "Vírus e Viroses",
    question:
      "Por que vírus transmitidos por pulgões de forma não-persistente são difíceis de controlar com inseticidas sistêmicos?",
    options: [
      "Porque pulgões são resistentes a todos os inseticidas modernos",
      "Porque a transmissão ocorre em segundos durante picadas de prova, antes do inseticida agir",
      "Porque os inseticidas eliminam os predadores naturais dos pulgões",
      "Porque vírus não-persistentes sobrevivem dias fora do inseto",
    ],
    correctIndex: 1,
    explanation:
      "Em transmissão não-persistente, o pulgão adquire o vírus em poucos segundos durante picadas superficiais — antes de morrer pelo inseticida. Óleos minerais são mais eficazes.",
  },
  {
    id: "vi-5",
    moduleSlug: "virus",
    topic: "Vírus e Viroses",
    question:
      "O manejo correto proposto no Estudo de Caso 2 (virose em mamão) inclui:",
    options: [
      "Fungicidas sistêmicos + bactericidas cúpricos preventivos",
      "Mudas certificadas + controle do vetor + cultivares resistentes",
      "Metalaxil aplicado no solo + eliminação de plantas invasoras",
      "Isolamento em cultura pura + reinoculação para confirmação",
    ],
    correctIndex: 1,
    explanation:
      "Como não há cura para viroses em campo, o manejo foca em: mudas certificadas, redução do vetor (pulgões) e cultivares resistentes/transgênicas (ex: mamão resistente ao PRSV).",
  },

  // ── INTERAÇÕES ────────────────────────────────────────────────────────────
  {
    id: "in-1",
    moduleSlug: "interacoes",
    topic: "Interações Patógeno/Hospedeiro",
    question:
      "A 'batalha bioquímica' entre patógeno e hospedeiro envolve, do lado do patógeno:",
    options: [
      "Apenas toxinas e enzimas de degradação",
      "Enzimas, toxinas, efetores e hormônios produzidos pelo patógeno",
      "Apenas a supressão mecânica das defesas da planta",
      "Produção de fitoalexinas e PR-proteínas",
    ],
    correctIndex: 1,
    explanation:
      "Patógenos utilizam arsenal diversificado: enzimas (pectinases, celulases), toxinas (tabtoxina, coronatina), efetores (proteínas Avr injetadas via T3SS) e hormônios.",
  },
  {
    id: "in-2",
    moduleSlug: "interacoes",
    topic: "Interações Patógeno/Hospedeiro",
    question: "A Reação de Hipersensibilidade (HR) consiste em:",
    options: [
      "Produção de fitoalexinas que inibem a germinação de esporos",
      "Morte celular programada rápida e localizada para conter o patógeno",
      "Espessamento generalizado da parede celular em toda a planta",
      "Liberação de compostos voláteis que repelem insetos vetores",
    ],
    correctIndex: 1,
    explanation:
      "Na HR, células ao redor do ponto de infecção morrem rapidamente, privando o patógeno biotrófico de células vivas. É uma 'estratégia kamikaze' eficaz contra biotrófos.",
  },
  {
    id: "in-3",
    moduleSlug: "interacoes",
    topic: "Interações Patógeno/Hospedeiro",
    question: "A Teoria Gene-a-Gene de Flor descreve:",
    options: [
      "A resistência horizontal poligênica de amplo espectro",
      "A correspondência específica entre gene R do hospedeiro e gene Avr do patógeno para que ocorra incompatibilidade",
      "O ciclo de infecção de patógenos necrotróficos",
      "A cascata de sinalização do ácido salicílico na SAR",
    ],
    correctIndex: 1,
    explanation:
      "Para que a resistência ocorra, a planta precisa ter gene R E o patógeno ter gene Avr correspondente. Se qualquer um estiver ausente, ocorre a interação compatível — doença.",
  },
  {
    id: "in-4",
    moduleSlug: "interacoes",
    topic: "Interações Patógeno/Hospedeiro",
    question: "Cutícula e ceras epicuticulares são consideradas defesas:",
    options: [
      "Induzidas bioquímicas — sintetizadas após infecção",
      "Pré-existentes (pré-formadas) estruturais da planta",
      "Induzidas estruturais — formadas em resposta ao patógeno",
      "Sistêmicas — ativadas por sinais do ácido salicílico",
    ],
    correctIndex: 1,
    explanation:
      "Cutícula e ceras são barreiras constitutivas (pré-formadas), presentes antes de qualquer infecção. Diferem das defesas induzidas (fitoalexinas, HR, SAR) ativadas após reconhecimento do patógeno.",
  },
  {
    id: "in-5",
    moduleSlug: "interacoes",
    topic: "Interações Patógeno/Hospedeiro",
    question:
      "A resistência horizontal é preferida em programas de melhoramento porque:",
    options: [
      "É controlada por um único gene R de efeito maior",
      "É poligênica, de amplo espectro e mais durável evolutivamente",
      "Confere imunidade completa (100%) contra todas as raças do patógeno",
      "É exclusiva para fungos, com aplicação em todas as culturas",
    ],
    correctIndex: 1,
    explanation:
      "Resistência vertical (gene R específico) é frequentemente 'quebrada' por novas raças do patógeno. Resistência horizontal é quantitativa, poligênica e muito mais estável.",
  },
];

export function getQuestionsByModule(moduleSlug: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.moduleSlug === moduleSlug);
}

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
