import InsurancePage from "@/components/InsurancePage";
import { Building, Mail, PhoneCall } from "lucide-react";

const SeguroCondominio = () => {
  return (
    <InsurancePage
      title="Seguro Condomínio"
      descriptions={[
        "Proteção completa para o seu condomínio e seus moradores.",
        "Coberturas para incêndio, explosão, danos elétricos, responsabilidade civil e muito mais.",
        "Assistência 24h para emergências e manutenções."
      ]}
      icon={<Building size={48} />}
      imageSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&h=800&fit=crop"
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

export default SeguroCondominio;