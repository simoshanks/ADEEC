import ActiviteDetail from "@/components/ActiviteDetail";
import Footer from "@/components/Footer";
import HeroActivitedetail from "@/components/HeroActivitedetail";
import Navigation from "@/components/Navigation";

const Activitesdetail = () => {
  return (
    <div className="min-h-screen bg-[#f0f5f2]">
      <Navigation />
      <HeroActivitedetail/>
      <ActiviteDetail/>
      

      <Footer />
    </div>
  );
};

export default Activitesdetail;