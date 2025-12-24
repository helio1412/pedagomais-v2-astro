import { useState } from 'react';

const faqs = [
  {
    question: 'Como funciona o acesso?',
    answer: 'Após a confirmação do pagamento, você receberá imediatamente um e-mail com seus dados de acesso. Você pode acessar a plataforma pelo celular, tablet ou computador.',
  },
  {
    question: 'Quantas questões estão disponíveis?',
    answer: 'A plataforma conta com mais de 800 questões de Pedagogia, distribuídas em 8 temas completos, todas com respostas explicadas. Cada simulado iniciado contém 20 questões aleatórias para você praticar.',
  },
  {
    question: 'Posso usar no celular?',
    answer: 'Sim! A plataforma é totalmente responsiva e funciona perfeitamente em qualquer dispositivo: celular, tablet ou computador.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para testar a plataforma. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.',
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim! Utilizamos a plataforma Yampi, que é certificada e garante total segurança nas transações. Aceitamos cartão de crédito, PIX e boleto.',
  },
  {
    question: 'Recebo certificado?',
    answer: 'Sim! Você receberá um certificado digital de conclusão que comprova suas horas de estudo. É um diferencial importante para seu currículo e pode ser usado em processos seletivos e concursos públicos.',
  },
  {
    question: 'Pago somente uma vez?',
    answer: 'Sim! Você paga apenas uma vez e tem acesso VITALÍCIO à plataforma. Sem mensalidades, sem taxas escondidas. Um único pagamento e você pode usar para sempre, incluindo todas as atualizações futuras.',
  },
  {
    question: 'Posso parcelar o pagamento?',
    answer: 'Sim! Você pode parcelar no cartão de crédito em até 12x através da Yampi.',
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-neutral-beige">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/85">
            Tire suas dúvidas sobre o PedagoMais
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-beige/30 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-bold text-neutral-dark text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-dark/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
