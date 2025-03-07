
import InsurancePage from "@/components/InsurancePage";
import { Key } from "lucide-react";
import { useInsuranceData } from "@/hooks/useInsuranceData";
import { useToast } from "@/components/ui/use-toast";
import { MdOutlineWhatsapp } from "react-icons/md";

const SeguroFianca = () => {
  const { toast } = useToast();
  const { data, isLoading, error } = useInsuranceData("Seguro Fiança e Capitalização");

  if (error) {
    toast({
      variant: "destructive",
      title: "Erro ao carregar dados",
      description: "Não foi possível carregar as informações do seguro.",
    });
  }

  // Dados de fallback caso não consiga carregar do banco de dados
  const fallbackData = {
    Título: "Seguro Fiança e Capitalização",
    Descrição: [
      "Garanta a tranquilidade na locação do seu imóvel com nosso Seguro Fiança.",
      "Uma alternativa prática e econômica ao fiador tradicional, oferecendo segurança tanto para proprietários quanto para inquilinos.",
      "Além disso, conheça nossos planos de capitalização que unem economia programada com a chance de concorrer a prêmios."
    ],
    LabelPrimeiroBotão: "Fale Conosco",
    PrimeiroBotão: "https://api.whatsapp.com/send?phone=551938733736&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seguro%20fian%C3%A7a."
  };

  const displayData = data || fallbackData;

  if (isLoading && !displayData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <InsurancePage
      title={displayData.Título}
      descriptions={displayData.Descrição}
      icon={<Key size={48} />}
      imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        icon: <MdOutlineWhatsapp className="text-[20px]" />,
        label: displayData.LabelPrimeiroBotão,
        action: () => window.open(displayData.PrimeiroBotão, '_blank')
      }]}
    />
  );
};

export default SeguroFianca;
