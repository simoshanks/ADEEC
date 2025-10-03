import React from "react";
import { confianceCards } from "../data/db.js"; // بدّل المسار حسب فين عندك الداتا

const Value = () => {
  return (
    <section className="w-full px-4 py-20 bg-[#F5FCF8]">
      <div className="flex justify-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
          NOS VALEURS
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
        </h2>
      </div>

      {/* 5 دواير */}
      <ul className="flex justify-center items-start gap-6 md:gap-10 flex-wrap">
        {confianceCards.map((card, idx) => (
          <li key={idx} className="list-none flex flex-col items-center">
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
