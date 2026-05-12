import { motion } from "motion/react";
import { Heart, Target, Sparkles, Home, MapIcon, TrendingUp } from "lucide-react";

const differentials = [
  { icon: Heart, title: "Atendimento Humanizado", desc: "Cada paciente é único e recebe atenção integral às suas necessidades." },
  { icon: Target, title: "Plano Individualizado", desc: "Tratamentos desenhados de acordo com sua rotina e objetivos." },
  { icon: Sparkles, title: "Técnicas Atualizadas", desc: "Uso de protocolos baseados em evidências e tecnologia de ponta." },
  { icon: Home, title: "Ambiente Estruturado", desc: "Consultório moderno localizado dentro do Hospital Clínica do Esporte." },
  { icon: MapIcon, title: "Localização Privilegiada", desc: "Fácil acesso no Setor Sul em Goiânia, com toda estrutura hospitalar." },
  { icon: TrendingUp, title: "Acompanhamento Próximo", desc: "Monitoramento constante da sua evolução em cada etapa." },
];

export default function Differentials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary-light font-bold uppercase tracking-[0.2em] text-sm mb-4">Por que nós?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por Que Escolher a Equipe Rita Morais?
          </h2>
          <div className="w-20 h-1.5 bg-primary-light rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-bg-light border border-gray-100 hover:shadow-2xl hover:shadow-primary-light/5 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-dark group-hover:text-white transition-all duration-300">
                <item.icon className="text-primary-light w-7 h-7 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
