"use client";

import { 
  FaBed,
  FaUtensils,
  FaConciergeBell
} from "react-icons/fa";

export default function FacilitiesSection3() {
  const facilities = [
    { title: "Comfortable Rooms", icon: FaBed },
    { title: "In-Room Cooking Facilities", icon: FaUtensils },
    { title: "24×7 Service & Support", icon: FaConciergeBell },
  ];

  return (
    <section className="relative py-20">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner/b3.jpg"
          alt="Facilities Background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* HEADING */}
        <div className="md:text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#D6B68C] tracking-widest font-semibold">
            OUR HOMESTAY FACILITIES
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 drop-shadow-lg">
            Prime Location in Barbari, Guwahati
          </h2>

          <p className="mt-4 text-gray-200">
            Situated in a peaceful neighborhood, Atithi Home is a well-located Hotel in Barbari Guwahati, providing easy access to VIP Road and surrounding areas. Guests looking for a safe and quiet Family Stay in Guwahati will appreciate our calm environment and supportive hospitality.
          </p>
        </div>

        {/* FACILITY BOXES */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">

          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 
                shadow-lg hover:shadow-2xl border border-white/20 
                transition-all text-center"
              >
                {/* ICON */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center 
                rounded-full bg-white/30 group-hover:bg-[#8B5E34] 
                transition-all duration-300">
                  <Icon className="text-4xl text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mt-4">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-16">
          <h4 className="text-xl font-semibold text-[#FACC15] tracking-widest">
            HOMESTAY
          </h4>
          <p className="text-gray-200 mt-1">A Comfortable Stay with Home-Like Facilities</p>
        </div>

      </div>
    </section>
  );
}
