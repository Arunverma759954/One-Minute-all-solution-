"use client";

import Image from "next/image";

export default function LuxuryIntroSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-[#8B5E34] tracking-widest font-semibold">
            MANAGER
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E] leading-tight">
            Comfortable & Affordable Stay Near VIP Road
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Atithi Home is a well-maintained Hotel near VIP Road Guwahati, making it easily accessible from major city landmarks, transportation hubs, and commercial areas. Whether you are visiting for medical reasons, business work, or a family trip, our property ensures a stress-free stay.
          </p>
          <p className="text-gray-600 leading-relaxed">As a reputed Affordable Hotel in Guwahati, we focus on providing quality rooms, essential amenities, and 24/7 assistance to meet the needs of every guest.</p>

          <p className="italic text-gray-700 border-l-4 border-[#8B5E34] pl-4">
            “ Atithi Devo Bhava – At Atithi Homestay, every guest is welcomed with warmth, 
            respect and a luxurious experience you will cherish forever. ”
          </p>

          {/* MANAGER INFO */}
          <div className="flex items-center gap-4 pt-4">
            <Image
              src="/assets/images/home-img2.jpg" 
              width={60}
              height={60}
              alt="Manager"
              className="rounded-full"
            />

            <div>
              <h4 className="text-xl font-semibold text-[#1E1E1E]">
                Rajeev Sharma
              </h4>
              <p className="text-gray-500">— General Manager, Atithi Homestay</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[460px]">
            <Image
              src="/assets/banner/b3.jpg"
              alt="Luxury Room"
              fill
              className="object-cover"
            />
          </div>

          {/* CIRCLE OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 border border-[#D4B68B]/50 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-[#C89C62] rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-3xl">★</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
