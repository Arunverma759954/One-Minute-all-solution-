"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/assets/images/home-img1.jpg"
            alt="Atithi Home - Hotel near Pratiksha Hospital Guwahati"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h4 className="text-[#1E3A8A] font-semibold tracking-wider uppercase">
            Your Trusted Stay in Guwahati
          </h4>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-extrabold mt-2 leading-tight">
            Affordable Hotel near{" "}
            <span className="text-[#FACC15]">Pratiksha Hospital Guwahati</span>
            <br className="hidden sm:block" />
            <span className="text-[#1E3A8A]">— Open 24/7</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Welcome to Atithi Home, your trusted Hotel near Pratiksha Hospital Guwahati, offering comfortable, clean, and affordable accommodation in the heart of the city. Conveniently located at Alokpur, Near Pratiksha Hospital, VIP Road, Barbari, Guwahati – 781036, we provide a peaceful and secure stay experience for families, business travelers, and hospital visitors.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            If you are searching for a reliable Budget Hotel in Guwahati that combines comfort, convenience, and affordability, Atithi Home is the perfect choice.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-[#1E3A8A]">24/7</h3>
              <p className="text-gray-600 mt-1 text-sm">Check-in & Support</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-[#1E3A8A]">Budget</h3>
              <p className="text-gray-600 mt-1 text-sm">Friendly Stay</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
