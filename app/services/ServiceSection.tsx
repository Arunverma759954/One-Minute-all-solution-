"use client";

import Image from "next/image";

export default function ServiceSection() {
  const services = [
    {
      title: "Luxury Rooms",
      description: "Our rooms are designed to provide ultimate comfort with modern interiors, cozy ambiance, and premium facilities to ensure a memorable stay.",
      img: "/assets/gallery/s1.jpg",
    },
    {
      title: "Fine Dining",
      description: "Enjoy a gourmet experience with a wide variety of cuisines prepared by top chefs, in a relaxing and elegant setting.",
      img: "/assets/gallery/s2.jpg",
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate your mind and body with our spa treatments, wellness programs, and personalized care.",
      img: "/assets/gallery/s3.jpg",
    },
    {
      title: "Event & Conference",
      description: "Host memorable events, weddings, and corporate meetings with our fully equipped venues and professional support.",
      img: "/assets/gallery/s4.jpg",
    },
    {
      title: "Adventure & Activities",
      description: "From sightseeing to recreational activities, we offer a range of experiences to make your stay exciting and fun.",
      img: "/assets/gallery/s5.jpg",
    },
  ];

  return (
    <div className="w-full">

      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="Services Banner"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute z-20 md:text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-white mt-3 text-lg md:text-xl">
            Explore what we offer to make your stay memorable
          </p>
        </div>
      </section>

      {/* ====================== INTRO ====================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Exceptional Services Tailored For You
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Atithi, we provide a wide range of services designed to cater to every need of our guests. From comfort to entertainment, hospitality to wellness, each service is crafted for an unforgettable experience.
          </p>
        </div>
      </section>

      {/* ====================== SERVICES ====================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {services.map((service, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Alternate layout */}
              {idx % 2 === 0 ? (
                <>
                  {/* LEFT IMAGE */}
                  <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* RIGHT CONTENT */}
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* LEFT CONTENT */}
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  {/* RIGHT IMAGE */}
                  <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
