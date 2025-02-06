import React from 'react';
import { Json } from '@/integrations/supabase/types';

interface InsuranceDescriptionProps {
  descriptions: Json[];
}

const InsuranceDescription = ({ descriptions }: InsuranceDescriptionProps) => {
  const renderDescription = (text: Json) => {
    const stringText = String(text);
    if (stringText === "FINANCIAMENTO" || 
        stringText === "EMPRÉSTIMO COM GARANTIA DE VEÍCULO" || 
        stringText === "EMPRÉSTIMO COM GARANTIA DE IMÓVEL") {
      return (
        <h2 className="text-xl font-bold text-primary mt-6 mb-4">{stringText}</h2>
      );
    }
    return (
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        {stringText}
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