import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

export default function About() {
  const curriculum = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Terapeuta Ocupacional especializada em Reabilitação da Mão."
    },
    {
      icon: Award,
      title: "Especializações",
      description: "Ampla experiência em pós-trauma, fraturas e reabilitação funcional."
    },
    {
      icon: BookOpen,
      title: "Constante Atualização",
      description: "Participação ativa em congressos e cursos de certificação nacional e internacional."
    },
    {
      icon: Users,
      title: "Associações",
      description: "Membro de associações profissionais de Terapia da Mão."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-light font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              A Equipe
            </h2>
            
            {/* Foto da equipe abaixo do título - Sem recortes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-lg mx-auto mb-12"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-[6px] md:border-[10px] border-white bg-white">
                <img 
                  src="https://i.imgur.com/4BITDH2.jpeg" 
                  alt="Equipe Terapia da Mão" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decors */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-light/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-dark/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
              <p>
                A equipe é conduzida pela <strong>Dra. Rita Moraes</strong>, Terapeuta Ocupacional, CREFITO n° 7642 T.O., com mais de 20 anos de experiência clínica e conta também com a expertise do <strong>Dr. Bismarques Santos</strong>, Fisioterapeuta, CREFITO n° 368914-F, na reabilitação dos membros superiores, unindo excelente técnica e conhecimento científico em uma abordagem humanizada e ambiente acolhedor. O serviço constituiu uma sólida reputação em Goiânia, se tornando referência no tratamento de reabilitação de casos ortopédicos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
              {curriculum.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                  <div className="bg-bg-light p-3 rounded-xl shadow-sm h-fit w-fit mb-4">
                    <item.icon className="text-primary-light w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
