import React, { useState } from "react";
import { projetsActuels } from "@/data/db";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projetsActuels.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projetsActuels.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 min-h-[700px] bg-[#F5FCF8] flex items-center">
  <div className="max-w-6xl mx-auto px-6 relative w-full">
    {/* Navigation buttons */}
<button
  onClick={prevSlide}
  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-[#146C2D] p-4  shadow-lg transition-all duration-300 z-20"
>
  <span className="text-2xl font-bold">‹</span>
</button>
<button
  onClick={nextSlide}
  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-[#146C2D] p-4  shadow-lg transition-all duration-300 z-20"
>
  <span className="text-2xl font-bold">›</span>
</button>


    {/* Cards */}
    <div className="flex justify-center items-center relative">
  {projetsActuels.map((project, index) => {
    const offset = index - activeIndex;

    let classes = "absolute transition-all duration-500 ";
    let cardSize = "w-96 h-96"; // مربع افتراضياً

    if (offset === 0) {
      classes += "scale-105 z-10 opacity-100 translate-x-0";
      cardSize = "w-96 h-96"; // وسطانية مربعة
    } else if (offset === -1) {
      classes += "scale-95 z-0 opacity-50 -translate-x-96 hover:opacity-85 cursor-pointer"; 
      cardSize = "w-96 h-96"; // يسار مربعة
    } else if (offset === 1) {
      classes += "scale-95 z-0 opacity-50 translate-x-96 hover:opacity-85 cursor-pointer"; 
      cardSize = "w-96 h-96"; // يمين مربعة
    } else {
      classes += "hidden";
    }

    return (
      <div
        key={project.id}
        className={`${classes} ${cardSize} overflow-hidden shadow-lg`}
      >
        <img
          src={project.image}
          alt={project.titre}
          className="w-full h-full object-cover"
        />
       
  {/* Overlay الكتابة + زر */}
  <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
    <h2 className="text-white text-xl font-bold mb-2">{project.titre}</h2>
    <button className="px-4 py-2 bg-white text-black font-semibold rounded  hover:bg-green-600 hover:text-white transition duration-300 pointer-events-auto">
      Voir Plus
    </button>
  </div>

  {/* charit تحت الكتابة والزر */}
   {offset === 0 && (
      <div className="absolute bottom-0 left-0 w-full h-5 bg-green-800 "></div>
    )}

</div>
    );
  })}
</div>


  </div>
</section>

  );
};

export default CustomSlider;
