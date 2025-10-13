import React from "react";
import { categoriesPartenaires } from "@/data/db";

const Partenairetype = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 🟢 العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Réseau de Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des alliances stratégiques qui renforcent notre expertise 
            et élargissent notre champ d'action
          </p>
        </div>

        {/* 🔹 Grille des catégories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categoriesPartenaires.map((categorie) => (
            <div
              key={categorie.id}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {categorie.titre}
                </h3>
                <p className="text-gray-600">{categorie.description}</p>
              </div>

              {/* Liste des partenaires */}
              <div className="space-y-4">
                {categorie.partenaires.map((partenaire, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-4 rounded-xl hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {partenaire.nom.split(" ").map((word) => word[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {partenaire.nom}
                        </h4>
                        <p className="text-sm text-gray-500">{partenaire.secteur}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        Partenaire
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Devenez Partenaire</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires privilégiés et bénéficiez 
              d'opportunités de collaboration uniques
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partenairetype;
