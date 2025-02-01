import InsurancePage from "@/components/InsurancePage";
import { Plane } from "lucide-react";

const SeguroViagem = () => {
  return (
    <InsurancePage
      title="Seguro Viagem"
      descriptions={[
        "Conte com proteções para sua viagem nacional ou internacional e se preocupe apenas em curtir o passeio.",
      ]}
      icon={<Plane size={48} />}
      imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&h=800&fit=crop"
    />
  );
};

export default SeguroViagem;