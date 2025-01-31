import InsurancePage from "@/components/InsurancePage";
import { Car } from "lucide-react";

const SeguroAuto = () => {
  return (
    <InsurancePage
      title="Seguro Automóvel"
      description="Cobertura total para o seu veículo e tranquilidade para você!
      Coberturas e Assistências para as mais diversas situações.
      Seja colisão, roubo, furto, acionar a assistência 24 horas, entre outros imprevistos, garanta a proteção ideal para você."
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