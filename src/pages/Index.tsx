import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OtherSection from '@/components/OtherSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import Carousel from '@/components/Carousel';
import Test from '@/components/Test';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Test />
      

      <AboutSection />
      
      <OtherSection />
      <ConfianceSection />
      
      <Footer />
    </div>
  );
};

export default Index;
