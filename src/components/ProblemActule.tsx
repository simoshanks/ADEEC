import problematique from "../assets/problem.jpeg";

const ProblemActule = ({ projet }) => {
  if (!projet) return null;

  return (
    <section className="py-20 bg-[#F5FCF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-[#146C2D] backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Problématique
            </span>
          </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Défis et enjeux actuels
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {projet.problematique}
            </p>
            
            {projet.problemPoints && (
              <div className="space-y-4">
                {projet.problemPoints.map((point, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#D59B49] rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="w-2 h-2 bg-[#D59B49] rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image avec cadre sophistiqué */}
  <div className="relative">
  {/* 🔹 effet lumineux autour */}
  <div className="absolute -inset-4 bg-[#D59B49] rounded-2xl opacity-20 blur-lg"></div>

  {/* 🔹 carte principale */}
  <div className="relative bg-[#F5FCF8] p-8 rounded-2xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
    {/* 🖼️ image plein cadre */}
    <div className="relative w-full h-96 rounded-xl overflow-hidden">
      <img
        src={problematique}
        alt="Illustration de la problématique"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    {/* 🔹 texte en bas */}
    <div className="absolute bottom-6 left-6 right-6 bg-[#F5FCF8] backdrop-blur-sm rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-600 text-center font-medium">
        Analyse et résolution des défis identifiés
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ProblemActule;