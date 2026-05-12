import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "O que é Terapia da Mão?",
    answer: "É uma especialidade da Reabilitação Física focada no tratamento de patologias do membro superior (mão, punho e cotovelo), visando recuperar a funcionalidade para atividades diárias e profissionais."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "O tempo varia de acordo com a lesão e a evolução de cada paciente. Após a avaliação inicial, traçamos uma estimativa realista do tempo necessário."
  },
  {
    question: "Vocês atendem pós-cirúrgico?",
    answer: "Sim, somos especialistas em reabilitação pós-cirúrgica, trabalhando em conjunto com cirurgiões para garantir a melhor cicatrização e retorno de movimentos."
  },
  {
    question: "É necessário encaminhamento médico?",
    answer: "Não é estritamente obrigatório, mas é altamente recomendável para que possamos alinhar a conduta terapêutica com o diagnóstico clínico médico."
  },
  {
    question: "Vocês confeccionam órteses?",
    answer: "Sim, confeccionamos órteses termoplásticas sob medida, garantindo posicionamento correto, conforto e auxílio na recuperação."
  },
  {
    question: "Atendem convênio ou particular?",
    answer: "Realizamos atendimentos particulares com emissão de nota fiscal para reembolso, além de parcerias com alguns convênios específicos. Consulte-nos pelo WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Dúvidas Frequentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-colors hover:bg-gray-50"
                >
                  <span className="text-lg font-bold text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-primary-light w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Plus className="text-primary-light w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
