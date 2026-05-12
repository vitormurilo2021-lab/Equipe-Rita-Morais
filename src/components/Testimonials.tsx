import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vitória Vidal",
    text: "Quero agradecer ao Dr. Bismarques e toda a equipe pelo excelente atendimento durante o meu tratamento. Profissionais muito capacitados, atenciosos e dedicados. Sou muito grata por todo o cuidado e carinho que tiveram comigo. Recomendo de olhos fechados!",
    stars: 5
  },
  {
    name: "Ana Cavalcante Santos",
    text: "Minha experiência foi espetacular, profissionais, competentes e responsáveis",
    stars: 5
  },
  {
    name: "Sônia Maria",
    text: "Meu esposo Sávio, após sofrer uma queda, trincou o cotovelo e, após imobilização do braço, por 35 dias, foi atendido por esta excelente equipe, através de 30 sessões de fisioterapia, onde cada atendimento foi marcado por profissionalismo, dedicação e, acima de tudo, cuidado humano. Ele, já, recuperou quase 100% dos movimentos do braço e cotovelo. Nosso muito obrigado à toda equipe.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary-light font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">O Que Nossos Pacientes Dizem</h2>
          <div className="flex justify-center space-x-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-yellow-400 w-6 h-6" />) }
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-bg-light border border-gray-100 flex flex-col relative hover:shadow-xl transition-all duration-300"
            >
              <Quote className="text-primary-light/10 w-16 h-16 absolute top-6 right-8" />
              <div className="flex mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-auto flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Paciente</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
