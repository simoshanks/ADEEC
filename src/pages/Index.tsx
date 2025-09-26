import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OtherSection from '@/components/OtherSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import Carousel from '@/components/Carousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Carousel />

      <AboutSection />
      <OtherSection />
      <ConfianceSection />
      
      <Footer />
    </div>
  );
};

export default Index;
