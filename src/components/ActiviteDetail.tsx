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
        const prevIndex =
            (currentIndex - 1 + projet.gallery.length) % projet.gallery.length;
        setSelectedImage(projet.gallery[prevIndex]);
    };

    return (
        <section className="bg-[#f8f8f8] min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                {/* Layout principal */}
                <div className="flex flex-col md:flex-row">
                    {/* Colonne gauche (Image principale) */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={projet.image}
                            alt={projet.titre}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Colonne droite (Infos فقط) */}
                    <div className="md:w-1/2 w-full p-6 flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">{projet.titre}</h1>
                        <p className="text-gray-500 mb-4">Démarré en {projet.annee}</p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {projet.descriptionLongue}
                        </p>

                        <div className="mt-auto">
                            <Link
                                to="/activites"
                                className="px-5 py-2 bg-[#146C2D] text-white rounded-md hover:bg-green-700 transition"
                            >
                                ← Retour aux activités
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Galerie (مقسومة بجوج) */}
                {projet.gallery && projet.gallery.length > 0 && (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Gallery du projet
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* الصورة الكبيرة */}
                            <div className="md:w-2/3 w-full">
                                <img
                                    src={selectedImage}
                                    alt="selected"
                                    className="w-full h-96 object-cover rounded-lg shadow-md cursor-pointer"
                                    onClick={() => setIsLightboxOpen(true)}
                                />
                            </div>

                            {/* الصور الصغيرة */}
                            <div className="md:w-1/3 w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-2">
                                {projet.gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Projet ${projet.titre} - ${index + 1}`}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition ${selectedImage === img
                                                ? "border-green-600"
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
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        ×
                    </button>

                    <button
                        className="absolute left-6 text-white text-4xl font-bold"
                        onClick={showPrev}
                    >
                        ‹
                    </button>

                    <img
                        src={selectedImage}
                        alt="Zoom"
                        className="max-h-[80%] max-w-[90%] rounded-lg shadow-lg"
                    />

                    <button
                        className="absolute right-6 text-white text-4xl font-bold"
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
