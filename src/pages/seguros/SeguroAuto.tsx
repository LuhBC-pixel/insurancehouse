import InsurancePage from "@/components/InsurancePage";
import { Car } from "lucide-react";

const SeguroAuto = () => {
  return (
    <InsurancePage
      title="Seguro Auto"
      description="Proteção completa para seu veículo com as melhores condições do mercado. Dirija com tranquilidade sabendo que você está protegido contra imprevistos."
      features={[
        "Cobertura nacional",
        "Assistência 24 horas",
        "Carro reserva",
        "Guincho sem limite de quilometragem",
        "Desconto na franquia"
      ]}
      coverageItems={[
        "Colisão, incêndio e roubo",
        "Danos a terceiros",
        "Acidentes pessoais de passageiros",
        "Vidros, faróis e retrovisores",
        "Alagamento e enchente"
      ]}
      icon={<Car size={48} />}
    />
  );
};

export default SeguroAuto;