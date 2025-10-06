import React from "react";
import { confianceCards } from "@/data/db"; 

const ConfianceSection = () => {
  return (
    <section className="bg-[#F5FCF8] py-16 sm:py-20 w-full relative overflow-hidden">
      {/* Title */}
      <div className="flex justify-center mb-12 sm:mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            NOS VALEURS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto rounded-full"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Les principes fondamentaux qui guident notre engagement et notre excellence
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6">
        {confianceCards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 overflow-hidden
                       transform hover:-translate-y-2 hover:scale-[1.01]"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Accent border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D]"></div>

            {/* Circle image */}
            <div className="absolute -top-1 sm:-top-0 md:-top-1 left-1/2 transform -translate-x-1/2 
                            w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20
                            group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="pt-20 sm:pt-24 md:pt-28 pb-6 px-3 sm:px-4 text-center relative z-10">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#146C2D] transition-colors duration-300">
                  {card.title}
                </h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-medium line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
                {card.description}
              </p>
            </div>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#146C2D]/5 to-[#22A55D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <div className="flex justify-center mt-12 relative z-10">
        <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-[#146C2D] to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default ConfianceSection;
