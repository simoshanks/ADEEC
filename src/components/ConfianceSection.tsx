import React from "react";
import { confianceCards } from "@/data/db"; // import cards from db
import bg from "@/assets/greenbg.jpg";

const ConfianceSection = () => {
  return (
    <section className="bg-[#F5FCF8] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
            POURQUOI NOUS CHOISIR ?
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-center py-12">
          {confianceCards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md text-center p-6 max-w-sm mx-auto relative bg-cover bg-center border" // 🚫 نحينا overflow-hidden
              style={{ backgroundImage: `url(${bg})` }}
            >
              {/* glass overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-lg z-0"></div>

              {/* Circle image */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-24">
                <h3 className="text-xl font-semibold mb-2 capitalize text-[#14A44D]">
                  {card.title}
                </h3>
                <p className="text-base text-gray-700 font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfianceSection;
