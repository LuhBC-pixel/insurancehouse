import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, info }: { icon: any, title: string, info: string }) => (
  <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
      <Icon className="text-primary" size={24} />
    </div>
    <div>
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="text-text">{info}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Entre em Contato</h2>
          <p className="text-text max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco pelos canais abaixo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactCard
            icon={Phone}
            title="Telefone"
            info="(19) 3873-3736"
          />
          <ContactCard
            icon={Mail}
            title="E-mail"
            info="contato@ihseguros.com.br"
          />
          <ContactCard
            icon={MapPin}
            title="Endereço"
            info="Rua Dom Barreto, 901, Centro
Sumaré - SP 13170-004, BR"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;