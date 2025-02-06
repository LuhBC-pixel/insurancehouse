import React from 'react';

interface InsuranceHeaderProps {
  title: string;
  icon: React.ReactNode;
}

const InsuranceHeader = ({ title, icon }: InsuranceHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="text-primary flex items-center">
        {React.cloneElement(icon as React.ReactElement, { 
          className: 'w-8 h-8',
          strokeWidth: 2
        })}
      </div>
      <h1 className="text-4xl font-bold text-primary">{title}</h1>
    </div>
  );
};

export default InsuranceHeader;