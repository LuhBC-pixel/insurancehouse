
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-accent to-accent-light text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proteja o que importa com quem entende
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Soluções completas em seguros para sua tranquilidade e segurança
            </p>
            <button className="bg-secondary text-primary px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-secondary-light transition-colors">
              Faça sua cotação
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="animate-slide-in hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&h=800&fit=crop" 
              alt="Segurança e Proteção" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
