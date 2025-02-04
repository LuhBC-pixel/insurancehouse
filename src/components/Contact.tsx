import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, info }: { icon: any, title: string, info: string | React.ReactNode }) => (
  <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
      <Icon className="text-primary" size={24} />
    </div>
    <div>
      <h3 className="font-semibold text-primary">{title}</h3>
      {typeof info === 'string' ? (
        <p className="text-text">{info}</p>
      ) : (
        info
      )}
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
            info={
              <div className="flex flex-col">
                <span>Rua Dom Barreto, 901</span>
                <span>Centro</span>
                <span>Sumaré - SP</span>
                <span>13170-004</span>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;