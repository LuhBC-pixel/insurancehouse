import { useState } from 'react';
import { Car, Home, Heart, Plane, Smartphone, Building, Key, Building2, CreditCard, Leaf, Accessibility, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, href }: { icon: any, title: string, description: string, href: string }) => (
  <Link to={href} className="block transform transition-all duration-300 hover:scale-105 h-full">
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon className="text-primary" size={32} />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-primary text-center">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-center flex-grow">{description}</p>
    </div>
  </Link>
);

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: Car,
      title: "Seguro Auto",
      description: "Proteção completa para seu veículo com as melhores condições do mercado.",
      href: "/seguros/auto"
    },
    {
      icon: Home,
      title: "Seguro Residencial",
      description: "Segurança total para sua casa e seus bens mais preciosos.",
      href: "/seguros/residencial"
    },
    {
      icon: Heart,
      title: "Seguro de Vida",
      description: "Tranquilidade para você e sua família quando mais precisar.",
      href: "/seguros/vida"
    },
    {
      icon: Plane,
      title: "Seguro Viagem",
      description: "Conte com proteções para sua viagem nacional ou internacional",
      href: "/seguros/viagem"
    },
    {
      icon: Smartphone,
      title: "Seguro Celular",
      description: "Proteção total para contra roubos, furtos e quebra acidental",
      href: "/seguros/celular"
    },
    {
      icon: Key,
      title: "Seguro Fiança e Capitalização",
      description: "Garanta a tranquilidade na locação do seu imóvel.",
      href: "/seguros/fianca"
    },
    {
      icon: CreditCard,
      title: "Cartão de crédito",
      description: "Cartão de crédito com diversos benefícios.",
      href: "/seguros/cartao"
    },
    {
      icon: Building,
      title: "Emprestimo e Financiamento",
      description: "Financiamentos e empréstimos com garantia de veículo ou imóvel",
      href: "/seguros/emprestimo"
    },
    {
      icon: Building2,
      title: "Seguro Empresariais",
      description: "Soluções personalizadas para proteger seu negócio e colaboradores.",
      href: "/seguros/empresariais"
    },
    {
      icon: Heart,
      title: "Seguro Saúde",
      description: "Proteção para sua saúde e de sua família",
      href: "/seguros/saude"
    },
    {
      icon: Accessibility,
      title: "Seguro Equipamentos para mobilidade",
      description: "Proteção para seus equipamentos portáteis e eletrônicos.",
      href: "/seguros/equipamentos"
    },
    {
      icon: Leaf,
      title: "Seguro Agronegócios",
      description: "Proteção para seu agronegócio",
      href: "/seguros/agronegocios"
    },
    {
      icon: Bike,
      title: "Seguro Produtos Diversos",
      description: "Consórcio, Equipamentos Portáteis, Previdência Privada, Seguro Bike",
      href: "/seguros/produtos-diversos"
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nossos Seguros</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de seguros para atender todas as suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visibleServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        {services.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAll ? 'Ver menos seguros' : 'Ver mais seguros'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;