import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562984942003&utm_source=site&utm_medium=organic&utm_campaign=landingpage";

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-dark/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary-dark rounded-[40px] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Inner Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Sua Recuperação Começa com o Primeiro Passo.
          </h2>
          <p className="text-primary-light text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Agende sua avaliação agora mesmo e receba um atendimento especializado focado em devolver seus movimentos e qualidade de vida.
          </p>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-primary-light text-primary-dark px-10 py-6 rounded-2xl font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-primary-light/20 active:scale-95"
          >
            <MessageCircle size={28} className="animate-pulse" />
            <span>Agendar pelo WhatsApp</span>
          </a>
          
          <p className="mt-10 text-white/40 text-xs uppercase tracking-widest font-bold">Resposta rápida em horário comercial</p>
        </motion.div>
      </div>
    </section>
  );
}
