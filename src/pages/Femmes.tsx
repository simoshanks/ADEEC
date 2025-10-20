
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import { projetsActuels } from "@/data/db";
import HeroActule from "@/components/HeroActule";
import AboutActule from "@/components/AboutActule";
import ProblemActule from "@/components/ProblemActule";
import SolutionActule from "@/components/SolutionActule";
import ContactActule from "@/components/ContactActule";


const Femmes = () => {
     const projet = projetsActuels.find(p => p.slug === "centre-femmes");

  if (!projet) return <p>Projet non trouvé</p>;
  return (
    <div className="min-h-screen bg-background">
      <Topbar/>
      <Navigation />
      <HeroActule projet={projet} />
      <AboutActule projet={projet} />
      <ProblemActule projet={projet} />
      <SolutionActule projet={projet} />
      <ContactActule projet={projet} />
      

      <Footer />
    </div>
  );
};

export default Femmes;