import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

import Apropos from "./pages/Apropos";
import Documentation from "./pages/Documentation";

import Partenaires from "./pages/Partenaires";
import ProjetDetail from "./pages/Projetdetail";
import Azicode from "./pages/Azicode";
import Prisonniers from "./pages/Prisonniers";
import Chance from "./pages/Chance";
import Femmes from "./pages/Femmes";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apropos" element={<Apropos />} />
          
          <Route path="/Activites/Azicode-62" element={<Azicode />} />
          <Route path="/Activites/reinsertion-prisonniers" element={<Prisonniers />} />
          <Route path="/Activites/2eme-chance" element={<Chance />} />
          <Route path="/Activites/centre-femmes" element={<Femmes />} />
           <Route path="/Realisations/:domainSlug/:projectSlug" element={<ProjetDetail />} />
          <Route path="/Partenaires" element={<Partenaires />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />



          {/*  CUSTOM ROUTES  ABOVE"*" ROUTE */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
