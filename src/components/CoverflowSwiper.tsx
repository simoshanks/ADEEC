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
      <div className="flex justify-center mb-12 sm:mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D4A1F] uppercase tracking-tight mb-3">
            GALLERY
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto rounded-full"></div>

        </div>
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
                  boxShadow: "0 10px 25px #146C2D",
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
