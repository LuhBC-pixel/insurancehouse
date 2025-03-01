
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Index from "./pages/Index";
import SeguroAuto from "./pages/seguros/SeguroAuto";
import SeguroResidencial from "./pages/seguros/SeguroResidencial";
import SeguroVida from "./pages/seguros/SeguroVida";
import SeguroViagem from "./pages/seguros/SeguroViagem";
import SeguroCelular from "./pages/seguros/SeguroCelular";
import SeguroEmpresariais from "./pages/seguros/SeguroEmpresariais";
import SeguroFianca from "./pages/seguros/SeguroFianca";
import SeguroCartao from "./pages/seguros/SeguroCartao";
import SeguroEmprestimo from "./pages/seguros/SeguroEmprestimo";
import SeguroSaude from "./pages/seguros/SeguroSaude";
import SeguroEquipamentos from "./pages/seguros/SeguroEquipamentos";
import Agronegocios from "./pages/seguros/agronegocios";
import SeguroProdutosDiversos from "./pages/seguros/SeguroProdutosDIversos";
import Sinistro from "./pages/Sinistro";
import Assistencia24h from "./pages/Assistencia24h";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seguros/auto" element={<SeguroAuto />} />
          <Route path="/seguros/residencial" element={<SeguroResidencial />} />
          <Route path="/seguros/vida" element={<SeguroVida />} />
          <Route path="/seguros/viagem" element={<SeguroViagem />} />
          <Route path="/seguros/celular" element={<SeguroCelular />} />
          <Route path="/seguros/empresariais" element={<SeguroEmpresariais />} />
          <Route path="/seguros/fianca" element={<SeguroFianca />} />
          <Route path="/seguros/cartao" element={<SeguroCartao />} />
          <Route path="/seguros/emprestimo" element={<SeguroEmprestimo />} />
          <Route path="/seguros/saude" element={<SeguroSaude />} />
          <Route path="/seguros/equipamentos" element={<SeguroEquipamentos />} />
          <Route path="/seguros/agronegocios" element={<Agronegocios />} />
          <Route path="/seguros/produtos-diversos" element={<SeguroProdutosDiversos />} />
          <Route path="/sinistro" element={<Sinistro />} />
          <Route path="/assistencia-24h" element={<Assistencia24h />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
