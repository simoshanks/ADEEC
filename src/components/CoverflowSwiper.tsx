import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function CoverflowSwiper() {
  const slides = [
    "https://picsum.photos/id/1015/400/500",
    "https://picsum.photos/id/1016/400/500",
    "https://picsum.photos/id/1018/400/500",
    "https://picsum.photos/id/1020/400/500",
    "https://picsum.photos/id/1024/400/500",
    "https://picsum.photos/id/1021/400/500",
    "https://picsum.photos/id/1022/400/500",
    "https://picsum.photos/id/1023/400/500",
    "https://picsum.photos/id/1025/400/500",
  ];

  return (
    <div className="bg-[#F5FCF8]">
      <div className="w-full max-w-5xl mx-auto">
       {/* Title */}
        <div className="text-center mb-12 lg:mb-14">
            <div className="inline-flex items-center px-4 py-2 bg-[#146C2D] backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              GALERIE
            </span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto mt-6 rounded-full"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Quelques moments du parcours de l'AADEC
          </p>
        </div>

        {/* 🎞️ Swiper */}
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: true,
          }}
          allowTouchMove={false}
          className="rounded-xl"
        >
          {slides.map((src, index) => (
            <SwiperSlide
              key={index}
              className="w-64 h-80 flex justify-center items-center"
            >
              <div
                className="w-48 h-60 rounded-xl overflow-hidden border-4 border-white"
                style={{
                  boxShadow: "0 10px 25px #D59B49",
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
