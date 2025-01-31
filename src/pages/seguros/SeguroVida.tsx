import InsurancePage from "@/components/InsurancePage";

const SeguroVida = () => {
  return (
    <InsurancePage
      title="Seguro de Vida"
      description="Garanta a proteção financeira de quem você ama. Nosso seguro de vida oferece tranquilidade para você e sua família nos momentos mais importantes."
      features={[
        "Cobertura 24 horas por dia",
        "Proteção mundial",
        "Assistência funeral",
        "Invalidez por acidente",
        "Capital segurado flexível"
      ]}
      coverageItems={[
        "Morte natural e acidental",
        "Invalidez permanente total ou parcial por acidente",
        "Doenças graves",
        "Assistência funeral familiar",
        "Auxílio alimentação"
      ]}
    />
  );
};

export default SeguroVida;