import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const AboutActule = ({ projet }) => {
  if (!projet) return null;

  return (
    <section className="w-full py-20 bg-[#F5FCF8]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-3/5 w-full max-w-lg mx-auto">
          <Swiper
            modules={[EffectCube, Pagination, Autoplay]}
            effect="cube"
            grabCursor={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            speed={2500}
            cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 40, shadowScale: 1 }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {projet.gallery.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="md:w-2/5 w-full text-[#000]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{projet.titre}</h2>
          <p className="text-lg leading-relaxed">{projet.descriptionLongue}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutActule;
