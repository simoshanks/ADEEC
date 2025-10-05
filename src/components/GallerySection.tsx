import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const GallerySection = ({ gallery, title }) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#146C2D]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#22A55D]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#146C2D]/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#146C2D] rounded-full mr-2"></span>
            <span className="text-[#146C2D] font-semibold text-sm uppercase tracking-wider">
              Gallery
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galerie du Projet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les visuels et réalisations de notre projet {title}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          loop={true}
          spaceBetween={30}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 80, modifier: 2.5, slideShadows: false }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 20, coverflowEffect: { depth: 50, modifier: 1.5 } },
            640: { slidesPerView: 1.3, spaceBetween: 25 },
            768: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 2.8, spaceBetween: 40 },
            1280: { slidesPerView: 3.2, spaceBetween: 50 }
          }}
          className="!pb-16"
        >
          {gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-80 lg:h-96 overflow-hidden bg-gray-100">
                  <img
                    src={img}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Image Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 font-semibold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-1">{title}</h3>
                      <p className="text-white/80 text-sm">Image {index + 1} de {gallery.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gallery Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            {gallery.length} {gallery.length > 1 ? 'images' : 'image'} disponible{gallery.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
