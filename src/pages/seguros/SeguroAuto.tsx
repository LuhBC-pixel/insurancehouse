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
      imageSrc="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        label: "Solicite a sua cotação",
        action: function (): void {
          window.open('https://insurancehouse.aggilizador.com.br/auto', '_blank')
        }
      },
      {
        label: "Contrate o seu seguro Auto Porto",
        action: function (): void {
          window.open('https://www.portoseguro.com.br/loja/seguro-auto?new_plan=1&social_media=OTHERS&link_uuid=6c8170a0-b04a-44a5-b309-50ec91a9eab4&utm_source=R4133J&utm_medium=geradorLinks&utm_content=INSURANCE_HOUSE_CORRETORA_DE_SEGUROS&utm_campaign=GeradordeLinks_K967YJ&cod=81e41ed77f744eb4b049dbe660a7f553#vo-lgpd-frm-step-identify', '_blank')
        }
      }
    ]}
    />
  );
};

export default SeguroAuto;