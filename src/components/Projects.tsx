import { domainsData } from "@/data/db";
import { NavLink } from "react-router-dom";

const Projects = ({ domainSlug }) => {
  const domain = domainsData.find(d => d.slug === domainSlug);

  if (!domain) return (
    <div className="py-12 text-center">
      <p className="text-red-600 font-semibold">❌ Domaine introuvable</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-[#146C2D]">
        {domain.title}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {domain.projects.map(project => (
          <div
            key={project.id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            {/* الصورة مع overlay عند hover */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-30 transition-opacity rounded-t-2xl"></div>
            </div>

            {/* المحتوى */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
              <NavLink to={`/projets/${domain.slug}/${project.slug}`}>
                <button className="mt-3 px-5 py-2 bg-[#146C2D] text-white rounded-lg font-semibold hover:bg-[#0f4d21] transition">
                  Voir Détails
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
