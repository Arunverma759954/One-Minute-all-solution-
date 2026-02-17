"use client";

import Image from "next/image";
import { FaClock, FaHospital, FaHome, FaMapMarkerAlt } from "react-icons/fa";

const guestSearches = [
  "Best budget hotel near Pratiksha Hospital Guwahati",
  "Affordable hotel near VIP Road Barbari",
  "Cheap hotel in Guwahati near VIP Road",
  "Comfortable stay near Pratiksha Hospital",
  "Emergency stay near Pratiksha Hospital Guwahati",
  "24/7 hotel near Pratiksha Hospital",
  "Hotel open 24 hours in Guwahati",
];

const nearMeSearches = [
  "Hotel near me",
  "Budget hotel near me",
  "Hotel open now in Guwahati",
  "Stay near me VIP Road",
  "Accommodation near Pratiksha Hospital",
];

const brandSearches = [
  "Atithi Home Guwahati",
  "Atithi Hotel VIP Road",
  "Atithi Home Barbari",
  "Atithi Home near Pratiksha Hospital",
  "Atithi Home contact number",
  "Atithi Home reviews",
];

export default function AtithiHomeContent() {
  return (
    <>
      {/* ========== 24/7 CHECK-IN & EMERGENCY STAY ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-[#1E3A8A] font-semibold px-4 py-2 rounded-full mb-4">
              <FaClock className="text-[#FACC15]" />
              Always Here for You
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              24/7 Check-In & Emergency Stay Support
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We understand that hospital visits and travel emergencies can happen at any time. That&apos;s why we operate as a 24 Hours Hotel in Guwahati, offering flexible check-in and round-the-clock support.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              If you urgently need accommodation close to medical facilities, our location makes us one of the most preferred options for those searching for a Guest House near Pratiksha Hospital or a comfortable Stay near VIP Road Guwahati.
            </p>
          </div>
          <div className="order-1 md:order-2 relative w-full h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/banner/b4.jpg"
              alt="24/7 Hotel - Atithi Home Guwahati"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white px-4 py-3 rounded-xl backdrop-blur-sm">
              <p className="font-semibold flex items-center gap-2">
                <FaClock className="text-[#FACC15]" /> Open 24 hours — Check-in anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BUDGET ROOMS + GUESTS OFTEN FIND US ========== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/img1.jpeg"
              alt="AC Rooms in Guwahati - Atithi Home"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Budget-Friendly & Well-Equipped Rooms
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              As a trusted Budget Hotel near Pratiksha Hospital, we provide clean and well-maintained AC Rooms in Guwahati designed for comfort and relaxation.
            </p>
            <p className="mt-3 text-gray-700 font-medium">Guests often find us while searching for:</p>
            <ul className="mt-3 space-y-2">
              {guestSearches.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#FACC15] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-2 space-y-2">
              {guestSearches.slice(4, 7).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#FACC15] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== IDEAL FOR MEDICAL & EMERGENCY STAYS ========== */}
      <section className="py-14 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <FaHospital className="text-[#FACC15]" />
            <span className="font-semibold">Ideal for Medical & Emergency Stays</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            Emergency stay near Pratiksha Hospital Guwahati • 24/7 hotel • Hotel open 24 hours in Guwahati
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Emergency stay near Pratiksha Hospital",
              "24/7 hotel near Pratiksha Hospital",
              "Hotel open 24 hours in Guwahati",
              "Medical stay Guwahati",
              "Family stay near hospital",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/15 hover:bg-white/25 rounded-full text-sm font-medium transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MORE THAN JUST A HOTEL - HOMESTAY ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/a2.jpg"
              alt="Homestay in Guwahati - Atithi Home"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="flex items-center gap-2 text-white">
                <FaHome className="text-2xl text-[#FACC15]" />
                <span className="text-lg font-semibold">Homestay in Guwahati</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              More Than Just a Hotel
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              While many guests find us when searching for a Hotel near Pratiksha Hospital Guwahati, we are also known as a welcoming Homestay in Guwahati offering personalized hospitality.
            </p>
            <p className="mt-3 text-gray-700 font-medium flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#1E3A8A]" />
              Easy to Find – Convenient for &quot;Near Me&quot; Searches
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {nearMeSearches.map((term, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                >
                  {term}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-600 text-sm">Guests also search for us using:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {brandSearches.map((term, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-amber-50 text-[#1E3A8A] rounded-lg text-sm font-medium"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
