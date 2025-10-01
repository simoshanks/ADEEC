import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import HistorySection from "@/components/HistorySection";
import Navigation from "@/components/Navigation";

const Apropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroAbout />
      <HistorySection />

      <Footer />
    </div>
  );
};

export default Apropos;
