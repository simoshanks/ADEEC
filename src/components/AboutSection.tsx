

const AboutSection = () => {
 

  return (
    <section className="bg-[#f8f8f8] py-16 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/image/about img.jpg"
            alt="Notre entreprise"
            className="w-full rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Qui sommes-nous ? Gamaz</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Nous sommes une entreprise spécialisée dans la construction et la distribution d'eau potable, 
            avec plus de 20 ans d'expérience dans le domaine.
            Notre mission est de fournir des infrastructures durables et de qualité, 
            tout en respectant les normes environnementales.
          </p>
          <button
            onClick={() => window.location.href = "/about"}
            className="mt-6 bg-white text-[#cc5d21] border-2 border-[#cc5d21] px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-[#cc5d21] hover:text-white"
          >
            En savoir plus
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;