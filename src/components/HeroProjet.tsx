import React from "react";
import { motion } from "framer-motion";
import heroactivites from "@/assets/hero.jpg";

const HeroProjet = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle scale animation */}
      <motion.img
        src={heroactivites}
        alt="Projet AADEC"
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
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          UN APERCU DES REALISATION DE L'AADEC
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroProjet;
