"use client";

import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/a2.jpg"
              alt="Why Choose Atithi"
              fill
              className="object-cover"
            />
          </div>
          {/* RIGHT CONTENT */}
          <div>
            <h4 className="text-[#1E3A8A] font-semibold tracking-wider uppercase">Why Choose Atithi Home?</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mt-2 leading-tight">
              Prime Location, Comfort & 24/7 Support
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Atithi offers a perfect blend of comfort, modern amenities, and personalized service. We focus on creating memorable experiences with attention to detail, hygienic rooms, and a welcoming atmosphere.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
              <li>Prime location near hospital & VIP Road</li>
              <li>Clean and comfortable rooms</li>
              <li>Affordable pricing</li>
              <li>Safe environment for families</li>
              <li>24/7 check-in support</li>
              <li>Friendly and responsive staff</li>
            </ul>
          </div>
        </div>
      </section>
  );
}
