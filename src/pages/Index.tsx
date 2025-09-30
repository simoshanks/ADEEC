import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OtherSection from '@/components/ProjectSection';

import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      

      <AboutSection/>
      
      <ProjectSection/>
      <ConfianceSection />
      
      <Footer />
    </div>
  );
};

export default Index;
