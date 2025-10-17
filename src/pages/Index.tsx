import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OtherSection from '@/components/ProjectSection';

import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import CoverflowSwiper from '@/components/CoverflowSwiper';
import Topbar from '@/components/Topbar';
import VideoSection from '@/components/VideoSection';
import PartnersCarousel from '@/components/PartnersCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5FCF8]">
      <Topbar/>
      <Navigation />
      
      <HeroSection />
      <PartnersCarousel/>
      <AboutSection/>
      <ProjectSection/>
      <VideoSection/>
      <ConfianceSection />
      <CoverflowSwiper />
      <Footer />
    </div>
  );
};

export default Index;
