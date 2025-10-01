import { useParams } from "react-router-dom";
import { domainsData } from "@/data/db";

const ProjetInfo = () => {
  const { domainSlug, projectSlug } = useParams();

  const domain = domainsData.find(d => d.slug === domainSlug);
  if (!domain) return <p className="text-red-600 text-center py-6">❌ Domaine introuvable</p>;

  const project = domain.projects.find(p => p.slug === projectSlug);
  if (!project) return <p className="text-red-600 text-center py-6">❌ Projet introuvable</p>;

  return (
    <section className="bg-gradient-to-b from-[#e6f2ed] to-[#f5fcf8] py-16 px-4 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] mb-6 text-center">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 text-center">
          {project.description}
        </p>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition hover:scale-105 hover:shadow-xl">
                <img
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjetInfo;
