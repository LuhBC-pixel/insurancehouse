import React from 'react';
import { useToast } from './ui/use-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import InsuranceHeader from './insurance/InsuranceHeader';
import InsuranceDescription from './insurance/InsuranceDescription';
import InsuranceActions from './insurance/InsuranceActions';
import { Json } from '@/integrations/supabase/types';

interface ButtonConfig {
  icon?: React.ReactNode;
  label: string;
  action: () => void;
}

interface InsurancePageProps {
  title: string;
  descriptions: Json[];
  icon: React.ReactNode;
  imageSrc?: string;
  buttons?: ButtonConfig[];
  children?: React.ReactNode;
}

const InsurancePage = ({ 
  title, 
  descriptions, 
  icon, 
  imageSrc, 
  buttons,
  children 
}: InsurancePageProps) => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-40 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <InsuranceHeader title={title} icon={icon} />
            
            {imageSrc && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={imageSrc} 
                  alt={title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            <InsuranceDescription descriptions={descriptions} />
            <InsuranceActions buttons={buttons} />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsurancePage;