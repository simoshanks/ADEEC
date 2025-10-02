import { useParams } from "react-router-dom";
import { domainsData } from "@/data/db";

const ProjetInfo = () => {
  const { domainSlug, projectSlug } = useParams();

  const domain = domainsData.find((d) => d.slug === domainSlug);
  if (!domain)
    return (
      <p className="text-red-600 text-center py-6">❌ Domaine introuvable</p>
    );

  const project = domain.projects.find((p) => p.slug === projectSlug);
  if (!project)
    return (
      <p className="text-red-600 text-center py-6">❌ Projet introuvable</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Section principale du projet */}
      <section className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image principale */}
        <div className="h-80 w-full overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu à droite */}
        <div className="p-8 flex flex-col justify-start flex-1 bg-gray-50 rounded-r-2xl shadow-inner">
          <h1 className="text-4xl font-extrabold mb-6 text-green-800 text-center md:text-left">
            {project.title}
          </h1>

          {/* Description longue avec scroll si nécessaire */}
          <div className="mb-6 text-gray-700 leading-relaxed text-lg max-h-[500px] overflow-y-auto pr-2">
            {project.description}
          </div>

          {/* Détails */}
          <div className="flex flex-col gap-4 text-gray-700 font-medium">
            <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
              <span className="font-bold text-green-700"> Année</span>
              <span>{project.year}</span>
            </div>


          </div>
        </div>
      </section>

      {/* Galerie */}
      {project.gallery && project.gallery.length > 0 && (
        <section>
          <h2 className="text-3xl font-extrabold mb-8 text-green-800 text-center underline underline-offset-8">
            Galerie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={img}
                  alt={`${project.title} - image ${index + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjetInfo;
