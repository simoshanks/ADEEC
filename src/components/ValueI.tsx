import React from "react";
import { confianceCards } from "../data/db.js"; // بدّل المسار حسب فين عندك الداتا

const Value = () => {
  return (
    <section className="w-full px-4 py-20 bg-[#F5FCF8]">
      <div className="text-center mb-12 lg:mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
          NOS VALEURS
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Grid responsive: 2 kolom f mobile, 3/4 f larger screens */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 justify-items-center">
        {confianceCards.map((card, idx) => (
          <li key={idx} className="flex flex-col items-center">
            {/* الصورة فدايرة */}
            <div
              className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl 
                         transition-transform duration-300 hover:scale-125 ease-in-out"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            {/* العنوان */}
            <p className="mt-3 text-base md:text-lg font-bold text-[#146C2D] text-center">
              {card.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Value;
