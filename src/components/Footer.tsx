import { Instagram, Facebook, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-6">
            <a href="#home" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-primary-dark">Terapia da Mão</span>
              <span className="text-xs uppercase tracking-widest font-medium text-primary-light">Equipe Rita Morais</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Especialistas em reabilitação do membro superior desde 2004 em Goiânia. Compromisso com a ciência e o humanismo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-primary-dark transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-primary-dark transition-colors text-sm">Sobre Rita Morais</a></li>
              <li><a href="#tratamentos" className="text-gray-500 hover:text-primary-dark transition-colors text-sm">Especialidades</a></li>
              <li><a href="#contato" className="text-gray-500 hover:text-primary-dark transition-colors text-sm">Localização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Informações</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-500">
                <MapPin className="text-primary-light w-4 h-4 flex-shrink-0" />
                <span>Hospital Clínica do Esporte, Goiânia - GO</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-500">
                <Phone className="text-primary-light w-4 h-4 flex-shrink-0" />
                <span>(62) 3212-3212</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-500">
                <MessageCircle className="text-primary-light w-4 h-4 flex-shrink-0" />
                <span>(62) 98494-2003</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Horário</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm text-gray-500">
                <span>Segunda - Sexta:</span>
                <span className="font-bold text-primary-dark">08h às 18h</span>
              </li>
              <li className="flex justify-between text-sm text-gray-500">
                <span>Sábado:</span>
                <span className="font-bold text-primary-dark">Sob consulta</span>
              </li>
              <li className="flex justify-between text-sm text-gray-500">
                <span>Domingo:</span>
                <span className="text-red-400">Pausado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest font-bold">
          <p>© {currentYear} Terapia da Mão - Equipe Rita Morais. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-dark">Privacidade</a>
            <a href="#" className="hover:text-primary-dark">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
