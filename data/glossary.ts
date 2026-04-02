export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Agressividade",
    category: "Patogenicidade",
    definition:
      "Capacidade quantitativa de um patógeno de se desenvolver e reproduzir no hospedeiro, independentemente da compatibilidade gene-a-gene. Patógenos mais agressivos causam maior área de lesão, maior esporulação e período latente mais curto.",
  },
  {
    term: "Anamorfo",
    category: "Micologia",
    definition:
      "Forma assexuada (anamórfica) de um fungo, que se reproduz por conídios (esporos mitóticos). Muitos fungos fitopatogênicos são identificados pelo seu anamorfo. Ex: Colletotrichum (anamorfo) / Glomerella (teleomorfo).",
  },
  {
    term: "Apressório",
    category: "Penetração",
    definition:
      "Estrutura de adesão e penetração formada pela hifa germinativa de fungos fitopatogênicos sobre a superfície do hospedeiro. Produz pressão mecânica (turgor) e enzimas que rompem a cutícula. Presente em Magnaporthe oryzae, Colletotrichum, Phytophthora.",
  },
  {
    term: "Ascósporo",
    category: "Micologia",
    definition:
      "Esporo sexual produzido dentro de um asco (célula-mãe alongada) em fungos do filo Ascomycota. Resultado de fusão nuclear e meiose; geralmente oito por asco. Importantes como inóculo primário em epidemias de doenças como a sarna da macieira (Venturia inaequalis).",
  },
  {
    term: "Basidiósporo",
    category: "Micologia",
    definition:
      "Esporo sexual produzido externamente em um basídio por fungos do filo Basidiomycota. Formado após cariogamia e meiose, geralmente quatro por basídio. Em ferrugens, são os basidiósporos que infectam o hospedeiro alternativo (ex: Puccinia graminis em berberis).",
  },
  {
    term: "Cancro",
    category: "Sintomatologia",
    definition:
      "Lesão necrótica delimitada, geralmente deprimida, em tecidos de casca, caule ou ramos. Causada por fungos (Nectria, Cytospora) ou bactérias (Xanthomonas citri — cancro cítrico). A planta pode tentar isolar a lesão com tecido de calo ao redor.",
  },
  {
    term: "Capsídeo",
    category: "Virologia",
    definition:
      "Envelope proteico que envolve o ácido nucleico (RNA ou DNA) de um vírus. Composto por subunidades proteicas chamadas capsômeros. Protege o genoma viral e medeia o reconhecimento do hospedeiro. Em fitovírus, geralmente não há envelope lipídico adicional.",
  },
  {
    term: "Clorose",
    category: "Sintomatologia",
    definition:
      "Amarelamento de tecidos vegetais por perda ou degradação de clorofila. Pode ser generalizada (deficiência de nitrogênio), internerval (deficiência de ferro, magnésio) ou em padrão de mosaico (viral). Sintoma de diversas doenças bióticas e abióticas.",
  },
  {
    term: "Colonização",
    category: "Patologia",
    definition:
      "Fase do ciclo da doença em que o patógeno cresce e se expande nos tecidos do hospedeiro após penetração e infecção estabelecida. Durante a colonização ocorre interferência no metabolismo da planta e início dos sintomas.",
  },
  {
    term: "Damping-off",
    category: "Sintomatologia",
    definition:
      "Tombamento de plântulas causado por patógenos de solo (Pythium, Rhizoctonia, Fusarium). Pré-emergência: semente ou plântula morre antes de emergir. Pós-emergência: estrangulamento e colapso do colo da plântula logo após emergência. Favorecido por excesso de umidade e baixa temperatura.",
  },
  {
    term: "Endoparasita",
    category: "Nematologia",
    definition:
      "Parasita que entra completamente no interior dos tecidos do hospedeiro para se alimentar e reproduzir. Nematoides endoparasitas podem ser migratórios (Pratylenchus — se move pelos tecidos) ou sedentários (Meloidogyne, Heterodera — ficam fixos após infecção).",
  },
  {
    term: "Estilete",
    category: "Nematologia",
    definition:
      "Estrutura bucal punctiforme e oca de nematoides fitoparasitas, usada para perfurar células vegetais e sugar o conteúdo. A morfologia do estilete (comprimento, forma dos nódulos basais) é usada na identificação dos gêneros. Ausente em nematoides de vida livre.",
  },
  {
    term: "Etiologia",
    category: "Diagnose",
    definition:
      "Estudo das causas das doenças de plantas — identificação e caracterização do agente causal. Envolve observação, isolamento, inoculação e confirmação (postulados de Koch). A etiologia pode ser biótica (parasitária) ou abiótica (não-parasitária).",
  },
  {
    term: "Fitoalexina",
    category: "Defesa vegetal",
    definition:
      "Composto de baixo peso molecular com atividade antimicrobiana, sintetizado de novo pela planta em resposta à infecção ou elicitação. Exemplos: gliceolina (soja), pisatina (ervilha), capsidiol (pimentão), resveratrol (videira). Parte da resposta de defesa induzida.",
  },
  {
    term: "Fitoplasma",
    category: "Bacteriologia",
    definition:
      "Procarioto sem parede celular pertencente à classe Mollicutes, habitante exclusivo do floema de plantas. Não cultivável in vitro; designado como 'Candidatus Phytoplasma'. Transmitido por cigarrinhas (Cicadellidae) de forma persistente propagativa. Causa viroses-like como vassoura-de-bruxa e enfezamento.",
  },
  {
    term: "Galha",
    category: "Sintomatologia",
    definition:
      "Proliferação anormal e hipertrofia de tecidos vegetais induzida por patógenos. Galha-de-coroa: induzida por Agrobacterium tumefaciens via Ti-plasmídeo, na região do colo. Galha-de-raiz: nódulos formados por Meloidogyne spp. nas raízes. Cecídias em folhas podem ser causadas por insetos.",
  },
  {
    term: "Hifa",
    category: "Micologia",
    definition:
      "Filamento tubular microscópico constituinte do micélio fúngico. Pode ser septada (com divisórias — Ascomycota, Basidiomycota) ou cenocítica/asseptada (sem divisórias — Zygomycota, oomicetos). As hifas crescem pela extremidade apical e constituem a unidade estrutural básica dos fungos.",
  },
  {
    term: "Hipersensibilidade",
    category: "Defesa vegetal",
    definition:
      "Resposta de defesa vegetal caracterizada pela morte rápida e localizada das células hospedeiras no sítio de infecção, limitando a dispersão do patógeno. Ocorre quando o produto do gene R da planta reconhece o produto do gene Avr do patógeno (interação incompatível). Eficaz principalmente contra patógenos biotróficos.",
  },
  {
    term: "Hospedeiro",
    category: "Patologia",
    definition:
      "Organismo (planta) que mantém o patógeno e a partir do qual ele obtém nutrientes. Hospedeiro suscetível: não possui resistência efetiva ao patógeno. Hospedeiro resistente: possui mecanismos que limitam o desenvolvimento do patógeno. Hospedeiro alternativo: espécie secundária onde o patógeno completa parte do seu ciclo (ex: Puccinia em Berberis).",
  },
  {
    term: "Inóculo",
    category: "Epidemiologia",
    definition:
      "Todo propágulo capaz de iniciar uma infecção — esporos, fragmentos de micélio, células bacterianas, partículas virais, ovos ou juvenis de nematoides. Inóculo primário: inicia a epidemia (sobrevivência de entressafra). Inóculo secundário: produzido durante a epidemia, amplifica a doença.",
  },
  {
    term: "Micélio",
    category: "Micologia",
    definition:
      "Conjunto de hifas que forma o talo vegetativo do fungo. Micélio vegetativo: cresce no substrato e absorve nutrientes. Micélio aéreo: se projeta acima do substrato e porta as estruturas reprodutivas. Em oídio (Erysiphe), o micélio é externo e visível como pulverulência branca na superfície foliar.",
  },
  {
    term: "MLO",
    category: "Bacteriologia",
    definition:
      "Mycoplasma-Like Organism — denominação original (Doi et al., 1967) para os organismos do floema sem parede celular, hoje denominados fitoplasmas. O termo MLO ainda é encontrado em literatura mais antiga. Corresponde à classe Mollicutes, atualmente classificados como 'Candidatus Phytoplasma'.",
  },
  {
    term: "Necrose",
    category: "Sintomatologia",
    definition:
      "Morte de células ou tecidos vegetais com escurecimento, resultando em lesões de coloração marrom, preta ou cinza. Pode ser causada por fungos (Alternaria), bactérias (Pseudomonas), vírus (TSWV — manchas necróticas sistêmicas) ou fatores abióticos. Principal tipo de dano em doenças foliares.",
  },
  {
    term: "Nematoide",
    category: "Nematologia",
    definition:
      "Verme cilíndrico (filo Nematoda), microscópico (0,2–10 mm), de vida livre ou parasitário. Os fitoparasitas possuem estilete bucal. Vivem no solo ou em tecidos vegetais. Causam perdas de bilhões de dólares globalmente. Principais gêneros fitoparasitas: Meloidogyne, Heterodera, Pratylenchus, Rotylenchulus.",
  },
  {
    term: "Oomiceto",
    category: "Stramenopila",
    definition:
      "Organismo do reino Stramenopila com crescimento filamentoso semelhante a fungos, mas com parede de celulose (não quitina) e zoósporos biflagelados. Inclui patógenos importantes como Phytophthora infestans, Pythium spp. e os causadores de míldio. Não respondem a fungicidas que atuam no ergosterol.",
  },
  {
    term: "Parasita",
    category: "Patologia",
    definition:
      "Organismo que vive às custas de outro (hospedeiro) retirando nutrientes sem causar benefício recíproco. Parasita obrigatório (biotrófico): só vive em hospedeiro vivo (ex: ferrugens, vírus). Parasita facultativo: pode viver saprofiticamente (ex: Botrytis cinerea). Parasita necrotrófico: mata células do hospedeiro para se alimentar.",
  },
  {
    term: "Patogenicidade",
    category: "Patogenicidade",
    definition:
      "Capacidade qualitativa (tudo ou nada) de um microrganismo de causar doença em determinado hospedeiro. Atributo binário: o patógeno é ou não é patogênico para determinado hospedeiro. Distinta de virulência (grau) e agressividade (taxa de desenvolvimento).",
  },
  {
    term: "Postulados de Koch",
    category: "Diagnose",
    definition:
      "Critérios estabelecidos por Robert Koch (1876) para provar a relação causal entre um microrganismo e uma doença: (1) associação consistente com a doença; (2) isolamento e cultivo puro; (3) reprodução da doença por inoculação; (4) reisolamento do agente inoculado com características idênticas ao original.",
  },
  {
    term: "PR-proteínas",
    category: "Defesa vegetal",
    definition:
      "Pathogenesis-Related proteins — proteínas induzidas na planta durante a SAR (Resistência Sistêmica Adquirida). Incluem β-1,3-glucanases (PR-2), quitinases (PR-3), proteínas antifúngicas (PR-1 — marcador de SAR), inibidores de protease (PR-6). Sua expressão sinaliza estado de defesa ativo.",
  },
  {
    term: "Sinal",
    category: "Sintomatologia",
    definition:
      "Estrutura visível do próprio patógeno sobre o tecido vegetal doente. Inclui: esporos de fungos (urediniósporos, conídios), micélio externo, exsudatos bacterianos (ooze). Distingue-se de sintoma, que é a resposta da planta. Ex: pústulas de ferrugem = sinal; clorose ao redor = sintoma.",
  },
  {
    term: "Sintoma",
    category: "Sintomatologia",
    definition:
      "Resposta fisiológica ou morfológica da planta à presença e ação do patógeno. Exemplos: clorose, necrose, murcha, hipertrofia, hipoplasia, mosaico. Diferente de sinal (estrutura do patógeno). O conjunto de sintomas característicos de uma doença forma o complexo sintomático.",
  },
  {
    term: "Teleomorfo",
    category: "Micologia",
    definition:
      "Forma sexuada (teleomórfica) de um fungo, com produção de esporos após reprodução sexual (ascósporos, basidiósporos, oosporos). Muitos fungos têm teleomorfos raramente observados em campo. O Código de Nomenclatura de Melbourne (2011) unificou nomes de anamorfos e teleomorfos sob o princípio 'um fungo = um nome'.",
  },
  {
    term: "Triângulo da doença",
    category: "Epidemiologia",
    definition:
      "Modelo conceitual que representa a doença como resultado da interação entre hospedeiro suscetível, patógeno virulento e ambiente favorável. A área do triângulo representa a intensidade da doença. A modificação de qualquer um dos três lados reduz a doença. Base conceitual do manejo integrado de doenças.",
  },
  {
    term: "Virulência",
    category: "Patogenicidade",
    definition:
      "Grau de patogenicidade — capacidade quantitativa de causar dano ao hospedeiro. Medida pela severidade dos sintomas, taxa de esporulação, período latente. Na teoria gene-por-gene, virulência refere-se à capacidade do patógeno de superar um gene R específico (superação de resistência).",
  },
  {
    term: "Viroide",
    category: "Virologia",
    definition:
      "Agente infeccioso subviral constituído apenas por uma molécula de RNA circular fita simples de 246–399 nucleotídeos, sem capsídeo proteico. Menor agente patogênico conhecido. Replica-se usando RNA-polimerase do hospedeiro. Exemplos: PSTVd (batata), CEVd (citros), CCCVd (coco). Transmitido mecanicamente, por pólen e semente.",
  },
  {
    term: "Zoósporo",
    category: "Stramenopila",
    definition:
      "Esporo assexuado e flagelado de oomicetos (e alguns fungos como Chytridiomycota), capaz de se mover ativamente em água. Em Phytophthora e Pythium, são biflagelados (um flagelo liso e um com mastigonemas). Nadam em água livre do solo ou na superfície foliar molhada até o hospedeiro, onde enquistam e germinam.",
  },
];

export function searchGlossary(query: string): GlossaryTerm[] {
  const q = query.toLowerCase().trim();
  if (!q) return glossaryTerms;
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
  );
}

export const glossaryCategories = [
  ...new Set(glossaryTerms.map((t) => t.category)),
].sort();
