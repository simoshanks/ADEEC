import React from "react";
import { projetsActuels } from "@/data/db";
import aboutImg from "@/assets/greenbg.jpg";

const ProjectSection = () => {
  const displayedProjects = projetsActuels.slice(0, 3);

  return (
    <section className="py-12 bg-[#F5FCF8]">
      <div className="max-w-7xl mx-auto px-6">
<div className="flex justify-center mb-10">
  <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
    PROJETS ACTUELS
    <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
  </h2>
</div>


        {/* Container with background image + overlay */}
        <div className="relative w-full md:w-full rounded-2xl overflow-hidden mx-auto">
          {/* Background image */}
          <img
            src={aboutImg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Flow overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-tr from-[#146C2D]/40 via-[#146C2D]/10 to-transparent animate-pulse-slow rounded-2xl"></div>
          </div>

          {/* Content with backdrop blur */}
          <div className="relative z-20 bg-white/30 backdrop-blur-xl rounded-2xl p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#F5FCF8] shadow-md overflow-hidden flex flex-col text-center hover:shadow-lg transition-shadow duration-300 rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.titre}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow bg-[#F5FCF8]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.titre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                    <button
                      type="button"
                      aria-label="En savoir plus"
                      onClick={() => (window.location.href = "/about")}
                      className="self-center px-4 py-2 border-2 border-[#146C2D] text-[#146C2D] rounded-md font-medium text-xs hover:bg-[#146C2D] hover:text-white transition"
                    >
                      Voir le projet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
