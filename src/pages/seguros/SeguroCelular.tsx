import InsurancePage from "@/components/InsurancePage";
import { Smartphone } from "lucide-react";

const SeguroCelular = () => {
  return (
    <InsurancePage
      title="Seguro Celular"
      descriptions={[
        "Com o Porto Seguro para seu celular, você garante coberturas para quebra acidental, roubo e até mesmo furto."
      ]}
      icon={<Smartphone size={48} />}
      imageSrc="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&h=800&fit=crop"
    />
  );
};

export default SeguroCelular;