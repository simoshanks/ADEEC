import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import { projetsActuels } from "@/data/db";
import logoazicode from "../assets/projetactuel/azicode/logoazicode.jpg";
import GalerieActule from "@/components/GalerieActule";


const Azicode = () => {
  const projet = projetsActuels.find(p => p.slug === "Azicode-62");

  if (!projet) {
    return (
      <div className="min-h-screen bg-background">
        <Topbar />
        <Navigation />
        <div className="flex justify-center items-center h-64">
          <p>Projet non trouvé</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Image de fond avec overlay gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${projet.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 lg:px-8">

          {/* Badge d'année */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-sm font-medium text-white/90">Depuis {projet.annee}</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight " >
            Ecole du Codage <span className="text-[#0877BC]">Azicode</span><span className="text-[#212759]">62</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-light text-gray-200 leading-relaxed">
            {projet.description}
          </p>

          {/* Séparateur */}
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <button className="group relative bg-[#0877BC] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 min-w-[160px]">
              <span className="flex items-center justify-center gap-2">
                Site Web
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => {
                const gallerySection = document.getElementById("galerie");
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[160px]"
            >
              <span className="flex items-center justify-center gap-2">
                Voir la Galerie
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>


        </div>

        {/* Effets décoratifs */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Section Description Longue */}
      <section className="py-16 bg-[#F5FCF8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">À propos du projet</h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            {projet.descriptionLongue}
          </p>
        </div>
      </section>

      {/* Section Problématique */}
      <section className="py-16 bg-[#F5FCF8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">La problématique</h2>
              <p className="text-lg text-gray-600 mb-6">
                A l'ère du dévloppement numérique,de nombreux jeunes de la ville d'azilal
                 son confrontés des difficultés
                d'insertion professionnelle due au manque de compétences numériques
                adaptées aux besoins du marché.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Chômage élevé chez les jeunes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Manque de formation pratique en programmation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Écart entre formation académique et besoins des entreprises</span>
                </li>
              </ul>
            </div>
<div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center">
  <img
    src={logoazicode}
    alt="logo"
    className="max-h-80 w-auto object-contain rounded-lg"
  />
</div>

          </div>
        </div>
      </section>

      {/* Section Solution */}
      <section className="py-20 bg-[#F5FCF8] from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Notre Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Une approche complète pour former les développeurs de demain et faciliter leur insertion professionnelle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Formation Intensive</h3>
                <p className="text-gray-600 leading-relaxed">Bootcamps de programmation full-stack avec technologies modernes et méthodologies agiles pour une montée en compétences rapide.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                  <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pédagogie Pratique</h3>
                <p className="text-gray-600 leading-relaxed">Apprentissage par projets concrets et études de cas réels pour développer des compétences directement applicables en entreprise.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                  <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégration Professionnelle</h3>
                <p className="text-gray-600 leading-relaxed">Stage sur le terrain à l'issue de la formation pour valoriser les compétences acquises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Galerie */}
<GalerieActule gallery={projet.gallery} />

      <Footer />
    </div>
  );
};

export default Azicode;