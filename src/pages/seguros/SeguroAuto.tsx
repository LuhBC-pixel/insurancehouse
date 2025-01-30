import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { Car } from "lucide-react";

const SeguroAuto = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Car className="text-primary" size={32} />
            <h1 className="text-4xl font-bold text-primary text-center">Seguro Auto</h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Nosso seguro auto oferece proteção completa para seu veículo, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-8">
              <li>Cobertura contra roubo e furto</li>
              <li>Proteção contra danos por colisão</li>
              <li>Assistência 24 horas</li>
              <li>Carro reserva</li>
              <li>Cobertura para terceiros</li>
              <li>Proteção contra eventos naturais</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default SeguroAuto;