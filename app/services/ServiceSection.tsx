"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHome, FaCouch, FaBuilding, FaSprayCan, FaTools } from "react-icons/fa";

export default function ServiceSection() {
  const services = [
    {
      title: "Residential Deep Cleaning",
      description: "Complete home transformation including floor scrubbing, kitchen degreasing, deep bathroom cleaning, and window cleaning using industrial-grade equipment.",
      img: "/assets/d1.jpg",
      icon: <FaHome />,
    },
    {
      title: "Sofa & Carpet Cleaning",
      description: "Advanced vacuuming and steam treatments to eliminate dust mites, stains, and bacteria from your upholstery without damaging the fabric.",
      img: "/assets/p2.jpg",
      icon: <FaCouch />,
    },
    {
      title: "Corporate Office Maintenance",
      description: "Professional cleaning solutions for workspaces including desk cleaning, carpet shampooing, and common area maintenance to ensure a healthy work culture.",
      img: "/assets/img4.jpeg",
      icon: <FaBuilding />,
    },
    {
      title: "Move-in / Move-out Cleaning",
      description: "Comprehensive cleaning for new or vacated properties, ensuring every corner is spotless and ready for occupancy. Professional and reliable.",
      img: "/assets/12.jpg",
      icon: <FaSprayCan />,
    },
    {
      title: "Kitchen & Chimney Cleaning",
      description: "Deep removal of heavy oil deposits and carbon from chimneys, stovetops, and cabinets using eco-friendly degreasing agents.",
      img: "/assets/15.webp",
      icon: <FaTools />,
    },
    {
      title: "AC Service & Repair",
      description: "Professional AC maintenance and repair including jet wash, gas refilling, and installation by certified technicians for all brands.",
      img: "/assets/ac1.jpg",
      icon: <FaTools />,
    },
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="Our Specialized Cleaning Services"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5F7C]/80 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-20 left-6 md:left-20 max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg leading-tight uppercase">
            Specialized <br /><span className="text-[#2EC3BD]">Services</span>
          </h1>
          <p className="text-white mt-4 text-base md:text-xl font-bold opacity-90 max-w-xl border-l-4 border-[#2EC3BD] pl-6 py-2">
            Tailored hygiene solutions for modern homes and professional offices across Delhi NCR.
          </p>
        </motion.div>
      </section>

      {/* ====================== INTRO ====================== */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#1E5F7C] font-black uppercase tracking-[0.4em] text-xs">Our Expertise</span>
            <h2 className="text-2xl md:text-4xl font-black text-black mt-4">
              Premium Hygiene <span className="text-[#1E5F7C]">Guaranteed</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#2EC3BD] mx-auto mt-6 rounded-full" />
            <p className="mt-8 text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg underline decoration-gray-200 underline-offset-4 decoration-dashed">
              At One Mins Cleaning Solutions, we don't believe in surface cleaning. We provide deep, thorough, and professional cleaning that makes a visible difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================== SERVICES GRID ====================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 space-y-20">

          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Alternate layout */}
              {idx % 2 === 0 ? (
                <>
                  {/* LEFT IMAGE */}
                  <div className="group relative w-full h-[380px] md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:rounded-2xl">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                      <p className="text-white text-lg font-bold">OMCAS Certified Standard Clean</p>
                    </div>
                  </div>
                  {/* RIGHT CONTENT */}
                  <div className="lg:pl-10">
                    <div className="text-[#1E5F7C] text-5xl mb-6 bg-[#2EC3BD]/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed border-l-4 border-[#2EC3BD] pl-8">
                      {service.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-[#1E5F7C] text-white font-black px-8 py-3.5 rounded-full shadow-xl hover:bg-[#2EC3BD] hover:text-black transition-all duration-300 uppercase tracking-widest text-xs"
                    >
                      Inquire Now
                    </motion.button>
                  </div>
                </>
              ) : (
                <>
                  {/* LEFT CONTENT */}
                  <div className="lg:pr-10">
                    <div className="text-[#1E5F7C] text-5xl mb-6 bg-[#2EC3BD]/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed border-r-4 border-[#2EC3BD] pr-8 text-right">
                      {service.description}
                    </p>
                    <div className="flex justify-end">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-[#1E5F7C] text-white font-black px-8 py-3.5 rounded-full shadow-xl hover:bg-[#2EC3BD] hover:text-black transition-all duration-300 uppercase tracking-widest text-xs"
                      >
                        Inquire Now
                      </motion.button>
                    </div>
                  </div>
                  {/* RIGHT IMAGE */}
                  <div className="group relative w-full h-[380px] md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:rounded-2xl">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                      <p className="text-white text-lg font-bold">OMCAS Certified Standard Clean</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}
