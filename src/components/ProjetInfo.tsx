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
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F8FCF9] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center flex-wrap text-sm text-gray-600 mb-8">
          <span className="hover:text-[#146C2D] transition-colors cursor-pointer">Accueil</span>
          <span className="text-[#146C2D] mx-2">▶</span>
          <span className="hover:text-[#146C2D] transition-colors cursor-pointer">Domaines</span>
          <span className="text-[#146C2D] mx-2">▶</span>
          <span className="capitalize text-[#146C2D] font-semibold">{domain.title}</span>
        </nav>

        {/* Main Card */}
        <div
          className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ease-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#146C2D] to-[#22A55D] p-8 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full mb-4">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span className="text-sm font-medium uppercase tracking-wide">
                    {domain.title}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold mt-2">
                  {project.title}
                </h1>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-semibold">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl font-light mb-6">
                {project.description}
              </p>
              
              {/* Gallery Info */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="flex items-center space-x-2 text-gray-500 mt-8 pt-6 border-t border-gray-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">
                    {project.gallery.length} photo{project.gallery.length > 1 ? 's' : ''} disponible{project.gallery.length > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12">
            <GallerySection gallery={project.gallery} title={project.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjetInfo;