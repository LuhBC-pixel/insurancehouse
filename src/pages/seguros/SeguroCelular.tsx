import InsurancePage from "@/components/InsurancePage";
import { Smartphone } from "lucide-react";

const SeguroCelular = () => {
  return (
    <InsurancePage
      title="Seguro Celular"
      descriptions={[
        "Com o Porto Seguro para seu celular, você garante coberturas para quebra acidental, roubo e até mesmo furto."
      ]}
      icon={<Smartphone size={48} />}
      imageSrc="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        label: 'Simule e contrate',
        action: function(): void {
          window.open('https://www.portoseguro.com.br/loja/seguro-celular?utm_source=R4133J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_R4133J&utm_content=RAMOS_ELEMENTARES_INSURANCE_HOUSE_CORRETORA_DE_SEGUROS&susep=R4133J&origem=Externorn&link_uuid=14111499-e0df-40c2-a76c-fa607f380f40', '_blank')
        }
      }]}
    />
  );
};

export default SeguroCelular;