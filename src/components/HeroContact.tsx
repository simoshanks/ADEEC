import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import heroImg from "@/assets/heroAADEC.jpg";

function HeroContact() {
  const text = "Contactez-nous";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index < text.length) {
        timeout = setTimeout(type, 150);
      } else {
        timeout = setTimeout(() => {
          index = 0;
          setDisplayedText("");
          type();
        }, 3000);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F5FCF8] pb-32">
      {/* Gradient + content */}
      <div className="relative flex flex-col md:flex-row items-stretch z-10">
        <div
          className="absolute top-0 left-0 w-full md:w-[90%] h-[500px] md:h-[550px] 
                     bg-gradient-to-t from-[#F5FCF8] to-[#146C2D] rounded-br-[100px] z-0"
        ></div>

        {/* Left content */}
        <div className="md:w-2/5 w-full flex flex-col justify-center px-10 py-16 relative z-10">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-white mb-4">
              Prenons Contact
            </h2>
            <p className="text-lg text-gray mb-8">
              Appelez, écrivez ou trouvez votre chemin vers notre centre.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt className="w-5 h-5 text-white" />,
                  title: "Adresse",
                  text: "Quartier Administratif BP : 100 Azilal",
                  bg: "bg-[#146C2D]",
                },
                {
                  icon: <FaPhoneAlt className="w-5 h-5 text-white" />,
                  title: "Téléphone",
                  text: "+212 5 23 45 98 12",
                  bg: "bg-[#22A55D]",
                },
                {
                  icon: <FaEnvelope className="w-5 h-5 text-white" />,
                  title: "Email",
                  text: "aadec2000@hotmail.com",
                  bg: "bg-[#146C2D]",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div
                    className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-[#146C2D] whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-3/5 w-full relative flex justify-start items-center z-10">
          <div className="w-[95%] h-[370px] md:h-[420px] overflow-hidden rounded-b-[100px]">
            <img
              src={heroImg}
              alt="Hero section"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Typing text */}
      <div className="relative z-10 text-center mt-10 md:mt-16">
        <h2
          style={{
            WebkitTextStroke: "2px #146C2D",
            color: "transparent",
          }}
          className="text-[42px] md:text-[64px] font-extrabold"
        >
          {displayedText}
        </h2>
      </div>
    </section>
  );
}

export default HeroContact;
