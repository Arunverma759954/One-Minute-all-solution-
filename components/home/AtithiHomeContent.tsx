"use client";

import Image from "next/image";
import { FaClock, FaHospital, FaHome, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const guestSearches = [
  "Professional deep cleaning Guwahati",
  "Sofa cleaning services near me",
  "Kitchen deep cleaning Guwahati",
  "Office cleaning solutions Guwahati",
  "Bathroom sanitization service",
  "Carpet steam cleaning Guwahati",
  "Eco-friendly cleaning services",
];

const nearMeSearches = [
  "Cleaning services near me",
  "Best deep cleaning in Guwahati",
  "House cleaning service VIP Road",
  "Sofa cleaners near Pratiksha Hospital",
  "Office maintenance Guwahati",
];

const brandSearches = [
  "One Mins Cleaning Solutions",
  "OMCAS Guwahati",
  "One Mins Cleaning contact",
  "OMCAS deep cleaning reviews",
  "Best cleaning experts Guwahati",
];

export default function AtithiHomeContent() {
  return (
    <>
      {/* ========== PROFESSIONAL SANITIZATION & DEEP CLEANING ========== */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1E5F7C] font-semibold px-4 py-2 rounded-full mb-4">
              <FaShieldAlt className="text-[#1E5F7C]" />
              Certified Sanitization Expert
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Hospital-Grade Sanitization & Deep Cleaning
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At One Mins Cleaning Solutions (OMCAS), we prioritize your health and safety. Our deep cleaning services include hospital-grade sanitization, eco-friendly chemical treatments, and advanced equipment to ensure your home or office is germ-free.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Whether it&apos;s a residential space or a corporate office, our trained professionals follow strict sanitization protocols to eliminate 99.9% of bacteria and viruses, leaving your environment fresh and safe.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative w-full h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/assets/pexels-matilda-wormwood-4099471.jpg"
              alt="Professional Sanitization - One Mins Cleaning Solutions"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white px-4 py-3 rounded-xl backdrop-blur-sm">
              <p className="font-semibold flex items-center gap-2">
                <FaShieldAlt className="text-[#1E5F7C]" /> Eco-Friendly & Safe Sanitization
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== COMPREHENSIVE CLEANING SOLUTIONS ========== */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/assets/cl.jpg"
              alt="Deep Cleaning Services - One Mins Cleaning Solutions"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Comprehensive Cleaning & Maintenance Solutions
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              As Guwahati&apos;s leading cleaning experts, we offer a wide range of services tailored to your specific needs. From sofa sanitization to intensive kitchen degreasing, we ensure every corner of your space is pristine.
            </p>
            <p className="mt-3 text-gray-700 font-medium">Our specialized services include:</p>
            <ul className="mt-3 space-y-2">
              {guestSearches.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1E5F7C] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-2 space-y-2">
              {guestSearches.slice(4, 7).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#1E5F7C] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========== WHY CHOOSE ONE MINS SOLUTIONS? ========== */}
      <section className="py-14 bg-[#1E5F7C] text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1440px] mx-auto px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <FaShieldAlt className="text-[#2EC3BD]" />
            <span className="font-semibold">Your Trusted Cleaning Partner</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            Expert Deep Cleaning • Trained Professionals • Eco-Friendly Products
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "100% Satisfaction Guarantee",
              "Advanced Steam Cleaning",
              "Non-Toxic Chemicals",
              "Verified Professionals",
              "Flexible Scheduling",
            ].map((tag, i) => (
              <motion.span
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                key={i}
                className="px-4 py-2 bg-white/15 rounded-full text-sm font-medium transition cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========== ADVANCED CLEANING TECHNOLOGY ========== */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/assets/pexels-matilda-wormwood-4099471.jpg"
              alt="Advanced Cleaning Equipment - OMCAS"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="flex items-center gap-2 text-white">
                <FaShieldAlt className="text-2xl text-[#2EC3BD]" />
                <span className="text-lg font-semibold">Latest Cleaning Tech</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Latest Equipment for Superior Results
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We use the latest high-pressure steam cleaners and industrial-grade vacuums to achieve a level of cleanliness that manual scrubbing simply can&apos;t match.
            </p>
            <p className="mt-3 text-gray-700 font-medium flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#1E5F7C]" />
              Serving All Areas of Guwahati
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearMeSearches.map((term, i) => (
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                  key={i}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm transition cursor-default"
                >
                  {term}
                </motion.span>
              ))}
            </div>
            <p className="mt-4 text-gray-600 text-sm">Our most popular keywords:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {brandSearches.map((term, i) => (
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
                  key={i}
                  className="px-3 py-1.5 bg-blue-50 text-[#1E5F7C] rounded-lg text-sm font-medium transition cursor-default"
                >
                  {term}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
