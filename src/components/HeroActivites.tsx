import React from "react";
import { motion } from "framer-motion";
import heroactivites from "@/assets/hero.jpg";

const HeroActivites = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle scale animation */}
      <motion.img
        src={heroactivites}
        alt="Activités AADEC"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      {/* Overlay Gradient with animated opacity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Nos Projets Réalisés
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Découvrez nos projets actuels qui œuvrent pour l’éducation, 
          l’environnement, la citoyenneté et la solidarité.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroActivites;
