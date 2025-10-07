// components/Topbar.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="bg-[#146C2D] text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* جهة الشمال: info with icons */}
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-1">
            <HiOutlinePhone className="w-4 h-4" />
            <span>+212 5 23 45 98 12</span>
          </div>
          <div className="flex items-center space-x-1">
            <HiOutlineMail className="w-4 h-4" />
            <span>aadec2000@hotmail.com</span>
          </div>
        </div>

        {/* جهة اليمين: social icons */}
        <div className="flex space-x-3 items-center">
          <a href="https://www.facebook.com/share/16rxatcupq/" className="hover:text-gray-300"><FaFacebookF /></a>
          <a
            href="https://wa.me/+212523459812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaWhatsapp />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Topbar;
