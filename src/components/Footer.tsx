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
    <footer className="bg-gradient-to-br from-[#D59B49] via-[#c58c40] to-[#b37d36] text-white relative overflow-hidden">
      {/* تأثير خلفية */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* ✅ Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <img
                  src={logo}
                  alt="Logo AADEC"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AADEC</h3>
            <p className="text-white/90 text-sm lg:text-base leading-relaxed max-w-md mx-auto md:mx-0 font-light">
              Association Azilal pour le Développement, l'Environnement et la Communication.
              Engagée pour un avenir durable et prospère depuis 2000.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6 pb-2 border-b border-white/30 inline-block">
              Contact
            </h3>
            <div className="space-y-4 text-white/90">
              <div className="flex justify-center md:justify-start items-center space-x-3 group hover:text-white transition-colors duration-300">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <AiOutlineEnvironment className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm lg:text-base font-medium">
                  Quartier Administratif BP : 100 Azilal
                </span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-3 group hover:text-white transition-colors duration-300">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <AiOutlinePhone className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm lg:text-base font-medium">+212 5 23 45 98 12</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-3 group hover:text-white transition-colors duration-300">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                  <AiOutlineMail className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm lg:text-base font-medium">
                  aadec2000@hotmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6 pb-2 border-b border-white/30 inline-block">
              Suivez-nous
            </h3>
            <div className="flex justify-center md:justify-start space-x-3 mb-6">
              <a
                href="https://www.facebook.com/share/16rxatcupq/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <FaFacebookF className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/212523459812"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <FaWhatsapp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <FaInstagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
              <p className="text-white/80 text-sm font-medium">
                Rejoignez notre communauté pour rester informé.
              </p>
            </div>
          </div>

          {/* Morocco Map */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-6 pb-2 border-b border-white/30 inline-block">
              Localisation
            </h3>
            <div className="relative group">
              <div className="w-48 h-48 relative transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={mapMorocco}
                  alt="Morocco map"
                  className="w-full h-full object-contain opacity-90 filter brightness-0 invert"
                />
                {/* Animated point */}
                <div
                  className="absolute"
                  style={{
                    top: "36%",
                    left: "52%",
                  }}
                >
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-70 animate-ping"></span>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white animate-pulse"></span>
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Azilal, Maroc
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="border-t border-white/30 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-white/80 text-sm font-medium">
              © {currentYear} AADEC. Tous droits réservés.
            </p>
          </div>
          <div className="flex space-x-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;