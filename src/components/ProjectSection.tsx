import React, { useState, useEffect } from "react";
import { projetsActuels } from "@/data/db";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % projetsActuels.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === 0 ? projetsActuels.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 lg:py-20 bg-[#F5FCF8] overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#146C2D]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#22A55D]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#146C2D]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-[#146C2D]/10 rounded-full mb-5">
            <span className="w-2 h-2 bg-[#146C2D] rounded-full mr-2"></span>
            <span className="text-[#146C2D] font-semibold text-sm uppercase tracking-wider">
              Projets en Cours
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#146C2D] mb-4">
            NOS ACTIVITÉS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto mt-6 rounded-full"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Découvrez nos projets actuels qui reflètent notre expertise et notre engagement envers l'excellence
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-[#146C2D] hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-300 z-20 border border-gray-100"
            disabled={isAnimating}
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-[#146C2D] hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-300 z-20 border border-gray-100"
            disabled={isAnimating}
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex justify-center items-center relative h-[420px] lg:h-[460px]">
            {projetsActuels.map((project, index) => {
              const offset = index - activeIndex;
              const distance = Math.abs(offset);

              let transformClass = "";
              let zIndex = "z-0";
              let opacity = "opacity-0";
              let scale = "scale-75";

              if (offset === 0) {
                transformClass = "translate-x-0";
                zIndex = "z-20";
                opacity = "opacity-100";
                scale = "scale-100";
              } else if (offset === -1) {
                transformClass = "translate-x-[-280px] lg:translate-x-[-320px]";
                zIndex = "z-10";
                opacity = "opacity-60";
                scale = "scale-90";
              } else if (offset === 1) {
                transformClass = "translate-x-[280px] lg:translate-x-[320px]";
                zIndex = "z-10";
                opacity = "opacity-60";
                scale = "scale-90";
              } else if (distance === 2) {
                transformClass = offset < 0 ? "translate-x-[-420px]" : "translate-x-[420px]";
                opacity = "opacity-20";
                scale = "scale-75";
              }

              return (
                <div
                  key={project.id}
                  onClick={() => (window.location.href = `/projects/${project.id}`)}
                  className={`absolute cursor-pointer transition-all duration-700 ease-out ${transformClass} ${zIndex} ${opacity} ${scale} ${isAnimating ? "pointer-events-none" : ""}`}
                  style={{ transitionProperty: 'transform, opacity, scale' }}
                >
                  <div className="w-72 lg:w-80 h-80 lg:h-[380px] bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden group hover:scale-[1.03] transition-all duration-500">
                    <div className="relative h-52 lg:h-60 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.titre}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>
                      <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                          Projet {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 lg:p-6 relative">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {project.titre}
                      </h3>
                    </div>

                    {offset === 0 && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D]"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-base">
            {activeIndex + 1} / {projetsActuels.length} Projets
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomSlider;
