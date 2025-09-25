
import heroImage from '@/assets/hero.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          <p className="text-lg md:text-xl text-secondary mb-8">
            Votre plateforme de gestion de stock et de commandes
          </p>
          
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full ">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
      <button>test  </button>
    </section>
  );
};

export default HeroSection;