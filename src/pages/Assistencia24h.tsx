
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import InsurancePage from "@/components/InsurancePage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const insuranceCompanies = [
  {
    name: "Aliro Seguros",
    description: ['Assistência 24 horas', '0800 770 1318', 'Todas as regiões'],
  },
  {
    name: "ALLIANZ SEGUROS",
    description: ["WhatsApp 11 4090 1444 e 11 4090 1110", "AUTOMÓVEL 0800 0130 700", 'RESIDÊNCIA E EMPRESA 0800 0177 178']
  },
  {
    name: "AZUL SEGUROS",
    description: ['WhatsApp 21 3906 2985', 'Capitais e grandes centros 40043700', 'Outras regiões 0300 1232 985 e 0800 7030 203', 'Mercosul +55 11 33662986'],
  },
  {
    name: 'BRADESCO SEGUROS',
    description: ['WhatsApp 21 4004 2702', 'Capitais e regiões metropolitanas 4004 2757', 'Demais regiões 0800 7012 757', 'Deficiência auditiva ou de fala 0800 7012 762']
  },
  {
    name: "HDI Seguros",
    description: ['WhatsApp 55 80 0770 1608', '', 'AUTOMÓVEL', 'Região Metropolitana 3003 5390', 'Demais Regiões 0800 4344 340', 'Mercosul 55 11 4133 6636'],
  },
  {
    name: "LIBERTY SEGUROS",
    description: ['WhatsApp 11 3206 1414', 'AUTO E VIDA 0800 7014 120', 'EMPRESA E RESIDÊNCIA 0800 7025 100'],
  },
  {
    name: "MAPFRE SEGUROS",
    description: ['Todos os ramos', 'WhatsApp e Região Metropolitana 11 4004 0101', 'Demais Regiões 0800 775 4545'],
  },
  {
    name: "PORTO SEGURO",
    description: ['WhatsApp 11 3003-9303', '', 'PORTO SEGURO AUTOMÓVEL e RESIDÊNCIA', 'Capital 400476786', 'Grande SP 333 76786', 'Demais Localidades 03003376786', 'Mercosul +55 11 33663189', '', 'PORTOCAP SERVIÇOS', 'Capitais e Regiões Metropolitanas 3003 2274', 'Demais localidades 08007271866', '', 'PORTO ALUGUEL E IMOBILIÁRIA Grande SP 33376786', 'Capitais e Grandes centros 400476786', 'Demais localidades 08007272722', '', 'PORTO EMPRESA', 'Grande SP 11 33663110', 'Capitais e Grandes centros 30046268', 'Demais localidades 08007278118', '', 'PORTO VIDA','Grande SP 11 99663377', 'Demais localidades 08007279393']
  },
  {
    name: "SOMPO SEGUROS",
    description: ['TODOS OS RAMOS', 'Grande SP 11 31562990', 'Demais localidades 08007719119'],
  },
  {
    name: "SUHAI",
    description: ['WhatsApp 11 3003 0335', 'Telefone 08003278424']
  },
  {
    name: "SUL AMÉRICA",
    description: ['Whatsapp 11 3004 9723', 'Capital e Região metropolitana 4090 1073', 'Demais localidades 08007771012', 'Mercosul 55 11 4126 9317']
  },
  {
    name: "TÓKIO MARINE",
    description: ['WhatsApp 11 995786546', '', 'AUTOMÓVEL', 'Território Nacional 0800 31 86546', '', 'AUTO FROTA', 'Território Nacional 08003286546', 'CARRO RESERVA 08002086546', '', 'SERVIÇO DE VIDROS', 'Território Nacional 08007078005', 'RESIDÊNCIA 08003086546', 'VIDA 08007055050'],
  },
  {
    name: "ZURICH SEGUROS",
    description: ['WhatsApp 11 28902121', '', 'AUTOMÓVEL, RESIDÊNCIA E VIDA', 'Território Nacional 08007291400', '', 'VIDROS', 'Território Nacional 08000256303'],
  }
];

const MAX_LINES = 7; // Maximum number of lines to show before collapsing

const Assistencia24h = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (companyName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [companyName]: !prev[companyName]
    }));
  };

  const shouldShowExpandButton = (description: string[]) => {
    return description.length > MAX_LINES;
  };

  return (
    <InsurancePage
      title="Assistência 24H"
      descriptions={[
        "Caso o seu veículo esteja impossibilitado de rodar, acione a assistência do seu seguro, tenha em mãos:",
        "- Endereço do local da pane",
        "- Endereço de destino do veículo"
      ]}
      icon={<HelpCircle />}
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
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50 border border-gray-100"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-semibold text-primary">{company.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {typeof company.description === 'string' ? (
                <p className="text-gray-600 leading-relaxed text-sm">{company.description}</p>
              ) : (
                <>
                  <div className={`space-y-1 ${!expandedCards[company.name] && shouldShowExpandButton(company.description) ? 'line-clamp-6' : ''}`}>
                    {company.description.map((text, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed text-sm">{text}</p>
                    ))}
                  </div>
                  {shouldShowExpandButton(company.description) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 w-full text-primary hover:text-white"
                      onClick={() => toggleCard(company.name)}
                    >
                      {expandedCards[company.name] ? (
                        <>
                          Ver menos <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Ver mais <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </InsurancePage>
  );
};

export default Assistencia24h;

