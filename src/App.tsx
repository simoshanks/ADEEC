import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Ornationaux from "./pages/Ornationaux";
import Orinternationaux from "./pages/Orinternationaux";
import Administrations from "./pages/Administrations";
import Lesconseils from "./pages/Lesconseils";
import Apropos from "./pages/Apropos";
import Activites from "./pages/Activites";
import Documentation from "./pages/Documentation";
import Activitesdetail from "./pages/Activitesdetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apropos" element={<Apropos/>} />
          <Route path="/Activites" element={<Activites/>} />
          <Route path="/Activites/:id" element={<Activitesdetail/>} />
          <Route path="/documentation" element={<Documentation/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/partenaire1" element={<Ornationaux/>} />
          <Route path="/partenaire2" element={<Orinternationaux/>} />
          <Route path="/partenaire3" element={<Administrations/>} />
          <Route path="/partenaire4" element={<Lesconseils/>} />
          

          {/*  CUSTOM ROUTES  ABOVE"*" ROUTE */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
