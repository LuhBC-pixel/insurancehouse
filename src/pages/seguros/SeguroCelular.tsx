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
    />
  );
};

export default SeguroCelular;