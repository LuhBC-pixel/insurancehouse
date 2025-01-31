import InsurancePage from "@/components/InsurancePage";
import { Home } from "lucide-react";

const SeguroResidencial = () => {
  return (
    <InsurancePage
      title="Seguro Residencial"
      description="Proteja seu lar e seus bens mais preciosos com nosso seguro residencial completo. Tenha tranquilidade sabendo que sua casa está protegida contra diversos tipos de imprevistos."
      features={[
        "Cobertura para estrutura e conteúdo",
        "Assistência 24 horas",
        "Serviços emergenciais",
        "Proteção contra danos elétricos",
        "Cobertura para roubo e furto"
      ]}
      coverageItems={[
        "Incêndio, raio e explosão",
        "Vendaval e granizo",
        "Danos elétricos",
        "Roubo e furto qualificado",
        "Responsabilidade civil familiar"
      ]}
      icon={<Home size={48} />}
    />
  );
};

export default SeguroResidencial;