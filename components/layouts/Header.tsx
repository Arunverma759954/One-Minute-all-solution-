"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useBookNowModal } from "@/components/ui/BookNowModalContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookNowModal();

  const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Deep Cleaning", path: "/services/deep-cleaning" },
        { name: "Pest Control", path: "/services/pest-control" },
        { name: "Marble Polish", path: "/services/marble-polish" },
        { name: "Bathroom Cleaning", path: "/services/bathroom-cleaning" },
        { name: "Fitachain Cleaning", path: "/services/fitachain-cleaning" },
        { name: "Water Tank Cleaning", path: "/services/water-tank-cleaning" },
        { name: "Fogging Cleaning", path: "/services/fogging-cleaning" },
        { name: "Electrician", path: "/services/electrician" },
        { name: "Plumber", path: "/services/plumber" },
        { name: "Termite Control", path: "/services/termite-control" },
        { name: "Carpenter", path: "/services/carpenter" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (menuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleBookNow = () => {
    setMenuOpen(false);
    openModal();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-xl py-0.5" : "bg-white shadow-md py-2"
          } ${menuOpen ? "!bg-white !opacity-100" : ""}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between min-h-[60px]">

          {/* LOGO – Left aligned and clear */}
          <Link href="/" className="flex items-center shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/logooo.jpeg"
              alt="One Mins Cleaning Solutions Logo"
              className="block object-contain transition-all"
              style={{ height: scrolled ? "50px" : "65px", width: "auto" }}
            />
          </Link>


          {/* DESKTOP MENU */}
          <nav className="hidden md:flex space-x-8 text-[13px] font-bold uppercase tracking-[0.15em]">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                {link.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-4 hover:text-[#1E5F7C] text-gray-800 transition-colors">
                    <Link href={link.path}>{link.name}</Link>
                    <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className="relative py-4 hover:text-[#1E5F7C] text-gray-800 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
                {/* Underline - Thinner and more subtle */}
                {!link.dropdown && (
                  <span className="absolute bottom-3 left-0 w-0 h-[1.5px] bg-[#2EC3BD] transition-all duration-300 group-hover:w-full" />
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 mt-2 overflow-hidden"
                      >
                        <div className="flex flex-col">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              onClick={() => setDropdownOpen(false)}
                              className="px-6 py-2 text-[13px] font-bold text-gray-700 hover:bg-[#1E5F7C]/5 hover:text-[#1E5F7C] transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
      </motion.header>

      {/* MOBILE MENU DROPDOWN - MOVED OUTSIDE HEADER TRANSFORM CONTEXT */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] md:hidden bg-white px-8 py-20 flex flex-col space-y-6 shadow-2xl overflow-y-auto"
          >
            {/* FORCE WHITE BACKGROUND */}
            <div className="absolute inset-0 bg-white" style={{ zIndex: -1 }} />

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-4xl text-[#1E5F7C] p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiX />
            </button>

            <div className="flex flex-col space-y-6 mt-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="space-y-4"
                >
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full text-xl font-black text-[#1E5F7C] tracking-tight hover:text-[#2EC3BD] transition-colors"
                      >
                        {link.name}
                        <FiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#1E5F7C]/10 mt-2 pb-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.path}
                                  onClick={handleLinkClick}
                                  className="text-base font-bold text-gray-500 hover:text-[#1E5F7C]"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={handleLinkClick}
                      className="block text-xl font-black text-[#1E5F7C] tracking-tight hover:text-[#2EC3BD] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              type="button"
              onClick={handleBookNow}
              className="mt-auto w-full bg-[#1E5F7C] text-white text-center font-black py-5 rounded-2xl shadow-[0_20px_40px_rgba(30,95,124,0.3)] hover:bg-[#164d65] transition-all uppercase tracking-[0.2em] text-sm"
            >
              Book Your Cleaning Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

}
