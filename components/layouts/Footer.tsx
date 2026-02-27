"use client";

import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-black via-[#050A24] to-[#0A1A45] text-white pt-12 pb-6 relative">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight flex flex-wrap items-baseline gap-x-1">
            <span className="text-4xl md:text-5xl text-[#2EC3BD]">1</span>
            <span>Minute Cleaning <span className="text-white">All Solution</span></span>
          </h2>
          <p className="mt-2 text-sm text-[#2EC3BD]/90 font-black tracking-widest uppercase">Certified Hygiene Experts</p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Professional deep cleaning & hygiene solutions — quick, reliable, and thorough. Available 24/7.
          </p>

          {/* GET DIRECTIONS BUTTON */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=VIP+Road+Guwahati+Assam"
            target="_blank"
            className="inline-block mt-5 bg-[#2EC3BD] text-black font-black px-6 py-2 rounded-full shadow-lg hover:bg-white hover:text-[#1E5F7C] transition-all duration-300 uppercase text-xs tracking-widest"
          >
            Get Directions
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2EC3BD]">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#2EC3BD]">Home</a></li>
            <li><a href="/about" className="hover:text-[#2EC3BD]">About Us</a></li>
            <li><a href="/services" className="hover:text-[#2EC3BD]">Services</a></li>
            <li><a href="/gallery" className="hover:text-[#2EC3BD]">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[#2EC3BD]">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2EC3BD]">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li>📞 Call Us Now: +91 9958146822</li>
            <li>✉️ <a href="mailto:oneminuteallsolution@gmail.com" className="hover:text-[#2EC3BD] transition">oneminuteallsolution@gmail.com</a></li>
            <li className="whitespace-nowrap">📍 VIP Road, Guwahati, Assam 781036</li>
            <li>🕒 Open 24/7</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#2EC3BD]">Follow Us</h3>

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
              href="https://wa.me/919958146822"
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
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">

          {/* Left */}
          <div>
            © {new Date().getFullYear()} One Mins Cleaning Solutions. All Rights Reserved.
          </div>

          {/* Right */}
          <div>
            Designed & Developed by{" "}
            <a
              href="https://digitalsolution360.com"
              target="_blank"
              className="text-[#2EC3BD] hover:text-[#25a8a2] font-semibold transition"
            >
              DigitalSolution360
            </a>
          </div>

        </div>
      </div>


      {/* MOBILE FIXED BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-between items-center bg-black/90 px-6 py-3 border-t border-gray-700 z-50">
        <a href="tel:+919958146822" className="flex items-center text-white space-x-2">
          <FaPhoneAlt className="text-2xl text-[#2EC3BD]" />
          <span className="font-semibold">Call</span>
        </a>
        <a
          href="https://wa.me/919958146822"
          target="_blank"
          className="flex items-center bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-500 transition"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          WhatsApp
        </a>
      </div>

      {/* SCROLL TO TOP - RESPONSIVE POSITIONING */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 md:bottom-10 left-6 md:left-auto md:right-32 bg-[#1E5F7C] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:bg-[#2EC3BD] hover:text-[#1E5F7C] z-[40] scroll-top-animate group"
        title="Scroll to Top"
      >
        <FaArrowUp className="text-xl group-hover:scale-125 transition-transform" />
      </button>

      {/* DESKTOP FLOATING WHATSAPP BUTTON - NOW CIRCULAR & BLINKING */}
      <a
        href="https://wa.me/919958146822"
        target="_blank"
        className="hidden md:flex fixed bottom-10 right-10 bg-[#25D366] text-white w-20 h-20 rounded-full shadow-2xl items-center justify-center hover:bg-green-500 transition-all z-50 whatsapp-animate"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </footer>
  );
}
