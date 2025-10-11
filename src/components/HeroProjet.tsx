import React from "react";
import { motion } from "framer-motion";
import heroactivites from "@/assets/hero.jpg";

const HeroProjet = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* 🌄 Background Image with smooth zoom animation */}
      <motion.img
        src={heroactivites}
        alt="Projet AADEC"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      />

      {/* 🌈 Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" />

      {/* ✨ Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Small animated intro line */}
        <motion.p
          className="text-green-400 uppercase tracking-[6px] font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Nos Réalisations
        </motion.p>

        {/* Main Title with motion */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Découvrez les réalisations marquantes de l’AADEC
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          Fruits d’un engagement durable au service de la communauté et du développement local.
        </motion.p>


      </div>
    </section>
  );
};

export default HeroProjet;
