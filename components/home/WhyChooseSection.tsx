"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 group"
        >
          <Image
            src="/assets/a2.jpg"
            alt="Why Choose 1 Minute Cleaning"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
        {/* RIGHT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h4 variants={itemVariants} className="text-[#1E5F7C] font-semibold tracking-wider uppercase">Why Choose One Mins Solutions?</motion.h4>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mt-2 leading-tight">
            Expertise, Precision & Eco-Friendly Care
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-6 text-gray-600 leading-relaxed">
            One Mins Cleaning Solutions (OMCAS) offers a perfect blend of professional expertise, modern equipment, and personalized care. We focus on creating a healthy and spotless environment with attention to detail.
          </motion.p>
          <motion.ul variants={itemVariants} className="mt-4 list-disc list-inside text-gray-600 space-y-2">
            <li>Certified and background-verified professionals</li>
            <li>Use of non-toxic, eco-friendly cleaning agents</li>
            <li>Advanced hospital-grade sanitization protocols</li>
            <li>Transparent and affordable service pricing</li>
            <li>Flexible scheduling as per your convenience</li>
            <li>100% satisfaction guarantee on every job</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
