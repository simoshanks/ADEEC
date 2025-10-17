import React from "react";
import { MapPin } from "lucide-react";

const MapFAQ = () => {
  return (
    <section className="bg-[#F5FCF8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Titre */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-[#146C2D] mr-2" />
            <span className="text-[#146C2D] font-semibold text-sm uppercase tracking-wider">
              Nous Trouver
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
            Notre Localisation
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto mt-6 rounded-full shadow-md"></div>

          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Venez nous rencontrer dans nos bureaux pour discuter de vos projets.
          </p>
        </div>

        {/* 🗺️ Carte Google */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[24rem] lg:h-[28rem] border border-[#22A55D]/20">
          <iframe
            title="Localisation Azilal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2194.7701387153033!2d-6.566941678856704!3d31.966371000662647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda49a8f23f2a3e5%3A0x6daba4de3ff8425f!2sJardin%2020%20Ao%C3%BBt!5e0!3m2!1sfr!2sma!4v1760367079996!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapFAQ;
