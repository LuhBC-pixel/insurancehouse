import InsurancePage from "@/components/InsurancePage";
import { Heart } from "lucide-react";

const SeguroVida = () => {
  return (
    <InsurancePage
      title="Seguro de Vida"
      descriptions={[
        "O seguro de vida vai muito além da cobertura de Morte, é um seguro para que você tenha proteção e auxílio em vida.",
        "Além de deixar seus entes queridos protegidos, caso você venha a faltar.",
        "Ajuda aliviar a pressão financeira e pode manter o estilo de vida da família."
      ]}
      icon={<Heart size={48} />}
      imageSrc="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        label: "Solicite a sua cotação",
        action: function (): void {
          window.open('https://insurancehouse.aggilizador.com.br/', '_blank')
        }
      },
      {
        label: "Contrate o seu seguro Vida Porto",
        action: function (): void {
          window.open('https://www.portoseguro.com.br/seguro-de-vida/corretor', '_blank')
        }
      }
    ]}
    />
  );
};

export default SeguroVida;