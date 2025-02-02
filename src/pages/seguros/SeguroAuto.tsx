import InsurancePage from "@/components/InsurancePage";
import { Car, FilePen } from "lucide-react";

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
      imageSrc="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        icon: <FilePen className="mr-2" />,
        label: "Solicite a sua cotação",
        action: function (): void {
          return window.location.assign('https://insurancehouse.aggilizador.com.br/auto')
        }
      }]}
    />
  );
};

export default SeguroAuto;