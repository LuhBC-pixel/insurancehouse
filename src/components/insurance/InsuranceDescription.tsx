import React from 'react';

interface InsuranceDescriptionProps {
  descriptions: string[];
}

const InsuranceDescription = ({ descriptions }: InsuranceDescriptionProps) => {
  const renderDescription = (text: string) => {
    if (text === "FINANCIAMENTO" || 
        text === "EMPRÉSTIMO COM GARANTIA DE VEÍCULO" || 
        text === "EMPRÉSTIMO COM GARANTIA DE IMÓVEL") {
      return (
        <h2 className="text-xl font-bold text-primary mt-6 mb-4">{text}</h2>
      );
    }
    return (
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        {text}
      </p>
    );
  };

  return (
    <div className="space-y-4">
      {descriptions.map((description, index) => (
        <div key={index}>
          {renderDescription(description)}
        </div>
      ))}
    </div>
  );
};

export default InsuranceDescription;