import Footer from "@/components/Footer";
import HeroPartenaire from "@/components/HeroPartenaire";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";

const Partenaires = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar/>
      <Navigation />
      <HeroPartenaire/>

      <Footer />
    </div>
  );
};

export default Partenaires;
