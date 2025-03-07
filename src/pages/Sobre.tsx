
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Award, Shield, Users, Target, Clock } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Sobre = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Nosso compromisso é garantir proteção e tranquilidade para você e sua família através de soluções personalizadas."
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Construímos relacionamentos duradouros com nossos clientes, baseados em confiança e atendimento personalizado."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente a excelência em nossos serviços, investindo em treinamento e melhores práticas."
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Oferecemos soluções ágeis e eficientes, respeitando o tempo de nossos clientes em todos os momentos."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Sobre a Insurance House</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Há mais de 30 anos oferecendo as melhores soluções em seguros para nossos clientes.
            </p>
            
            <div className="bg-accent/10 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                Fundada em 1992, a Insurance House nasceu com o propósito de oferecer serviços de alta qualidade no mercado de seguros. 
                Começamos como uma pequena corretora familiar e hoje somos referência no setor, atendendo milhares de clientes em todo o Brasil.
              </p>
              <p className="text-gray-700">
                Nosso crescimento se deve ao compromisso inabalável com a satisfação do cliente e à dedicação em oferecer as melhores 
                opções de proteção para famílias e empresas.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <AboutCard key={index} {...value} />
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h2>
              <p className="text-gray-700 mb-6">
                Proporcionar tranquilidade e segurança aos nossos clientes através de um atendimento humanizado e soluções 
                personalizadas em seguros, construindo relacionamentos duradouros baseados em confiança e excelência.
              </p>
              
              <h2 className="text-2xl font-bold text-primary mb-4">Nossa Visão</h2>
              <p className="text-gray-700">
                Ser reconhecida como a corretora de seguros mais confiável e inovadora do Brasil, expandindo nosso alcance 
                e mantendo o compromisso com a qualidade e a satisfação do cliente em cada interação.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
