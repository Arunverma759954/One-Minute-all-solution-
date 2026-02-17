"use client";

import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-[#050A24] to-[#0A1A45] text-white pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-3xl font-extrabold">
            Atithi <span className="text-[#FACC15]">Homestay</span>
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Premium hospitality with comfort, elegance, and warm service — available 24/7.
          </p>

            {/* GET DIRECTIONS BUTTON */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Atithi+Homestay,+Alokpur,+Near+Pratiksha+Hospital,+VIP+Road,+Barbari,+Guwahati"
            target="_blank"
            className="inline-block mt-5 bg-[#FACC15] text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition"
          >
            Get Directions
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FACC15]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#FACC15]">Home</a></li>
            <li><a href="/about" className="hover:text-[#FACC15]">About Us</a></li>
            <li><a href="/services" className="hover:text-[#FACC15]">Services</a></li>
            <li><a href="/gallery" className="hover:text-[#FACC15]">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[#FACC15]">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FACC15]">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li>📞 Call Us Now: +916000891365</li>
            <li>📍 Alokpur, Near Pratiksha Hospital, VIP Road, Barbari, Guwahati - 781036</li>
            <li>🕒 Open 24/7</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#FACC15]">Follow Us</h3>
        
          {/* SUB-HEADING */}
          <p className="text-gray-300 text-sm mb-4">
            Stay connected with us
          </p>
        
          <div className="flex space-x-4">
        
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-[#1877F2] transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
        
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
        
            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-red-600 transition"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
        
            {/* WhatsApp */}
            <a
              href="https://wa.me/916000891365"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/20 hover:bg-green-500 transition"
            >
              <FaWhatsapp className="text-white text-lg" />
            </a>
        
          </div>
        </div>

      </div>

     {/* COPYRIGHT */}
<div className="mt-10 border-t border-gray-600 pt-4">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
    
    {/* Left */}
    <div>
      © {new Date().getFullYear()} Atithi Homestay. All Rights Reserved.
    </div>

    {/* Right */}
    <div>
      Designed & Developed by{" "}
      <a
        href="https://digitalsolution360.com"
        target="_blank"
        className="text-[#FACC15] hover:text-yellow-400 font-semibold transition"
      >
        DigitalSolution360
      </a>
    </div>

  </div>
</div>


      {/* MOBILE FIXED BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-between items-center bg-black/90 px-6 py-3 border-t border-gray-700 z-50">
        <a href="tel:+916000891365" className="flex items-center text-white space-x-2">
          <FaPhoneAlt className="text-2xl text-[#FACC15]" />
          <span className="font-semibold">Call</span>
        </a>
        <a
          href="https://wa.me/916000891365"
          target="_blank"
          className="flex items-center bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-500 transition"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          WhatsApp
        </a>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/916000891365"
        target="_blank"
        className="hidden md:flex fixed bottom-10 right-10 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-lg items-center space-x-2 hover:bg-green-500 transition z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </footer>
  );
}
