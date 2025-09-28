import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2  rounded-lg shadow-lg">
                {/* Placeholder Logo */}
                 <img
                  src={logo}
                  alt="Logo AADEC"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[#146C2D]">AADEC</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
             Association Azilal pour le Développement l’Environnement et la Communication. 
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center space-x-3">
                <AiOutlineEnvironment className="w-5 h-5 text-[#146C2D]" />
                <span>Quartier Administratif BP : 100 Azilal</span>
              </div>
              <div className="flex items-center space-x-3">
                <AiOutlinePhone className="w-5 h-5 text-[#146C2D]" />
                <span>+212 5 23 45 98 12 </span>
              </div>
              <div className="flex items-center space-x-3">
                <AiOutlineMail className="w-5 h-5 text-[#146C2D]" />
                <span> aadec2000@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Suivez-nous</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-white shadow hover:opacity-80 transition-opacity"
                style={{ color: '#1877F2' }}
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white shadow hover:opacity-80 transition-opacity"
                style={{ color: '#E4405F' }}
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/212511233444" // lien WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white shadow hover:opacity-80 transition-opacity"
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#146C2D] transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-[#146C2D] transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-[#146C2D] transition-colors">Activités</a></li>
              <li><a href="#" className="hover:text-[#146C2D] transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

{/* Bottom Bar */}
<div className="border-t border-gray-200 mt-12 pt-6 text-sm text-gray-500 flex justify-center items-center">
  <p>© 2025 AADEC. Tous droits réservés.</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
