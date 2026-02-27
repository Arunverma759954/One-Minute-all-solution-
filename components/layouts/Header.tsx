"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { useBookNowModal } from "@/components/ui/BookNowModalContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookNowModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleBookNow = () => {
    setMenuOpen(false);
    openModal();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-xl py-2" : "bg-white shadow-md py-4"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between min-h-[70px]">

        {/* LOGO – Left aligned and clear */}
        <Link href="/" className="flex items-center shrink-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/assets/logooo.jpeg"
            alt="One Mins Cleaning Solutions Logo"
            className="block object-contain transition-all"
            style={{ height: scrolled ? "55px" : "65px", width: "auto" }}
          />
        </Link>


        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-8 text-[15px] font-bold uppercase tracking-wider">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Gallery", path: "/gallery" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative group hover:text-[#1E5F7C] text-black transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2EC3BD] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* DESKTOP RIGHT SIDE BUTTONS */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+919958146822"
            className="flex items-center gap-2 font-bold text-[#1E5F7C] hover:text-[#0b1f52] transition"
          >
            <div className="w-10 h-10 bg-[#1E5F7C]/10 rounded-full flex items-center justify-center">
              <FiPhoneCall className="text-xl" />
            </div>
            <span>+91 9958146822</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(30, 95, 124, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={openModal}
            className="bg-[#1E5F7C] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#164d65] transition-all"
          >
            Book Now
          </motion.button>
        </div>

        {/* MOBILE RIGHT SIDE: CALL + HAMBURGER */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="tel:+919958146822"
            className="flex items-center gap-1 text-[#1E5F7C] font-semibold"
          >
            <FiPhoneCall className="text-2xl" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#1E5F7C]"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 md:hidden bg-white px-8 py-20 flex flex-col space-y-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-4xl text-[#1E5F7C]"
            >
              <FiX />
            </button>

            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Gallery", path: "/gallery" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <Link
                  href={link.path}
                  onClick={handleLinkClick}
                  className="block text-3xl font-black text-gray-900 tracking-tighter"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              type="button"
              onClick={handleBookNow}
              className="mt-auto w-full bg-[#1E5F7C] text-white text-center font-bold py-5 rounded-2xl shadow-xl hover:bg-[#164d65] transition-all uppercase tracking-widest text-sm"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
