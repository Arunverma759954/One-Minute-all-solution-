"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LuxuryIntroSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[#1E5F7C] tracking-widest font-semibold">
            DEDICATION
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E] leading-tight">
            Superior Cleaning Standards for Every Space
          </h2>

          <p className="text-gray-600 leading-relaxed">
            One Mins Cleaning Solutions (OMCAS) is dedicated to transforming your living and working environments into spotless, healthy sanctuaries. Our team of certified professionals ensures that every corner is meticulously cleaned using industry-leading protocols.
          </p>
          <p className="text-gray-600 leading-relaxed">As Delhi NCR's most trusted Cleaning Experts, we focus on precision, reliability, and eco-friendly practices to meet the unique needs of our residential and commercial clients.</p>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="italic text-gray-700 border-l-4 border-[#2EC3BD] pl-4"
          >
            “ Cleanliness is next to Godliness – At One Mins, we don&apos;t just clean; we restore hygiene, health, and happiness to your space with professional care. ”
          </motion.p>

          {/* MANAGER INFO */}
          <div className="flex items-center gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Image
                src="/assets/cl.jpg"
                width={60}
                height={60}
                alt="Quality Lead"
                className="rounded-full w-[60px] h-[60px] object-cover border-2 border-[#1E5F7C]"
              />
            </motion.div>

            <div>
              <h4 className="text-xl font-semibold text-[#1E1E1E]">
                Team OMCAS
              </h4>
              <p className="text-gray-500">— Quality Assurance Lead</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[460px] group">
            <Image
              src="/assets/cl.jpg"
              alt="Professional Cleaning Delhi NCR"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* CIRCLE OVERLAY */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-40 h-40 border border-[#1E5F7C]/30 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-[#1E5F7C] rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-3xl font-bold">100%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
