import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full py-16 bg-[#F5FCF8] flex flex-col items-center">
      {/* Title */}
      <div className="flex justify-center mb-12 sm:mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#146C2D] mb-4">
            NOS REALISATION
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#146C2D] to-[#22A55D] mx-auto rounded-full"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          vidéo de nos projets avec entités européennes
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="w-full max-w-4xl relative overflow-hidden rounded-xl shadow-lg">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/S5aY8uFPRWw"

            title="Notre Présentation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
