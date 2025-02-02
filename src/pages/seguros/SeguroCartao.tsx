import InsurancePage from "@/components/InsurancePage";
import { CreditCard } from "lucide-react";

const SeguroCondominio = () => {
  return (
    <InsurancePage
      title="Cartão de Crédito Porto Bank"
      descriptions={[
        "O Cartão de Crédito Porto Bank oferece 12 meses de anuidade grátis* e diversos benefícios.",
        "Todos têm cobertura internacional e podem ser oferecidos nas versões:",
        [
          'Gold (Visa e Mastercard)',
          "Platinum (Visa e Mastercard)",
          "Visa Infinite e Mastercard Black (solicitação mediante convite)"
        ].join(" - "),
        "*Exceto para Cartões Visa Infinite e Mastercard Black"
      ]}
      icon={<CreditCard size={48} />}
      imageSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&h=800&fit=crop"
      buttons={[
        {
          label: "Conheça todos os benefícios e solicite o seu",
          action: () => window.open('https://www.portoseguro.com.br/bank', '_blank')
        }
      ]}
    />
  );
};

export default SeguroCondominio;