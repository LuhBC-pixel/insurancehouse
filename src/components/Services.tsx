import { Car, Home, Heart, Plane, Smartphone, Building, Key, Laptop, Building2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, href }: { icon: any, title: string, description: string, href: string }) => (
  <Link to={href} className="block">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  </Link>
);

const Services = () => {
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
      icon: Building2,
      title: "Seguro Empresariais",
      description: "Soluções personalizadas para proteger seu negócio e colaboradores.",
      href: "/seguros/empresariais"
    },
    {
      icon: Key,
      title: "Seguro Fiança",
      description: "Garanta a tranquilidade na locação do seu imóvel.",
      href: "/seguros/fianca"
    },
    {
      icon: CreditCard,
      title: "Seguro Cartão",
      description: "Proteção para seu cartão de crédito com diversos benefícios.",
      href: "/seguros/cartao"
    },
    {
      icon: Laptop,
      title: "Seguro Equipamentos",
      description: "Proteção para seus equipamentos portáteis e eletrônicos.",
      href: "/seguros/equipamentos"
    },
    {
      icon: Building,
      title: "Seguro Emprestimo",
      description: "Proteção para seus emprestimos e financiamentos",
      href: "/seguros/emprestimo"
    },
    {
      icon: Heart,
      title: "Seguro Saúde",
      description: "Proteção para sua saúde e de sua família",
      href: "/seguros/saude"
    },
    {
      icon: Building2,
      title: "Seguro Empresariais",
      description: "Proteção para sua empresa",
      href: "/seguros/equipamentos"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Seguros</h2>
          <p className="text-text max-w-2xl mx-auto">
            Oferecemos uma ampla gama de seguros para atender todas as suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;