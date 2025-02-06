import { Shield, FileText, Phone, Car, Home } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InsurancePage from "@/components/InsurancePage";

const Sinistro = () => {
  return (
    <InsurancePage
      title="Sinistros"
      descriptions={[
        "Estes são os documentos iniciais para comunicar um sinistro, documentos complementares poderão ser solicitados no decorrer da análise.",
        "Dúvidas Frequentes:",
      ]}
      icon={<Shield />}
      imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      buttons={[
        {
          icon: <FileText className="mr-2" />,
          label: "Registrar B.O online",
          action: () => window.open('https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia', '_blank'),
        },
        {
          icon: <Car className="mr-2" />,
          label: "Consulta FIPE",
          action: () => window.open('https://veiculos.fipe.org.br/#carro', '_blank'),
        },
        {
          icon: <Home className="mr-2" />,
          label: "Assistência 24h",
          action: () => window.open('/assistencia-24h', '_blank'),
        },
        {
          icon: <Phone className="mr-2" />,
          label: "Fale Conosco",
          action: () => window.open('https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20um%20sinistro.', '_blank'),
        }
      ]}
    >
      <div className="mt-8 max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Como faço para acionar o seguro em caso de sinistro?
            </AccordionTrigger>
            <AccordionContent>
              Em caso de sinistro, você deve entrar em contato imediatamente com a seguradora através dos canais de atendimento disponíveis 24 horas. Tenha em mãos seus documentos pessoais, apólice do seguro e, se possível, registre um Boletim de Ocorrência. Nossa equipe irá orientá-lo sobre os próximos passos e documentos necessários.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Qual é o prazo para comunicar um sinistro?
            </AccordionTrigger>
            <AccordionContent>
              O sinistro deve ser comunicado o quanto antes possível. Embora cada seguradora tenha seus prazos específicos, recomendamos que a comunicação seja feita em até 24 horas após o ocorrido para agilizar o processo e garantir todos os seus direitos previstos na apólice.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Quais documentos são necessários para dar entrada no sinistro?
            </AccordionTrigger>
            <AccordionContent>
              Os documentos básicos incluem: RG e CPF do segurado, carteira de habilitação (em caso de sinistro automotivo), Boletim de Ocorrência (quando aplicável), comprovante de residência e dados da apólice. Dependendo do tipo de sinistro e cobertura, documentos adicionais podem ser solicitados durante o processo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </InsurancePage>
  );
};

export default Sinistro;