/**
 * Cronograma Tático de Estudos PC-BA
 * Período: 28 de Setembro a 30 de Novembro (64 dias)
 * Edital Verticalizado Completo e Persistência LocalStorage
 */

// 1. Base de dados dos 64 dias
const studyScheduleData = [
  // --- SEMANA 1: 28/09 a 04/10 • Fundamentos de Alto Peso ---
  {
    day: 1,
    date: "28/09/2026",
    weekday: "Segunda-feira",
    week: 1,
    theme: "Teoria do Crime & Semântica e Interpretação",
    subjects: [
      {
        name: "Direito Penal",
        weight: "🔥 31% da prova",
        isHigh: true,
        topics: [
          "Teoria do Crime: Conceito analítico de crime (Fato Típico, Ilicitude e Culpabilidade)",
          "Fato Típico: Conduta (dolosa e culposa), Resultado e Relação de Causalidade (nexo causal)",
          "Tipicidade formal e material (Princípio da Insignificância)",
          "Exercícios: 20 questões sobre conduta, dolo e nexo causal"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "🔥 27% da prova",
        isHigh: true,
        topics: [
          "Semântica: Significação das palavras (sinonímia, antonímia, paronímia e homonímia)",
          "Sentido próprio e figurado (denotação e conotação)",
          "Compreensão e Interpretação de textos: inferências e pressupostos",
          "Exercícios: 15 questões de Semântica e Interpretação de bancas policiais"
        ]
      }
    ],
    defaultQuestions: 35,
    notes: ""
  },
  {
    day: 2,
    date: "29/09/2026",
    weekday: "Terça-feira",
    week: 1,
    theme: "Art. 5º CF/88 & Inquérito Policial",
    subjects: [
      {
        name: "Direito Constitucional",
        weight: "🔥 22% da matéria",
        isHigh: true,
        topics: [
          "Art. 5º da CF: Direitos e Deveres Individuais e Coletivos (incisos I a XXX)",
          "Direito à vida, liberdade, igualdade, segurança e propriedade",
          "Inviolabilidade de domicílio, sigilo de correspondência e de comunicações",
          "Exercícios: 20 questões sobre Art. 5º da CF/88"
        ]
      },
      {
        name: "Processo Penal",
        weight: "🔥 27% da matéria",
        isHigh: true,
        topics: [
          "Inquérito Policial: Conceito, natureza jurídica e características (escrito, sigiloso, inquisitivo, etc.)",
          "Notitia criminis e formas de instauração do IP",
          "Prazos do Inquérito Policial (CPP x Leis Especiais - réu preso e solto)",
          "Exercícios: 20 questões sobre características e instauração de IP"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 3,
    date: "30/09/2026",
    weekday: "Quarta-feira",
    week: 1,
    theme: "Organização Administrativa & Lógica Proposicional",
    subjects: [
      {
        name: "Direito Administrativo",
        weight: "🔥 50% em provas",
        isHigh: true,
        topics: [
          "Organização Administrativa: Administração Direta e Indireta",
          "Desconcentração x Descentralização",
          "Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista",
          "Exercícios: 20 questões de Organização Administrativa"
        ]
      },
      {
        name: "Raciocínio Lógico",
        weight: "🔥 +50% do edital",
        isHigh: true,
        topics: [
          "Lógica Proposicional: Proposições simples e compostas",
          "Conectivos lógicos fundamentais (conjunção, disjunção, condicional, bicondicional)",
          "Construção e leitura da Tabela-Verdade",
          "Exercícios: 20 questões de conectivos e tabelas-verdade"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 4,
    date: "01/10/2026",
    weekday: "Quinta-feira",
    week: 1,
    theme: "Art. 5º Remédios Constitucionais & Inquérito Policial Diligências",
    subjects: [
      {
        name: "Direito Constitucional",
        weight: "🔥 22% da matéria",
        isHigh: true,
        topics: [
          "Art. 5º da CF (parte 2): Incisos XXXI a LXXVIII",
          "Remédios Constitucionais: Habeas Corpus, Mandado de Segurança, Mandado de Injunção, Habeas Data e Ação Popular",
          "Tribunal do Júri e garantias fundamentais do processo penal na CF",
          "Exercícios: 20 questões sobre Remédios Constitucionais"
        ]
      },
      {
        name: "Processo Penal",
        weight: "🔥 27% da matéria",
        isHigh: true,
        topics: [
          "Diligências investigatórias no IP (art. 6º do CPP)",
          "Indiciamento policial e reprodução simulada dos fatos",
          "Arquivamento do IP (regras tradicionais e pacote anticrime / suspensão STF)",
          "Exercícios: 20 questões sobre conclusão e arquivamento de IP"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 5,
    date: "02/10/2026",
    weekday: "Sexta-feira",
    week: 1,
    theme: "Ilicitude, Culpabilidade & Segurança da Informação",
    subjects: [
      {
        name: "Direito Penal",
        weight: "🔥 31% da prova",
        isHigh: true,
        topics: [
          "Excludentes de Ilicitude (legítima defesa, estado de necessidade, estrito cumprimento e exercício regular)",
          "Culpabilidade: Imputabilidade, Potencial Consciência da Ilicitude e Exigibilidade de Conduta Diversa",
          "Consumação e Tentativa (iter criminis, desistência voluntária e arrependimento eficaz)",
          "Exercícios: 25 questões sobre excludentes de ilicitude e culpabilidade"
        ]
      },
      {
        name: "Informática",
        weight: "⭐ 17% do edital",
        isHigh: false,
        topics: [
          "Segurança da Informação: Princípios (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não-repúdio)",
          "Malwares: Vírus, Worms, Trojans, Ransomware, Spyware, Rootkits",
          "Golpes na internet: Phishing, Pharming, Engenharia Social",
          "Exercícios: 20 questões de Segurança da Informação"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 6,
    date: "03/10/2026",
    weekday: "Sábado",
    week: 1,
    theme: "Legislação Estadual PC-BA & Estatística: Tipos de Variáveis",
    subjects: [
      {
        name: "Legislação Estadual",
        weight: "⭐ Requisito Obrigatório",
        isHigh: false,
        topics: [
          "Estatuto da Polícia Civil da Bahia (Lei Estadual nº 11.370/2009 e alterações): Princípios, estrutura e cargos",
          "Direitos, deveres, prerrogativas e regime disciplinar dos policiais civis da Bahia",
          "Estatuto dos Servidores Públicos Civis da BA (Lei Estadual nº 6.677/1994 - pontos fundamentais)",
          "Exercícios: 20 questões da legislação estadual PC-BA"
        ]
      },
      {
        name: "Estatística Descritiva",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Tipos de variáveis: Qualitativas (nominais e ordinais) e Quantitativas (discretas e contínuas)",
          "Visualização gráfica de dados: Gráficos adequados para cada variável (barras, setores, histograma)",
          "Exercícios: 15 questões de classificação de variáveis e gráficos"
        ]
      }
    ],
    defaultQuestions: 35,
    notes: ""
  },
  {
    day: 7,
    date: "04/10/2026",
    weekday: "Domingo",
    week: 1,
    theme: "Simulado 01 & Revisão Ativa da Semana 1",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Fixação Semanal",
        isHigh: true,
        topics: [
          "Simulado Semanal 1: Resolver 60 questões abrangendo Teoria do Crime, Art. 5º CF, IP, Org. Administrativa e Semântica",
          "Caderno de Erros: Análise detalhada de cada questão errada ou em dúvida",
          "Revisão rápida de mapas mentais e flashcards das matérias da Semana 1"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 2: 05/10 a 11/10 • Provas, Sintaxe e Crimes ---
  {
    day: 8,
    date: "05/10/2026",
    weekday: "Segunda-feira",
    week: 2,
    theme: "Crimes contra a Pessoa & Morfologia (Classes de Palavras)",
    subjects: [
      {
        name: "Direito Penal",
        weight: "🔥 23% da prova",
        isHigh: true,
        topics: [
          "Homicídio (art. 121): Simples, privilegiado, qualificado e feminicídio",
          "Infanticídio, aborto e induzimento/instigação ao suicídio ou automutilação",
          "Lesão Corporal (art. 129): Leve, grave, gravíssima, seguida de morte e violência doméstica",
          "Exercícios: 25 questões sobre Crimes contra a Vida e Lesões Corporais"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "⭐ 13% da prova",
        isHigh: false,
        topics: [
          "Morfologia: Classes de palavras (Substantivo, Adjetivo, Pronome e Verbo)",
          "Emprego e colocação dos pronomes demonstrativos e relativos",
          "Conjugação verbal, tempos e modos (correlação verbal)",
          "Exercícios: 20 questões sobre classes de palavras"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 9,
    date: "06/10/2026",
    weekday: "Terça-feira",
    week: 2,
    theme: "Teoria Geral das Provas & Licitações (Lei 14.133/21)",
    subjects: [
      {
        name: "Processo Penal",
        weight: "🔥 40% da matéria",
        isHigh: true,
        topics: [
          "Teoria Geral da Prova: Objeto, meios de prova e meios de obtenção de prova",
          "Provas ilícitas e teoria dos frutos da árvore envenenada (*fruits of the poisonous tree*)",
          "Cadeia de Custódia (arts. 158-A a 158-F do CPP): Etapas fundamentais",
          "Exercícios: 25 questões sobre provas ilícitas e cadeia de custódia"
        ]
      },
      {
        name: "Direito Administrativo",
        weight: "🔥 50% em provas",
        isHigh: true,
        topics: [
          "Nova Lei de Licitações (Lei nº 14.133/2021): Princípios fundamentais e âmbito de aplicação",
          "Modalidades de licitação: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo",
          "Critérios de julgamento",
          "Exercícios: 20 questões sobre modalidades e princípios da Lei 14.133/21"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 10,
    date: "07/10/2026",
    weekday: "Quarta-feira",
    week: 2,
    theme: "Sintaxe da Oração e do Período & RLM Equivalências",
    subjects: [
      {
        name: "Língua Portuguesa",
        weight: "🔥 20% da prova",
        isHigh: true,
        topics: [
          "Sintaxe da Oração: Termos essenciais, integrantes e acessórios",
          "Transitividade verbal e complementos verbais (objeto direto e indireto)",
          "Período Composto: Orações coordenadas e orações subordinadas substantivas",
          "Exercícios: 20 questões de sintaxe e classificação de orações"
        ]
      },
      {
        name: "Raciocínio Lógico",
        weight: "🔥 +50% do edital",
        isHigh: true,
        topics: [
          "Equivalências Lógicas da Condicional (p -> q <=> ~q -> ~p e ~p v q)",
          "Negação de proposições compostas (Leis de De Morgan e negação do Se... Então)",
          "Negação de quantificadores (Todo, Nenhum, Algum)",
          "Exercícios: 25 questões de equivalências e negações"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 11,
    date: "08/10/2026",
    weekday: "Quinta-feira",
    week: 2,
    theme: "Espécies de Provas no CPP & Atos Administrativos",
    subjects: [
      {
        name: "Processo Penal",
        weight: "🔥 40% da matéria",
        isHigh: true,
        topics: [
          "Perícia e Exame de Corpo de Delito (art. 158 a 184 do CPP)",
          "Interrogatório do acusado e Confissão",
          "Prova Testemunhal e Reconhecimento de pessoas e coisas",
          "Busca e Apreensão domiciliar e pessoal",
          "Exercícios: 25 questões sobre espécies de prova no CPP"
        ]
      },
      {
        name: "Direito Administrativo",
        weight: "⭐ 17% da matéria",
        isHigh: false,
        topics: [
          "Atos Administrativos: Conceito, requisitos de validade (Competência, Finalidade, Forma, Motivo e Objeto)",
          "Atributos do Ato: Presunção de legitimidade, Imperatividade, Autoexecutoriedade e Tipicidade",
          "Extinção dos atos: Revogação x Anulação e Convalidação",
          "Exercícios: 20 questões de Atos Administrativos"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 12,
    date: "09/10/2026",
    weekday: "Sexta-feira",
    week: 2,
    theme: "Organização do Estado & Internet e Navegadores",
    subjects: [
      {
        name: "Direito Constitucional",
        weight: "⭐ 17% da matéria",
        isHigh: false,
        topics: [
          "Organização Político-Administrativa: União, Estados, DF e Municípios",
          "Repartição de Competências: Competências exclusivas, privativas, comuns e concorrentes",
          "Bens dos Estados e da União",
          "Exercícios: 20 questões sobre repartição constitucional de competências"
        ]
      },
      {
        name: "Informática",
        weight: "⭐ 16% da prova",
        isHigh: false,
        topics: [
          "Internet e Intranet: Conceitos, diferenças e protocolos (TCP/IP, HTTP, HTTPS, FTP, DNS, DHCP)",
          "Navegadores web (Google Chrome, Mozilla Firefox, Microsoft Edge): Recursos, navegação anônima e atalhos",
          "Exercícios: 20 questões sobre redes, internet e navegadores"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 13,
    date: "10/10/2026",
    weekday: "Sábado",
    week: 2,
    theme: "Medicina Legal: Documentos & Estatística: Tabelas e Médias",
    subjects: [
      {
        name: "Medicina Legal",
        weight: "⭐ Tópico Específico",
        isHigh: false,
        topics: [
          "Documentos Médico-Legais: Laudo pericial, Parecer, Atestado e Relatório",
          "Estrutura do documento médico-legal: Preâmbulo, Quesitos, Histórico, Discussão, Conclusão e Resposta aos quesitos",
          "Diferenças entre perícia oficial, perito louvado e assistente técnico",
          "Exercícios: 15 questões sobre documentos médico-legais"
        ]
      },
      {
        name: "Estatística Descritiva",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Tabelas e séries estatísticas: Distribuição de frequência simples e por classes",
          "Medidas de Tendência Central: Média aritmética simples e ponderada",
          "Moda (bruta e Czuber) e Mediana (cálculo para dados agrupados e não agrupados)",
          "Exercícios: 20 questões de médias, moda e mediana"
        ]
      }
    ],
    defaultQuestions: 35,
    notes: ""
  },
  {
    day: 14,
    date: "11/10/2026",
    weekday: "Domingo",
    week: 2,
    theme: "Simulado 02 & Revisão de Provas e Licitações",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Fixação Semanal",
        isHigh: true,
        topics: [
          "Simulado Semanal 2: 60 questões focadas em Provas no CPP, Lei 14.133/21, Homicídio e Sintaxe",
          "Análise dos pontos fracos e registro no Caderno de Erros",
          "Revisão de mapas mentais sobre Atos Administrativos e Conectivos Lógicos"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 3: 12/10 a 18/10 • Licitações, Prisões e Informática ---
  {
    day: 15,
    date: "12/10/2026",
    weekday: "Segunda-feira",
    week: 3,
    theme: "Crimes contra a Administração Pública & Sintaxe Período Composto",
    subjects: [
      {
        name: "Direito Penal",
        weight: "🔥 16% da prova",
        isHigh: true,
        topics: [
          "Crimes Praticados por Funcionário Público: Peculato (próprio, impróprio, culposo, mediante erro de outrem)",
          "Concussão x Corrupção Passiva x Excesso de Exação",
          "Prevaricação e Condescendência Criminosa",
          "Crimes Praticados por Particular contra a Administração (Corrupção ativa, desacato, desobediência)",
          "Exercícios: 25 questões sobre Crimes contra a Adm Pública"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "🔥 20% da prova",
        isHigh: true,
        topics: [
          "Orações Subordinadas Adjetivas (explicativas x restritivas)",
          "Orações Subordinadas Adverbiais (causal, consecutiva, concessiva, condicional, temporal, etc.)",
          "Pontuação: Emprego da vírgula no período simples e composto",
          "Exercícios: 20 questões sobre orações adverbiais e pontuação"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 16,
    date: "13/10/2026",
    weekday: "Terça-feira",
    week: 3,
    theme: "Prisões no CPP & Contratação Direta (Lei 14.133/21)",
    subjects: [
      {
        name: "Processo Penal",
        weight: "🔥 20% da matéria",
        isHigh: true,
        topics: [
          "Prisão em Flagrante: Espécies (próprio, impróprio, ficto, preparado, esperado e prorrogado)",
          "Audiência de Custódia e formalidades da lavratura do Auto de Prisão em Flagrante (APF)",
          "Prisão Preventiva (requisitos, fundamentos e prazo) e Prisão Temporária (Lei 7.960/89)",
          "Exercícios: 25 questões sobre Prisões cautelares"
        ]
      },
      {
        name: "Direito Administrativo",
        weight: "🔥 50% em provas",
        isHigh: true,
        topics: [
          "Contratação Direta na Lei 14.133/21: Inexigibilidade de Licitação (art. 74) - rol exemplificativo",
          "Dispensa de Licitação (art. 75) - rol taxativo e hipóteses por valor e emergência",
          "Contratos Administrativos: Cláusulas exorbitantes, alteração unilateral e rescisão",
          "Exercícios: 25 questões sobre contratação direta e contratos"
        ]
      }
    ],
    defaultQuestions: 50,
    notes: ""
  },
  {
    day: 17,
    date: "14/10/2026",
    weekday: "Quarta-feira",
    week: 3,
    theme: "Segurança Pública (Art. 144 CF) & RLM Relações de Associação",
    subjects: [
      {
        name: "Direito Constitucional",
        weight: "🔥 17% da matéria",
        isHigh: true,
        topics: [
          "Defesa do Estado e das Instituições Democráticas: Segurança Pública (Art. 144 da CF)",
          "Órgãos da Segurança Pública (Polícia Federal, PRF, PFF, Polícias Civis, Militares, Corpos de Bombeiros e Polícias Penais)",
          "Atribuições e regime constitucional das Polícias Civis e Guardas Municipais (jurisprudência STF)",
          "Exercícios: 20 questões sobre Art. 144 da CF"
        ]
      },
      {
        name: "Raciocínio Lógico",
        weight: "🔥 +50% do edital",
        isHigh: true,
        topics: [
          "Relações entre Pessoas, Objetos e Lugares (problemas de associação lógica)",
          "Construção de matrizes de decisão para relacionar elementos",
          "Problemas com verdades e mentiras",
          "Exercícios: 20 questões de associação lógica e correlação de elementos"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 18,
    date: "15/10/2026",
    weekday: "Quinta-feira",
    week: 3,
    theme: "Lei Maria da Penha (Lei 11.340/2006) & Lei de Tortura (Lei 9.455/1995)",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Alta Frequência",
        isHigh: true,
        topics: [
          "Lei Maria da Penha (Lei 11.340/2006): Âmbito de aplicação, união estável e relações íntimas",
          "Formas de violência doméstica: Física, psicológica, sexual, moral e patrimonial (detalhe patrimonial: retenção de docs, cartão bancário)",
          "Medidas Protetivas de Urgência concedidas pelo juiz ou aplicadas pelo Delegado/policial",
          "Lei de Tortura (Lei 9.455/1995): Tortura-prova, tortura-crime, tortura-castigo, tortura pela omissão e efeitos da condenação",
          "Exercícios: 25 questões sobre Maria da Penha e Lei de Tortura"
        ]
      },
      {
        name: "Informática",
        weight: "⭐ 17% do edital",
        isHigh: false,
        topics: [
          "Sistemas Operacionais: Conceitos de Windows 10/11 e Linux",
          "Gerenciamento de arquivos, pastas e permissões",
          "Principais comandos do terminal Linux (ls, cd, cp, mv, rm, chmod, grep)",
          "Exercícios: 20 questões de Windows e Linux"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 19,
    date: "16/10/2026",
    weekday: "Sexta-feira",
    week: 3,
    theme: "Aplicação da Lei Penal & Reescrita de Frases e Crase",
    subjects: [
      {
        name: "Direito Penal",
        weight: "⭐ 15% da prova",
        isHigh: false,
        topics: [
          "Aplicação da Lei Penal no tempo: Anterioridade, irretroatividade e ultratividade da lei mais benigna",
          "Tempo do crime (teoria da atividade) e Lugar do crime (teoria da ubiquidade - L.U.T.A.)",
          "Extraterritorialidade incondicionada e condicionada da lei penal brasileira",
          "Exercícios: 20 questões sobre aplicação da lei penal"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "⭐ 13% da prova",
        isHigh: false,
        topics: [
          "Regência Verbal e Nominal dos verbos mais cobrados (visar, aspirar, assistir, obedecer, preferir)",
          "Emprego do sinal indicativo de Crase (casos proibidos, obrigatórios e facultativos)",
          "Correção e Reescrita de Textos: Manutenção de sentido e correção gramatical",
          "Exercícios: 25 questões de Regência, Crase e Reescrita"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 20,
    date: "17/10/2026",
    weekday: "Sábado",
    week: 3,
    theme: "Medicina Legal: Traumatologia & Estatística: Dispersão",
    subjects: [
      {
        name: "Medicina Legal",
        weight: "⭐ Tópico Específico",
        isHigh: false,
        topics: [
          "Traumatologia Médico-Legal: Energias de ordem mecânica e instrumentos",
          "Feridas contusas, corto-contusas, pérfuro-contusas e pérfuro-incisas",
          "Feridas cortantes/incisas (características, cauda de escoriação) e Fraturas múltiplas de costelas",
          "Exercícios: 20 questões de Traumatologia"
        ]
      },
      {
        name: "Estatística Descritiva",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Medidas de Dispersão: Amplitude total, Variância populacional e amostral",
          "Desvio Padrão e interpretação física",
          "Coeficiente de Variação (CV) e comparação entre grupos heterogêneos",
          "Exercícios: 20 questões de variância, desvio padrão e CV"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 21,
    date: "18/10/2026",
    weekday: "Domingo",
    week: 3,
    theme: "Simulado 03 & Revisão de Prisões, Crimes Adm e Traumatologia",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Fixação Semanal",
        isHigh: true,
        topics: [
          "Simulado Semanal 3: 60 questões focadas em Prisões, Crimes contra a Adm, Maria da Penha, Informática e Crase",
          "Revisão ativa das questões erradas com registro no Caderno de Erros",
          "Leitura da letra seca dos crimes da Lei de Tortura e da Lei Maria da Penha"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 4: 19/10 a 25/10 • Contabilidade 1, Drogas e Ação Penal ---
  {
    day: 22,
    date: "19/10/2026",
    weekday: "Segunda-feira",
    week: 4,
    theme: "Lei de Drogas (Lei 11.343/2006) & Ação Penal no CPP",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Alta Frequência",
        isHigh: true,
        topics: [
          "Lei de Drogas (Lei 11.343/2006): Usuário (art. 28) x Tráfico (art. 33) x Tráfico Privilegiado (§ 4º)",
          "Art. 34: Maquinário, aparelho ou instrumento para fabricação de drogas",
          "Procedimento criminal especial da Lei de Drogas: Notificação preliminar para defesa prévia, atuação do MP",
          "Incineração de drogas (com e sem prisão em flagrante)",
          "Exercícios: 25 questões sobre a Lei de Drogas"
        ]
      },
      {
        name: "Processo Penal",
        weight: "⭐ Tópico Relevante",
        isHigh: false,
        topics: [
          "Ação Penal Pública: Incondicionada e Condicionada à representação",
          "Ação Penal Privada: Exclusiva, personalíssima e subsidiária da pública",
          "Princípios da Ação Penal (Obrigatoriedade, Indivisibilidade, Intranscendência, etc.)",
          "Exercícios: 20 questões sobre espécies de ação penal"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 23,
    date: "20/10/2026",
    weekday: "Terça-feira",
    week: 4,
    theme: "Agentes Públicos e Improbidade (Lei 8.429/92) & Concordância Verbal",
    subjects: [
      {
        name: "Direito Administrativo",
        weight: "⭐ 8% da matéria",
        isHigh: false,
        topics: [
          "Nova Lei de Improbidade Administrativa (Lei 8.429/92 com redação da Lei 14.230/2021)",
          "Exigência de dolo específico (fim da modalidade culposa)",
          "Atos de Improbidade que importam enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e violação aos princípios (art. 11)",
          "Prescrição da ação de improbidade administrativa",
          "Exercícios: 25 questões sobre a Nova Improbidade Administrativa"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "🔥 20% da prova",
        isHigh: true,
        topics: [
          "Concordância Verbal: Sujeito simples, composto e casos especiais (verbo haver, fazer, expressões partitivas)",
          "Concordância Nominal: Regras gerais e casos especiais (anexo, incluso, obrigado, meio, bastante)",
          "Exercícios: 20 questões sobre concordância verbal e nominal"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 24,
    date: "21/10/2026",
    weekday: "Quarta-feira",
    week: 4,
    theme: "Contabilidade: Conceitos, Princípios e Partidas Dobradas",
    subjects: [
      {
        name: "Noções de Contabilidade",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Conceito, objeto, finalidade e técnicas contábeis (escrituração, demonstrações, auditoria e análise)",
          "Princípios Fundamentais de Contabilidade: Princípio da Prudência / Cautela e Competência",
          "Método das Partidas Dobradas: Origens e aplicações, Débito e Crédito",
          "Equação fundamental do patrimônio e situação líquida",
          "Exercícios: 25 questões introdutórias de Contabilidade"
        ]
      },
      {
        name: "Direito Penal",
        weight: "⭐ 15% da prova",
        isHigh: false,
        topics: [
          "Concurso de Pessoas: Teoria monista temperada, coautoria e participação",
          "Concurso de Crimes: Concurso material, formal e crime continuado",
          "Exercícios: 20 questões sobre concurso de pessoas e de crimes"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 25,
    date: "22/10/2026",
    weekday: "Quinta-feira",
    week: 4,
    theme: "Lei de Abuso de Autoridade (Lei 13.869/2019) & Princípios do Processo Penal",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Alta Frequência",
        isHigh: true,
        topics: [
          "Lei de Abuso de Autoridade (Lei 13.869/2019): Sujeitos ativo e passivo",
          "Elemento subjetivo especial (finalidade específica de prejudicar outrem, beneficiar a si ou mero capricho)",
          "Divergência hermenêutica não configura abuso (art. 1º, § 2º)",
          "Crimes em espécie mais cobrados: Deixar de comunicar prisão, prosseguir com interrogatório de quem optou pelo silêncio",
          "Exercícios: 25 questões sobre Abuso de Autoridade"
        ]
      },
      {
        name: "Processo Penal",
        weight: "⭐ Princípios Básicos",
        isHigh: false,
        topics: [
          "Princípios fundamentais: Devido processo legal, presunção de não culpabilidade, ampla defesa e contraditório",
          "Juiz das Garantias (conceito, estrutura e vigência)",
          "Exercícios: 15 questões sobre princípios do processo penal"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 26,
    date: "23/10/2026",
    weekday: "Sexta-feira",
    week: 4,
    theme: "Contabilidade: Fatos Contábeis & Escrituração & Pacote Office",
    subjects: [
      {
        name: "Noções de Contabilidade",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Patrimônio e Fatos Contábeis: Fatos Permutativos (qualitativos)",
          "Fatos Modificativos (aumentativos e diminutivos) e Fatos Mistos",
          "Registro de operações: Escrituração contábil e fórmulas de lançamento (1ª a 4ª fórmulas)",
          "Livros obrigatórios e facultativos (Diário e Razão)",
          "Exercícios: 20 questões sobre fatos contábeis e lançamentos"
        ]
      },
      {
        name: "Informática",
        weight: "⭐ 17% do edital",
        isHigh: false,
        topics: [
          "Suíte de Escritório (Microsoft Office & LibreOffice): Word/Writer (formatação, estilos, controle de alterações)",
          "Excel/Calc: Fórmulas fundamentais (SOMA, MÉDIA, SE, PROCV, CONT.SE), referências relativas e absolutas ($)",
          "Exercícios: 20 questões de planilhas e editores de texto"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 27,
    date: "24/10/2026",
    weekday: "Sábado",
    week: 4,
    theme: "Medicina Legal: Asfixiologia & Estatística: Amostragem Aleatória",
    subjects: [
      {
        name: "Medicina Legal",
        weight: "⭐ Tópico Específico",
        isHigh: false,
        topics: [
          "Asfixiologia Médico-Legal: Conceito e fases da asfixia",
          "Sinais gerais de asfixia (cianose, petéquias de Tardieu, sangue fluido)",
          "Asfixias mecânicas: Enforcamento x Estrangulamento x Esganadura",
          "Soterramento, Confinamento e Morte em ambiente com gases tóxicos / silo de grãos",
          "Exercícios: 20 questões de Asfixiologia forense"
        ]
      },
      {
        name: "Estatística / Amostragem",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Amostragem: População x Amostra, Censo x Amostragem",
          "Amostra Aleatória Simples, Sistemática e Estratificada",
          "Interpretação de resultados descritivos em amostragem",
          "Exercícios: 15 questões sobre tipos de amostragem"
        ]
      }
    ],
    defaultQuestions: 35,
    notes: ""
  },
  {
    day: 28,
    date: "25/10/2026",
    weekday: "Domingo",
    week: 4,
    theme: "Simulado 04 & Revisão de Drogas, Fatos Contábeis e Asfixiologia",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Fixação Semanal",
        isHigh: true,
        topics: [
          "Simulado Semanal 4: 60 questões cobrando Drogas, Abuso de Autoridade, Fatos Contábeis, Improbidade e Concordância",
          "Identificação de erros e fortalecimento dos pontos fracos",
          "Leitura dos artigos de crimes da Lei de Drogas e da Lei 13.869/19"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 5: 26/10 a 01/11 • Medicina Legal 1 e Contabilidade 2 ---
  {
    day: 29,
    date: "26/10/2026",
    weekday: "Segunda-feira",
    week: 5,
    theme: "Organizações Criminosas (Lei 12.850/13) & Crimes Hediondos (Lei 8.072/90)",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Alta Frequência",
        isHigh: true,
        topics: [
          "Lei das Organizações Criminosas (Lei 12.850/2013): Conceito e requisitos estruturais (4 ou mais pessoas, estrutura ordenada)",
          "Meios de obtenção de prova: Colaboração premiada, ação controlada e infiltração de agentes",
          "Lei dos Crimes Hediondos (Lei 8.072/1990): Rol dos crimes hediondos e equiparados",
          "Vedação de fiança, indulto e anistia; Regras de progressão de regime após Pacote Anticrime",
          "Exercícios: 25 questões sobre ORCRIM e Crimes Hediondos"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "⭐ 13% da prova",
        isHigh: false,
        topics: [
          "Correção e Reescrita de Frases: Paralelismo sintático e semântico",
          "Ambiguidade e clareza textual",
          "Substituição de termos e reestruturação de períodos mantendo o sentido",
          "Exercícios: 20 questões de reescrita da banca"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 30,
    date: "27/10/2026",
    weekday: "Terça-feira",
    week: 5,
    theme: "Contabilidade: Plano de Contas & Estoques & Ativo Intangível",
    subjects: [
      {
        name: "Noções de Contabilidade",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Plano de Contas: Estrutura hierárquica, contas sintéticas e analíticas, agrupamentos patrimoniais",
          "Estoques: Critérios de avaliação de estoques (PEPS, UEPS, Média Ponderada Móvel)",
          "Compra e venda de mercadorias: Custo das Mercadorias Vendidas (CMV = EI + C - EF)",
          "Ativo Intangível (CPC 04): Conceito, amortização em linha reta, vida útil econômica e valor residual",
          "Exercícios: 25 questões de estoques, plano de contas e ativo intangível"
        ]
      },
      {
        name: "Direito Constitucional",
        weight: "⭐ 17% da matéria",
        isHigh: false,
        topics: [
          "Ordem Social na CF/88: Seguridade Social (Saúde, Previdência e Assistência Social)",
          "Meio Ambiente (art. 225) e Família, Criança, Adolescente, Jovem e Idoso",
          "Exercícios: 20 questões sobre Ordem Social na CF"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 31,
    date: "28/10/2026",
    weekday: "Quarta-feira",
    week: 5,
    theme: "Juizados Especiais Criminais (Lei 9.099/95) & Crimes Ambientais (Lei 9.605/98)",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Tópico Específico",
        isHigh: false,
        topics: [
          "Juizados Especiais Criminais (Lei 9.099/1995): Infração de menor potencial ofensivo e termo circunstanciado (TCO)",
          "Fase preliminar do JECRIM: Composição dos danos civis e Transação Penal",
          "Lei de Crimes Ambientais (Lei 9.605/1998): Responsabilidade penal de pessoa jurídica e seus dirigentes",
          "Licenciamento ambiental e crimes de lançamento de resíduos tóxicos",
          "Exercícios: 25 questões sobre JECRIM e Lei Ambiental"
        ]
      },
      {
        name: "Raciocínio Lógico",
        weight: "⭐ Fixação",
        isHigh: false,
        topics: [
          "Diagramas Lógicos: Relações de pertinência e inclusão",
          "Argumentação Lógica: Validade de argumentos e silogismos",
          "Exercícios: 20 questões sobre diagramas e argumentos válidos"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 32,
    date: "29/10/2026",
    weekday: "Quinta-feira",
    week: 5,
    theme: "Medicina Legal: Toxicologia & Sexologia Forense",
    subjects: [
      {
        name: "Medicina Legal",
        weight: "⭐ Tópico Específico",
        isHigh: false,
        topics: [
          "Toxicologia Médico-Legal: Intoxicações agudas e crônicas, toxicomania (dependência e nocividade)",
          "Intoxicação por monóxido de carbono, venenos e substâncias psicotrópicas",
          "Sexologia Médico-Legal: Perícia em crimes contra a dignidade sexual",
          "Sinais físicos de violência sexual recente e pretérita (roturas himenais, equimoses, esperma)",
          "Exercícios: 20 questões de Toxicologia e Sexologia Forense"
        ]
      },
      {
        name: "Direito Penal",
        weight: "⭐ 15% da matéria",
        isHigh: false,
        topics: [
          "Penas e suas espécies: Privativas de liberdade, restritivas de direitos e multa",
          "Extinção da Punibilidade (art. 107 do CP): Prescrição penal (da pretensão punitiva e executória)",
          "Exercícios: 20 questões sobre prescrição e penas"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 33,
    date: "30/10/2026",
    weekday: "Sexta-feira",
    week: 5,
    theme: "Contabilidade: Balanço Patrimonial & Lei das S/A (Lei 6.404/76)",
    subjects: [
      {
        name: "Noções de Contabilidade",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Demonstrações Contábeis: Balanço Patrimonial (estrutura do Ativo Circulante, Não Circulante, Passivo e PL)",
          "Saldos de contas e encerramento do exercício",
          "Lei 6.404/76: Classificação de aplicações de recursos em despesas do exercício seguinte (despesas antecipadas)",
          "Exercícios: 25 questões sobre Balanço Patrimonial e despesas antecipadas"
        ]
      },
      {
        name: "Poderes Administrativos",
        weight: "⭐ 17% da matéria",
        isHigh: false,
        topics: [
          "Poderes da Administração: Poder Vinculado, Discricionário, Hierárquico e Disciplinar",
          "Poder de Polícia: Conceito, atributos (discricionariedade, autoexecutoriedade e coercibilidade) e limites",
          "Uso e abuso do poder (excesso de poder e desvio de finalidade)",
          "Exercícios: 20 questões de Poderes Administrativos"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 34,
    date: "31/10/2026",
    weekday: "Sábado",
    week: 5,
    theme: "Estatuto do Desarmamento (Lei 10.826/03) & ECA (Lei 8.069/90)",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Alta Frequência",
        isHigh: true,
        topics: [
          "Estatuto do Desarmamento (Lei 10.826/2003): Posse irregular x Porte ilegal de arma (uso permitido x restrito x proibido)",
          "Disparo de arma de fogo e modificação de características de arma de fogo de uso permitido (art. 16)",
          "ECA (Lei 8.069/1990): Princípio da proteção integral, atos infracionais e medidas socioeducativas",
          "Garantias processuais do adolescente infrator e apreensão em flagrante de ato infracional",
          "Exercícios: 25 questões sobre Desarmamento e ECA"
        ]
      },
      {
        name: "Arquivologia (Escrivão) / Revisão Geral",
        weight: "⭐ Matéria Específica",
        isHigh: false,
        topics: [
          "Arquivologia: Conceitos fundamentais de gestão documental",
          "Ciclo vital dos documentos (teoria das 3 idades: corrente, intermediária e permanente)",
          "Métodos de arquivamento (alfabético, numérico, geográfico e temático)",
          "Exercícios: 15 questões de Arquivologia"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 35,
    date: "01/11/2026",
    weekday: "Domingo",
    week: 5,
    theme: "Simulado 05 (Metade do Cronograma!) & Revisão Geral de Outubro",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Metade da Jornada",
        isHigh: true,
        topics: [
          "Simulado Geral 5: 60 questões simulando a prova real (Direito + Conhecimentos Específicos)",
          "Verificação da taxa de acerto por matéria (Meta: superar 75% de acertos)",
          "Descanso tático na parte da tarde e recarga mental para o mês de Novembro"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 6: 02/11 a 08/11 • Igualdade Racial, Medicina 2 e RLM ---
  {
    day: 36,
    date: "02/11/2026",
    weekday: "Segunda-feira",
    week: 6,
    theme: "Igualdade Racial e de Gênero: Convenções & Discriminação",
    subjects: [
      {
        name: "Promoção da Igualdade",
        weight: "⭐ Matéria Obrigatória",
        isHigh: true,
        topics: [
          "Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial (Decreto 65.810/1969)",
          "Definição oficial de discriminação racial e ações afirmativas",
          "Convenção sobre a Eliminação de Discriminação contra a Mulher (Decretos 89.460/84 e 4.377/02 - reservas e retirada)",
          "Discriminação Direta (*disparate treatment*) x Discriminação Indireta (*disparate impact*)",
          "Exercícios: 20 questões sobre Convenções de Igualdade"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "🔥 27% da prova",
        isHigh: true,
        topics: [
          "Semântica e Figuras de Linguagem: Metáfora, metonímia, eufemismo, antítese, paradoxo, hipérbole",
          "Coesão e Coerência Textual: Mecanismos anafóricos e catafóricos",
          "Exercícios: 20 questões de figuras de linguagem e coesão textual"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 37,
    date: "03/11/2026",
    weekday: "Terça-feira",
    week: 6,
    theme: "Crimes Resultantes de Preconceito (Lei 7.716/89) & Responsabilidade Civil do Estado",
    subjects: [
      {
        name: "Promoção da Igualdade",
        weight: "⭐ Alta Frequência",
        isHigh: true,
        topics: [
          "Crimes Resultantes de Preconceito de Raça ou Cor (Lei 7.716/1989): Crimes em espécie",
          "Injúria Racial equiparada a Racismo (Lei 14.532/2023): Inafiançabilidade e imprescritibilidade",
          "Casos de aumento de pena (redes sociais, ambiente de trabalho)",
          "Exercícios: 20 questões da Lei 7.716/89 atualizada"
        ]
      },
      {
        name: "Direito Administrativo",
        weight: "⭐ 17% da matéria",
        isHigh: false,
        topics: [
          "Responsabilidade Civil do Estado (art. 37, § 6º da CF): Teoria do risco administrativo",
          "Responsabilidade Objetiva do Estado e elementos (conduta, dano e nexo de causalidade)",
          "Excludentes da responsabilidade civil estatal (caso fortuito, força maior e culpa exclusiva da vítima)",
          "Exercícios: 20 questões sobre Responsabilidade Civil do Estado"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 38,
    date: "04/11/2026",
    weekday: "Quarta-feira",
    week: 6,
    theme: "Lei de Execução Penal (LEP) & Jurisdição e Competência no CPP",
    subjects: [
      {
        name: "Legislação Extravagante / Proc. Penal",
        weight: "⭐ Tópico Relevante",
        isHigh: false,
        topics: [
          "Lei de Execução Penal (Lei 7.210/1984 - pontos fundamentais para Polícia Civil)",
          "Regimes de cumprimento de pena, faltas disciplinares e livramento condicional",
          "Processo Penal: Jurisdição e Competência (competência pelo lugar da infração, domicílio do réu, conexão e continência)",
          "Exercícios: 25 questões sobre LEP e Competência no CPP"
        ]
      },
      {
        name: "Raciocínio Lógico",
        weight: "⭐ Fixação",
        isHigh: false,
        topics: [
          "Sequências lógicas (numéricas, figurais e de palavras)",
          "Problemas lógicos com datas, calendários e orientação espacial",
          "Exercícios: 20 questões de sequências e lógica visual"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 39,
    date: "05/11/2026",
    weekday: "Quinta-feira",
    week: 6,
    theme: "Direito Constitucional: Nacionalidade e Direitos Políticos & Nuvem e Backup",
    subjects: [
      {
        name: "Direito Constitucional",
        weight: "⭐ 22% da matéria",
        isHigh: false,
        topics: [
          "Nacionalidade (arts. 12 e 13 da CF): Brasileiros natos e naturalizados, perda da nacionalidade (EC 131/2023)",
          "Direitos Políticos (arts. 14 a 16): Condições de elegibilidade e hipóteses de inelegibilidade",
          "Exercícios: 20 questões de Nacionalidade e Direitos Políticos"
        ]
      },
      {
        name: "Informática",
        weight: "⭐ 33% da prova",
        isHigh: false,
        topics: [
          "Computação em Nuvem (Cloud Computing): Modelos IaaS, PaaS, SaaS e implantação (pública, privada, híbrida)",
          "Backup: Tipos de cópias de segurança (completo/full, incremental e diferencial)",
          "Exercícios: 20 questões sobre Nuvem e Backup"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 40,
    date: "06/11/2026",
    weekday: "Sexta-feira",
    week: 6,
    theme: "Crimes contra o Patrimônio & Medicina Legal Revisão",
    subjects: [
      {
        name: "Direito Penal",
        weight: "⭐ 15% da prova",
        isHigh: false,
        topics: [
          "Furto (art. 155): Simples, noturno, qualificado e de coisa comum",
          "Roubo (art. 157): Próprio, impróprio, majorado (arma de fogo) e qualificado (latrocínio)",
          "Extorsão, Estelionato (art. 171 - representação e exceções) e Receptação",
          "Exercícios: 25 questões sobre Crimes contra o Patrimônio"
        ]
      },
      {
        name: "Medicina Legal",
        weight: "⭐ Revisão Forense",
        isHigh: false,
        topics: [
          "Revisão Comparativa: Feridas pérfuro-contusas (tiros à queima-roupa x encostado x distância)",
          "Zonas de tatuagem, esfumaçamento e orla de escoriação/enxugo",
          "Identificação humana médico-legal (dactiloscoppia, arcada dentária, DNA)",
          "Exercícios: 20 questões de balística forense e traumatologia"
        ]
      }
    ],
    defaultQuestions: 45,
    notes: ""
  },
  {
    day: 41,
    date: "07/11/2026",
    weekday: "Sábado",
    week: 6,
    theme: "Legislação da PC-BA Aprofundada & Noções de Contabilidade Revisão",
    subjects: [
      {
        name: "Legislação Estadual PC-BA",
        weight: "⭐ Obrigatório",
        isHigh: true,
        topics: [
          "Regime Disciplinar dos Policiais Civis da Bahia: Transgressões disciplinares leves, médias e graves",
          "Sanções disciplinares (repreensão, suspensão, demissão, cassação de aposentadoria)",
          "Processo Administrativo Disciplinar (PAD) na Lei 11.370/2009 e Lei 6.677/1994",
          "Exercícios: 20 questões focadas no Estatuto da PC-BA"
        ]
      },
      {
        name: "Noções de Contabilidade",
        weight: "⭐ Fixação",
        isHigh: false,
        topics: [
          "Revisão Prática de Balanço Patrimonial e Partidas Dobradas com exercícios de fixação",
          "Exercícios: 20 questões de concursos policiais recentes de Contabilidade"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 42,
    date: "08/11/2026",
    weekday: "Domingo",
    week: 6,
    theme: "Simulado 06 & Revisão de Igualdade Racial, Armas e Balanço",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Fixação Semanal",
        isHigh: true,
        topics: [
          "Simulado Semanal 6: 60 questões completas enfatizando matérias específicas e legislação extravagante",
          "Preenchimento do Caderno de Erros com análise cirúrgica das pegadinhas de banca",
          "Planejamento das 3 últimas semanas decisivas"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 7: 09/11 a 15/11 • Aprofundamento dos Tópicos +40% ---
  {
    day: 43,
    date: "09/11/2026",
    weekday: "Segunda-feira",
    week: 7,
    theme: "Imersão: Teoria Geral das Provas no CPP (40% de Proc. Penal)",
    subjects: [
      {
        name: "Processo Penal",
        weight: "🔥 40% de Processo Penal",
        isHigh: true,
        topics: [
          "Revisão profunda de todas as regras de prova no CPP",
          "Jurisprudência atualizada do STJ e STF sobre busca domiciliar (consentimento do morador)",
          "Reconhecimento fotográfico e formalidades do art. 226 do CPP segundo os Tribunais Superiores",
          "Exercícios: 35 questões exclusivas sobre Provas no Processo Penal"
        ]
      },
      {
        name: "Língua Portuguesa",
        weight: "🔥 27% da prova",
        isHigh: true,
        topics: [
          "Semântica e Relações de Sentido: Hiperonímia, hiponímia, polissemia e ambiguidade",
          "Exercícios: 20 questões de semântica e vocabulário contextual"
        ]
      }
    ],
    defaultQuestions: 55,
    notes: ""
  },
  {
    day: 44,
    date: "10/11/2026",
    weekday: "Terça-feira",
    week: 7,
    theme: "Imersão: Teoria do Crime (31% de Penal) & Homicídio (23%)",
    subjects: [
      {
        name: "Direito Penal",
        weight: "🔥 54% somados em Penal",
        isHigh: true,
        topics: [
          "Treinamento exaustivo: Erro de tipo x Erro de proibição",
          "Aberratio ictus (art. 73) e Aberratio delicti (art. 74)",
          "Homicídio qualificado: Motivo fútil, torpe, meio cruel, feminicídio e funcional (contra policiais)",
          "Exercícios: 40 questões comentadas de Teoria do Crime e Homicídio"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 45,
    date: "11/11/2026",
    weekday: "Quarta-feira",
    week: 7,
    theme: "Imersão: Licitações & Org. Administrativa (50% de Direito Adm)",
    subjects: [
      {
        name: "Direito Administrativo",
        weight: "🔥 50% de Direito Adm",
        isHigh: true,
        topics: [
          "Consolidação da Lei 14.133/21: Quadro comparativo de modalidades, prazos e contratação direta",
          "Regime das Empresas Públicas e Sociedades de Economia Mista (Lei 13.303/16 em cotejo com a CF)",
          "Exercícios: 40 questões gabaritadas de Licitações e Organização Administrativa"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 46,
    date: "12/11/2026",
    weekday: "Quinta-feira",
    week: 7,
    theme: "Imersão: Artigo 5º da CF/88 (22% de Constitucional) & Inquérito Policial (27%)",
    subjects: [
      {
        name: "Direito Constitucional",
        weight: "🔥 22% de Constitucional",
        isHigh: true,
        topics: [
          "Bateria de questões letra por letra de todos os incisos do Art. 5º",
          "Súmulas Vinculantes relativas a direitos fundamentais e prisão civil do depositário infiel"
        ]
      },
      {
        name: "Processo Penal",
        weight: "🔥 27% de Processo Penal",
        isHigh: true,
        topics: [
          "Inquérito Policial na prática policial: Despacho de instauração, relatório final e diligências",
          "Exercícios: 40 questões conjuntas de Art. 5º CF e Inquérito Policial"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 47,
    date: "13/11/2026",
    weekday: "Sexta-feira",
    week: 7,
    theme: "Imersão: Raciocínio Lógico (+50% Proposições e Relações) & Estatística",
    subjects: [
      {
        name: "Raciocínio Lógico & Estatística",
        weight: "🔥 Núcleo de Exatas",
        isHigh: true,
        topics: [
          "Treinamento rápido de tabela-verdade, equivalências e negações",
          "Resolução cronometrada de problemas de associação lógica de pessoas e lugares",
          "Fórmulas de estatística descritiva (Média, Mediana, Moda e Coeficiente de Variação)",
          "Exercícios: 35 questões práticas de RLM e Estatística"
        ]
      }
    ],
    defaultQuestions: 35,
    notes: ""
  },
  {
    day: 48,
    date: "14/11/2026",
    weekday: "Sábado",
    week: 7,
    theme: "Imersão: Medicina Legal Completa & Legislação Penal Extravagante",
    subjects: [
      {
        name: "Medicina Legal & Legislação Especial",
        weight: "🔥 Tópicos Estratégicos",
        isHigh: true,
        topics: [
          "Quadro comparativo geral de Medicina Legal: Documentos, Lesões, Asfixias e Toxicologia",
          "Revisão dos pontos-chave de Drogas, Desarmamento, Tortura e Maria da Penha",
          "Exercícios: 40 questões mescladas de Medicina Legal e Leis Especiais"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 49,
    date: "15/11/2026",
    weekday: "Domingo",
    week: 7,
    theme: "Simulado 07 Oficial de Reta Final & Análise de Desempenho",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Prova Completa 7",
        isHigh: true,
        topics: [
          "Simulado completo de 60 questões (20 Noções de Direito + 40 Conhecimentos Específicos)",
          "Controle estrito de tempo de prova (4 horas)",
          "Mapeamento do Caderno de Erros para guiar as 2 semanas finais"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 8: 16/11 a 22/11 • Reta Final - Questões & Leis Secas ---
  {
    day: 50,
    date: "16/11/2026",
    weekday: "Segunda-feira",
    week: 8,
    theme: "Leitura da Lei Seca: Código Penal (Parte Geral e Especial)",
    subjects: [
      {
        name: "Direito Penal",
        weight: "⭐ Letra da Lei",
        isHigh: true,
        topics: [
          "Leitura atenta dos artigos 1º ao 28 do CP (Aplicação da lei penal e Teoria do Crime)",
          "Leitura dos artigos 121 a 136 (Crimes contra a pessoa) e 312 a 327 (Crimes contra a administração pública)",
          "Exercícios: 30 questões de memorização de texto de lei"
        ]
      }
    ],
    defaultQuestions: 30,
    notes: ""
  },
  {
    day: 51,
    date: "17/11/2026",
    weekday: "Terça-feira",
    week: 8,
    theme: "Leitura da Lei Seca: CPP (Inquérito, Ação, Provas e Prisões)",
    subjects: [
      {
        name: "Processo Penal",
        weight: "⭐ Letra da Lei",
        isHigh: true,
        topics: [
          "Leitura dos artigos 4º ao 23 (Inquérito Policial)",
          "Leitura dos artigos 155 ao 250 (Provas no CPP e Cadeia de Custódia)",
          "Leitura dos artigos 282 ao 316 (Prisões cautelares e liberdade provisória)",
          "Exercícios: 30 questões de texto de lei do CPP"
        ]
      }
    ],
    defaultQuestions: 30,
    notes: ""
  },
  {
    day: 52,
    date: "18/11/2026",
    weekday: "Quarta-feira",
    week: 8,
    theme: "Leitura da CF/88 (Art. 5º e Art. 144) & Lei 14.133/21 Resumida",
    subjects: [
      {
        name: "Constitucional & Administrativo",
        weight: "⭐ Letra da Lei",
        isHigh: true,
        topics: [
          "Leitura completa e sem interrupções de todos os incisos e parágrafos do Art. 5º e Art. 144 da CF",
          "Leitura dos artigos da Nova Lei de Licitações (Modalidades e Contratação Direta)",
          "Exercícios: 30 questões de fixação constitucional e administrativa"
        ]
      }
    ],
    defaultQuestions: 30,
    notes: ""
  },
  {
    day: 53,
    date: "19/11/2026",
    weekday: "Quinta-feira",
    week: 8,
    theme: "Leis Extravagantes: Drogas, Maria da Penha, Tortura e Abuso",
    subjects: [
      {
        name: "Legislação Extravagante",
        weight: "⭐ Leis em Detalhe",
        isHigh: true,
        topics: [
          "Leitura integral das Leis: 11.343/06 (Drogas), 11.340/06 (Maria da Penha), 9.455/95 (Tortura) e 13.869/19 (Abuso)",
          "Atenção redobrada nas causas de aumento de pena e nas sanções não privativas de liberdade",
          "Exercícios: 35 questões de jurisprudência das leis especiais"
        ]
      }
    ],
    defaultQuestions: 35,
    notes: ""
  },
  {
    day: 54,
    date: "20/11/2026",
    weekday: "Sexta-feira",
    week: 8,
    theme: "Língua Portuguesa: Rodada Final de Interpretação e Sintaxe",
    subjects: [
      {
        name: "Língua Portuguesa",
        weight: "🔥 Matéria Decisiva",
        isHigh: true,
        topics: [
          "Resolução de 3 provas completas anteriores da banca organizadora de Português",
          "Treinamento de pegadinhas frequentes de pontuação, crase e valores da partícula 'QUE' e 'SE'",
          "Exercícios: 40 questões comentadas de Português"
        ]
      }
    ],
    defaultQuestions: 40,
    notes: ""
  },
  {
    day: 55,
    date: "21/11/2026",
    weekday: "Sábado",
    week: 8,
    theme: "Informática & Contabilidade & RLM: Sprint de Revisão",
    subjects: [
      {
        name: "Informática, RLM e Contabilidade",
        weight: "⭐ Pontos Decisivos",
        isHigh: false,
        topics: [
          "Revisão rápida de atalhos e fórmulas de Excel, segurança da informação e redes",
          "Revisão de equivalências lógicas de RLM e fórmulas de Estatística",
          "Balanço patrimonial e fórmulas de lançamento contábil",
          "Exercícios: 30 questões diversificadas dessas disciplinas"
        ]
      }
    ],
    defaultQuestions: 30,
    notes: ""
  },
  {
    day: 56,
    date: "22/11/2026",
    weekday: "Domingo",
    week: 8,
    theme: "Simulado 08 Oficial & Calibragem Estratégica Final",
    subjects: [
      {
        name: "Revisão e Simulado",
        weight: "🏆 Penúltimo Simulado",
        isHigh: true,
        topics: [
          "Simulado completo 8 cronometrado rigorosamente com preenchimento de cartão de respostas",
          "Correção minuciosa com foco em blindar qualquer dúvida conceitual remanescente"
        ]
      }
    ],
    defaultQuestions: 60,
    notes: ""
  },

  // --- SEMANA 9: 23/11 a 30/11 • Revisão Geral de Véspera & Fixação ---
  {
    day: 57,
    date: "23/11/2026",
    weekday: "Segunda-feira",
    week: 9,
    theme: "Super Revisão: Direito Penal e Processual Penal",
    subjects: [
      {
        name: "Penal & Processo Penal",
        weight: "🔥 Núcleo Duro",
        isHigh: true,
        topics: [
          "Revisão dos tópicos com maior índice de erros no seu histórico pessoal",
          "Leitura de Súmulas Vinculantes e Súmulas do STJ aplicáveis ao Direito Penal e Processo Penal",
          "Resolução de 25 questões selecionadas de alto nível"
        ]
      }
    ],
    defaultQuestions: 25,
    notes: ""
  },
  {
    day: 58,
    date: "24/11/2026",
    weekday: "Terça-feira",
    week: 9,
    theme: "Super Revisão: Direito Constitucional e Administrativo",
    subjects: [
      {
        name: "Constitucional & Administrativo",
        weight: "🔥 Núcleo Jurídico",
        isHigh: true,
        topics: [
          "Quadro comparativo de Atos Administrativos, Organização e Licitações",
          "Remédios Constitucionais e Segurança Pública (Art. 144 CF)",
          "Resolução de 25 questões selecionadas"
        ]
      }
    ],
    defaultQuestions: 25,
    notes: ""
  },
  {
    day: 59,
    date: "25/11/2026",
    weekday: "Quarta-feira",
    week: 9,
    theme: "Super Revisão: Legislação Extravagante & Estadual PC-BA",
    subjects: [
      {
        name: "Legislação Extravagante & BA",
        weight: "⭐ Questões Certas",
        isHigh: true,
        topics: [
          "Leitura dos prazos e procedimentos da Lei 11.370/2009 (Estatuto da PC-BA)",
          "Revisão das novidades legislativas e crimes hediondos",
          "Resolução de 25 questões de legislação"
        ]
      }
    ],
    defaultQuestions: 25,
    notes: ""
  },
  {
    day: 60,
    date: "26/11/2026",
    weekday: "Quinta-feira",
    week: 9,
    theme: "Super Revisão: Medicina Legal & Igualdade Racial e Gênero",
    subjects: [
      {
        name: "Medicina Legal & Igualdade Racial",
        weight: "⭐ Diferencial Competitivo",
        isHigh: true,
        topics: [
          "Tabela de sinais de morte, traumatologia, asfixias e documentos médico-legais",
          "Convenções de Direitos Humanos e crimes de preconceito de raça e cor",
          "Resolução de 20 questões"
        ]
      }
    ],
    defaultQuestions: 20,
    notes: ""
  },
  {
    day: 61,
    date: "27/11/2026",
    weekday: "Sexta-feira",
    week: 9,
    theme: "Super Revisão: Português & RLM & Informática",
    subjects: [
      {
        name: "Conhecimentos Básicos",
        weight: "🔥 40 Questões",
        isHigh: true,
        topics: [
          "Regras de pontuação, regência, crase e concordância em fichas-resumo",
          "Fórmulas de conectivos lógicos e tabelas de equivalência",
          "Conceitos de segurança da informação e malwares",
          "Resolução de 20 questões rápidas"
        ]
      }
    ],
    defaultQuestions: 20,
    notes: ""
  },
  {
    day: 62,
    date: "28/11/2026",
    weekday: "Sábado",
    week: 9,
    theme: "Super Revisão: Contabilidade & Estatística & Arquivologia",
    subjects: [
      {
        name: "Específicas de Apoio",
        weight: "⭐ Fechamento de Tópicos",
        isHigh: false,
        topics: [
          "Estrutura do Balanço Patrimonial e classificação de contas (Ativo, Passivo, PL)",
          "Fórmulas das medidas de tendência central e variância",
          "Conceitos fundamentais da gestão de arquivos",
          "Resolução de 15 questões de fixação"
        ]
      }
    ],
    defaultQuestions: 15,
    notes: ""
  },
  {
    day: 63,
    date: "29/11/2026",
    weekday: "Domingo",
    week: 9,
    theme: "Revisão Leve de Véspera & Caderno de Erros Consolidado",
    subjects: [
      {
        name: "Revisão Estratégica Leve",
        weight: "🧘 Foco & Serenidade",
        isHigh: true,
        topics: [
          "Leitura descontraída do seu Caderno de Erros acumulado durante os 64 dias",
          "Revisão de mapas mentais visuais dos tópicos mais cobrados",
          "Alimentação equilibrada, hidratação e preparação de documentos/canetas para a prova",
          "Dormir cedo e descansar a mente"
        ]
      }
    ],
    defaultQuestions: 0,
    notes: ""
  },
  {
    day: 64,
    date: "30/11/2026",
    weekday: "Segunda-feira",
    week: 9,
    theme: "Conclusão da Missão 30 de Novembro • Aprovação PC-BA!",
    subjects: [
      {
        name: "Fechamento do Cronograma",
        weight: "🏆 Missão Cumprida",
        isHigh: true,
        topics: [
          "100% do Conteúdo Programático do Edital Verticalizado Estudado e Revisado!",
          "Confiança na preparação e execução do plano de estudos com disciplina tática",
          "Parabéns pela dedicação ao longo de todos os 64 dias de estudo ininterruptos!"
        ]
      }
    ],
    defaultQuestions: 0,
    notes: ""
  }
];

// 2. Chave de persistência do LocalStorage
const STORAGE_KEY = "pcba_study_schedule_progress_v1";

// 3. Estado da aplicação
let userProgress = {
  completedDays: {},    // { dayNum: true/false }
  completedTopics: {},  // { "dayNum_subjIdx_topicIdx": true/false }
  questionsSolved: {},  // { dayNum: number }
  notes: {}             // { dayNum: string }
};

// 4. Inicialização do armazenamento local
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      userProgress = JSON.parse(saved);
      // Garantir compatibilidade de estrutura
      if (!userProgress.completedDays) userProgress.completedDays = {};
      if (!userProgress.completedTopics) userProgress.completedTopics = {};
      if (!userProgress.questionsSolved) userProgress.questionsSolved = {};
      if (!userProgress.notes) userProgress.notes = {};
    }
  } catch (e) {
    console.error("Erro ao carregar dados do localStorage:", e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
    updateDashboard();
  } catch (e) {
    console.error("Erro ao salvar no localStorage:", e);
  }
}

// 5. Atualização das Métricas do Painel
function updateDashboard() {
  const totalDays = studyScheduleData.length;
  let doneDays = 0;
  for (let i = 1; i <= totalDays; i++) {
    if (userProgress.completedDays[i]) doneDays++;
  }

  let doneTopics = 0;
  Object.keys(userProgress.completedTopics).forEach(k => {
    if (userProgress.completedTopics[k]) doneTopics++;
  });

  let totalQuestions = 0;
  Object.keys(userProgress.questionsSolved).forEach(k => {
    const val = parseInt(userProgress.questionsSolved[k], 10);
    if (!isNaN(val) && val > 0) totalQuestions += val;
  });

  const percent = Math.round((doneDays / totalDays) * 100);

  // Atualizar DOM
  const overallPercent = document.getElementById("overallPercent");
  const overallProgressBar = document.getElementById("overallProgressBar");
  const completedDaysCount = document.getElementById("completedDaysCount");
  const completedTasksCount = document.getElementById("completedTasksCount");
  const totalQuestionsSolved = document.getElementById("totalQuestionsSolved");
  const currentStreak = document.getElementById("currentStreak");

  if (overallPercent) overallPercent.textContent = `${percent}%`;
  if (overallProgressBar) overallProgressBar.style.width = `${percent}%`;
  if (completedDaysCount) completedDaysCount.textContent = doneDays;
  if (completedTasksCount) completedTasksCount.textContent = doneTopics;
  if (totalQuestionsSolved) totalQuestionsSolved.textContent = totalQuestions;

  if (currentStreak) {
    if (doneDays === 0) currentStreak.textContent = "Dia 1";
    else if (doneDays >= totalDays) currentStreak.textContent = "Aprovado! 100%";
    else currentStreak.textContent = `Dia ${doneDays + 1}`;
  }
}

// 6. Renderização dos Dias
function renderDays(filter = "all", week = "all", searchTerm = "") {
  const container = document.getElementById("daysList");
  if (!container) return;

  container.innerHTML = "";
  const searchLower = searchTerm.trim().toLowerCase();

  const filtered = studyScheduleData.filter(dayItem => {
    // Filtro por semana
    if (week !== "all" && dayItem.week.toString() !== week) {
      return false;
    }

    // Filtro por status
    const isCompleted = !!userProgress.completedDays[dayItem.day];
    if (filter === "completed" && !isCompleted) return false;
    if (filter === "pending" && isCompleted) return false;
    if (filter === "today" && dayItem.day !== 1) { // Consideramos dia 1 o início (28 de setembro)
      // Se for dia do sistema, pode verificar
      return dayItem.day === 1;
    }

    // Filtro por busca de texto
    if (searchLower) {
      const matchDay = dayItem.day.toString().includes(searchLower);
      const matchDate = dayItem.date.toLowerCase().includes(searchLower);
      const matchTheme = dayItem.theme.toLowerCase().includes(searchLower);
      const matchSubj = dayItem.subjects.some(s => 
        s.name.toLowerCase().includes(searchLower) ||
        s.topics.some(t => t.toLowerCase().includes(searchLower))
      );
      if (!matchDay && !matchDate && !matchTheme && !matchSubj) {
        return false;
      }
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h3>Nenhum dia encontrado</h3>
        <p>Tente ajustar os filtros ou pesquisar por outro termo.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(dayItem => {
    const isDone = !!userProgress.completedDays[dayItem.day];
    const isToday = dayItem.day === 1; // 28/09 inicial
    const qValue = userProgress.questionsSolved[dayItem.day] !== undefined 
      ? userProgress.questionsSolved[dayItem.day] 
      : (isDone ? dayItem.defaultQuestions : "");
    const noteValue = userProgress.notes[dayItem.day] || "";

    const card = document.createElement("div");
    card.className = `day-card ${isDone ? "completed" : ""} ${isToday ? "today" : ""}`;
    card.id = `card-day-${dayItem.day}`;

    // Monta disciplinas e tópicos
    let subjectsHtml = "";
    dayItem.subjects.forEach((subj, sIdx) => {
      let topicsListHtml = "";
      subj.topics.forEach((topic, tIdx) => {
        const topicKey = `${dayItem.day}_${sIdx}_${tIdx}`;
        const isTopicChecked = !!userProgress.completedTopics[topicKey];

        topicsListHtml += `
          <li class="topic-item ${isTopicChecked ? "checked" : ""}">
            <input type="checkbox" id="chk_${topicKey}" data-topickey="${topicKey}" ${isTopicChecked ? "checked" : ""}>
            <label for="chk_${topicKey}">${topic}</label>
          </li>
        `;
      });

      const weightClass = subj.isHigh ? "tag-weight high" : "tag-weight";

      subjectsHtml += `
        <div class="subject-block">
          <div class="subject-header">
            <span class="subject-title">📚 ${subj.name}</span>
            <span class="${weightClass}">${subj.weight}</span>
          </div>
          <ul class="topics-checklist">
            ${topicsListHtml}
          </ul>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="day-header">
        <div class="day-identity">
          <div class="day-badge">
            <span class="day-num">D${dayItem.day}</span>
            <span class="day-week">${dayItem.weekday.split("-")[0]}</span>
          </div>
          <div class="day-title-info">
            <span class="day-date-str">${dayItem.date} • Semana ${dayItem.week}</span>
            <h2 class="day-theme">${dayItem.theme}</h2>
          </div>
        </div>
        <div class="day-actions">
          <button class="btn-toggle-day" data-day="${dayItem.day}">
            ${isDone ? "✓ Dia Concluído" : "○ Concluir Dia"}
          </button>
        </div>
      </div>

      <div class="day-content-grid">
        ${subjectsHtml}
      </div>

      <div class="day-footer">
        <div class="questions-goal">
          <span>🎯 Questões resolvidas:</span>
          <input type="number" min="0" max="300" class="questions-input" data-day="${dayItem.day}" placeholder="${dayItem.defaultQuestions}" value="${qValue}">
          <span>questões</span>
        </div>
        <div class="day-notes-wrapper">
          <input type="text" class="day-notes-input" data-day="${dayItem.day}" placeholder="Anotações do dia (ex: revisar art. 121, taxa 85% de acertos...)" value="${noteValue}">
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  attachEventHandlers();
}

// 7. Event Handlers
function attachEventHandlers() {
  // Botão Concluir Dia Inteiro
  document.querySelectorAll(".btn-toggle-day").forEach(btn => {
    btn.onclick = (e) => {
      const dayNum = parseInt(btn.getAttribute("data-day"), 10);
      const currentlyDone = !!userProgress.completedDays[dayNum];
      const willBeDone = !currentlyDone;

      userProgress.completedDays[dayNum] = willBeDone;

      // Marcar/Desmarcar todos os tópicos do dia
      const dayData = studyScheduleData.find(d => d.day === dayNum);
      if (dayData) {
        dayData.subjects.forEach((subj, sIdx) => {
          subj.topics.forEach((t, tIdx) => {
            const key = `${dayNum}_${sIdx}_${tIdx}`;
            userProgress.completedTopics[key] = willBeDone;
          });
        });

        // Se marcar como concluído e não tinha colocado questões, preenche a meta padrão
        if (willBeDone && !userProgress.questionsSolved[dayNum]) {
          userProgress.questionsSolved[dayNum] = dayData.defaultQuestions;
        }
      }

      saveProgress();
      // Re-renderizar o card mantendo os filtros
      renderDays(currentFilter, currentWeek, currentSearch);
    };
  });

  // Checkboxes de tópicos individuais
  document.querySelectorAll(".topic-item input[type='checkbox']").forEach(chk => {
    chk.onchange = (e) => {
      const key = chk.getAttribute("data-topickey");
      const isChecked = chk.checked;
      userProgress.completedTopics[key] = isChecked;

      const parentLi = chk.closest(".topic-item");
      if (parentLi) {
        if (isChecked) parentLi.classList.add("checked");
        else parentLi.classList.remove("checked");
      }

      // Se todos os tópicos do dia forem concluídos, pode marcar o dia automaticamente
      const dayNum = parseInt(key.split("_")[0], 10);
      const dayData = studyScheduleData.find(d => d.day === dayNum);
      if (dayData) {
        let allChecked = true;
        dayData.subjects.forEach((subj, sIdx) => {
          subj.topics.forEach((t, tIdx) => {
            const k = `${dayNum}_${sIdx}_${tIdx}`;
            if (!userProgress.completedTopics[k]) allChecked = false;
          });
        });
        if (allChecked) {
          userProgress.completedDays[dayNum] = true;
          if (!userProgress.questionsSolved[dayNum]) {
            userProgress.questionsSolved[dayNum] = dayData.defaultQuestions;
          }
          const card = document.getElementById(`card-day-${dayNum}`);
          if (card) card.classList.add("completed");
          const btn = card ? card.querySelector(".btn-toggle-day") : null;
          if (btn) btn.innerHTML = "✓ Dia Concluído";
        }
      }

      saveProgress();
    };
  });

  // Campo de Questões Resolvidas
  document.querySelectorAll(".questions-input").forEach(input => {
    input.onchange = (e) => {
      const dayNum = parseInt(input.getAttribute("data-day"), 10);
      const val = parseInt(input.value, 10);
      if (!isNaN(val) && val >= 0) {
        userProgress.questionsSolved[dayNum] = val;
      } else {
        delete userProgress.questionsSolved[dayNum];
      }
      saveProgress();
    };
  });

  // Campo de Anotações do Dia
  document.querySelectorAll(".day-notes-input").forEach(input => {
    input.onchange = (e) => {
      const dayNum = parseInt(input.getAttribute("data-day"), 10);
      userProgress.notes[dayNum] = input.value;
      saveProgress();
    };
  });
}

// 8. Variáveis de Estado dos Filtros
let currentFilter = "all";
let currentWeek = "all";
let currentSearch = "";

// 9. Configuração dos Filtros e Ações Globais
function setupFiltersAndControls() {
  // Filtros rápidos de chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      renderDays(currentFilter, currentWeek, currentSearch);
    };
  });

  // Seletor de Semanas
  const weekSelect = document.getElementById("weekSelect");
  if (weekSelect) {
    weekSelect.onchange = (e) => {
      currentWeek = e.target.value;
      renderDays(currentFilter, currentWeek, currentSearch);
    };
  }

  // Campo de busca
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentSearch = e.target.value;
      renderDays(currentFilter, currentWeek, currentSearch);
    };
  }

  // Exportar Backup JSON
  const exportBtn = document.getElementById("exportBtn");
  if (exportBtn) {
    exportBtn.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userProgress, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `backup_cronograma_pcba_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    };
  }

  // Restaurar Backup JSON
  const importInput = document.getElementById("importInput");
  if (importInput) {
    importInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && typeof parsed === "object") {
            userProgress = parsed;
            saveProgress();
            renderDays(currentFilter, currentWeek, currentSearch);
            alert("Backup restaurado com sucesso!");
          } else {
            alert("Arquivo de backup inválido.");
          }
        } catch (err) {
          alert("Erro ao ler arquivo de backup: " + err.message);
        }
      };
      reader.readAsText(file);
    };
  }

  // Resetar Tudo
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("Tem certeza que deseja resetar todo o seu progresso? Essa ação não pode ser desfeita a menos que tenha feito backup.")) {
        userProgress = {
          completedDays: {},
          completedTopics: {},
          questionsSolved: {},
          notes: {}
        };
        saveProgress();
        renderDays(currentFilter, currentWeek, currentSearch);
      }
    };
  }
}

// 10. Temporizador Pomodoro Integrado
let pomodoroTimer = null;
let pomodoroTimeLeft = 25 * 60;
let isPomodoroRunning = false;
let currentPomodoroDuration = 25;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function updatePomodoroDisplays() {
  const str = formatTime(pomodoroTimeLeft);
  const headerDisplay = document.getElementById("timerDisplay");
  const modalDisplay = document.getElementById("modalTimerDisplay");
  if (headerDisplay) headerDisplay.textContent = str;
  if (modalDisplay) modalDisplay.textContent = str;
}

function setupPomodoro() {
  const modal = document.getElementById("pomodoroModal");
  const pomodoroBtn = document.getElementById("pomodoroBtn");
  const closePomodoro = document.getElementById("closePomodoro");
  const startBtn = document.getElementById("startTimerBtn");
  const pauseBtn = document.getElementById("pauseTimerBtn");
  const resetTimerBtn = document.getElementById("resetTimerBtn");
  const timerModeDisplay = document.getElementById("timerMode");

  if (pomodoroBtn && modal) {
    pomodoroBtn.onclick = () => modal.classList.remove("hidden");
  }
  if (closePomodoro && modal) {
    closePomodoro.onclick = () => modal.classList.add("hidden");
  }

  if (startBtn) {
    startBtn.onclick = () => {
      if (isPomodoroRunning) return;
      isPomodoroRunning = true;
      startBtn.textContent = "Em execução...";
      pomodoroTimer = setInterval(() => {
        if (pomodoroTimeLeft > 0) {
          pomodoroTimeLeft--;
          updatePomodoroDisplays();
        } else {
          clearInterval(pomodoroTimer);
          isPomodoroRunning = false;
          startBtn.textContent = "Iniciar";
          alert("⏱️ Tempo concluído! Faça uma pausa ou inicie outro ciclo de estudos.");
        }
      }, 1000);
    };
  }

  if (pauseBtn) {
    pauseBtn.onclick = () => {
      if (pomodoroTimer) clearInterval(pomodoroTimer);
      isPomodoroRunning = false;
      if (startBtn) startBtn.textContent = "Retomar";
    };
  }

  if (resetTimerBtn) {
    resetTimerBtn.onclick = () => {
      if (pomodoroTimer) clearInterval(pomodoroTimer);
      isPomodoroRunning = false;
      pomodoroTimeLeft = currentPomodoroDuration * 60;
      updatePomodoroDisplays();
      if (startBtn) startBtn.textContent = "Iniciar";
    };
  }

  // Troca de modos (25, 50, 5, 15)
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mins = parseInt(btn.getAttribute("data-time"), 10);
      currentPomodoroDuration = mins;
      pomodoroTimeLeft = mins * 60;
      if (pomodoroTimer) clearInterval(pomodoroTimer);
      isPomodoroRunning = false;
      if (startBtn) startBtn.textContent = "Iniciar";
      if (timerModeDisplay) {
        if (mins === 25) timerModeDisplay.textContent = "Foco (25m)";
        else if (mins === 50) timerModeDisplay.textContent = "Foco Intenso (50m)";
        else if (mins === 5) timerModeDisplay.textContent = "Pausa Curta (5m)";
        else if (mins === 15) timerModeDisplay.textContent = "Pausa Longa (15m)";
      }
      updatePomodoroDisplays();
    };
  });

  updatePomodoroDisplays();
}

// 11. Inicialização Geral quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  updateDashboard();
  renderDays();
  setupFiltersAndControls();
  setupPomodoro();
});
