import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 👉 Import images from assets
import slide1 from "../assets/bag.jpg";
import slide2 from "../assets/bg1.jpg";
import slide3 from "../assets/bg2.jpg";

import slide4 from "../assets/heroAbt.jpg";
import slide5 from "../assets/bg4.jpg";
import slide6 from "../assets/bg5.jpg";

import slide7 from "../assets/bg3.jpg";
import slide8 from "../assets/bag.jpg";
import slide9 from "../assets/greenbg.jpg";

const HistorySection = () => {
  const milestones = [
    {
      year: "Avant 2006",
      images: [slide1, slide2, slide3],
      title: "Festival d’Azilal",
      desc: "Notre association était principalement responsable de l’organisation du Festival d’Azilal, un rendez-vous culturel et artistique qui rassemblait la population locale et mettait en avant les talents de la région."
    },
    {
      year: "2006",
      images: [slide4, slide5, slide6],
      title: "Un tournant décisif",
      desc: "À partir de 2006, l’association a commencé à réorienter ses actions, passant de la simple organisation d’événements culturels à une réflexion plus profonde sur le développement communautaire et l’accompagnement de la jeunesse."
    },
    {
      year: "Aujourd'hui",
      images: [slide7, slide8, slide9],
      title: "Vers le développement durable",
      desc: "Aujourd’hui, l’association concentre ses efforts sur des projets de développement social, culturel et durable, ouvrant ainsi de nouvelles perspectives pour les générations futures."
    }
  ];

  const [currentIndices, setCurrentIndices] = useState(Array(milestones.length).fill(0));
  const [fadeIn, setFadeIn] = useState(Array(milestones.length).fill(true));

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(Array(milestones.length).fill(false)); // start fade-out

      setTimeout(() => {
        setCurrentIndices((prev) =>
          prev.map((currIndex, i) => (currIndex + 1) % milestones[i].images.length)
        );
        setFadeIn(Array(milestones.length).fill(true)); // fade-in next
      }, 500); // wait 0.5s before showing next
    }, 4000); // every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#F5FCF8] py-20 overflow-hidden">
      {/* Title */}
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
          NOTRE HISTOIRE ?
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
        </h2>
      </div>

      <div className="space-y-32">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Fading image with custom style */}
            <div className="w-full lg:w-1/2 relative h-80">
              <div className={`w-full h-full relative overflow-hidden 
                ${index % 2 === 0 ? "rounded-r-full" : "rounded-l-full"} 
                shadow-2xl drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)]`}>
                
                {item.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${item.title} - ${imgIndex}`}
                    className={`
                      absolute inset-0 w-full h-full object-cover
                      transition-opacity duration-1000 ease-in-out
                      ${currentIndices[index] === imgIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-1/2 px-6 text-gray-800">
              <p className="text-sm uppercase tracking-wider text-green-600 mb-2 border-l-4 border-green-600 pl-3">
                {item.year}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-green-600 hover:underline font-semibold"
              >
                Lire plus <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;
