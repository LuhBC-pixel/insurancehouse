import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">Seguro<span className="text-secondary">Plus</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-text hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-text hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-text hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-text hover:text-primary transition-colors">Contato</a>
          </div>
          
          <div className="hidden md:flex">
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-light transition-colors">
              Cotação Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-text hover:text-primary transition-colors">Início</a>
              <a href="#servicos" className="text-text hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="text-text hover:text-primary transition-colors">Sobre</a>
              <a href="#contato" className="text-text hover:text-primary transition-colors">Contato</a>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-light transition-colors">
                Cotação Online
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;