"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      review:
        "Our stay was absolutely luxurious. The staff hospitality and room comfort were beyond expectations.",
      rating: 5,
    },
    {
      name: "Sophia Turner",
      review:
        "The ambience, food and room service were top-notch. Highly recommended for peaceful stays.",
      rating: 4,
    },
    {
      name: "Daniel Johnson",
      review:
        "Amazing experience! Premium rooms and excellent pool area. Will definitely visit again.",
      rating: 5,
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url('/assets/images/img4.jpg')`,
      }}
    >
      {/* LIGHT BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="md:text-center mb-12">
          <p className="text-lg tracking-widest text-[#C9A86A] font-semibold">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black drop-shadow-xl">
            What Our Guests Say
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/90 border border-gray-200 p-8 rounded-xl shadow-xl">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-4">
                  {item.review}
                </p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
