import InsurancePage from "@/components/InsurancePage";
import { Plane } from "lucide-react";

const SeguroViagem = () => {
  return (
    <InsurancePage
      title="Seguro Viagem"
      description="Viaje com tranquilidade sabendo que está protegido em qualquer lugar do mundo. Nosso seguro viagem oferece coberturas essenciais para suas viagens nacionais e internacionais."
      features={[
        "Cobertura internacional",
        "Atendimento 24 horas em português",
        "Telemedicina",
        "Localização de bagagem",
        "Cancelamento de viagem"
      ]}
      coverageItems={[
        "Despesas médicas e hospitalares",
        "Despesas odontológicas",
        "Traslado médico",
        "Perda ou extravio de bagagem",
        "Cancelamento ou interrupção de viagem"
      ]}
      icon={<Plane size={48} />}
    />
  );
};

export default SeguroViagem;