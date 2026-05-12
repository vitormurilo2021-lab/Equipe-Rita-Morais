import { motion } from "motion/react";
import { Users, Award, ShieldCheck, HeartPulse } from "lucide-react";

const metrics = [
  {
    icon: Award,
    title: "+20 anos",
    description: "De experiência clínica",
  },
  {
    icon: Users,
    title: "Centenas",
    description: "De pacientes atendidos",
  },
  {
    icon: HeartPulse,
    title: "Humanizado",
    description: "Atendimento personalizado",
  },
  {
    icon: ShieldCheck,
    title: "Referência",
    description: "Consolidada em Goiânia",
  },
];

export default function Authority() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Mais de Duas Décadas Cuidando da Sua Recuperação.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            A Equipe Rita Morais atua desde 2004 oferecendo tratamentos especializados em Terapia da Mão e reabilitação funcional do membro superior. O trabalho é pautado em técnicas atualizadas e foco total na qualidade de vida.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div 
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-5 rounded-2xl bg-bg-light border border-gray-100 hover:border-primary-light/30 hover:shadow-xl hover:shadow-primary-light/5 transition-all text-center"
            >
              <div className="inline-flex items-center justify-center p-2.5 bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="text-primary-light w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-1">
                {metric.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
