import InsurancePage from "@/components/InsurancePage";
import { Laptop, Mail, PhoneCall } from "lucide-react";

const SeguroEquipamentos = () => {
  return (
    <InsurancePage
      title="Seguro Equipamentos"
      descriptions={[
        "Proteção para seus equipamentos portáteis, móveis e estacionários.",
        "Cobertura contra roubo, furto qualificado, danos elétricos e muito mais.",
        "Ideal para notebooks, tablets, smartphones, equipamentos fotográficos e outros dispositivos eletrônicos."
      ]}
      icon={<Laptop size={48} />}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <Mail className="mr-2" />,
          label: "Solicitar Cotação",
          action: () => window.open('https://insurancehouse.aggilizador.com.br/', '_blank')
        },
        {
          icon: <PhoneCall className="mr-2" />,
          label: "Falar com Corretor",
          action: () => window.open('https://api.whatsapp.com/send?phone=551938733736', '_blank')
        }
      ]}
    />
  );
};

export default SeguroEquipamentos;