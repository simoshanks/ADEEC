import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-[#F8FAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Logo + Description */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow border border-gray-100">
                <img src={logo} alt="Logo AADEC" className="h-10 sm:h-12 w-auto object-contain" />
              </div>
              <h2 className="font-bold text-[#146C2D] text-lg sm:text-xl">AADEC</h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-sm mx-auto sm:mx-0">
              Association Azilal pour le Développement, l'Environnement et la Communication. 
              Engagée pour un avenir durable et prospère.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 inline-block pb-1">
              Contact
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-center sm:justify-start items-start space-x-2">
                <AiOutlineEnvironment className="w-5 h-5 text-[#146C2D] flex-shrink-0" />
                <span className="text-sm sm:text-[15px]">Quartier Administratif BP : 100 Azilal</span>
              </div>
              <div className="flex justify-center sm:justify-start items-start space-x-2">
                <AiOutlinePhone className="w-5 h-5 text-[#146C2D] flex-shrink-0" />
                <span className="text-sm sm:text-[15px]">+212 5 23 45 98 12</span>
              </div>
              <div className="flex justify-center sm:justify-start items-start space-x-2">
                <AiOutlineMail className="w-5 h-5 text-[#146C2D] flex-shrink-0" />
                <span className="text-sm sm:text-[15px]">aadec2000@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 inline-block pb-1">
              Suivez-nous
            </h3>
            <div className="flex justify-center sm:justify-start space-x-3">
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
              <a
                href="#"
                className="p-2.5 sm:p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                style={{ color: "#E4405F" }}
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-5 text-xs sm:text-sm text-gray-600 bg-green-50 border border-green-100 rounded-lg py-2 px-3 text-center">
              Rejoignez notre communauté pour rester informé.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 inline-block pb-1">
              Liens rapides
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-[15px]">
              {["Accueil", "À propos", "Activités", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex justify-center sm:justify-start items-center hover:text-[#146C2D] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[#146C2D] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm space-y-3 sm:space-y-0">
          <p>© {currentYear} AADEC. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#146C2D] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#146C2D] transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
