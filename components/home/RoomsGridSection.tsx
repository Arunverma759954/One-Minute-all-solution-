"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function RoomsGridSection() {
  const rooms = [
    {
      img: "/assets/img1.jpeg",
      title: "8424 Padberg Flats",
      subtitle: "Small Metal Room",
      price: "1500/Night - Free Cancellation",
      rating: "good (12)",
    },
    {
      img: "/assets/img2.jpeg",
      title: "43299 Murazik Extension",
      subtitle: "Small Soft Ball Room",
      price: "1500/Night - Free Cancellation",
      rating: "Nice (11)",
    },
    {
      img: "/assets/img3.jpeg",
      title: "73311 Freida Point",
      subtitle: "Incredible Wooden Room",
      price: "1500/Night - Free Cancellation",
      rating: "Excellent (32)",
    },
    {
      img: "/assets/img9.jpeg",
      title: "Deluxe King Suite",
      subtitle: "Royal Spacious Room",
      price: "1500/Night - Breakfast Included",
      rating: "Very Good (28)",
    },
    {
      img: "/assets/img10.jpeg",
      title: "Executive Premium",
      subtitle: "Luxury Modern Room",
      price: "1500/Night - Free Cancellation",
      rating: "Good (19)",
    },
    {
      img: "/assets/img8.jpeg",
      title: "Superior Twin Room",
      subtitle: "Cozy & Comfortable",
      price: "1500/Night - Free Cancellation",
      rating: "Good (21)",
    },
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="md:text-center mb-12">
          <p className="text-[#8B5E34] font-semibold tracking-widest">
            OUR ROOMS
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Choose Your Luxury Stay
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border"
            >
              {/* IMAGE */}
              <div className="w-full h-56 relative">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* DETAILS */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{room.title}</h3>
                <p className="text-gray-500 text-sm">{room.subtitle}</p>
                <p className="text-[#8B5E34] font-semibold mt-2">
                  {room.price}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  {room.rating}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
