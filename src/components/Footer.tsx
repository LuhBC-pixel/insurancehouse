const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Insurance House<br/><span className="text-secondary">Corretora de Seguros</span></h3>
            <p className="text-gray-300">
              Sua segurança é nossa prioridade. Conte conosco para proteger o que é importante para você.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Seguros</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors">Auto</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Vida</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Empresarial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda - Sexta</li>
              <li>08:00 - 17:00</li>
              <li>Plantão 24h para</li>
              <li>emergências</li>
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