import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";

import MapFAQ from "@/components/MapFAQ";
import ContactMain from "@/components/ContactMain";






const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />

      
      <ContactMain/>
      
      
      <MapFAQ />

      <Footer />
    </div>
  );
};

export default Contact;
