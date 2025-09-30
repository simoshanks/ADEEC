import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

import Apropos from "./pages/Apropos";
import Activites from "./pages/Activites";
import Documentation from "./pages/Documentation";
import Activitesdetail from "./pages/Activitesdetail";
import Partenaires from "./pages/Partenaires";
import Realisations from "./pages/Realisations";

import Projetdomains from "./pages/Projetsdomains";
import ProjetDetail from "./pages/Projetdetail";

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
          <Route path="/Activites" element={<Activites />} />
          <Route path="/Activites/:id" element={<Activitesdetail />} />
          <Route path="/Realisations" element={<Realisations />} />
          <Route path="/projets/:domainSlug" element={<Projetdomains />} />
          <Route path="/projets/:domainSlug/:projectSlug" element={<ProjetDetail />} />

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
