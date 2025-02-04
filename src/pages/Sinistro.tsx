import { Shield, Phone } from "lucide-react";
import InsurancePage from "@/components/InsurancePage";

const Sinistro = () => {
  return (
    <InsurancePage
      title="Sinistro"
      descriptions={[
        "Em momentos difíceis, estamos aqui para ajudar. Nossa equipe especializada em sinistros está pronta para guiá-lo através de todo o processo de forma rápida e eficiente.",
        "Oferecemos um processo simplificado de comunicação de sinistro, com atendimento 24 horas por dia, 7 dias por semana, garantindo que você receba o suporte necessário quando mais precisar.",
        "Entre em contato conosco imediatamente após a ocorrência do sinistro para iniciarmos o processo de atendimento e resolução do seu caso."
      ]}
      icon={<Shield />}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      buttons={[
        {
          icon: <Phone className="mr-2" />,
          label: "Comunicar Sinistro",
          action: () => window.open('tel:+551938733736')
        }
      ]}
    />
  );
};

export default Sinistro;