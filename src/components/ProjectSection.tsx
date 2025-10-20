import React, { useState, useEffect, useRef } from "react";
import { projetsActuels } from "@/data/db";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 🔁 الانتقال التلقائي بين السلايدات
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

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

  // إيقاف الأنميشن بعد 0.5 ثانية
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative py-16 lg:py-20 bg-[#F5FCF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* العنوان */}
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-[#146C2D] rounded-full border border-white/20 mb-6">
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

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projetsActuels.map((project, index) => (
            <LazyCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomSlider;

// 🔹 مكون خاص بالكارت (فيه Lazy loading و Animation)
const LazyCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "150px", threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => (window.location.href = `/Activites/${project.slug}`)}
      className={`cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-700 transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ willChange: "opacity, transform" }}
    >
      {/* الصورة */}
      <div className="relative h-52 lg:h-60 overflow-hidden">
        {visible ? (
          <img
            src={project.image}
            alt={project.titre}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          // Placeholder قبل ما تبان الصورة
          <div className="w-full h-full bg-gray-100 animate-pulse"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>
        <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1">
          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Projet {index + 1}
          </span>
        </div>
      </div>

      {/* المحتوى */}
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
  );
};
