import React from "react";
import { motion } from "framer-motion";

const SolutionActule = ({ projet }) => {
  if (!projet) return null;

  // 🔹 Color mapping professionnel
  const colorMap = {
    green: { 
      bg: "bg-green-50", 
      text: "text-green-600",
      gradient: "from-green-500 to-emerald-600",
      light: "bg-green-500/10"
    },
    blue: { 
      bg: "bg-blue-50", 
      text: "text-blue-600",
      gradient: "from-blue-500 to-cyan-600",
      light: "bg-blue-500/10"
    },
    purple: { 
      bg: "bg-purple-50", 
      text: "text-purple-600",
      gradient: "from-purple-500 to-indigo-600",
      light: "bg-purple-500/10"
    },
    orange: { 
      bg: "bg-orange-50", 
      text: "text-orange-600",
      gradient: "from-orange-500 to-amber-600",
      light: "bg-orange-500/10"
    },
    indigo: { 
      bg: "bg-indigo-50", 
      text: "text-indigo-600",
      gradient: "from-indigo-500 to-blue-600",
      light: "bg-indigo-500/10"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-28 bg-[#F5FCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🎯 En-tête avec badge élégant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
        
          <div className="inline-flex items-center px-4 py-2 bg-[#146C2D] backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Notre Approche
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solution <span className="bg-[#146C2D] bg-clip-text text-transparent">Innovante</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {projet.solutionIntro}
          </p>
        </motion.div>

        {/* 🎯 Grille de solutions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projet.solutions.map((item, i) => {
            const colors = colorMap[item.color] || colorMap.blue;

            return (
              <motion.div
                key={i}
                variants={cardVariants as any}
                whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl shadow-md hover:shadow-2xl border border-gray-200 bg-white p-8 flex flex-col h-full transition-all duration-500"
              >
                {/* Effet de fond léger au hover */}
                <div className={`absolute inset-0 ${colors.light} rounded-3xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Badge + Icône */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-white/30 to-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-lg font-bold ${colors.text}`}>0{i + 1}</span>
                  </div>

                  <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                </div>

                {/* Contenu */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug tracking-wide group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow mb-6">{item.description}</p>

                {/* Ligne décorative */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className={`w-12 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section d'appel à l'action supplémentaire */}

      </div>
    </section>
  );
};

export default SolutionActule;
