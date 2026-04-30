import { useState, useEffect } from 'react';

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);
      
      const difference = midnight.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="cta-final" className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-cyan/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-6">
            <p className="text-lg font-semibold">Oferta Especial por Tempo Limitado</p>
          </div>

          <div id="pagamento" className="p-8 md:p-12">
            {/* Timer de Urgência */}
            <div className="relative bg-gradient-to-r from-orange-100/40 to-red-100/40 backdrop-blur-md border border-white/30 rounded-xl p-4 mb-6 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm md:text-base font-bold text-orange-900">
                    Promoção válida apenas hoje - {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </p>
                </div>
                <div className="flex justify-center gap-3 mb-2">
                  <div className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-white/50">
                      <span className="text-2xl font-bold text-orange-600">{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <span className="text-xs text-orange-800 font-medium mt-1 block">horas</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-white/50">
                      <span className="text-2xl font-bold text-orange-600">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <span className="text-xs text-orange-800 font-medium mt-1 block">min</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-white/50">
                      <span className="text-2xl font-bold text-orange-600">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                    <span className="text-xs text-orange-800 font-medium mt-1 block">seg</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-center text-orange-700 font-medium">
                  Após esse horário, o preço volta para R$ 97,00
                </p>
              </div>
            </div>

            {/* Lista de Benefícios */}
            <div className="mb-8 space-y-3">
              {[
                { text: '<strong>Simulado inteligente</strong> com mais de 800 questões' },
                { text: 'Questões cuidadosamente selecionadas com <strong>respostas explicadas</strong>' },
                { text: 'Área de estudos com <strong>Mapas mentais exclusivos</strong> que facilitam a memorização' },
                { text: '<strong>Aplicativo Instalável</strong> - Estude onde e quando quiser!' },
                { text: '<strong>Certificado</strong> - Receba seu certificado digital de conclusão' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-neutral-dark text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <p className="text-neutral-dark/60 text-lg mb-2">De:</p>
              <p className="text-2xl text-neutral-dark/50 line-through mb-4">
                R$ 97,00
              </p>
              <p className="text-neutral-dark/60 text-lg mb-2">Por apenas:</p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
                R$ 47,00
              </p>
              <p className="text-lg text-secondary font-semibold">
                Pagamento único - Acesso vitalício
              </p>
            </div>

            <div className="mb-8">
              <a
                href="https://seguro.pedagomais.net.br/r/HDX7T5XKCH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-base md:text-xl py-4 md:py-6 mb-4 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Garantir Acesso Agora
              </a>
              <p className="text-center text-sm text-neutral-dark/60">
                🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
