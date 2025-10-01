import React from "react";
import { projetsActuels } from "@/data/db.js";
import { NavLink } from "react-router-dom";

const ActivitesActul = () => {
  return (
    <section className="py-12 px-6 bg-[#f8f8f8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
       <div className="flex justify-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
            NOS ACTIVITÉS
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
          </h2>
        </div>
        <p className="text-gray-600 text-base md:text-lg">
          Découvrez les principaux projets en cours menés par l’AADEC.
        </p>
      </div>

      {/* Grid des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projetsActuels.map((projet) => (
          <div
            key={projet.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
          >
            {/* Image carrée uniforme avec overlay */}
            <div className="w-full aspect-square relative overflow-hidden">
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* overlay léger */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Contenu */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
                {projet.titre}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                {projet.description}
              </p>
              <NavLink
                to={`/activites/${projet.id}`}
                className="mt-auto px-4 py-2 bg-[#146C2D] text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-center text-sm md:text-base"
              >
                Lire plus
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitesActul;
