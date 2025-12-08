"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

       {/* LOGO */}
<div className="flex items-center space-x-2">
  <img
    src="/assets/atithi.png"
    alt="Atithi Logo"
    className="w-10 h-10 object-contain"
  />
  <span className="text-2xl font-extrabold tracking-wide text-[#1E3A8A]">
    Atithi
  </span>
</div>


        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-8 text-[16px] font-semibold">
          <Link href="/" className="hover:text-[#1E3A8A] text-black transition">Home</Link>
          <Link href="/about" className="hover:text-[#1E3A8A] text-black transition">About Us</Link>
          <Link href="/services" className="hover:text-[#1E3A8A] text-black transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#1E3A8A] text-black transition">Gallery</Link>
          <Link href="/contact" className="hover:text-[#1E3A8A] text-black transition">Contact</Link>
        </nav>

        {/* DESKTOP RIGHT SIDE BUTTONS */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="tel:+916000891365"
            className="flex items-center gap-2 font-semibold text-[#1E3A8A] hover:text-[#0b1f52] transition"
          >
            <FiPhoneCall className="text-xl" />
            <span>+91 6000891365</span>
          </a>

          <Link
            href="/contact"
            className="bg-[#FACC15] text-black font-semibold px-5 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE RIGHT SIDE: CALL + HAMBURGER */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="tel:+916000891365"
            className="flex items-center gap-1 text-[#1E3A8A] font-semibold"
          >
            <FiPhoneCall className="text-2xl" />
            <span className="text-sm font-medium"></span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#1E3A8A]"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-5 space-y-4">
          <Link href="/" onClick={handleLinkClick} className="block text-lg font-medium text-[#1E3A8A]">Home</Link>
          <Link href="/about" onClick={handleLinkClick} className="block text-lg font-medium text-[#1E3A8A]">About Us</Link>
          <Link href="/services" onClick={handleLinkClick} className="block text-lg font-medium text-[#1E3A8A]">Services</Link>
          <Link href="/gallery" onClick={handleLinkClick} className="block text-lg font-medium text-[#1E3A8A]">Gallery</Link>
          <Link href="/contact" onClick={handleLinkClick} className="block text-lg font-medium text-[#1E3A8A]">Contact</Link>

          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block bg-[#FACC15] text-black text-center font-semibold py-3 rounded-xl shadow-md hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
