import InsurancePage from "@/components/InsurancePage";
import { Home } from "lucide-react";

const SeguroResidencial = () => {
  return (
    <InsurancePage
      title="Seguro Residencial"
      descriptions={[
        "A sua casa é o seu lugar seguro.",
        "Para que você não precise se preocupar com eventos imprevistos que podem abalar a sua estrutura, mantenha o seu lar protegido com um seguro residencial contratado sob medida para você.",
        "Seja indenizado em eventos como Incêndio, Vendaval, Danos Elétricos, Roubo, além de outras dezenas de coberturas ou acione serviços que facilitam o seu dia a dia, como, por exemplo, reparos hidráulicos."
      ]}
      icon={<Home size={48} />}
      imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        label: 'Solicite a sua cotação',
        action: function(): void {
          window.open('https://insurancehouse.aggilizador.com.br/residence', '_blank')
         }
        },
        {
          label: 'Contrate o seu seguro Residencial Porto',
          action: function(): void {
            window.open('https://www.portoseguro.com.br/seguro-residencial?utm_source=redirect-vdo&utm_medium=nu&utm_campaign=seguro-residencial_na_redirect-vdo_na_aon_na_hq_growth_na&utm_content=na_visita_automatico_cross_redirect-vdo_na_na_nu_teste-nao_24qbr01949he&ref=redirect-vdo_24qbr01949he#vo-lgpd-frm-step-identify', '_blank')
          }
        }
      ]}
    />
  );
};

export default SeguroResidencial;