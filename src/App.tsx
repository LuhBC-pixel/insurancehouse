import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;