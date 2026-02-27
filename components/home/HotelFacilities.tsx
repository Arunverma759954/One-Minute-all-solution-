"use client";

import {
  FaHome,
  FaShieldAlt,
  FaHospital
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FacilitiesSection3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner/b3.jpg"
          alt="Facilities Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto px-6 z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[#2EC3BD] tracking-widest font-semibold uppercase">
            Our Cleaning Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 drop-shadow-lg">
            Professional Solutions for Your Space
          </h2>

          <p className="mt-4 text-gray-200">
            One Mins Cleaning Solutions brings top-tier professional cleaning right to your doorstep in Guwahati. Our specialized approach ensures deep cleaning that goes beyond the surface, handling even the toughest grime and germs.
          </p>
        </motion.div>

        {/* FACILITY BOXES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center"
        >

          {[
            { title: "Deep Interior Cleaning", icon: FaHome },
            { title: "Sofa & Upholstery", icon: FaShieldAlt },
            { title: "Kitchen Sanitization", icon: FaHospital },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                key={index}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 
                shadow-lg hover:shadow-2xl border border-white/20 
                transition-all text-center cursor-default"
              >
                {/* ICON */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center 
                rounded-full bg-white/30 group-hover:bg-[#1E5F7C] 
                transition-all duration-300">
                  <Icon className="text-4xl text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mt-4">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}

        </motion.div>

        {/* FOOTER TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h4 className="text-xl font-semibold text-[#2EC3BD] tracking-widest uppercase">
            OMCAS CLEANING
          </h4>
          <p className="text-gray-200 mt-1">A Spotless Environment with Professional Expertise</p>
        </motion.div>

      </div>
    </section>
  );
}
