
import { MdOutlineWhatsapp } from 'react-icons/md';

interface ContactButtonProps {
  isMobile?: boolean;
  onClick?: () => void;
}

const ContactButton = ({ isMobile = false, onClick }: ContactButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    window.open("https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.", "_blank");
  };

  return (
    <button 
      className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
      onClick={handleClick}
    >
      <MdOutlineWhatsapp className="text-white text-[24px]" />
      Fale Conosco
    </button>
  );
};

export default ContactButton;
