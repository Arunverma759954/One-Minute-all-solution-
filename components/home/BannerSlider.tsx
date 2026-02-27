"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BANNER_SLIDES = [
  { src: "/assets/26.jpg", alt: "1 Minute Cleaning – Professional cleaning team" },
  { src: "/assets/70.jpg", alt: "1 Minute Cleaning – Professional cleaning" },
  { src: "/assets/25.jpg", alt: "1 Minute Cleaning – Clean & comfortable" },
  { src: "/assets/pexels-matilda-wormwood-4099471.jpg", alt: "1 Minute Cleaning – Professional cleaning & care" },
];

export default function BannerSlider() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="home-banner-swiper w-full h-full"
        navigation={{
          prevEl: ".banner-prev",
          nextEl: ".banner-next",
        }}
      >
        {BANNER_SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i < 2}
                  quality={95}
                  className="object-cover z-0 object-center w-full"
                  sizes="100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

              {/* Slide specific content (optional if you want different text per slide) */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows – premium style */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
        whileTap={{ scale: 0.9 }}
        type="button"
        aria-label="Previous slide"
        className="banner-prev absolute left-6 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-black/30 border border-white/30 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hidden md:flex"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
        whileTap={{ scale: 0.9 }}
        type="button"
        aria-label="Next slide"
        className="banner-next absolute right-6 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-black/30 border border-white/30 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hidden md:flex"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Center content – Company name with animations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto max-w-[1440px] w-full"
        >
          {/* Detailed Content with better visibility */}
          <div className="relative max-w-4xl mx-auto rounded-3xl px-8 py-10 md:px-16 md:py-20 bg-black/20 backdrop-blur-sm border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-white font-extrabold tracking-tight leading-tight text-center"
            >
              <span className="banner-line-1 flex items-baseline justify-center gap-x-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] text-[#2EC3BD]">1</span>
                <span className="tracking-wide">Minute</span>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="banner-line-2 block mt-2 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] uppercase font-black"
              >
                Cleaning All Solution
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="banner-line-2 mt-6 text-white/95 text-lg md:text-2xl max-w-2xl mx-auto font-medium [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]"
            >
              OMCAS Premier Choice for Professional Deep Cleaning
              <br className="hidden md:block" />
              & Sanitization Since 2018.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Link
                href="/contact"
                className="banner-cta mt-8 inline-block bg-[#2EC3BD] hover:bg-white hover:text-[#1E5F7C] text-black font-black text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border-2 border-transparent hover:border-[#2EC3BD]"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
