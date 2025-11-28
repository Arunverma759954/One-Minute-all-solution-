"use client";
import BlogSection from "@/components/home/BlogSection";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  // Counter targets
  const stats = [
    { label: "Happy Customers", value: 5000 },
    { label: "Luxury Rooms", value: 150 },
    { label: "Guest Support", value: 24 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] += Math.ceil(stat.value / 100);
          } else {
            newCounts[idx] = stat.value;
            clearInterval(intervals[idx]);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  return (
    <div className="w-full">

      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="About Banner"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute z-20 md:text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="text-white mt-3 text-lg md:text-xl">
            Discover who we are & what we offer
          </p>
        </div>
      </section>

      {/* ====================== INTRO SECTION ====================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/a3.jpg"
              alt="Luxury Hotel"
              fill
              className="object-cover"
            />
          </div>
          {/* RIGHT CONTENT */}
          <div>
            <h4 className="text-[#1E3A8A] font-semibold tracking-wider uppercase">
              Comfort • Care • Convenience
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mt-2 leading-tight">
              Welcome to <span className="text-[#FACC15]">Atithi</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Atithi is committed to offering a peaceful, clean, and comfortable stay for
              every guest. Our rooms are designed to provide a relaxing experience,
              supported by modern facilities, hygienic surroundings, and warm hospitality
              that makes you feel truly at home.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you are visiting for a short stay, family gathering, event,
              function, or business purpose, Atithi ensures a calm and pleasant
              environment. From well-maintained rooms to essential guest services, we aim
              to make your stay smooth and memorable.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our focus is simple — clean rooms, comfortable space, friendly service, and
              a welcoming atmosphere that every guest appreciates. Atithi stands for
              comfort, trust, and a stay experience that feels personal and satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== STATS COUNTER ===================== */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/assets/a3.jpg')"}}>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Heading */}
        <div className="relative max-w-7xl mx-auto px-6 md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Atithi</h2>
          <p className="text-gray-200 mt-2 text-lg md:text-xl">Trusted by thousands for luxury & comfort</p>
        </div>

        {/* Counters */}
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/90 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
                {counts[idx]}{stat.label === "Guest Support" ? "/7" : "+"}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== WHY CHOOSE ATITHI ===================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h4 className="text-[#1E3A8A] font-semibold tracking-wider uppercase">Why Choose Atithi</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mt-2 leading-tight">
              Excellence in Service & Hospitality
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Atithi offers a perfect blend of comfort, modern amenities, and personalized service. We focus on creating memorable experiences with attention to detail, hygienic rooms, and a welcoming atmosphere.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
              <li>Spacious, well-maintained rooms</li>
              <li>24/7 customer support & concierge</li>
              <li>Clean, safe, and peaceful environment</li>
              <li>Premium facilities & amenities</li>
              <li>Trusted by thousands of happy guests</li>
            </ul>
          </div>
          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/a2.jpg"
              alt="Why Choose Atithi"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== BLOGS / LATEST POSTS ===================== */}

      <BlogSection />

    </div>
  );
}
