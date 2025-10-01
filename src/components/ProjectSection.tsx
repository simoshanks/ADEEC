import React from "react";
import { projetsActuels } from "@/data/db";

const ProjectSection = () => {
  const displayedProjects = projetsActuels.slice(0, 3);

  return (
    <section className="py-12 bg-[#F5FCF8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex justify-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#DCA250] uppercase tracking-wider relative">
            PROJETS ACTUELS
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
          </h2>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.titre}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white text-xl font-bold mb-2">{project.titre}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>
                <button
                  onClick={() => (window.location.href = "/about")}
                  className="px-4 py-2 border-2 border-white text-white rounded-md font-medium text-sm hover:bg-white hover:text-black transition"
                >
                  Voir le projet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
