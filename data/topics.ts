export type InfoBoxVariant = "note" | "warning" | "important" | "tip";

export interface ContentBlock {
  type: "text" | "heading" | "table" | "infobox" | "list" | "keyterms";
  level?: 2 | 3;
  content?: string;
  headers?: string[];
  rows?: string[][];
  variant?: InfoBoxVariant;
  title?: string;
  items?: string[];
  terms?: string[];
}

export interface Topic {
  slug: string;
  title: string;
  icon: string;
  color: string;
  badgeColor: string;
  badge: string;
  description: string;
  content: ContentBlock[];
  keyTerms: string[];
}

export const topics: Topic[] = [
  {
    slug: "conceitos-classificacao",
    title: "Conceitos e Classificação",
    icon: "🌿",
    color: "#3B6D11",
    badgeColor: "#EAF3DE",
    badge: "Módulo 1",
    description:
      "Fundamentos históricos, o triângulo da doença e a classificação das doenças de plantas por etiologia, órgão afetado e agente causal.",
    keyTerms: ["Triângulo da doença", "Etiologia", "Patógeno", "Hospedeiro", "Ambiente", "Doença biótica", "Doença abiótica"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "História da Fitopatologia",
      },
      {
        type: "text",
        content:
          "A fitopatologia como ciência tem origem no século XIX. A Epidemia da Batata (1845–1849) na Irlanda, causada por Phytophthora infestans, resultou na morte de mais de um milhão de pessoas e na emigração de outros tantos, destacando pela primeira vez o impacto catastrófico das doenças de plantas. Anton de Bary (1861) demonstrou experimentalmente a natureza parasitária de P. infestans, estabelecendo as bases científicas da disciplina. Antes disso, prevaleciam teorias espontaneístas que atribuíam as doenças a vapores ou maldições.",
      },
      {
        type: "infobox",
        variant: "important",
        title: "Marco histórico: de Bary (1861)",
        content:
          "Heinrich Anton de Bary demonstrou que Phytophthora infestans era o agente causal da requeima da batata, não uma consequência da doença. Este experimento fundou a fitopatologia como ciência experimental.",
      },
      {
        type: "heading",
        level: 2,
        content: "O Triângulo da Doença",
      },
      {
        type: "text",
        content:
          "A doença em plantas ocorre pela interação de três fatores essenciais: o hospedeiro suscetível, o patógeno virulento e o ambiente favorável. Esse conceito, representado como um triângulo equilátero, é fundamental para entender a epidemiologia e o manejo de doenças. A ausência ou modificação de qualquer um desses vértices pode impedir o desenvolvimento da doença. Alguns autores modernos adicionam um quarto elemento — o tempo — transformando o triângulo em um tetraedro ou 'pirâmide da doença'.",
      },
      {
        type: "table",
        headers: ["Componente", "Definição", "Exemplos de influência"],
        rows: [
          ["Hospedeiro", "Planta que pode ser infectada pelo patógeno", "Suscetibilidade genética, estágio fenológico, estado nutricional"],
          ["Patógeno", "Organismo capaz de causar doença", "Virulência, raça fisiológica, carga de inóculo"],
          ["Ambiente", "Condições abióticas que modulam a interação", "Temperatura, umidade, chuva, vento"],
          ["Tempo", "Duração da interação favorável (em alguns modelos)", "Molhamento foliar prolongado, período de suscetibilidade"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Classificação das Doenças",
      },
      {
        type: "text",
        content:
          "As doenças de plantas podem ser classificadas segundo diferentes critérios, sendo os mais utilizados a etiologia (causa), o órgão afetado e o sintoma predominante.",
      },
      {
        type: "table",
        headers: ["Critério", "Categorias", "Exemplos"],
        rows: [
          ["Etiologia", "Biótica (parasitária)", "Doenças causadas por fungos, bactérias, vírus, nematoides"],
          ["Etiologia", "Abiótica (não-parasitária)", "Deficiência nutricional, estresse hídrico, toxicidade"],
          ["Órgão afetado", "Foliar, radicular, vascular, sistêmica", "Mancha foliar, podridão de raiz, murcha vascular"],
          ["Sintoma principal", "Necrótica, clorótica, proliferativa", "Antracnose, mosaico, galha"],
          ["Agente causal", "Por grupo taxonômico", "Micose, bacteriose, virose, nematose"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Importância Econômica",
      },
      {
        type: "text",
        content:
          "As doenças de plantas causam perdas estimadas em 10 a 16% da produção agrícola global anualmente. No Brasil, doenças como a ferrugem asiática da soja (Phakopsora pachyrhizi) podem causar perdas de até 80% sem controle adequado; o cancro cítrico (Xanthomonas citri) levou ao erradicamento de milhões de plantas no Estado de São Paulo; a vassoura-de-bruxa do cacaueiro (Moniliophthora perniciosa) devastou a produção baiana nos anos 1990.",
      },
      {
        type: "infobox",
        variant: "warning",
        title: "Impacto econômico no Brasil",
        content:
          "A ferrugem asiática da soja (Phakopsora pachyrhizi), introduzida no Brasil em 2001, é responsável por perdas anuais de US$ 2 a 3 bilhões, demandando mais de 3 fungicidas por safra em muitas regiões.",
      },
    ],
  },
  {
    slug: "sintomatologia",
    title: "Sintomatologia",
    icon: "🔬",
    color: "#0F6E56",
    badgeColor: "#d0f0e8",
    badge: "Módulo 2",
    description:
      "Diferenciação entre sintoma e sinal, classificação dos sintomas e terminologia fitossanitária essencial.",
    keyTerms: ["Sintoma", "Sinal", "Necrose", "Clorose", "Murcha", "Hipertrofia", "Hipoplasia", "Antracnose", "Complexo sintomático"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Sintoma × Sinal",
      },
      {
        type: "text",
        content:
          "Esta é uma das distinções mais importantes em fitopatologia. O sintoma é a resposta fisiológica ou morfológica da planta à ação do patógeno — é a reação do hospedeiro. Já o sinal é a estrutura visível do próprio patógeno sobre a planta — é o agente em si. Por exemplo, na ferrugem, as pústulas alaranjadas são sinais (estruturas do fungo), enquanto a clorose ao redor é um sintoma (resposta da planta).",
      },
      {
        type: "infobox",
        variant: "important",
        title: "Regra prática",
        content:
          "Se você está vendo a própria estrutura do patógeno (esporos, micélio, bacteriose exsudato), é um SINAL. Se está vendo como a planta reagiu (amarelamento, murcha, necrose), é um SINTOMA.",
      },
      {
        type: "table",
        headers: ["Categoria", "Tipo", "Definição", "Exemplos"],
        rows: [
          ["Sintoma", "Necrose", "Morte de tecidos com escurecimento", "Mancha parda da soja, antracnose"],
          ["Sintoma", "Clorose", "Amarelamento por perda de clorofila", "Mosaico viral, deficiência de N"],
          ["Sintoma", "Murcha", "Perda de turgor sem necrose", "Murcha de Fusarium, Ralstonia"],
          ["Sintoma", "Hipertrofia", "Aumento anormal de órgãos", "Galha-de-coroa (Agrobacterium), sarna"],
          ["Sintoma", "Hipoplasia", "Desenvolvimento insuficiente", "Nanismo, enfezamento por fitoplasmas"],
          ["Sintoma", "Hiperplasia", "Proliferação celular excessiva", "Vassoura-de-bruxa, fasciculação"],
          ["Sinal", "Esporulação", "Estruturas reprodutivas do fungo", "Urediniósporos da ferrugem, conídios"],
          ["Sinal", "Exsudato bacteriano", "Massa de células bacterianas", "Ooze em cancro bacteriano"],
          ["Sinal", "Micélio externo", "Hifas visíveis na superfície", "Oídio (Erysiphe spp.)"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Terminologia de Sintomas",
      },
      {
        type: "table",
        headers: ["Termo", "Descrição", "Doença típica"],
        rows: [
          ["Mancha", "Lesão necrótica ou clorótica delimitada", "Mancha de cercospora, helmintosporiose"],
          ["Ferrugem", "Pústulas com esporos pulverulentos marrons/laranjas", "Ferrugem da soja, ferrugem do café"],
          ["Oídio", "Pulverulência branca superficial (micélio+conídios)", "Oídio da abóbora, da roseira"],
          ["Míldio", "Esporulação esbranquiçada/acinzentada na face abaxial", "Míldio da videira, da alface"],
          ["Podridão mole", "Maceração de tecidos com odor fétido", "Erwinia carotovora em batata"],
          ["Antracnose", "Lesão necrótica deprimida, escura, com acérvulos", "Antracnose da manga, do feijão"],
          ["Seca descendente", "Morte de ramos da ponta para a base", "Cancro cítrico, morte-em-seca do cacau"],
          ["Cancro", "Lesão deprimida, necrótica, em caule/ramos", "Cancro cítrico (Xanthomonas)"],
          ["Mosaico", "Padrão irregular verde-claro/verde-escuro em folhas", "CMV, TMV, BYMV"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Complexo Sintomático",
      },
      {
        type: "text",
        content:
          "O complexo sintomático é o conjunto de sintomas que caracteriza uma determinada doença. Muitas vezes, a associação de sintomas é mais diagnóstica do que um sintoma isolado. Por exemplo, a vassoura-de-bruxa do cacaueiro apresenta: hipertrofia de ramos (vassoura verde), necrose posterior (vassoura seca) e podridão de frutos — esse conjunto é característico da doença.",
      },
      {
        type: "infobox",
        variant: "tip",
        title: "Diagnose baseada em sintomas",
        content:
          "A diagnose por sintomas é presuntiva. Para confirmação, é necessário identificar o agente causal (postulados de Koch). No campo, o complexo sintomático aliado ao histórico da cultura permite diagnóstico com boa precisão.",
      },
    ],
  },
  {
    slug: "etiologia",
    title: "Etiologia",
    icon: "⚗️",
    color: "#BA7517",
    badgeColor: "#fef3dc",
    badge: "Módulo 3",
    description:
      "Postulados de Koch adaptados para plantas, limitações para vírus e fitoplasmas, e conceitos de patogenicidade, virulência e agressividade.",
    keyTerms: ["Postulados de Koch", "Patogenicidade", "Virulência", "Agressividade", "Especificidade", "Agente causal", "Prova de patogenicidade"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Postulados de Koch para Plantas",
      },
      {
        type: "text",
        content:
          "Robert Koch (1876) estabeleceu critérios para provar que um microrganismo é o agente causal de uma doença. Esses postulados foram adaptados para a fitopatologia por diversos autores. Os quatro critérios principais são:",
      },
      {
        type: "list",
        items: [
          "1º Postulado: O patógeno deve estar consistentemente associado à planta doente e ausente nas plantas sadias.",
          "2º Postulado: O patógeno deve ser isolado da planta doente e cultivado em meio de cultura puro (ou hospedeiro alternativo para vírus).",
          "3º Postulado: O patógeno puro inoculado em planta sadia suscetível deve reproduzir os sintomas originais.",
          "4º Postulado: O patógeno deve ser reisolado da planta inoculada e mostrar as mesmas características do isolado original.",
        ],
      },
      {
        type: "infobox",
        variant: "warning",
        title: "Limitações dos Postulados de Koch",
        content:
          "Vírus: não são cultiváveis em meio artificial → usa-se inoculação mecânica ou vetor + transmissão. Fitoplasmas: não são cultiváveis in vitro → usa-se PCR, DAPI e transmissão por cigarrinha. Patógenos biotróficos obrigatórios (ferrugem, oídio): não crescem em meio artificial → inoculação direta em plantas.",
      },
      {
        type: "heading",
        level: 2,
        content: "Agentes Causais Bióticos",
      },
      {
        type: "table",
        headers: ["Grupo", "Características", "Exemplos de doenças", "Cultivável in vitro"],
        rows: [
          ["Fungos", "Eucariotos, parede de quitina", "Ferrugem, oídio, antracnose", "Maioria sim"],
          ["Oomicetos", "Parede de celulose, flagelados", "Míldio, requeima, damping-off", "Alguns (Pythium, Phytophthora)"],
          ["Bactérias", "Procariotos gram+ ou gram−", "Cancro cítrico, murcha bacteriana", "Sim (exceto fastidiosas)"],
          ["Vírus", "RNA ou DNA + capsídeo proteico", "Mosaico, vira-cabeça, tristeza", "Não"],
          ["Fitoplasmas", "Procariotos, sem parede, floema", "Vassoura-de-bruxa, enfezamento", "Não (Candidatus)"],
          ["Nematoides", "Metazoários, estilete bucal", "Galha-de-raiz, lesão radicular", "Alguns em laboratório"],
          ["Protozoários", "Trypanosomatidae, floema", "Hartrot do coqueiro, marchitez", "Sim (meios complexos)"],
          ["Viroides", "RNA circular nu, sem capsídeo", "Tubérculo-fusiforme da batata", "Não"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Conceitos Fundamentais de Patogenicidade",
      },
      {
        type: "table",
        headers: ["Conceito", "Definição", "Observação"],
        rows: [
          ["Patogenicidade", "Capacidade qualitativa de causar doença em determinado hospedeiro", "Atributo binário: patogênico ou não"],
          ["Virulência", "Grau de patogenicidade; intensidade dos sintomas causados", "Atributo quantitativo; pode variar entre raças"],
          ["Agressividade", "Taxa de desenvolvimento e esporulação do patógeno", "Independe da compatibilidade gene-a-gene"],
          ["Especificidade", "Restrita gama de hospedeiros que o patógeno pode infectar", "Ex: Phakopsora pachyrhizi → leguminosas"],
          ["Raça fisiológica", "Grupo de isolados com mesmo padrão de virulência", "Ex: Puccinia graminis f. sp. tritici raças Ug99"],
        ],
      },
      {
        type: "infobox",
        variant: "note",
        title: "Virulência vs. Agressividade",
        content:
          "Virulência refere-se à superação de resistência específica (gene R) — é qualitativa. Agressividade é a capacidade de se multiplicar rapidamente no hospedeiro — é quantitativa. Um patógeno pode ser virulento (superar o gene R) porém pouco agressivo (se multiplicar lentamente).",
      },
    ],
  },
  {
    slug: "nematoides",
    title: "Nematoides",
    icon: "🪱",
    color: "#993C1D",
    badgeColor: "#f5e6e0",
    badge: "Módulo 4",
    description:
      "Características gerais, principais gêneros fitoparasitas, ciclo de Meloidogyne e métodos de diagnose.",
    keyTerms: ["Estilete", "Meloidogyne", "Heterodera", "Pratylenchus", "J2 infectante", "Galha-de-raiz", "Nematoide de cisto", "Jenkins"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Características Gerais dos Nematoides Fitoparasitas",
      },
      {
        type: "text",
        content:
          "Os nematoides fitoparasitas são metazoários vermiformes, microscópicos (0,2–10 mm), pertencentes ao filo Nematoda. Possuem estilete (estilete bucal ou estilete oral), estrutura perfurante usada para penetrar células vegetais e sugar o conteúdo celular. São pseudocelomados, com simetria bilateral. A maioria dos fitoparasitas é vermiforme ao longo do ciclo, mas fêmeas de alguns gêneros tornam-se sedentárias e tomam formas esféricas ou em forma de saco.",
      },
      {
        type: "infobox",
        variant: "important",
        title: "O estilete: estrutura diagnóstica",
        content:
          "O estilete é a característica morfológica definidora dos nematoides fitoparasitas. Sua presença, tamanho e morfologia (com ou sem nódulos basais) são usados na identificação de gêneros. Nematoides de vida livre não possuem estilete funcional.",
      },
      {
        type: "heading",
        level: 2,
        content: "Principais Gêneros Fitoparasitas",
      },
      {
        type: "table",
        headers: ["Gênero", "Parasitismo", "Sintoma principal", "Hospedeiros importantes", "Espécie de destaque"],
        rows: [
          ["Meloidogyne", "Endoparasita sedentário", "Galhas nas raízes, nanismo", "Soja, tomate, hortaliças", "M. incognita, M. javanica"],
          ["Heterodera", "Endoparasita sedentário", "Cistos amarelos/brancos nas raízes", "Soja, beterraba, cereais", "H. glycines (soja)"],
          ["Pratylenchus", "Endoparasita migratório", "Lesões necróticas radiculares", "Milho, soja, café", "P. brachyurus"],
          ["Rotylenchulus", "Semiendoparasita sedentário", "Clorose, redução do sistema radicular", "Algodão, hortaliças", "R. reniformis"],
          ["Radopholus", "Endoparasita migratório", "Podridão de raízes, toppling disease", "Banana, citros", "R. similis"],
          ["Ditylenchus", "Endoparasita migratório", "Lesões em bulbos, hastes, folhas", "Alho, cebola, batata", "D. dipsaci"],
          ["Belonolaimus", "Ectoparasita", "Raízes curtas com extremidades mortas", "Amendoim, gramíneas", "B. longicaudatus"],
          ["Xiphinema", "Ectoparasita", "Galhas radiculares; vetor de nepovírus", "Videira, citros", "X. index"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Ciclo de Vida de Meloidogyne spp.",
      },
      {
        type: "text",
        content:
          "O ciclo completo de Meloidogyne dura 25–50 dias dependendo da temperatura (ótima: 25–30°C). Passa pelos seguintes estágios:",
      },
      {
        type: "list",
        items: [
          "Ovo: depositado em massa gelatinosa pela fêmea na raiz ou no solo",
          "J1 (1ª muda): ocorre dentro do ovo; não é infectante",
          "J2 (2ª muda): eclode no solo — é o ÚNICO ESTÁGIO INFECTANTE; migra para a raiz",
          "J3 (3ª muda): sedentário dentro da raiz; inicia formação de células gigantes",
          "J4 (4ª muda): diferenciação sexual; machos tornam-se vermiformes novamente",
          "Adulto ♀: piriforme/globosa, sedentária; produz 200–500 ovos",
          "Adulto ♂: vermiforme; não se alimenta; fertiliza a fêmea ou não (partenogênese)",
        ],
      },
      {
        type: "infobox",
        variant: "important",
        title: "J2: o estágio infectante",
        content:
          "O segundo estádio juvenil (J2) é o único que se move livremente no solo e infecta raízes. Penetra próximo à zona de alongamento, migra intercelularmente até o cilindro vascular e induz células gigantes (células nutrivas). É este estágio que os nematicidas devem neutralizar.",
      },
      {
        type: "heading",
        level: 2,
        content: "Epidemiologia e Disseminação",
      },
      {
        type: "list",
        items: [
          "Solo contaminado: principal fonte de inóculo; a movimentação de solo (maquinário, enxurrada) é o principal meio",
          "Material de plantio: mudas, tubérculos, bulbos e rizomas infestados",
          "Água de irrigação: dissemina J2 por longas distâncias em sistemas coletivos",
          "Ferramentas e calçados: transporte passivo de solo contaminado",
          "Animais: aves e insetos podem carregar partículas de solo",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Diagnose",
      },
      {
        type: "table",
        headers: ["Método", "Princípio", "Aplicação"],
        rows: [
          ["Jenkins (1964)", "Extração por peneiramento e centrífuga-flotação em sacarose", "Extração de J2 e ovos do solo"],
          ["Centrífuga-flotação", "Separação por densidade em sacarose 454g/L", "Contagem de nematoides em raízes e solo"],
          ["Coloração com fucsina", "Corante que cora nematoides em raízes diafanizadas", "Visualização de nematoides sedentários"],
          ["Padrão de galhas (perineal pattern)", "Morfologia da região perineal da fêmea de Meloidogyne", "Identificação de espécies de Meloidogyne"],
          ["Isozimas (EST e MDH)", "Perfil eletroforético de enzimas específicas", "Diferenciação de espécies de Meloidogyne"],
          ["PCR / ITS rDNA", "Amplificação de regiões específicas do DNA", "Identificação molecular de espécies e raças"],
        ],
      },
    ],
  },
  {
    slug: "protozoarios",
    title: "Protozoários Fitopatogênicos",
    icon: "🦠",
    color: "#639922",
    badgeColor: "#f0f7e0",
    badge: "Módulo 5",
    description:
      "Família Trypanosomatidae, gênero Phytomonas, morfologia, habitat no floema e principais doenças em palmáceas e mandioca.",
    keyTerms: ["Phytomonas", "Trypanosomatidae", "Promastigota", "Floema", "Hartrot", "Marchitez", "Dysdercus", "Lincus"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Posição Taxonômica",
      },
      {
        type: "text",
        content:
          "Os protozoários fitopatogênicos pertencem ao filo Euglenozoa, família Trypanosomatidae — a mesma família que inclui Trypanosoma e Leishmania (patógenos animais). O gênero Phytomonas Donovan (1909) é o único gênero de tripanosomatídeo que parasita plantas. Diferentemente dos patógenos animais deste grupo, Phytomonas habita principalmente o floema e os laticíferos das plantas hospedeiras.",
      },
      {
        type: "heading",
        level: 2,
        content: "Morfologia",
      },
      {
        type: "text",
        content:
          "Phytomonas apresenta-se predominantemente na forma promastigota (ou promastigóide): corpo alongado (1–30 μm), com flagelo emergindo da extremidade anterior livre. Possui cinetoplasto (DNA mitocondrial especializado) característico dos tripanosomatídeos. A membrana ondulante, presente em outras formas tripanosomatídeas, está ausente ou reduzida em Phytomonas.",
      },
      {
        type: "infobox",
        variant: "note",
        title: "Diagnose de Phytomonas",
        content:
          "Phytomonas pode ser observado em exsudatos do floema por microscopia de campo escuro ou em esfregaços corados por Giemsa. Cultivo in vitro é possível em meios especializados (LIT, Warren). Diagnose molecular por PCR é mais sensível e específica.",
      },
      {
        type: "heading",
        level: 2,
        content: "Vetores",
      },
      {
        type: "text",
        content:
          "A transmissão de Phytomonas ocorre por insetos hemípteros, principalmente percevejos fitófagos que se alimentam no floema e laticíferos. Os principais vetores são:",
      },
      {
        type: "table",
        headers: ["Vetor", "Família", "Doença transmitida"],
        rows: [
          ["Dysdercus spp.", "Pyrrhocoridae", "Hartrot do coqueiro"],
          ["Lincus spp.", "Pentatomidae", "Marchitez do dendê, hartrot do coqueiro"],
          ["Myndus crudus", "Cixiidae", "Amarelamento letal do coqueiro (associado)"],
          ["Oncopeltus spp.", "Lygaeidae", "Infecção experimental em euphorbiáceas"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Principais Doenças",
      },
      {
        type: "table",
        headers: ["Doença", "Hospedeiro", "Patógeno", "Sintomas", "Distribuição"],
        rows: [
          ["Hartrot (podridão fatal)", "Coco (Cocos nucifera)", "Phytomonas staheli", "Podridão da inflorescência, queda de frutos, morte", "Suriname, Trinidad, Brasil (AM)"],
          ["Marchitez (murcha fatal)", "Dendê (Elaeis guineensis)", "Phytomonas spp.", "Murcha repentina de folhas jovens, morte em 2–6 meses", "Colômbia, Peru, Brasil (PA, AM)"],
          ["Seca de ponteiros", "Mandioca (Manihot esculenta)", "Phytomonas manihoti", "Seca dos ponteiros, queda de folhas", "Brasil, África"],
          ["Phloem necrosis do café", "Café (Coffea arabica)", "Phytomonas leptovasorum", "Necrose do floema, amarelamento, morte", "Suriname, Brasil"],
        ],
      },
      {
        type: "infobox",
        variant: "warning",
        title: "Relevância Econômica",
        content:
          "A marchitez do dendê é um dos maiores obstáculos à expansão do cultivo desta oleaginosa na Amazônia. Não existem cultivares resistentes comerciais. O controle do vetor (Lincus spp.) e o manejo de plantas doentes são as principais estratégias.",
      },
    ],
  },
  {
    slug: "stramenopila",
    title: "Reino Stramenopila",
    icon: "💧",
    color: "#0F6E56",
    badgeColor: "#d0f0e8",
    badge: "Módulo 6",
    description:
      "Oomicetos não são fungos: parede de celulose, implicações no controle e principais patógenos do reino Stramenopila.",
    keyTerms: ["Oomiceto", "Phytophthora", "Pythium", "Zoósporo", "Damping-off", "Metalaxil", "Celulose", "Stramenopila"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Posição Taxonômica: Por Que Não São Fungos",
      },
      {
        type: "text",
        content:
          "Os oomicetos foram historicamente classificados como fungos por apresentarem crescimento filamentoso similar. No entanto, análises moleculares e bioquímicas revelaram que pertencem ao reino Stramenopila (ou Chromista), mais relacionados a algas pardas e diatomáceas do que a fungos. As diferenças fundamentais têm implicações diretas no controle fitossanitário.",
      },
      {
        type: "table",
        headers: ["Característica", "Oomicetos (Stramenopila)", "Fungos verdadeiros"],
        rows: [
          ["Parede celular", "Celulose (β-1,3 e β-1,6 glucanas)", "Quitina (β-1,4-N-acetilglicosamina)"],
          ["Flagelo (zoósporo)", "Biflagelado (um liso + um com mastigonemas)", "Ausente (exceto Chytridiomycota)"],
          ["Núcleo (diploidia)", "Diploides na fase vegetativa", "Haploides ou haploides funcionais"],
          ["Esterol de membrana", "Colesterol (raro; exige exogenamente)", "Ergosterol (alvo de triazóis e polienos)"],
          ["Oosporo", "Zigoto de parede espessa (sexual)", "Não produz oosporos"],
        ],
      },
      {
        type: "infobox",
        variant: "important",
        title: "Implicação crítica no controle",
        content:
          "Fungicidas que inibem a síntese de ergosterol (triazóis, imidazóis) são ineficazes contra oomicetos, pois estes não possuem ergosterol. Estrobilurinas também têm eficácia reduzida. Para controle de oomicetos, usam-se: METALAXIL (inibidor de RNA-polimerase I), FOSETIL-AL, PROPAMOCARBE, CIMOXANIL e carboxamidas específicas (fluopicolida).",
      },
      {
        type: "heading",
        level: 2,
        content: "Principais Gêneros e Doenças",
      },
      {
        type: "table",
        headers: ["Gênero", "Hábitat", "Doença", "Hospedeiro", "Espécie importante"],
        rows: [
          ["Phytophthora", "Solo e tecidos aéreos", "Requeima, gomose, podridão", "Batata, tomate, citros, soja", "P. infestans, P. cinnamomi, P. sojae"],
          ["Pythium", "Solo, aquático", "Damping-off, podridão radicular", "Plântulas em geral", "P. ultimum, P. aphanidermatum"],
          ["Plasmopara", "Tecidos foliares", "Míldio-da-videira", "Videira", "P. viticola"],
          ["Peronospora", "Tecidos foliares", "Míldio do tabaco, da ervilha", "Solanáceas, leguminosas", "P. tabacina, P. manshurica"],
          ["Bremia", "Tecidos foliares", "Míldio-da-alface", "Alface", "B. lactucae"],
          ["Albugo", "Tecidos foliares", "Ferrugem-branca", "Crucíferas, espinafre", "A. candida"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Ciclo de Phytophthora infestans",
      },
      {
        type: "text",
        content:
          "P. infestans possui ciclo políciclo (múltiplas gerações por estação). Esporângios são produzidos nos esporangióforos emergentes dos estômatos. Em temperaturas abaixo de 15°C, os esporângios liberam zoósporos biflagelados (reprodução assexuada indireta); em temperaturas acima de 20°C, os esporângios germinam diretamente. Os zoósporos nadam em água livre, chegam ao hospedeiro, perdem os flagelos, enquistam e germinam formando um tubo germinativo com apressório. A penetração ocorre diretamente ou por estômatos.",
      },
      {
        type: "heading",
        level: 2,
        content: "Damping-off",
      },
      {
        type: "text",
        content:
          "Damping-off (tombamento) é causado principalmente por Pythium spp. e Rhizoctonia solani em condições de viveiro e sementeiras. Existem duas formas:",
      },
      {
        type: "table",
        headers: ["Tipo", "Momento", "Sintoma", "Agente mais comum"],
        rows: [
          ["Pré-emergência", "Antes da emergência da plântula", "Semente apodrece ou plântula morre antes de emergir", "Pythium spp."],
          ["Pós-emergência", "Após emergência", "Estrangulamento do colo — plântula tomba como se cortada", "Rhizoctonia solani, Pythium spp."],
        ],
      },
      {
        type: "infobox",
        variant: "tip",
        title: "Controle de Pythium e Phytophthora",
        content:
          "Use metalaxil ou metalaxil-M (mefenoxam) para controle de oomicetos em solo. Para míldio em folhas, alterne estrobilurinas com metalaxil ou propamocarbe. Drenagem adequada e substrato bem drenado previnem damping-off por Pythium.",
      },
    ],
  },
  {
    slug: "fungos",
    title: "Micologia — Fungos",
    icon: "🍄",
    color: "#BA7517",
    badgeColor: "#fef3dc",
    badge: "Módulo 7",
    description:
      "Fungos causam 70–80% das doenças de plantas. Ascomycota, Basidiomycota, fungos mitospóricos e grupos de fungicidas.",
    keyTerms: ["Quitina", "Ascomiceto", "Basidiomiceto", "Ascósporo", "Basidiósporo", "Urediniósporo", "Teleomorfo", "Anamorfo", "Conídio"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Características Gerais",
      },
      {
        type: "text",
        content:
          "Fungos são eucariotos com parede celular de quitina, heterotróficos por absorção. São responsáveis por aproximadamente 70–80% de todas as doenças de plantas registradas. Apresentam dois grandes grupos reprodutivos: a fase sexuada (teleomorfo) com esporos de resistência/dispersão de longa distância e a fase assexuada (anamorfo/mitospórico) com esporos de produção rápida para ciclos epidêmicos. Muitos fungos fitopatogênicos são políciclos, produzindo inúmeras gerações de esporos assexuados por estação.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ascomycota",
      },
      {
        type: "text",
        content:
          "Produzem ascósporos dentro de estruturas especializadas (ascos), geralmente agrupados em ascocarpos. São o maior grupo de fungos fitopatogênicos.",
      },
      {
        type: "table",
        headers: ["Ascocarpo", "Estrutura", "Exemplo de patógeno"],
        rows: [
          ["Cleistotécio", "Esférico, fechado, sem abertura definida", "Erysiphe spp. (oídios), Blumeria graminis"],
          ["Peritécio", "Esférico a piriforme, com ostíolo", "Gibberella zeae (Fusarium graminearum)"],
          ["Apotécio", "Aberto, em forma de cálice/disco", "Sclerotinia sclerotiorum, Monilinia fructicola"],
          ["Pseudotécio", "Estrutura similar ao peritécio (Loculoascomycetes)", "Venturia inaequalis (sarna da macieira)"],
        ],
      },
      {
        type: "table",
        headers: ["Patógeno", "Doença", "Hospedeiro", "Ascocarpo"],
        rows: [
          ["Erysiphe spp.", "Oídio", "Cucurbitáceas, crucíferas", "Cleistotécio"],
          ["Blumeria graminis", "Oídio dos cereais", "Trigo, cevada", "Cleistotécio"],
          ["Venturia inaequalis", "Sarna da macieira", "Maçã, pereira", "Pseudotécio"],
          ["Sclerotinia sclerotiorum", "Mofo-branco, podridão de esclerotínio", "Soja, girassol, feijão", "Apotécio"],
          ["Colletotrichum spp.", "Antracnose", "Manga, feijão, pimenta", "Acérvulo (anamorfo)"],
          ["Alternaria alternata", "Pinta-preta, mancha-foliar", "Tomate, citros", "Hifomiceto"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Basidiomycota",
      },
      {
        type: "text",
        content:
          "Produzem basidiósporos externamente nos basídios. Incluem as ferrugens (Uredinales), carvões (Ustilaginales) e Rhizoctonia solani (anamorfo de Thanatephorus cucumeris).",
      },
      {
        type: "table",
        headers: ["Grupo", "Patógeno", "Doença", "Hospedeiro", "Esporos produzidos"],
        rows: [
          ["Ferrugem", "Puccinia graminis", "Ferrugem do trigo", "Trigo, centeio", "Urediniosporos, teliosporos, basidiosporos"],
          ["Ferrugem", "Hemileia vastatrix", "Ferrugem do café", "Café", "Urediniosporos bifenestrados"],
          ["Ferrugem", "Phakopsora pachyrhizi", "Ferrugem asiática da soja", "Soja", "Urediniosporos (lesões TAN e RB)"],
          ["Carvão", "Ustilago maydis", "Carvão-comum do milho", "Milho", "Teliosporos (massas negras)"],
          ["Carvão", "Tilletia tritici", "Cárie do trigo", "Trigo", "Teliosporos no grão"],
          ["Outros", "Rhizoctonia solani", "Tombamento, mela", "Ampla gama", "Esclerócios (sem esporos típicos)"],
          ["Outros", "Moniliophthora perniciosa", "Vassoura-de-bruxa", "Cacau", "Basidiosporos brancos"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Fungos Mitospóricos (Deuteromycota)",
      },
      {
        type: "text",
        content:
          "Fungos que se reproduzem principalmente ou exclusivamente por conídios (esporos assexuados), sem fase sexual conhecida ou com fase sexual raramente observada. Incluem muitos patógenos de grande importância econômica.",
      },
      {
        type: "table",
        headers: ["Gênero", "Doença", "Hospedeiro", "Estrutura de conídios"],
        rows: [
          ["Alternaria", "Alternariose, pinta-preta", "Tomate, crucíferas, citros", "Conídios septados em cadeia"],
          ["Fusarium", "Murcha de fusariose, podridão de raiz", "Soja, tomate, banana", "Macroconídios falciformes"],
          ["Botrytis cinerea", "Mofo-cinza", "Morango, uva, tomate", "Conídios cinza em botridis"],
          ["Cercospora", "Cercosporiose, mancha-de-cercospora", "Soja, beterraba, café", "Conídios cilíndricos filiformes"],
          ["Colletotrichum", "Antracnose (anamorfo)", "Manga, feijão, pimenta", "Acérvulo com setas"],
          ["Cladosporium", "Cladosporiose", "Tomate (face abaxial)", "Conídios em cadeia ramificada"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Fungicidas por Grupo de Resistência (FRAC)",
      },
      {
        type: "table",
        headers: ["Grupo FRAC", "Mecanismo de ação", "Exemplos de i.a.", "Risco de resistência"],
        rows: [
          ["1 — Benzimidazóis", "Inibição de β-tubulina", "Carbendazim, tiofanato-metílico", "Alto (gene β-tub)"],
          ["3 — Triazóis (DMI)", "Inibição da demetilação do ergosterol (CYP51)", "Tebuconazol, propiconazol, epoxiconazol", "Médio a alto"],
          ["7 — Carboxamidas (SDHI)", "Inibição do complexo II da cadeia respiratória (SDH)", "Boscalida, fluxapiroxade, benzovindiflupir", "Médio"],
          ["11 — Estrobilurinas (QoI)", "Inibição do complexo III (citocromo bc1)", "Azoxistrobina, piraclostrobina, trifloxistrobina", "Alto (mutação G143A)"],
          ["28 — Carbamatossulfenilados", "Inibição de múltiplos sítios", "Mancozebe, tiram, clorotalonil", "Baixo (multissítio)"],
          ["M — Cobre", "Multissítio (íons Cu²⁺)", "Oxicloreto de cobre, calda bordalesa", "Muito baixo"],
        ],
      },
      {
        type: "infobox",
        variant: "warning",
        title: "Resistência de Phakopsora pachyrhizi a fungicidas",
        content:
          "A ferrugem asiática da soja desenvolveu resistência a triazóis e estrobilurinas em diversas regiões do Brasil. O manejo anti-resistência exige rotação de grupos com diferentes modos de ação (ex: mistura triazol + SDHI + estrobilurina) e monitoramento de eficácia.",
      },
    ],
  },
  {
    slug: "bacterias",
    title: "Bactérias Fitopatogênicas",
    icon: "🧫",
    color: "#993C1D",
    badgeColor: "#f5e6e0",
    badge: "Módulo 8",
    description:
      "Principais gêneros bacterianos, mecanismos de virulência, diagnose e controle de bacterioses.",
    keyTerms: ["T3SS", "Ti-plasmídeo", "Xanthomonas", "Ralstonia", "Erwinia", "EPS", "ELISA", "PCR", "Hipersensibilidade"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Características Gerais",
      },
      {
        type: "text",
        content:
          "As bactérias fitopatogênicas são em sua maioria gram-negativas (parede fina, LPS externo), bacilares, móveis por flagelos peritríquios ou polares. Diferentemente dos fungos, não possuem estruturas de penetração ativa — entram pela planta por aberturas naturais (estômatos, hidatódios, lenticelas) ou ferimentos. Multiplicam-se no apoplasto (espaço intercelular), nos vasos (xilema ou floema) ou intracelularmente.",
      },
      {
        type: "heading",
        level: 2,
        content: "Principais Gêneros Fitopatogênicos",
      },
      {
        type: "table",
        headers: ["Gênero", "Gram", "Doença importante", "Hospedeiro", "Sintoma principal"],
        rows: [
          ["Xanthomonas", "−", "Cancro cítrico (X. citri subsp. citri)", "Citros", "Cancros corticosos em folhas e frutos"],
          ["Xanthomonas", "−", "Mancha angular do feijoeiro (X. axonopodis)", "Feijão", "Manchas angulares aquosas"],
          ["Pseudomonas", "−", "Mancha bacteriana (P. syringae pv. tomato)", "Tomate", "Manchas foliares com halo amarelo"],
          ["Erwinia", "−", "Podridão mole (E. carotovora)", "Batata, cenoura", "Maceração aquosa fétida"],
          ["Agrobacterium", "−", "Galha-de-coroa (A. tumefaciens)", "Roseira, macieira", "Galha na região do colo"],
          ["Ralstonia", "−", "Murcha bacteriana (R. solanacearum)", "Tomate, batata, banana", "Murcha rápida, escurecimento vascular"],
          ["Clavibacter", "+", "Cancro bacteriano do tomate (C. michiganensis)", "Tomate", "Cancro no caule, murcha unilateral"],
          ["Streptomyces", "+", "Sarna da batata (S. scabies)", "Batata, beterraba", "Lesões corticosas nos tubérculos"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Mecanismos de Virulência",
      },
      {
        type: "table",
        headers: ["Mecanismo", "Bactéria", "Função na patogênese"],
        rows: [
          ["T3SS (Sistema de secreção tipo III)", "Xanthomonas, Pseudomonas, Ralstonia", "Injeta proteínas efetoras (Avr, Hop) diretamente na célula vegetal; suprime defesas"],
          ["Enzimas pectolíticas", "Erwinia, Pectobacterium", "Degradam pectina da parede celular causando maceração"],
          ["EPS (exopolissacarídeos)", "Ralstonia, Xanthomonas", "Bloqueiam vasos do xilema causando murcha; facilitam colonização"],
          ["Toxinas", "Pseudomonas syringae", "Siringomicina (permeabiliza membrana), coroatina (análogo de jasmonato)"],
          ["Ti-plasmídeo", "Agrobacterium tumefaciens", "T-DNA integrado ao genoma vegetal; genes de fitormônios causam galha"],
          ["IAA e citocininas", "Diversos", "Alteram balanço hormonal da planta; favorecem crescimento bacteriano"],
        ],
      },
      {
        type: "infobox",
        variant: "important",
        title: "T3SS: a 'seringa molecular'",
        content:
          "O Sistema de Secreção Tipo III é uma estrutura em agulha que perfura a membrana plasmática da célula vegetal e injeta proteínas efetoras diretamente no citoplasma. Essas efetoras suprimem a imunidade vegetal (PTI). Bactérias que perdem o T3SS geralmente perdem a patogenicidade. É alvo de pesquisas para controle biológico.",
      },
      {
        type: "heading",
        level: 2,
        content: "Diagnose de Bacterioses",
      },
      {
        type: "table",
        headers: ["Método", "Princípio", "Aplicação"],
        rows: [
          ["Meios seletivos (YPGA, NBY, KB)", "Crescimento em meios com antibióticos seletivos", "Isolamento primário"],
          ["Teste de hipersensibilidade (HR)", "Inoculação em folha de fumo: colapso rápido = patogênico", "Triagem de patogenicidade"],
          ["BIOLOG GN", "Perfil de utilização de 95 substratos de carbono", "Identificação de espécies"],
          ["ELISA (DAS-ELISA)", "Anticorpos monoclonais específicos", "Detecção em campo, sementes"],
          ["PCR (16S rDNA, genes específicos)", "Amplificação de sequências específicas", "Identificação molecular precisa"],
          ["Sequenciamento (MLSA)", "Multilocus sequence analysis", "Taxonomia e epidemiologia molecular"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Controle",
      },
      {
        type: "list",
        items: [
          "Bactericidas à base de cobre: oxicloreto, hidróxido, cúprico — ação multissítio, amplo espectro",
          "Antibióticos (uso restrito no Brasil): estreptomicina em pomares específicos; risco de resistência",
          "Resistência genética: principal estratégia de longo prazo (ex: variedades resistentes ao cancro cítrico)",
          "Quarentena e legislação fitossanitária: impede entrada de patógenos exóticos (ex: Candidatus Liberibacter — HLB)",
          "Controle biológico: Bacillus subtilis, Pseudomonas fluorescens — indução de resistência ou antibiose",
          "Manejo cultural: poda de ramos doentes, desinfecção de ferramentas, evitar ferimentos",
        ],
      },
    ],
  },
  {
    slug: "mlomicoplasmas",
    title: "Micoplasmas (MLO/Fitoplasmas)",
    icon: "🔵",
    color: "#3B6D11",
    badgeColor: "#EAF3DE",
    badge: "Módulo 9",
    description:
      "Fitoplasmas e espiroplasmas: descoberta, características únicas sem parede celular, vetores cigarrinhas e principais doenças.",
    keyTerms: ["Fitoplasma", "MLO", "Mollicutes", "Candidatus", "Cigarrinha", "Cicadellidae", "Espiroplasma", "DAPI", "Floema"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Descoberta e Histórico",
      },
      {
        type: "text",
        content:
          "Doi et al. (1967) demonstraram pela primeira vez a presença de organismos semelhantes a micoplasmas (MLO — Mycoplasma-Like Organisms) no floema de plantas com sintomas de enfezamento e viroses não transmissíveis por enxerto. Até então, estas doenças eram atribuídas a vírus. A demonstração foi feita por microscopia eletrônica de transmissão em seções ultrafinas de tecido floemático. O tratamento com tetraciclina (que inibe MLOs mas não vírus) causou remissão dos sintomas — prova definitiva da natureza MLO.",
      },
      {
        type: "heading",
        level: 2,
        content: "Taxonomia e Características",
      },
      {
        type: "text",
        content:
          "Os fitoplasmas pertencem à classe Mollicutes, ordem Acholeplasmatales. São os únicos procariotos sem parede celular (ao contrário das bactérias que têm peptidoglicano). Esta ausência de parede tem duas consequências importantes: são pleomórficos (não têm forma definida, aparecem como esferas, filamentos, tubos) e são sensíveis a tetraciclina mas completamente insensíveis a antibióticos β-lactâmicos (penicilinas, cefalosporinas) que atuam na síntese da parede.",
      },
      {
        type: "table",
        headers: ["Característica", "Fitoplasma", "Bactéria típica", "Vírus"],
        rows: [
          ["Parede celular", "Ausente", "Presente (peptidoglicano)", "Ausente"],
          ["Cultivável in vitro", "Não", "Sim (maioria)", "Não"],
          ["Tamanho", "200–800 nm", "0,5–5 μm", "20–300 nm"],
          ["Genoma", "530–1350 kb (reduzido)", "1.500–10.000 kb", "kb a Mb (RNA ou DNA)"],
          ["Status nomenclatural", "Candidatus (provisório)", "Nomenclatura formal", "Nomenclatura formal"],
          ["Habitat na planta", "Floema exclusivo (tubos crivosos)", "Apoplasto, xilema ou floema", "Sistêmico variável"],
          ["Sensibilidade a antibióticos", "Tetraciclina (sim); β-lactâmicos (não)", "Variável por grupo", "Nenhum"],
        ],
      },
      {
        type: "infobox",
        variant: "note",
        title: "Por que 'Candidatus'?",
        content:
          "Por não serem cultiváveis in vitro, os fitoplasmas não puderam ser caracterizados segundo as regras do Código Internacional de Nomenclatura de Procariotos, que exige cultura pura e depósito em coleção. Por isso, recebem o status 'Candidatus' — nomenclatura provisória aceita pelo ICNP para organismos não cultiváveis. Ex: 'Candidatus Phytoplasma mali' (proliferação da macieira).",
      },
      {
        type: "heading",
        level: 2,
        content: "Vetores e Transmissão",
      },
      {
        type: "text",
        content:
          "Fitoplasmas são transmitidos principalmente por cigarrinhas (Hemiptera: Cicadellidae) e psilídeos (Psyllidae). A transmissão é persistente propagativa: o patógeno se multiplica no inseto vetor (intestino, hemocele, glândulas salivares), com período de incubação de semanas. O vetor permanece infectivo por toda a vida. Não há transmissão por semente ou por contato mecânico (diferentemente dos vírus).",
      },
      {
        type: "heading",
        level: 2,
        content: "Principais Doenças por Fitoplasmas",
      },
      {
        type: "table",
        headers: ["Doença", "Hospedeiro", "Grupo 16Sr", "Sintomas", "Importância"],
        rows: [
          ["Corn stunt (enfezamento do milho)", "Milho", "16SrI", "Estrias cloróticas, perfilhamento, espigas pequenas", "Perda de 20–100% no Brasil"],
          ["Vassoura-de-bruxa da batata", "Batata", "16SrVI", "Proliferação axilar, tubérculos aéreos, filodia", "Quarentenária no Brasil"],
          ["Amarelamento letal do coqueiro", "Coco", "16SrIV", "Queda de frutos, necrose floral, morte", "Devastou plantios no Caribe"],
          ["Stolbur da solanácea", "Tomate, pimentão", "16SrXII", "Filodias, clorose, frutos deformados", "Europa, Ásia"],
          ["Proliferação da macieira", "Maçã", "16SrX-A", "Proliferação de brotos, folhas pequenas, sabor alterado", "Europa, Sul do Brasil"],
          ["Greening dos citros (HLB)*", "Citros", "Liberibacter*", "Mosaico assimétrico, frutos verdes, morte lenta", "A mais destrutiva do mundo"],
        ],
      },
      {
        type: "infobox",
        variant: "warning",
        title: "HLB (Huanglongbing) — atenção!",
        content:
          "O HLB é causado por 'Candidatus Liberibacter asiaticus' — uma bactéria do floema (não um fitoplasma), transmitida pelo psilídeo Diaphorina citri. É a doença de citros mais devastadora do mundo. Presente no Brasil desde 2004, avança para novas regiões produtoras.",
      },
      {
        type: "heading",
        level: 2,
        content: "Espiroplasmas",
      },
      {
        type: "text",
        content:
          "Espiroplasmas (gênero Spiroplasma) também pertencem à classe Mollicutes mas, ao contrário dos fitoplasmas, são cultiváveis em meios artificiais especializados (SP-4). Possuem morfologia helicoidal dinâmica e são móveis por rotação. O principal fitopatogênico é Spiroplasma citri, agente do stubborn dos citros, que causa nanismo, deformação de frutos (acorn fruits) e desorientação de frutos (pequenos, duros, com sabor amargo). Transmitido pela cigarrinha Circulifer tenellus.",
      },
      {
        type: "table",
        headers: ["Característica", "Fitoplasma", "Espiroplasma"],
        rows: [
          ["Morfologia", "Pleomórfico", "Helicoidal, móvel"],
          ["Cultivável", "Não", "Sim (SP-4)"],
          ["Floema", "Exclusivo", "Floema (alguns xilema)"],
          ["Diagnose", "DAPI, PCR", "Microscopia, cultura, PCR"],
          ["Exemplo", "Ca. P. asteris", "S. citri (stubborn dos citros)"],
        ],
      },
    ],
  },
  {
    slug: "virus",
    title: "Vírus e Viroses",
    icon: "🦠",
    color: "#639922",
    badgeColor: "#f0f7e0",
    badge: "Módulo 10",
    description:
      "Estrutura viral, morfologias, modos de transmissão, viroides e principais viroses no Brasil.",
    keyTerms: ["Capsídeo", "Viroide", "CMV", "TSWV", "CTV", "Afídeo", "Mosca-branca", "Persistente", "Não persistente", "PSTVd"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Estrutura e Propriedades dos Fitovírus",
      },
      {
        type: "text",
        content:
          "Os vírus de plantas são entidades subcelulares compostas de ácido nucleico (RNA ou DNA, fita simples ou dupla) envolvido por um capsídeo proteico (capa proteica). Não possuem metabolismo próprio e são completamente dependentes da maquinaria celular do hospedeiro para replicação. Diferentemente dos vírus animais, a maioria dos fitovírus não possui envelope lipídico. A maioria tem genoma de RNA fita simples (+ssRNA).",
      },
      {
        type: "heading",
        level: 2,
        content: "Morfologia das Partículas Virais",
      },
      {
        type: "table",
        headers: ["Morfologia", "Estrutura", "Exemplo", "Tamanho"],
        rows: [
          ["Isométrica (icosaédrica)", "Esférica, 20 faces triangulares", "CMV, TMV (forma esférica)", "25–30 nm"],
          ["Helicoidal (filamentosa rígida)", "Bastonete rígido helicoidal", "TMV (Tobacco Mosaic Virus)", "300 × 18 nm"],
          ["Helicoidal (filamentosa flexuosa)", "Filamento flexível alongado", "PVY, PPV, CTV", "700–900 nm"],
          ["Geminivírus", "Dois icosaedros unidos (geminados)", "BGYMV, TYLCV", "18–20 nm × 30 nm"],
          ["Rhabdovírus", "Baciliforme com envelope", "RYSV, BNYV", "200 × 50 nm"],
          ["Caulimovírus", "Icosaédrico, dsDNA", "CaMV (Cauliflower Mosaic)", "50 nm"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Modos de Transmissão",
      },
      {
        type: "table",
        headers: ["Vetor/Modo", "Tipo de relação", "Vírus transmitidos", "Característica"],
        rows: [
          ["Afídeos (pulgões)", "Não persistente / Persistente", "CMV, PVY, BYDV, PLRV", "NP: transmissão em segundos, sem replicação; P: circulativo/propagativo"],
          ["Tripes (Thysanoptera)", "Persistente propagativo", "TSWV (vira-cabeça)", "Apenas larvas adquirem; adultos transmitem"],
          ["Mosca-branca (Bemisia tabaci)", "Persistente circulativo", "BGYMV, TYLCV, geminivírus em geral", "Aquisição em 15–30 min; transmissão por horas"],
          ["Cigarrinhas", "Persistente propagativo", "MRDV, RGSV", "Transmissão transovariana em alguns casos"],
          ["Fungos vetores", "—", "SBWMV, BNYVV", "Zoósporos carregam vírus (Olpidium, Polymyxa)"],
          ["Contato / mecânico", "—", "TMV, CMV, PVX", "Ferimentos, mãos do trabalhador, ferramentas"],
          ["Semente", "—", "SMV, CMV (raro), AMV", "Transmissão interna à semente; fonte de inóculo primário"],
          ["Enxertia / material vegetativo", "—", "CTV, PRSV", "Transmissão de citros tristeza, melão"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Viroides",
      },
      {
        type: "text",
        content:
          "Viroides são os menores agentes infecciosos conhecidos: moléculas de RNA circular fita simples (ssRNA), de 246 a 399 nucleotídeos, sem capsídeo proteico. Descobertos por Diener (1971). Replicam-se no núcleo ou cloroplasto da célula vegetal usando a RNA-polimerase do hospedeiro. O mecanismo de patogênese não é completamente elucidado, mas envolve silenciamento de RNA (RNA de interferência). O viroide mais estudado é o PSTVd (Potato Spindle Tuber Viroid) — RNA circular de 359 nt.",
      },
      {
        type: "infobox",
        variant: "important",
        title: "Viroides: transmissão e controle",
        content:
          "Viroides são transmitidos mecanicamente (ferramentas, contato), por pólen (CEVd, CCCVd) e por semente (PSTVd, HSVd). Não existe tratamento. Controle por material de plantio certificado, desinfecção de ferramentas com hipoclorito a 2% ou NaOH 1 M. Diagnose por RT-PCR ou PAGE (eletroforese em gel de poliacrilamida).",
      },
      {
        type: "heading",
        level: 2,
        content: "Principais Viroses no Brasil",
      },
      {
        type: "table",
        headers: ["Vírus", "Sigla", "Doença", "Hospedeiro", "Vetor principal"],
        rows: [
          ["Cucumber Mosaic Virus", "CMV", "Mosaico", ">1.000 hospedeiros", "Afídeos (NP)"],
          ["Tomato Spotted Wilt Virus", "TSWV", "Vira-cabeça do tomate", "Tomate, pimentão, alface", "Tripes (Frankliniella)"],
          ["Citrus Tristeza Virus", "CTV", "Tristeza dos citros", "Citros", "Afídeo Toxoptera citricida"],
          ["Soybean Mosaic Virus", "SMV", "Mosaico da soja", "Soja, leguminosas", "Afídeos (NP)"],
          ["Bean Golden Yellow Mosaic Virus", "BGYMV", "Mosaico-dourado do feijoeiro", "Feijão", "Mosca-branca (Bemisia tabaci)"],
          ["Papaya Ringspot Virus", "PRSV", "Meleira/mancha anelar do mamoeiro", "Mamão, cucurbitáceas", "Afídeos (NP)"],
          ["Potato Virus Y", "PVY", "Risca do fumo, necrose da batata", "Batata, tomate, fumo", "Afídeos (NP)"],
        ],
      },
      {
        type: "infobox",
        variant: "tip",
        title: "CTV: a maior epidemia virótica",
        content:
          "A tristeza dos citros (CTV) eliminou >100 milhões de plantas de laranja-doce enxertadas em laranja-azeda na América do Sul (1930–1960). A mudança para porta-enxertos tolerantes (limão Cravo, tangerina Cleópatra) contornou o problema. O CTV é um closterovírus de +ssRNA de 19,2 kb — um dos maiores genomas de RNA viral.",
      },
    ],
  },
  {
    slug: "interacoes",
    title: "Interações Patógeno/Hospedeiro",
    icon: "⚔️",
    color: "#BA7517",
    badgeColor: "#fef3dc",
    badge: "Módulo 11",
    description:
      "Ciclo da doença, mecanismos de defesa vegetal, resistência vertical e horizontal, SAR e ISR.",
    keyTerms: ["Ciclo da doença", "Resistência vertical", "Resistência horizontal", "Gene R", "SAR", "ISR", "PR-proteínas", "Ácido salicílico", "Hipersensibilidade", "Efetores"],
    content: [
      {
        type: "heading",
        level: 2,
        content: "Ciclo da Doença (9 Etapas)",
      },
      {
        type: "text",
        content:
          "O ciclo da doença descreve a sequência de eventos desde a chegada do inóculo até a nova produção de inóculo capaz de reiniciar o ciclo. Compreender cada etapa é essencial para identificar os pontos de intervenção mais eficazes no manejo da doença.",
      },
      {
        type: "table",
        headers: ["Etapa", "Descrição", "Ponto crítico de controle"],
        rows: [
          ["1. Inoculação", "Contato do inóculo com o hospedeiro suscetível", "Reduzir inóculo primário; uso de fungicidas protetores"],
          ["2. Pré-penetração", "Germinação do esporo, formação de apressório na superfície", "Fungicidas de contato; condições climáticas desfavoráveis"],
          ["3. Penetração", "Entrada no hospedeiro (direta, por estômatos, ferimentos)", "Resistência pré-formada; fungicidas sistêmicos"],
          ["4. Infecção", "Estabelecimento do patógeno nas células hospedeiras", "Resistência induzida; fungicidas sistêmicos"],
          ["5. Colonização", "Crescimento do patógeno nos tecidos; sintomas começam", "Fungicidas curativos; resistência do hospedeiro"],
          ["6. Aparecimento de sintomas", "Sintomas visíveis; resposta de hipersensibilidade possível", "Diagnose precoce; amostragem"],
          ["7. Reprodução", "Produção de estruturas de reprodução/disseminação", "Fungicidas erradicantes; retirada de plantas"],
          ["8. Disseminação", "Dispersão do inóculo para novos hospedeiros", "Barreiras físicas; controle de vetores"],
          ["9. Sobrevivência", "Persistência do patógeno entre estações/cultivos", "Rotação de culturas; destruição de restos culturais"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Mecanismos de Defesa Vegetal",
      },
      {
        type: "table",
        headers: ["Categoria", "Tipo", "Mecanismo", "Exemplo"],
        rows: [
          ["Pré-formados", "Estrutural", "Cutícula espessa, tricomas, estômatos com abertura reduzida", "Cutícula cerosa de gramíneas; fechar estômatos em período de chuva"],
          ["Pré-formados", "Bioquímico", "Compostos fenólicos, saponinas, fitoantecipinas", "Glicosídeos cianogênicos em mandioca; taninos em casca de árvores"],
          ["Induzidos", "Estrutural", "Papilas de calose, lignificação de parede, camada de suberina", "Deposição de calose no sítio de penetração de Phytophthora"],
          ["Induzidos", "Bioquímico — HR", "Hipersensibilidade: morte rápida de células na zona de infecção", "Resposta a patógenos incompatíveis (gene-por-gene de Flor)"],
          ["Induzidos", "Bioquímico — fitoalexinas", "Síntese de compostos antimicrobianos de novo", "Gliceolina em soja; pisatina em ervilha; capsidiol em pimentão"],
          ["Induzidos", "SAR", "Resistência sistêmica adquirida mediada por ácido salicílico; PR-proteínas", "SAR ativada após necrose por patógeno; proteção contra patógenos secundários"],
          ["Induzidos", "ISR", "Resistência sistêmica induzida por PGPR; mediada por jasmonato/etileno", "Trichoderma, Bacillus subtilis, Pseudomonas fluorescens induzem ISR"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Resistência Vertical vs. Horizontal",
      },
      {
        type: "table",
        headers: ["Característica", "Resistência Vertical (Qualitativa)", "Resistência Horizontal (Quantitativa)"],
        rows: [
          ["Teoria base", "Gene-por-gene (Flor, 1956)", "Resistência poligênica / quantitativa"],
          ["Genética", "Gene R dominante único (monogênica)", "Vários genes de pequeno efeito (QTL)"],
          ["Espectro de ação", "Específica a certas raças", "Efetiva contra todas as raças"],
          ["Expressão", "Tudo ou nada (imune vs. suscetível)", "Gradual; reduz severidade e taxa de progresso"],
          ["Estabilidade", "Instável — patógeno pode superar por mutação", "Estável — durável no campo"],
          ["Aplicação", "Cultivares com genes R específicos", "Melhoramento para resistência de campo"],
          ["Exemplo", "Lr genes em trigo vs. Puccinia triticina", "Resistência parcial à ferrugem asiática da soja"],
        ],
      },
      {
        type: "infobox",
        variant: "important",
        title: "Hipótese Gene-por-Gene de Flor (1956)",
        content:
          "Harold Flor, estudando o sistema linho-Melampsora lini, propôs: para cada gene de resistência (R) na planta, existe um gene de avirulência (Avr) correspondente no patógeno. Quando o produto do gene R reconhece o produto do gene Avr (efetora), ocorre a reação de hipersensibilidade (incompatibilidade). Quando o patógeno perde ou modifica o gene Avr, supera a resistência → nova raça virulenta.",
      },
      {
        type: "heading",
        level: 2,
        content: "SAR e ISR: Resistência Sistêmica",
      },
      {
        type: "text",
        content:
          "A resistência sistêmica adquirida (SAR) é ativada após infecção por patógeno necrotrófico ou biotrófico que causa necrose. O ácido salicílico (SA) é o sinal móvel que se acumula e ativa a expressão de genes de PR-proteínas (Pathogenesis-Related proteins) em tecidos distantes do sítio de infecção. PR-proteínas incluem β-1,3-glucanases (PR-2), quitinases (PR-3), PR-1 (marcador de SAR), e proteínas antivirais.",
      },
      {
        type: "text",
        content:
          "A resistência sistêmica induzida (ISR) é ativada por rizobactérias promotoras de crescimento (PGPR) como Pseudomonas fluorescens, Trichoderma spp. e Bacillus subtilis. Ao contrário da SAR, a ISR é mediada principalmente por ácido jasmônico (JA) e etileno (ET) e não acumula SA nem PR-1. Atua principalmente contra patógenos necrótrofos e herbívoros. SAR e ISR são mutuamente complementares e podem ser ativadas simultaneamente.",
      },
      {
        type: "infobox",
        variant: "tip",
        title: "Aplicação prática: elicitores comerciais",
        content:
          "Produtos à base de acibenzolar-S-metil (ASM/Bion®) são análogos funcionais do SA e ativam SAR em plantas. Preparações de Bacillus subtilis (Serenade®) e Trichoderma asperellum (Trichodermil®) ativam ISR. Combinados com fungicidas, aumentam a eficiência do manejo e permitem reduzir doses.",
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
