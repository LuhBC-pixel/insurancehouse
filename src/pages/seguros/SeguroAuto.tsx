import InsurancePage from "@/components/InsurancePage";
import { Car } from "lucide-react";

const SeguroAuto = () => {
  return (
    <InsurancePage
      title="Seguro Automóvel"
      descriptions={[
        "Cobertura total para o seu veículo e tranquilidade para você!",
        "Coberturas e Assistências para as mais diversas situações.",
        "Seja colisão, roubo, furto, acionar a assistência 24 horas, entre outros imprevistos, garanta a proteção ideal para você.",
      ]}
      icon={<Car size={48} />}
    />
  );
};

export default SeguroAuto;