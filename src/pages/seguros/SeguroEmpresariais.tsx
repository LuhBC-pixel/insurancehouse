import InsurancePage from "@/components/InsurancePage";
import { Building2, PhoneCall, MessageCircle } from "lucide-react";

const SeguroEmpresariais = () => {
  return (
    <InsurancePage
      title="Seguro Empresariais"
      descriptions={[
        "Coberturas personalizadas de acordo com as necessidades da sua empresa para que você tenha a tranquilidade que precisa para gerir o seu negócio.",
        [
          "AUTO FROTA",
          "VIDA EMPRESARIAL",
          "RESPONSABILIDADE CIVIL",
          "SEGURO GARANTIA",
          "SEGURO EMPRESARIAL",
          "RISCOS DE ENGENHARIA",
          "TRANSPORTES"
        ].join(" • "),
        "Além dos seguros desenhados sob medida para atender as suas operações."
      ]}
      icon={<Building2 size={48} />}
      imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <MessageCircle className="mr-2" />,
          label: "CONSULTE-NOS",
          action: function(): void {
            window.open('https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.', '_blank')
          }
        },
        {
          icon: <PhoneCall className="mr-2" />,
          label: "Contato por Telefone",
          action: function(): void {
            window.open('https://insurancehouse.aggilizador.com.br/business', '_blank')
          }
        }
      ]}
    />
  );
};

export default SeguroEmpresariais;