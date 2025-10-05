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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar/>
      <Navigation />
      <HeroSection />
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
