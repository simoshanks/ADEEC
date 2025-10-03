import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import HistorySection from "@/components/HistorySection";
import MissionVision from "@/components/MissionVision";
import Navigation from "@/components/Navigation";
import Value from "@/components/ValueI";

const Apropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroAbout />
      <HistorySection />
      <MissionVision/>
      <Value />

      <Footer />
    </div>
  );
};

export default Apropos;
