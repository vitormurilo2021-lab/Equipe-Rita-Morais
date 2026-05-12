import { motion } from "motion/react";
import { MapPin, Phone, Instagram, ExternalLink, Mail } from "lucide-react";

export default function Location() {
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Hospital+Clínica+do+Esporte+Goiânia";

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <span className="text-primary-light font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Onde Estamos</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Atendimento em <br />Goiânia – GO</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-dark/5 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="text-primary-dark w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Localização</h4>
                  <p className="text-gray-600">Hospital Clínica do Esporte</p>
                  <p className="text-gray-500 text-sm">Setor Sul, Goiânia - GO</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-dark/5 p-3 rounded-xl flex-shrink-0">
                  <Phone className="text-primary-dark w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Contato</h4>
                  <p className="text-gray-600">(62) 3212-3212</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-dark/5 p-3 rounded-xl flex-shrink-0">
                  <Mail className="text-primary-dark w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@ritamorais.com.br</p>
                </div>
              </div>
            </div>

            <a 
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-primary-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg active:scale-95"
            >
              <span>Abrir no Google Maps</span>
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="flex-[1.5] h-[450px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
            {/* Using a placeholder for map, ideally it would be an iframe from Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.579483329241!2d-49.2554!3d-16.6869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3d3957f975d%3A0xc3f6e1f067d022b3!2sHospital%20Cl%C3%ADnica%20do%20Esporte!5e0!3m2!1spt-BR!2sbr!4v1715478400000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
