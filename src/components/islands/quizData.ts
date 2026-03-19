export interface Question {
  id: number;
  subtheme: string;
  question: string;
  options: { letter: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export const themes = [
  { icon: '📚', name: 'Fundamentos da Educação', color: 'bg-blue-50 hover:bg-blue-100' },
  { icon: '🧠', name: 'Psicologia da Educação', color: 'bg-pink-50 hover:bg-pink-100' },
  { icon: '✏️', name: 'Didática e Prática Pedagógica', color: 'bg-orange-50 hover:bg-orange-100' },
  { icon: '⚖️', name: 'Legislação e Políticas Educacionais', color: 'bg-yellow-50 hover:bg-yellow-100' },
  { icon: '🎪', name: 'Gestão e Organização Escolar', color: 'bg-red-50 hover:bg-red-100' },
  { icon: '🤝', name: 'Educação Inclusiva e Diversidade', color: 'bg-green-50 hover:bg-green-100' },
  { icon: '📖', name: 'Alfabetização e Letramento', color: 'bg-teal-50 hover:bg-teal-100' },
  { icon: '💻', name: 'Tecnologias na Educação', color: 'bg-cyan-50 hover:bg-cyan-100' }
] as const;

export type ThemeName = (typeof themes)[number]['name'];

export const questionsByTheme: Record<ThemeName, Question[]> = {
  'Fundamentos da Educação': [
    {
      id: 1,
      subtheme: 'Pedagogia Histórico-Crítica',
      question: 'Na formulação de Dermeval Saviani, qual momento da pedagogia histórico-crítica traduz a elaboração superior da consciência, quando o educando passa da apreensão sincrética da realidade para uma compreensão sintetizada e crítica da prática social?',
      options: [
        { letter: 'A', text: 'Catarse, entendida como apropriação consciente dos instrumentos culturais e reordenação qualitativa da prática social pelo educando.' },
        { letter: 'B', text: 'Problematização, tomada como fase conclusiva em que o aluno consolida autonomamente a síntese final do conhecimento escolar.' },
        { letter: 'C', text: 'Instrumentalização, porque nela se esgota a transformação da consciência por meio da mera exposição sistemática dos conteúdos.' },
        { letter: 'D', text: 'Prática social inicial, por representar o ponto máximo de elaboração teórica da experiência concreta vivida pelos estudantes.' }
      ],
      correctAnswer: 'A',
      explanation: 'Na pedagogia histórico-crítica, a catarse representa a incorporação qualitativa do conhecimento elaborado, permitindo ao sujeito reinterpretar criticamente a prática social. Problematização e instrumentalização são mediações anteriores desse processo.'
    },
    {
      id: 2,
      subtheme: 'Gramsci e Escola Unitária',
      question: 'A noção gramsciana de escola unitária opõe-se à dualidade escolar tradicional principalmente porque defende:',
      options: [
        { letter: 'A', text: 'A antecipação da formação profissional específica desde as séries iniciais, a fim de ajustar precocemente o aluno às demandas produtivas.' },
        { letter: 'B', text: 'Uma formação omnilateral de base humanística e científica antes da especialização técnico-profissional, superando a separação entre trabalho manual e intelectual.' },
        { letter: 'C', text: 'A neutralização dos conflitos de classe por meio de um currículo mínimo centrado apenas em competências instrumentais.' },
        { letter: 'D', text: 'A substituição do ensino sistemático pela livre expressão do aluno, sem centralidade dos conteúdos historicamente produzidos.' }
      ],
      correctAnswer: 'B',
      explanation: 'Para Gramsci, a escola unitária deve formar integralmente o sujeito, articulando cultura geral, ciência e trabalho, antes da especialização. Ela combate a dualidade que reserva formação ampla às elites e utilitária às classes subalternas.'
    },
    {
      id: 3,
      subtheme: 'Tendências Pedagógicas',
      question: 'Na tendência crítico-social dos conteúdos, tal como formulada por Libâneo, o papel do professor é melhor compreendido como:',
      options: [
        { letter: 'A', text: 'Facilitador neutro que apenas organiza experiências espontâneas do aluno, evitando intervir na seleção de conteúdos socialmente relevantes.' },
        { letter: 'B', text: 'Especialista técnico que privilegia o treinamento de habilidades operacionais desvinculadas das contradições sociais concretas.' },
        { letter: 'C', text: 'Mediador ativo entre os conteúdos sistematizados da cultura e a prática social dos alunos, promovendo apropriação crítica do saber.' },
        { letter: 'D', text: 'Animador de grupos que relativiza o conhecimento científico para não hierarquizar diferentes formas de saber.' }
      ],
      correctAnswer: 'C',
      explanation: 'A tendência crítico-social dos conteúdos atribui ao professor mediação intencional entre o saber elaborado e a realidade social do aluno, visando leitura crítica e emancipação.'
    },
    {
      id: 4,
      subtheme: 'Durkheim e Socialização',
      question: 'Ao definir a educação como ação exercida pelas gerações adultas sobre as mais novas, Durkheim enfatiza sobretudo que a escola tem a função de:',
      options: [
        { letter: 'A', text: 'Estimular a manifestação irrestrita das aptidões naturais individuais, independentemente das exigências coletivas da sociedade.' },
        { letter: 'B', text: 'Substituir integralmente a família na formação moral e afetiva da criança, anulando a influência dos grupos primários.' },
        { letter: 'C', text: 'Promover unicamente a ascensão social por meio da meritocracia escolar, reduzindo a educação à mobilidade econômica.' },
        { letter: 'D', text: 'Constituir nos indivíduos estados físicos, intelectuais e morais requeridos pela vida social, realizando uma socialização metódica.' }
      ],
      correctAnswer: 'D',
      explanation: 'Durkheim entende a educação como socialização metódica das novas gerações, responsável por formar disposições compatíveis com a vida coletiva.'
    },
    {
      id: 5,
      subtheme: 'Paulo Freire',
      question: 'Em Paulo Freire, a dialogicidade constitui princípio epistemológico e político porque supõe que o conhecimento se produz:',
      options: [
        { letter: 'A', text: 'Pela transmissão vertical do saber legítimo do educador ao educando, desde que a linguagem utilizada seja acessível e motivadora.' },
        { letter: 'B', text: 'Na relação entre sujeitos históricos que problematizam o mundo mediatizados pela realidade concreta, superando a lógica bancária.' },
        { letter: 'C', text: 'Por descoberta individual autônoma, dispensando qualquer sistematização curricular ou intervenção intencional do professor.' },
        { letter: 'D', text: 'A partir da neutralidade científica do ensino, que deve preservar-se de conflitos ideológicos e sociais.' }
      ],
      correctAnswer: 'B',
      explanation: 'Freire rejeita a educação bancária e afirma a produção do conhecimento em diálogo entre sujeitos históricos mediatizados pelo mundo.'
    }
  ],
  'Psicologia da Educação': [
    {
      id: 1,
      subtheme: 'Vygotsky e ZDP',
      question: 'Na perspectiva histórico-cultural, a atuação pedagógica na zona de desenvolvimento proximal é corretamente compreendida quando o professor:',
      options: [
        { letter: 'A', text: 'Limita-se a observar as funções já consolidadas, evitando interferências que possam comprometer a autonomia espontânea do aluno.' },
        { letter: 'B', text: 'Oferece mediações intencionais para que o estudante realize, com ajuda qualificada, tarefas que ainda não executa de modo independente.' },
        { letter: 'C', text: 'Substitui integralmente a ação do aluno, pois o desenvolvimento depende da instrução externa antes de qualquer participação ativa.' },
        { letter: 'D', text: 'Prioriza apenas exercícios repetitivos, já que o amadurecimento biológico antecede e determina completamente a aprendizagem.' }
      ],
      correctAnswer: 'B',
      explanation: 'A ZDP expressa o campo de possibilidades em que a aprendizagem mediada impulsiona o desenvolvimento. O ensino eficaz atua sobre funções em processo de maturação.'
    },
    {
      id: 2,
      subtheme: 'Piaget e Equilibração',
      question: 'No construtivismo piagetiano, a equilibração majorante explica o desenvolvimento cognitivo como um processo em que o sujeito:',
      options: [
        { letter: 'A', text: 'Acumula informações externas por associação, preservando estruturas mentais fixas e independentes das perturbações do meio.' },
        { letter: 'B', text: 'Subordina integralmente a assimilação à imitação social, de modo que a inteligência decorre prioritariamente da linguagem do adulto.' },
        { letter: 'C', text: 'Supera desequilíbrios por reorganizações sucessivas das estruturas cognitivas, produzindo formas mais complexas de adaptação.' },
        { letter: 'D', text: 'Evolui de forma linear e homogênea, sem rupturas qualitativas entre estágios e sem necessidade de conflito cognitivo.' }
      ],
      correctAnswer: 'C',
      explanation: 'A equilibração majorante envolve desequilíbrio, regulação e reorganização estrutural, produzindo níveis mais sofisticados de pensamento.'
    },
    {
      id: 3,
      subtheme: 'Wallon',
      question: 'A teoria psicogenética de Henri Wallon permite afirmar que o desenvolvimento infantil é marcado por:',
      options: [
        { letter: 'A', text: 'Predomínio constante da inteligência lógico-formal desde o nascimento, com a afetividade ocupando papel secundário e residual.' },
        { letter: 'B', text: 'Alternância funcional entre afetividade, movimento, inteligência e formação da pessoa, em dinâmica não linear e relacional.' },
        { letter: 'C', text: 'Supremacia das estruturas biológicas sobre a interação social, tornando o meio apenas circunstancial no desenvolvimento.' },
        { letter: 'D', text: 'Evolução cumulativa sem crises, em que cada aquisição substitui integralmente a anterior e elimina contradições.' }
      ],
      correctAnswer: 'B',
      explanation: 'Wallon concebe o desenvolvimento como processo dialético, marcado por alternâncias de predominância funcional e pela integração entre emoção, motricidade e cognição.'
    },
    {
      id: 4,
      subtheme: 'Ausubel',
      question: 'Nos termos da aprendizagem significativa de Ausubel, os organizadores prévios cumprem a função de:',
      options: [
        { letter: 'A', text: 'Estabelecer pontes cognitivas entre conhecimentos prévios relevantes e o novo conteúdo, favorecendo ancoragem não arbitrária.' },
        { letter: 'B', text: 'Substituir os subsunçores deficientes por memorização mecânica intensiva antes da introdução de conceitos complexos.' },
        { letter: 'C', text: 'Eliminar a necessidade de conhecimentos prévios, uma vez que o material potencialmente significativo basta por si mesmo.' },
        { letter: 'D', text: 'Uniformizar o ritmo da turma por meio de sínteses finais, utilizadas apenas após a exposição completa do conteúdo.' }
      ],
      correctAnswer: 'A',
      explanation: 'Os organizadores prévios ajudam a ativar ideias mais inclusivas na mente do aluno para que a nova informação encontre ancoragem significativa.'
    },
    {
      id: 5,
      subtheme: 'Behaviorismo de Skinner',
      question: 'Em uma análise skinneriana do comportamento, o esquema de reforçamento mais resistente à extinção tende a ser aquele em que:',
      options: [
        { letter: 'A', text: 'O reforço ocorre após intervalos fixos e previsíveis, produzindo estabilidade contínua da resposta sem pausas.' },
        { letter: 'B', text: 'Toda resposta correta é reforçada imediatamente, mantendo-se a mesma taxa de emissão indefinidamente.' },
        { letter: 'C', text: 'O reforço depende de longos intervalos sem emissão de respostas, reduzindo drasticamente a persistência comportamental.' },
        { letter: 'D', text: 'O reforço é oferecido após número variável de respostas, produzindo alta taxa de resposta e forte resistência à extinção.' }
      ],
      correctAnswer: 'D',
      explanation: 'Nos esquemas de razão variável, o reforço ocorre de modo imprevisível após diferentes quantidades de respostas, o que mantém taxas elevadas e grande resistência à extinção.'
    }
  ],
  'Didática e Prática Pedagógica': [
    {
      id: 1,
      subtheme: 'Avaliação Formativa',
      question: 'Em uma perspectiva didática crítica, a avaliação formativa distingue-se da meramente classificatória porque se orienta prioritariamente para:',
      options: [
        { letter: 'A', text: 'Hierarquizar os alunos com base em padrões uniformes, permitindo selecionar os mais aptos ao prosseguimento escolar.' },
        { letter: 'B', text: 'Mensurar o rendimento final por meio de instrumentos padronizados, independentemente da trajetória de aprendizagem.' },
        { letter: 'C', text: 'Produzir devolutivas contínuas que realimentem o ensino e permitam intervenções pedagógicas sobre dificuldades identificadas.' },
        { letter: 'D', text: 'Reduzir ao mínimo os critérios explícitos, evitando constrangimentos decorrentes da comparação de desempenhos.' }
      ],
      correctAnswer: 'C',
      explanation: 'A avaliação formativa acompanha o processo, gera evidências sobre a aprendizagem e subsidia decisões de ensino.'
    },
    {
      id: 2,
      subtheme: 'Sequência Didática',
      question: 'Na tradição de Dolz e Schneuwly, a sequência didática organiza-se como dispositivo de ensino voltado sobretudo para:',
      options: [
        { letter: 'A', text: 'A repetição cumulativa de exercícios gramaticais descontextualizados, visando automatização de micro-habilidades isoladas.' },
        { letter: 'B', text: 'A apropriação progressiva de um gênero textual por meio de produção inicial, módulos de aprendizagem e produção final.' },
        { letter: 'C', text: 'A substituição do planejamento docente por roteiros prontos, a fim de garantir homogeneidade metodológica entre turmas.' },
        { letter: 'D', text: 'A livre escolha dos conteúdos pelos estudantes, com mínima intervenção do professor na definição de objetivos e critérios.' }
      ],
      correctAnswer: 'B',
      explanation: 'A sequência didática é um dispositivo planejado para ensinar gêneros, articulando diagnóstico inicial, intervenções focadas e produção final.'
    },
    {
      id: 3,
      subtheme: 'Transposição Didática',
      question: 'O conceito de transposição didática, associado a Chevallard, ajuda a compreender que o conhecimento escolar:',
      options: [
        { letter: 'A', text: 'Resulta de transformações do saber científico em objeto ensinável, mediadas por escolhas curriculares e institucionais.' },
        { letter: 'B', text: 'Deve reproduzir fielmente a linguagem acadêmica original, sob pena de descaracterização epistemológica do conteúdo.' },
        { letter: 'C', text: 'É necessariamente simplificado de forma empobrecida, tornando inevitável a perda de rigor em qualquer situação de ensino.' },
        { letter: 'D', text: 'Independe das condições escolares concretas, pois a didática atua apenas sobre técnicas de exposição e gestão do tempo.' }
      ],
      correctAnswer: 'A',
      explanation: 'A transposição didática mostra que o saber ensinado não é mera cópia do saber científico: ele passa por adaptações orientadas por finalidades educativas.'
    },
    {
      id: 4,
      subtheme: 'Planejamento',
      question: 'No planejamento didático coerente, a articulação entre objetivos, conteúdos, estratégias e avaliação exige que:',
      options: [
        { letter: 'A', text: 'Os instrumentos avaliativos sejam definidos apenas ao final do processo, evitando que condicionem a criatividade docente.' },
        { letter: 'B', text: 'Os conteúdos sejam escolhidos prioritariamente pela disponibilidade de materiais, mesmo sem relação direta com os objetivos formativos.' },
        { letter: 'C', text: 'As metodologias sejam mantidas estáveis em todas as turmas, independentemente do perfil dos estudantes e das demandas do contexto.' },
        { letter: 'D', text: 'As escolhas metodológicas e avaliativas decorram das aprendizagens pretendidas, em alinhamento com intencionalidades formativas explícitas.' }
      ],
      correctAnswer: 'D',
      explanation: 'Planejamento coerente pressupõe alinhamento interno entre objetivos, conteúdos, métodos e avaliação.'
    },
    {
      id: 5,
      subtheme: 'Metodologias Ativas',
      question: 'Ao se afirmar que metodologias ativas exigem centralidade do estudante, não se pode concluir que o professor:',
      options: [
        { letter: 'A', text: 'Deva abdicar do planejamento sistemático, uma vez que o protagonismo discente elimina a necessidade de mediação pedagógica.' },
        { letter: 'B', text: 'Possa organizar situações-problema, oferecer feedback e conduzir intervenções intencionais para qualificar a aprendizagem.' },
        { letter: 'C', text: 'Precise repensar o uso do tempo, dos recursos e da avaliação, considerando participação, autoria e resolução de problemas.' },
        { letter: 'D', text: 'Atue como mediador que orienta, monitora e desafia os estudantes durante processos colaborativos e investigativos.' }
      ],
      correctAnswer: 'A',
      explanation: 'Metodologias ativas não significam ausência docente. Elas exigem mediação qualificada, planejamento intencional e avaliação coerente.'
    }
  ],
  'Legislação e Políticas Educacionais': [
    {
      id: 1,
      subtheme: 'Constituição Federal de 1988',
      question: 'À luz do art. 208 da Constituição Federal, constitui dever do Estado com a educação:',
      options: [
        { letter: 'A', text: 'Garantir apenas o ensino fundamental obrigatório, ficando a educação infantil condicionada à capacidade administrativa do município.' },
        { letter: 'B', text: 'Assegurar educação básica obrigatória e gratuita dos 4 aos 17 anos, além da educação infantil em creche e pré-escola às crianças até 5 anos.' },
        { letter: 'C', text: 'Oferecer prioritariamente ensino médio gratuito, admitindo cobrança complementar na educação infantil e na educação especial.' },
        { letter: 'D', text: 'Disponibilizar ensino obrigatório a partir dos 6 anos, podendo o atendimento anterior ocorrer apenas em caráter assistencial.' }
      ],
      correctAnswer: 'B',
      explanation: 'O art. 208 prevê educação básica obrigatória e gratuita dos 4 aos 17 anos e atendimento em creche e pré-escola às crianças até 5 anos.'
    },
    {
      id: 2,
      subtheme: 'LDB e Currículo',
      question: 'Segundo a LDB, após a alteração introduzida pela BNCC, os currículos da educação básica devem compor-se de:',
      options: [
        { letter: 'A', text: 'Base comum nacional fechada e uniforme, sem complementação local, para assegurar isonomia plena entre sistemas de ensino.' },
        { letter: 'B', text: 'Parte diversificada autônoma, sem necessidade de articulação com aprendizagens essenciais nacionalmente definidas.' },
        { letter: 'C', text: 'Base nacional comum complementada por parte diversificada, exigida pelas características regionais, locais, culturais, econômicas e dos educandos.' },
        { letter: 'D', text: 'Conteúdos mínimos obrigatórios e trilhas livres opcionais, cabendo a cada escola definir o peso de cada uma sem parâmetros nacionais.' }
      ],
      correctAnswer: 'C',
      explanation: 'A LDB estabelece que os currículos se compõem de uma base nacional comum e de uma parte diversificada, articuladas entre si e sensíveis às especificidades locais.'
    },
    {
      id: 3,
      subtheme: 'Gestão Democrática',
      question: 'No art. 14 da LDB, a gestão democrática do ensino público é associada, entre outros aspectos, à:',
      options: [
        { letter: 'A', text: 'Participação dos profissionais da educação na elaboração do projeto pedagógico e participação da comunidade escolar em conselhos ou equivalentes.' },
        { letter: 'B', text: 'Escolha exclusiva da direção escolar pela comunidade externa, independentemente de critérios técnicos ou normativos do sistema.' },
        { letter: 'C', text: 'Autonomia irrestrita da equipe gestora para definir currículo, avaliação e financiamento, desde que respeitada a carga horária mínima.' },
        { letter: 'D', text: 'Subordinação do projeto pedagógico às metas administrativas fixadas centralmente pelos órgãos de controle do sistema.' }
      ],
      correctAnswer: 'A',
      explanation: 'A LDB vincula a gestão democrática à participação dos profissionais da educação na elaboração do projeto pedagógico e à participação da comunidade em conselhos escolares.'
    },
    {
      id: 4,
      subtheme: 'Educação Especial na LDB',
      question: 'Conforme o art. 59 da LDB, os sistemas de ensino devem assegurar aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:',
      options: [
        { letter: 'A', text: 'Currículo idêntico e inflexível para todos, evitando adaptações que possam gerar distinções pedagógicas no ambiente escolar.' },
        { letter: 'B', text: 'Atendimento exclusivamente em instituições especializadas, uma vez que a escola comum não constitui espaço pedagógico prioritário.' },
        { letter: 'C', text: 'Terminalidade específica apenas para estudantes com deficiência física, desde que comprovada impossibilidade de alfabetização.' },
        { letter: 'D', text: 'Currículos, métodos, técnicas, recursos educativos e organização específicos para atender às suas necessidades.' }
      ],
      correctAnswer: 'D',
      explanation: 'O art. 59 da LDB prevê recursos e organização específicos para garantir acesso, participação e aprendizagem desses estudantes.'
    },
    {
      id: 5,
      subtheme: 'Plano Nacional de Educação',
      question: 'A Meta 17 do PNE (2014-2024) estabeleceu como horizonte principal:',
      options: [
        { letter: 'A', text: 'Universalizar a educação em tempo integral para todos os estudantes da educação básica pública ao final da década.' },
        { letter: 'B', text: 'Equiparar o rendimento médio dos profissionais do magistério das redes públicas ao dos demais profissionais com escolaridade equivalente.' },
        { letter: 'C', text: 'Garantir que todos os docentes da educação básica possuam formação stricto sensu em nível de mestrado ou doutorado.' },
        { letter: 'D', text: 'Destinar exclusivamente 10% do PIB à valorização salarial do magistério, independentemente de demais investimentos educacionais.' }
      ],
      correctAnswer: 'B',
      explanation: 'A Meta 17 trata da valorização do magistério por meio da equiparação do rendimento médio dos professores ao dos demais profissionais com escolaridade equivalente.'
    }
  ],
  'Gestão e Organização Escolar': [
    {
      id: 1,
      subtheme: 'PPP e Regimento',
      question: 'A distinção conceitual entre Projeto Político-Pedagógico e regimento escolar é corretamente formulada quando se afirma que:',
      options: [
        { letter: 'A', text: 'O regimento substitui o PPP por possuir maior força normativa e, por isso, concentra a identidade pedagógica da escola.' },
        { letter: 'B', text: 'O PPP restringe-se às metas financeiras, enquanto o regimento organiza exclusivamente as práticas avaliativas e curriculares.' },
        { letter: 'C', text: 'O PPP expressa identidade, finalidades e diretrizes político-pedagógicas, enquanto o regimento disciplina normas de funcionamento institucional.' },
        { letter: 'D', text: 'PPP e regimento são documentos equivalentes, diferenciando-se apenas pelo nível de detalhamento redacional exigido pelo sistema.' }
      ],
      correctAnswer: 'C',
      explanation: 'O PPP orienta a identidade e a intencionalidade pedagógica da escola; o regimento organiza regras e funcionamento institucional.'
    },
    {
      id: 2,
      subtheme: 'Conselho Escolar',
      question: 'Em uma perspectiva de gestão democrática, o conselho escolar cumpre papel estratégico quando atua como instância:',
      options: [
        { letter: 'A', text: 'Deliberativa, consultiva, mobilizadora e fiscalizadora, ampliando a participação da comunidade na vida escolar.' },
        { letter: 'B', text: 'Meramente cerimonial, responsável por homologar decisões previamente definidas pela direção e pela mantenedora.' },
        { letter: 'C', text: 'Exclusivamente disciplinar, voltada ao julgamento de faltas graves de estudantes e profissionais da escola.' },
        { letter: 'D', text: 'Técnica e especializada, reservada apenas a profissionais da educação com formação em administração escolar.' }
      ],
      correctAnswer: 'A',
      explanation: 'O conselho escolar amplia a participação coletiva e fortalece a gestão democrática ao atuar em dimensões deliberativas, consultivas, mobilizadoras e fiscalizadoras.'
    },
    {
      id: 3,
      subtheme: 'Indicadores Educacionais',
      question: 'No uso de indicadores para gestão escolar, uma postura analítica consistente exige que a equipe gestora:',
      options: [
        { letter: 'A', text: 'Tome decisões exclusivamente com base em rankings externos, evitando leituras qualitativas que possam relativizar os resultados.' },
        { letter: 'B', text: 'Considere apenas indicadores de aprovação, por serem os que melhor expressam isoladamente a qualidade da aprendizagem.' },
        { letter: 'C', text: 'Desconsidere dados de contexto socioeconômico para evitar justificativas que comprometam a responsabilização institucional.' },
        { letter: 'D', text: 'Articule dados quantitativos e evidências qualitativas, interpretando resultados à luz do contexto e das metas pedagógicas da escola.' }
      ],
      correctAnswer: 'D',
      explanation: 'Indicadores precisam ser analisados de forma contextualizada. Uma gestão consistente combina dados quantitativos com leituras qualitativas para orientar decisões pedagógicas.'
    },
    {
      id: 4,
      subtheme: 'Liderança Escolar',
      question: 'A noção contemporânea de liderança distribuída na escola afasta-se de modelos centralizadores porque pressupõe:',
      options: [
        { letter: 'A', text: 'Fragmentação das responsabilidades, de modo que cada setor atue autonomamente sem necessidade de coordenação institucional.' },
        { letter: 'B', text: 'Compartilhamento de responsabilidades e construção coletiva das decisões, sem anular a coordenação pedagógica e a intencionalidade gestora.' },
        { letter: 'C', text: 'Supressão da figura do diretor, já que a liderança deve dissolver-se inteiramente em assembleias permanentes.' },
        { letter: 'D', text: 'Prevalência do carisma pessoal do gestor, capaz de mobilizar a equipe mesmo sem processos participativos formalizados.' }
      ],
      correctAnswer: 'B',
      explanation: 'A liderança distribuída envolve compartilhamento de responsabilidades e participação coletiva, mas não elimina coordenação institucional.'
    },
    {
      id: 5,
      subtheme: 'Planejamento Institucional',
      question: 'Quando o planejamento escolar é construído com base em diagnóstico institucional, isso significa, sobretudo, que ele deve:',
      options: [
        { letter: 'A', text: 'Reproduzir metas padronizadas do sistema, independentemente das singularidades da escola, para assegurar comparabilidade externa.' },
        { letter: 'B', text: 'Concentrar-se na previsão orçamentária, deixando questões pedagógicas para ajustes contingenciais ao longo do ano letivo.' },
        { letter: 'C', text: 'Partir de problemas, potencialidades e evidências concretas da escola, articulando prioridades, metas e ações monitoráveis.' },
        { letter: 'D', text: 'Restringir-se ao calendário escolar e à distribuição de cargas horárias, evitando metas complexas de aprendizagem.' }
      ],
      correctAnswer: 'C',
      explanation: 'O diagnóstico institucional dá base ao planejamento ao identificar necessidades reais, potencialidades e prioridades da escola.'
    }
  ],
  'Educação Inclusiva e Diversidade': [
    {
      id: 1,
      subtheme: 'Atendimento Educacional Especializado',
      question: 'No marco da educação inclusiva brasileira, o Atendimento Educacional Especializado deve ser compreendido como serviço que:',
      options: [
        { letter: 'A', text: 'Substitui o ensino comum sempre que o estudante apresentar dificuldades persistentes de aprendizagem ou adaptação escolar.' },
        { letter: 'B', text: 'Complementa ou suplementa a formação do estudante, sem substituir sua matrícula e participação na classe comum.' },
        { letter: 'C', text: 'Se restringe à oferta de recursos de acessibilidade física, não abrangendo estratégias pedagógicas específicas.' },
        { letter: 'D', text: 'Destina-se exclusivamente a estudantes com deficiência intelectual, não alcançando outros públicos da educação especial.' }
      ],
      correctAnswer: 'B',
      explanation: 'O AEE complementa ou suplementa a escolarização, oferecendo recursos e estratégias para acesso, participação e aprendizagem, sem substituir a classe comum.'
    },
    {
      id: 2,
      subtheme: 'Desenho Universal para a Aprendizagem',
      question: 'O Desenho Universal para a Aprendizagem orienta práticas inclusivas quando propõe, entre outros princípios:',
      options: [
        { letter: 'A', text: 'Múltiplos meios de engajamento, representação e ação/expressão, ampliando oportunidades de participação e aprendizagem.' },
        { letter: 'B', text: 'Padronização rigorosa de objetivos, atividades e instrumentos, a fim de assegurar tratamento pedagógico idêntico para todos.' },
        { letter: 'C', text: 'Separação metodológica dos estudantes com deficiência para preservar o ritmo de aprendizagem da turma de referência.' },
        { letter: 'D', text: 'Substituição do currículo comum por planos individualizados independentes das metas coletivas da classe.' }
      ],
      correctAnswer: 'A',
      explanation: 'O DUA propõe diversificação planejada de meios de engajamento, representação e expressão, de modo a remover barreiras e ampliar acesso ao currículo comum.'
    },
    {
      id: 3,
      subtheme: 'Educação Bilíngue de Surdos',
      question: 'No campo da educação de surdos, a perspectiva bilíngue assume como formulação mais consistente a defesa de que:',
      options: [
        { letter: 'A', text: 'A oralização deve ocupar lugar central e exclusivo, cabendo à Libras função apenas compensatória em etapas iniciais.' },
        { letter: 'B', text: 'A aprendizagem do português escrito deve anteceder a Libras, pois a língua majoritária organiza o desenvolvimento cognitivo escolar.' },
        { letter: 'C', text: 'O uso simultâneo indiferenciado de Libras e português falado assegura automaticamente aprendizagem bilíngue plena.' },
        { letter: 'D', text: 'A Libras constitua primeira língua e o português escrito segunda língua, com mediações visuais e pedagógicas adequadas.' }
      ],
      correctAnswer: 'D',
      explanation: 'Na abordagem bilíngue, a Libras é reconhecida como primeira língua do estudante surdo e o português escrito como segunda língua.'
    },
    {
      id: 4,
      subtheme: 'Autismo e Garantias Legais',
      question: 'A Lei nº 12.764/2012, ao tratar da pessoa com transtorno do espectro autista, assegura no campo educacional, entre outros aspectos:',
      options: [
        { letter: 'A', text: 'Matrícula condicionada à existência de classes especializadas específicas, quando a escola regular não possuir equipe multiprofissional própria.' },
        { letter: 'B', text: 'Dispensa da frequência escolar sempre que o estudante apresentar hipersensibilidade sensorial ou crises recorrentes.' },
        { letter: 'C', text: 'Direito a acompanhante especializado, quando comprovada sua necessidade, sem que isso substitua a responsabilidade pedagógica da escola.' },
        { letter: 'D', text: 'Atendimento educacional apenas por instituições conveniadas da saúde, dada a natureza clínica predominante do transtorno.' }
      ],
      correctAnswer: 'C',
      explanation: 'A Lei Berenice Piana assegura direitos educacionais à pessoa com TEA, incluindo acompanhante especializado quando necessário.'
    },
    {
      id: 5,
      subtheme: 'Acessibilidade Curricular',
      question: 'Em práticas inclusivas, a diferenciação entre adaptação curricular e desenho acessível implica reconhecer que:',
      options: [
        { letter: 'A', text: 'Toda dificuldade do estudante exige supressão de objetivos centrais do currículo comum, sob pena de exclusão pedagógica.' },
        { letter: 'B', text: 'Antes de modificações individualizadas mais significativas, devem-se reduzir barreiras por meio de acessibilidade, flexibilização e apoio ao currículo comum.' },
        { letter: 'C', text: 'Acessibilidade curricular refere-se apenas à tradução do material escrito para formatos alternativos, sem alterar estratégias de ensino.' },
        { letter: 'D', text: 'A adaptação curricular só é legítima quando conduz a um currículo paralelo permanente e desvinculado da turma de referência.' }
      ],
      correctAnswer: 'B',
      explanation: 'A perspectiva inclusiva prioriza acesso ao currículo comum com remoção de barreiras, recursos e flexibilizações antes de alterações individualizadas mais significativas.'
    }
  ],
  'Alfabetização e Letramento': [
    {
      id: 1,
      subtheme: 'Psicogênese da Escrita',
      question: 'Segundo a psicogênese da língua escrita, uma criança que registra "BNA" para escrever "banana" evidencia, mais provavelmente, uma hipótese:',
      options: [
        { letter: 'A', text: 'Pré-silábica, porque ainda não estabelece qualquer relação entre escrita e aspectos sonoros da fala.' },
        { letter: 'B', text: 'Silábica sem valor sonoro, pois utiliza uma letra para cada sílaba sem correspondência fonética pertinente.' },
        { letter: 'C', text: 'Silábica com valor sonoro, pois utiliza uma letra para cada sílaba com correspondência fonética pertinente.' },
        { letter: 'D', text: 'Alfabética consolidada, pois já representa integralmente todos os fonemas necessários para a escrita convencional.' }
      ],
      correctAnswer: 'C',
      explanation: 'Ao escrever "BNA" para "banana", a criança registra uma letra para cada sílaba da palavra e mantém correspondência sonora pertinente com as partes faladas. Isso caracteriza hipótese silábica com valor sonoro, e não silábico-alfabética.'
    },
    {
      id: 2,
      subtheme: 'Consciência Fonológica',
      question: 'Entre as habilidades metalinguísticas relacionadas à alfabetização inicial, a consciência fonológica ganha destaque porque:',
      options: [
        { letter: 'A', text: 'Favorece a análise e manipulação de segmentos sonoros da fala, apoiando a compreensão do princípio alfabético.' },
        { letter: 'B', text: 'Substitui a necessidade de contato com práticas sociais de leitura e escrita, desde que seja treinada sistematicamente.' },
        { letter: 'C', text: 'Equivale à memorização de regras ortográficas, sendo suficiente para assegurar leitura autônoma de textos complexos.' },
        { letter: 'D', text: 'Desempenha papel apenas após a consolidação da leitura fluente, não interferindo na entrada no sistema de escrita.' }
      ],
      correctAnswer: 'A',
      explanation: 'A consciência fonológica auxilia a criança a refletir sobre a estrutura sonora da fala e a compreender como a escrita representa fonemas.'
    },
    {
      id: 3,
      subtheme: 'BNCC e Alfabetização',
      question: 'Na BNCC, a alfabetização nos dois primeiros anos do ensino fundamental deve ser entendida como processo que:',
      options: [
        { letter: 'A', text: 'Se encerra com a memorização de correspondências grafofonêmicas, bastando a leitura de palavras isoladas ao fim do 2º ano.' },
        { letter: 'B', text: 'Prioriza exclusivamente fluência mecânica e precisão decodificadora, deixando a compreensão textual para anos posteriores.' },
        { letter: 'C', text: 'Dispensa o trabalho com gêneros textuais, pois o foco inicial deve recair apenas sobre a consolidação do código.' },
        { letter: 'D', text: 'Articula apropriação do sistema de escrita, leitura, produção textual e inserção em práticas significativas de linguagem.' }
      ],
      correctAnswer: 'D',
      explanation: 'A BNCC não reduz alfabetização ao domínio mecânico do código. O processo envolve leitura, escrita e inserção em práticas sociais de linguagem.'
    },
    {
      id: 4,
      subtheme: 'Magda Soares',
      question: 'Ao afirmar que é preciso “alfabetizar letrando”, Magda Soares sustenta que a escola deve:',
      options: [
        { letter: 'A', text: 'Separar rigidamente o ensino do sistema alfabético das práticas de leitura e escrita, para evitar sobrecarga cognitiva no início da escolarização.' },
        { letter: 'B', text: 'Integrar a aprendizagem do sistema de escrita às práticas sociais de leitura e produção de textos, sem dissociar código e uso social.' },
        { letter: 'C', text: 'Priorizar textos literários em detrimento do trabalho com correspondências fonema-grafema, consideradas tecnicistas.' },
        { letter: 'D', text: 'Concentrar-se na dimensão social da escrita, deixando a apropriação do sistema alfabético para momentos posteriores do currículo.' }
      ],
      correctAnswer: 'B',
      explanation: 'Para Magda Soares, alfabetização e letramento são processos distintos, porém indissociáveis na prática pedagógica.'
    },
    {
      id: 5,
      subtheme: 'Hipóteses de Escrita',
      question: 'Se um aluno escreve "BNC" para "boneca" e "CVL" para "cavalo", revelando correspondência parcial entre escrita e oralidade, o professor pode inferir, com maior precisão, que ele se encontra em hipótese:',
      options: [
        { letter: 'A', text: 'Pré-silábica, pois ainda não considera a relação entre quantidade de letras e partes sonoras das palavras.' },
        { letter: 'B', text: 'Silábica sem valor sonoro, dado que as letras escolhidas não apresentam qualquer vínculo fonético com as sílabas representadas.' },
        { letter: 'C', text: 'Silábica com valor sonoro, uma vez que há tentativa de relacionar cada sílaba a letras com pertinência fonética parcial.' },
        { letter: 'D', text: 'Alfabética, porque já está representando a totalidade dos segmentos sonoros essenciais das palavras escritas.' }
      ],
      correctAnswer: 'C',
      explanation: 'Na hipótese silábica com valor sonoro, a criança tende a usar uma letra para cada sílaba da palavra, buscando manter pertinência fonética com o que escuta. Os registros "BNC" e "CVL" ilustram esse princípio de forma mais coerente.'
    }
  ],
  'Tecnologias na Educação': [
    {
      id: 1,
      subtheme: 'TPACK',
      question: 'O modelo TPACK é mais bem compreendido quando se afirma que a integração pedagógica de tecnologias depende da articulação entre:',
      options: [
        { letter: 'A', text: 'Domínio instrumental das ferramentas digitais e domínio do conteúdo, sendo o conhecimento pedagógico uma dimensão acessória.' },
        { letter: 'B', text: 'Competência técnica em softwares educacionais e familiaridade discente com mídias, independentemente dos objetivos curriculares.' },
        { letter: 'C', text: 'Conhecimentos tecnológico, pedagógico e do conteúdo, inclusive em suas intersecções, para orientar escolhas didáticas contextualizadas.' },
        { letter: 'D', text: 'Planejamento curricular e infraestrutura de rede, bastando esses fatores para assegurar inovação pedagógica consistente.' }
      ],
      correctAnswer: 'C',
      explanation: 'O TPACK destaca que o uso pedagógico significativo de tecnologias exige articulação entre conhecimento do conteúdo, da pedagogia e da tecnologia.'
    },
    {
      id: 2,
      subtheme: 'Modelo SAMR',
      question: 'No modelo SAMR, uma atividade em que a tecnologia permite redesenhar significativamente a tarefa, com produção colaborativa síncrona e feedback em tempo real, situa-se mais adequadamente no nível de:',
      options: [
        { letter: 'A', text: 'Substituição, pois a tecnologia apenas troca o suporte analógico sem impacto nas operações cognitivas envolvidas.' },
        { letter: 'B', text: 'Modificação, porque a tecnologia altera estruturalmente a tarefa, ampliando possibilidades de interação e produção.' },
        { letter: 'C', text: 'Melhoria, por manter a mesma lógica da atividade tradicional com apenas ganho estético ou de rapidez.' },
        { letter: 'D', text: 'Redefinição, necessariamente reservada a qualquer uso de internet em atividades escolares, ainda que a tarefa permaneça a mesma.' }
      ],
      correctAnswer: 'B',
      explanation: 'Na modificação, a tecnologia produz mudança significativa no desenho da tarefa. Redefinição implica criação de tarefas antes inconcebíveis.'
    },
    {
      id: 3,
      subtheme: 'Cultura Digital na BNCC',
      question: 'No tratamento da cultura digital pela BNCC, espera-se que a escola favoreça o desenvolvimento de estudantes capazes de:',
      options: [
        { letter: 'A', text: 'Utilizar tecnologias de modo crítico, ético, autoral e responsável, produzindo, comunicando e avaliando informações em diferentes ambientes.' },
        { letter: 'B', text: 'Operar plataformas e aplicativos com rapidez, ainda que sem reflexão sobre autoria, privacidade ou circulação da informação.' },
        { letter: 'C', text: 'Substituir práticas de leitura e escrita por linguagens audiovisuais, mais compatíveis com a lógica contemporânea das redes.' },
        { letter: 'D', text: 'Concentrar a aprendizagem digital em componentes específicos, evitando transversalidade curricular para preservar os conteúdos tradicionais.' }
      ],
      correctAnswer: 'A',
      explanation: 'A BNCC compreende cultura digital em perspectiva crítica, ética e autoral, transversal ao currículo.'
    },
    {
      id: 4,
      subtheme: 'LGPD e Educação',
      question: 'No contexto escolar, a conformidade com a LGPD exige, entre outros cuidados, que o tratamento de dados dos estudantes observe:',
      options: [
        { letter: 'A', text: 'Liberdade irrestrita da instituição para compartilhar dados acadêmicos com parceiros tecnológicos, desde que haja finalidade educativa genérica.' },
        { letter: 'B', text: 'Coleta máxima de informações, porque a abundância de dados reduz riscos pedagógicos e melhora a personalização do ensino.' },
        { letter: 'C', text: 'Uso de dados sensíveis sem qualquer critério específico, desde que o ambiente virtual seja protegido por senha institucional.' },
        { letter: 'D', text: 'Finalidade legítima, necessidade, segurança, transparência e especial cautela no tratamento de dados de crianças e adolescentes.' }
      ],
      correctAnswer: 'D',
      explanation: 'A LGPD impõe princípios como finalidade, adequação, necessidade e segurança, além de cuidados reforçados no tratamento de dados de crianças e adolescentes.'
    },
    {
      id: 5,
      subtheme: 'Ensino Híbrido',
      question: 'No ensino híbrido, o modelo de rotação por estações caracteriza-se por:',
      options: [
        { letter: 'A', text: 'Distribuir os estudantes em trilhas inteiramente autônomas, sem mediação docente direta e sem objetivos comuns entre grupos.' },
        { letter: 'B', text: 'Alternar momentos presenciais e remotos apenas entre dias da semana, sem reorganização interna das atividades da aula.' },
        { letter: 'C', text: 'Organizar a turma em diferentes estações de aprendizagem, com tarefas variadas e pelo menos uma envolvendo tecnologia digital.' },
        { letter: 'D', text: 'Substituir a aula expositiva por estudo domiciliar obrigatório, reservando a escola exclusivamente à realização de provas e simulados.' }
      ],
      correctAnswer: 'C',
      explanation: 'Na rotação por estações, os estudantes circulam por diferentes propostas de aprendizagem, integrando atividades diversificadas e pelo menos uma estação com tecnologia digital.'
    }
  ]
};
