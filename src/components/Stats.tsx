import { Users, Award, Clock, PhoneCall, Handshake } from 'lucide-react';

const StatCard = ({ icon: Icon, number, text }: { icon: any, number: string, text: string }) => (
  <div className="text-center animate-fade-in animate-slide-in">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform duration-300">
      <Icon className="text-primary" size={32} />
    </div>
    <h3 className="text-3xl font-bold text-primary mb-2">{number}</h3>
    <p className="text-text">{text}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10k+",
      text: "Clientes Satisfeitos"
    },
    {
      icon: Award,
      number: "30+",
      text: "Anos de Experiência"
    },
    {
      icon: Handshake,
      number: "20+",
      text: "Parcerias com as seguradoras"
    },
    {
      icon: PhoneCall,
      number: "98%",
      text: "Taxa de Resolução"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-3 animate-fade-in">Nossa Experiência em Números</h2>
        <p className="text-center text-gray-600 mb-12 text-lg animate-fade-in">Conheça nosso histórico de excelência e compromisso</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;