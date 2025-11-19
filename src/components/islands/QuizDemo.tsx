import { useState, useEffect } from 'react';

interface Question {
  id: number;
  theme: string;
  subtheme: string;
  question: string;
  options: { letter: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    theme: "Psicologia da Educação",
    subtheme: "Concepções de Aprendizagem Tradicional e Behaviorista (tábula rasa)",
    question: "Quais autores clássicos da educação consideram o aluno como alguém passivo, visto como tábula rasa?",
    options: [
      { letter: 'A', text: 'Rogers, Freinet e Skinner' },
      { letter: 'B', text: 'Piaget, Durkheim e Vygotsky' },
      { letter: 'C', text: 'Skinner, Durkheim e Herbart' },
      { letter: 'D', text: 'Freire, Lourenço Filho e Durkheim' }
    ],
    correctAnswer: 'C',
    explanation: "Esses autores veem o aluno como alguém passivo, que aprende recebendo conteúdos prontos do professor ou do ambiente. Essa visão entende o estudante como tábula rasa, ou seja, alguém que deve ser moldado pela educação. São autores ligados à pedagogia tradicional ou ao behaviorismo, ambos de caráter transmissivo"
  },
  {
    id: 2,
    theme: "Didática e Prática Pedagógica",
    subtheme: "Planejamento e Organização Escolar",
    question: "O Projeto Político-Pedagógico (PPP) é um documento fundamental para a gestão democrática da escola. Segundo a LDB 9394/96, qual é a principal característica que define o PPP?",
    options: [
      { letter: 'A', text: 'Documento elaborado exclusivamente pela equipe gestora para definir metas administrativas e financeiras' },
      { letter: 'B', text: 'Instrumento de construção coletiva que expressa a identidade, os valores e os objetivos da comunidade escolar' },
      { letter: 'C', text: 'Planejamento anual de conteúdos curriculares obrigatórios definidos pela Secretaria de Educação' },
      { letter: 'D', text: 'Relatório burocrático exigido por lei para prestação de contas aos órgãos fiscalizadores.' }
    ],
    correctAnswer: 'B',
    explanation: "O PPP deve ser feito por todos que fazem parte da escola: diretores, professores, funcionários, alunos e famílias. É um documento que mostra a identidade da escola, seus valores e objetivos. Não pode ser feito só pela direção, precisa da participação de toda a comunidade escolar."
  },
  {
    id: 3,
    theme: "Legislação e Políticas Educacionais",
    subtheme: "LDB - Educação infantil",
    question: "De acordo com a LDB 9394/96, qual é a finalidade principal da educação infantil, primeira etapa da educação básica?",
    options: [
      { letter: 'A', text: 'Garantir a alfabetização e o letramento como preparação obrigatória para o ensino fundamental' },
      { letter: 'B', text: 'Oferecer cuidados assistenciais complementando a função social da família na comunidade' },
      { letter: 'C', text: 'Desenvolver competências cognitivas específicas alinhadas aos componentes curriculares da BNCC' },
      { letter: 'D', text: 'Promover o desenvolvimento integral da criança em seus aspectos físico, psicológico, intelectual e social' }
    ],
    correctAnswer: 'D',
    explanation: "A LDB diz que a educação infantil deve desenvolver a criança de forma completa: o corpo (físico), as emoções (psicológico), o pensamento (intelectual) e o convívio com outras pessoas (social). O objetivo não é alfabetizar, mas ajudar a criança a crescer em todos esses aspectos."
  },
  {
    id: 4,
    theme: "Fundamentos da Educação",
    subtheme: "Paulo Freire - Pedagogia crítica",
    question: "Paulo Freire, em sua obra 'Pedagogia do Oprimido', critica a concepção bancária de educação e propõe uma educação:",
    options: [
      { letter: 'A', text: 'Problematizadora e dialógica, que desenvolve a consciência crítica e a autonomia dos educandos' },
      { letter: 'B', text: 'Tecnicista e pragmática, voltada para o desenvolvimento de competências profissionais específicas' },
      { letter: 'C', text: 'Tradicional e conteudista, com ênfase na transmissão sistemática do conhecimento acumulado' },
      { letter: 'D', text: 'Escolanovista e espontaneísta, centrada nos interesses naturais e na liberdade individual do aluno' }
    ],
    correctAnswer: 'A',
    explanation: "Paulo Freire defende que a educação deve ser baseada no diálogo entre professor e aluno. Ele critica quando o professor só fala e o aluno só escuta. Para Freire, professor e aluno devem conversar, questionar e construir o conhecimento juntos, desenvolvendo o pensamento crítico para entender e transformar o mundo."
  },
  {
    id: 5,
    theme: "Legislação e Políticas Educacionais",
    subtheme: "BNCC - Direitos de aprendizagem",
    question: "A BNCC estabelece seis direitos de aprendizagem para a educação infantil que devem ser assegurados nas práticas pedagógicas. Considerando a intencionalidade educativa e a centralidade da criança no processo, qual alternativa apresenta corretamente esses direitos?",
    options: [
      { letter: 'A', text: 'Alfabetizar, letrar, calcular, socializar, criar e experimentar' },
      { letter: 'B', text: 'Conviver, brincar, participar, explorar, expressar e conhecer-se' },
      { letter: 'C', text: 'Observar, questionar, investigar, registrar, comunicar e avaliar' },
      { letter: 'D', text: 'Interagir, descobrir, construir, compartilhar, respeitar e aprender' }
    ],
    correctAnswer: 'B',
    explanation: "A BNCC define seis direitos de aprendizagem e desenvolvimento para a educação infantil: Conviver (com outras crianças e adultos), Brincar (cotidianamente de diversas formas), Participar (ativamente das atividades), Explorar (movimentos, gestos, sons, formas, texturas), Expressar (sentimentos, necessidades, opiniões) e Conhecer-se (construir sua identidade). Esses direitos garantem que a criança seja protagonista do seu aprendizado e se desenvolva integralmente."
  }
];

export default function QuizDemo() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'loading' | 'quiz' | 'results'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => setCurrentScreen('quiz'), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleSelectAnswer = (answer: string) => {
    const existingAnswer = userAnswers.find(a => a.questionId === questions[currentQuestion].id);
    if (existingAnswer) return;

    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { questionId: questions[currentQuestion].id, answer, isCorrect }]);
    setShowExplanation(true);
  };

  const getCurrentAnswer = () => userAnswers.find(a => a.questionId === questions[currentQuestion].id);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setCurrentScreen('results');
    }
  };

  const calculateScore = () => userAnswers.filter(a => a.isCorrect).length;

  const getPerformanceMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfeito! Você domina completamente o conteúdo!";
    if (percentage >= 80) return "Excelente! Você tem um ótimo conhecimento!";
    if (percentage >= 60) return "Bom trabalho! Continue estudando para melhorar ainda mais!";
    if (percentage >= 40) return "Você está no caminho certo! Revise os conteúdos e tente novamente!";
    return "Continue estudando! A prática leva à perfeição!";
  };

  // Tela de Boas-vindas
  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-[#F5F5DC] py-8 px-4 md:py-12 lg:py-16">
        <div className="max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg">
            {/* Logo */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-3xl shadow-2xl">
                <img src="/logo-padagomais.png" alt="PedagoMais" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
            </div>

            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-2 md:mb-3">
              Bem-vindo ao Simulado PedagoMais
            </h1>
            <p className="text-center text-gray-600 text-sm md:text-lg mb-8 md:mb-10">
              Simulado Dinâmico e Interativo
            </p>

            {/* Box de Aviso */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-blue-900 mb-2">Esta é uma Amostra Gratuita</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Este é um teste grátis para você experimentar e ver como funciona nosso simulado. 
                    São 5 questões onde você recebe a resposta na hora e uma explicação completa para aprender melhor!
                  </p>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="font-medium">Verde = Correta</span>
                    </span>
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="font-medium">Vermelho = Errada</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Botão Iniciar */}
            <button
              onClick={() => setCurrentScreen('loading')}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Iniciar Simulado Gratuito
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de Loading
  if (currentScreen === 'loading') {
    return (
      <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-semibold text-gray-700">Preparando seu simulado...</p>
        </div>
      </div>
    );
  }

  // Tela de Resultados
  if (currentScreen === 'results') {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="min-h-screen bg-[#F5F5DC] py-8 px-4 md:py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simulado Concluído!</h1>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-6">
              <p className="text-5xl font-bold text-primary mb-2">{score}/{questions.length}</p>
              <p className="text-lg text-gray-700">Acertos: {percentage.toFixed(0)}%</p>
            </div>

            <p className="text-lg text-gray-700 mb-8">{getPerformanceMessage(score)}</p>

            {/* CTA Box */}
            <div className="bg-[#F5F2FE] border-2 border-green-500 rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8 text-left">
              <div className="mb-3 md:mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight text-center">🎯 Quer Garantir Sua Aprovação?</h3>
              </div>
              
              <p className="text-sm md:text-lg text-gray-700 mb-1 md:mb-2 text-center font-semibold">
                Esta foi apenas uma pequena amostra!
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 text-center">
                Imagine dominar <span className="font-bold text-primary">TODOS os conteúdos</span> que caem nas provas e conquistar sua vaga dos sonhos:
              </p>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <p className="text-sm md:text-base font-bold text-gray-900">✨ Mais de 800 Questões Comentadas</p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Treine com questões reais de concursos e aprenda com explicações detalhadas que vão direto ao ponto</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <p className="text-sm md:text-base font-bold text-gray-900">🧠 Mapas Mentais que Facilitam TUDO</p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Memorize os conteúdos mais complexos em minutos com nossos mapas visuais exclusivos</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <p className="text-sm md:text-base font-bold text-gray-900">🏆 Certificado Assim que se Inscrever</p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Receba seu certificado imediatamente e turbine seu currículo para se destacar nos processos seletivos</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 md:p-4 mb-3 md:mb-4 rounded-r-lg">
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  ⚡ <span className="text-yellow-700">Milhares de aprovados</span> já usaram o PedagoMais para conquistar suas vagas!
                </p>
              </div>

              <a
                href="/#pagamento"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base md:text-lg py-3 md:py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span className="leading-tight">Eu quero</span>
              </a>
            </div>

            <a
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Voltar para Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Tela do Quiz
  const question = questions[currentQuestion];
  const currentAnswer = getCurrentAnswer();

  return (
    <div className="min-h-screen bg-[#F5F5DC] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-md">
          <div className="mb-2">
            <span className="text-sm font-semibold text-gray-600">Questão {currentQuestion + 1} de {questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Questão */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-6">
          {/* Tema */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Tema</p>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <span className="text-2xl">📚</span>
              <span className="font-semibold text-blue-900">{question.theme}</span>
            </div>
          </div>

          {/* Subtema */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-2">Subtema</p>
            <p className="font-semibold text-green-700">{question.subtheme}</p>
          </div>

          {/* Pergunta */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3 text-center">Pergunta</p>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
              <p className="text-base md:text-lg text-gray-900">{question.question}</p>
            </div>
          </div>

          {/* Opções */}
          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = currentAnswer?.answer === option.letter;
              const isCorrect = option.letter === question.correctAnswer;
              const showResult = currentAnswer !== undefined;

              let bgColor = 'bg-white hover:bg-gray-50 border-gray-300';
              let letterBg = 'bg-gray-100';
              let letterColor = 'text-gray-700';
              let animation = '';
              
              if (showResult) {
                if (isCorrect) {
                  bgColor = 'bg-white border-green-500';
                  letterBg = 'bg-green-500';
                  letterColor = 'text-white';
                  animation = 'animate-pulse-once';
                } else if (isSelected) {
                  bgColor = 'bg-white border-red-500';
                  letterBg = 'bg-red-500';
                  letterColor = 'text-white';
                  animation = 'animate-shake';
                }
              }

              return (
                <button
                  key={option.letter}
                  onClick={() => handleSelectAnswer(option.letter)}
                  disabled={currentAnswer !== undefined}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${bgColor} ${animation} ${currentAnswer ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`${letterBg} ${letterColor} w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {option.letter}
                    </span>
                    <span className={`flex-1 pt-2 ${showResult && isCorrect ? 'text-gray-900 font-medium' : 'text-gray-800'}`}>
                      {option.text}
                    </span>
                    {showResult && isCorrect && (
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-2 animate-bounce-once" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-2 animate-shake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explicação */}
        {showExplanation && (
          <div className={`rounded-xl p-6 shadow-lg mb-6 ${currentAnswer?.isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              {currentAnswer?.isCorrect ? (
                <>
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Parabéns! Você acertou!
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ops! A resposta correta é {question.correctAnswer}
                </>
              )}
            </h3>
            <p className="text-gray-800">{question.explanation}</p>
          </div>
        )}

        {/* Botão Próxima */}
        {currentAnswer && (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
          </button>
        )}
      </div>
    </div>
  );
}
