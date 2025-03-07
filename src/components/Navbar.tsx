
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './navbar/Logo';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import ContactButton from './navbar/ContactButton';
import { segurosLinks } from './navbar/navbarData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Add effect to control body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleAnchorClick = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (section: string) => {
    setIsOpen(false);
    navigate('/', { state: { scrollTo: section } });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const heroSection = document.getElementById('inicio');
      if (heroSection) {
        const navbarHeight = 112; // altura do navbar (28 * 4 = 112px)
        const elementPosition = heroSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          <Logo />
          
          <DesktopMenu 
            segurosLinks={segurosLinks}
            handleSectionClick={handleSectionClick}
            handleHomeClick={handleHomeClick}
          />
          
          <div className="hidden md:flex">
            <ContactButton />
          </div>

          <MobileMenu 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            segurosLinks={segurosLinks}
            handleAnchorClick={handleAnchorClick}
            handleSectionClick={handleSectionClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
