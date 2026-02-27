"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Specialized"];

  const galleryImages = [
    { src: "/assets/cl.jpg", category: "Residential", title: "Living Room Deep Clean" },
    { src: "/assets/img1.jpeg", category: "Residential", title: "Kitchen Sanitization" },
    { src: "/assets/a1.jpg", category: "Residential", title: "Sofa & Upholstery" },
    { src: "/assets/img4.jpeg", category: "Commercial", title: "Corporate Office Clean" },
    { src: "/assets/pexels-matilda-wormwood-4099471.jpg", category: "Specialized", title: "Deep Sanitization" },
    { src: "/assets/a2.jpg", category: "Commercial", title: "Maintenance Service" },
  ];

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="w-full overflow-hidden">
      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="OMCAS Service Gallery"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E5F7C]/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-20 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-[#2EC3BD]">Gallery</span>
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl font-bold opacity-90 max-w-2xl mx-auto">
            Witness the standards of perfection we bring to every space.
          </p>
        </motion.div>
      </section>

      {/* ===================== FILTERS SECTION ===================== */}
      <div className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 border-2 ${activeFilter === filter
                  ? "bg-[#1E5F7C] text-white border-[#1E5F7C] shadow-xl scale-110"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#2EC3BD] hover:text-[#1E5F7C]"
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* ===================== GALLERY GRID ===================== */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  key={img.src}
                  className="group relative h-[350px] overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl cursor-pointer border-4 border-gray-50"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E5F7C] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <span className="text-[#2EC3BD] text-xs font-black uppercase tracking-widest">{img.category}</span>
                      <h3 className="text-white text-lg font-bold mt-1 uppercase">{img.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ===================== POPUP MODAL ===================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full"
            >
              <Image
                src={selectedImage}
                alt="Enlarged View"
                width={1400}
                height={900}
                className="w-full h-auto rounded-3xl shadow-2xl border-2 border-white/10"
              />
              <button
                className="absolute -top-6 -right-6 md:top-4 md:right-4 bg-white text-black text-2xl font-bold w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#2EC3BD] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
