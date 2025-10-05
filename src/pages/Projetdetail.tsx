// ProjetDetail.jsx
import React from "react";
import ProjetInfo from "@/components/ProjetInfo"; 
import HeroProjet from "@/components/HeroProjet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const ProjetDetail = () => {
  return (
    <div className="bg-[#F5FCF8]">
      <Topbar/>
      <Navigation/>
      <HeroProjet/>
      <ProjetInfo />
      <Footer/>
    </div>
  );
};

export default ProjetDetail;
