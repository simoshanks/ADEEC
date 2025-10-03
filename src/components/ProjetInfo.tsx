import { useParams } from "react-router-dom";
import { domainsData } from "@/data/db";
import { useEffect, useState } from "react";

const ProjetInfo = () => {
  const { domainSlug, projectSlug } = useParams();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // appear on load
    return () => clearTimeout(timer);
  }, []);

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
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 bg-[#F5FCF8]">
      {/* Section principale du projet */}
      <section className="w-full relative rounded-2xl p-6">

        {/* Right content (animated) */}
       <div
  className={`text-white rounded-tr-[80px] rounded-bl-[80px] border-2 border-[#146C2D] flex flex-col justify-center min-h-[500px] relative z-10 pl-24 pr-6 py-12 max-w-[800px] mx-auto
    transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
  style={{
    background: 'linear-gradient(to bottom, #146C2D, #F5FCF8)'
  }}
>
          <h1 className="text-2xl font-bold text-[#146C2D] mb-6 uppercase tracking-wide ml-8">
            {project.title}
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6 text-left font-medium tracking-wide">
            {project.description}
          </p>
          <div className="text-center text-[#146C2D]">
            <span className="font-semibold">Année: </span>{project.year}
          </div>
        </div>

        {/* Left Image (animated, responsive) */}
        <div className={`z-20 lg:absolute lg:top-1/4 lg:-left-12 relative mt-8 lg:mt-0 mx-auto lg:mx-0
          transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="h-[350px] w-[270px] overflow-hidden rounded-xl border-2 border-[#146C2D]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
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
