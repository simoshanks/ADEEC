
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import { projetsActuels } from "@/data/db";
import HeroActule from "@/components/HeroActule";
import AboutActule from "@/components/AboutActule";
import ProblemActule from "@/components/ProblemActule";
import SolutionActule from "@/components/SolutionActule";
import GalerieActule from "@/components/GalerieActule";

const Prisonniers = () => {
       const projet = projetsActuels.find(p => p.slug === "reinsertion-prisonniers");

  if (!projet) return <p>Projet non trouvé</p>;
  return (
    <div className="min-h-screen bg-background">
      <Topbar/>
      <Navigation />
      <HeroActule projet={projet} />
      <AboutActule projet={projet} />
      <ProblemActule projet={projet} />
      <SolutionActule projet={projet} />
      <GalerieActule gallery={projet.gallery} />

      <Footer />
    </div>
  );
};

export default Prisonniers;