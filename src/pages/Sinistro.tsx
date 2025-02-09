
import { Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InsurancePage from "@/components/InsurancePage";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Phone, AlertTriangle } from "lucide-react";

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
          icon: <AlertTriangle className="mr-2" />,
          label: "Registrar B.O online",
          action: () => window.open('https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia', '_blank'),
          variant: "secondary",
        },
        {
          icon: <FileText className="mr-2" />,
          label: "Consulta FIPE",
          action: () => window.open('https://veiculos.fipe.org.br/#carro', '_blank'),
          variant: "secondary",
        },
        {
          icon: <ExternalLink className="mr-2" />,
          label: "Comunicação de sinistro automóvel",
          action: () => window.open('https://forms.gle/Kt4moViXJQVTtWFx7', '_blank'),
          variant: "default",
        },
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "Contato departamento de sinistros/assistências",
          action: () => window.open('https://api.whatsapp.com/send/?phone=5519998805205&text&type=phone_number&app_absent=0', '_blank'),
          variant: "default",
        }
      ]}
    >
      <div className="mt-8 max-w-2xl mx-auto space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Para Avisar um sinistro de Colisão sem vítima
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Boletim de ocorrência</li>
                <li>Cópia do DUT (Documento único de transferência CRV) frente e verso</li>
                <li>Cópia da CNH do condutor no momento da colisão frente e verso</li>
                <li>Formulário de Aviso de sinistro assinado</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Para Avisar um sinistro de Colisão com vítima
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Boletim de ocorrência local</li>
                <li>Cópia do DUT (Documento único de transferência CRV) frente e verso</li>
                <li>Cópia da CNH do condutor no momento da colisão frente e verso</li>
                <li>Formulário de Aviso de sinistro assinado</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Para Avisar um sinistro de Roubo / Furto
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Boletim de ocorrência</li>
                <li>Cópia do DUT (Documento único de transferência CRV) frente e verso</li>
                <li>Cópia da CNH do condutor no momento da colisão frente e verso</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Terceiro
            </AccordionTrigger>
            <AccordionContent>
              <p>Caso você seja o causador do acidente, orientar o seu terceiro a entrar em contato com o departamento de sinistro da Insurance House.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </InsurancePage>
  );
};

export default Sinistro;
