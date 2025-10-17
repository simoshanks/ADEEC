// components/Topbar.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="bg-[#D59B49] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3">
        {/* جهة الشمال: info with icons - عمودي على الموبايل، أفقي على الديسكتوب */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-6 space-y-1 sm:space-y-0 mb-2 sm:mb-0">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <HiOutlinePhone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">+212 5 23 45 98 12</span>
          </div>
          <div className="hidden sm:block text-white/50">|</div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <HiOutlineMail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap truncate max-w-[160px] sm:max-w-none">
              aadec2000@hotmail.com
            </span>
          </div>
        </div>

        {/* جهة اليمين: social icons */}
        <div className="flex space-x-3 sm:space-x-4 items-center">
          <a 
            href="https://www.facebook.com/share/16rxatcupq/" 
            className="hover:text-gray-200 transition-colors duration-200 p-1 rounded"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a
            href="https://wa.me/+212523459812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors duration-200 p-1 rounded"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a 
            href="#" 
            className="hover:text-gray-200 transition-colors duration-200 p-1 rounded"
            aria-label="Instagram"
          >
            <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>

      {/* خط فاصل للشاشات الصغيرة */}
      <div className="block sm:hidden h-px bg-white/20 mx-3"></div>
    </div>
  );
};

export default Topbar;