import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#f3fbf6] to-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Image card */}
        <div className="relative">
          {/* subtle gradient frame */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#eaf8ef] to-transparent blur-md opacity-70 -z-10" />

          <div className="rounded-2xl overflow-hidden bg-white shadow-xl transform hover:scale-105 transition-transform duration-500">
            {/* make logo nicely centered and responsive */}
            <img
              src={logo}
              alt="Logo AADEC"
              className="w-full h-72 md:h-96 object-contain p-8 bg-white"
            />
          </div>

          {/* small info badge */}
          <div className="hidden md:flex absolute -bottom-6 left-6 bg-white rounded-xl shadow-md px-4 py-3 items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#146C2D] text-white flex items-center justify-center font-semibold">
              A
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">
                Association AADEC
              </div>
              <div className="text-xs text-gray-500">
                Développement, Environnement et Communication
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Text/content */}
        <div
          className={`md:pl-6 transition-all duration-700 ${
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

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
            Créée à Azilal, l’AADEC œuvre pour le développement durable et la
            protection de l’environnement tout en favorisant la communication et
            la sensibilisation citoyenne. L’association accompagne des
            initiatives locales, soutient des projets éducatifs, culturels et
            sociaux afin d’améliorer les conditions de vie et de renforcer la
            solidarité dans la région.
          </p>

          {/* CTAs */}
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
    </section>
  );
};

export default AboutSection;
