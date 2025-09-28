import React from "react";
import { projetsActuels } from "@/data/db.js";
import { NavLink } from "react-router-dom";

const ActivitesActul = () => {
  return (
    <section className="py-12 px-6 bg-[#f8f8f8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Nos Activités
        </h2>
        <p className="text-gray-600 text-base">
          Découvrez les principaux projets en cours menés par l’AADEC.
        </p>
      </div>

      {/* Grid des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projetsActuels.map((projet) => (
          <div
            key={projet.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
          >
            {/* Image carrée uniforme */}
            <div className="w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                {projet.titre}
              </h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {projet.description}
              </p>
              <NavLink
                to={`/activites/${projet.id}`}
                className="px-3 py-1 bg-[#146C2D] text-white text-xs font-semibold rounded-md hover:bg-green-700 transition text-center"
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
