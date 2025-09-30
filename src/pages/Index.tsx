import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OtherSection from '@/components/OtherSection';

import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      

      <AboutSection/>
      
      <OtherSection />
      <ConfianceSection />
      
      <Footer />
    </div>
  );
};

export default Index;
