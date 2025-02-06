import { Shield, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InsurancePage from "@/components/InsurancePage";
import { MdOutlineWhatsapp } from "react-icons/md";

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
          label: "Registrar B.O online",
          action: () => window.open('https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia', '_blank'),
        },
        {
          label: "Consulta FIPE",
          action: () => window.open('https://veiculos.fipe.org.br/#carro', '_blank'),
        },
        {
          label: "Comunicação de sinistro automóvel",
          action: () => window.open('https://forms.gle/Kt4moViXJQVTtWFx7', '_blank'),
        },
        {
          icon: <MdOutlineWhatsapp className="mr-2" />,
          label: "Contato departamento de sinistros/assistência",
          action: () => window.open('https://api.whatsapp.com/send/?phone=5519998805205&text&type=phone_number&app_absent=0', '_blank'),
        }
      ]}
    >
      <div className="mt-8 max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Para Avisar um sinistro de Colisão sem vítima
            </AccordionTrigger>
            <AccordionContent>
            • Boletim de ocorrência <br />
            • Cópia do DUT (Documento único de transferência CRV) frente e verso <br />
            • Cópia da CNH do condutor no momento da colisão frente e verso <br />
            •Formulário de Aviso de sinistro assinado
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Para Avisar um sinistro de Colisão com vítima
            </AccordionTrigger>
            <AccordionContent>
              • Boletim de ocorrência local <br />
              • Cópia do DUT (Documento único de transferência CRV) frente e verso <br />
              • Cópia da CNH do condutor no momento da colisão frente e verso <br />
              • Formulário de Aviso de sinistro assinado
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Para Avisar um sinistro de Roubo / Furto
            </AccordionTrigger>
            <AccordionContent>
            • Boletim de ocorrência <br />
            • Cópia do DUT (Documento único de transferência CRV) frente e verso <br />
            • Cópia da CNH do condutor no momento da colisão frente e verso
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Terceiro
            </AccordionTrigger>
            <AccordionContent>
              Caso você seja o causador do acidente, orientar o seu terceiro a entrar em contato com o departamento de sinistro da Insurance House.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </InsurancePage>
  );
};

export default Sinistro;