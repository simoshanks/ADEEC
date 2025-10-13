const ProblemActule = ({ projet }) => {
  if (!projet) return null;

  return (
    <section className="py-16 bg-[#F5FCF8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">La problématique</h2>
            <p className="text-lg text-gray-600 mb-6">{projet.problematique}</p>
            {projet.problemPoints && (
              <ul className="space-y-3">
                {projet.problemPoints.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center">
            <img
              src={projet.image}
              alt="Illustration"
              className="max-h-80 w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemActule;
