import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import HeroRealisation from "@/components/HeroRealisation";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const Projetdomains = () => {
  const { domainSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [domainSlug]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroRealisation />
      <Projects domainSlug={domainSlug} />
      <Footer />
    </div>
  );
};

export default Projetdomains;
