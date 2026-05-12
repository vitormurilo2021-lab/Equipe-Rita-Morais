import { motion } from "motion/react";
import { 
  Activity, 
  Stethoscope, 
  Hand, 
  Settings, 
  Zap, 
  Hammer, 
  Dna, 
  Accessibility, 
  Bandage, 
  Spline 
} from "lucide-react";

const treatments = [
  { icon: Spline, title: "Fratura de Punho", desc: "Reabilitação especializada pós-fratura." },
  { icon: Hand, title: "Reabilitação da Mão", desc: "Tratamento completo para lesões na mão." },
  { icon: Activity, title: "Reabilitação do Braço", desc: "Recuperação funcional do membro superior." },
  { icon: Bandage, title: "Pós-trauma de Punho", desc: "Tratamento de sequelas e limitações." },
  { icon: Zap, title: "Tendinite na Mão", desc: "Alívio da dor e controle da inflamação." },
  { icon: Accessibility, title: "Terapia Ocupacional", desc: "Foco na autonomia e atividades diárias." },
  { icon: Stethoscope, title: "Fisioterapia da Mão", desc: "Técnicas manuais e exercícios de ponta." },
  { icon: Settings, title: "Recuperação Funcional", desc: "Retorno seguro ao trabalho e lazer." },
  { icon: Dna, title: "LER / DORT", desc: "Prevenção e tratamento de esforços repetitivos." },
  { icon: Hammer, title: "Órteses Personalizadas", desc: "Confecção de dispositivos sob medida." },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-light font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Nossas Especialidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Especialidades em Terapia da Mão
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {treatments.map((t, i) => (
            <motion.div 
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 rounded-3xl bg-bg-light hover:bg-primary-dark transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 hover:shadow-2xl hover:shadow-primary-dark/20"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary-light/20 transition-all duration-500">
                <t.icon className="text-primary-dark group-hover:text-white w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
