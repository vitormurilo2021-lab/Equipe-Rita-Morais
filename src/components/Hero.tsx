import { motion } from "motion/react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function Hero() {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562984942003&utm_source=site&utm_medium=organic&utm_campaign=landingpage";

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-light">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light/5 rounded-l-[100px] -z-10 translate-x-10" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-dark/5 rounded-full -z-10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-light animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-primary-dark uppercase tracking-wider">Referência em Goiânia desde 2004</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
              Recupere os Movimentos das Suas Mãos com <span className="text-primary-dark">Especialistas.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tratamentos especializados para dores, fraturas, tendinites e limitações funcionais da mão e do punho no Hospital Clínica do Esporte.
            </p>

            {/* Featured Image - Now below subheadline */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-4xl mx-auto mb-16"
            >
              <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white">
                <img 
                  src="https://i.imgur.com/qMvngN2.jpeg" 
                  alt="Equipe médica Terapia da Mão" 
                  className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-50 flex items-center space-x-4"
              >
                <div className="bg-primary-dark/10 p-3 rounded-xl">
                  <span className="text-2xl md:text-3xl font-bold text-primary-dark">20+</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-tighter">Anos de</p>
                  <p className="text-sm md:text-base font-bold text-gray-800">Experiência</p>
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-light/10 blur-3xl -z-10 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
              {[
                "Atendimento individualizado",
                "Equipe especializada",
                "Mais de 20 anos de experiência",
                "Hospital Clínica do Esporte",
                "Atendemos vários convênios"
              ].map((item) => (
                <div key={item} className="flex items-center justify-center space-x-2 text-gray-700 font-medium bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-gray-100">
                  <CheckCircle2 className="text-primary-light w-4 h-4 flex-shrink-0" />
                  <span className="text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-light transition-all shadow-xl hover:shadow-primary-light/20 flex items-center justify-center space-x-2"
              >
                <span>Agendar Avaliação</span>
                <ChevronRight size={20} />
              </a>
              <a 
                href="#tratamentos"
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg text-primary-dark border-2 border-primary-dark/10 hover:bg-white transition-all inline-flex items-center justify-center"
              >
                Ver Especialidades
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
