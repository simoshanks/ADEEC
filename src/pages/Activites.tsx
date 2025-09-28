import ActivitesActul from "@/components/Activitesactule";
import Footer from "@/components/Footer";
import HeroActivites from "@/components/HeroActivites";
import Navigation from "@/components/Navigation";

const Activites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroActivites/>
      
      <ActivitesActul/>

      <Footer />
    </div>
  );
};

export default Activites;