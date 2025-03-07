
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactButton from './ContactButton';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  segurosLinks: Array<{ title: string, href: string }>;
  handleAnchorClick: () => void;
  handleSectionClick: (section: string) => void;
}

const MobileMenu = ({ 
  isOpen, 
  setIsOpen, 
  segurosLinks, 
  handleAnchorClick, 
  handleSectionClick 
}: MobileMenuProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-text">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-28 bottom-0 bg-white overflow-y-auto">
          <div className="container mx-auto px-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-text hover:text-accent transition-colors"
                onClick={handleAnchorClick}
              >
                Início
              </Link>
              
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
              <button 
                onClick={() => handleSectionClick('sobre')} 
                className="text-text hover:text-accent transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleSectionClick('contato')} 
                className="text-text hover:text-accent transition-colors text-left"
              >
                Contato
              </button>
              <ContactButton isMobile onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
