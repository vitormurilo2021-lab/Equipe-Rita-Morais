import { motion } from "motion/react";
import { Phone, MapPin, Clock, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Especialidades", href: "#tratamentos" },
    { name: "A Equipe", href: "#sobre" },
    { name: "Atendimento", href: "#processo" },
    { name: "Localização", href: "#contato" },
  ];

  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562984942003&utm_source=site&utm_medium=organic&utm_campaign=landingpage";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex flex-col">
          <span className={`text-xl md:text-2xl font-bold tracking-tight ${scrolled ? "text-primary-dark" : "text-primary-dark"}`}>
            Terapia da Mão
          </span>
          <span className={`text-xs uppercase tracking-widest font-medium ${scrolled ? "text-primary-light" : "text-primary-light"}`}>
            Equipe Rita Morais
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-700 hover:text-primary-light transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 border-b border-gray-50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-white text-center py-4 rounded-xl font-bold tracking-wide"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
