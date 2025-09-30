import { useParams } from "react-router-dom";
import { domainsData } from "@/data/db";

const ProjetInfo = () => {
  const { domainSlug, projectSlug } = useParams();

  const domain = domainsData.find(d => d.slug === domainSlug);
  if (!domain) return <p className="text-red-600">❌ Domaine introuvable</p>;

  const project = domain.projects.find(p => p.slug === projectSlug);
  if (!project) return <p className="text-red-600">❌ Projet introuvable</p>;

  return (
    <div>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg shadow mb-6" />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {project.gallery.map((img, idx) => (
          <img key={idx} src={img} alt={`${project.title} ${idx}`} className="w-full h-40 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default ProjetInfo;
