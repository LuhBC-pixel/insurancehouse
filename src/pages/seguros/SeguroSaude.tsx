import InsurancePage from "@/components/InsurancePage";
import { HeartPulse } from 'lucide-react'
import { MdOutlineWhatsapp } from "react-icons/md";

const SeguroSaude = () => {
  return (
    <InsurancePage
      title="Seguro Saúde"
      descriptions={[
        'Cuidar do bem-estar físico e mental para garantir um desempenho de qualidade na vida e nos negócios é essencial.',
        'O seguro saúde desempenha papel primordial nesse cuidado.',
        'Por isso, seja para a sua família ou para a sua empresa, temos o plano ideal para você.'
      ]}
      icon={<HeartPulse size={48} />}
      imageSrc="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "Fale conosco agora",
          action: () => window.open('https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.', '_blank')
        }
      ]}
    />
  );
};

export default SeguroSaude;