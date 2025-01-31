import { Mail, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Navbar from './Navbar';
import Footer from './Footer';

interface InsurancePageProps {
  title: string;
  description: string;
  features: string[];
  coverageItems: string[];
  icon: React.ReactNode;
}

const InsurancePage = ({ title, description, features, coverageItems, icon }: InsurancePageProps) => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contato",
      description: "Em breve entraremos em contato com você!",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-primary text-4xl">
                {icon}
              </div>
              <h1 className="text-4xl font-bold text-primary">{title}</h1>
            </div>
            
            <p className="text-lg text-text mb-8">{description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Características</h2>
              <ul className="list-disc pl-6 space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-text">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">Coberturas</h2>
              <ul className="list-disc pl-6 space-y-2">
                {coverageItems.map((item, index) => (
                  <li key={index} className="text-text">{item}</li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={handleContactClick}
              className="w-full md:w-auto"
            >
              <Mail className="mr-2" />
              Solicitar Contato
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsurancePage;