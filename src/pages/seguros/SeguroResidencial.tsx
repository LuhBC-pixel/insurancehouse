import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { Home } from "lucide-react";

const SeguroResidencial = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Home className="text-primary" size={32} />
            <h1 className="text-4xl font-bold text-primary text-center">Seguro Residencial</h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Proteja sua casa e seus bens com nosso seguro residencial completo:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-8">
              <li>Cobertura contra incêndio</li>
              <li>Proteção contra roubo e furto</li>
              <li>Danos elétricos</li>
              <li>Assistência 24 horas</li>
              <li>Vendaval e granizo</li>
              <li>Responsabilidade civil familiar</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default SeguroResidencial;