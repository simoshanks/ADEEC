import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjetInfo from "@/components/ProjetInfo";
import HeroActivites from "@/components/HeroActivites";

const ProjetDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <HeroActivites/>
      <Navigation />
      <main className="max-w-6xl mx-auto py-12 px-4">
        <ProjetInfo />
      </main>
      <Footer />
    </div>
  );
};

export default ProjetDetail;
