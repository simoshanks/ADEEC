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
    <div className="bg-[#F8F8F8]">
      <div className="w-full max-w-5xl mx-auto">
       {/* Title */}
        <div className="flex justify-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
            GALERIE
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
          </h2>
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
