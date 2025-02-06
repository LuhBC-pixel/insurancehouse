import { HelpCircle } from "lucide-react";
import InsurancePage from "@/components/InsurancePage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdOutlineWhatsapp } from "react-icons/md";

const insuranceCompanies = [
  {
    name: "Aliro Seguros",
    description: "Assistência 24h 0800 770 1318 Todas as regiões",
  },
  {
    name: "ALLIANZ SEGUROS",
    description: "WhatsApp 11 4090 1444 e 11 4090 1110 AUTOMÓVEL 0800 0130 700 RESIDÊNCIA E EMPRESA 0800 0177 178",
  },
  {
    name: "SulAmérica",
    description: "0800 017 0147 (Todo o Brasil) - Assistência 24 horas para veículos, residencial e outros seguros.",
  },
  {
    name: "HDI Seguros",
    description: "3003 5390 (Capitais) e 0800 434 4340 (Demais localidades) - Assistência completa 24h.",
  },
  {
    name: "Liberty Seguros",
    description: "0800 702 5100 - Assistência 24 horas para todos os tipos de seguros.",
  },
  {
    name: "Mapfre Seguros",
    description: "4004 0101 (Capitais e regiões metropolitanas) e 0800 775 0101 (Outras localidades) - Suporte 24h.",
  },
  {
    name: "Tokio Marine",
    description: "0800 30 TOKIO (0800 30 86546) - Assistência emergencial disponível 24 horas.",
  },
  {
    name: "Allianz Seguros",
    description: "0800 177 178 - Assistência 24 horas para todos os segurados Allianz.",
  },
  {
    name: "Azul Seguros",
    description: "0800 703 0203 - Assistência 24 horas para segurados em todo Brasil.",
  },
  {
    name: "Sompo Seguros",
    description: "0800 016 0676 - Atendimento de emergência 24 horas por dia.",
  },
  {
    name: "Zurich Seguros",
    description: "0800 285 4141 - Serviços de assistência 24 horas para todos os segurados.",
  },
  {
    name: "Itaú Seguros",
    description: "0800 034 8737 - Assistência 24 horas para todos os produtos Itaú Seguros.",
  },
  {
    name: "Chubb Seguros",
    description: "0800 722 2492 - Assistência emergencial 24 horas para segurados Chubb.",
  }
];

const Assistencia24h = () => {
  return (
    <InsurancePage
      title="Assistência 24H"
      descriptions={[
        "Caso o seu veículo esteja impossibilitado de rodar, acione a assistência do seu seguro, tenha em mãos:",
        "- Endereço do local da pane",
        "- Endereço de destino do veículo"
      ]}
      icon={<HelpCircle />}
      imageSrc="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      buttons={[
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "Contato departamento de sinistros/assistências",
          action: () => window.open('https://api.whatsapp.com/send/?phone=5519998805205&text&type=phone_number&app_absent=0', '_blank'),
        }
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {insuranceCompanies.map((company, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{company.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{company.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </InsurancePage>
  );
};

export default Assistencia24h;