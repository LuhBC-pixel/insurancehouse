import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/61910bfa-2da7-4781-a20b-d4620f3be4ab.png" 
                alt="Insurance House Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-text hover:text-accent transition-colors">Início</Link>
            <Link to="/seguros" className="text-text hover:text-accent transition-colors">Seguros</Link>
            <a href="#sobre" className="text-text hover:text-accent transition-colors">Sobre</a>
            <a href="#contato" className="text-text hover:text-accent transition-colors">Contato</a>
          </div>
          
          <div className="hidden md:flex">
            <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-light transition-colors">
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
              <Link to="/" className="text-text hover:text-accent transition-colors">Início</Link>
              <Link to="/seguros" className="text-text hover:text-accent transition-colors">Seguros</Link>
              <a href="#sobre" className="text-text hover:text-accent transition-colors">Sobre</a>
              <a href="#contato" className="text-text hover:text-accent transition-colors">Contato</a>
              <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-light transition-colors">
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