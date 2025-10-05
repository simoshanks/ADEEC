import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { domainsData } from "@/data/db";
import GallerySection from "./GallerySection";

const ProjetInfo = () => {
  const { domainSlug, projectSlug } = useParams();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Find domain & project
  const domain = domainsData.find((d) => d.slug === domainSlug);
  if (!domain) return <p className="text-red-600 text-center py-6">❌ Domaine introuvable</p>;

  const project = domain.projects.find((p) => p.slug === projectSlug);
  if (!project) return <p className="text-red-600 text-center py-6">❌ Projet introuvable</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F8FCF9]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#146C2D]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#22A55D]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap text-sm text-gray-600 mb-8">
            <span>Accueil</span>
            <span className="text-[#146C2D] mx-1">▶</span>
            <span>Domaines</span>
            <span className="text-[#146C2D] mx-1">▶</span>
            <span className="capitalize">{domain.name}</span>
            <span className="text-[#146C2D] mx-1">▶</span>
            <span className="text-[#146C2D] font-semibold">{project.title}</span>
          </nav>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 lg:space-y-8">
                {/* Category Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-[#146C2D]/10 rounded-full">
                  <span className="w-2 h-2 bg-[#146C2D] rounded-full mr-2"></span>
                  <span className="text-[#146C2D] font-semibold text-sm uppercase tracking-wide">{domain.name}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#146C2D] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Année</p>
                      <p className="text-lg font-semibold text-gray-900">{project.year}</p>
                    </div>
                  </div>

                  {project.duration && (
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#22A55D] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Durée</p>
                        <p className="text-lg font-semibold text-gray-900">{project.duration}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Visual Card */}
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-[#146C2D] to-[#22A55D] rounded-2xl p-8 lg:p-12 text-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#146C2D] to-[#22A55D] rounded-2xl opacity-50 blur-xl"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Projet Réussi</h3>
                    <p className="text-white/80 leading-relaxed">
                      Un projet soigneusement exécuté avec expertise et professionnalisme,
                      démontrant notre engagement envers l'excellence.
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#146C2D]/10 rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#22A55D]/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <GallerySection gallery={project.gallery} title={project.title} />
        </div>
      )}
    </div>
  );
};

export default ProjetInfo;
