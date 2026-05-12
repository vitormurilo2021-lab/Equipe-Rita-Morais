import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Agendamento",
    desc: "Entre em contato via WhatsApp para conversarmos e marcarmos seu horário com facilidade."
  },
  {
    number: "02",
    title: "Avaliação Detalhada",
    desc: "Análise minuciosa do seu caso, histórico médico e limitações físicas atuais."
  },
  {
    number: "03",
    title: "Plano Personalizado",
    desc: "Criação do guia de tratamento específico para sua patologia e objetivos de vida."
  },
  {
    number: "04",
    title: "Sessões Terapêuticas",
    desc: "Execução das técnicas de reabilitação, exercícios e orientações especializadas."
  },
  {
    number: "05",
    title: "Reavaliação Contínua",
    desc: "Monitoramento da evolução para ajustes no plano e garantia dos melhores resultados."
  }
];

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Como Funciona o <span className="text-primary-dark">Atendimento</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Um caminho estruturado para garantir que sua recuperação seja eficiente, segura e definitiva.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-primary-dark/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-black text-primary-dark border-4 border-bg-light shadow-xl group-hover:bg-primary-dark group-hover:text-white transition-all duration-500 mb-8 relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-light scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm lg:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
