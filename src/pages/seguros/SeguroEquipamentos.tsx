import InsurancePage from "@/components/InsurancePage";
import { Accessibility } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";

const SeguroEquipamentos = () => {
  return (
    <InsurancePage
      title="EQUIPAMENTOS PARA MOBILIDADE E ACESSIBILIDADE "
      descriptions={[
        "Proteção para cadeira de rodas, computadores braile, próteses para membros superiores/inferiores, aparelhos auditivos entre outros equipamentos para mobilidade e acessibilidade.",
      ]}
      icon={<Accessibility size={48} />}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "Fale com nosso especialista",
          action: () => window.open('https://api.whatsapp.com/send?phone=5519999342128&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguro%20de%20EQUIPAMENTOS%20PARA%20MOBILIDADE%20E%20ACESSIBILIDADE.', '_blank')
        }
      ]}
    />
  );
};

export default SeguroEquipamentos;