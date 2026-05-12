import { motion } from "motion/react";
import { AlertCircle, ChevronRight } from "lucide-react";

const symptoms = [
  "Dor crônica na mão ou no punho",
  "Formigamento ou dormência nos dedos",
  "Dificuldade para realizar pinça ou segurar objetos",
  "Perda de força muscular nos membros superiores",
  "Rigidez articular ao acordar ou após esforço",
  "Limitação de movimento após processo cirúrgico",
  "Sequelas de fraturas ou luxações",
  "Tendinites recorrentes ou inflamações"
];

export default function Symptoms() {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562984942003&utm_source=site&utm_medium=organic&utm_campaign=landingpage";

  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Você Está Sentindo Alguns <br className="hidden md:block" /> Desses Sintomas?
            </h2>
            <p className="text-primary-light text-lg mb-10 max-w-xl">
              Não ignore os sinais do seu corpo. Problemas nas mãos e punhos podem se tornar crônicos se não forem tratados adequadamente por especialistas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {symptoms.map((symptom, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <AlertCircle className="text-primary-light w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm md:text-base font-medium">{symptom}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <p className="text-white/80 italic mb-6">Não adie sua recuperação. Agende agora uma avaliação.</p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-light text-primary-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl flex items-center justify-center lg:inline-flex space-x-2 active:scale-95"
              >
                <span>Quero Agendar Minha Avaliação</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>

          <div className="flex-1 hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080" 
                alt="Health consultation" 
                className="rounded-[40px] shadow-2xl opacity-90 grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-primary-dark/20 rounded-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
