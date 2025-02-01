import InsurancePage from "@/components/InsurancePage";
import { Building2, Mail, PhoneCall } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SeguroEmpresariais = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    toast({
      title: "Contato por Email",
      description: "Em breve entraremos em contato por email!",
    });
  };

  const handlePhoneClick = () => {
    toast({
      title: "Contato por Telefone",
      description: "Em breve entraremos em contato por telefone!",
    });
  };

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
          icon: <Mail className="mr-2" />,
          label: "Contato por Email",
          action: handleEmailClick
        },
        {
          icon: <PhoneCall className="mr-2" />,
          label: "Contato por Telefone",
          action: handlePhoneClick
        }
      ]}
    />
  );
};

export default SeguroEmpresariais;