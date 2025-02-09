
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

interface ButtonConfig {
  icon?: React.ReactNode;
  label: string;
  action: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

interface InsuranceActionsProps {
  buttons?: ButtonConfig[];
}

const InsuranceActions = ({ buttons }: InsuranceActionsProps) => {
  const defaultButtons: ButtonConfig[] = [
    {
      icon: <MessageSquare className="mr-2" />,
      label: "Entre em contato",
      action: () => window.open('https://api.whatsapp.com/send?phone=551938733736', '_blank'),
      variant: "default"
    }
  ];

  const displayButtons = buttons || defaultButtons;

  return (
    <div className="mt-8 flex justify-center gap-4">
      {displayButtons.slice(0, 4).map((button, index) => (
        <Button 
          key={index}
          onClick={button.action}
          variant={button.variant || "default"}
          className="w-full md:w-auto"
        >
          {button.icon}
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default InsuranceActions;
