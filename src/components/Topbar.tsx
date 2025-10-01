// components/Topbar.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-green-700 text-white text-sm ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        {/* جهة الشمال: info */}
        <div className="flex space-x-4">
          <span>📞 +212 600 123 456</span>
          <span>✉ contact@aadec.ma</span>
        </div>

        {/* جهة اليمين: social icons */}
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
