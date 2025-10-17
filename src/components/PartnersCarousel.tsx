import { useState, useEffect } from "react";
import { categoriesPartenaires } from "@/data/db.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnersCarousel() {
  // ✅ نحتافظ غير بالشركاء اللي عندهم logo
  const partenaires = categoriesPartenaires
    .flatMap((cat) => cat.partenaires)
    .filter((p) => p.logo && p.logo.trim() !== ""); 

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5); // عدد العناصر المرئية

  // تحديد عدد العناصر المرئية حسب حجم الشاشة
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) { // موبايل
        setVisibleCount(2);
      } else if (window.innerWidth < 768) { // تابلت صغير
        setVisibleCount(3);
      } else if (window.innerWidth < 1024) { // تابلت
        setVisibleCount(4);
      } else { // ديسكتوب
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? partenaires.length - visibleCount : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (partenaires.length - visibleCount + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <div className="w-full bg-white py-6 md:py-8">
      <div className="relative overflow-hidden w-full max-w-6xl mx-auto group">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / visibleCount}%)`,
            width: `${(partenaires.length * 100) / visibleCount}%`,
          }}
        >
          {partenaires.map((p, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center shrink-0 px-2 md:px-4"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[120px] mx-auto">
                <img
                  src={p.logo}
                  alt={p.nom}
                  className="h-12 md:h-16 w-full object-contain mb-1 md:mb-2"
                />
              </div>
              <p className="hidden sm:block text-gray-700 text-center text-xs md:text-sm mt-1 md:mt-2 px-1">
                {p.nom}
              </p>
              {/* اسم الشريك على الموبايل - نص أصغر */}
              <p className="sm:hidden text-gray-600 text-center text-[10px] mt-1 px-1 leading-tight">
                {p.nom.length > 20 ? `${p.nom.substring(0, 20)}...` : p.nom}
              </p>
            </div>
          ))}
        </div>

        {/* أسهم التنقل - محسنة للشاشات الصغيرة */}
        <button
          onClick={prevSlide}
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-[#D59B49] hover:bg-[#c58c40] p-1 md:p-2 rounded-full shadow-md opacity-70 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="الشريك السابق"
        >
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-[#D59B49] hover:bg-[#c58c40] p-1 md:p-2 rounded-full shadow-md opacity-70 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="الشريك التالي"
        >
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </button>

        {/* مؤشرات النقاط للشاشات الصغيرة */}
        <div className="flex justify-center mt-4 md:hidden space-x-1">
          {Array.from({ length: Math.ceil(partenaires.length / visibleCount) }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                dotIndex === index ? 'bg-[#D59B49]' : 'bg-gray-300'
              }`}
              aria-label={`انتقل إلى مجموعة ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}