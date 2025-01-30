import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { Heart } from "lucide-react";

const SeguroVida = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="text-primary" size={32} />
            <h1 className="text-4xl font-bold text-primary text-center">Seguro Vida</h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Garanta a proteção financeira da sua família com nosso seguro de vida:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-8">
              <li>Cobertura por morte natural ou acidental</li>
              <li>Invalidez permanente total ou parcial</li>
              <li>Assistência funeral</li>
              <li>Doenças graves</li>
              <li>Diárias por internação hospitalar</li>
              <li>Auxílio alimentação</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default SeguroVida;