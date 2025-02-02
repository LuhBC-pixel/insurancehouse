import { Mail, PhoneCall, FilePen, Whatsapp } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Navbar from './Navbar';
import Footer from './Footer';

interface ButtonConfig {
  icon?: React.ReactNode;
  label: string;
  action: () => void;
}

interface InsurancePageProps {
  title: string;
  descriptions: string[];
  icon: React.ReactNode;
  imageSrc?: string;
  buttons?: ButtonConfig[];
}

const InsurancePage = ({ title, descriptions, icon, imageSrc, buttons }: InsurancePageProps) => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contato",
      description: "Em breve entraremos em contato com você!",
    });
  };

  const defaultButtons: ButtonConfig[] = [
    {
      icon: <Whatsapp className="mr-2" />,
      label: "Entre em contato",
      action: () => window.open('https://api.whatsapp.com/send?phone=551938733736', '_blank')
    }
  ];

  const displayButtons = buttons || defaultButtons;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-primary text-4xl">
                {icon}
              </div>
              <h1 className="text-4xl font-bold text-primary">{title}</h1>
            </div>
            
            {imageSrc && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              {descriptions.map((description, index) => (
                <p 
                  key={index} 
                  className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
                >
                  {description}
                </p>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {displayButtons.slice(0, 2).map((button, index) => (
                <Button 
                  key={index}
                  onClick={button.action}
                  className="w-full md:w-auto"
                >
                  {button.icon}
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsurancePage;