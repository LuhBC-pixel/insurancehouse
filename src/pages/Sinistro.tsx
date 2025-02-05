import { Shield, Phone } from "lucide-react";
import InsurancePage from "@/components/InsurancePage";

const Sinistro = () => {
  return (
    <InsurancePage
      title="Sinistros"
      descriptions={[
        "Estes são os documentos iniciais para comunicar um sinistro, documentos complementares poderão ser solicitados no decorrer da análise.",
      ]}
      icon={<Shield />}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      buttons={[
        {
          label: "Registrar B.O online",
          action: () => window.open('https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia', '_blank'),
        },
        {
          label: "Consulta FIPE",
          action: () => window.open('https://veiculos.fipe.org.br/#carro', '_blank'),
        }
      ]}
    />
  );
};

export default Sinistro;