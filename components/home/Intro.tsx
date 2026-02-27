"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <h4 className="text-[#1E5F7C] font-semibold tracking-wider uppercase flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#2EC3BD]"></span>
            Professional Cleaning Services Delhi NCR
          </h4>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mt-4 leading-tight">
            Expert Deep Cleaning for Your{" "}
            <span className="text-[#2EC3BD]">Home & Office</span>
            <br className="hidden sm:block" />
            <span className="text-[#1E5F7C]">— One Mins Solutions</span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Welcome to One Mins Cleaning Solutions (OMCAS), your premier choice for professional deep cleaning in Delhi NCR. We specialize in comprehensive home cleaning, kitchen deep cleaning, sofa sanitization, and corporate office maintenance.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our expert team uses advanced equipment and eco-friendly cleaning agents to deliver high-quality results. Whether it's a routine cleanup or an intensive deep clean, we bring precision and care to every corner.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1E5F7C]/10 rounded-full flex items-center justify-center text-[#1E5F7C] text-2xl font-bold">100%</div>
              <p className="text-gray-700 font-semibold">Satisfaction<br /><span className="text-gray-400 font-normal text-sm">Guarantee</span></p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1E5F7C]/10 rounded-full flex items-center justify-center text-[#1E5F7C] text-2xl font-bold">★</div>
              <p className="text-gray-700 font-semibold">Expert<br /><span className="text-gray-400 font-normal text-sm">Trained Staff</span></p>
            </motion.div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#1E5F7C] text-white font-bold rounded-full shadow-lg hover:shadow-[#1E5F7C]/30 transition-all duration-300"
            >
              Book Your Service
            </Link>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918822453835"
              className="px-10 py-4 border-2 border-[#1E5F7C] text-[#1E5F7C] font-bold rounded-full hover:bg-[#1E5F7C] hover:text-white transition-all duration-300"
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGES - STAGGERED GRID */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative grid grid-cols-2 gap-4 h-[600px]">
            <div className="relative h-[80%] rounded-3xl overflow-hidden shadow-2xl self-start mt-8 border-4 border-white">
              <Image
                src="/assets/cl.jpg"
                alt="Expert Cleaning Showcase"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[80%] rounded-3xl overflow-hidden shadow-2xl self-end mb-8 border-4 border-white">
              <Image
                src="/assets/pexels-matilda-wormwood-4099471.jpg"
                alt="Professional Team Working"
                fill
                className="object-cover"
              />
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ rotate: [12, 15, 12] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2EC3BD] rounded-full border-8 border-white shadow-2xl flex flex-col items-center justify-center text-center p-4 transform"
            >
              <span className="text-4xl">✨</span>
              <p className="text-black font-extrabold text-sm leading-tight uppercase mt-1">
                Zero Spot<br />Guarantee
              </p>
            </motion.div>
          </div>

          {/* DECORATIVE ELEMENT */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#1E5F7C]/5 rounded-full -z-10 blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2EC3BD]/10 rounded-full -z-10 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
