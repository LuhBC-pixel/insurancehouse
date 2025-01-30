import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { Shield } from "lucide-react";

const SeguroEmpresarial = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="text-primary" size={32} />
            <h1 className="text-4xl font-bold text-primary text-center">Seguro Empresarial</h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Proteja seu negócio com nossa solução completa de seguro empresarial:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-8">
              <li>Cobertura patrimonial</li>
              <li>Proteção contra lucros cessantes</li>
              <li>Responsabilidade civil</li>
              <li>Proteção para equipamentos</li>
              <li>Cobertura para funcionários</li>
              <li>Assistência 24 horas</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default SeguroEmpresarial;