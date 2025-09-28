import hero from '@/assets/hero.jpg';
import { useState, useEffect } from 'react';

const phrases = [
  
  "AADEC: 25 ans de travail au service du développement .",
  "De l'organisation du 1ᵉʳ festival local en 2001; jusqu'aux projets actuels en 2025: un quart de siècle de travail sérieux.",
  "Ensemble, construisons un avenir meilleur.",
 
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover scale-105 animate-zoomSlow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {phrases[currentPhrase]}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
           l’AADEC a opté pour une stratégie de « développement par le bas » 
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.location.href = "/about"}
            className="bg-[#146C2D] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Nos Réalisations
          </button>
          <button
            onClick={() => window.location.href = "/support"}
            className="bg-white text-[#146C2D] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#146C2D] hover:text-white transition-all duration-300"
          >
            Contactez-nous
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="block w-1.5 h-8 rounded-full border-2 border-white animate-bounce"></span>
      </div>

      {/* Zoom Animation */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1.05); }
        }
        .animate-zoomSlow {
          animation: zoomSlow 20s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
