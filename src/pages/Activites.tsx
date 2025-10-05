import ActivitesActul from "@/components/Activitesactule";
import Footer from "@/components/Footer";
import HeroActivites from "@/components/HeroActivites";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";

const Activites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar/>
      <Navigation />
      <HeroActivites/>
      
      

      <Footer />
    </div>
  );
};

export default Activites;