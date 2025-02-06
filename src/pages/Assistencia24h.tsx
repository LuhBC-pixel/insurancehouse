import { HelpCircle, Phone } from "lucide-react";
import InsurancePage from "@/components/InsurancePage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const insuranceCompanies = [
  {
    name: "Porto Seguro",
    description: "0800 727 2766 - Assistência 24h para segurados e 3366-3110 para segurados Porto Seguro Auto.",
  },
  {
    name: "Bradesco Seguros",
    description: "4004-2757 (Capitais e regiões metropolitanas) e 0800 701 2757 (Demais localidades) - Atendimento 24 horas.",
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
        "Nossa assistência 24 horas está sempre disponível para atender você em qualquer situação de emergência, oferecendo suporte completo e imediato.",
        "Contamos com uma ampla rede de prestadores qualificados em todo o território nacional, garantindo atendimento rápido e eficiente onde quer que você esteja.",
        "Serviços incluem: socorro mecânico, guincho, chaveiro, troca de pneus, taxi, hospedagem e muito mais."
      ]}
      icon={<HelpCircle />}
      imageSrc="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      buttons={[
        {
          icon: <Phone className="mr-2" />,
          label: "Solicitar Assistência",
          action: () => window.open('tel:+551938733736')
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