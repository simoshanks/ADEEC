import hero from '@/assets/hero.jpg';
import { useState, useEffect } from 'react';

const phrases = [
  "Ensemble, construisons un avenir meilleur pour notre communauté.",
  "Agir aujourd'hui pour un changement durable demain.",
  "Votre engagement fait la différence."
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* الخلفية مع overlay */}
      <div className="absolute inset-0 z-0">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* النص */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 transition-opacity duration-700">
            {phrases[currentPhrase]}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl">
            Découvrez toutes nos activités et services de manière attractive et innovante.
          </p>
          <button className="bg-[#146C2D] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
