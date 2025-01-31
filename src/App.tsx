import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Seguros from "./pages/Seguros";
import SeguroAuto from "./pages/seguros/SeguroAuto";
import SeguroResidencial from "./pages/seguros/SeguroResidencial";
import SeguroVida from "./pages/seguros/SeguroVida";
import SeguroViagem from "./pages/seguros/SeguroViagem";
import SeguroCelular from "./pages/seguros/SeguroCelular";
import SeguroEmpresarial from "./pages/seguros/SeguroEmpresarial";
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
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/seguros/auto" element={<SeguroAuto />} />
          <Route path="/seguros/residencial" element={<SeguroResidencial />} />
          <Route path="/seguros/vida" element={<SeguroVida />} />
          <Route path="/seguros/viagem" element={<SeguroViagem />} />
          <Route path="/seguros/celular" element={<SeguroCelular />} />
          <Route path="/seguros/empresarial" element={<SeguroEmpresarial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;