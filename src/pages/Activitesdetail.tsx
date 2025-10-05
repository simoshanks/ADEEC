import ActiviteDetail from "@/components/ActiviteDetail";
import Footer from "@/components/Footer";
import HeroActivitedetail from "@/components/HeroActivitedetail";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";

const Activitesdetail = () => {
  return (
    <div className="min-h-screen bg-[#f0f5f2]">
      <Topbar/>
      <Navigation />
      <HeroActivitedetail/>
      <ActiviteDetail/>
      

      <Footer />
    </div>
  );
};

export default Activitesdetail;