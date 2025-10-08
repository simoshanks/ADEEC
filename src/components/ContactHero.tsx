import React from "react";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#146C2D] to-[#22A55D] py-20 lg:py-28 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contactez-Nous</h1>
        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
          Nous sommes à votre écoute pour toute question ou collaboration
        </p>
      </div>
    </section>
  );
};

export default ContactHero;