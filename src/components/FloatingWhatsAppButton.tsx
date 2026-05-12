import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562984942003&utm_source=site&utm_medium=organic&utm_campaign=landingpage";

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Agendar pelo WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap mb-2 border border-gray-100 pointer-events-none">
        Agende sua avaliação!
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45" />
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
}
