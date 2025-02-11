
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const segurosLinks = [
    { title: "Seguro Auto", href: "/seguros/auto" },
    { title: "Seguro Residencial", href: "/seguros/residencial" },
    { title: "Seguro de Vida", href: "/seguros/vida" },
    { title: "Seguro Viagem", href: "/seguros/viagem" },
    { title: "Seguro Celular", href: "/seguros/celular" },
    { title: "Seguro Fiança", href: "/seguros/fianca" },
    { title: "Seguro Cartão", href: "/seguros/cartao" },
    { title: "Seguro Empréstimo", href: "/seguros/emprestimo" },
    { title: "Seguro Empresariais", href: "/seguros/empresariais" },
    { title: "Seguro Saúde", href: "/seguros/saude" },
    { title: "Seguro Equipamentos para mobilidade", href: "/seguros/equipamentos" },
    { title: "Seguro Agronegócios", href: "/seguros/agronegocios" },
    { title: "Seguro Produtos Diversos", href: "/seguros/produtos-diversos" }
  ];

  const handleAnchorClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/61910bfa-2da7-4781-a20b-d4620f3be4ab.png" 
                alt="Insurance House Logo" 
                className="h-28 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-text hover:text-accent transition-colors">Início</Link>
            
            {/* Seguros Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-text hover:text-accent transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Seguros
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 ${
                  isDropdownOpen ? 'block' : 'hidden'
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {segurosLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-sm text-text hover:bg-background hover:text-accent transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/sinistro" className="text-text hover:text-accent transition-colors">Sinistro</Link>
            <Link to="/assistencia-24h" className="text-text hover:text-accent transition-colors">Assistência 24h</Link>
            <a href="#sobre" className="text-text hover:text-accent transition-colors">Sobre</a>
            <a href="#contato" className="text-text hover:text-accent transition-colors">Contato</a>
          </div>
          
          <div className="hidden md:flex">
            <button 
              className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
              onClick={() => window.open("https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.", "_blank")}
            >
              <MdOutlineWhatsapp size={24} className="text-white" />
              Fale Conosco
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
          <div className="md:hidden pb-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-text hover:text-accent transition-colors" onClick={handleAnchorClick}>Início</Link>
              
              {/* Mobile Seguros Links */}
              <div className="flex flex-col space-y-2 pl-4">
                {segurosLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-text hover:text-accent transition-colors text-sm"
                    onClick={handleAnchorClick}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <Link to="/sinistro" className="text-text hover:text-accent transition-colors" onClick={handleAnchorClick}>Sinistro</Link>
              <Link to="/assistencia-24h" className="text-text hover:text-accent transition-colors" onClick={handleAnchorClick}>Assistência 24h</Link>
              <a href="#sobre" className="text-text hover:text-accent transition-colors" onClick={handleAnchorClick}>Sobre</a>
              <a href="#contato" className="text-text hover:text-accent transition-colors" onClick={handleAnchorClick}>Contato</a>
              <button 
                className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
                onClick={() => {
                  setIsOpen(false);
                  window.open("https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.", "_blank");
                }}
              >
                <MdOutlineWhatsapp size={24} className="text-white" />
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
