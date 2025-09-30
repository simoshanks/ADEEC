import DomainProjet from "@/components/DomainProjet";

import Footer from "@/components/Footer";
import HeroRealisation from "@/components/HeroRealisation";
import Navigation from "@/components/Navigation";

const Realisations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroRealisation/>

      
      <DomainProjet/>

      <Footer />
    </div>
  );
};

export default Realisations;