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
<section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-24 sm:pt-28">

  {/* Background Slides */}
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
        index === current ? "opacity-100 z-0 scale-100" : "opacity-0 z-0 scale-105"
      }`}
    >
      <img
        src={slide.image}
        alt="Hero Background"
        className="w-full h-full object-cover transform scale-105"
      />
      {/* ✅ التعتيم نقصناه باش الصور يبانوا مزيان */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[#146C2D]/5 mix-blend-overlay"></div>
    </div>
  ))}

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
      className={`transition-all duration-1000 ease-out ${
        isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
      }`}
    >

      {/* Main Title */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
        <span className="bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
          {slides[current].phrase.split(":")[0]}
        </span>
        {slides[current].phrase.includes(":") && (
          <span className="block text-white mt-2 text-[clamp(1rem,2vw,1.5rem)]">
            {slides[current].phrase.split(":")[1]}
          </span>
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
        {slides[current].subtitle}
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
        L'AADEC a opté pour une stratégie de « développement par le bas » pour un impact durable et significatif.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <button
          onClick={() => (window.location.href = "/about")}
          className="group relative px-6 py-3 bg-[#146C2D] text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#22A55D] to-[#146C2D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center space-x-2">
            <span>Découvrir nos réalisations</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
          className="group relative px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
        >
          <span className="flex items-center space-x-2">
            <svg
              className="w-5 h-5"
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
    <div className="flex justify-center items-center space-x-3 mb-8">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            index === current
              ? "bg-white w-10"
              : "bg-white/40 hover:bg-white/60"
          }`}
          aria-label={`Aller au slide ${index + 1}`}
        />
      ))}
    </div>
  </div>

  {/* Tailwind Animation */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(180deg);
      }
    }
    .animate-float {
      animation: float linear infinite;
    }
  `}</style>
</section>
  );
};

export default HeroSection;
