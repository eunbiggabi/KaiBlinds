// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {/* Contact Info */}
        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-400" />
          <a href="mailto:kaiblinds@gmail.com" className="hover:text-white">
            kaiblinds@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-green-400" />
          <a href="tel:0430080216" className="hover:text-white">
            0430 080 216
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-red-400" />
          <span>Rochedale, QLD</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kai Blinds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
