import InsurancePage from "@/components/InsurancePage";
import { Building2 } from "lucide-react";

const SeguroEmpresarial = () => {
  return (
    <InsurancePage
      title="Seguro Empresarial"
      description="Proteja seu negócio com uma cobertura completa. Nosso seguro empresarial oferece proteção abrangente para sua empresa, funcionários e patrimônio."
      features={[
        "Cobertura personalizada",
        "Assistência 24 horas",
        "Proteção patrimonial",
        "Cobertura para funcionários",
        "Responsabilidade civil"
      ]}
      coverageItems={[
        "Incêndio, raio e explosão",
        "Danos elétricos",
        "Roubo e furto qualificado",
        "Vendaval e granizo",
        "Responsabilidade civil operações"
      ]}
      icon={<Building2 size={48} />}
    />
  );
};

export default SeguroEmpresarial;