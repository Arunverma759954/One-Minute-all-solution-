"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <div className="relative w-full h-screen bg-white">

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/assets/banner/b4.jpg"
              alt="Hotel Banner 1"
              fill
              priority
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/assets/banner/b5.jpg"
              alt="Hotel Banner 2"
              fill
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ============================  
           CENTER HEADING + SUBHEADING
      ============================ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">

        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Welcome to Atithi Homestay 
        </h1>

        <p className="text-white/90 text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-lg">
          Experience comfort, luxury, and a homely ambience in the heart of the city.
        </p>

        {/* BUTTON */}
        <button className="mt-8 bg-[#FACC15] hover:bg-yellow-400 text-black font-bold px-10 py-3 rounded-full shadow-xl transition">
          Explore Rooms
        </button>
      </div>

    </div>
  );
}
