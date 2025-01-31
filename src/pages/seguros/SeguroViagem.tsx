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
    />
  );
};

export default SeguroViagem;