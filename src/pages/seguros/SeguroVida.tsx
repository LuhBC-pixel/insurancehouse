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
      imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&h=800&fit=crop"
    />
  );
};

export default SeguroVida;