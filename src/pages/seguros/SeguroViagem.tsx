import InsurancePage from "@/components/InsurancePage";
import { Plane } from "lucide-react";

const SeguroViagem = () => {
  return (
    <InsurancePage
      title="Seguro Viagem"
      descriptions={[
        "Conte com proteções para sua viagem nacional ou internacional e se preocupe apenas em curtir o passeio.",
      ]}
      icon={<Plane size={48} />}
      imageSrc="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        label: 'Simule e contrate agora',
        action: function(): void {
          window.open('https://www.portoseguro.com.br/seguro-de-vida', '_blank')
        }
      }]}
    />
  );
};

export default SeguroViagem;