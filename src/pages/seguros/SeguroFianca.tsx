import InsurancePage from "@/components/InsurancePage";
import { Key, Mail, PhoneCall } from "lucide-react";

const SeguroFianca = () => {
  return (
    <InsurancePage
      title="Seguro Fiança"
      descriptions={[
        "Garanta a tranquilidade na locação do seu imóvel com o Seguro Fiança.",
        "Uma alternativa moderna e segura ao fiador tradicional, que oferece proteção tanto para proprietários quanto para inquilinos.",
        "Cobertura para aluguel e encargos, com processo ágil e sem burocracia."
      ]}
      icon={<Key size={48} />}
      imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <Mail className="mr-2" />,
          label: "Solicitar Cotação",
          action: () => window.open('https://insurancehouse.aggilizador.com.br/', '_blank')
        },
        {
          icon: <PhoneCall className="mr-2" />,
          label: "Falar com Corretor",
          action: () => window.open('https://api.whatsapp.com/send?phone=551938733736', '_blank')
        }
      ]}
    />
  );
};

export default SeguroFianca;