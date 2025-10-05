import aboutImg from '@/assets/greenbg.jpg';
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center py-12 lg:py-20 overflow-hidden">
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#146C2D]/90 via-[#146C2D]/80 to-[#0f4d21]/90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-24 right-32 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Qui sommes-nous
            </span>
          </div>

          {/* Titles */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
            Association Azilal pour le{' '}
            <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Développement
            </span>
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-white/90 mb-6">
            Environnement et Communication (AADEC)
          </h2>

          {/* Description */}
          <div className="space-y-3 mb-8 max-w-3xl mx-auto lg:mx-0">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
              Créée à Azilal, l'AADEC œuvre pour le développement durable et la protection de
              l'environnement tout en favorisant la communication et la sensibilisation citoyenne.
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
              L'association accompagne des initiatives locales, soutient des projets éducatifs,
              culturels et sociaux pour renforcer la solidarité dans la région.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-white/70 text-sm font-medium">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-white/70 text-sm font-medium">Années d'Expérience</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={() => (window.location.href = '/Apropos')}
              className="group relative px-6 py-3 bg-white text-[#146C2D] rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center space-x-2">
                <span>En savoir plus</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={() => (window.location.href = '/projects')}
              className="group relative px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Nos réalisations</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
