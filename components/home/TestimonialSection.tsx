"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      review:
        "One Mins Cleaning transformed my apartment! The deep cleaning was thorough and professional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sophia Turner",
      review:
        "Excellent service! They cleaned my sofa and it looks brand new. The team was very polite and punctual.",
      rating: 5,
    },
    {
      name: "Daniel Johnson",
      review:
        "The best office cleaning service in Delhi NCR. They are meticulous and use high-quality products. 5 stars!",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/img4.jpg')`,
      }}
    >
      {/* LIGHT BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:text-center mb-12"
        >
          <p className="text-lg tracking-widest text-[#2EC3BD] font-bold uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-white drop-shadow-xl">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/95 border border-white/20 p-8 rounded-2xl shadow-2xl h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-lg italic mb-6 flex-grow leading-relaxed">
                    "{item.review}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-1 bg-[#2EC3BD] rounded-full" />
                    <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                      {item.name}
                    </h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
