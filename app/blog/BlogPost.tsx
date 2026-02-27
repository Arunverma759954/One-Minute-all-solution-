"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaClock,
  FaShieldAlt,
  FaQuestionCircle,
  FaParking,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

const faqs = [
  { q: "Is OMCAS a safe choice for my home?", a: "Yes, we prioritize safety with background-verified staff and eco-friendly cleaning agents.", icon: FaShieldAlt },
  { q: "What makes you the best cleaning service in Delhi NCR?", a: "We offer a combination of hospital-grade sanitization, professional service, and transparent pricing.", icon: FaRupeeSign },
  { q: "How far do you serve?", a: "OMCAS serves all of Delhi NCR including Saket, South Delhi, and surrounding areas.", icon: FaMapMarkerAlt },
  { q: "How do I book a cleaning session?", a: "You can book directly through our website or contact our 24/7 support line.", icon: FaPhone },
  { q: "Do you bring your own equipment?", a: "Yes, we provide all industrial-grade equipment and specialized cleaning agents.", icon: FaParking },
];

const highlights = [
  { icon: FaMapMarkerAlt, label: "Walking distance", value: "2–5 min" },
  { icon: FaClock, label: "Open", value: "24/7" },
  { icon: FaRupeeSign, label: "Budget", value: "Friendly" },
  { icon: FaShieldAlt, label: "Safe", value: "Families" },
];

export default function BlogPost() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [enquiry, setEnquiry] = useState({ name: "", email: "", mobile: "", message: "" });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryStatus, setEnquiryStatus] = useState<"idle" | "success" | "error">("idle");

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquiryLoading(true);
    setEnquiryStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiryStatus("success");
        setEnquiry({ name: "", email: "", mobile: "", message: "" });
      } else setEnquiryStatus("error");
    } catch {
      setEnquiryStatus("error");
    }
    setEnquiryLoading(false);
  };

  return (
    <article className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero banner for blog detail */}
      <header className="relative bg-[#1E5F7C] text-white pt-20 pb-14 md:pb-18">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/home-img1.jpg"
            alt="Atithi Home"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5F7C] via-[#1E5F7C] to-[#1E5F7C]/80" />

        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-sm text-white/80 mb-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            /{" "}
            <span className="font-semibold">Detail</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-[#2EC3BD] text-[#1E5F7C] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
            <FaMapMarkerAlt /> OMCAS Delhi NCR
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
            Best Cleaning Service in Delhi NCR for Your Home & Office
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 mb-5 max-w-2xl">
            Experience One Mins Cleaning Solutions (OMCAS) — 24/7 service, eco-friendly deep cleaning, and expert sanitization across Delhi NCR.
          </p>
        </div>
      </header>

      {/* Highlight bar – white card */}
      <section className="relative z-10 -mt-20 mx-4 md:mx-8 lg:mx-16">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1E5F7C] text-[#2EC3BD] flex items-center justify-center text-2xl mb-3">
                <h.icon />
              </div>
              <p className="font-bold text-lg text-gray-900">{h.value}</p>
              <p className="text-sm text-gray-500">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-column: main content + right sidebar enquiry */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 pb-8 md:pb-10">
          {/* LEFT: Main content */}
          <div>
            {/* Intro – white background, drop cap */}
            <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-gray-50/80 rounded-2xl px-6 md:px-8">
              <div>
                <span className="text-[#1E5F7C] font-bold tracking-[0.2em] uppercase text-sm">Introduction</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Why a Clean Environment Matters</h2>
                <div className="mt-10">
                  <p className="relative pl-20 md:pl-24 -indent-16 md:-indent-20 text-gray-700 leading-relaxed text-lg md:text-xl">
                    <span className="absolute left-0 text-8xl md:text-9xl font-black text-[#1E5F7C]/20 leading-none select-none">A</span>
                    clean environment is not a luxury — it's a necessity! Whether you live in a home or run a business in Delhi NCR, maintaining hygiene is fundamental to health, productivity, and peace of mind.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    Finding the right professional cleaning partner in Delhi NCR isn't difficult anymore. Whether you are a homeowner seeking deep cleaning or a business looking for regular office maintenance, OMCAS is here for you.
                  </p>
                  <p className="mt-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    OMCAS — One Mins Cleaning Solutions — provides the best professional cleaning across Delhi NCR. We understand that every space has unique needs, and we tailor our approach accordingly.
                  </p>
                  <div className="mt-12 p-8 md:p-10 rounded-2xl bg-white border-l-4 border-[#1E5F7C] shadow-md">
                    <p className="text-xl md:text-2xl font-semibold text-[#1E5F7C] leading-relaxed">
                      Ready for a spotless space? Contact OMCAS today for a free consultation and quote!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Proximity – image with LIGHT overlay, text on white card over it */}
            <section className="relative py-10 md:py-14 px-6 overflow-hidden bg-gray-50/80 rounded-2xl">
              <div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* LEFT: Enhanced image card */}
                  <div className="relative h-80 lg:h-[420px]">
                    {/* soft gradient behind */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E5F7C]/10 via-white to-[#2EC3BD]/10" />

                    {/* main image card */}
                    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                      <Image
                        src="/assets/banner/b4.jpg"
                        alt="Hotel near Pratiksha Hospital"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />

                      {/* Top-left badge */}
                      <div className="absolute top-4 left-4 bg-white/90 text-[#1E5F7C] text-xs font-semibold px-3 py-1 rounded-full shadow">
                        Near Pratiksha Hospital
                      </div>

                      {/* Bottom-left info chip */}
                      <div className="absolute bottom-4 left-4 bg-white/95 text-gray-800 text-xs md:text-sm px-3 py-2 rounded-xl shadow flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E5F7C] text-white text-xs font-bold">
                          2–5
                        </span>
                        <span>Minutes walk / short drive</span>
                      </div>
                    </div>

                    {/* small secondary photo overlay for richer UI */}
                    <div className="hidden sm:block absolute -bottom-4 right-4 w-32 h-24 md:w-40 md:h-28 rounded-2xl overflow-hidden shadow-xl border border-white bg-white">
                      <Image
                        src="/assets/img1.jpeg"
                        alt="Comfortable rooms at Atithi Home"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[#1E5F7C] font-bold tracking-[0.2em] uppercase text-sm">Why choose us</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      Why Expert Cleaning Matters: Professional Services in Delhi NCR
                    </h2>
                    <div className="mt-8 space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>In a busy city like Delhi NCR, germs and dust accumulate fast. Regular cleaning can miss deep-seated dirt in upholstery, carpets, and kitchen surfaces.</p>
                      <p>That's where OMCAS comes in — the trusted partner for residents and businesses across Delhi NCR. We bring hospital-grade sanitization and professional equipment to every job.</p>
                      <p>We bridge the gap between everyday cleaning and true hygiene excellence. Every space we clean is left healthier, safer, and fresher.</p>
                    </div>
                    <div className="mt-8 inline-flex items-center gap-3 bg-[#1E5F7C] text-white font-bold px-8 py-4 rounded-2xl">
                      <FaCheckCircle className="text-xl text-[#2EC3BD]" />
                      Ready for a truly clean space? Book your OMCAS service today!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Affordable – bento: image + white text side */}
            <section className="py-10 md:py-14 px-6 bg-white rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative h-80 lg:h-auto lg:min-h-[520px]">
                  <Image src="/assets/img1.jpeg" alt="Rooms" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 rounded-xl shadow">
                    <p className="text-[#1E5F7C] font-bold">Budget-friendly • No hidden charges</p>
                  </div>
                </div>
                <div className="bg-white p-10 md:p-14 lg:p-16 flex flex-col justify-center border border-gray-100">
                  <div className="flex items-center gap-2 text-[#1E5F7C] mb-4">
                    <FaRupeeSign className="text-2xl" />
                    <span className="font-bold uppercase tracking-wider text-sm">Affordable Excellence</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Best Cleaning Service in Delhi NCR — OMCAS
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>Professional cleaning doesn't have to break the bank. OMCAS offers top-tier services across Delhi NCR at competitive prices, ensuring quality without compromise.</p>
                    <p>We focus on essentials: hospital-grade sanitization, eco-friendly agents, and expert staff. Transparent pricing, no hidden charges, and honest service you can rely on.</p>
                  </div>
                  <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                    <p className="text-gray-900 font-bold text-lg">Experience premium cleaning without the premium price. Get your free quote from OMCAS today!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 24/7 – white section with blue accent strip */}
            <section className="py-10 md:py-14 px-6 bg-gray-50/80 rounded-2xl">
              <div>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="shrink-0 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-36 h-36 rounded-full border-4 border-[#1E5F7C] bg-[#1E5F7C]/5 text-[#1E5F7C]">
                      <span className="text-5xl md:text-6xl font-black">24/7</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Unmatched Service: Your 24/7 Cleaning Partner in Delhi NCR
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                      Cleaning needs can arise at any time. At OMCAS, we offer flexible scheduling and 24/7 support to ensure your space is always pristine when you need it. From urgent clean-ups to routine maintenance, we provide a seamless experience. Our 24/7 commitment is our promise to you.
                    </p>
                    <div className="inline-flex items-center gap-3 bg-[#1E5F7C] text-white font-bold px-8 py-4 rounded-2xl">
                      <FaClock className="text-xl text-[#2EC3BD]" />
                      Need a clean space, anytime? Contact OMCAS for 24/7 service!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion – white, big quote */}
            <section className="py-12 md:py-16 px-6 bg-white">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[#1E5F7C] font-bold tracking-[0.2em] uppercase text-sm">Conclusion</span>
                <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  In the journey to a cleaner space, choosing the right partner makes all the difference. As Delhi NCR's most trusted cleaning experts, we bring experience, professionalism, and care to every service.
                </p>
                <blockquote className="mt-12 relative p-10 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-5xl text-[#1E5F7C]/30 font-serif">&quot;</span>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug px-4">
                    Choose hygiene. Choose professionalism. Choose OMCAS.
                  </p>
                </blockquote>
              </div>
            </section>

            {/* FAQs – accordion dropdown */}
            <section className="py-12 md:py-16 px-6 bg-gray-50/80">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                  <FaQuestionCircle className="text-3xl md:text-4xl text-[#1E5F7C]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const Icon = faq.icon;
                    const isOpen = openFaqIndex === i;

                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaqIndex(isOpen ? null : i)
                          }
                          className={`w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-left transition ${isOpen
                            ? "bg-[#1E5F7C] text-white"
                            : "bg-white text-gray-900 hover:bg-gray-50"
                            }`}
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <div
                              className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-lg md:text-xl ${isOpen
                                ? "bg-white/15 text-[#2EC3BD]"
                                : "bg-[#1E5F7C]/10 text-[#1E5F7C]"
                                }`}
                            >
                              <Icon />
                            </div>
                            <span className="font-semibold text-sm md:text-base">
                              {faq.q}
                            </span>
                          </div>
                          <span
                            className={`ml-3 text-lg md:text-xl transition-transform ${isOpen ? "rotate-180" : ""
                              }`}
                          >
                            ▾
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3 text-sm md:text-base text-gray-700 leading-relaxed bg-white">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

          </div>


          {/* RIGHT: Enquiry form sidebar – scrolls with page */}
          <aside>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Stay</h3>
              <p className="text-sm text-gray-500 mb-6">Send us your enquiry — we&apos;ll respond quickly.</p>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="blog-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="blog-name"
                    type="text"
                    name="name"
                    value={enquiry.name}
                    onChange={handleEnquiryChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="blog-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="blog-email"
                    type="email"
                    name="email"
                    value={enquiry.email}
                    onChange={handleEnquiryChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="blog-mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  <input
                    id="blog-mobile"
                    type="tel"
                    name="mobile"
                    value={enquiry.mobile}
                    onChange={handleEnquiryChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="blog-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="blog-message"
                    name="message"
                    value={enquiry.message}
                    onChange={handleEnquiryChange}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] outline-none resize-none"
                    placeholder="Check-in date, number of guests, or any question..."
                  />
                </div>

                {enquiryStatus === "success" && (
                  <p className="text-sm text-green-600 font-medium">Message sent! We&apos;ll get back soon.</p>
                )}
                {enquiryStatus === "error" && (
                  <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={enquiryLoading}
                  className="w-full bg-[#1E5F7C] text-white font-semibold py-3 rounded-xl hover:bg-[#164d65] transition disabled:opacity-70"
                >
                  {enquiryLoading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA – light section */}
      <section className="relative py-12 md:py-16 px-6 bg-gray-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/assets/images/home-img1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10 md:px-10 md:py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Ready to book?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Atithi Home — trusted budget hotel near Pratiksha Hospital. 24/7 service, clean rooms and a peaceful stay just steps away from the hospital.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#2EC3BD] text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-md hover:bg-[#25a8a2] transition hover:scale-105"
          >
            Book Now
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
