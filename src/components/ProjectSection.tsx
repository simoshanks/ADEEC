import React, { useState, useEffect } from "react";
import { projetsActuels } from "@/data/db";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // الانتقال للسلايد التالي
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % projetsActuels.length);
  };

  // الانتقال للسلايد السابق
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === 0 ? projetsActuels.length - 1 : prev - 1
    );
  };

  // إيقاف الـ animation بعد انتهاء التحويل
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Slider automatic
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 lg:py-20 bg-[#F5FCF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-[#146C2D] backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Projets en Cours
            </span>
          </div>

          <div className="w-20 h-1 bg-[#22A55D] mx-auto mt-6 rounded-full"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Découvrez nos projets actuels qui reflètent notre expertise et notre engagement envers l'excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projetsActuels.map((project, index) => (
            <div
              key={project.id}
              onClick={() => window.location.href = `/Activites/${project.slug}`}
              className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-5 lg:p-6 relative">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {project.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {project.date || "En cours"}
                  </span>
                  <span className="text-[#146C2D] text-sm font-semibold hover:text-[#D59B49] transition-colors">
                    Voir plus →
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D59B49] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CustomSlider;
