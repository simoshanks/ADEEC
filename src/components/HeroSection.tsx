import hero1 from '@/assets/bg1.jpg';
import hero2 from '@/assets/bg2.jpg';
import hero3 from '@/assets/bg5.jpg';
import { useState, useEffect } from 'react';

const slides = [
  { image: hero1, phrase: "AADEC: 25 ans de travail au service du développement." },
  { image: hero2, phrase: "De l'organisation du 1ᵉʳ festival local en 2001; jusqu'aux projets actuels en 2025: un quart de siècle de travail sérieux." },
  { image: hero3, phrase: "Ensemble, construisons un avenir meilleur." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-zoomSlow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-opacity duration-1000 ease-in-out">
          {slides[current].phrase}
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          l’AADEC a opté pour une stratégie de « développement par le bas »
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => (window.location.href = "/about")} className="bg-[#146C2D] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300">
            Nos Réalisations
          </button>
          <button onClick={() => (window.location.href = "/support")} className="bg-white text-[#146C2D] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#146C2D] hover:text-white transition-all duration-300">
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
