
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { Button } from "./ui/button";
import { ChevronRight, Facebook, Instagram } from "lucide-react";

type Seguro = Database['public']['Tables']['Seguros']['Row'];

const Footer = () => {
  const { data: seguros } = useQuery<Seguro[]>({
    queryKey: ["seguros-footer"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Seguros")
        .select("*")
        .limit(4);

      if (error) {
        throw error;
      }

      return data;
    },
  });

  const formatarUrlSeguro = (titulo: string) => {
    return "/seguros/" + titulo
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Insurance House<br/><span className="text-secondary">Corretora de Seguros</span></h3>
            <p className="text-gray-300">
              Sua segurança é nossa prioridade. Conte conosco para proteger o que é importante para você.
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/ihseguros/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Seguros</h4>
            <ul className="space-y-2 text-gray-300">
              {seguros?.map((seguro) => (
                <li key={seguro.Título}>
                  <a 
                    href={formatarUrlSeguro(seguro.Título)} 
                    className="hover:text-secondary transition-colors"
                  >
                    {seguro.Título}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  variant="link" 
                  className="text-gray-300 hover:text-secondary p-0 h-auto font-normal flex items-center gap-1"
                  onClick={scrollToServices}
                >
                  Ver todos
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/sinistro" className="hover:text-secondary transition-colors">Sinistro</a></li>
              <li><a href="/assistencia-24h" className="hover:text-secondary transition-colors">Assistência 24h</a></li>
              <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda - Sexta</li>
              <li>08:00 - 17:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Insurance House Corretora de Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
