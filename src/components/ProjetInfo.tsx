import { useParams } from "react-router-dom";
import { domainsData } from "@/data/db";

const ProjetInfo = () => {
  const { domainSlug, projectSlug } = useParams();

  const domain = domainsData.find(d => d.slug === domainSlug);
  if (!domain) return <p className="text-red-600 text-center py-6">❌ Domaine introuvable</p>;

  const project = domain.projects.find(p => p.slug === projectSlug);
  if (!project) return <p className="text-red-600 text-center py-6">❌ Projet introuvable</p>;

  return (
    <section className="max-w-5xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
      {/* العنوان */}
      <h1 className="text-4xl font-extrabold mb-6 text-green-800 text-center">{project.title}</h1>
      
      {/* الصورة */}
      <div className="overflow-hidden rounded-xl shadow-md mb-8">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* الوصف */}
      <p className="mb-6 text-gray-700 leading-relaxed text-lg">{project.description}</p>

      {/* التفاصيل */}
      <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-green-700">📅 السنة:</span> {project.year}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-green-700">📍 المكان:</span> {project.location}
        </div>
      </div>
    </section>
  );
};

export default ProjetInfo;
