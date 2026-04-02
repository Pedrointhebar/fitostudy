export interface Reference {
  authors: string;
  year: number;
  title: string;
  source: string;
  type: "book" | "article" | "chapter";
  note?: string;
}

export const mainReferences: Reference[] = [
  {
    authors: "AGRIOS, G. N.",
    year: 2005,
    title: "Plant Pathology",
    source: "5. ed. Elsevier Academic Press, Burlington, MA. 922 p.",
    type: "book",
    note: "A obra de referência internacional mais completa em fitopatologia geral.",
  },
  {
    authors: "BERGAMIN FILHO, A.; KIMATI, H.; AMORIM, L. (Eds.)",
    year: 1995,
    title: "Manual de Fitopatologia — Volume 1: Princípios e Conceitos",
    source: "3. ed. Agronômica Ceres, São Paulo. 919 p.",
    type: "book",
    note: "Referência clássica brasileira em fitopatologia.",
  },
  {
    authors: "KIMATI, H.; AMORIM, L.; REZENDE, J. A. M.; BERGAMIN FILHO, A.; CAMARGO, L. E. A. (Eds.)",
    year: 2005,
    title: "Manual de Fitopatologia — Volume 2: Doenças das Plantas Cultivadas",
    source: "4. ed. Agronômica Ceres, São Paulo. 663 p.",
    type: "book",
  },
  {
    authors: "AMORIM, L.; REZENDE, J. A. M.; BERGAMIN FILHO, A.; CAMARGO, L. E. A. (Eds.)",
    year: 2018,
    title: "Manual de Fitopatologia — Volume 1: Princípios e Conceitos",
    source: "5. ed. Agronômica Ceres, Ouro Fino, MG. 573 p.",
    type: "book",
    note: "Edição mais recente do Manual brasileiro, com capítulos atualizados.",
  },
  {
    authors: "VALE, F. X. R.; ZAMBOLIM, L. (Eds.)",
    year: 1997,
    title: "Controle de Doenças de Plantas: Grandes Culturas",
    source: "Viçosa: UFV/Folha de Viçosa. v. 1–2.",
    type: "book",
  },
  {
    authors: "WHITFIELD, A. E.; FALK, B. W.; ROTENBERG, D.",
    year: 2015,
    title: "Insect vector-mediated transmission of plant viruses",
    source: "Virology, v. 479–480, p. 278–289.",
    type: "article",
  },
  {
    authors: "DOI, Y.; TERANAKA, M.; YORA, K.; ASUYAMA, H.",
    year: 1967,
    title: "Mycoplasma- or PLT group-like microorganisms found in the phloem elements of plants infected with mulberry dwarf, potato witches' broom, aster yellows, or paulownia witches' broom",
    source: "Annals of the Phytopathological Society of Japan, v. 33, p. 259–266.",
    type: "article",
    note: "Artigo seminal que descreveu os fitoplasmas (MLOs) pela primeira vez.",
  },
  {
    authors: "FLOR, H. H.",
    year: 1956,
    title: "The complementary genic systems in flax and flax rust",
    source: "Advances in Genetics, v. 8, p. 29–54.",
    type: "article",
    note: "Artigo que estabeleceu a hipótese gene-por-gene.",
  },
  {
    authors: "HUSSEY, R. S.; BARKER, K. R.",
    year: 1973,
    title: "A comparison of methods of collecting inocula of Meloidogyne spp., including a new technique",
    source: "Plant Disease Reporter, v. 57, p. 1025–1028.",
    type: "article",
  },
  {
    authors: "JENKINS, W. R.",
    year: 1964,
    title: "A rapid centrifugal-flotation technique for separating nematodes from soil",
    source: "Plant Disease Reporter, v. 48, p. 692.",
    type: "article",
    note: "Método de extração de nematoides mais utilizado no Brasil.",
  },
];

export const complementaryReferences: Reference[] = [
  {
    authors: "DIENER, T. O.",
    year: 1971,
    title: "Potato spindle tuber 'virus': IV. A replicating, low molecular weight RNA",
    source: "Virology, v. 45, p. 411–428.",
    type: "article",
    note: "Descoberta dos viroides por Diener.",
  },
  {
    authors: "ZAMBOLIM, L.; VALE, F. X. R.; COSTA, H. (Eds.)",
    year: 2000,
    title: "Controle de Doenças de Plantas: Hortaliças",
    source: "Viçosa: UFV/Folha de Viçosa. v. 1–2.",
    type: "book",
  },
  {
    authors: "JONES, J. D. G.; DANGL, J. L.",
    year: 2006,
    title: "The plant immune system",
    source: "Nature, v. 444, p. 323–329.",
    type: "article",
    note: "Revisão fundamental sobre o sistema imune das plantas (PTI e ETI).",
  },
  {
    authors: "VAN LOON, L. C.; REP, M.; PIETERSE, C. M. J.",
    year: 2006,
    title: "Significance of inducible defense-related proteins in infected plants",
    source: "Annual Review of Phytopathology, v. 44, p. 135–162.",
    type: "article",
    note: "Revisão sobre PR-proteínas e SAR.",
  },
  {
    authors: "PURCELL, A. H.; HOPKINS, D. L.",
    year: 1996,
    title: "Fastidious xylem-limited bacterial plant pathogens",
    source: "Annual Review of Phytopathology, v. 34, p. 131–151.",
    type: "article",
  },
  {
    authors: "FERREIRA, F. A.; MILANI, M.; ALFENAS, A. C.",
    year: 2010,
    title: "Fitopatologia: Princípios e Conceitos (Coleção Fitopatologia)",
    source: "Viçosa: UFV. 402 p.",
    type: "book",
  },
  {
    authors: "COOK, R. J.; BAKER, K. F.",
    year: 1983,
    title: "The Nature and Practice of Biological Control of Plant Pathogens",
    source: "APS Press, St. Paul, MN. 539 p.",
    type: "book",
  },
  {
    authors: "FRAC",
    year: 2023,
    title: "FRAC Code List: Fungicide Resistance Action Committee Codes of Fungicides",
    source: "Fungicide Resistance Action Committee (FRAC). Disponível em: www.frac.info",
    type: "article",
    note: "Lista atualizada anualmente dos grupos de fungicidas por modo de ação.",
  },
  {
    authors: "ALFENAS, A. C.; MAFIA, R. G. (Eds.)",
    year: 2016,
    title: "Métodos em Fitopatologia",
    source: "2. ed. Viçosa: UFV. 516 p.",
    type: "book",
    note: "Guia prático de laboratório de fitopatologia.",
  },
  {
    authors: "MICHEREFF, S. J. (Org.)",
    year: 2001,
    title: "Fundamentos de Fitopatologia",
    source: "Recife: UFRPE/IMPRENSA UNIVERSITÁRIA. 268 p.",
    type: "book",
  },
];
