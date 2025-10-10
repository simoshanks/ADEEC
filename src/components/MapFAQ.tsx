import React from "react";
import { MapPin } from "lucide-react";



const MapFAQ = () => {
  return (
    <div>
      {/* Map Section */}
<section className="bg-[#F5FCF8] py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Notre Localisation
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Venez nous rencontrer dans nos bureaux pour discuter de vos projets
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[24rem] lg:h-[28rem]">
      <iframe
        title="Notre Localisation"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d423.10111580544583!2d-6.565432174979275!3d31.96607997229538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1759883777735!5m2!1sfr!2sma"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


     
    </div>
  );
};

export default MapFAQ;
