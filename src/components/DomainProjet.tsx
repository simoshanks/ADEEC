import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { domainsData } from "@/data/db.js";

const Domains = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-12 bg-[#F5FCF8]">
      <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
            LES DOMAINS DES PROJETS
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {domainsData.map((domain) => (
            <div
              key={domain.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/projets/${domain.slug}`)}
            >
              {/* الصورة */}
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-48 object-cover"
              />

              {/* Overlay gradient أقوى */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* المحتوى فوق الصورة */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 p-6">
                {/* العنوان مع background نصف شفاف و shadow */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-white px-4 py-1 bg-black/50 rounded drop-shadow-lg">
                  {domain.title}
                </h3>

                <NavLink
                  to={`/projets/${domain.slug}`}
                  className="px-6 py-2 rounded-lg font-semibold bg-[#146C2D] hover:bg-[#0f4d21] text-white transition"
                >
                  Voir les Projets
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
