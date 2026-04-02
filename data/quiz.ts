export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question:
      "No modelo do triângulo da doença, qual dos seguintes elementos NÃO faz parte dos três vértices essenciais?",
    options: [
      "Hospedeiro suscetível",
      "Patógeno virulento",
      "Vetor competente",
      "Ambiente favorável",
    ],
    correctIndex: 2,
    topic: "Epidemiologia",
    explanation:
      "O triângulo da doença é composto por três vértices: hospedeiro suscetível, patógeno virulento e ambiente favorável. O vetor pode ser um fator importante em algumas doenças, mas não é um dos três componentes essenciais do triângulo. Sem a presença simultânea dos três vértices, a doença não ocorre ou ocorre com baixa intensidade.",
  },
  {
    id: "q2",
    question:
      "Por que fungicidas do grupo dos triazóis (inibidores de DMI) são ineficazes no controle de Phytophthora infestans?",
    options: [
      "Porque Phytophthora possui enzima CYP51 mutante resistente a triazóis",
      "Porque Phytophthora pertence ao reino Stramenopila e não possui ergosterol na membrana",
      "Porque triazóis são inativados pelo solo antes de atingir as raízes",
      "Porque Phytophthora é endoparasita e não é exposta ao fungicida",
    ],
    correctIndex: 1,
    topic: "Stramenopila",
    explanation:
      "Os triazóis inibem a enzima CYP51 responsável pela síntese de ergosterol. No entanto, Phytophthora e demais oomicetos pertencem ao reino Stramenopila — são mais relacionados a algas do que a fungos — e possuem colesterol (não ergosterol) em sua membrana. Como não produzem ergosterol, os triazóis não têm alvo funcional e são completamente ineficazes. Para oomicetos, utilizam-se metalaxil, fosetil-Al e carboxamidas específicas.",
  },
  {
    id: "q3",
    question:
      "Em fitopatologia, a diferença fundamental entre 'sintoma' e 'sinal' é:",
    options: [
      "Sintoma é sempre visível a olho nu; sinal requer microscópio",
      "Sinal é a resposta fisiológica da planta; sintoma é a estrutura do patógeno",
      "Sintoma é a resposta da planta ao patógeno; sinal é a estrutura visível do próprio patógeno",
      "Sintoma ocorre antes da penetração; sinal ocorre após a colonização",
    ],
    correctIndex: 2,
    topic: "Sintomatologia",
    explanation:
      "Sintoma é qualquer alteração morfológica ou fisiológica da planta em resposta ao patógeno (clorose, necrose, murcha, hipertrofia). Sinal é a estrutura do próprio patógeno visível sobre o hospedeiro (esporos de ferrugem, micélio de oídio, exsudato bacteriano). As pústulas laranjas da ferrugem são sinais (urediniósporos do fungo); o amarelamento ao redor é sintoma (resposta da planta).",
  },
  {
    id: "q4",
    question:
      "A razão pela qual os fitoplasmas recebem o status de nomenclatura 'Candidatus' é porque:",
    options: [
      "São recém-descobertos e ainda em processo de descrição formal",
      "Não podem ser cultivados in vitro, impossibilitando o depósito em coleção exigido pelo ICNP",
      "Possuem genoma reduzido demais para ser classificados como procariotos",
      "Causam sintomas idênticos aos de vírus, tornando sua identidade incerta",
    ],
    correctIndex: 1,
    topic: "Micoplasmas",
    explanation:
      "O Código Internacional de Nomenclatura de Procariotos (ICNP) exige cultura pura e depósito em coleção de culturas para nomenclatura formal. Os fitoplasmas são organismos intracelulares obrigatórios do floema, incapazes de crescer em meios artificiais (sem parede celular, metabolismo reduzido). Por isso, recebem o status provisório 'Candidatus' — nomenclatura aceita pelo ICNP para procariotos não cultiváveis. Ex: 'Candidatus Phytoplasma mali'.",
  },
  {
    id: "q5",
    question:
      "O que é 'damping-off' (tombamento) e quais agentes são mais frequentemente responsáveis?",
    options: [
      "Murcha irreversível em plantas adultas, causada por Fusarium oxysporum e Verticillium",
      "Podridão de raízes em plantas com sistema radicular profundo, causada por Phytophthora",
      "Tombamento de plântulas por estrangulamento do colo, causado principalmente por Pythium spp. e Rhizoctonia solani",
      "Seca de ramos na parte aérea, causada por bactérias do gênero Pseudomonas",
    ],
    correctIndex: 2,
    topic: "Stramenopila / Fungos",
    explanation:
      "Damping-off é o tombamento de plântulas em viveiros e sementeiras. Na forma pós-emergência, os agentes causam estrangulamento e colapso do colo, fazendo a plântula tombar como se cortada. Os principais agentes são Pythium spp. (oomiceto — favorecido por solo encharcado) e Rhizoctonia solani (basidiomiceto — favorecido por solo úmido e temperatura amena). Fusarium também pode estar envolvido. Controle: metalaxil (Pythium), captan/thiram (Rhizoctonia), drenagem do substrato.",
  },
  {
    id: "q6",
    question:
      "Qual é o estágio de desenvolvimento de Meloidogyne spp. que é infectante e se move livremente no solo para penetrar raízes?",
    options: [
      "Jovem de primeiro estádio (J1) — recém-eclodido do ovo",
      "Jovem de segundo estádio (J2) — após a primeira ecdise",
      "Jovem de terceiro estádio (J3) — após estabelecimento no tecido",
      "Fêmea adulta — após completar o desenvolvimento",
    ],
    correctIndex: 1,
    topic: "Nematoides",
    explanation:
      "O J2 (juvenil de 2º estádio) é o único estágio infectante de Meloidogyne. Após a primeira ecdise (muda) que ocorre dentro do ovo, o J2 eclode e migra livremente no solo. Penetra nas raízes próximo à zona de elongação, migra intercelularmente até o cilindro vascular e induz a formação de células gigantes (células nutrivas). O J1 permanece dentro do ovo; J3 e J4 são sedentários nos tecidos; fêmeas adultas são imóveis.",
  },
  {
    id: "q7",
    question:
      "O Sistema de Secreção Tipo III (T3SS) — chamado de 'seringa molecular' — é característica de virulência de qual grupo de patógenos de plantas?",
    options: [
      "Fungos necrotróficos (como Botrytis cinerea e Alternaria spp.)",
      "Oomicetos (como Phytophthora infestans e Pythium spp.)",
      "Bactérias gram-negativas (como Xanthomonas, Pseudomonas, Ralstonia)",
      "Vírus transmitidos por mosca-branca (como geminivírus)",
    ],
    correctIndex: 2,
    topic: "Bactérias",
    explanation:
      "O T3SS é uma estrutura proteica em forma de agulha presente exclusivamente em bactérias gram-negativas fitopatogênicas (Xanthomonas, Pseudomonas syringae, Ralstonia solanacearum, Erwinia). Injeta proteínas efetoras diretamente no citoplasma da célula vegetal, suprimindo a imunidade inata da planta (PTI — Pattern Triggered Immunity). Mutantes de T3SS perdem a patogenicidade, demonstrando sua importância central na virulência bacteriana.",
  },
  {
    id: "q8",
    question:
      "A principal diferença entre resistência vertical (qualitativa) e resistência horizontal (quantitativa) é:",
    options: [
      "Resistência vertical é mais durável no campo; horizontal é mais fácil de ser superada por novas raças",
      "Resistência vertical é monogênica, específica a certas raças e instável; horizontal é poligênica, de amplo espectro e mais estável",
      "Resistência vertical protege contra todos os agentes; horizontal é específica para fungos",
      "Resistência horizontal envolve o gene R e reação de hipersensibilidade; vertical envolve múltiplos QTL",
    ],
    correctIndex: 1,
    topic: "Interações",
    explanation:
      "Resistência vertical (qualitativa): controlada por poucos genes (geralmente um gene R dominante), específica a determinadas raças do patógeno, expressão tudo-ou-nada (imune vs. suscetível), instável pois o patógeno pode superar por mutação no gene Avr correspondente (teoria gene-por-gene de Flor, 1956). Resistência horizontal (quantitativa): poligênica (vários QTL de pequeno efeito), efetiva contra todas as raças, expressão gradual (reduz severidade), mais estável e durável no campo — preferida em programas de melhoramento de longo prazo.",
  },
];

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
