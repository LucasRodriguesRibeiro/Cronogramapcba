/* ==========================================================================
   PC-BA — Simulado 01 (Investigador de Polícia Civil)
   Gabarito Oficial Comentado — 100 Questões
   ========================================================================== */

Object.assign(OFFICIAL_ANSWER_KEY, {
  1: "A", 2: "C", 3: "E", 4: "B", 5: "D", 6: "E", 7: "A", 8: "C", 9: "B", 10: "D",
  11: "A", 12: "C", 13: "B", 14: "D", 15: "E", 16: "A", 17: "B", 18: "C", 19: "D", 20: "E",
  21: "A", 22: "B", 23: "A", 24: "C", 25: "C", 26: "B", 27: "C", 28: "B", 29: "D", 30: "E",
  31: "A", 32: "B", 33: "C", 34: "D", 35: "E", 36: "A", 37: "B", 38: "A", 39: "D", 40: "E",
  41: "C", 42: "D", 43: "A", 44: "E", 45: "B", 46: "D", 47: "C", 48: "E", 49: "A", 50: "D",
  51: "B", 52: "E", 53: "A", 54: "B", 55: "C", 56: "D", 57: "E", 58: "A", 59: "B", 60: "C",
  61: "D", 62: "E", 63: "D", 64: "E", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "B",
  71: "A", 72: "C", 73: "E", 74: "D", 75: "B", 76: "C", 77: "A", 78: "B", 79: "C", 80: "D",
  81: "E", 82: "A", 83: "C", 84: "D", 85: "A", 86: "B", 87: "C", 88: "D", 89: "E", 90: "A",
  91: "D", 92: "E", 93: "B", 94: "C", 95: "D", 96: "E", 97: "A", 98: "B", 99: "C", 100: "E"
});

const OFFICIAL_EXPLANATIONS = {
  // Língua Portuguesa
  1: {
    topic: "Compreensão global",
    text: "O texto defende, do início ao fim, que esquecer é função sofisticada do cérebro — condição para que a atenção opere bem (par. 2) e para que se possa escolher o que importa (par. 4). As demais opções invertem ou extrapolam a tese."
  },
  2: {
    topic: "Interpretação de trecho",
    text: "O trecho afirma literalmente que descartar o irrelevante é o que permite ao relevante sobreviver — ou seja, o esquecimento seletivo viabiliza a preservação do que importa. Paráfrase direta da ideia expressa no 2º parágrafo."
  },
  3: {
    topic: "Morfologia — formação de palavras",
    text: "\"Redescobrindo\" é formada por derivação prefixal: prefixo \"re-\" (iteração) acrescido ao verbo \"descobrir\". Caminho inverso em (A) e (D); (B) é composição, não prefixação; (C) etimologia incorreta (\"consolidar\" vem de \"sólido\", não de \"consolo\")."
  },
  4: {
    topic: "Verbo pronominal",
    text: "\"Desprender-se\" é verbo essencialmente pronominal: o pronome \"se\" integra a estrutura do verbo, formando unidade de sentido. Não é objeto direto (A), não pode ser suprimido (C), não exige próclise aqui (D), nem é expletivo (E)."
  },
  5: {
    topic: "Colocação pronominal",
    text: "Em (D), \"Nós nos lembramos\" apresenta próclise válida com sujeito pronominal explícito e \"mais nos esforçamos\" com próclise obrigatória pelo advérbio \"mais\" (atrator). As demais erram a ênclise sem apócope (A, B, E) ou a regência (C)."
  },
  6: {
    topic: "Coesão referencial",
    text: "A expressão \"nesses intervalos\" retoma anaforicamente os três elementos citados no período anterior do mesmo parágrafo: o tempo livre, as caminhadas sem destino e as conversas sem câmera, mencionados como recomendações médicas."
  },
  7: {
    topic: "Acentuação gráfica",
    text: "\"Vêm\" (3ª pes. plural do verbo \"vir\") recebe acento circunflexo para distinguir-se de \"vem\" (3ª pes. singular) — acento diferencial expressamente previsto na norma. (B) atenção é oxítona, não paroxítona; (C) tecnológico é proparoxítona; (D) não há acento diferencial oficial; (E) invisível é paroxítona."
  },
  8: {
    topic: "Crase facultativa",
    text: "\"Pobreza\" rege a preposição \"de\". Com \"a atenção\", temos \"de + a\" = \"da\". Trocando por \"nossa atenção\" (pronome possessivo), a crase do artigo com o possessivo é facultativa: \"da nossa atenção\" ou \"de nossa atenção\". Portanto, grave facultativo em \"à nossa atenção\"."
  },
  9: {
    topic: "Reescrita — sentido preservado",
    text: "\"Não esquecer\" equivale a \"perder a capacidade de esquecer\"; \"não poder escolher\" equivale a \"perder a capacidade de escolher\"; mantém-se o advérbio \"indiretamente\". As demais trocam \"indireto\" por \"direto\" (A, C), invertem causalidade (D) ou introduzem relação inexistente de proporcionalidade (E)."
  },
  10: {
    topic: "Pontuação — locução adverbial intercalada",
    text: "\"Por intuição\" é locução adverbial de modo intercalada entre o verbo \"sabiam\" e seu objeto direto \"aquilo\". As vírgulas isolam a locução, conforme regra geral de pontuação de termos deslocados."
  },

  // Raciocínio Lógico-Matemático
  11: {
    topic: "Problema aritmético (frações)",
    text: "Ana: 2/5 × 180 = 72. Restam 108 para Bruno + Carla, com Bruno = 2 × Carla. Logo, 3 × Carla = 108, portanto Carla = 36. Confere: 72 + 72 + 36 = 180."
  },
  12: {
    topic: "Regra de três composta",
    text: "15 dias × (8/6 inv. agente) × (480/240 dir. qtd) × (6/8 inv. horas) = 15 × (8/6) × 2 × (6/8) = 15 × 2 = 30 dias. Mais depoimentos aumenta prazo; menos agentes aumenta prazo; mais horas/dia diminui prazo."
  },
  13: {
    topic: "Sistema de equações",
    text: "Sejam x (menos experiente) e x+6 (mais experiente). x + (x+6) = 24 -> 2x = 18 -> x = 9. Logo, o agente menos experiente tem 9 anos de carreira."
  },
  14: {
    topic: "Equivalência lógica — contrapositiva",
    text: "A contrapositiva de \"Se p, então q\" é \"Se não q, então não p\" — logicamente equivalente. Aplicando: \"Se o relatório não foi enviado ao MP, então o inquérito não está concluído\". (B) é a inversa (falácia); (E) é equivalente pela regra do condicional, mas em forma de disjunção."
  },
  15: {
    topic: "Negação de proposição composta",
    text: "Negação de \"p e q\" é \"¬p ou ¬q\" (Leis de De Morgan). \"Todos participaram\" nega-se por \"pelo menos um não participou\"; \"nenhum faltou\" nega-se por \"algum faltou\". Logo: \"pelo menos um investigador não participou OU algum delegado faltou\"."
  },
  16: {
    topic: "Silogismo categórico",
    text: "De \"Todo investigador é concursado\" segue que nenhum investigador é não concursado (contrapositiva da universal afirmativa). As demais extrapolam: (B) é falácia do médio não distribuído; (C) oposta à premissa; (D) e (E) invertem subordinação lógica."
  },
  17: {
    topic: "Análise combinatória — arranjo",
    text: "Como os cargos são distintos (presidente, secretário, relator), a ordem importa: trata-se de arranjo de 7 elementos tomados 3 a 3. A(7,3) = 7 × 6 × 5 = 210 maneiras."
  },
  18: {
    topic: "Probabilidade sucessiva sem reposição",
    text: "P(1º patrimônio) = 4/10; P(2º pessoa | 1º patrimônio) = 6/9. Probabilidade conjunta = (4/10) × (6/9) = 24/90 = 4/15."
  },

  // Informática
  19: {
    topic: "Microsoft Word — atalhos",
    text: "Ctrl + J aplica o alinhamento Justificado no Word em português, deixando as duas margens retas. (A) Ctrl+E = centralizar; (B) Ctrl+G = alinhar à direita/salvar; (C) Ctrl+Q = alinhar à esquerda/retira formatação de parágrafo; (E) Ctrl+L = localizar."
  },
  20: {
    topic: "Segurança — phishing",
    text: "A técnica descrita (e-mail aparentemente legítimo com link para página falsa que coleta credenciais) é a definição clássica de phishing. (A) ransomware criptografa dados; (B) keylogger registra teclas; (C) sniffer intercepta pacotes; (D) força bruta testa senhas."
  },
  21: {
    topic: "Excel — referências relativas",
    text: "C1 = B1 + A1 = 1000 + 500 = 1500. Ao copiar para C2, as referências relativas se deslocam: C2 passa a ser =B2+A2. Como B2 e A2 estão vazias (valem 0), C2 = 0 + 0 = 0."
  },
  22: {
    topic: "Google Chrome — janela anônima",
    text: "A janela anônima (Ctrl+Shift+N) impede o armazenamento de histórico, cookies e dados de sites visitados ao final da sessão. Os demais recursos não têm essa função específica."
  },
  23: {
    topic: "Nuvem e backup",
    text: "Itens I e II são corretos (definições precisas de armazenamento em nuvem e backup incremental). III é falso: full backup diário não dispensa política de retenção. IV é falso: sincronização não substitui backup (replica inclusive erros e exclusões)."
  },

  // Medicina Legal
  24: {
    topic: "Fenômenos cadavéricos abióticos imediatos",
    text: "A abolição simultânea das funções vitais (consciência, sensibilidade, motilidade, respiração e batimentos) caracteriza a parada cardiorrespiratória — fenômeno imediato à morte. (A), (D) e (E) são fenômenos consecutivos (não imediatos); (B) é tardio (putrefação)."
  },
  25: {
    topic: "Traumatologia — instrumentos cortantes",
    text: "Lesão com bordas regulares e nítidas, maior comprimento que profundidade, por pressão + deslizamento = ferida incisa, característica de instrumento CORTANTE (ex.: faca, lâmina). Perfurante tem maior profundidade; perfurocortante combina penetração e corte."
  },
  26: {
    topic: "Balística forense — elementos secundários",
    text: "A presença simultânea de tatuagem (grãos de pólvora incrustados) e esfumaçamento (fuligem) indica disparo a CURTA DISTÂNCIA, dentro do alcance dos elementos secundários (zona de alcance até ~60 cm), mas SEM contato (que produziria sinal de Benassi/boca de mina)."
  },
  27: {
    topic: "Cadeia de custódia — CPP art. 158-A",
    text: "O art. 158-A do CPP (incluído pela Lei 13.964/2019) define cadeia de custódia como o conjunto de todos os procedimentos destinados a manter e documentar a história cronológica do vestígio, do reconhecimento até o descarte."
  },
  28: {
    topic: "Perícia em vítima de crime sexual",
    text: "O protocolo exige coleta de material subungueal (defesa), vaginal, anal e oral conforme o relato da vítima — buscando vestígios biológicos do agressor para análise de DNA. As demais opções violam diretrizes técnicas (nunca lavar, nunca descartar coleta por higiene, nunca aguardar prazo)."
  },

  // Legislação Geral
  29: {
    topic: "Lei 11.370/2009 BA — art. 3º",
    text: "O art. 3º da Lei Orgânica da PC-BA lista: legalidade, impessoalidade, moralidade, eficiência, hierarquia, disciplina, unidade, indivisibilidade, interdisciplinaridade, indelegabilidade, proteção à dignidade humana e autonomia. \"Publicidade e continuidade\" NÃO constam expressamente (são da CF art. 37 / princípio dos serviços públicos)."
  },
  30: {
    topic: "Lei 6.677/1994 BA — art. 190 (suspensão)",
    text: "O art. 190 do Estatuto do Servidor BA dispõe que a suspensão será aplicada em caso de reincidência em faltas puníveis com advertência, não podendo exceder 90 (noventa) dias. Pegadinhas: (A) não há conversão automática em multa no estatuto baiano; (B) prazo errado; (C) cancelamento é 4 anos; (D) exige advertência prévia."
  },
  31: {
    topic: "Lei 12.209/2011 BA — art. 39, § 1º",
    text: "O § 1º do art. 39 da Lei de Processo Administrativo BA fixa prazo decadencial de 5 (cinco) anos para a Administração invalidar atos ilegais favoráveis ao administrado, salvo comprovada má-fé (§ 2º), em que a invalidação pode ocorrer a qualquer tempo."
  },
  32: {
    topic: "Lei 14.634/2023 BA — art. 2º",
    text: "O art. 2º da Lei estadual 14.634/2023 estabelece a aplicação da Lei Federal 14.133/2021 no âmbito da Administração baiana, ressalvando os dispositivos de aplicação exclusiva da União ou dos Municípios. É norma de recepção com adaptação do regime federal."
  },
  33: {
    topic: "Lei 8.906/1994 — art. 7º, III (Estatuto da OAB)",
    text: "O art. 7º, III, da Lei 8.906/1994 assegura ao advogado o direito de comunicar-se, pessoal e reservadamente, com seus clientes presos, detidos ou recolhidos, \"ainda que considerados incomunicáveis\", mesmo sem procuração. Direito fundamental ao exercício da advocacia."
  },

  // Promoção da Igualdade Racial e de Gênero
  34: {
    topic: "Lei 11.340/2006 — art. 7º (Lei Maria da Penha)",
    text: "O art. 7º da LMP lista cinco formas de violência: física, psicológica, sexual, patrimonial e moral. \"Violência institucional\" NÃO consta expressamente nessa lei (é tratada na Lei 14.321/2022, voltada a agentes públicos em geral)."
  },
  35: {
    topic: "Const. BA — art. 289 (Cap. XXIII, Do Negro)",
    text: "O art. 289 da Const. BA determina que, sempre que veiculada publicidade estadual com mais de duas pessoas, será assegurada (não facultativa) a inclusão de uma pessoa da raça negra. Dispositivo pouco conhecido mas direto no texto constitucional estadual."
  },
  36: {
    topic: "Lei 7.716/89, art. 2º-A (incluído pela Lei 14.532/2023)",
    text: "A Lei 14.532/2023 inseriu o art. 2º-A na Lei 7.716/1989, deslocando a injúria racial do art. 140, § 3º do CP para o rol dos crimes de racismo — tornando-a imprescritível e inafiançável, nos termos do art. 5º, XLII, da CF. A ação penal passou a ser pública incondicionada."
  },
  37: {
    topic: "Lei 13.182/2014 BA — art. 2º, V",
    text: "O inciso V do art. 2º da Lei estadual 13.182/2014 define racismo institucional como \"ações ou omissões sistêmicas caracterizadas por normas, práticas e padrões institucionais e organizacionais\" que resultam em discriminação. (D) descreve racismo (inc. IV); (E) descreve ações afirmativas (inc. III)."
  },

  // Atualidades
  38: {
    topic: "COP30 — Belém/PA, novembro de 2025",
    text: "A COP30 realizou-se em Belém, no Pará, de 10 a 21 de novembro de 2025, marcando a primeira Conferência das Nações Unidas sobre Mudança do Clima sediada em cidade do bioma amazônico. Presidência brasileira: embaixador André Corrêa do Lago."
  },
  39: {
    topic: "Operação Carbono Oculto — 28/08/2025",
    text: "A Operação Carbono Oculto foi deflagrada em 28/08/2025 pela PF, Receita Federal, GAECO/MP-SP e Receitas estaduais, mirando a infiltração do PCC no setor de combustíveis e no mercado financeiro (fintechs e fundos na Faria Lima). Movimentação estimada: R$ 140 bilhões em 10 estados."
  },
  40: {
    topic: "Programa Pacto pela Vida — Lei estadual 12.357/2011",
    text: "O Pacto pela Vida é o principal programa estadual de segurança pública da Bahia, instituído pela Lei estadual 12.357/2011, com foco na redução de crimes violentos letais intencionais (CVLI) e articulação intersetorial. Integra os Planos Estaduais de Segurança Pública (PESPDS 2024-2033)."
  },

  // Direito Penal
  41: {
    topic: "CP art. 1º — Princípio da legalidade",
    text: "\"Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal\" (CP art. 1º; CF art. 5º, XXXIX). Exige lei estrita, escrita, anterior e certa; veda analogia IN MALAM PARTEM, mas admite analogia em benefício do réu (IN BONAM PARTEM)."
  },
  42: {
    topic: "CP art. 2º, par. único — Abolitio criminis",
    text: "A lei que deixa de considerar o fato como criminoso (abolitio criminis) ou que, de qualquer modo, favorece o agente retroage, aplicando-se aos fatos anteriores, \"ainda que decididos por sentença condenatória transitada em julgado\" (CP art. 2º, par. único; CF art. 5º, XL)."
  },
  43: {
    topic: "CP art. 5º — Territorialidade mitigada/temperada",
    text: "Aplica-se a lei brasileira ao crime cometido no território nacional, \"sem prejuízo de convenções, tratados e regras de direito internacional\" (CP art. 5º, caput). A ressalva evidencia que a territorialidade é temperada, não absoluta."
  },
  44: {
    topic: "CP art. 21 — Erro de proibição",
    text: "O pescador tem perfeita consciência da realidade (sabe quantos peixes pegou), mas erra sobre a ILICITUDE da conduta (acredita que a lei lhe permite). É erro de proibição: se escusável/invencível, isenta de pena; se inescusável, reduz de 1/6 a 1/3 (CP art. 21). Não é erro de tipo (que recai sobre elemento fático)."
  },
  45: {
    topic: "CP art. 25 — Legítima defesa",
    text: "Reprodução literal do art. 25 do CP: \"Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem\". Requisitos cumulativos: agressão injusta + atual/iminente + meios necessários + moderação."
  },
  46: {
    topic: "CP art. 26 e CF art. 228 — Inimputabilidade",
    text: "São inimputáveis: menores de 18 anos (CF art. 228 e CP art. 27) e os inteiramente incapazes de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento (CP art. 26, caput — critério biopsicológico)."
  },
  47: {
    topic: "CP art. 29, caput — Concurso de pessoas",
    text: "\"Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade\" (CP art. 29). Juliana aderiu subjetivamente ao plano e contribuiu dolosamente para a execução — responde como partícipe pelo mesmo crime (furto)."
  },
  48: {
    topic: "CP art. 70, par. único — Concurso formal impróprio",
    text: "Uma única ação + resultados múltiplos + DESÍGNIOS AUTÔNOMOS = concurso formal IMPRÓPRIO/imperfeito, com aplicação CUMULATIVA das penas (CP art. 70, parte final e par. único). No próprio/perfeito, as penas são exasperadas (aumento de 1/6 a 1/2)."
  },
  49: {
    topic: "CP art. 121-A — Feminicídio (Lei 14.994/2024)",
    text: "A Lei 14.994/2024 revogou a qualificadora do art. 121, § 2º, VI, e criou o tipo autônomo do art. 121-A: \"Matar mulher por razões da condição do sexo feminino\", com pena de reclusão de 20 a 40 anos. Expressamente hediondo (Lei 8.072/90, art. 1º, I-B)."
  },
  50: {
    topic: "CP art. 158 — Extorsão / STJ Súmula 96",
    text: "Mediante grave ameaça, o agente CONSTRANGE a vítima a FAZER algo (informar a senha) para obter vantagem econômica indevida — tipifica extorsão (CP art. 158). Súmula 96/STJ: \"O crime de extorsão consuma-se independentemente da obtenção da vantagem indevida\". Não é roubo (que exige subtração direta pelo agente)."
  },
  51: {
    topic: "CP art. 312, caput — Peculato-apropriação",
    text: "Servidor público que se apropria, em proveito próprio, de dinheiro, valor ou qualquer outro bem móvel de que tem a posse em razão do cargo comete peculato-apropriação (CP art. 312, caput, 1ª parte). A guarda em razão do cargo é elemento central do tipo."
  },
  52: {
    topic: "CP art. 109 — Prescrição pela pena máxima",
    text: "Antes do trânsito em julgado da sentença, a prescrição da pretensão punitiva regula-se pelo MÁXIMO da pena privativa de liberdade cominada ao crime (CP art. 109). Após o trânsito, calcula-se pela pena concretamente aplicada. É causa de extinção da punibilidade (CP art. 107, IV)."
  },

  // Direito Processual Penal
  53: {
    topic: "CPP art. 3º-A — Sistema acusatório (Lei 13.964/2019)",
    text: "O Pacote Anticrime inseriu o art. 3º-A no CPP: \"O processo penal terá estrutura acusatória, vedadas a iniciativa do juiz na fase de investigação e a substituição da atuação probatória do órgão de acusação\". Consagra a separação entre acusar, defender e julgar."
  },
  54: {
    topic: "CPP art. 10 — Prazo do IP",
    text: "O art. 10 do CPP dispõe: \"O inquérito deverá terminar no prazo de 10 (dez) dias, se o indiciado tiver sido preso em flagrante, ou estiver preso preventivamente... ou no prazo de 30 (trinta) dias, quando estiver solto, mediante fiança ou sem ela\". Prazo do IP solto admite prorrogação (art. 10, § 3º)."
  },
  55: {
    topic: "CPP art. 28-A — Acordo de não persecução penal",
    text: "Requisitos do ANPP (CPP art. 28-A, caput, inserido pela Lei 13.964/2019): confissão formal e circunstanciada; infração sem violência ou grave ameaça; pena mínima INFERIOR a 4 anos; necessidade e suficiência para reprovação. Pedro preenche todos — cabe ANPP."
  },
  56: {
    topic: "CF art. 129, I e CPP art. 24 — Ação penal pública",
    text: "A ação penal pública incondicionada é a REGRA no sistema brasileiro (CPP art. 24), de titularidade EXCLUSIVA do Ministério Público (CF art. 129, I). As demais extrapolam ou invertem as hipóteses (requisição != representação; queixa-crime é da privada; MP inerte abre a privada subsidiária, não a privada comum)."
  },
  57: {
    topic: "CPP art. 70 — Competência pelo lugar da infração",
    text: "O art. 70 do CPP: \"A competência será, de regra, determinada pelo lugar em que se consumar a infração, ou, no caso de tentativa, pelo lugar em que for praticado o último ato de execução\". Adota o critério do RESULTADO (teoria do resultado) para a consumação."
  },
  58: {
    topic: "CPP arts. 158-A a 158-F — Cadeia de custódia",
    text: "O procedimento descrito (acondicionamento individualizado, lacre, identificação e registro cronológico) é a materialização da cadeia de custódia, obrigatória nos termos dos arts. 158-A a 158-F do CPP, inseridos pela Lei 13.964/2019 (Pacote Anticrime)."
  },
  59: {
    topic: "CPP art. 302, I e II — Flagrante próprio",
    text: "Flagrante próprio (ou real/perfeito) ocorre quando o agente está cometendo a infração (inc. I) ou acabou de cometê-la (inc. II) — hipóteses de surpresa imediata. (A) descreve flagrante impróprio (inc. III); (C) presumido (inc. IV); (D) preparado é ilegal (Súmula 145/STF)."
  },
  60: {
    topic: "CPP art. 313, I — Preventiva em crime doloso",
    text: "A preventiva, em regra, é cabível apenas em crimes DOLOSOS punidos com pena máxima superior a 4 anos (CPP art. 313, I). Homicídio culposo (crime culposo) NÃO admite preventiva, salvo exceções do art. 313 (reincidência específica em doloso, violência doméstica, descumprimento de medida protetiva)."
  },
  61: {
    topic: "CPP art. 394, § 1º, I — Procedimento comum ordinário",
    text: "O procedimento comum ORDINÁRIO aplica-se aos crimes cuja pena máxima cominada seja IGUAL OU SUPERIOR a 4 (quatro) anos (CPP art. 394, § 1º, I). O sumário cabe para penas inferiores a 4 anos; o sumaríssimo aplica-se às infrações de menor potencial ofensivo (JECrim, pena máxima até 2 anos)."
  },
  62: {
    topic: "CF art. 37, § 4º e Lei 8.112/90 — Independência de instâncias",
    text: "A sentença penal condenatória NÃO extingue automaticamente a sanção administrativa aplicada pela mesma conduta, por força da independência das instâncias penal, cível e administrativa (CF art. 37, § 4º). Pelo contrário: condenação penal transitada em julgado é efeito EXTRAPENAL (CP art. 92, I) para perda do cargo."
  },

  // Legislação Penal e Processual Extravagante
  63: {
    topic: "Lei 11.343/06 art. 28, § 2º — Diferenciação uso/tráfico",
    text: "O § 2º do art. 28 determina que o juiz/autoridade considere a natureza e quantidade da substância, local e condições da ação, circunstâncias sociais e pessoais, conduta e antecedentes. Os indicadores objetivos (quantidade, embalagem individualizada, balança, caderno de contabilidade, armas) tipificam tráfico (art. 33), não uso."
  },
  64: {
    topic: "Lei 11.340/06 art. 18 — Medidas protetivas em 48h",
    text: "O art. 18 da Lei Maria da Penha: \"Recebido o expediente com o pedido da ofendida, caberá ao juiz, no prazo de 48 (quarenta e oito) horas: I - conhecer do expediente e do pedido e decidir sobre as medidas protetivas de urgência\". A AP representa; o juiz decide no prazo legal."
  },
  65: {
    topic: "Lei 9.455/97 art. 1º, § 2º — Equiparação à tortura",
    text: "A Lei de Tortura prevê que respondem pelo crime os executores diretos, os mandantes e os que, podendo evitá-lo, se omitem (art. 1º, § 2º). O crime é inafiançável e insuscetível de graça ou anistia (CF art. 5º, XLIII; Lei 9.455/97 art. 1º, § 6º). Equiparado a hediondo."
  },
  66: {
    topic: "Lei 13.869/19 art. 22 + STF RE 603.616 — Abuso por invasão",
    text: "O art. 22 da Lei de Abuso de Autoridade tipifica \"invadir ou adentrar... imóvel alheio... sem determinação judicial ou fora das condições estabelecidas em lei\". STF, RE 603.616 (repercussão geral): a entrada sem mandado só é lícita com fundadas razões de flagrante delito. Denúncia anônima isolada não basta."
  },
  67: {
    topic: "Lei 10.826/03 art. 14 — Porte ilegal de arma",
    text: "Conduzir arma de fogo de uso permitido (revólver .38 é de uso permitido) FORA de residência, sem autorização, tipifica PORTE ILEGAL (art. 14 do Estatuto do Desarmamento). POSSE (art. 12) é manter em residência ou local de trabalho. Pena do porte: 2 a 4 anos de reclusão + multa."
  },
  68: {
    topic: "CF art. 5º, XLIII + Lei 8.072/90 art. 2º — Hediondos",
    text: "Os crimes hediondos e os equiparados (tortura, tráfico, terrorismo) são INAFIANÇÁVEIS e INSUSCETÍVEIS de graça, anistia ou indulto (CF art. 5º, XLIII; Lei 8.072/90, art. 2º, I e II). (A) troca hediondos próprios por equiparados; (B) progressão varia por reincidência e espécie (não é mais 1/6)."
  },
  69: {
    topic: "Lei 15.358/2026 — Marco Legal do Crime Organizado",
    text: "O Marco Antifacção (Lei \"Raul Jungmann\", em vigor desde 2026) criou os tipos autônomos de \"domínio social estruturado\" e \"favorecimento ao domínio social estruturado\", voltados a organizações criminosas ultraviolentas. Não revogou a Lei 12.850/13, que segue em vigor subsidiariamente para as demais ORCRIMs."
  },
  70: {
    topic: "Lei 7.960/89 art. 2º — Temporária prorrogável",
    text: "A prisão temporária, nos crimes do art. 1º da Lei 7.960/89 (rol taxativo), tem prazo de 5 (cinco) dias prorrogáveis por igual período em caso de extrema e comprovada necessidade (art. 2º). Nos crimes hediondos, o prazo é de 30 + 30 dias (Lei 8.072/90, art. 2º, § 4º). Decretação depende sempre de ordem judicial."
  },
  71: {
    topic: "Lei 9.099/95 art. 61 — Menor potencial ofensivo",
    text: "O art. 61 da Lei 9.099/95 (com redação da Lei 11.313/2006): \"Consideram-se infrações penais de menor potencial ofensivo... as contravenções penais e os crimes a que a lei comine pena máxima não superior a 2 (dois) anos, cumulada ou não com multa\"."
  },
  72: {
    topic: "Lei 9.296/96 arts. 2º e 5º — Interceptação telefônica",
    text: "A interceptação depende de ordem judicial fundamentada (CF art. 5º, XII) e só é cabível quando: o fato for punido com RECLUSÃO; a prova não puder ser obtida por outros meios; houver indícios razoáveis de autoria (art. 2º). Prazo: 15 dias prorrogáveis (art. 5º). Alt A erra o decisor; D, o prazo; E, o alcance."
  },
  73: {
    topic: "ECA art. 123 — Internação em estabelecimento próprio",
    text: "O art. 123 do ECA: a internação será cumprida \"em entidade exclusiva para adolescentes, em local distinto daquele destinado ao abrigo\", respeitando-se a condição peculiar de pessoa em desenvolvimento. Prazo máximo 3 anos (art. 121, § 3º). Adolescente = 12 a 18 anos (art. 2º) — descarta A, B e C."
  },
  74: {
    topic: "Lei 12.037/09 art. 3º — Identificação criminal",
    text: "A identificação criminal (datiloscópica e fotográfica) do civilmente identificado é vedada, salvo nas hipóteses do art. 3º: documento com rasura/falsificação, apresentação de documento insuficiente, indícios de outro(s) documento(s), existência de registro em outros nomes, estar sendo averiguado por crimes graves (lista taxativa). Insuficiência/falsificação cabe."
  },
  75: {
    topic: "Lei 9.613/98 art. 1º — Lavagem (após Lei 12.683/12)",
    text: "A Lei 12.683/2012 alterou profundamente a Lei de Lavagem, substituindo o rol taxativo original de crimes antecedentes por QUALQUER infração penal. O art. 1º passou a definir lavagem como ocultar/dissimular natureza, origem, localização, disposição, movimentação ou propriedade de bens oriundos de infração penal."
  },
  76: {
    topic: "LEP arts. 87 e 88 + CP art. 33, § 1º — Regime fechado",
    text: "O regime fechado é cumprido em estabelecimento de segurança máxima ou média (penitenciária), garantido ao preso o direito a visitas, correspondência, assistência (material, jurídica, educacional, social, religiosa e à saúde). RDD exige cela individual; aberto é em casa de albergado."
  },

  // Direito Administrativo
  77: {
    topic: "CF art. 37, § 1º — Impessoalidade na publicidade",
    text: "O art. 37, § 1º, veda a promoção pessoal de autoridades em publicidade de atos, programas, obras, serviços e campanhas da Administração. (B) autotutela não é princípio expresso (é princípio implícito, Súm. 346 e 473 STF); (D) continuidade também é implícito; (E) presunção de inocência não é adm. Expressos: LIMPE."
  },
  78: {
    topic: "Decreto-lei 200/67 e doutrina — Descentralização",
    text: "Descentralização = transferência de competências para pessoa jurídica DISTINTA do ente estatal (Adm. INDIRETA: autarquias, fundações, EPs, SEMs). Desconcentração ocorre dentro do mesmo ente, entre órgãos. (C) autarquia é indireta; (D) SEM é indireta; (E) EP tem personalidade de direito privado."
  },
  79: {
    topic: "Doutrina — Atributos do ato administrativo",
    text: "A presunção de legitimidade e veracidade é atributo clássico dos atos administrativos (Hely Lopes, Di Pietro). Opera inversão do ônus da prova: cabe ao particular desconstituir. Não é absoluta (admite controle judicial — CF art. 5º, XXXV). Portaria interna de delegado-geral é ato administrativo simples válido."
  },
  80: {
    topic: "CTN art. 78 e doutrina — Poder de polícia administrativa",
    text: "O poder de polícia (CTN art. 78) consiste em limitar/disciplinar direitos, interesses ou liberdade em razão do interesse público (saúde, segurança, higiene, ordem). Interdição de casa noturna por descumprimento de normas de incêndio é exercício clássico (atributo da autoexecutoriedade)."
  },
  81: {
    topic: "Lei 14.133/21 art. 28 — Modalidades de licitação",
    text: "O art. 28 da Nova Lei de Licitações elenca cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Extinguiu-se, em relação à Lei 8.666/93, a tomada de preços e o convite. Pregão passou a ser aplicável para bens e serviços comuns (regra geral junto com a concorrência)."
  },
  82: {
    topic: "CF art. 37, § 6º — Responsabilidade objetiva do Estado",
    text: "A responsabilidade civil do Estado por ato comissivo de seus agentes é OBJETIVA (teoria do risco administrativo), bastando conduta + dano + nexo causal (CF art. 37, § 6º). Dispensa prova de dolo ou culpa do agente. Perseguição policial com colisão em terceiro inocente é hipótese clássica."
  },
  83: {
    topic: "Lei 8.429/92 arts. 9º, 10 e 11 (reforma Lei 14.230/21)",
    text: "A reforma de 2021 preservou as três modalidades de improbidade: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e atentado contra princípios da Administração (art. 11, com rol taxativo). Revogou a modalidade culposa; passou a exigir dolo específico (STF modulou efeitos no RE 843.989/PR)."
  },
  84: {
    topic: "Lei 11.370/09 art. 48, § 1º — Hierarquia funcional PC-BA",
    text: "O § 1º do art. 48 da Lei Orgânica da PC-BA estabelece que os cargos de Investigador, Escrivão e Perito Técnico \"estarão na mesma linha hierárquica quando se encontrarem na mesma classe da respectiva carreira\" — regra de equivalência horizontal entre as carreiras policiais civis estaduais."
  },

  // Direito Constitucional
  85: {
    topic: "CF art. 5º, VI — Liberdade de consciência e crença",
    text: "Reprodução literal do art. 5º, VI: \"é inviolável a liberdade de consciência e de crença, sendo assegurado o livre exercício dos cultos religiosos e garantida, na forma da lei, a proteção aos locais de culto e a suas liturgias\". (B) reunião exige só aviso; (C) depositário infiel vedado (SV 25); (D) sigilo da fonte é inviolável; (E) pena de morte só em guerra declarada."
  },
  86: {
    topic: "CF art. 7º, IX — Remuneração do trabalho noturno",
    text: "O art. 7º, IX, assegura \"remuneração do trabalho noturno superior à do diurno\", aplicável a urbanos e rurais. (A) jornada é 8h/dia; (C) salário-família é por DEPENDENTES de baixa renda; (D) aviso-prévio mínimo 30 dias (Lei 12.506/11); (E) licença-paternidade 5 dias (gestante 120)."
  },
  87: {
    topic: "CF art. 12, § 5º (incluído pela EC 131/2023)",
    text: "A EC 131/2023 incluiu o § 5º no art. 12 da CF, permitindo ao brasileiro nato que fez pedido expresso de perda da nacionalidade \"readquiri-la, nos termos definidos em lei\". A reforma extinguiu a perda AUTOMÁTICA por aquisição de outra nacionalidade. Cancelamento de nato por via administrativa segue vedado."
  },
  88: {
    topic: "CF art. 18, § 4º (EC 15/96) — Criação de município",
    text: "O § 4º do art. 18 exige, cumulativamente: lei estadual + dentro do período definido por lei complementar federal + consulta prévia por plebiscito às populações diretamente interessadas + estudos de viabilidade municipal. A LC federal nunca foi editada (STF ADI 3.682 reconheceu omissão), mas o texto permanece vigente."
  },
  89: {
    topic: "CF art. 37, II — Concurso público",
    text: "Reprodução do art. 37, II: \"a investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos... ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração\". (A) exige só compatibilidade; (B) estabilidade é 3 anos; (C) comissão dispensa concurso; (D) remuneração por lei."
  },
  90: {
    topic: "CF art. 136, § 4º — Estado de defesa",
    text: "O § 4º do art. 136 determina que, decretado o estado de defesa, o Presidente, dentro de 24 horas, submeterá o ato com a respectiva justificação ao Congresso Nacional, que decidirá por maioria absoluta. (B) troca órgão e prazo; (C) STF não faz controle preventivo abstrato; (D) suspensão de direitos é do estado de SÍTIO; (E) não há referendo."
  },
  91: {
    topic: "CF art. 95 — Garantias da magistratura",
    text: "O art. 95 da CF confere aos juízes três garantias: vitaliciedade (após 2 anos de exercício, em 1º grau — perda só por sentença judicial transitada em julgado), inamovibilidade (afastada só por interesse público, maioria absoluta do tribunal — art. 93, VIII) e irredutibilidade de subsídio (nominal, admite descontos legais — IR, previdência)."
  },
  92: {
    topic: "CF art. 144 + STF ADI 2.827 — Rol taxativo",
    text: "O art. 144 da CF estabelece ROL TAXATIVO dos órgãos de segurança pública (PF, PRF, PFF, polícias civis, polícias militares, corpos de bombeiros militares, polícias penais). STF (ADIs 2.827 e 236) firmou a taxatividade: Estado não pode criar nova polícia uniformizada por decreto. Única exceção: a EC 104/2019 (polícias penais)."
  },

  // Noções de Contabilidade
  93: {
    topic: "Equação patrimonial básica",
    text: "Equação fundamental: ATIVO = PASSIVO + PATRIMÔNIO LÍQUIDO. Logo, PL = Ativo - Passivo = 500.000 - 320.000 = R$ 180.000,00. É o patrimônio líquido residual (atribuível aos sócios)."
  },
  94: {
    topic: "Classificação de fatos administrativos",
    text: "(I) Pagamento de duplicata = saída de caixa + baixa de passivo (PERMUTATIVO, sem alterar PL); (II) Receita de aluguel = entrada de caixa + aumento de PL (MODIFICATIVO AUMENTATIVO); (III) Compra à vista de equipamento = troca dentro do Ativo (PERMUTATIVO). Combinação: permutativo, modificativo aumentativo, permutativo."
  },
  95: {
    topic: "CPC 27 — Depreciação linear",
    text: "Depreciação linear (quotas constantes): (Custo - Valor Residual) / Vida Útil = (100.000 - 20.000) / 10 = R$ 8.000,00/ano. Fórmula do método linear, prevista no Pronunciamento Técnico CPC 27 (Ativo Imobilizado)."
  },
  96: {
    topic: "Juros compostos — M = C × (1+i)^n",
    text: "Montante = Capital × (1 + taxa)^períodos = 1.000 × (1,10)³ = 1.000 × 1,331 = R$ 1.331,00. Pegadinhas: (A) só 1 mês; (B) só 2 meses; (C) juros simples (1000 × 1,30); (D) soma dos juros simples e compostos de 1 período."
  },

  // Estatística
  97: {
    topic: "Medidas de tendência central",
    text: "Dados ordenados: 2, 3, 5, 6, 8, 8, 10 (n=7). Média = 42/7 = 6. Mediana = 4º valor (central) = 6. Moda = 8 (único repetido). Logo, média = mediana = 6 e moda = 8."
  },
  98: {
    topic: "Variância amostral — s² = Soma(xi-x)² / (n-1)",
    text: "Dados: 1, 3, 5, 7, 9 (n=5). Média = 25/5 = 5. Desvios²: 16 + 4 + 0 + 4 + 16 = 40. Variância AMOSTRAL divide por (n-1): 40/(5-1) = 10 unidades². (Variância populacional dividiria por n = 5 -> 8.)"
  },
  99: {
    topic: "Teorema da probabilidade — eventos independentes",
    text: "Para eventos INDEPENDENTES: P(A e B) = P(A) × P(B) = 0,4 × 0,25 = 0,10. (E) 0,65 é P(A ou B) somada incorretamente; (A, B, D) adotam operações sem respaldo matemático."
  },
  100: {
    topic: "Técnicas de amostragem — estratificada",
    text: "A amostragem ESTRATIFICADA divide a população em subgrupos HOMOGÊNEOS (estratos), dos quais são sorteados elementos proporcionalmente ao tamanho de cada estrato. Garante representatividade dos subgrupos. (A) descreve sistemática; (B) troca sistemática por estratificada; (C) troca conglomerados por aleatória simples."
  }
};
