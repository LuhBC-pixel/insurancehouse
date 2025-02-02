import InsurancePage from "@/components/InsurancePage";
import { Key } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";

const SeguroFianca = () => {
  return (
    <InsurancePage
      title="FIANÇA LOCATÍCIA e TÍTULO DE CAPITALIZAÇÃO"
      descriptions={[
        "Não se preocupe com fiador na hora de alugar, tenha mais praticidade e alugue muito mais rápido.",
        "O Fiança Locatícia é um seguro completo que substitui o fiador ou a caução, garante o recebimento dos aluguéis ao proprietário e ainda possibilita a contratação de uma série de coberturas adicionais para o imóvel.",
        "O título de capitalização é uma reserva financeira com valor definido entre o inquilino e o proprietário, usada como garantia no processo de locação de um imóvel.",
        "Entre em contato conosco e saiba mais."
      ]}
      icon={<Key size={48} />}
      imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "Solicite informações",
          action: () => window.open('https://api.whatsapp.com/send?phone=5519997647454&text=Ol%C3%A1%2C%20quero%20informa%C3%A7%C3%B5es%20sobre%20o%20seguro%20fian%C3%A7a%20locat%C3%ADcia%20%2F%20t%C3%ADtulo%20de%20capitaliza%C3%A7%C3%A3o.', '_blank')
        },
      ]}
    />
  );
};

export default SeguroFianca;