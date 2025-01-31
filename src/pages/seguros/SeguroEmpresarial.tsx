import InsurancePage from "@/components/InsurancePage";
import { Building2 } from "lucide-react";

const SeguroEmpresarial = () => {
  return (
    <InsurancePage
      title="Seguro Empresariais"
      descriptions={[
        "Coberturas personalizadas de acordo com as necessidades da sua empresa para que você tenha a tranquilidade que precisa para gerir o seu negócio.",
        "AUTO FROTA",
        "VIDA EMPRESARIAL",
        "RESPONSABILIDADE CIVIL",
        "SEGURO GARANTIA",
        "SEGURO EMPRESARIAL",
        "RISCOS DE ENGENHARIA",
        "TRANSPORTES",
        "Além dos seguros desenhados sob medida para atender as suas operações.",
      ]}
      icon={<Building2 size={48} />}
    />
  );
};

export default SeguroEmpresarial;