import hero1 from '@/assets/heroAADEC.jpg';
import hero2 from '@/assets/herofistival.jpg';
import hero3 from '@/assets/imagehero.jpg';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: hero1,
    phrase: "AADEC: 25 ans de travail au service du développement.",
    subtitle: "Un quart de siècle d'engagement pour le développement durable",
  },
  {
    image: hero2,
    phrase: "De l'organisation du 1ᵉʳ festival local en 2001 jusqu'aux projets actuels en 2025",
    subtitle: "25 ans d'innovation et de travail sérieux pour notre région",
  },
  {
    image: hero3,
    phrase: "Ensemble, construisons un avenir meilleur.",
    subtitle: "Votre partenaire de confiance pour le développement local",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ⏱️ تغيير السلايد كل 12 ثانية
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 12000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 800);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden pt-16 md:pt-24 lg:pt-28">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out
            ${index === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
        >
          <img
            src={slide.image}
            alt="Hero Background"
            className="w-full h-full object-cover animate-zoom"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center mt-4 md:mt-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Main Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl px-2">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-green-200 bg-clip-text text-transparent">
              {slides[current].phrase}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg px-4">
            {slides[current].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5 mb-8 md:mb-12 px-4">
            <button
              onClick={() => {
                const videoSection = document.getElementById("video");
                if (videoSection) {
                  videoSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group w-full sm:w-auto flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#D59B49] text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-xl md:shadow-2xl transition-all duration-300 hover:bg-[#c58c40] hover:scale-105 transform hover:shadow-2xl border border-emerald-400/30 animate-float-btn"
            >
              Découvrir nos réalisations
            </button>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="group w-full sm:w-auto flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white/80 bg-white/5 text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-white hover:scale-105 transform backdrop-blur-md hover:shadow-2xl animate-float-btn"
            >
              Contactez-nous
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-2 md:space-x-3 mb-6 md:mb-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center justify-center rounded-full transition-all duration-500 ${
                index === current
                  ? "bg-white text-[#D59B49] shadow-lg w-8 h-2 md:w-12 md:h-3"
                  : "bg-white/30 hover:bg-white/50 w-2 h-2 md:w-3 md:h-3"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            >
              {index === current && (
                <span className="text-xs font-bold hidden md:inline">{index + 1}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet and up */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hidden sm:flex"
        aria-label="Slide précédent"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hidden sm:flex"
        aria-label="Slide suivant"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Mobile Navigation Dots - More visible on mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 sm:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
          .animate-zoom { 
            animation: zoom 20s ease-in-out infinite; 
          }

          @keyframes floatBtn {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          .animate-float-btn { 
            animation: floatBtn 3s ease-in-out infinite; 
          }

          /* تحسينات للشاشات الصغيرة جداً */
          @media (max-width: 360px) {
            .text-2xl {
              font-size: 1.5rem;
            }
            .text-base {
              font-size: 0.875rem;
            }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;