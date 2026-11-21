/* ==========================================================================
   PC-BA — Simulado 01 (Investigador de Polícia Civil)
   Edital SAEB nº 02/2026 | Instituto AOCP | Prova 01
   100 Questões Objetivas
   ========================================================================== */

const EXAM_META = {
  id: "pcba_simulado_01",
  title: "Simulado 01 — Investigador de Polícia Civil",
  subtitle: "Edital SAEB nº 02/2026 • Polícia Civil do Estado da Bahia • Instituto AOCP • Prova 01",
  durationSeconds: 4 * 60 * 60, // 04h00min
  totalQuestions: 100
};

/**
 * Gabarito oficial (será preenchido quando o usuário enviar o gabarito,
 * ou pode ser colado diretamente pela interface no botão "Inserir Gabarito").
 * Formato: { 1: "A", 2: "C", ... }
 */
const OFFICIAL_ANSWER_KEY = {};

const SUPPORT_TEXTS = {
  portugues_1_10: {
    title: "A arte de esquecer",
    paragraphs: [
      "Vivemos cercados por aparelhos que não esquecem. Fotografias, mensagens, buscas no navegador, deslocamentos registrados por GPS — tudo fica. Nunca tantas pessoas tiveram acesso a tanto arquivo pessoal, e, no entanto, nunca se queixaram tanto da sensação de que a memória falha. O paradoxo não é novo. Já se dizia, nos anos 1970, que a abundância de informação produziria a pobreza da atenção. O que mudou foi a escala: hoje o excesso que nos cerca é imediato, íntimo e inescapável.",
      "Esquecer, dizem os neurocientistas, não é um defeito do cérebro, mas uma de suas funções mais sofisticadas. Lembrar de tudo seria, na prática, não lembrar de nada, pois cada estímulo competiria com igual intensidade pelo nosso foco. É por isso que o cérebro desprende-se, a cada noite, de grande parte do que viveu no dia. O descarte do irrelevante é o que permite que o relevante sobreviva. Em outras palavras, esquecer bem é uma condição para lembrar bem.",
      "Entretanto, as tecnologias digitais vêm interferindo nesse mecanismo delicado. Como quase nada se perde nos arquivos externos, o cérebro deixa de exercitar o descarte. Pior: passa a confiar nas memórias externas, o que o leva a prestar menos atenção ao que vive. Já há estudos indicando que fotografar uma cena durante um passeio diminui a lembrança posterior dessa cena, porque a atenção que seria dedicada à experiência migra para o enquadramento. Lembramo-nos menos daquilo que mais nos esforçamos para registrar.",
      "A conversa sobre memória, no fim das contas, não é apenas uma conversa sobre o passado. É também uma conversa sobre o presente, porque a atenção é o que define, a cada instante, aquilo que valerá a pena um dia ser recordado. Perder a capacidade de esquecer significa, de modo indireto, perder a capacidade de escolher o que importa.",
      "Talvez por isso o tempo livre, as caminhadas sem destino e as conversas sem câmera voltem a ser recomendados por médicos. Não como luxo, mas como higiene mental. É nesses intervalos de ócio aparentemente improdutivo que o cérebro faz seu trabalho invisível: triar, descartar e consolidar. Sem esses intervalos, continuamos a acumular arquivos, mas deixamos de construir sentido.",
      "Entre o lembrar demais e o esquecer tudo há um ponto de equilíbrio que cada um precisa reencontrar. Não é um retrocesso tecnológico, mas uma retomada do próprio ritmo. Nossos antepassados sabiam, por intuição, aquilo que a neurociência vem redescobrindo: a mente que esquece é a mesma que inventa, cria e segue adiante."
    ],
    source: "Texto adaptado para fins didáticos."
  }
};

const DISCIPLINES = [
  { id: "portugues", name: "Língua Portuguesa", short: "Português", range: [1, 10], color: "#a78bfa" },
  { id: "rlm", name: "Raciocínio Lógico-Matemático", short: "RLM", range: [11, 18], color: "#fb923c" },
  { id: "informatica", name: "Informática", short: "Informática", range: [19, 23], color: "#34d399" },
  { id: "medicina_legal", name: "Medicina Legal", short: "Med. Legal", range: [24, 28], color: "#f472b6" },
  { id: "leg_geral", name: "Legislação Geral", short: "Leg. Geral", range: [29, 33], color: "#eab308" },
  { id: "igualdade", name: "Promoção da Igualdade Racial e de Gênero", short: "Igualdade", range: [34, 37], color: "#facc15" },
  { id: "atualidades", name: "Atualidades", short: "Atualidades", range: [38, 40], color: "#2dd4bf" },
  { id: "penal", name: "Direito Penal", short: "Dir. Penal", range: [41, 52], color: "#38bdf8" },
  { id: "processual_penal", name: "Direito Processual Penal", short: "Proc. Penal", range: [53, 62], color: "#60a5fa" },
  { id: "extravagante", name: "Legislação Penal e Processual Extravagante", short: "Leg. Extrav.", range: [63, 76], color: "#818cf8" },
  { id: "administrativo", name: "Direito Administrativo", short: "Dir. Adm.", range: [77, 84], color: "#c084fc" },
  { id: "constitucional", name: "Direito Constitucional", short: "Dir. Const.", range: [85, 92], color: "#22d3ee" },
  { id: "contabilidade", name: "Noções de Contabilidade", short: "Contabilidade", range: [93, 96], color: "#fb7185" },
  { id: "estatistica", name: "Estatística", short: "Estatística", range: [97, 100], color: "#f59e0b" }
];

const QUESTIONS = [
  // ==================== LÍNGUA PORTUGUESA (1–10) ====================
  {
    number: 1,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "Assinale a alternativa que apresenta a ideia central defendida pelo autor do texto.",
    options: {
      A: "O esquecimento é condição necessária para que a atenção e a memória funcionem adequadamente.",
      B: "As tecnologias digitais tornaram obsoleto o funcionamento natural da memória humana no cotidiano.",
      C: "A dependência dos aparelhos eletrônicos é a principal causa dos distúrbios atuais de memória.",
      D: "A acumulação indefinida de registros digitais garante acesso a lembranças que a mente perderia.",
      E: "O cérebro humano descarta de forma indistinta tudo o que considera informação ou estímulo."
    }
  },
  {
    number: 2,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "No trecho \"O descarte do irrelevante é o que permite que o relevante sobreviva\" (2º parágrafo), o autor",
    options: {
      A: "atribui à memória de longo prazo a função de armazenar informações relevantes e irrelevantes de modo seletivo.",
      B: "sugere que os aparelhos digitais estão aptos a reconhecer, por si próprios, aquilo que deve ser descartado.",
      C: "afirma que o esquecimento seletivo é o mecanismo que viabiliza a preservação daquilo que de fato importa.",
      D: "critica a tendência contemporânea de valorizar excessivamente o relevante em detrimento do irrelevante.",
      E: "propõe que o cérebro humano opera por critérios idênticos aos adotados pelos arquivos externos de dados."
    }
  },
  {
    number: 3,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "Assinale a alternativa que analisa corretamente a formação da palavra em destaque, extraída do texto.",
    options: {
      A: "\"a MEMÓRIA falha\" — formada por derivação sufixal, a partir do verbo \"memorar\", pelo acréscimo do sufixo nominalizador \"-ria\".",
      B: "\"a NEUROCIÊNCIA vem redescobrindo\" — formada por derivação prefixal, com acréscimo do prefixo \"neuro-\" ao substantivo \"ciência\".",
      C: "\"triar, descartar e CONSOLIDAR\" — formada por derivação regressiva, a partir do substantivo \"consolo\", pela perda do sufixo.",
      D: "\"intervalos de ÓCIO aparentemente improdutivo\" — formada por composição por aglutinação, a partir dos radicais \"ó-\" e \"cio-\".",
      E: "\"a neurociência vem REDESCOBRINDO\" — formada por derivação prefixal, com acréscimo do prefixo \"re-\" ao verbo \"descobrir\"."
    }
  },
  {
    number: 4,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "Em \"o cérebro desprende-SE, a cada noite, de grande parte do que viveu no dia\" (2º parágrafo), o pronome em destaque",
    options: {
      A: "desempenha a função de objeto direto do verbo \"desprender\" na oração em que ele figura no trecho.",
      B: "integra a estrutura do verbo pronominal, formando com ele uma unidade de sentido.",
      C: "poderia ser suprimido sem qualquer prejuízo gramatical ou semântico para o período transcrito acima.",
      D: "deveria aparecer antes do verbo, dado o emprego da locução adverbial \"a cada noite\" no período.",
      E: "tem valor expletivo, servindo apenas como recurso de ênfase estilística dentro do trecho."
    }
  },
  {
    number: 5,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "No trecho \"Lembramo-nos menos daquilo que mais nos esforçamos para registrar\" (3º parágrafo), a colocação pronominal segue a norma-padrão. Assinale a alternativa em que a reescrita do trecho também respeita a norma-padrão quanto à colocação dos pronomes.",
    options: {
      A: "Lembramos-nos menos daquilo que mais nos esforçamos para registrar.",
      B: "Nos lembramos menos daquilo que nos esforçamos mais para registrar.",
      C: "Lembramo-nos menos daquilo em que nós mais esforçamo-nos para registrar.",
      D: "Nós nos lembramos menos daquilo que mais nos esforçamos para registrar.",
      E: "Lembramos menos daquilo que nos esforçamos-nos mais para registrar."
    }
  },
  {
    number: 6,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "Em \"É nesses intervalos de ócio aparentemente improdutivo que o cérebro faz seu trabalho invisível\" (5º parágrafo), a expressão \"nesses intervalos\"",
    options: {
      A: "retoma apenas a última ideia expressa no período anterior do mesmo parágrafo.",
      B: "introduz uma causa que explica a recomendação feita pelos médicos citados.",
      C: "marca uma oposição entre o uso do tempo livre e o funcionamento esperado do cérebro.",
      D: "estabelece uma condição sem a qual o cérebro perderia sua capacidade de criar.",
      E: "remete ao tempo livre, às caminhadas e às conversas sem câmera, mencionados antes."
    }
  },
  {
    number: 7,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "Assinale a alternativa em que a justificativa gramatical para o emprego do acento gráfico na palavra em destaque esteja correta.",
    options: {
      A: "\"as tecnologias digitais VÊM interferindo\" — o acento distingue a forma plural \"vêm\" da forma singular \"vem\", do verbo \"vir\".",
      B: "\"a pobreza da ATENÇÃO\" — o acento assinala palavra paroxítona terminada em ditongo nasal, segundo a regra geral.",
      C: "\"não é um retrocesso TECNOLÓGICO\" — o acento é obrigatório por se tratar de palavra paroxítona terminada em \"o\".",
      D: "\"o excesso é imediato, ÍNTIMO e inescapável\" — o acento se emprega para diferenciar o adjetivo \"íntimo\" do verbo \"intimo\".",
      E: "\"o cérebro faz trabalho INVISÍVEL\" — o acento é empregado em palavra proparoxítona terminada em consoante."
    }
  },
  {
    number: 8,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "No trecho \"a abundância de informação produziria a pobreza da atenção\" (1º parágrafo), a substituição de \"a atenção\" por \"nossa atenção\" exigiria",
    options: {
      A: "a manutenção da forma \"da\", pois o possessivo nunca modifica regência nominal.",
      B: "a inserção do artigo definido \"a\", formando a sequência obrigatória \"a nossa atenção\".",
      C: "o emprego do acento grave, resultando na forma \"à nossa atenção\" por crase facultativa.",
      D: "o acento grave obrigatório, resultando em \"à nossa atenção\", pela regência do substantivo.",
      E: "a substituição do artigo pela preposição \"de\", formando \"de nossa atenção\" no trecho."
    }
  },
  {
    number: 9,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "No trecho \"Perder a capacidade de esquecer significa, de modo indireto, perder a capacidade de escolher o que importa\" (4º parágrafo), o sentido original é mantido na seguinte reescrita:",
    options: {
      A: "Esquecer é, de modo direto, selecionar aquilo que verdadeiramente nos importa no dia a dia.",
      B: "Não esquecer significa, de modo indireto, não poder escolher aquilo que de fato importa.",
      C: "Quem não esquece perde, de forma direta, toda a capacidade de escolher aquilo que importa.",
      D: "Perder a escolha do que importa resulta, indiretamente, da incapacidade de esquecer o irrelevante.",
      E: "A capacidade de esquecer é diretamente proporcional à capacidade de escolha pessoal e profissional."
    }
  },
  {
    number: 10,
    disciplineId: "portugues",
    supportTextId: "portugues_1_10",
    stem: "Em \"Nossos antepassados sabiam, por intuição, aquilo que a neurociência vem redescobrindo\" (6º parágrafo), as vírgulas",
    options: {
      A: "separam o sujeito do verbo principal, caracterizando uma construção enfática no trecho.",
      B: "marcam a presença de um aposto explicativo entre o sujeito e o verbo do trecho.",
      C: "delimitam oração subordinada adverbial causal intercalada no período acima transcrito.",
      D: "isolam uma locução adverbial de modo intercalada entre o verbo e seu complemento.",
      E: "indicam a elipse de termos oracionais que podem ser facilmente recuperados pelo contexto."
    }
  },

  // ==================== RACIOCÍNIO LÓGICO-MATEMÁTICO (11–18) ====================
  {
    number: 11,
    disciplineId: "rlm",
    stem: "Em uma delegacia da Polícia Civil, foram distribuídos 180 inquéritos entre três investigadores. Ana ficou com 2/5 do total; Bruno ficou com o dobro do número de inquéritos que coube a Carla. Quantos inquéritos ficaram sob responsabilidade de Carla?",
    options: {
      A: "36.",
      B: "48.",
      C: "54.",
      D: "60.",
      E: "72."
    }
  },
  {
    number: 12,
    disciplineId: "rlm",
    stem: "Uma equipe de 8 investigadores leva 15 dias para concluir a análise de 240 depoimentos, trabalhando 6 horas por dia. Mantido o mesmo ritmo de trabalho, de quantos dias precisará uma equipe de 6 investigadores para concluir a análise de 480 depoimentos, trabalhando 8 horas por dia?",
    options: {
      A: "18 dias.",
      B: "24 dias.",
      C: "30 dias.",
      D: "36 dias.",
      E: "45 dias."
    }
  },
  {
    number: 13,
    disciplineId: "rlm",
    stem: "Em uma operação da Polícia Civil, dois agentes somam juntos 24 anos de carreira. Sabendo que o agente mais experiente tem 6 anos a mais de carreira que o outro, qual é o tempo de carreira do agente menos experiente?",
    options: {
      A: "6 anos.",
      B: "9 anos.",
      C: "12 anos.",
      D: "15 anos.",
      E: "18 anos."
    }
  },
  {
    number: 14,
    disciplineId: "rlm",
    stem: "Considere a proposição composta: \"Se o inquérito está concluído, então o relatório foi enviado ao Ministério Público.\" Uma proposição logicamente equivalente a essa é:",
    options: {
      A: "Se o relatório foi enviado ao Ministério Público, então o inquérito está concluído.",
      B: "Se o inquérito não está concluído, então o relatório não foi enviado ao Ministério Público.",
      C: "O inquérito está concluído e o relatório foi enviado ao Ministério Público.",
      D: "Se o relatório não foi enviado ao Ministério Público, então o inquérito não está concluído.",
      E: "O inquérito não está concluído ou o relatório não foi enviado ao Ministério Público."
    }
  },
  {
    number: 15,
    disciplineId: "rlm",
    stem: "A negação lógica da proposição \"Todos os investigadores participaram da reunião e nenhum delegado faltou\" é:",
    options: {
      A: "Nenhum investigador participou da reunião ou todos os delegados faltaram.",
      B: "Todos os investigadores faltaram à reunião e nenhum delegado participou.",
      C: "Pelo menos um investigador participou da reunião e pelo menos um delegado não faltou.",
      D: "Algum investigador não participou da reunião e nenhum delegado faltou.",
      E: "Pelo menos um investigador não participou da reunião ou algum delegado faltou."
    }
  },
  {
    number: 16,
    disciplineId: "rlm",
    stem: "Considere as seguintes afirmações: \"Todo investigador é concursado\" e \"Alguns concursados são plantonistas\". Com base apenas nessas afirmações, é CORRETO concluir que:",
    options: {
      A: "Nenhum investigador é um servidor não concursado.",
      B: "Algum investigador é um servidor plantonista.",
      C: "Nenhum investigador é um servidor plantonista.",
      D: "Todo plantonista é também um servidor concursado.",
      E: "Todo concursado é também um investigador plantonista."
    }
  },
  {
    number: 17,
    disciplineId: "rlm",
    stem: "Uma equipe de investigação da Polícia Civil é composta por 7 agentes. Para a formação de uma comissão de 3 agentes dentre esses 7, com os cargos de presidente, secretário e relator, de quantas maneiras distintas essa comissão pode ser constituída?",
    options: {
      A: "35.",
      B: "210.",
      C: "343.",
      D: "720.",
      E: "5.040."
    }
  },
  {
    number: 18,
    disciplineId: "rlm",
    stem: "No arquivo de uma delegacia há 10 inquéritos, dos quais 4 são de crimes contra o patrimônio e 6 são de crimes contra a pessoa. Dois inquéritos serão sorteados sucessivamente, sem reposição, para auditoria. Qual é a probabilidade de que o primeiro inquérito sorteado seja de crime contra o patrimônio e o segundo seja de crime contra a pessoa?",
    options: {
      A: "2/15.",
      B: "6/25.",
      C: "4/15.",
      D: "2/5.",
      E: "8/15."
    }
  },

  // ==================== INFORMÁTICA (19–23) ====================
  {
    number: 19,
    disciplineId: "informatica",
    stem: "Durante a redação de um relatório de investigação no Microsoft Word 2019 (em português), um investigador deseja alinhar o parágrafo selecionado de forma que ambas as margens (esquerda e direita) fiquem perfeitamente retas. Qual atalho de teclado padrão executa diretamente esse tipo de alinhamento?",
    options: {
      A: "Ctrl + E.",
      B: "Ctrl + G.",
      C: "Ctrl + Q.",
      D: "Ctrl + J.",
      E: "Ctrl + L."
    }
  },
  {
    number: 20,
    disciplineId: "informatica",
    stem: "Durante o expediente em uma delegacia, um investigador recebe por e-mail institucional uma mensagem supostamente enviada pela corregedoria, com remetente visualmente semelhante ao oficial, solicitando a confirmação urgente de login e senha em um link anexo para \"manutenção emergencial do sistema interno\". Ao clicar, é redirecionado para uma página idêntica à de acesso corporativo, onde fornece suas credenciais. Dias depois, descobre que suas credenciais estavam sendo utilizadas indevidamente. A ameaça digital descrita caracteriza:",
    options: {
      A: "um ataque de ransomware, que criptografa dados do sistema e exige pagamento para a liberação do acesso.",
      B: "um incidente de keylogger, que registra silenciosamente as teclas digitadas e as envia a terceiros.",
      C: "um ataque de sniffer, que intercepta pacotes transmitidos sem criptografia dentro da rede corporativa interna.",
      D: "um ataque de força bruta, que testa combinações sucessivas de senhas até obter acesso ao sistema.",
      E: "um ataque de phishing, que simula comunicação legítima para induzir o usuário a fornecer dados sigilosos."
    }
  },
  {
    number: 21,
    disciplineId: "informatica",
    stem: "Em uma planilha do Microsoft Excel 365 (em português), um escrivão registrou na célula A1 o valor numérico 500. Em seguida, inseriu na célula B1 a fórmula =A1*2 e, na célula C1, a fórmula =B1+A1. Após copiar e colar a fórmula contida em C1 para a célula C2, o valor exibido em C2 será:",
    options: {
      A: "0.",
      B: "500.",
      C: "1500.",
      D: "3000.",
      E: "#REF!."
    }
  },
  {
    number: 22,
    disciplineId: "informatica",
    stem: "Durante uma pesquisa realizada no navegador Google Chrome (em português), um investigador deseja acessar uma página sem que o histórico de navegação, os cookies e os dados dos sites visitados sejam armazenados ao final da sessão. Qual recurso do navegador atende especificamente a essa necessidade?",
    options: {
      A: "Modo Leitor, que apresenta a página sem elementos gráficos adicionais e desativa gravações do navegador.",
      B: "Janela anônima, que impede o armazenamento local do histórico, de cookies e de dados de sessão.",
      C: "Modo Convidado, que exige autenticação prévia por meio de conta Google antes do uso do navegador.",
      D: "Favoritos, que organiza as páginas acessadas por ordem alfabética para posterior consulta.",
      E: "Perfis múltiplos, que separam as atividades em contas vinculadas a usuários distintos."
    }
  },
  {
    number: 23,
    disciplineId: "informatica",
    stem: "Em relação aos conceitos de armazenamento em nuvem e aos procedimentos de backup, considere as afirmações a seguir, no contexto do uso corporativo em órgãos públicos.\n\nI. O armazenamento em nuvem permite acesso remoto aos arquivos a partir de diferentes dispositivos conectados à internet, mediante autenticação do usuário.\nII. O backup incremental copia, em cada execução, apenas os arquivos criados ou modificados desde o último backup, reduzindo o tempo e o espaço necessários.\nIII. O backup completo (full backup) executado diariamente dispensa a necessidade de qualquer política de retenção de versões anteriores dos arquivos.\nIV. A sincronização automática entre dispositivos oferecida pelos serviços de nuvem substitui, por si só, a adoção de uma rotina formal de backup.\n\nEstá CORRETO o que se afirma apenas em",
    options: {
      A: "I e II.",
      B: "II e III.",
      C: "III e IV.",
      D: "I e IV.",
      E: "II, III e IV."
    }
  },

  // ==================== MEDICINA LEGAL (24–28) ====================
  {
    number: 24,
    disciplineId: "medicina_legal",
    stem: "Em relação aos fenômenos cadavéricos abióticos imediatos, assinale a alternativa que apresenta corretamente um dos sinais utilizados para a constatação da morte.",
    options: {
      A: "Rigidez cadavérica generalizada, que se instala de maneira completa nas primeiras duas horas após o óbito.",
      B: "Mancha verde abdominal, resultante da ação de bactérias intestinais sobre a parede do abdome do cadáver.",
      C: "Abolição da consciência, da sensibilidade, da motilidade, da respiração e dos batimentos cardíacos.",
      D: "Esfriamento do cadáver em até duas horas após o óbito, com a temperatura corporal igualando-se à ambiente.",
      E: "Formação de livores hipostáticos fixos nas regiões de declive do corpo, sem possibilidade de mobilização."
    }
  },
  {
    number: 25,
    disciplineId: "medicina_legal",
    stem: "Durante o exame pericial em um indivíduo vítima de agressão, o perito constata lesão produzida por instrumento que atua simultaneamente por pressão e por deslizamento, apresentando bordas regulares e nítidas, com maior comprimento do que profundidade. A lesão descrita é característica de instrumento:",
    options: {
      A: "contundente.",
      B: "perfurante.",
      C: "cortante.",
      D: "perfurocortante.",
      E: "cortocontundente."
    }
  },
  {
    number: 26,
    disciplineId: "medicina_legal",
    stem: "Em relação aos aspectos médico-legais dos ferimentos produzidos por projétil de arma de fogo, a presença simultânea, no orifício de entrada, da zona de tatuagem (incrustação de grãos de pólvora não queimados na pele) e da zona de esfumaçamento (depósito de fuligem removível por limpeza) permite ao perito concluir que o disparo foi efetuado a:",
    options: {
      A: "curta distância, com o cano da arma encostado na superfície corporal da vítima.",
      B: "curta distância, dentro do alcance dos elementos secundários do disparo, mas sem contato.",
      C: "longa distância, fora do alcance de qualquer elemento secundário do disparo efetuado.",
      D: "distância indeterminada, sendo impossível ao perito qualquer inferência técnica no caso.",
      E: "média distância, apenas com depósito de fuligem removível e sem incrustação de pólvora."
    }
  },
  {
    number: 27,
    disciplineId: "medicina_legal",
    stem: "Durante uma perícia de local de crime, foram coletados vestígios biológicos para posterior análise laboratorial. Sobre a cadeia de custódia da prova, prevista no Código de Processo Penal (Lei nº 12.830/2013 e Lei nº 13.964/2019), assinale a alternativa correta.",
    options: {
      A: "A cadeia de custódia se encerra automaticamente com a liberação dos vestígios à autoridade policial competente.",
      B: "O rastreamento dos vestígios inicia-se somente após o encaminhamento do material ao órgão pericial oficial.",
      C: "O conjunto de todos os procedimentos destinados a manter e a documentar a história cronológica do vestígio.",
      D: "A quebra da cadeia de custódia é mera irregularidade, sem potencial de afetar a validade da prova produzida.",
      E: "O armazenamento final dos vestígios dispensa qualquer registro formal após o envio ao laboratório de análise."
    }
  },
  {
    number: 28,
    disciplineId: "medicina_legal",
    stem: "Nos crimes contra a dignidade sexual, o exame pericial em vítima de estupro deve observar protocolos específicos de coleta e preservação de vestígios. Assinale a alternativa que indica procedimento tecnicamente adequado nesse contexto.",
    options: {
      A: "Dispensar a coleta de vestígios biológicos quando a vítima já tiver realizado higiene corporal após o fato.",
      B: "Realizar a coleta de material subungueal, vaginal, anal e oral conforme as circunstâncias narradas pela vítima.",
      C: "Encaminhar as roupas da vítima para lavagem antes do envio ao laboratório, a fim de evitar contaminação cruzada.",
      D: "Limitar o exame apenas à descrição de lesões visíveis externamente, sem coleta de materiais para o laboratório.",
      E: "Aguardar prazo mínimo de 72 horas após o fato para que a coleta de material biológico seja juridicamente válida."
    }
  },

  // ==================== LEGISLAÇÃO GERAL (29–33) ====================
  {
    number: 29,
    disciplineId: "leg_geral",
    stem: "À luz do art. 3º da Lei Estadual nº 11.370/2009 (Lei Orgânica da Polícia Civil do Estado da Bahia), são princípios institucionais da Polícia Civil, EXCETO:",
    options: {
      A: "a legalidade, a impessoalidade, a moralidade e a eficiência.",
      B: "a hierarquia funcional e a disciplina funcional aplicadas ao serviço.",
      C: "a indivisibilidade institucional e a indelegabilidade funcional.",
      D: "a publicidade e a continuidade dos atos de polícia judiciária.",
      E: "a proteção e a promoção dos direitos da dignidade da pessoa humana."
    }
  },
  {
    number: 30,
    disciplineId: "leg_geral",
    stem: "Nos termos da Lei Estadual nº 6.677/1994 (Estatuto dos Servidores Públicos Civis do Estado da Bahia), a penalidade disciplinar de suspensão",
    options: {
      A: "será sempre convertida em multa, calculada à base de 50% da remuneração do servidor, por dia de pena aplicada.",
      B: "não poderá exceder de 30 (trinta) dias, ainda que haja reincidência em faltas disciplinares graves.",
      C: "terá seu registro automaticamente cancelado após o decurso de 2 (dois) anos de efetivo exercício.",
      D: "será aplicada em caso de primeira infração, independentemente da existência de advertência prévia.",
      E: "não poderá exceder de 90 (noventa) dias e cabe em caso de reincidência em faltas puníveis com advertência."
    }
  },
  {
    number: 31,
    disciplineId: "leg_geral",
    stem: "Em conformidade com a Lei Estadual nº 12.209/2011 (que dispõe sobre o processo administrativo no âmbito da Administração Pública do Estado da Bahia), os atos administrativos ilegais de que decorram efeitos favoráveis ao administrado",
    options: {
      A: "deverão ser invalidados no prazo de 5 (cinco) anos, contados da data em que foram praticados, salvo má-fé do administrado.",
      B: "não poderão ser invalidados em qualquer hipótese, por força dos princípios da segurança jurídica e da proteção à confiança legítima.",
      C: "deverão ser invalidados no prazo de 10 (dez) anos, contados da data em que foram praticados pela autoridade administrativa.",
      D: "poderão ser invalidados a qualquer tempo, independentemente da existência de boa ou de má-fé do administrado beneficiado.",
      E: "somente poderão ser invalidados mediante decisão judicial, após prévia manifestação do órgão de controle externo."
    }
  },
  {
    number: 32,
    disciplineId: "leg_geral",
    stem: "Segundo a Lei Estadual nº 14.634/2023, que disciplina as normas de licitações e contratos administrativos aplicáveis no âmbito da Administração Pública do Estado da Bahia, é CORRETO afirmar que",
    options: {
      A: "a aplicação da Lei Federal nº 14.133/2021 fica afastada no Estado da Bahia, que regula tudo por legislação própria estadual.",
      B: "aplica-se a Lei Federal nº 14.133/2021, salvo dispositivos exclusivos da Administração Pública Federal ou Municipal.",
      C: "a Lei Federal nº 14.133/2021 só se aplica no Estado quando houver autorização expressa do Governador em cada licitação.",
      D: "a competência para regulamentar a Lei Federal nº 14.133/2021 no Estado foi atribuída à Assembleia Legislativa estadual.",
      E: "a autonomia estadual impede qualquer norma geral federal em matéria de licitações no âmbito da Administração baiana."
    }
  },
  {
    number: 33,
    disciplineId: "leg_geral",
    stem: "Nos termos da Lei Federal nº 8.906/1994 (Estatuto da Advocacia e da OAB), é direito do advogado",
    options: {
      A: "ter acesso irrestrito aos autos de inquérito policial em segredo de justiça, sem necessidade de procuração ou de autorização judicial.",
      B: "comunicar-se com cliente preso somente mediante prévia autorização escrita da autoridade policial responsável pela custódia.",
      C: "comunicar-se, pessoal e reservadamente, com seus clientes presos, detidos ou recolhidos, ainda que considerados incomunicáveis.",
      D: "exigir a presença pessoal da autoridade judiciária em todo e qualquer ato de instrução realizado durante o inquérito policial em curso.",
      E: "impedir a lavratura do auto de prisão em flagrante do próprio cliente, até a chegada de representante oficial da seccional da OAB."
    }
  },

  // ==================== PROMOÇÃO DA IGUALDADE RACIAL E DE GÊNERO (34–37) ====================
  {
    number: 34,
    disciplineId: "igualdade",
    stem: "Nos termos da Lei Federal nº 11.340/2006 (Lei Maria da Penha), NÃO constitui forma de violência doméstica e familiar contra a mulher expressamente prevista nessa lei",
    options: {
      A: "a violência física, assim entendida qualquer conduta que ofenda a integridade ou saúde corporal.",
      B: "a violência psicológica, caracterizada por conduta que cause dano emocional e diminuição da autoestima.",
      C: "a violência sexual, entendida como qualquer conduta que constranja a presenciar, manter ou participar de relação sexual.",
      D: "a violência institucional, caracterizada por ação ou omissão de agentes públicos em todo tipo de atendimento.",
      E: "a violência patrimonial, entendida como qualquer conduta que configure retenção, subtração ou destruição parcial de bens."
    }
  },
  {
    number: 35,
    disciplineId: "igualdade",
    stem: "Segundo o Capítulo XXIII (Do Negro) da Constituição do Estado da Bahia, é CORRETO afirmar que",
    options: {
      A: "a prática do racismo configura crime afiançável, com pena de detenção, nos termos da lei estadual específica.",
      B: "o Estado poderá manter intercâmbio cultural com países que mantiverem discriminação racial, salvo esportivo.",
      C: "a rede estadual de ensino está dispensada de incluir, em programas, disciplina sobre a participação do negro.",
      D: "o calendário oficial do Estado da Bahia reconhece como Dia da Consciência Negra uma data diversa de 20 de novembro.",
      E: "a publicidade estadual com mais de duas pessoas deve assegurar a inclusão de pessoa da raça negra."
    }
  },
  {
    number: 36,
    disciplineId: "igualdade",
    stem: "Em relação aos crimes de racismo e de injúria racial, à luz da atual redação da Lei nº 7.716/1989, assinale a alternativa CORRETA.",
    options: {
      A: "A Lei nº 14.532/2023 equiparou a injúria racial ao crime de racismo, tornando-a imprescritível e inafiançável.",
      B: "O crime de racismo da Lei nº 7.716/1989 continua imprescritível, mas foi convertido em crime afiançável pela Lei nº 14.532/2023.",
      C: "A injúria racial, no Código Penal, permanece crime de ação penal pública condicionada à representação, após a Lei nº 14.532/2023.",
      D: "O racismo, na forma da Lei nº 7.716/1989, é crime prescritível em 20 (vinte) anos, contados da data da consumação.",
      E: "A Lei nº 14.532/2023 revogou integralmente a Lei nº 7.716/1989, deslocando o racismo para o Código Penal brasileiro."
    }
  },
  {
    number: 37,
    disciplineId: "igualdade",
    stem: "Nos termos da Lei Estadual nº 13.182/2014 (Estatuto da Igualdade Racial e de Combate à Intolerância Religiosa do Estado da Bahia), entende-se por racismo institucional",
    options: {
      A: "toda prática individual, deliberada ou culposa, de agente público que resulte em tratamento desigual a pessoa negra em serviços estatais.",
      B: "ações ou omissões sistêmicas caracterizadas por normas, práticas e padrões institucionais que resultam em discriminação.",
      C: "o preconceito manifestado por particulares em ambiente privado, desde que caracterize ofensa à dignidade da pessoa humana da vítima.",
      D: "a ideologia baseada em teorias que estabelecem hierarquias raciais ou étnicas entre seres humanos, no plano exclusivamente teórico.",
      E: "o conjunto de medidas afirmativas voltadas a corrigir desigualdades estruturais produzidas pela discriminação histórica no País."
    }
  },

  // ==================== ATUALIDADES (38–40) ====================
  {
    number: 38,
    disciplineId: "atualidades",
    stem: "Em novembro de 2025, o Brasil sediou pela primeira vez uma Conferência das Nações Unidas sobre Mudança do Clima (COP). Sobre esse evento, assinale a alternativa CORRETA.",
    options: {
      A: "A COP30 foi realizada na cidade de Belém, no Pará, sendo a primeira edição da conferência em uma cidade do bioma amazônico.",
      B: "A conferência foi realizada na cidade de Manaus, no Amazonas, coincidindo com os dez anos de aniversário do Protocolo de Quioto.",
      C: "O Brasil sediou a conferência em Brasília, por imposição logística da ONU, para evitar interferência da floresta nas negociações.",
      D: "A COP30 foi antecipada para julho de 2025 e realizada no Rio de Janeiro, em paralelo à cúpula do G20 na capital fluminense.",
      E: "A conferência foi cancelada pouco antes de sua abertura, em razão de impasses diplomáticos entre Estados Unidos e China."
    }
  },
  {
    number: 39,
    disciplineId: "atualidades",
    stem: "Em agosto de 2025, foi deflagrada operação federal considerada a maior já realizada no Brasil contra a infiltração do crime organizado na economia formal, com atuação integrada entre Polícia Federal, Receita Federal, Ministério Público e polícias estaduais. Trata-se da",
    options: {
      A: "Operação Lava Jato, voltada ao enfrentamento de crimes contra o sistema financeiro nacional em bancos privados.",
      B: "Operação Satiagraha, destinada ao combate de esquemas de fraude bancária em instituições financeiras privadas.",
      C: "Operação Mãos Limpas, direcionada ao enfrentamento de corrupção praticada por servidores do Poder Executivo federal.",
      D: "Operação Carbono Oculto, voltada ao combate da infiltração do PCC no setor de combustíveis e no mercado financeiro.",
      E: "Operação Zelotes, direcionada à repressão de fraudes tributárias cometidas por grandes contribuintes do País."
    }
  },
  {
    number: 40,
    disciplineId: "atualidades",
    stem: "O principal programa estadual de combate à violência letal implementado no âmbito do Sistema de Defesa Social do Estado da Bahia, instituído em 2011 e incorporado aos sucessivos Planos Estaduais de Segurança Pública, denomina-se",
    options: {
      A: "Programa Bahia Segura, voltado à ampliação do policiamento ostensivo nas regiões metropolitanas do Estado.",
      B: "Pronasci-Bahia, programa federal replicado em âmbito estadual para reduzir a criminalidade em áreas urbanas vulneráveis.",
      C: "Programa Ronda Maria da Penha, destinado à proteção de mulheres vítimas de violência doméstica e familiar.",
      D: "Programa Território de Paz, destinado a áreas de alta vulnerabilidade social e à prevenção comunitária de delitos.",
      E: "Programa Pacto pela Vida, focado na redução de crimes violentos letais intencionais e articulação intersetorial."
    }
  },

  // ==================== DIREITO PENAL (41–52) ====================
  {
    number: 41,
    disciplineId: "penal",
    stem: "Em relação ao princípio da legalidade no Direito Penal, previsto no art. 1º do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "O princípio admite a aplicação da analogia in malam partem, desde que para tipificar condutas socialmente lesivas não previstas em lei.",
      B: "O princípio proíbe o uso de leis penais em branco, que dependam de complemento normativo editado por autoridade distinta do Congresso Nacional.",
      C: "O princípio exige lei anterior ao fato e proíbe o uso da analogia em prejuízo do réu, admitida, no entanto, a analogia em benefício do réu.",
      D: "O princípio admite a tipificação de condutas por meio de medida provisória, desde que convertida em lei no prazo constitucional de 60 dias.",
      E: "O princípio permite a aplicação retroativa de lei penal mais gravosa, quando o fato praticado representar perigo social elevado para a coletividade."
    }
  },
  {
    number: 42,
    disciplineId: "penal",
    stem: "Sobre a aplicação da lei penal no tempo, à luz do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "A lei penal mais gravosa (novatio legis in pejus) retroage para alcançar fatos praticados antes de sua vigência pelo agente.",
      B: "A lei intermediária mais benéfica (lex intermedia) não pode ser aplicada ao fato, por força do princípio da imediatidade da norma vigente.",
      C: "A lei temporária deixa de ser aplicada aos fatos praticados durante seu período de eficácia, após expirado seu prazo normal de vigência.",
      D: "A lei que deixa de considerar o fato como criminoso (abolitio criminis) retroage, inclusive após o trânsito em julgado.",
      E: "A lei penal mais benéfica (novatio legis in mellius) só retroage se aprovada por maioria qualificada no Congresso."
    }
  },
  {
    number: 43,
    disciplineId: "penal",
    stem: "Em relação à aplicação da lei penal no espaço, nos termos do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "Aplica-se a lei brasileira, sem prejuízo de convenções, tratados e regras de direito internacional, ao crime cometido no território nacional.",
      B: "O princípio da territorialidade adotado no Brasil é absoluto, não admitindo exceção para crimes praticados em embaixadas estrangeiras no País.",
      C: "A lei penal brasileira aplica-se, de forma incondicionada, a todo crime cometido por brasileiro no exterior, independentemente de qualquer requisito.",
      D: "Para efeito da lei penal, considera-se praticado o crime apenas no lugar da ação ou da omissão, nunca onde se produziu o resultado típico.",
      E: "A extradição de brasileiro nato pode ser deferida pelo Estado brasileiro em caso de tráfico de drogas, nos termos de tratado internacional ratificado."
    }
  },
  {
    number: 44,
    disciplineId: "penal",
    stem: "Durante uma investigação, apurou-se que determinado pescador artesanal capturou lote de peixes acima do limite permitido por regulamento ambiental, por acreditar sinceramente que a legislação não fazia restrição à sua modalidade de pesca, inexistindo dúvida quanto à sua representação da realidade. Nessa hipótese, está caracterizado",
    options: {
      A: "erro de tipo essencial, que exclui o dolo e, se vencível, permite a punição pela modalidade culposa, se prevista em lei.",
      B: "crime impossível, por absoluta impropriedade do objeto, nos termos do art. 17 do Código Penal brasileiro vigente.",
      C: "descriminante putativa, pelo erro quanto à existência de causa de exclusão da ilicitude, se vencível ou invencível.",
      D: "erro acidental sobre a pessoa (error in persona), que não isenta o agente de pena, nos termos do art. 20, § 3º, do CP.",
      E: "erro de proibição, que, se escusável, isenta de pena e, se inescusável, apenas reduz a pena de um sexto a um terço."
    }
  },
  {
    number: 45,
    disciplineId: "penal",
    stem: "Em relação à legítima defesa, nos termos do art. 25 do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "A legítima defesa cabe diante de agressão injusta, mas exige proporcionalidade entre o número de agressores e o de defensores.",
      B: "Pratica em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.",
      C: "A legítima defesa somente é admitida para proteção da vida ou da integridade física, não alcançando a defesa de direitos patrimoniais do agente.",
      D: "A legítima defesa putativa, por constituir erro sobre a situação de fato, sempre afasta a culpabilidade e isenta integralmente o agente de pena.",
      E: "A legítima defesa só é admitida contra agressão passada do agressor, exigindo-se, para seu reconhecimento, o esgotamento prévio de todas as vias legais."
    }
  },
  {
    number: 46,
    disciplineId: "penal",
    stem: "No Código Penal brasileiro vigente, considera-se penalmente INIMPUTÁVEL o agente que, ao tempo da ação ou omissão, era",
    options: {
      A: "menor de 21 anos, à época da entrada em vigor do atual Código Civil, de 2002, ainda que já emancipado civilmente.",
      B: "maior de 60 anos, condição que configura inimputabilidade penal, por força do Estatuto da Pessoa Idosa vigente no País.",
      C: "usuário de drogas lícitas, de qualquer natureza, desde que comprovada a dependência química por laudo pericial oficial competente.",
      D: "menor de 18 anos ou inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se segundo esse entendimento.",
      E: "servidor público no exercício de função pública, quando o fato cometido tiver relação direta com atribuição funcional por ele exercida."
    }
  },
  {
    number: 47,
    disciplineId: "penal",
    stem: "Durante uma investigação, apurou-se que Juliana, mediante prévio ajuste, emprestou seu veículo a João, com conhecimento prévio de que ele o utilizaria para subtrair bens de um estabelecimento comercial, aderindo subjetivamente ao plano. Após a execução, João foi preso. Considerando o Código Penal, Juliana responde",
    options: {
      A: "por favorecimento pessoal (CP, art. 348), por ter facilitado posteriormente a fuga do executor principal do crime.",
      B: "por crime autônomo de receptação, por força do art. 180 do Código Penal, independentemente da ciência prévia sobre a origem.",
      C: "pelo mesmo crime, como partícipe, por ter contribuído dolosamente para o crime, sem executar o verbo nuclear.",
      D: "por crime culposo distinto, se não houver prova inequívoca do dolo direto quanto ao resultado almejado pelo autor principal.",
      E: "pela figura isolada do art. 29, § 1º, do CP, que caracteriza participação de menor importância em qualquer concurso de pessoas."
    }
  },
  {
    number: 48,
    disciplineId: "penal",
    stem: "Mediante uma única ação, mas com desígnios autônomos, Rafael pratica dois crimes de homicídio consumado contra vítimas distintas. Nessa hipótese, nos termos do art. 70, parágrafo único, do Código Penal, configura-se",
    options: {
      A: "crime único, pelo princípio da consunção, prevalecendo o delito mais grave praticado contra a primeira vítima atingida pela conduta.",
      B: "crime continuado, com aumento de pena de um sexto a dois terços, independentemente de haver ou não desígnios autônomos quanto a cada vítima.",
      C: "concurso material, com aplicação das penas de forma cumulativa, por serem crimes de mesma espécie praticados em contextos distintos.",
      D: "concurso formal perfeito ou próprio, com aumento da pena de um sexto até a metade sobre a mais grave das penas cominadas.",
      E: "concurso formal imperfeito ou impróprio, com aplicação cumulativa das penas, pois os crimes resultaram de desígnios autônomos."
    }
  },
  {
    number: 49,
    disciplineId: "penal",
    stem: "Em relação ao crime de homicídio e ao de feminicídio, à luz da atual redação do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "O feminicídio é crime autônomo, previsto no art. 121-A do Código Penal, consistente em matar mulher por razões da condição do sexo feminino.",
      B: "O feminicídio é qualificadora do homicídio prevista no art. 121, § 2º, inciso VI, do CP, com pena de 12 a 30 anos de reclusão.",
      C: "O homicídio culposo, previsto no § 3º do art. 121 do CP, admite causa de diminuição se o agente for primário e tiver mais de 70 anos à época do fato.",
      D: "O homicídio simples, no caput do art. 121 do CP, é crime hediondo quando o agente integra organização criminosa, nos termos do art. 1º da Lei nº 8.072/90.",
      E: "O homicídio simples, mesmo quando consumado, não configura crime doloso contra a vida e não se submete ao julgamento pelo tribunal do júri."
    }
  },
  {
    number: 50,
    disciplineId: "penal",
    stem: "Durante uma investigação, apura-se que Rodrigo abordou uma vítima na rua e, mediante grave ameaça, exigiu que ela, imediatamente, lhe informasse a senha de seu cartão bancário, dizendo que a mataria caso não obedecesse. A vítima, apavorada, informou a senha, e Rodrigo efetuou saques logo em seguida. Nessa hipótese, Rodrigo cometeu o crime de",
    options: {
      A: "furto qualificado pelo emprego de fraude, nos termos do art. 155, § 4º, inciso II, do Código Penal.",
      B: "estelionato, por ter obtido vantagem ilícita em prejuízo alheio, induzindo a vítima a erro quanto à natureza do pedido.",
      C: "apropriação indébita, pois a vítima entregou voluntariamente a senha, após ter sido abordada em via pública pelo agente.",
      D: "extorsão, por ter constrangido a vítima, com grave ameaça, a fazer algo com o fim de obter indevida vantagem econômica.",
      E: "roubo próprio, nos termos do art. 157, caput, do CP, consumado no instante em que Rodrigo tomou posse do cartão bancário."
    }
  },
  {
    number: 51,
    disciplineId: "penal",
    stem: "Rafael, servidor público ocupante de cargo efetivo em uma delegacia da Polícia Civil, apropriou-se, em proveito próprio, de certo valor em espécie apreendido em operação policial e sob sua guarda em razão do cargo. Nessa situação, o fato descrito tipifica o crime de",
    options: {
      A: "corrupção passiva, previsto no art. 317 do Código Penal, por ter o agente solicitado vantagem indevida relativa à função exercida.",
      B: "peculato-apropriação, previsto no art. 312, caput, do Código Penal, por ser o agente servidor público e ter o bem sob sua guarda.",
      C: "prevaricação, prevista no art. 319 do Código Penal, por ter o servidor atuado contra expressa disposição legal, para satisfazer interesse pessoal.",
      D: "concussão, prevista no art. 316 do Código Penal, por ter o agente exigido vantagem indevida em razão da função pública exercida.",
      E: "advocacia administrativa, prevista no art. 321 do Código Penal, por ter patrocinado interesse privado perante a administração pública."
    }
  },
  {
    number: 52,
    disciplineId: "penal",
    stem: "Em relação à prescrição penal, à luz do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "A prescrição é a perda do direito subjetivo do agente ao prazo de cumprimento integral da pena, pela conduta anterior do condenado.",
      B: "A prescrição da pretensão punitiva, após o trânsito em julgado da sentença penal condenatória, calcula-se pela pena cominada em abstrato ao crime.",
      C: "A prescrição configura causa de suspensão, e não de extinção, da punibilidade do agente após a prolação da sentença penal condenatória.",
      D: "A prescrição funciona exclusivamente como pena acessória, cumulada com as sanções já aplicadas ao agente condenado em sentença penal.",
      E: "A prescrição, antes do trânsito em julgado da sentença, regula-se pelo máximo da pena privativa de liberdade cominada ao crime."
    }
  },

  // ==================== DIREITO PROCESSUAL PENAL (53–62) ====================
  {
    number: 53,
    disciplineId: "processual_penal",
    stem: "Em relação aos sistemas de processo penal, à luz do Código de Processo Penal e da doutrina majoritária, assinale a alternativa CORRETA.",
    options: {
      A: "O processo penal brasileiro adota, atualmente, a estrutura acusatória, com nítida separação entre as funções de acusar, defender e julgar.",
      B: "O sistema inquisitorial, adotado no Brasil, concentra na figura do juiz as funções de acusação, defesa e julgamento em todas as fases do processo.",
      C: "O sistema acusatório impede a produção de provas de ofício pelo juiz em qualquer fase, inclusive durante a instrução processual.",
      D: "O sistema misto, adotado em caráter puro no Brasil, exige fase inquisitiva do juiz e fase judicial sob o rito acusatório pleno.",
      E: "O princípio do contraditório, consagrado na Constituição, aplica-se exclusivamente à fase de inquérito policial, não ao processo judicial em curso."
    }
  },
  {
    number: 54,
    disciplineId: "processual_penal",
    stem: "Em regra, nos termos do Código de Processo Penal, o inquérito policial deverá ser concluído no prazo de",
    options: {
      A: "05 (cinco) dias, se preso o indiciado, e 20 (vinte) dias, se solto, sem admissão de qualquer prorrogação pelo juiz competente.",
      B: "10 (dez) dias, se o indiciado estiver preso, e 30 (trinta) dias, quando estiver solto, admitida prorrogação.",
      C: "15 (quinze) dias, se o indiciado estiver preso, e 45 (quarenta e cinco) dias, se estiver solto, sem possibilidade de prorrogação.",
      D: "30 (trinta) dias, estando o investigado preso em flagrante ou em prisão preventiva, prorrogável por igual período.",
      E: "60 (sessenta) dias contados da instauração, independentemente de o indiciado estar preso ou solto, prorrogáveis uma única vez."
    }
  },
  {
    number: 55,
    disciplineId: "processual_penal",
    stem: "Durante investigação policial, Pedro, servidor público primário, foi investigado pela prática de estelionato que resultou em prejuízo de R$ 3.000,00 à vítima. Pedro confessou formalmente, perante o Ministério Público, a autoria dos fatos. Não houve violência ou grave ameaça na conduta. Nesse cenário, à luz do Código de Processo Penal, o Ministério Público poderá propor",
    options: {
      A: "a imediata suspensão condicional do processo, independentemente da aceitação de qualquer condição pelo investigado.",
      B: "a transação penal, exclusiva do juizado especial criminal, obrigando o investigado à aceitação, sob pena de instauração de ação penal.",
      C: "acordo de não persecução penal, por tratar-se de infração sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos.",
      D: "acordo de delação premiada, no qual Pedro poderá receber perdão judicial em troca de informações sobre outros investigados.",
      E: "o arquivamento imediato do inquérito policial, por força da confissão espontânea de autoria apresentada perante a autoridade competente."
    }
  },
  {
    number: 56,
    disciplineId: "processual_penal",
    stem: "Em relação à ação penal, nos termos do Código de Processo Penal e do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "A ação penal pública condicionada depende de REQUISIÇÃO do ofendido para que o Ministério Público possa oferecer denúncia em juízo.",
      B: "A ação penal privada subsidiária da pública cabe sempre que o Ministério Público oferece denúncia considerada incompleta ou inadequada.",
      C: "A ação penal pública incondicionada é promovida por QUEIXA-CRIME, subscrita pelo próprio ofendido ou por seu representante legal.",
      D: "A ação penal pública incondicionada é a regra, sendo promovida pelo Ministério Público, titular exclusivo nos termos da Constituição.",
      E: "A ação penal privada é promovida pelo delegado de polícia, após conclusão do inquérito, quando o Ministério Público permanecer inerte."
    }
  },
  {
    number: 57,
    disciplineId: "processual_penal",
    stem: "No tocante à competência criminal, nos termos do Código de Processo Penal e da Constituição Federal, assinale a alternativa CORRETA.",
    options: {
      A: "A competência pelo lugar da infração é residual, aplicando-se apenas quando desconhecido o domicílio do réu no território nacional.",
      B: "O júri é competente para julgar todos os crimes dolosos, sejam contra a vida ou de qualquer outra natureza, conforme a Constituição Federal.",
      C: "A conexão e a continência jamais permitem a reunião de processos criminais perante um só juízo, por força do princípio do juiz natural.",
      D: "A competência do Tribunal do Júri é absoluta e não admite desaforamento, mesmo diante de risco grave à ordem pública ou à imparcialidade.",
      E: "Em regra, será competente o juízo do lugar em que se consumou a infração ou, no caso de tentativa, do lugar do último ato de execução realizado."
    }
  },
  {
    number: 58,
    disciplineId: "processual_penal",
    stem: "Em uma cena de homicídio, policiais civis arrecadam cápsulas, projéteis e vestígios biológicos encontrados no local, acondicionando os materiais em recipientes individualizados, lacrados e identificados, com registro cronológico de todas as pessoas que tiveram contato com cada vestígio. A respeito desse procedimento, à luz do Código de Processo Penal após o Pacote Anticrime (Lei nº 13.964/2019), é CORRETO afirmar que",
    options: {
      A: "caracteriza observância da cadeia de custódia, que é obrigatória e consiste em preservar e documentar a cronologia dos vestígios.",
      B: "o acondicionamento individualizado é exigido apenas quando a autoridade policial determinar expressamente, sendo dispensável em crimes menores.",
      C: "a cadeia aplica-se exclusivamente a vestígios biológicos coletados em crimes contra a dignidade sexual, não a cápsulas ou projéteis apreendidos.",
      D: "o lacre do material no local do fato dispensa qualquer registro cronológico posterior sobre os vestígios colhidos ao longo da investigação.",
      E: "a cadeia de custódia é facultativa e, se adotada, serve apenas como elemento complementar sem valor probatório no processo penal futuro."
    }
  },
  {
    number: 59,
    disciplineId: "processual_penal",
    stem: "Durante patrulhamento ostensivo, policiais civis presenciam João, mediante grave ameaça com arma branca, subtraindo a bolsa de uma pedestre. Imediatamente após a conduta, os agentes abordam João, ainda com a bolsa em mãos, e o conduzem à delegacia para lavratura do auto de prisão. A hipótese configura flagrante",
    options: {
      A: "impróprio, pois João foi perseguido logo após o crime pela autoridade policial, em situação que faz presumir ser ele o autor da infração.",
      B: "próprio, pois os policiais presenciaram João cometendo e, logo em seguida, acabando de cometer a infração penal no local do fato.",
      C: "presumido, pois João foi encontrado logo depois com objetos que fazem presumir ser ele o autor da infração penal subtraída à vítima.",
      D: "preparado, por ter sido João induzido à prática do crime por conduta provocada por agentes públicos, sem possibilidade real de consumação.",
      E: "esperado, pois a atuação policial consistiu apenas no acompanhamento, à distância, da conduta criminosa até sua consumação integral."
    }
  },
  {
    number: 60,
    disciplineId: "processual_penal",
    stem: "Durante a investigação de homicídio culposo decorrente de acidente de trânsito, o delegado representa ao juiz pela decretação de prisão preventiva do investigado, alegando a gravidade abstrata do fato e o clamor público. O juiz, examinando a representação, verificará que, em regra,",
    options: {
      A: "poderá decretar a prisão de ofício, independentemente da representação da autoridade policial, pela gravidade abstrata do fato.",
      B: "poderá decretá-la com base apenas no clamor público, por ser requisito expresso previsto no Código de Processo Penal brasileiro.",
      C: "não cabe prisão preventiva, por tratar-se de crime culposo, salvo as hipóteses expressamente admitidas no Código de Processo Penal.",
      D: "deverá, em todo caso, converter a representação em prisão temporária, por tratar-se de medida cautelar menos gravosa ao investigado.",
      E: "deverá receber a representação como pedido de liberdade provisória, por ser inviável prisão preventiva na fase de investigação criminal."
    }
  },
  {
    number: 61,
    disciplineId: "processual_penal",
    stem: "Nos termos do Código de Processo Penal, o procedimento comum será ordinário quando aplicável aos crimes cuja sanção máxima cominada",
    options: {
      A: "seja de detenção não superior a 1 (um) ano, independentemente da existência de causas de aumento ou de qualificadoras previstas em lei penal.",
      B: "seja igual ou inferior a 2 (dois) anos de pena privativa de liberdade, independentemente da espécie prevista no tipo penal.",
      C: "seja superior a 2 (dois) anos e inferior a 4 (quatro) anos de pena privativa de liberdade, incluídas as contravenções penais.",
      D: "seja igual ou superior a 4 (quatro) anos de pena privativa de liberdade, excluídas as hipóteses do procedimento sumário ou sumaríssimo.",
      E: "seja de reclusão superior a 20 (vinte) anos, considerando as causas de aumento e diminuição previstas em lei penal."
    }
  },
  {
    number: 62,
    disciplineId: "processual_penal",
    stem: "Pedro, servidor público ocupante de cargo efetivo, foi condenado criminalmente pela prática de peculato, com sentença transitada em julgado. Sobre os efeitos dessa sentença, à luz do Código de Processo Penal, do Código Penal e do regime constitucional da independência das instâncias, assinale a alternativa INCORRETA.",
    options: {
      A: "A sentença torna certa a obrigação de indenizar o dano causado pelo crime à Administração Pública lesada pela conduta ilícita.",
      B: "A sentença sujeita Pedro às penas privativas de liberdade aplicadas pelo juízo competente, no limite estabelecido no caso concreto.",
      C: "A sentença forma a coisa julgada material em relação aos fatos criminosos descritos na denúncia oferecida pelo Ministério Público.",
      D: "A sentença habilita a Administração Pública a executar o título executivo judicial para liquidação do valor devido no juízo cível.",
      E: "A sentença extingue, automaticamente, sanção administrativa aplicada no âmbito do processo administrativo disciplinar pela mesma conduta."
    }
  },

  // ==================== LEGISLAÇÃO PENAL E PROCESSUAL EXTRAVAGANTE (63–76) ====================
  {
    number: 63,
    disciplineId: "extravagante",
    stem: "Em uma operação da Polícia Civil, Maria é abordada em residência onde foram apreendidos 200g de maconha divididos em 20 porções embaladas individualmente, uma balança de precisão, cadernos com anotações de valores e armas de fogo. Maria afirma aos policiais que é apenas usuária. Nos termos da Lei nº 11.343/2006, a autoridade policial deverá considerar o fato como",
    options: {
      A: "uso de drogas, por força da declaração espontânea da investigada, independentemente das circunstâncias objetivas da apreensão realizada.",
      B: "ato infracional análogo ao tráfico, com atribuição exclusiva do Ministério Público nos termos da legislação em vigor sobre o tema.",
      C: "tráfico privilegiado, por tratar-se de pequena quantidade e indicativo inicial de primariedade declarada pela investigada em sede policial.",
      D: "tráfico de drogas, considerando as circunstâncias objetivas da apreensão, como quantidade, forma de embalagem, instrumentos e local.",
      E: "atípico, por não haver prova pericial preliminar da natureza da substância apreendida no exato momento da autuação em flagrante."
    }
  },
  {
    number: 64,
    disciplineId: "extravagante",
    stem: "Durante investigação de violência doméstica, policiais civis atendem Ana, vítima de agressões reiteradas pelo marido. Ana demonstra temor de retaliação e solicita medidas urgentes. Nos termos da Lei nº 11.340/2006 (Lei Maria da Penha), a autoridade policial deverá",
    options: {
      A: "lavrar termo circunstanciado e encaminhar os autos ao juizado especial criminal, por ser pena máxima inferior a 2 (dois) anos.",
      B: "determinar o afastamento imediato do agressor do lar, com execução direta pela autoridade policial, em qualquer caso narrado.",
      C: "lavrar o auto de prisão em flagrante do agressor, independentemente das circunstâncias da conduta, pelo contexto de violência.",
      D: "representar à autoridade judiciária pela decretação de medidas protetivas, com prazo máximo de 24 horas para deliberação.",
      E: "representar ao juiz pela concessão de medidas protetivas de urgência, cuja apreciação deverá ocorrer em até 48 horas."
    }
  },
  {
    number: 65,
    disciplineId: "extravagante",
    stem: "Em relação à Lei nº 9.455/1997 (Lei de Tortura), assinale a alternativa CORRETA.",
    options: {
      A: "O crime de tortura é inafiançável e insuscetível de graça ou anistia, respondendo por ele os mandantes, os executores e os que, podendo evitá-lo, se omitem.",
      B: "O crime de tortura admite forma culposa expressamente prevista, com pena atenuada em relação à modalidade dolosa do mesmo tipo penal.",
      C: "O crime de tortura, por ser classificado como crime hediondo próprio, admite liberdade provisória com fiança no curso da investigação criminal.",
      D: "O crime de tortura é afiançável se cometido por particular, sendo inafiançável apenas quando o agente for servidor público em exercício.",
      E: "O crime de tortura exige, para sua configuração, a presença de dois ou mais agentes atuando em coautoria no mesmo local do fato."
    }
  },
  {
    number: 66,
    disciplineId: "extravagante",
    stem: "Durante o patrulhamento, policiais civis recebem denúncia anônima de que, em determinada residência, haveria pequena quantidade de droga para uso pessoal. Sem realizar qualquer diligência prévia de confirmação e sem obter ordem judicial ou consentimento do morador, os agentes ingressam na residência durante o dia, revistando-a por completo. Nada é encontrado. Posteriormente, instaurada apuração pela corregedoria, a conduta dos agentes",
    options: {
      A: "é atípica, pois a denúncia anônima legitima o ingresso em domicílio alheio para apurar a prática de crime permanente.",
      B: "configura invasão a imóvel alheio sem fundada razão, caracterizando crime de abuso de autoridade previsto em lei específica.",
      C: "configura violação de domicílio tipificada no Código Penal, aplicada aos particulares em geral, sem relevância do contexto funcional.",
      D: "configura mera irregularidade administrativa, pois não houve constatação posterior de prática criminosa pelo morador do imóvel.",
      E: "configura crime de prevaricação, por ter o agente deixado de cumprir dever funcional por sentimento pessoal diante da denúncia anônima."
    }
  },
  {
    number: 67,
    disciplineId: "extravagante",
    stem: "Durante abordagem a Paulo, policiais civis encontram no interior do veículo um revólver calibre .38, com munição intacta, sem o devido registro ou autorização para porte. Paulo afirma ter adquirido a arma para proteção pessoal. Nos termos da Lei nº 10.826/2003 (Estatuto do Desarmamento), a conduta de Paulo tipifica crime de",
    options: {
      A: "posse irregular de arma de fogo de uso permitido, por manter a arma no interior de residência ou dependência desta.",
      B: "porte de arma de fogo de uso proibido, aplicável a arma de fogo adquirida sem registro, independentemente do calibre apreendido.",
      C: "porte ilegal de arma de fogo de uso permitido, por conduzir a arma de fogo fora de residência, sem autorização da autoridade competente.",
      D: "comércio ilegal de arma de fogo, por ter adquirido a arma de fogo diretamente de pessoa não autorizada pela legislação federal vigente.",
      E: "tráfico internacional de arma de fogo, por qualquer aquisição sem registro vinculada à proteção pessoal, nos termos do Estatuto do Desarmamento."
    }
  },
  {
    number: 68,
    disciplineId: "extravagante",
    stem: "A respeito da Lei nº 8.072/1990 (Lei dos Crimes Hediondos), assinale a alternativa CORRETA.",
    options: {
      A: "O tráfico de drogas, a tortura e o terrorismo são crimes hediondos próprios, sendo-lhes aplicável, por extensão, o regime dos equiparados.",
      B: "A progressão de regime no cumprimento de pena por crime hediondo exige o cumprimento de 1/6 (um sexto) da pena aplicada no caso concreto.",
      C: "O livramento condicional é vedado em qualquer hipótese ao condenado por crime hediondo, independentemente de reincidência em crime da mesma natureza.",
      D: "Os crimes hediondos são inafiançáveis e insuscetíveis de graça, anistia ou indulto, nos termos da legislação e da Constituição Federal.",
      E: "O homicídio simples, mesmo quando praticado em atividade típica de grupo de extermínio, não é considerado crime hediondo pela legislação específica."
    }
  },
  {
    number: 69,
    disciplineId: "extravagante",
    stem: "A Lei nº 15.358/2026 (Marco Legal de Combate ao Crime Organizado no Brasil, conhecida como Lei Raul Jungmann) tipificou novos crimes e alterou dispositivos de outras leis. A respeito dessa lei, assinale a alternativa CORRETA.",
    options: {
      A: "A nova lei revogou integralmente a Lei nº 12.850/2013, deslocando os crimes de organização criminosa para o Código Penal brasileiro.",
      B: "A nova lei descriminalizou condutas antes previstas como organização criminosa, considerando-as atípicas por força do novo marco legal vigente.",
      C: "A nova lei vedou expressamente a colaboração premiada em qualquer dos crimes de organização criminosa ultraviolenta ora tipificados.",
      D: "A nova lei estabeleceu competência exclusiva da Justiça Militar da União para o julgamento de todos os crimes de domínio social estruturado.",
      E: "A nova lei tipificou os crimes de domínio social estruturado e de favorecimento ao domínio social estruturado, cometidos por organizações ultraviolentas."
    }
  },
  {
    number: 70,
    disciplineId: "extravagante",
    stem: "Durante investigação de roubo com emprego de arma de fogo, o delegado representa ao juiz pela decretação de prisão temporária do investigado, para fins de obtenção de elementos probatórios adicionais e identificação de coautores. Nos termos da Lei nº 7.960/1989, a prisão temporária",
    options: {
      A: "poderá ser decretada diretamente pelo delegado, independentemente de ordem judicial, pelo prazo máximo de 03 (três) dias após o fato.",
      B: "poderá ser decretada por 5 (cinco) dias, prorrogáveis por igual período, em caso de extrema e comprovada necessidade.",
      C: "poderá ser decretada por 15 (quinze) dias, prorrogáveis por 30 (trinta) dias, nos crimes hediondos e nos crimes contra a vida.",
      D: "poderá ser decretada por 30 (trinta) dias, prorrogáveis uma única vez por igual período, mediante representação da autoridade policial.",
      E: "é vedada em qualquer hipótese nos crimes contra o patrimônio, sendo cabível somente em crimes contra a vida e a dignidade sexual."
    }
  },
  {
    number: 71,
    disciplineId: "extravagante",
    stem: "Nos termos da Lei nº 9.099/1995 (Juizados Especiais Criminais), consideram-se infrações penais de menor potencial ofensivo",
    options: {
      A: "as contravenções penais e os crimes com pena máxima não superior a 2 (dois) anos, cumulada ou não com multa.",
      B: "os crimes culposos de qualquer natureza, com pena máxima não superior a 3 (três) anos de detenção ou reclusão.",
      C: "os crimes contra a Administração Pública com pena máxima não superior a 4 (quatro) anos, independentemente da condição do agente.",
      D: "os crimes dolosos com pena máxima não superior a 5 (cinco) anos, não submetidos a procedimento especial próprio previsto em lei.",
      E: "todos os crimes previstos no Código Penal brasileiro cuja pena máxima não ultrapasse 6 (seis) anos de reclusão ou detenção."
    }
  },
  {
    number: 72,
    disciplineId: "extravagante",
    stem: "Durante investigação de tráfico de drogas, o delegado representa ao juiz pela interceptação telefônica dos aparelhos utilizados pelos investigados, alegando que outros meios probatórios foram insuficientes. Nos termos da Lei nº 9.296/1996, a interceptação telefônica",
    options: {
      A: "poderá ser decretada diretamente pelo delegado, por decisão fundamentada, por prazo não superior a 30 dias prorrogáveis uma vez.",
      B: "é cabível em qualquer investigação criminal, independentemente da pena cominada ao crime investigado ou da existência de outro meio probatório.",
      C: "depende de ordem judicial fundamentada, nas investigações criminais em que o fato apurado for punido com reclusão e não houver outro meio disponível.",
      D: "poderá ter prazo inicial de 60 (sessenta) dias, prorrogáveis sem limite, enquanto perdurar a investigação criminal em curso.",
      E: "é vedada em qualquer caso quando o alvo for pessoa integrante de organização criminosa, por força do sigilo das comunicações."
    }
  },
  {
    number: 73,
    disciplineId: "extravagante",
    stem: "Em relação à apuração do ato infracional de adolescente, nos termos da Lei nº 8.069/1990 (Estatuto da Criança e do Adolescente), assinale a alternativa CORRETA.",
    options: {
      A: "O adolescente, para efeito dessa Lei, é considerado a pessoa entre 10 (dez) e 16 (dezesseis) anos de idade incompletos ao tempo do fato.",
      B: "A apreensão em flagrante do adolescente deve ser imediatamente comunicada à autoridade judiciária, sendo vedada a comunicação à família.",
      C: "O adolescente autor de ato infracional é penalmente imputável a partir dos 16 (dezesseis) anos, respondendo criminalmente perante a Vara da Infância.",
      D: "A medida socioeducativa de internação não possui prazo máximo e vigora enquanto durar a periculosidade do adolescente infrator do caso.",
      E: "A medida socioeducativa de internação será cumprida em estabelecimento próprio, respeitada a condição peculiar de pessoa em desenvolvimento."
    }
  },
  {
    number: 74,
    disciplineId: "extravagante",
    stem: "Durante operação policial, Carlos é abordado e apresenta cópia simples de documento de identidade, de qualidade duvidosa e com estado de conservação precário. O delegado considera necessária a identificação criminal pelo processo datiloscópico e fotográfico. Nos termos da Lei nº 12.037/2009, a identificação criminal",
    options: {
      A: "é vedada em qualquer caso ao civilmente identificado, independentemente da existência de dúvida razoável sobre a autenticidade do documento.",
      B: "deverá ser realizada apenas pelo processo fotográfico, sendo descartada em qualquer caso a identificação datiloscópica do investigado.",
      C: "poderá ser realizada apenas quando houver prévia autorização do juiz competente, independentemente das circunstâncias do caso concreto.",
      D: "é admissível quando o documento apresentado for insuficiente para identificar cabalmente o investigado ou houver indício de falsificação.",
      E: "é cabível somente após o oferecimento de denúncia pelo Ministério Público, sendo vedada na fase de investigação preliminar em delegacia."
    }
  },
  {
    number: 75,
    disciplineId: "extravagante",
    stem: "A respeito do crime de lavagem ou ocultação de bens, direitos e valores, nos termos da Lei nº 9.613/1998, assinale a alternativa CORRETA.",
    options: {
      A: "O crime de lavagem exige, como infração antecedente, a prática de crime previsto em rol taxativo expressamente definido na legislação vigente.",
      B: "O crime de lavagem consiste em ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens oriundos de infração penal.",
      C: "A tentativa do crime de lavagem é punível apenas quando os bens efetivamente ingressarem no sistema financeiro nacional de forma dissimulada.",
      D: "O crime de lavagem é afiançável e admite liberdade provisória sem fiança em qualquer hipótese prevista na legislação de regência vigente.",
      E: "O crime de lavagem absorve, pela consunção, todos os crimes antecedentes efetivamente praticados pelo mesmo agente, inclusive os de outra natureza."
    }
  },
  {
    number: 76,
    disciplineId: "extravagante",
    stem: "Em relação aos regimes de cumprimento de pena, nos termos da Lei nº 7.210/1984 (Lei de Execução Penal) e do Código Penal, assinale a alternativa CORRETA.",
    options: {
      A: "O regime fechado é cumprido em casa de albergado, com direito do apenado a saídas diárias sem autorização judicial prévia.",
      B: "O regime semiaberto é cumprido em penitenciária de segurança máxima, com direito a visitas íntimas uma vez por mês.",
      C: "O regime fechado é cumprido em estabelecimento de segurança máxima ou média, com direito a visita, correspondência e assistência.",
      D: "O regime aberto é cumprido em cela individual com área mínima de 10 (dez) metros quadrados, com direito a trabalho interno obrigatório.",
      E: "O regime disciplinar diferenciado (RDD) é cumprido em cela comum, com direito do apenado a 4 (quatro) horas de banho de sol por dia."
    }
  },

  // ==================== DIREITO ADMINISTRATIVO (77–84) ====================
  {
    number: 77,
    disciplineId: "administrativo",
    stem: "A Administração Pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá a certos princípios, conforme a Constituição Federal. Dentre eles, destaca-se o princípio da",
    options: {
      A: "impessoalidade, que proíbe a promoção pessoal de autoridades em publicidade de atos, programas e campanhas da Administração.",
      B: "autotutela, previsto expressamente na Constituição Federal como um dos princípios essenciais da Administração Pública direta.",
      C: "especialidade, aplicável exclusivamente às entidades da Administração Pública direta, impedindo a atuação em áreas estranhas à sua finalidade.",
      D: "continuidade, prevista no caput do art. 37 da Constituição Federal, como um dos cinco princípios expressos aplicáveis à Administração.",
      E: "presunção de inocência, aplicada à Administração Pública para impedir a imposição de sanção sem o trânsito em julgado da decisão."
    }
  },
  {
    number: 78,
    disciplineId: "administrativo",
    stem: "Em relação à organização administrativa, assinale a alternativa CORRETA.",
    options: {
      A: "A desconcentração consiste em transferir a titularidade de serviço público do ente federativo para pessoa jurídica diversa, com personalidade própria.",
      B: "A descentralização é a distribuição de competências para pessoa jurídica distinta do ente estatal, criada ou autorizada por lei.",
      C: "A autarquia é entidade da Administração direta, dotada de autonomia administrativa restrita e sujeita ao regime jurídico das empresas privadas.",
      D: "A sociedade de economia mista é entidade da Administração direta, com capital majoritariamente público, regime de direito privado.",
      E: "A empresa pública tem personalidade jurídica de direito público, com capital integralmente público e regime idêntico ao da autarquia."
    }
  },
  {
    number: 79,
    disciplineId: "administrativo",
    stem: "O Delegado-Geral da Polícia Civil, no exercício de sua competência, edita portaria regulamentar sobre procedimentos de triagem de inquéritos nas delegacias do interior do Estado. A portaria é publicada no Diário Oficial e passa a produzir efeitos imediatos. Sobre esse ato administrativo, à luz da doutrina e da jurisprudência majoritárias, assinale a alternativa CORRETA.",
    options: {
      A: "É nulo, pois matéria regulamentar é privativa do Chefe do Poder Executivo, sendo vedada a edição de portarias por autoridades subordinadas.",
      B: "Depende de confirmação judicial para produzir efeitos, mesmo após a publicação no Diário Oficial do Estado, por ter natureza normativa própria.",
      C: "Goza de presunção de legitimidade e veracidade, podendo ser impugnado administrativa ou judicialmente, com inversão do ônus da prova.",
      D: "Possui natureza de ato administrativo complexo, exigindo manifestação concorrente de dois ou mais órgãos independentes para formação do ato.",
      E: "Possui natureza de ato administrativo discricionário puro, não comportando qualquer controle de legalidade pelo Poder Judiciário no caso concreto."
    }
  },
  {
    number: 80,
    disciplineId: "administrativo",
    stem: "Durante operação de fiscalização em casa noturna, agentes públicos municipais interditam o estabelecimento após constatarem reiterado descumprimento de normas de segurança contra incêndios, apreendendo equipamentos irregulares e lavrando auto de infração. A conduta descrita caracteriza manifestação do poder administrativo denominado",
    options: {
      A: "hierárquico, por envolver atuação de autoridade superior em cadeia de comando administrativo.",
      B: "regulamentar, por consistir na edição de normas de aplicação geral e abstrata pela Administração Pública.",
      C: "disciplinar, por recair sobre pessoas sujeitas a vínculo especial com a Administração Pública estadual.",
      D: "poder de polícia administrativa, por limitar o exercício de direitos individuais em benefício do interesse público.",
      E: "vinculante, por obrigar o cumprimento integral da decisão administrativa pelo particular interessado."
    }
  },
  {
    number: 81,
    disciplineId: "administrativo",
    stem: "Nos termos da Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos), as modalidades de licitação são",
    options: {
      A: "concorrência, tomada de preços, convite, concurso e leilão.",
      B: "pregão, concorrência, tomada de preços, concurso, leilão e diálogo competitivo.",
      C: "pregão, concorrência, convite, leilão e concurso.",
      D: "concorrência, pregão, concurso, leilão e tomada de preços.",
      E: "pregão, concorrência, concurso, leilão e diálogo competitivo."
    }
  },
  {
    number: 82,
    disciplineId: "administrativo",
    stem: "Em perseguição policial a suspeito armado em via pública, uma viatura da Polícia Civil colide com veículo de particular que trafegava normalmente pela via, causando-lhe danos materiais. O proprietário do veículo ajuíza ação de reparação em face do Estado da Bahia. Nos termos da Constituição Federal e da jurisprudência consolidada, a responsabilidade do Estado nesse caso",
    options: {
      A: "é objetiva, cabendo ao particular demonstrar a conduta do agente estatal, o dano sofrido e o nexo de causalidade entre eles.",
      B: "é subjetiva, exigindo demonstração de dolo ou de culpa do agente estatal, além do nexo de causalidade com o dano.",
      C: "é afastada em qualquer caso, por tratar-se de atuação policial em perseguição a suspeito armado, equiparada à força maior.",
      D: "é condicionada à culpa exclusiva do policial responsável pela condução da viatura no momento da colisão com o particular.",
      E: "é condicionada ao reconhecimento prévio da ilegalidade da ação policial pela corregedoria competente, antes da indenização."
    }
  },
  {
    number: 83,
    disciplineId: "administrativo",
    stem: "A Lei nº 8.429/1992 (Lei de Improbidade Administrativa), com as alterações promovidas pela Lei nº 14.230/2021, prevê três modalidades principais de atos de improbidade administrativa:",
    options: {
      A: "atos que resultam em sanção penal, atos que violam a moralidade pública e atos de prevaricação administrativa pelo servidor.",
      B: "atos que importam enriquecimento ilícito, atos que causam prejuízo ao erário e atos atentatórios aos direitos humanos fundamentais.",
      C: "atos que importam enriquecimento ilícito, atos que causam prejuízo ao erário e atos que atentam contra princípios da Administração Pública.",
      D: "atos de concussão, atos de peculato e atos de prevaricação, todos exigindo dolo específico comprovado por elementos materiais.",
      E: "atos de corrupção ativa, atos de corrupção passiva e atos de improbidade culposa, independentemente do elemento subjetivo."
    }
  },
  {
    number: 84,
    disciplineId: "administrativo",
    stem: "Nos termos da Lei Estadual nº 11.370/2009 (Lei Orgânica da Polícia Civil do Estado da Bahia), em relação às carreiras da Polícia Civil do Estado da Bahia, assinale a alternativa CORRETA.",
    options: {
      A: "O cargo de Investigador de Polícia Civil integra carreira única, dividida em quatro classes decrescentes, iniciando-se obrigatoriamente na classe Especial.",
      B: "Os cargos de Investigador, Escrivão e Perito Técnico pertencem a carreiras independentes e não se encontram, em qualquer hipótese, na mesma linha hierárquica.",
      C: "O cargo de Delegado de Polícia Civil, no desempenho da chefia de órgãos operacionais, é privativo de servidores da classe III da carreira.",
      D: "Os cargos de Investigador, Escrivão e Perito Técnico de Polícia Civil estarão na mesma linha hierárquica quando se encontrarem na mesma classe da carreira.",
      E: "As promoções nas carreiras da Polícia Civil ocorrem exclusivamente por antiguidade, independentemente de merecimento ou de avaliação de desempenho funcional."
    }
  },

  // ==================== DIREITO CONSTITUCIONAL (85–92) ====================
  {
    number: 85,
    disciplineId: "constitucional",
    stem: "A respeito dos direitos e garantias fundamentais, previstos na Constituição Federal, assinale a alternativa CORRETA.",
    options: {
      A: "É inviolável a liberdade de consciência e crença, sendo assegurado o livre exercício dos cultos religiosos e garantida a proteção aos locais de culto.",
      B: "O direito de reunião em locais abertos ao público pode ser condicionado à prévia autorização da autoridade pública competente para o policiamento da área.",
      C: "A prisão civil por dívida é cabível ao responsável pelo inadimplemento voluntário de obrigação alimentícia e ao depositário infiel, nos termos da Constituição.",
      D: "O sigilo da fonte, assegurado quando necessário ao exercício profissional, cede diante de requisição da autoridade policial em investigação criminal.",
      E: "A pena de morte, segundo a Constituição Federal, é admitida em caso de condenação por crime hediondo com resultado morte da vítima brasileira."
    }
  },
  {
    number: 86,
    disciplineId: "constitucional",
    stem: "Nos termos do art. 7º da Constituição Federal, é direito dos trabalhadores urbanos e rurais, dentre outros,",
    options: {
      A: "a jornada de trabalho não superior a 10 (dez) horas diárias, com intervalo intrajornada mínimo de 2 (duas) horas para refeição.",
      B: "a remuneração do trabalho noturno superior à do diurno, aplicável aos trabalhadores urbanos e rurais nos termos da Constituição.",
      C: "o salário-família pago em razão do cônjuge do trabalhador de qualquer renda, nos termos definidos por lei complementar.",
      D: "o aviso-prévio proporcional ao tempo de serviço, em prazo máximo de 15 (quinze) dias, independentemente da duração do contrato de trabalho.",
      E: "a licença-paternidade e a licença à gestante, ambas com prazo idêntico fixado em até 180 (cento e oitenta) dias, nos termos definidos em lei."
    }
  },
  {
    number: 87,
    disciplineId: "constitucional",
    stem: "A respeito da nacionalidade brasileira, nos termos do art. 12 da Constituição Federal, com a redação dada pela Emenda Constitucional nº 131/2023, assinale a alternativa CORRETA.",
    options: {
      A: "O brasileiro que adquirir outra nacionalidade perde automaticamente a nacionalidade brasileira, ressalvadas hipóteses previstas na Constituição.",
      B: "O brasileiro nato pode ter sua nacionalidade cancelada por decisão administrativa, após processo instaurado pelo Ministério da Justiça.",
      C: "O brasileiro nato que fez pedido expresso de perda da nacionalidade pode readquirir sua nacionalidade originária, nos termos definidos em lei.",
      D: "O brasileiro naturalizado pode ocupar o cargo de Presidente da República, após completar 10 (dez) anos de residência fixa no território nacional.",
      E: "O estrangeiro casado com brasileiro adquire a nacionalidade brasileira originária após 2 (dois) anos de casamento e residência comprovada no País."
    }
  },
  {
    number: 88,
    disciplineId: "constitucional",
    stem: "Determinado grupo pretende criar um novo município no Estado da Bahia, por desmembramento de parte de outro município já existente. Nos termos do art. 18 da Constituição Federal, a criação de novo município exige",
    options: {
      A: "decreto do Governador do Estado da Bahia, após manifestação da Assembleia Legislativa, sem consulta prévia à população.",
      B: "aprovação do Congresso Nacional, mediante lei complementar federal, por tratar-se de alteração do pacto federativo brasileiro.",
      C: "deliberação exclusiva das Câmaras Municipais envolvidas, por tratar-se de assunto de interesse estritamente local do município.",
      D: "lei estadual, dentro do período de lei complementar federal, com plebiscito prévio às populações envolvidas.",
      E: "referendo popular nacional, convocado pela União, com participação de todo o eleitorado brasileiro em escala federal."
    }
  },
  {
    number: 89,
    disciplineId: "constitucional",
    stem: "Nos termos do art. 37 da Constituição Federal, em relação aos servidores públicos civis, assinale a alternativa CORRETA.",
    options: {
      A: "A acumulação remunerada de dois cargos privativos de profissionais da saúde depende de prévia autorização da Administração Pública contratante.",
      B: "A estabilidade do servidor público titular de cargo efetivo é adquirida após 2 (dois) anos de efetivo exercício do cargo público.",
      C: "A investidura em cargo em comissão, de livre nomeação e exoneração, depende de prévia aprovação em concurso público de provas e títulos.",
      D: "A remuneração dos servidores públicos será fixada por decreto do Chefe do Poder Executivo, independentemente de prévia autorização legislativa.",
      E: "A investidura em cargo ou emprego público depende de prévia aprovação em concurso público, salvo as nomeações para cargo em comissão."
    }
  },
  {
    number: 90,
    disciplineId: "constitucional",
    stem: "Diante de iminente ameaça à ordem pública, o Presidente da República decreta o estado de defesa em determinada região do País. Nos termos do art. 136 da Constituição Federal, decretado o estado de defesa, o Presidente da República deverá",
    options: {
      A: "submeter o ato de decretação à aprovação do Congresso Nacional, no prazo de 24 (vinte e quatro) horas, com a respectiva justificação.",
      B: "submeter o ato de decretação à aprovação do Senado Federal, no prazo de 48 (quarenta e oito) horas, por maioria absoluta.",
      C: "submeter o ato de decretação à ratificação do Supremo Tribunal Federal, mediante controle de constitucionalidade preventivo abstrato.",
      D: "determinar a suspensão dos direitos políticos no território nacional, enquanto perdurar o estado de defesa decretado.",
      E: "submeter o ato de decretação a referendo popular, convocado em até 90 (noventa) dias, para ratificação pela maioria absoluta do eleitorado."
    }
  },
  {
    number: 91,
    disciplineId: "constitucional",
    stem: "A respeito das garantias constitucionais da magistratura, nos termos do art. 95 da Constituição Federal, assinale a alternativa CORRETA.",
    options: {
      A: "A inamovibilidade do magistrado pode ser afastada por decisão do tribunal competente, mediante voto da maioria simples dos seus membros.",
      B: "A vitaliciedade dos magistrados do primeiro grau é adquirida pela aprovação em concurso público, independentemente de tempo mínimo de exercício.",
      C: "A irredutibilidade de subsídio dos magistrados afasta a incidência de descontos previdenciários e tributários previstos em lei.",
      D: "Os magistrados gozam das garantias de vitaliciedade, inamovibilidade e irredutibilidade de subsídio, nos termos da Constituição Federal.",
      E: "Os magistrados do primeiro grau estão sujeitos à aposentadoria compulsória aos 60 (sessenta) anos de idade, nos termos da Constituição Federal."
    }
  },
  {
    number: 92,
    disciplineId: "constitucional",
    stem: "O Governador de determinado Estado da Federação pretende instituir, por decreto estadual, uma nova polícia uniformizada estadual, destinada ao policiamento ostensivo em áreas urbanas. Nos termos do art. 144 da Constituição Federal, essa iniciativa",
    options: {
      A: "é constitucional, por manifestar a autonomia administrativa dos entes federados em segurança pública.",
      B: "é constitucional, desde que o órgão exerça atividades complementares às polícias existentes no Estado.",
      C: "é constitucional, desde que o Governador obtenha autorização prévia do Ministério da Justiça.",
      D: "é inconstitucional, por invadir competência exclusiva da União em normas gerais de segurança pública.",
      E: "é inconstitucional, porque a Constituição estabelece rol taxativo dos órgãos de segurança pública."
    }
  },

  // ==================== NOÇÕES DE CONTABILIDADE (93–96) ====================
  {
    number: 93,
    disciplineId: "contabilidade",
    stem: "A Companhia Alfa apresentou, em determinada data, Ativo total de R$ 500.000,00 e Passivo exigível de R$ 320.000,00. Nessa situação, o Patrimônio Líquido da Companhia Alfa, apurado pela equação patrimonial básica, é de",
    options: {
      A: "R$ 120.000,00.",
      B: "R$ 180.000,00.",
      C: "R$ 320.000,00.",
      D: "R$ 500.000,00.",
      E: "R$ 820.000,00."
    }
  },
  {
    number: 94,
    disciplineId: "contabilidade",
    stem: "A Companhia Beta realizou as seguintes operações em determinado mês:\n\nI. Pagou, em dinheiro, duplicata vencida de fornecedor, no valor de R$ 10.000,00.\nII. Recebeu, em dinheiro, aluguel referente a imóvel próprio locado a terceiros, no valor de R$ 3.000,00.\nIII. Comprou, à vista, equipamento de informática, pelo valor de R$ 5.000,00.\n\nEsses fatos administrativos são classificados, respectivamente, como",
    options: {
      A: "permutativo, modificativo aumentativo e misto diminutivo.",
      B: "modificativo diminutivo, permutativo e misto aumentativo.",
      C: "permutativo, modificativo aumentativo e permutativo.",
      D: "misto diminutivo, modificativo aumentativo e permutativo.",
      E: "modificativo aumentativo, permutativo e misto diminutivo."
    }
  },
  {
    number: 95,
    disciplineId: "contabilidade",
    stem: "A Companhia Gama adquiriu, em 1º de janeiro de 2024, um veículo pelo valor de R$ 100.000,00, com vida útil estimada em 10 (dez) anos e valor residual estimado em R$ 20.000,00. Utilizando o método linear (quotas constantes), o valor da despesa anual de depreciação do veículo é de",
    options: {
      A: "R$ 2.000,00.",
      B: "R$ 5.000,00.",
      C: "R$ 7.000,00.",
      D: "R$ 8.000,00.",
      E: "R$ 10.000,00."
    }
  },
  {
    number: 96,
    disciplineId: "contabilidade",
    stem: "Determinado investidor aplicou o capital de R$ 1.000,00 em uma instituição financeira, à taxa de juros compostos de 10% ao mês, pelo período de 3 (três) meses. O montante final da aplicação, ao término do período, é de",
    options: {
      A: "R$ 1.100,00.",
      B: "R$ 1.210,00.",
      C: "R$ 1.300,00.",
      D: "R$ 1.310,00.",
      E: "R$ 1.331,00."
    }
  },

  // ==================== ESTATÍSTICA (97–100) ====================
  {
    number: 97,
    disciplineId: "estatistica",
    stem: "Durante uma semana, foram registrados os seguintes números de inquéritos distribuídos a sete investigadores de uma delegacia: 2, 3, 5, 6, 8, 8 e 10. Com base nesses dados, assinale a alternativa CORRETA sobre as medidas de tendência central do conjunto.",
    options: {
      A: "a média e a mediana são iguais a 6, enquanto a moda do conjunto é igual a 8.",
      B: "a média é igual a 7, a mediana é igual a 6 e a moda do conjunto é 8.",
      C: "a média é igual a 6, a mediana é igual a 5 e a moda do conjunto é 10.",
      D: "a média é igual a 8, a mediana é igual a 6 e a moda do conjunto é 5.",
      E: "a média, a mediana e a moda são iguais a 6, por ser conjunto simétrico."
    }
  },
  {
    number: 98,
    disciplineId: "estatistica",
    stem: "Durante seis meses consecutivos, foram registrados os seguintes números mensais de inquéritos instaurados por um investigador: 1, 3, 5, 7 e 9. Considerando esse conjunto como uma amostra, a variância amostral calculada é igual a",
    options: {
      A: "2 unidades².",
      B: "10 unidades².",
      C: "25 unidades².",
      D: "40 unidades².",
      E: "50 unidades²."
    }
  },
  {
    number: 99,
    disciplineId: "estatistica",
    stem: "Em determinada investigação criminal, dois eventos independentes A e B têm probabilidades individuais de ocorrência P(A) = 0,4 e P(B) = 0,25. A probabilidade de ocorrência simultânea dos eventos A e B é",
    options: {
      A: "0,05, obtida pela subtração entre as probabilidades dos eventos A e B.",
      B: "0,075, obtida pela média geométrica entre as probabilidades de A e B.",
      C: "0,10, obtida pela multiplicação entre as probabilidades dos eventos A e B.",
      D: "0,20, obtida pela divisão entre a maior e a menor probabilidade dos eventos.",
      E: "0,65, obtida pela soma entre as probabilidades dos eventos A e B."
    }
  },
  {
    number: 100,
    disciplineId: "estatistica",
    stem: "A respeito das técnicas de amostragem em pesquisa estatística, assinale a alternativa CORRETA.",
    options: {
      A: "A amostragem aleatória simples consiste em selecionar elementos da população em intervalos regulares a partir de um ponto inicial sorteado.",
      B: "A amostragem sistemática exige a divisão prévia da população em subgrupos homogêneos, dos quais são sorteados os elementos.",
      C: "A amostragem por conglomerados consiste em sortear indivíduos específicos da população-alvo por sorteio puramente aleatório.",
      D: "A amostragem estratificada dispensa a realização de sorteio aleatório, bastando a seleção direta dos elementos mais representativos.",
      E: "A amostragem estratificada divide a população em subgrupos homogêneos, denominados estratos, dos quais são sorteados elementos proporcionalmente."
    }
  }
];
