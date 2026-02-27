"use client";
import BlogSection from "@/components/home/BlogSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaTrophy, FaCalendarAlt } from "react-icons/fa";

export default function AboutPage() {
  const stats = [
    { label: "Happy Clients", value: 5000, icon: <FaUsers /> },
    { label: "Successful Cleanups", value: 12000, icon: <FaCheckCircle /> },
    { label: "Trained Professionals", value: 50, icon: <FaTrophy /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] += Math.ceil(stat.value / 60);
          } else {
            newCounts[idx] = stat.value;
            clearInterval(intervals[idx]);
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/assets/about.jpg"
          alt="About One Mins Cleaning Solutions"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E5F7C]/60 backdrop-blur-[2px]"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-20 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-2xl uppercase tracking-tighter">
            About <span className="text-[#2EC3BD]">Us</span>
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">
            "OMCAS Most Trusted Deep Cleaning Professionals"
          </p>
        </motion.div>
      </section>

      {/* ====================== MISSION SECTION ====================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50"
          >
            <Image
              src="/assets/cl.jpg"
              alt="Professional Cleaning in Progress"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-[#1E5F7C] p-6 rounded-2xl shadow-xl">
              <p className="text-[#2EC3BD] font-bold text-sm tracking-widest uppercase mb-1">Since 2018</p>
              <h3 className="text-white text-lg font-bold">Leading the Standard in Hygiene Excellence</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#1E5F7C] font-black tracking-[0.3em] uppercase text-sm flex items-center gap-2">
              <span className="w-10 h-1 bg-[#2EC3BD] rounded-full" />
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-extrabold mt-4 leading-[1.1]">
              Providing <span className="text-[#1E5F7C]">1 Minute</span> Solutions for a Spotless Space
            </h2>
            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              One Mins Cleaning Solutions (OMCAS) was founded with a singular mission: to provide the highest standard of professional cleaning and sanitization services in Delhi NCR. We understand that a clean environment is fundamental to health, productivity, and happiness.
            </p>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our team consists of certified cleaning specialists who utilize advanced high-pressure steam technology and eco-friendly agents to eliminate deep-seated dirt, allergens, and germs. From residential homes to large-scale corporate offices, we bring the same level of precision and care to every assignment.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Eco-Friendly Agents", "Certified Professionals", "99.9% Sanitization", "Advanced Equipment"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <FaCheckCircle className="text-[#2EC3BD] text-xl" />
                  <span className="text-gray-800 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== STATS COUNTER ===================== */}
      <section className="relative py-24 bg-[#1E5F7C] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2EC3BD]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                key={idx}
                className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center group hover:bg-white hover:text-[#1E5F7C] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl md:text-5xl text-[#2EC3BD] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black text-white group-hover:text-[#1E5F7C]">
                  {counts[idx]}+
                </h3>
                <p className="mt-3 text-white/80 group-hover:text-[#1E5F7C]/80 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CORE VALUES ===================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 text-center mb-16">
          <h4 className="text-[#1E5F7C] font-black uppercase tracking-widest text-sm">Our Principles</h4>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 shadow-sm">Integrity • Innovation • Excellence</h2>
          <div className="w-20 h-1.5 bg-[#2EC3BD] mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-extrabold text-[#1E5F7C] mb-6 underline decoration-[#2EC3BD] decoration-4 underline-offset-8">The One Mins Guarantee</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              When you choose OMCAS, you are choosing a partner dedicated to your health and comfort. We don&apos;t just clean surfaces; we sanitize spaces. Our protocols are inspired by hospital-grade hygiene standards, ensuring that every home and office we touch becomes a safer, more breathable environment.
            </p>
            <ul className="space-y-4">
              {[
                "100% Satisfaction or it's free",
                "Background verified professional staff",
                "Advanced 5-stage cleaning process",
                "Eco-friendly non-toxic supplies"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-bold text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#2EC3BD]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#2EC3BD]" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 rounded-[3rem] overflow-hidden shadow-2xl skew-y-1"
          >
            <Image
              src="/assets/a2.jpg"
              alt="Professional Cleaning Equipment"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <BlogSection />

    </div>
  );
}
