import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projetsActuels } from "@/data/db.js";

const ActiviteDetail = () => {
  const { id } = useParams();
  const projet = projetsActuels.find((p) => p.id.toString() === id);

  const [selectedImage, setSelectedImage] = useState(
    projet?.gallery && projet.gallery.length > 0 ? projet.gallery[0] : projet?.image
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!projet) {
    return <p className="text-center text-red-500 py-12">Projet non trouvé.</p>;
  }

  const currentIndex = projet.gallery.indexOf(selectedImage);
  const showNext = () => {
    const nextIndex = (currentIndex + 1) % projet.gallery.length;
    setSelectedImage(projet.gallery[nextIndex]);
  };
  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + projet.gallery.length) % projet.gallery.length;
    setSelectedImage(projet.gallery[prevIndex]);
  };

  return (
    <section className="bg-[#F0F5F2] min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Layout principal */}
        <div className="flex flex-col md:flex-row">
          {/* Colonne gauche (Image principale) */}
          <div className="md:w-1/2 w-full">
            <img
              src={projet.image}
              alt={projet.titre}
              className="w-full h-full object-cover rounded-l-2xl md:rounded-r-none md:rounded-l-2xl"
            />
          </div>

          {/* Colonne droite (Infos) */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-extrabold  text-[#146C2D]">{projet.titre}</h1>
              <p className="text-gray-500 mb-4">Démarré en {projet.annee}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{projet.descriptionLongue}</p>
            </div>

            <Link
              to="/activites"
              className="mt-auto inline-block px-6 py-3 bg-[#146C2D] text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
            >
              ← Retour aux activités
            </Link>
          </div>
        </div>

        {/* Gallery */}
        {projet.gallery && projet.gallery.length > 0 && (
          <div className="p-8">
            <div className="flex justify-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
            GALLERY
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
          </h2>
        </div>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image grande */}
              <div className="md:w-2/3 w-full">
                <img
                  src={selectedImage}
                  alt="selected"
                  className="w-full h-96 object-cover rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setIsLightboxOpen(true)}
                />
              </div>

              {/* Thumbnails */}
              <div className="md:w-1/3 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-3">
                {projet.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Projet ${projet.titre} - ${index + 1}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                      selectedImage === img
                        ? "border-green-600 scale-105"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-green-500 transition"
            onClick={() => setIsLightboxOpen(false)}
          >
            ×
          </button>

          <button
            className="absolute left-6 text-white text-4xl font-bold hover:text-green-500 transition"
            onClick={showPrev}
          >
            ‹
          </button>

          <img
            src={selectedImage}
            alt="Zoom"
            className="max-h-[80%] max-w-[90%] rounded-2xl shadow-2xl transition-all"
          />

          <button
            className="absolute right-6 text-white text-4xl font-bold hover:text-green-500 transition"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default ActiviteDetail;
