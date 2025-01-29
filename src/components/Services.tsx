import { Shield, Car, Home, Heart } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
    <p className="text-text">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Seguro Auto",
      description: "Proteção completa para seu veículo com as melhores condições do mercado."
    },
    {
      icon: Home,
      title: "Seguro Residencial",
      description: "Segurança total para sua casa e seus bens mais preciosos."
    },
    {
      icon: Heart,
      title: "Seguro Vida",
      description: "Tranquilidade para você e sua família quando mais precisar."
    },
    {
      icon: Shield,
      title: "Seguro Empresarial",
      description: "Soluções personalizadas para proteger seu negócio e colaboradores."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-text max-w-2xl mx-auto">
            Oferecemos uma ampla gama de seguros para atender todas as suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;