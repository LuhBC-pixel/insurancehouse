
import InsurancePage from "@/components/InsurancePage";
import { Leaf } from "lucide-react";
import { useInsuranceData } from "@/hooks/useInsuranceData";
import { useToast } from "@/components/ui/use-toast";

const SeguroAgronegocios = () => {
  const { toast } = useToast();
  const { data, isLoading, error } = useInsuranceData("AGRONEGÓCIOS");

  if (error) {
    toast({
      variant: "destructive",
      title: "Erro ao carregar dados",
      description: "Não foi possível carregar as informações do seguro.",
    });
  }

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <InsurancePage
      title={data.Título}
      descriptions={data.Descrição}
      icon={<Leaf size={48} />}
      imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&h=800&fit=crop"
      buttons={[{
        label: data.LabelPrimeiroBotão,
        action: () => window.open(data.PrimeiroBotão, '_blank')
      }]}
    />
  );
};

export default SeguroAgronegocios;
