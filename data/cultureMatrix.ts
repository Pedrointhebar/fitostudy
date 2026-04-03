export interface CultureDisease {
  name: string;
  pathogen: string;
  importance: "alta" | "média" | "baixa";
}

export interface CultureEntry {
  culture: string;
  icon: string;
  pathogenGroups: Record<string, CultureDisease[]>;
}

export const pathogenGroupNames: string[] = [
  "Fungos",
  "Oomicetos",
  "Bactérias",
  "Vírus",
  "Nematoides",
  "Fitoplasmas",
  "Outros",
];

export const cultures: CultureEntry[] = [
  {
    culture: "Soja",
    icon: "🟡",
    pathogenGroups: {
      Fungos: [
        { name: "Ferrugem asiática", pathogen: "Phakopsora pachyrhizi", importance: "alta" },
        { name: "Podridão branca", pathogen: "Sclerotinia sclerotiorum", importance: "alta" },
        { name: "Antracnose", pathogen: "Colletotrichum truncatum", importance: "média" },
        { name: "Mancha alvo", pathogen: "Corynespora cassiicola", importance: "média" },
      ],
      Oomicetos: [
        { name: "Míldio da soja", pathogen: "Peronospora manshurica", importance: "baixa" },
        { name: "Podridão radicular", pathogen: "Phytophthora sojae", importance: "alta" },
      ],
      Bactérias: [
        { name: "Crestamento bacteriano", pathogen: "Pseudomonas savastanoi", importance: "baixa" },
      ],
      Vírus: [
        { name: "Mosaico da soja (SMV)", pathogen: "Soybean Mosaic Virus", importance: "média" },
      ],
      Nematoides: [
        { name: "Nematoide de cisto", pathogen: "Heterodera glycines", importance: "alta" },
        { name: "Nematoide das lesões", pathogen: "Pratylenchus brachyurus", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Milho",
    icon: "🌽",
    pathogenGroups: {
      Fungos: [
        { name: "Mancha cinzenta", pathogen: "Cercospora zeae-maydis", importance: "alta" },
        { name: "Ferrugem polissora", pathogen: "Puccinia polysora", importance: "alta" },
        { name: "Mancha de turcicum", pathogen: "Exserohilum turcicum", importance: "média" },
        { name: "Diplodia (podridão da espiga)", pathogen: "Stenocarpella maydis", importance: "alta" },
      ],
      Oomicetos: [
        { name: "Míldio do milho", pathogen: "Peronosclerospora sorghi", importance: "baixa" },
      ],
      Bactérias: [
        { name: "Mancha bacteriana", pathogen: "Pantoea ananatis", importance: "média" },
      ],
      Vírus: [
        { name: "Mosaico rayado (MRFV)", pathogen: "Maize Rayado Fino Virus", importance: "baixa" },
      ],
      Nematoides: [
        { name: "Meloidogyne", pathogen: "Meloidogyne javanica", importance: "baixa" },
      ],
      Fitoplasmas: [
        { name: "Enfezamento do milho", pathogen: "Spiroplasma kunkelii / Fitoplasma", importance: "alta" },
      ],
      Outros: [],
    },
  },
  {
    culture: "Trigo",
    icon: "🌾",
    pathogenGroups: {
      Fungos: [
        { name: "Ferrugem da folha", pathogen: "Puccinia triticina", importance: "alta" },
        { name: "Ferrugem amarela", pathogen: "Puccinia striiformis", importance: "alta" },
        { name: "Septoriose", pathogen: "Zymoseptoria tritici", importance: "alta" },
        { name: "Brusone", pathogen: "Pyricularia oryzae triticum", importance: "alta" },
        { name: "Giberela", pathogen: "Fusarium graminearum", importance: "alta" },
      ],
      Oomicetos: [],
      Bactérias: [
        { name: "Mancha bacteriana", pathogen: "Xanthomonas translucens", importance: "baixa" },
      ],
      Vírus: [
        { name: "Nanismo amarelo da cevada (BYDV)", pathogen: "Barley Yellow Dwarf Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Nematoide do trigo", pathogen: "Heterodera avenae", importance: "baixa" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Tomate",
    icon: "🍅",
    pathogenGroups: {
      Fungos: [
        { name: "Requeima", pathogen: "Phytophthora infestans", importance: "alta" },
        { name: "Pinta-preta", pathogen: "Alternaria solani", importance: "alta" },
        { name: "Mofo cinzento", pathogen: "Botrytis cinerea", importance: "alta" },
        { name: "Septoriose", pathogen: "Septoria lycopersici", importance: "média" },
      ],
      Oomicetos: [
        { name: "Requeima", pathogen: "Phytophthora infestans", importance: "alta" },
        { name: "Tombamento", pathogen: "Pythium spp.", importance: "média" },
      ],
      Bactérias: [
        { name: "Murcha bacteriana", pathogen: "Ralstonia solanacearum", importance: "alta" },
        { name: "Cancro bacteriano", pathogen: "Clavibacter michiganensis", importance: "média" },
        { name: "Mancha bacteriana", pathogen: "Xanthomonas vesicatoria", importance: "alta" },
      ],
      Vírus: [
        { name: "Mosaico do tomateiro (ToMV)", pathogen: "Tomato Mosaic Virus", importance: "alta" },
        { name: "Vira-cabeça (TSWV)", pathogen: "Tomato Spotted Wilt Virus", importance: "alta" },
        { name: "TYLCV (enrolamento foliar)", pathogen: "Tomato Yellow Leaf Curl Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Nematoide-das-galhas", pathogen: "Meloidogyne incognita", importance: "alta" },
      ],
      Fitoplasmas: [
        { name: "Superbrotamento", pathogen: "Fitoplasma do tomateiro", importance: "baixa" },
      ],
      Outros: [],
    },
  },
  {
    culture: "Batata",
    icon: "🥔",
    pathogenGroups: {
      Fungos: [
        { name: "Pinta-preta", pathogen: "Alternaria solani", importance: "alta" },
        { name: "Sarna comum", pathogen: "Streptomyces scabiei", importance: "média" },
      ],
      Oomicetos: [
        { name: "Requeima", pathogen: "Phytophthora infestans", importance: "alta" },
      ],
      Bactérias: [
        { name: "Podridão mole", pathogen: "Pectobacterium atrosepticum", importance: "alta" },
        { name: "Murcha bacteriana", pathogen: "Ralstonia solanacearum", importance: "alta" },
      ],
      Vírus: [
        { name: "PVY (mosaico Y)", pathogen: "Potato Virus Y", importance: "alta" },
        { name: "PLRV (enrolamento foliar)", pathogen: "Potato Leafroll Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Nematoide de cisto dourado", pathogen: "Globodera rostochiensis", importance: "alta" },
        { name: "Nematoide de cisto pálido", pathogen: "Globodera pallida", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Videira",
    icon: "🍇",
    pathogenGroups: {
      Fungos: [
        { name: "Oídio", pathogen: "Erysiphe necator", importance: "alta" },
        { name: "Mofo cinzento", pathogen: "Botrytis cinerea", importance: "alta" },
        { name: "Antracnose", pathogen: "Elsinoë ampelina", importance: "média" },
        { name: "Eutipiose", pathogen: "Eutypa lata", importance: "alta" },
      ],
      Oomicetos: [
        { name: "Míldio", pathogen: "Plasmopara viticola", importance: "alta" },
      ],
      Bactérias: [],
      Vírus: [
        { name: "Vírus do enrolamento foliar (GLRaV)", pathogen: "Grapevine Leafroll-associated Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Xiphinema (vetor de vírus)", pathogen: "Xiphinema index", importance: "média" },
      ],
      Fitoplasmas: [
        { name: "Flavescência dourada", pathogen: "'Ca. Phytoplasma vitis'", importance: "alta" },
      ],
      Outros: [],
    },
  },
  {
    culture: "Citros",
    icon: "🍊",
    pathogenGroups: {
      Fungos: [
        { name: "Melanose", pathogen: "Diaporthe citri", importance: "média" },
        { name: "Verrugose", pathogen: "Elsinoë fawcettii", importance: "média" },
      ],
      Oomicetos: [
        { name: "Gomose de Phytophthora", pathogen: "Phytophthora parasitica", importance: "alta" },
      ],
      Bactérias: [
        { name: "Cancro cítrico", pathogen: "Xanthomonas citri subsp. citri", importance: "alta" },
        { name: "Clorose variegada (CVC)", pathogen: "Xylella fastidiosa", importance: "alta" },
      ],
      Vírus: [
        { name: "Tristeza dos citros (CTV)", pathogen: "Citrus Tristeza Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Nematoide reniforme", pathogen: "Tylenchulus semipenetrans", importance: "alta" },
      ],
      Fitoplasmas: [
        { name: "HLB / Greening", pathogen: "'Ca. Liberibacter asiaticus'", importance: "alta" },
      ],
      Outros: [],
    },
  },
  {
    culture: "Café",
    icon: "☕",
    pathogenGroups: {
      Fungos: [
        { name: "Ferrugem do café", pathogen: "Hemileia vastatrix", importance: "alta" },
        { name: "Cercosporiose", pathogen: "Cercospora coffeicola", importance: "alta" },
        { name: "Phoma (mancha manteigosa)", pathogen: "Ascochyta tarda", importance: "média" },
      ],
      Oomicetos: [],
      Bactérias: [],
      Vírus: [],
      Nematoides: [
        { name: "Nematoide-das-galhas", pathogen: "Meloidogyne exigua", importance: "alta" },
        { name: "Meloidogyne paranaensis", pathogen: "Meloidogyne paranaensis", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Banana",
    icon: "🍌",
    pathogenGroups: {
      Fungos: [
        { name: "Sigatoka-negra", pathogen: "Mycosphaerella fijiensis", importance: "alta" },
        { name: "Sigatoka-amarela", pathogen: "Mycosphaerella musicola", importance: "alta" },
        { name: "Murcha de Fusarium (Mal do Panamá)", pathogen: "Fusarium oxysporum f.sp. cubense", importance: "alta" },
        { name: "Antracnose pós-colheita", pathogen: "Colletotrichum musae", importance: "média" },
      ],
      Oomicetos: [],
      Bactérias: [
        { name: "Moko bacteriano", pathogen: "Ralstonia solanacearum (biovar 1/2)", importance: "alta" },
      ],
      Vírus: [
        { name: "BSV (vírus da estria)", pathogen: "Banana Streak Virus", importance: "média" },
      ],
      Nematoides: [
        { name: "Nematoide das lesões", pathogen: "Pratylenchus coffeae", importance: "alta" },
        { name: "Nematoide da espiral", pathogen: "Radopholus similis", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Cacau",
    icon: "🍫",
    pathogenGroups: {
      Fungos: [
        { name: "Vassoura-de-bruxa", pathogen: "Moniliophthora perniciosa", importance: "alta" },
        { name: "Monilíase (podridão parda)", pathogen: "Moniliophthora roreri", importance: "alta" },
        { name: "Podridão preta", pathogen: "Phytophthora palmivora", importance: "alta" },
      ],
      Oomicetos: [
        { name: "Podridão preta", pathogen: "Phytophthora palmivora", importance: "alta" },
      ],
      Bactérias: [],
      Vírus: [],
      Nematoides: [],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Arroz",
    icon: "🍚",
    pathogenGroups: {
      Fungos: [
        { name: "Brusone", pathogen: "Pyricularia oryzae", importance: "alta" },
        { name: "Helmintosporiose", pathogen: "Cochliobolus miyabeanus", importance: "média" },
        { name: "Podridão do colmo", pathogen: "Sarocladium oryzae", importance: "baixa" },
      ],
      Oomicetos: [
        { name: "Míldio do arroz", pathogen: "Sclerophthora macrospora", importance: "baixa" },
      ],
      Bactérias: [
        { name: "Queima bacteriana", pathogen: "Xanthomonas oryzae", importance: "alta" },
      ],
      Vírus: [
        { name: "Tungro", pathogen: "Rice Tungro Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Nematoide do caule", pathogen: "Ditylenchus angustus", importance: "baixa" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Feijão",
    icon: "🫘",
    pathogenGroups: {
      Fungos: [
        { name: "Antracnose", pathogen: "Colletotrichum lindemuthianum", importance: "alta" },
        { name: "Mancha angular", pathogen: "Phaeoisariopsis griseola", importance: "alta" },
        { name: "Ferrugem", pathogen: "Uromyces appendiculatus", importance: "alta" },
        { name: "Mofo branco", pathogen: "Sclerotinia sclerotiorum", importance: "alta" },
      ],
      Oomicetos: [],
      Bactérias: [
        { name: "Crestamento bacteriano comum", pathogen: "Xanthomonas axonopodis", importance: "alta" },
      ],
      Vírus: [
        { name: "Mosaico dourado (BGMV)", pathogen: "Bean Golden Mosaic Virus", importance: "alta" },
      ],
      Nematoides: [
        { name: "Nematoide-das-galhas", pathogen: "Meloidogyne incognita", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Algodão",
    icon: "🌸",
    pathogenGroups: {
      Fungos: [
        { name: "Ramulose", pathogen: "Colletotrichum gossypii var. cephalosporioides", importance: "alta" },
        { name: "Ramulária (mancha branca)", pathogen: "Ramularia areola", importance: "alta" },
        { name: "Fusariose (murcha)", pathogen: "Fusarium oxysporum f.sp. vasinfectum", importance: "alta" },
      ],
      Oomicetos: [],
      Bactérias: [
        { name: "Angular (mancha angular)", pathogen: "Xanthomonas citri subsp. malvacearum", importance: "alta" },
      ],
      Vírus: [],
      Nematoides: [
        { name: "Nematoide reniforme", pathogen: "Rotylenchulus reniformis", importance: "alta" },
        { name: "Meloidogyne", pathogen: "Meloidogyne incognita", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Cana-de-açúcar",
    icon: "🎋",
    pathogenGroups: {
      Fungos: [
        { name: "Ferrugem marrom", pathogen: "Puccinia melanocephala", importance: "alta" },
        { name: "Ferrugem laranja", pathogen: "Puccinia kuehnii", importance: "alta" },
        { name: "Carvão", pathogen: "Sporisorium scitamineum", importance: "alta" },
        { name: "Podridão vermelha", pathogen: "Colletotrichum falcatum", importance: "média" },
      ],
      Oomicetos: [],
      Bactérias: [
        { name: "Escaldadura das folhas", pathogen: "Xanthomonas albilineans", importance: "alta" },
        { name: "Raquitismo das soqueiras (RSD)", pathogen: "Leifsonia xyli subsp. xyli", importance: "alta" },
      ],
      Vírus: [
        { name: "Mosaico da cana (SCMV)", pathogen: "Sugarcane Mosaic Virus", importance: "média" },
      ],
      Nematoides: [
        { name: "Nematoide das lesões", pathogen: "Pratylenchus zeae", importance: "alta" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
  {
    culture: "Eucalipto",
    icon: "🌳",
    pathogenGroups: {
      Fungos: [
        { name: "Cancro (Cryphonectria)", pathogen: "Cryphonectria cubensis", importance: "alta" },
        { name: "Mancha de Cylindrocladium", pathogen: "Calonectria pteridis", importance: "alta" },
        { name: "Míldio do eucalipto", pathogen: "Oidium sp.", importance: "baixa" },
      ],
      Oomicetos: [],
      Bactérias: [
        { name: "Murcha bacteriana", pathogen: "Ralstonia solanacearum", importance: "alta" },
      ],
      Vírus: [],
      Nematoides: [
        { name: "Nematoide-das-galhas", pathogen: "Meloidogyne javanica", importance: "média" },
      ],
      Fitoplasmas: [],
      Outros: [],
    },
  },
];
