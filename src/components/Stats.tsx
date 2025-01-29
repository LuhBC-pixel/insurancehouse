import { Users, Award, Clock, PhoneCall } from 'lucide-react';

const StatCard = ({ icon: Icon, number, text }: { icon: any, number: string, text: string }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
      number: "15+",
      text: "Anos de Experiência"
    },
    {
      icon: Clock,
      number: "24/7",
      text: "Suporte Disponível"
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