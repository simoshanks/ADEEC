import React from "react";
import { motion } from "framer-motion";

const SolutionActule = ({ projet }) => {
  if (!projet) return null;

  // 🔹 Mapping dyal colors Tailwind
  const colorMap = {
    green: { bg: "bg-green-100", text: "text-green-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    // zid colors li bghiti
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FBF9] to-[#E8F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🟢 عنوان القسم */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Notre Solution
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {projet.solutionIntro}
          </p>
        </div>

        {/* 🟢 البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projet.solutions.map((item, i) => {
            const colors = colorMap[item.color] || colorMap.green; // default green

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 p-8 hover:-translate-y-2"
              >
                {/* 🎯 الأيقونة */}
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className={`w-8 h-8 ${colors.text}`}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionActule;
