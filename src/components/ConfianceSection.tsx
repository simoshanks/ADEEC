import React from "react";
import { confianceCards } from "@/data/db"; 
import bg from "@/assets/greenbg.jpg";

const ConfianceSection = () => {
  return (
    <section className="bg-[#F5FCF8] py-20 w-full">
      {/* Title */}
      <div className="flex justify-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
          NOS VALEURS
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-12 px-6">
        {confianceCards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg text-center p-8 relative bg-cover bg-center border w-full
                       transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0  backdrop-blur-md rounded-xl z-0 transition duration-300 hover:bg-black/20"></div>

            {/* Circle image */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-24">
              <h3 className="text-xl font-semibold mb-4 capitalize text-white bg-black/40 p-2 rounded transition duration-300 hover:bg-black/30">
                {card.title}
              </h3>
              <p className="text-base text-white font-medium leading-relaxed  p-2 rounded transition duration-300 hover:bg-black/20">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConfianceSection;
