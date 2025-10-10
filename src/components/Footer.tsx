import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import logo from "@/assets/logo.png";
import mapMorocco from "@/assets/map.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-[#F8FAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14">
        {/* ✅ Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center sm:text-left">
          
          {/* Logo + Description */}
          <div>
            <div className="flex justify-center sm:justify-start items-center space-x-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow border border-gray-100">
                <img
                  src={logo}
                  alt="Logo AADEC"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-sm mx-auto sm:mx-0">
              Association Azilal pour le Développement, l'Environnement et la Communication.
              Engagée pour un avenir durable et prospère.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 inline-block pb-1">
              Contact
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-center sm:justify-start items-center space-x-2">
                <AiOutlineEnvironment className="w-5 h-5 text-[#146C2D]" />
                <span className="text-sm sm:text-[15px]">
                  Quartier Administratif BP : 100 Azilal
                </span>
              </div>
              <div className="flex justify-center sm:justify-start items-center space-x-2">
                <AiOutlinePhone className="w-5 h-5 text-[#146C2D]" />
                <span className="text-sm sm:text-[15px]">+212 5 23 45 98 12</span>
              </div>
              <div className="flex justify-center sm:justify-start items-center space-x-2">
                <AiOutlineMail className="w-5 h-5 text-[#146C2D]" />
                <span className="text-sm sm:text-[15px]">
                  aadec2000@hotmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 inline-block pb-1">
              Suivez-nous
            </h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/16rxatcupq/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                style={{ color: "#1877F2" }}
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/212523459812"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                style={{ color: "#25D366" }}
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

            </div>
            <p className="mt-5 text-xs sm:text-sm text-gray-600 bg-green-50 border border-green-100 rounded-lg py-2 px-3 text-center">
              Rejoignez notre communauté pour rester informé.
            </p>
          </div>

          {/* Morocco Map */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-40 h-40 relative">
              <img
                src={mapMorocco}
                alt="Morocco map"
                className="w-full h-full object-contain opacity-90"
              />
              {/* Animated point */}
              <div
                className="absolute"
                style={{
                  top: "36%",
                  left: "52%",
                }}
              >
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-500 opacity-50 animate-ping"></span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 border-2 border-white"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col sm:flex-row justify-center items-center text-gray-500 text-xs sm:text-sm space-y-2 sm:space-y-0">
          <p>© {currentYear} AADEC. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
