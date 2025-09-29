import aboutImg from '@/assets/hero.jpg';
import { useEffect, useState } from 'react';

export default function Test() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex items-center justify-center py-12 bg-[#F5FCF8]">
      {/* Container dyal card + overflow-hidden */}
      <div className="relative w-full md:w-[80%] rounded-2xl overflow-hidden">
        {/* الصورة كخلفية ديال card */}
        <img
          src={aboutImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay شفاف + content */}
        <div className="relative z-10 bg-gray-500/40 backdrop-blur-xl rounded-2xl p-6 flex flex-col md:flex-row gap-8 shadow-2xl">
          
          {/* الصورة الجانبية */}
          <div className="w-full md:w-3/5 h-[30rem]">
            <img
              src={aboutImg}
              alt="Nature"
              className="rounded-xl object-cover w-full h-full shadow-lg"
            />
          </div>

          {/* النصوص */}
          <div
            className={`w-full md:w-2/5 md:pl-6 flex flex-col justify-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block text-sm font-semibold text-[#146C2D] bg-[#ecf8ef] px-3 py-1 rounded-full mb-4">
              Qui sommes-nous
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#146C2D] to-[#0f4d21] bg-clip-text text-transparent">
              Association Azilal pour le Développement, l’Environnement et la
              Communication (AADEC)
            </h2>

            <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-6">
              Créée à Azilal, l’AADEC œuvre pour le développement durable et la
              protection de l’environnement tout en favorisant la communication et
              la sensibilisation citoyenne. L’association accompagne des
              initiatives locales, soutient des projets éducatifs, culturels et
              sociaux afin d’améliorer les conditions de vie et de renforcer la
              solidarité dans la région.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                aria-label="En savoir plus sur AADEC"
                onClick={() => (window.location.href = "/about")}
                className="px-6 py-3 bg-[#146C2D] text-white rounded-lg font-semibold text-sm shadow hover:bg-[#0f4d21] focus:outline-none focus:ring-2 focus:ring-[#146C2D] focus:ring-offset-2 transition"
              >
                En savoir plus
              </button>

              <button
                type="button"
                aria-label="Découvrir nos projets"
                onClick={() => (window.location.href = "/projects")}
                className="px-6 py-3 border border-[#146C2D] text-[#146C2D] rounded-lg font-semibold text-sm hover:bg-[#ecf8ef] focus:outline-none focus:ring-2 focus:ring-[#146C2D] focus:ring-offset-2 transition"
              >
                Nos réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
