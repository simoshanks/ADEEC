import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const GalerieActule = ({ gallery }) => {
  return (
    <section id="galerie" className="py-16 bg-[#F5FCF8]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Galerie Photos
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          className="h-96 w-full"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index} className="!w-80 !h-96">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-full">
                <img
                  src={image}
                  alt={`Azicode ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-semibold">Image {index + 1}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      Découvrez nos réalisations
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Style personnalisé pour les contrôles Swiper */}
        <style >{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #3b82f6;
            background: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px;
            font-weight: bold;
          }

          .swiper-pagination-bullet {
            background: #cbd5e1;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: #3b82f6;
          }
        `}</style>
      </div>
    </section>
  );
};

export default GalerieActule;