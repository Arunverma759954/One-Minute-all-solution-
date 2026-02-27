"use client";

import { useBookNowModal } from "@/components/ui/BookNowModalContext";
import { motion } from "framer-motion";

export default function BookYourStayCTA() {
  const { openModal } = useBookNowModal();

  return (
    <section className="py-0 overflow-hidden">
      <div className="w-full">
        <div className="bg-[#1E5F7C] w-full overflow-hidden shadow-2xl relative group">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2EC3BD]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 md:px-12 lg:px-20 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Ready to Experience a <span className="text-[#2EC3BD]">Spotless</span> Space?
              </h2>
              <p className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                Whether it's your home or office, One Mins Cleaning Solutions provides the most reliable and deep cleaning services across Delhi NCR. Book your slot now for a healthier environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={openModal}
                className="inline-block bg-[#2EC3BD] text-black font-black px-12 py-5 rounded-full shadow-xl hover:bg-white hover:text-[#1E5F7C] transition-all duration-500 min-w-[220px] text-center text-xl uppercase tracking-wider"
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
