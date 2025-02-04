import { HelpCircle, Phone } from "lucide-react";
import InsurancePage from "@/components/InsurancePage";

const Assistencia24h = () => {
  return (
    <InsurancePage
      title="Assistência 24H"
      descriptions={[
        "Nossa assistência 24 horas está sempre disponível para atender você em qualquer situação de emergência, oferecendo suporte completo e imediato.",
        "Contamos com uma ampla rede de prestadores qualificados em todo o território nacional, garantindo atendimento rápido e eficiente onde quer que você esteja.",
        "Serviços incluem: socorro mecânico, guincho, chaveiro, troca de pneus, taxi, hospedagem e muito mais."
      ]}
      icon={<HelpCircle />}
      imageSrc="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      buttons={[
        {
          icon: <Phone className="mr-2" />,
          label: "Solicitar Assistência",
          action: () => window.open('tel:+551938733736')
        }
      ]}
    />
  );
};

export default Assistencia24h;