import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import HistorySection from "@/components/HistorySection";
import MissionVision from "@/components/MissionVision";
import Navigation from "@/components/Navigation";

const Apropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroAbout />
      <HistorySection />
      <MissionVision/>

      <Footer />
    </div>
  );
};

export default Apropos;
