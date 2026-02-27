"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RoomsGridSection() {
  const services = [
    {
      img: "/assets/cl.jpg",
      title: "Full Home Deep Cleaning",
      subtitle: "Comprehensive 5-Step Process",
      price: "Starting ₹2999",
      rating: "Excellent (4.9)",
    },
    {
      img: "/assets/pexels-matilda-wormwood-4099471.jpg",
      title: "Kitchen Sanitization",
      subtitle: "Degreasing & Steam Treatment",
      price: "Starting ₹1499",
      rating: "Top Rated (4.8)",
    },
    {
      img: "/assets/cl.jpg",
      title: "Sofa & Carpet Spa",
      subtitle: "Deep Shampoo & Extraction",
      price: "Starting ₹999",
      rating: "Very Good (4.7)",
    },
    {
      img: "/assets/pexels-matilda-wormwood-4099471.jpg",
      title: "Bathroom Deep Clean",
      subtitle: "Acid-Free Scaling & Shine",
      price: "Starting ₹799",
      rating: "Excellent (4.9)",
    },
    {
      img: "/assets/cl.jpg",
      title: "Office Maintenance",
      subtitle: "Workstation Sanitization",
      price: "Starting ₹4999",
      rating: "Professional (4.8)",
    },
    {
      img: "/assets/pexels-matilda-wormwood-4099471.jpg",
      title: "Water Tank Cleaning",
      subtitle: "Ultra-Violet Treatment",
      price: "Starting ₹1199",
      rating: "Certified (4.6)",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:text-center mb-12"
        >
          <p className="text-[#1E5F7C] font-semibold tracking-widest uppercase">
            Our Service Packages
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Most Popular Cleaning Solutions
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((room, index) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* IMAGE */}
              <div className="w-full h-56 relative overflow-hidden">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-[#1E5F7C] px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Learn More
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#1E5F7C] transition-colors">
                  {room.title}
                </h3>
                <p className="text-gray-500 text-sm">{room.subtitle}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-[#1E5F7C] font-bold text-lg">
                    {room.price}
                  </p>
                  <p className="text-gray-600 flex items-center gap-1 text-sm bg-gray-50 px-2 py-1 rounded-md">
                    <FaStar className="text-yellow-500" />
                    {room.rating}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
