"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // FIXED
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus("Message sent successfully!");
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };
  return (
    <>
     
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
                Contact us 
                </h1>
                <p className="text-white mt-3 text-lg md:text-xl">
                  Explore what we offer to make your stay memorable
                </p>
              </div>
            </section>
      

      {/* ===================== CONTACT SPLIT SECTION ===================== */}
      <div className="bg-white">
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side: Info */}
          <div className="bg-[#FCFAF6] p-10 rounded-2xl flex flex-col justify-between space-y-8">
            <div>
              <p className="text-[#B59260] uppercase text-sm font-semibold mb-2">
                Contact Us
              </p>
              <h2 className="text-4xl font-bold text-[#0C3436] mb-4">
                Contact With Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Rapidiously myocardinate cross-platform intellectual capital after the model. Appropriately create interactive infrastructures after maintenance. Holistically facilitate stand-alone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <span className="text-[#B59260] text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Us Now</p>
                  <p className="text-[#0C3436] font-semibold text-lg">+916000891365</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <span className="text-[#B59260] text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Visit Us</p>
                  <p className="text-[#0C3436] font-semibold text-lg">
                    Alokpur, Near Pratiksha Hospital, VIP Road, Barbari, Guwahati - 781036
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Dark Form */}
<div className="bg-[#2C2C2C] p-10 rounded-2xl shadow-2xl">
  <h3 className="text-2xl font-semibold text-white mb-6 md:text-center">
    Get In Touch
  </h3>
  <form className="space-y-5" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Your Name"
       required
       value={formData.name}
       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none focus:border-[#B59260]"
    />
    <input
      type="email"
      placeholder="Enter E-mail"
        required
       value={formData.email}
       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none focus:border-[#B59260]"
    />
    <select 
        required
       value={formData.subject}
       onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
       className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none focus:border-[#B59260]">
      <option>Subject One</option>
      <option>Subject Two</option>
      <option>Subject Three</option>
    </select>
    <textarea
      rows={5}
        required
       value={formData.message}
       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      placeholder="Your Message"
      className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none focus:border-[#B59260]"
    ></textarea>
    <button
        disabled={loading}
      type="submit"
      className="w-full bg-[#B59260] hover:bg-[#9E7B50] py-3 rounded-lg font-semibold text-lg text-white transition"
    >
       {loading ? "Submitting..." : "Submit"}
    </button>
  </form>
</div>

        </section>

        {/* ===================== MAP SECTION ===================== */}
        <div className="w-full h-[400px] mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.175097033742!2d91.8159562!3d26.1584264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a592da94e80eb%3A0x8aca64c9f90a4424!2sAtithi%20guest%20house!5e0!3m2!1sen!2sin!4v1765096524482!5m2!1sen!2sin%22"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> 
        </div>
      </div>
    </>
  );
}
