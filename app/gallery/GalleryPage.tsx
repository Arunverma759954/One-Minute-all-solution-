"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/assets/gallery/s1.jpg",
    "/assets/gallery/s2.jpg",
    "/assets/gallery/s3.jpg",
    "/assets/gallery/s4.jpg",
    "/assets/gallery/s5.jpg",
  ];

  return (
    <>
      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="Gallery Banner"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

        <div className="absolute z-20 md:text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl opacity-90">
            Capturing elegance, luxury & unforgettable moments
          </p>
        </div>
      </section>

      {/* ===================== INTRO SECTION ===================== */}
      <div className="bg-white">
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:text-center">
          <span className="text-sm tracking-[4px] text-[#0B7A75] font-semibold uppercase">
            Welcome to our collection
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 
          text-[#B59260] bg-clip-text bg-gradient-to-r from-[#0C3436] to-[#0B7A75] drop-shadow">
            A Glimpse Into Our World
          </h2>

          <div className="w-28 h-1 mx-auto bg-gradient-to-r from-[#0C3436] to-[#0B7A75] rounded-full mt-5 mb-8"></div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Experience the essence of sophistication through our curated gallery.
            Each photograph captures the warmth of our ambiance, the beauty of our
            architecture, and the comfort we offer. Step inside our world and get
            a feel of the memorable experiences that await you.
          </p>
        </section>

        {/* ===================== COLLECTION TITLE ===================== */}
        <section className="md:text-center px-6 mt-10">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-clip-text 
         text-[#B59260] bg-gradient-to-r from-[#0C3436] to-[#0B7A75]">
            Our Premium Collection
          </h3>

          <p className="text-gray-600 text-lg mt-3">
            Beautiful visuals that speak louder than words.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0C3436] to-[#0B7A75] mx-auto mt-4 mb-12 rounded-full"></div>
        </section>

        {/* ===================== GALLERY GRID ===================== */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 cursor-pointer relative"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-60 md:h-72 object-cover rounded-2xl 
                  transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===================== POPUP MODAL ===================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage}
              alt="Popup"
              width={1400}
              height={900}
              className="w-full h-auto rounded-xl shadow-2xl"
            />

            {/* CLOSE BUTTON */}
            <button
              className="absolute top-4 right-4 bg-white text-black text-xl font-bold 
              w-10 h-10 rounded-full shadow-md flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
