import InsurancePage from "@/components/InsurancePage";
import { Building2, MessageCircle } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";

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
      imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "CONSULTE-NOS",
          action: function(): void {
            window.open('https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguros.', '_blank')
          }
        },
        {
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