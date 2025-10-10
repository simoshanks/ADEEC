import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";

import MapFAQ from "@/components/MapFAQ";
import ContactMain from "@/components/ContactMain";
import HeroContact from "@/components/HeroContact";







const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />
      <div className="h-[34px] bg-[#146C2D]"></div>
      <HeroContact/>

      
      <ContactMain/>
      
      
      
      <MapFAQ />

      <Footer />
    </div>
  );
};

export default Contact;
