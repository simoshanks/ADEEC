import React, { useEffect, useRef, useState } from "react";
import { categoriesPartenaires } from "@/data/db";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Partenairetype = () => {
  const normalize = (str: string) => str.trim().toLowerCase();

  const horizontalCategories = categoriesPartenaires.filter((c) =>
    ["bailleurs de fonds", "les réseaux"].includes(normalize(c.titre))
  );
  const normalCategories = categoriesPartenaires.filter(
    (c) => !["bailleurs de fonds", "les réseaux"].includes(normalize(c.titre))
  );

  const horizontalCategoriesOrdered = [
    ...horizontalCategories.filter((c) => normalize(c.titre) === "bailleurs de fonds"),
    ...horizontalCategories.filter((c) => normalize(c.titre) === "les réseaux"),
  ];

  const scrollRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});

  // كشف حجم الشاشة وتحسين الأداء
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // إيقاف التمرير التلقائي على الموبايل
      if (mobile) setIsPaused(true);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll Desktop only - الإصلاح هنا
  useEffect(() => {
    if (isMobile) return;

    const intervals = scrollRefs.current.map((ref, index) => {
      if (!ref) return null;

      const scrollSpeed = 1;
      let scrollDirection = 1; // 1 for right, -1 for left

      return setInterval(() => {
        if (!isPaused && ref) {
          const maxScroll = ref.scrollWidth - ref.clientWidth;
          const currentScroll = ref.scrollLeft;
          
          // تغيير الاتجاه عندما نصل للنهاية أو البداية
          if (currentScroll >= maxScroll - 1) {
            scrollDirection = -1; // تغيير إلى اليسار
          } else if (currentScroll <= 1) {
            scrollDirection = 1; // تغيير إلى اليمين
          }
          
          ref.scrollLeft += scrollSpeed * scrollDirection;
        }
      }, 20);
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, [isPaused, isMobile]);

  // أو استخدم هذا البديل الأبسط للإعادة من البداية
  useEffect(() => {
    if (isMobile) return;

    const intervals = scrollRefs.current.map((ref) => {
      if (!ref) return null;

      const scrollSpeed = 1;

      return setInterval(() => {
        if (!isPaused && ref) {
          const maxScroll = ref.scrollWidth - ref.clientWidth;
          ref.scrollLeft += scrollSpeed;

          // عندما نصل للنهاية، نرجع للبداية بسلاسة
          if (ref.scrollLeft >= maxScroll - 2) {
            // إعادة سلسة للبداية
            setTimeout(() => {
              ref.scrollTo({
                left: 0,
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      }, 20);
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, [isPaused, isMobile]);

  const handleScroll = (ref: HTMLDivElement | null, direction: "left" | "right") => {
    if (!ref) return;
    const distance = isMobile ? 200 : 300;
    ref.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // التعامل مع السحب بالإصبع على الموبايل
  const handleTouchStart = (e: React.TouchEvent, refIndex: number) => {
    if (!scrollRefs.current[refIndex]) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRefs.current[refIndex]!.offsetLeft);
    setScrollLeft(scrollRefs.current[refIndex]!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent, refIndex: number) => {
    if (!isDragging || !scrollRefs.current[refIndex]) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollRefs.current[refIndex]!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRefs.current[refIndex]!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // تحميل الصور
  const handleImageLoad = (partenaireId: string) => {
    setImagesLoaded(prev => ({...prev, [partenaireId]: true}));
  };

  // التمرير إلى نقطة محددة
  const scrollToIndex = (refIndex: number, dotIndex: number) => {
    const ref = scrollRefs.current[refIndex];
    if (!ref) return;
    
    const scrollWidth = ref.scrollWidth;
    const itemWidth = scrollWidth / horizontalCategoriesOrdered[refIndex].partenaires.length;
    ref.scrollTo({
      left: itemWidth * dotIndex * 3,
      behavior: 'smooth'
    });
  };

  // إعادة البداية يدوياً إذا لزم الأمر
  const resetScroll = (refIndex: number) => {
    const ref = scrollRefs.current[refIndex];
    if (ref) {
      ref.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#146C2D] rounded-full mb-4 sm:mb-6 shadow-md shadow-emerald-100">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-white font-medium text-xs sm:text-sm uppercase tracking-wider">
              Nos Partenaires Stratégiques
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span className="bg-[#146C2D] bg-clip-text text-transparent">
              Réseau de Confiance
            </span>
            <br />
            <span className="text-gray-800 font-light text-lg sm:text-xl md:text-2xl lg:text-3xl">
              et d'Expertise
            </span>
          </h2>

          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-[#146C2D] mx-auto mb-6 sm:mb-8 rounded-full shadow-sm"></div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-2">
            Des partenariats solides avec des institutions de référence pour un
            impact durable et une expertise partagée dans nos actions.
          </p>
        </div>

        {/* CATEGORIES HORIZONTALES */}
        {horizontalCategoriesOrdered.map((categorie, index) => (
          <div key={categorie.id} className="relative mb-12 sm:mb-16 lg:mb-24">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#146C2D] mb-2 sm:mb-3">
                {categorie.titre}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-light px-4">
                {categorie.description}
              </p>
              

            </div>

            <div
              className="relative group max-w-6xl mx-auto"
              onMouseEnter={() => !isMobile && setIsPaused(true)}
              onMouseLeave={() => !isMobile && setIsPaused(false)}
            >
              {/* أزرار التنقل - مخفية على الموبايل */}
              <button
                onClick={() => handleScroll(scrollRefs.current[index], "left")}
                aria-label={`تمرير ${categorie.titre} إلى اليسار`}
                className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#146C2D] p-1.5 sm:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-10"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={() => handleScroll(scrollRefs.current[index], "right")}
                aria-label={`تمرير ${categorie.titre} إلى اليمين`}
                className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#146C2D] p-1.5 sm:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-10"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              <div
                ref={(el) => (scrollRefs.current[index] = el)}
                className={`flex space-x-3 sm:space-x-4 lg:space-x-6 px-3 sm:px-4 lg:px-6 ${
                  isMobile ? "overflow-x-auto scroll-smooth" : "overflow-hidden"
                }`}
                onTouchStart={(e) => handleTouchStart(e, index)}
                onTouchMove={(e) => handleTouchMove(e, index)}
                onTouchEnd={handleTouchEnd}
              >
                <div className="scroll-track flex space-x-3 sm:space-x-4 lg:space-x-6">
                  {categorie.partenaires.map((partenaire, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 flex flex-col items-center bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 min-w-[140px] sm:min-w-[160px] lg:min-w-[200px] p-3 sm:p-4 lg:p-6 border border-gray-100 group/item"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-gray-25 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 lg:mb-4 group-hover/item:scale-105 sm:group-hover/item:scale-110 transition-transform duration-300 shadow-inner">
                        {partenaire.logo ? (
                          <div className="relative">
                            <img
                              src={partenaire.logo}
                              alt={partenaire.nom}
                              loading="lazy"
                              onLoad={() => handleImageLoad(partenaire.id)}
                              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-700 ${
                                imagesLoaded[partenaire.id] ? 'opacity-100' : 'opacity-0'
                              }`}
                            />
                            {!imagesLoaded[partenaire.id] && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                            )}
                          </div>
                        ) : (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover/item:scale-105 transition-transform duration-300">
                            <span className="text-white font-bold text-xs sm:text-sm px-1 text-center leading-tight">
                              {partenaire.nom
                                .split(" ")
                                .slice(0, 2)
                                .map(w => w[0] || '')
                                .join("")
                                .toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight line-clamp-2">
                        {partenaire.nom}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* مؤشرات التمرير للنقاط */}
              {isMobile && (
                <div className="flex justify-center mt-4 space-x-2">
                  {categorie.partenaires.slice(0, Math.ceil(categorie.partenaires.length / 3)).map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => scrollToIndex(index, dotIndex)}
                      className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#146C2D] transition-colors duration-300"
                      aria-label={`الانتقال إلى الشريحة ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* باقي الكود بدون تغيير */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {normalCategories.map((categorie, categoryIndex) => (
            <div
              key={categorie.id}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <div className="mb-3 sm:mb-4 lg:mb-5 flex justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#D59B49] text-white font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 border border-white text-sm sm:text-base lg:text-lg">
                      {categoryIndex + 1}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#D59B49] mb-2 sm:mb-3">
                    {categorie.titre}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-light max-w-md mx-auto">
                    {categorie.description}
                  </p>
                </div>

                <div className="max-h-48 sm:max-h-60 lg:max-h-80 overflow-y-auto pr-2 sm:pr-3 custom-scrollbar space-y-2 sm:space-y-3">
                  {categorie.partenaires.map((partenaire, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gray-25 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-emerald-100 group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center mr-2 sm:mr-3 lg:mr-4 group-hover/item:scale-105 sm:group-hover/item:scale-110 transition-transform duration-300 border">
                        {partenaire.logo ? (
                          <div className="relative">
                            <img
                              src={partenaire.logo}
                              alt={partenaire.nom}
                              loading="lazy"
                              onLoad={() => handleImageLoad(partenaire.id)}
                              className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300 ${
                                imagesLoaded[partenaire.id] ? 'opacity-100' : 'opacity-0'
                              }`}
                            />
                            {!imagesLoaded[partenaire.id] && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
                            )}
                          </div>
                        ) : (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              {partenaire.nom
                                .split(" ")
                                .slice(0, 2)
                                .map(w => w[0] || '')
                                .join("")
                                .toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
<h4 className="font-medium text-gray-700 text-xs sm:text-sm lg:text-base flex-1 leading-snug break-words text-center">
  {partenaire.nom}
</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION D'INVITATION */}
        <div className="mt-12 sm:mt-16 lg:mt-24 bg-gradient-to-br from-[#146C2D] to-[#0b4720] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Vous souhaitez devenir partenaire ?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Rejoignez notre réseau de partenaires et participez activement au
            développement durable et inclusif de nos communautés.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/80 bg-white/5 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-105 transform backdrop-blur-md hover:shadow-xl"
            >
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D59B49;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Partenairetype;