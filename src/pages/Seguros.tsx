import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Seguros = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-12">Nossos Seguros</h1>
        </div>
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Seguros;