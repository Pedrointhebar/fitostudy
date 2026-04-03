export interface FlashCard {
  id: string;
  moduleSlug: string;
  front: string;
  back: string;
  hint?: string;
}

export const flashcards: FlashCard[] = [
  // ── MÓDULO 1: CONCEITOS E CLASSIFICAÇÃO ──────────────────────────────────
  {
    id: "fc-cc-1",
    moduleSlug: "conceitos-classificacao",
    front: "O que é o Triângulo da Doença?",
    back: "Modelo que explica que a doença só ocorre quando três fatores se sobrepõem: hospedeiro suscetível, patógeno virulento e ambiente favorável.",
    hint: "Três vértices, três condições simultâneas",
  },
  {
    id: "fc-cc-2",
    moduleSlug: "conceitos-classificacao",
    front: "Qual a diferença entre sinal e sintoma?",
    back: "Sintoma: alteração visível na planta hospedeira (clorose, murcha). Sinal: estrutura do próprio patógeno visível na planta (esporos, micélio, exsudatos).",
    hint: "Sintoma = planta; Sinal = patógeno",
  },
  {
    id: "fc-cc-3",
    moduleSlug: "conceitos-classificacao",
    front: "Quais são os Postulados de Koch adaptados à fitopatologia?",
    back: "1) O agente causal deve estar presente em todas as plantas doentes. 2) Deve ser isolado e cultivado em meio puro. 3) Plantas sadias inoculadas devem adoecer. 4) O mesmo agente deve ser re-isolado das plantas inoculadas.",
    hint: "Quatro etapas para provar causalidade",
  },
  {
    id: "fc-cc-4",
    moduleSlug: "conceitos-classificacao",
    front: "O que é etiologia em fitopatologia?",
    back: "Estudo das causas e origens das doenças de plantas, identificando o agente causal (biótico ou abiótico) responsável pela enfermidade.",
  },
  {
    id: "fc-cc-5",
    moduleSlug: "conceitos-classificacao",
    front: "Qual evento histórico impulsionou o desenvolvimento da fitopatologia como ciência?",
    back: "A Epidemia da Batata na Irlanda (1845–1849), causada por Phytophthora infestans, resultou em mais de 1 milhão de mortes e emigrações em massa.",
    hint: "Irlanda, século XIX",
  },
  {
    id: "fc-cc-6",
    moduleSlug: "conceitos-classificacao",
    front: "Como se classificam as doenças quanto à etiologia?",
    back: "Bióticas (causadas por organismos vivos: fungos, bactérias, vírus, nematoides, fitoplasmas) e Abióticas (causadas por fatores não vivos: deficiências nutricionais, poluição, temperatura extrema).",
  },

  // ── MÓDULO 2: FUNGOS ─────────────────────────────────────────────────────
  {
    id: "fc-fu-1",
    moduleSlug: "fungos",
    front: "Quais são as principais estruturas de reprodução assexuada dos fungos?",
    back: "Conídios (esporos assexuados produzidos em conidióforos), esporângios com esporangiosporos, artroconídios (fragmentação de hifas) e clamidosporos (esporos de resistência).",
    hint: "Conídios são os mais comuns",
  },
  {
    id: "fc-fu-2",
    moduleSlug: "fungos",
    front: "O que é haustório em fungos fitopatogênicos?",
    back: "Estrutura especializada de hifas que penetra na célula vegetal para absorção de nutrientes, sem matar a célula hospedeira. Característico de fungos biotróficos como ferrugens e míldios.",
    hint: "Absorção intracelular sem matar a célula",
  },
  {
    id: "fc-fu-3",
    moduleSlug: "fungos",
    front: "Qual a diferença entre fungo biotrófico, hemibiotrófico e necrotrófico?",
    back: "Biotrófico: cresce apenas em tecido vivo (ferrugens, oídios). Necrotrófico: mata tecido e se alimenta (Botrytis cinerea). Hemibiotrófico: fase biotrófica inicial seguida de necrotrófica (Phytophthora, Colletotrichum).",
  },
  {
    id: "fc-fu-4",
    moduleSlug: "fungos",
    front: "O que são esclerócios?",
    back: "Estruturas de resistência compactas formadas por hifas entretecidas, ricas em substâncias de reserva. Permitem ao fungo sobreviver em condições adversas no solo por anos.",
    hint: "Botrytis e Sclerotinia os produzem",
  },
  {
    id: "fc-fu-5",
    moduleSlug: "fungos",
    front: "Quais são as classes de fungos mais importantes em fitopatologia?",
    back: "Ascomycota (oídios, antracnoses, manchas), Basidiomycota (ferrugens, carvões, podridões), Deuteromycota/Fungos Imperfeitos (apenas fase assexuada conhecida).",
  },
  {
    id: "fc-fu-6",
    moduleSlug: "fungos",
    front: "O que é anamorfo e teleomorfo?",
    back: "Anamorfo: fase assexuada do fungo (ex: Fusarium). Teleomorfo: fase sexuada do mesmo fungo (ex: Gibberella). O código ICBN permite nomes diferentes para cada fase.",
    hint: "Ana = assexuado; Teleo = sexuado",
  },

  // ── MÓDULO 3: OOMICETOS ──────────────────────────────────────────────────
  {
    id: "fc-oo-1",
    moduleSlug: "oomicetos",
    front: "Por que os oomicetos não são fungos verdadeiros?",
    back: "São do Reino Stramenopila (algas marrons). Diferenças: parede celular de celulose (não quitina), hifas cenocíticas diploides, zoósporos biflagelados, composição de membrana com esterol diferente.",
    hint: "Celulose vs quitina é a chave",
  },
  {
    id: "fc-oo-2",
    moduleSlug: "oomicetos",
    front: "Quais são os principais gêneros de oomicetos fitopatogênicos?",
    back: "Phytophthora (requeima, gomose), Pythium (tombamento de mudas), Plasmopara (míldio da videira), Peronospora (míldio do fumo), Bremia (míldio da alface), Albugo (ferrugem branca).",
  },
  {
    id: "fc-oo-3",
    moduleSlug: "oomicetos",
    front: "Por que fungicidas do grupo dos benzimidazóis são ineficazes contra oomicetos?",
    back: "Benzimidazóis atuam na beta-tubulina de fungos verdadeiros. Oomicetos têm beta-tubulina estruturalmente diferente e não são afetados por estes compostos.",
    hint: "Alvo bioquímico diferente",
  },
  {
    id: "fc-oo-4",
    moduleSlug: "oomicetos",
    front: "O que são zoósporos e qual sua importância epidemiológica?",
    back: "Esporos assexuados biflagelados e móveis em água livre. São fundamentais na disseminação por enxurradas, irrigação e solo encharcado. Encistam ao contato com raízes (quimiotaxia).",
    hint: "Movimentam-se em água",
  },
  {
    id: "fc-oo-5",
    moduleSlug: "oomicetos",
    front: "O que é a requeima da batata e qual seu agente causal?",
    back: "Doença causada por Phytophthora infestans. Sintomas: manchas aquosas nas folhas com borda marrom, esporos brancos na face inferior. Responsável pela Grande Fome Irlandesa (1845–1849).",
  },

  // ── MÓDULO 4: BACTÉRIAS ──────────────────────────────────────────────────
  {
    id: "fc-ba-1",
    moduleSlug: "bacterias",
    front: "Quais são as principais vias de penetração das bactérias fitopatogênicas?",
    back: "Aberturas naturais (estômatos, hidatódios, lenticelas, nectários) e ferimentos (mecânicos, por insetos, granizo, poda). As bactérias NÃO penetram diretamente pela cutícula intacta.",
    hint: "Sempre precisam de 'porta de entrada'",
  },
  {
    id: "fc-ba-2",
    moduleSlug: "bacterias",
    front: "Quais são os principais tipos de sintomas bacterianos?",
    back: "Manchas foliares (Xanthomonas), murcha vascular (Ralstonia, Clavibacter), galhas (Agrobacterium), cancros (Pseudomonas), podridões moles (Pectobacterium), superbrotamentos (fitoplasmas).",
  },
  {
    id: "fc-ba-3",
    moduleSlug: "bacterias",
    front: "O que é Ralstonia solanacearum e por que é tão destrutiva?",
    back: "Bactéria causadora da murcha bacteriana. Alta virulência: coloniza o xilema, produz exopolissacarídeos que bloqueiam vasos. Ampla gama de hospedeiros (250+ espécies). Sobrevive no solo por anos.",
    hint: "Xilema + exopolissacarídeos = murcha rápida",
  },
  {
    id: "fc-ba-4",
    moduleSlug: "bacterias",
    front: "Como Agrobacterium tumefaciens causa galhas?",
    back: "Transfere o plasmídeo Ti (Ti = indutor de tumor) para o genoma da planta. O T-DNA carrega genes que produzem fitohormonios (auxina + citocinina), causando proliferação celular descontrolada.",
    hint: "Transformação genética natural",
  },
  {
    id: "fc-ba-5",
    moduleSlug: "bacterias",
    front: "Por que antibióticos são pouco usados no controle de bacterioses em plantas?",
    back: "Resistência bacteriana, custo elevado, restrições legais em muitos países, efeitos negativos na microbiota do solo e risco de contaminação de alimentos. Exceção: cobre + cloreto de cálcio em algumas culturas.",
  },
  {
    id: "fc-ba-6",
    moduleSlug: "bacterias",
    front: "O que é cancro cítrico e como se dissemina?",
    back: "Doença causada por Xanthomonas citri subsp. citri. Forma lesões corticosas nas folhas, frutos e ramos. Disseminação por chuva com vento, ferramentas e material propagativo contaminado.",
  },

  // ── MÓDULO 5: VÍRUS ──────────────────────────────────────────────────────
  {
    id: "fc-vi-1",
    moduleSlug: "virus",
    front: "O que são vírus de plantas e como diferem de fungos e bactérias?",
    back: "Parasitas intracelulares obrigatórios. Não têm células, apenas material genético (RNA ou DNA) envolto por proteínas (capsídeo). Não crescem em meios artificiais. Replicam-se apenas dentro de células vivas.",
    hint: "Acelulares, sem metabolismo próprio",
  },
  {
    id: "fc-vi-2",
    moduleSlug: "virus",
    front: "Quais são os principais vetores de vírus de plantas?",
    back: "Afídeos/pulgões (TMV não; CMV, PVY sim), tripes (TSWV), moscas-brancas (Geminiviridae), nematoides (Tobravirus), fungos de solo (Polymyxa, Olpidium), e mecânico por contato/ferramentas.",
    hint: "Afídeos são os mais comuns",
  },
  {
    id: "fc-vi-3",
    moduleSlug: "virus",
    front: "Quais são os sintomas típicos de infecção viral em plantas?",
    back: "Mosaico (áreas verdes e amarelas alternadas), mosqueado, clareamento de nervuras, nanismo, deformações foliares (enrolamento, bolhosidade), necrose, faixamento.",
    hint: "Mosaico é o mais clássico",
  },
  {
    id: "fc-vi-4",
    moduleSlug: "virus",
    front: "O que é TMV (Tobacco Mosaic Virus) e por que é historicamente importante?",
    back: "Primeiro vírus descoberto (Iwanowski 1892, Beijerinck 1898). RNA de fita simples, capsídeo helicoidal. Extremamente estável (resiste a 90°C e anos em fumo seco). Transmissão mecânica por contato.",
  },
  {
    id: "fc-vi-5",
    moduleSlug: "virus",
    front: "Como controlar viroses em plantas?",
    back: "Não há cura para plantas infectadas. Medidas preventivas: sementes certificadas, controle de vetores (inseticidas, armadilhas), variedades resistentes, roguing (eliminação de plantas doentes), higiene de ferramentas.",
    hint: "Prevenção é a única opção",
  },

  // ── MÓDULO 6: NEMATOIDES ─────────────────────────────────────────────────
  {
    id: "fc-ne-1",
    moduleSlug: "nematoides",
    front: "O que são nematoides fitopatogênicos?",
    back: "Vermes cilíndricos microscópicos (Filo Nematoda). Vivem no solo ou nos tecidos vegetais. Possuem estilete (órgão perfurante) para penetrar células vegetais e sugar conteúdo celular.",
    hint: "Verme + estilete = parasita de planta",
  },
  {
    id: "fc-ne-2",
    moduleSlug: "nematoides",
    front: "Quais são os principais gêneros de nematoides fitopatogênicos?",
    back: "Meloidogyne (galhas-das-raízes — mais importante), Pratylenchus (lesão das raízes), Heterodera/Globodera (cistos), Rotylenchulus (reniforme), Ditylenchus (caule e folha), Xiphinema (vetor de vírus).",
  },
  {
    id: "fc-ne-3",
    moduleSlug: "nematoides",
    front: "Como Meloidogyne causa galhas nas raízes?",
    back: "A fêmea sedentária injeta secreções esofagianas que induzem a formação de células gigantes (síncitios) com múltiplos núcleos. O acúmulo de células ao redor forma a galha visível.",
    hint: "Células gigantes = síncitios",
  },
  {
    id: "fc-ne-4",
    moduleSlug: "nematoides",
    front: "Quais são as medidas de controle de nematoides?",
    back: "Rotação de culturas (culturas não-hospedeiras), variedades resistentes (gene Mi em tomate contra Meloidogyne), nematicidas químicos (limitados), controle biológico (Pochonia chlamydosporia, Bacillus firmus), solarização.",
    hint: "Rotação é a principal",
  },
  {
    id: "fc-ne-5",
    moduleSlug: "nematoides",
    front: "Por que nematoides são difíceis de controlar?",
    back: "Vivem no solo protegidos, têm ciclo de vida rápido com muitas gerações por ano, produzem ovos resistentes em massa de gelatina ou cistos, disseminam-se facilmente por solo em maquinário e irrigação.",
  },

  // ── MÓDULO 7: FITOPLASMAS ─────────────────────────────────────────────────
  {
    id: "fc-fp-1",
    moduleSlug: "fitoplasmas",
    front: "O que são fitoplasmas?",
    back: "Procariotos sem parede celular (Classe Mollicutes) que vivem exclusivamente no floema da planta. Não crescem em meios artificiais. Transmitidos por cigarrinhas (Hemiptera: Cicadellidae) de forma persistente e circulativa.",
    hint: "Mollicutes + floema + cigarrinha",
  },
  {
    id: "fc-fp-2",
    moduleSlug: "fitoplasmas",
    front: "Quais são os sintomas típicos causados por fitoplasmas?",
    back: "Virescence (esverdeamento de pétalas), filodia (pétalas transformadas em folhas), witches' broom (vassoura-de-bruxa/superbrotamentos), amarelecimento, nanismo, morte progressiva.",
    hint: "Virescence e vassoura-de-bruxa são típicos",
  },
  {
    id: "fc-fp-3",
    moduleSlug: "fitoplasmas",
    front: "O que é o amarelinho dos citros (HLB)?",
    back: "Huanglongbing, causado por 'Candidatus Liberibacter'. Transmitido pelo psilídeo Diaphorina citri. Sintomas: moteamento assimétrico, frutos deformados e amargos. Doença mais destrutiva dos citros no mundo.",
    hint: "HLB = Greening dos citros",
  },
  {
    id: "fc-fp-4",
    moduleSlug: "fitoplasmas",
    front: "Como controlar doenças causadas por fitoplasmas?",
    back: "Não há cura. Controle do vetor (inseticidas contra cigarrinhas/psilídeos), uso de material propagativo sadio (indexado), erradicação de plantas infectadas, manejo de plantas daninhas hospedeiras do vetor.",
  },

  // ── MÓDULO 8: EPIDEMIOLOGIA ──────────────────────────────────────────────
  {
    id: "fc-ep-1",
    moduleSlug: "epidemiologia",
    front: "O que é epidemiologia de doenças de plantas?",
    back: "Estudo do desenvolvimento de doenças em populações de plantas ao longo do tempo e no espaço, analisando os fatores que afetam a taxa de aumento da doença.",
  },
  {
    id: "fc-ep-2",
    moduleSlug: "epidemiologia",
    front: "O que é o modelo de Vanderplank e quais as duas componentes da taxa de epidemia?",
    back: "Modelo matemático que descreve a evolução de epidemias. Taxa de juros compostos (r): aumento relativo da doença. Inóculo inicial (x₀): quantidade de doença no início. Equação: xt = x₀ × e^(r×t).",
    hint: "x₀ e r são os dois parâmetros-chave",
  },
  {
    id: "fc-ep-3",
    moduleSlug: "epidemiologia",
    front: "Qual a diferença entre doenças policíclicas e monocíclicas?",
    back: "Policíclicas: múltiplos ciclos de infecção numa estação (ferrugens, míldios) — taxa de epidemia alta. Monocíclicas: um ciclo por estação (murcha de fusarium, galhas) — importância do inóculo inicial.",
    hint: "Poli = muitos ciclos; Mono = um ciclo",
  },
  {
    id: "fc-ep-4",
    moduleSlug: "epidemiologia",
    front: "O que é período de latência em epidemiologia?",
    back: "Tempo entre a infecção e a produção de novos esporos (esporulação). Período de latência curto = epidemia mais rápida. É diferente do período de incubação (infecção até sintomas).",
  },
  {
    id: "fc-ep-5",
    moduleSlug: "epidemiologia",
    front: "O que é curva de progresso da doença?",
    back: "Representação gráfica da evolução da doença ao longo do tempo. Modelos: logístico (policíclicas), monomolecular (monocíclicas), Gompertz. Área Abaixo da Curva de Progresso (AACPD) quantifica a doença total.",
    hint: "Forma sigmoidal para policíclicas",
  },

  // ── MÓDULO 9: CONTROLE ───────────────────────────────────────────────────
  {
    id: "fc-co-1",
    moduleSlug: "controle",
    front: "Quais são os princípios gerais do controle de doenças de plantas?",
    back: "1) Exclusão (impedir entrada do patógeno), 2) Erradicação (eliminar fonte de inóculo), 3) Proteção (barreira entre patógeno e hospedeiro), 4) Imunização (resistência do hospedeiro), 5) Terapia (curar planta doente).",
  },
  {
    id: "fc-co-2",
    moduleSlug: "controle",
    front: "O que é manejo integrado de doenças (MID)?",
    back: "Estratégia que combina múltiplos métodos de controle (cultural, biológico, químico, resistência genética) de forma racional e sustentável, visando reduzir a doença abaixo do nível de dano econômico.",
    hint: "Combinação de métodos, não um único",
  },
  {
    id: "fc-co-3",
    moduleSlug: "controle",
    front: "O que é controle biológico de doenças de plantas?",
    back: "Uso de organismos vivos ou seus produtos para reduzir a população ou atividade de patógenos. Exemplos: Trichoderma spp. (antifúngico), Bacillus subtilis (bactericida), Coniothyrium minitans (parasita de Sclerotinia).",
    hint: "Trichoderma é o biocontrolador mais usado",
  },
  {
    id: "fc-co-4",
    moduleSlug: "controle",
    front: "O que é resistência sistêmica adquirida (SAR)?",
    back: "Resistência induzida em toda a planta após infecção localizada ou tratamento com elicitores (ácido salicílico, BTH). Ativação do gene PR (pathogenesis-related). Proteção duradoura de amplo espectro.",
    hint: "Ácido salicílico ativa SAR",
  },
  {
    id: "fc-co-5",
    moduleSlug: "controle",
    front: "Quais medidas culturais auxiliam no controle de doenças?",
    back: "Rotação de culturas, eliminação de restos culturais, espaçamento adequado, irrigação controlada (evitar molhamento foliar), poda de partes infectadas, uso de sementes sadias, plantio em época adequada.",
  },

  // ── MÓDULO 10: FUNGICIDAS ─────────────────────────────────────────────────
  {
    id: "fc-fn-1",
    moduleSlug: "fungicidas",
    front: "Qual a diferença entre fungicida protetivo e sistêmico?",
    back: "Protetivo (de contato): forma barreira na superfície, impede germinação de esporos. Deve ser aplicado antes da infecção. Exemplos: cobre, mancozebe. Sistêmico: absorvido e translocado na planta. Ação curativa e erradicante. Exemplos: triazóis, estrobilurinas.",
    hint: "Protetivo = preventivo; Sistêmico = curativo",
  },
  {
    id: "fc-fn-2",
    moduleSlug: "fungicidas",
    front: "O que é o sistema FRAC e por que é importante?",
    back: "Fungicide Resistance Action Committee. Classifica fungicidas pelo mecanismo de ação (grupo 1–50+). Fundamental para o manejo de resistência: nunca aplicar o mesmo grupo repetidamente na mesma safra.",
    hint: "Grupos FRAC = mecanismo de ação",
  },
  {
    id: "fc-fn-3",
    moduleSlug: "fungicidas",
    front: "Como funciona o mecanismo de ação dos triazóis (IBE)?",
    back: "Inibidores da Biossíntese de Ergosterol (IBE). Bloqueiam a enzima lanosterol 14α-demetilase (CYP51), impedindo a produção de ergosterol, componente essencial da membrana de fungos.",
    hint: "Ergosterol é o alvo",
  },
  {
    id: "fc-fn-4",
    moduleSlug: "fungicidas",
    front: "Por que estrobilurinas (FRAC grupo 11) não controlam oomicetos?",
    back: "Estrobilurinas inibem o complexo III da cadeia respiratória mitocondrial (citocromo bc1). Oomicetos têm vias respiratórias alternativas que não são afetadas por este mecanismo.",
    hint: "Oomicetos têm respiração alternativa",
  },
  {
    id: "fc-fn-5",
    moduleSlug: "fungicidas",
    front: "Quais grupos FRAC são eficazes contra oomicetos?",
    back: "Grupo 4 (fenilamidas: metalaxil), Grupo 40 (CAA: iprovalicarbe, mandipropamida), Grupo 49 (oxatiapiprolin), Cobre (grupo M), Fosetil-alumínio (fosfonatos). Não confundir com triazóis e estrobilurinas (ineficazes).",
  },
  {
    id: "fc-fn-6",
    moduleSlug: "fungicidas",
    front: "O que é resistência a fungicidas e como preveni-la?",
    back: "Seleção de populações fúngicas com mutações que reduzem sensibilidade ao fungicida. Prevenção: rotação de grupos FRAC, mistura de produtos de grupos diferentes, limitar número de aplicações por grupo, uso de protetivos.",
    hint: "Rotação de FRAC é fundamental",
  },

  // ── MÓDULO 11: MANEJO INTEGRADO ───────────────────────────────────────────
  {
    id: "fc-mi-1",
    moduleSlug: "manejo-integrado",
    front: "O que é Nível de Dano Econômico (NDE) no contexto de doenças de plantas?",
    back: "Intensidade de doença a partir da qual o custo do controle iguala o benefício econômico (redução de dano evitada). Abaixo do NDE, o controle não é economicamente justificável.",
    hint: "Custo do controle = benefício obtido",
  },
  {
    id: "fc-mi-2",
    moduleSlug: "manejo-integrado",
    front: "O que são sistemas de alerta/aviso fitossanitário?",
    back: "Sistemas que monitoram condições climáticas e fenológicas para prever o início de epidemias e orientar o momento ideal de aplicação de fungicidas/bactericidas. Exemplos: MILDEX (míldio da videira), sistemas para ferrugem da soja.",
    hint: "Previsão de epidemia por clima",
  },
  {
    id: "fc-mi-3",
    moduleSlug: "manejo-integrado",
    front: "Quais são os componentes do manejo integrado de doenças?",
    back: "1) Resistência genética (variedades), 2) Controle cultural (práticas agronômicas), 3) Controle biológico (biocontroladores), 4) Controle químico (fungicidas/bactericidas), 5) Regulatório (quarentena, certificação de sementes).",
  },
  {
    id: "fc-mi-4",
    moduleSlug: "manejo-integrado",
    front: "Por que a rotação de culturas é eficaz no controle de doenças do solo?",
    back: "Reduz o inóculo inicial (x₀) ao interromper o ciclo do patógeno. Patógenos específicos de hospedeiro morrem ou reduzem na ausência do hospedeiro. Especialmente eficaz contra Sclerotinia, Fusarium, nematoides.",
    hint: "Reduz inóculo inicial",
  },
  {
    id: "fc-mi-5",
    moduleSlug: "manejo-integrado",
    front: "O que é certificação fitossanitária de sementes?",
    back: "Processo oficial que garante que sementes são livres de patógenos regulamentados, com identidade genética e padrões de qualidade definidos. Impede disseminação de patógenos por material propagativo.",
    hint: "Garante semente livre de patógenos",
  },
];
