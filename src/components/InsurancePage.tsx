import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Navbar from './Navbar';
import Footer from './Footer';

interface InsurancePageProps {
  title: string;
  descriptions: string[];
  icon: React.ReactNode;
  imageSrc?: string;
}

const InsurancePage = ({ title, descriptions, icon, imageSrc }: InsurancePageProps) => {
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
            
            {imageSrc && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            )}

            {descriptions.map((description, index) => (
              <p key={index} className="text-lg text-text mb-8">{description}</p>
            ))}

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