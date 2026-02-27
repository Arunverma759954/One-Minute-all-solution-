"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "Residential Deep Cleaning",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", mobile: "", service: "Residential Deep Cleaning", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/assets/cl.jpg"
          alt="Contact One Mins Cleaning Solutions"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E5F7C]/70 backdrop-blur-[2px]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute z-20 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Get In <span className="text-[#2EC3BD]">Touch</span>
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl font-bold opacity-90 max-w-2xl mx-auto">
            "Your Path to a Pristine Environment Starts Here"
          </p>
        </motion.div>
      </section>

      {/* ====================== CONTACT CONTENT ====================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT: INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#1E5F7C] font-black tracking-[0.3em] uppercase text-sm flex items-center gap-2">
                <span className="w-10 h-1 bg-[#2EC3BD] rounded-full" />
                Contact Details
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                Ready to Experience <span className="text-[#1E5F7C]">1 Minute</span> Perfection?
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Whether you have a specific requirement or need a custom cleanup plan, our experts are ready to assist you. Reach out to us via any channel below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#2EC3BD]/10 text-[#1E5F7C] text-2xl flex items-center justify-center rounded-2xl mb-6">
                  <FaPhone />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">Call Us</h3>
                <a href="tel:+919958146822" className="text-gray-600 font-bold hover:text-[#1E5F7C] transition">
                  +91 9958146822
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#2EC3BD]/10 text-[#1E5F7C] text-2xl flex items-center justify-center rounded-2xl mb-6">
                  <FaEnvelope />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">Email Us</h3>
                <a href="mailto:oneminuteallsolution@gmail.com" className="text-gray-600 font-bold hover:text-[#1E5F7C] transition break-all">
                  oneminuteallsolution@gmail.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#2EC3BD]/10 text-[#1E5F7C] text-2xl flex items-center justify-center rounded-2xl mb-6">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">Location</h3>
                <p className="text-gray-600 font-bold">
                  VIP Road, Guwahati, Assam
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#2EC3BD]/10 text-[#1E5F7C] text-2xl flex items-center justify-center rounded-2xl mb-6">
                  <FaClock />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">Working Hours</h3>
                <p className="text-gray-600 font-bold">
                  Mon - Sun: 24/7 Service
                </p>
              </div>
            </div>

            <div className="bg-[#1E5F7C] p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2EC3BD]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl text-[#2EC3BD]">
                  <FaHeadset />
                </div>
                <div>
                  <h4 className="text-white font-black text-2xl italic">Support Hotlink</h4>
                  <p className="text-white/70 font-bold uppercase tracking-widest text-sm">Emergency Disinfection ? Call Now</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 border-t-8 border-[#1E5F7C]"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-2">Book Your Service</h3>
            <p className="text-gray-500 font-bold mb-10">Fill the form below and we&apos;ll get back to you within 60 minutes.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-black text-sm uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2EC3BD] transition-all font-bold"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-black text-sm uppercase tracking-widest mb-2">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2EC3BD] transition-all font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-black text-sm uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2EC3BD] transition-all font-bold"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-black text-sm uppercase tracking-widest mb-2">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2EC3BD] transition-all font-bold appearance-none cursor-pointer"
                >
                  <option>Residential Deep Cleaning</option>
                  <option>Sofa & Carpet Sanitization</option>
                  <option>Corporate Office Maintenance</option>
                  <option>Disinfection & Sanitization</option>
                  <option>Kitchen & Chimney Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-black text-sm uppercase tracking-widest mb-2">Additional Note</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2EC3BD] transition-all font-bold resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-[#1E5F7C] text-white font-black py-5 rounded-2xl shadow-xl hover:bg-[#2EC3BD] hover:text-[#1E5F7C] transition-all duration-300 uppercase tracking-[0.2em] text-sm disabled:opacity-70"
              >
                {loading ? "Processing..." : "Submit Inquiry"}
              </motion.button>

              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-green-600 font-black">Success! We will contact you soon.</motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-red-600 font-black">Error occurred. Please call us directly.</motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* ====================== MAP SECTION ====================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.175097033742!2d91.8159562!3d26.1584264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a592da94e80eb%3A0x8aca64c9f90a4424!2sAtithi%20guest%20house!5e0!3m2!1sen!2sin!4v1765096524482!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OMCAS Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
