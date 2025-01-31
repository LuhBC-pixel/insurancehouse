import InsurancePage from "@/components/InsurancePage";

const SeguroCelular = () => {
  return (
    <InsurancePage
      title="Seguro Celular"
      description="Proteja seu smartphone contra imprevistos do dia a dia. Cobertura completa para roubo, furto qualificado e quebra acidental."
      features={[
        "Cobertura nacional",
        "Processo simplificado de sinistro",
        "Reparo ou substituição",
        "Proteção contra líquidos",
        "Atendimento especializado"
      ]}
      coverageItems={[
        "Roubo e furto qualificado",
        "Quebra acidental",
        "Danos por líquido",
        "Oxidação",
        "Defeitos após garantia"
      ]}
    />
  );
};

export default SeguroCelular;