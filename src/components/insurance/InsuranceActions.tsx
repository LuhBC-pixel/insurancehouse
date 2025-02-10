
import React from 'react';
import { Button } from '../ui/button';
import { MdOutlineWhatsapp } from 'react-icons/md';

interface ButtonConfig {
  icon?: React.ReactNode;
  label: string;
  action: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

interface InsuranceActionsProps {
  buttons?: ButtonConfig[];
}

const InsuranceActions = ({ buttons }: InsuranceActionsProps) => {
  const defaultButtons: ButtonConfig[] = [
    {
      icon: <MdOutlineWhatsapp className="mr-2" />,
      label: "Entre em contato",
      action: () => window.open('https://api.whatsapp.com/send?phone=551938733736', '_blank'),
      variant: "default",
      className: "hover:scale-105 transition-transform",
    }
  ];

  const displayButtons = buttons || defaultButtons;
  const topButtons = displayButtons.slice(0, 2);
  const bottomButtons = displayButtons.slice(2, 4);

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {topButtons.map((button, index) => (
          <Button 
            key={index}
            onClick={button.action}
            variant={button.variant || "default"}
            className={`w-full sm:w-auto ${button.className || ''}`}
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {bottomButtons.map((button, index) => (
          <Button 
            key={index}
            onClick={button.action}
            variant={button.variant || "default"}
            className={`w-full sm:w-auto transition-all hover:scale-105 shadow-sm hover:shadow-md ${button.className || ''}`}
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default InsuranceActions;
