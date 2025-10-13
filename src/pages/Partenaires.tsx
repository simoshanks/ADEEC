import Footer from "@/components/Footer";

import Navigation from "@/components/Navigation";
import Partenairetype from "@/components/Partenairetype";
import Topbar from "@/components/Topbar";

const Partenaires = () => {
  


  return (
    <div className="min-h-screen bg-background">
      <Topbar/>
      <Navigation />
      <Partenairetype/>
      <Footer />
    </div>
  );
};

export default Partenaires;