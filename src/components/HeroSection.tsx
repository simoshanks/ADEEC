import hero1 from '@/assets/heroAADEC.jpg';
import hero2 from '@/assets/herofistival.jpg';
import hero3 from '@/assets/imagehero.jpg';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: hero1,
    phrase: "AADEC: 25 ans de travail au service du développement.",
    subtitle: "Un quart de siècle d'engagement pour le développement durable"
  },
  {
    image: hero2,
    phrase: "De l'organisation du 1ᵉʳ festival local en 2001 jusqu'aux projets actuels en 2025",
    subtitle: "25 ans d'innovation et de travail sérieux pour notre région"
  },
  {
    image: hero3,
    phrase: "Ensemble, construisons un avenir meilleur.",
    subtitle: "Votre partenaire de confiance pour le développement local"
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 6000);
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
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-24 sm:pt-28">

{/* Background Slides */}
{slides.map((slide, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out 
      ${index === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
  >
    {/* الصورة مع حركة الزوم الناعمة */}
    <img
      src={slide.image}
      alt="Hero Background"
      className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-in-out
        ${index === current ? "scale-110" : "scale-100"} animate-zoom`}
    />

    {/* ✅ خففنا التظليل باش تبان الصورة مزيان */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/20"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
    <div className="absolute inset-0 bg-[#146C2D]/5 mix-blend-overlay"></div>
  </div>
))}

{/* Animation Keyframes */}
<style>
  {`
    @keyframes zoom {
      0%, 100% {
        transform: scale(1.05);
      }
      50% {
        transform: scale(1.1);
      }
    }
    .animate-zoom {
      animation: zoom 12s ease-in-out infinite;
    }
  `}
</style>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center mt-8">
        <div
          className={`transition-all duration-1000 ease-out ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            }`}
        >

          {/* Main Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-green-50 to-green-100 bg-clip-text text-transparent">
              {slides[current].phrase.split(":")[0]}
            </span>
            {slides[current].phrase.includes(":") && (
              <span className="block text-white mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold drop-shadow-lg">
                {slides[current].phrase.split(":")[1]}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            {slides[current].subtitle}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
            L'AADEC a opté pour une stratégie de « développement par le bas » pour un impact durable et significatif.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12">
            <button
              onClick={() => (window.location.href = "/about")}
              className="group px-8 py-4 bg-[#146C2D] text-white rounded-xl font-bold text-lg shadow-2xl hover:bg-[#1D8F50] hover:shadow-3xl transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center space-x-3">
                <span>Découvrir nos réalisations</span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="group relative px-8 py-4 bg-transparent border-3 border-white text-white rounded-xl font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 transform shadow-xl"
            >
              <span className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Contactez-nous</span>
              </span>
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                ? "bg-white w-12 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

 

      {/* Tailwind Animation */}
<style>
  {`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(180deg);
      }
    }
    .animate-float {
      animation: float 20s linear infinite;
    }
  `}
</style>

    </section>
  );
};

export default HeroSection;