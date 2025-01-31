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
    />
  );
};

export default SeguroResidencial;