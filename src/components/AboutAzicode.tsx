import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function AboutAzicode() {
  return (
    <section className="w-full py-20 bg-[#F5FCF8]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left column - Swiper */}
        <div className="md:w-3/5 w-full max-w-lg mx-auto">
          <Swiper
  modules={[EffectCube, Pagination, Autoplay]}
  effect="cube"
  grabCursor={true}
  autoplay={{
    delay: 1000,           // delay between transitions 0, on glide
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  speed={2500}          // duration of one cube rotation in ms
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 40,
    shadowScale: 1,
  }}
  loop={true}
  pagination={{ clickable: true }}
  className="rounded-xl"
>
  <SwiperSlide>
    <img
      src="https://picsum.photos/id/1015/500/300"
      alt="Slide 1"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      src="https://picsum.photos/id/1016/500/300"
      alt="Slide 2"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      src="https://picsum.photos/id/1018/500/300"
      alt="Slide 3"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      src="https://picsum.photos/id/1020/500/300"
      alt="Slide 4"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>
</Swiper>

        </div>

        {/* Right column - Text */}
        <div className="md:w-2/5 w-full text-[#000]">
          <h2 className="text-[36px] md:text-[48px] font-extrabold mb-6">
            À propos d'Azicode
          </h2>
          <p className="text-lg leading-relaxed">
            AZICODE 62 est une école de codage innovante qui accompagne les
            étudiants dans leur parcours de développement. Nous offrons des
            formations pratiques et adaptées aux besoins du marché, avec un
            suivi personnalisé et un environnement stimulant pour apprendre le
            développement web, mobile et plus encore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutAzicode;
