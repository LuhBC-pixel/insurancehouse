
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface DesktopMenuProps {
  segurosLinks: Array<{ title: string, href: string }>;
  handleSectionClick: (section: string) => void;
  handleHomeClick: (e: React.MouseEvent) => void;
}

const DesktopMenu = ({ segurosLinks, handleSectionClick, handleHomeClick }: DesktopMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex space-x-8">
      <Link 
        to="/" 
        className="text-text hover:text-accent transition-colors"
        onClick={handleHomeClick}
      >
        Início
      </Link>
      
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
      <button 
        onClick={() => handleSectionClick('sobre')} 
        className="text-text hover:text-accent transition-colors"
      >
        Sobre
      </button>
      <button 
        onClick={() => handleSectionClick('contato')} 
        className="text-text hover:text-accent transition-colors"
      >
        Contato
      </button>
    </div>
  );
};

export default DesktopMenu;
