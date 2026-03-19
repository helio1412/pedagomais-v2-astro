import { useState, useEffect } from 'react';
import { questionsByTheme, themes, type ThemeName } from './quizData';

interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

export default function QuizDemo() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'loading' | 'themes' | 'quiz' | 'results'>('welcome');
  const [selectedTheme, setSelectedTheme] = useState<ThemeName | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userName, setUserName] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => setCurrentScreen('themes'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    if (currentScreen === 'quiz') {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen, currentQuestion]);

  const activeQuestions = selectedTheme ? questionsByTheme[selectedTheme] : [];
  const question = activeQuestions[currentQuestion];
  const currentAnswer = question
    ? userAnswers.find((answer) => answer.questionId === question.id)
    : undefined;

  const handleSelectTheme = (theme: ThemeName) => {
    setSelectedTheme(theme);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowExplanation(false);
    setElapsedTime(0);
    setCurrentScreen('quiz');
  };

  const handleSelectAnswer = (answer: string) => {
    if (!question || currentAnswer) return;

    const isCorrect = answer === question.correctAnswer;
    setUserAnswers((previous) => [...previous, { questionId: question.id, answer, isCorrect }]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setShowExplanation(false);
      return;
    }

    setCurrentScreen('results');
  };

  const handleRestartTheme = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowExplanation(false);
    setElapsedTime(0);
    setCurrentScreen('quiz');
  };

  const handleChooseAnotherTheme = () => {
    setSelectedTheme(null);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowExplanation(false);
    setElapsedTime(0);
    setCurrentScreen('themes');
  };

  const calculateScore = () => userAnswers.filter((answer) => answer.isCorrect).length;

  const getPerformanceMessage = (score: number) => {
    const percentage = activeQuestions.length ? (score / activeQuestions.length) * 100 : 0;

    if (percentage === 100) return 'Desempenho impecável. Você está em nível altamente competitivo neste tema.';
    if (percentage >= 80) return 'Excelente resultado. Você demonstra domínio consistente de conteúdos de alto nível.';
    if (percentage >= 60) return 'Bom desempenho. Com ajustes pontuais, você pode elevar bastante sua performance.';
    if (percentage >= 40) return 'Você tem uma base promissora, mas este tema ainda exige revisão estratégica.';
    return 'Este tema pede reforço mais intenso. Vale revisar teoria, legislação e interpretação das alternativas.';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Tela de Boas-vindas
  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-white py-8 px-4 md:py-12 lg:py-16">
        <div className="max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg">
            {/* Logo */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-3xl shadow-2xl">
                <img src="/logo-padagomais.png" alt="PedagoMais" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
            </div>

            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-2 md:mb-3">
              Simulado Teste PedagoMais
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

            {/* Campo de Nome */}
            <div className="mb-6">
              <label htmlFor="userName" className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Qual é o seu nome? (Ex: Maria, João)
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: Maria"
                className="w-full px-4 py-3 md:py-4 text-base md:text-lg border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Botão Iniciar */}
            <button
              onClick={() => userName.trim() ? setCurrentScreen('loading') : null}
              disabled={!userName.trim()}
              className={`w-full font-bold text-base md:text-lg py-4 md:py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                userName.trim() 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Iniciar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de Loading
  if (currentScreen === 'loading') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="inline-block w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6"></div>
          <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {userName}, estamos carregando os temas
          </p>
          <div className="flex justify-center gap-1 mt-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    );
  }

  // Tela de Temas
  if (currentScreen === 'themes') {
    return (
      <div className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent-cyan bg-clip-text text-transparent">
                {userName}
              </span>
              <span className="text-gray-900">, selecione um tema</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {themes.map((theme) => (
              <button
                key={theme.name}
                type="button"
                onClick={() => handleSelectTheme(theme.name)}
                className={`${theme.color} rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary text-left`}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">{theme.icon}</div>
                  <p className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">{theme.name}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Toque em um tema para abrir imediatamente as 5 questões desse assunto
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Tela de Resultados
  if (currentScreen === 'results' && selectedTheme) {
    const score = calculateScore();

    return (
      <div className="min-h-screen bg-white py-8 px-4 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10 text-center">
            <p className="text-sm md:text-base font-semibold text-primary mb-2">{selectedTheme}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              {userName}, você concluiu este tema
            </h2>
            <p className="text-gray-600 mb-4">{getPerformanceMessage(score)}</p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl py-6 px-4 md:py-8 md:px-6 mb-4">
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">{score}/{activeQuestions.length}</p>
              <p className="text-gray-700 font-medium">Acertos no simulado teste</p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl border-2 border-green-500 py-6 px-4 md:py-8 md:px-6 text-left">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Quer Garantir Sua Aprovação?
                </h3>
                <p className="text-lg text-gray-700 mb-2">Esta foi apenas uma pequena amostra!</p>
                <p className="text-base text-gray-600">
                  Imagine dominar <span className="font-bold text-purple-600">TODOS os conteúdos</span> que caem nas provas e conquistar sua vaga dos sonhos:
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="font-bold text-gray-900 mb-1">✨ Mais de 800 Questões Comentadas</p>
                  <p className="text-sm text-gray-600">Treine com questões reais de concursos e aprenda com explicações detalhadas que vão direto ao ponto</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-1">🧠 Mapas Mentais que Facilitam TUDO</p>
                  <p className="text-sm text-gray-600">Memorize os conteúdos mais complexos em minutos com nossos mapas visuais exclusivos</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-1">👩‍🎓 Certificado Assim que se Inscrever</p>
                  <p className="text-sm text-gray-600">Receba seu certificado imediatamente e turbine seu currículo para se destacar nos processos seletivos</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-4 mb-6">
                <p className="text-sm md:text-base text-gray-800">
                  ⚡ <span className="font-bold">Milhares de aprovados</span> já usaram o SimulaMais para conquistar suas vagas!
                </p>
              </div>

              <a
                href="/#pagamento"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold text-lg py-4 rounded-xl transition-colors shadow-lg"
              >
                Eu quero
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela do Quiz
  if (currentScreen === 'quiz' && selectedTheme && question) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-50">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <button
              type="button"
              onClick={handleChooseAnotherTheme}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">{currentQuestion + 1}/{activeQuestions.length}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{formatTime(elapsedTime)}</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 pt-20 pb-10">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="text-center mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">TEMA</p>
              <p className="text-sm font-bold text-gray-900 uppercase">{selectedTheme}</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">SUBTEMA</p>
              <p className="text-sm text-gray-700">{question.subtheme}</p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 text-center">PERGUNTA</p>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="text-base text-gray-900 leading-relaxed">{question.question}</p>
              </div>
            </div>

            <div className="space-y-4">
              {question.options.map((option) => {
                const isSelected = currentAnswer?.answer === option.letter;
                const isCorrect = option.letter === question.correctAnswer;
                const showResult = currentAnswer !== undefined;

                let bgColor = '';
                let letterBorder = 'border-gray-400';
                let letterColor = 'text-gray-700';

                if (showResult) {
                  if (isCorrect) {
                    bgColor = 'bg-green-50';
                    letterBorder = 'border-green-500';
                    letterColor = 'text-green-700';
                  } else if (isSelected) {
                    bgColor = 'bg-red-50';
                    letterBorder = 'border-red-500';
                    letterColor = 'text-red-700';
                  }
                }

                return (
                  <button
                    key={option.letter}
                    type="button"
                    onClick={() => handleSelectAnswer(option.letter)}
                    disabled={currentAnswer !== undefined}
                    className={`w-full text-left py-3 transition-all duration-200 ${bgColor} ${currentAnswer ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-8 h-8 rounded-full border-2 ${letterBorder} ${letterColor} flex items-center justify-center font-semibold text-sm flex-shrink-0 bg-white`}>
                        {option.letter}
                      </span>
                      <span className="flex-1 pt-1 text-gray-800 leading-relaxed text-sm pr-2">{option.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && currentAnswer && (
            <div className={`rounded-lg p-5 shadow-sm mb-6 border-l-4 ${currentAnswer.isCorrect ? 'bg-green-50 border-green-600' : 'bg-red-50 border-red-600'}`}>
              <h3 className="font-bold text-base mb-2 ${currentAnswer.isCorrect ? 'text-green-900' : 'text-red-900'}">
                {currentAnswer.isCorrect ? '✓ Resposta correta!' : `✗ Resposta incorreta. A alternativa certa é ${question.correctAnswer}.`}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">{question.explanation}</p>
            </div>
          )}

          {currentAnswer && (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-sm"
            >
              {currentQuestion < activeQuestions.length - 1 ? 'Próxima questão' : 'Ver resultado'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}
