"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTools, FaPhoneAlt } from "react-icons/fa";
import { useBookNowModal } from "@/components/ui/BookNowModalContext";

interface DetailedServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  features: string[];
  benefits: string[];
}

export default function DetailedServicePage({
  title,
  subtitle,
  description,
  images,
  features,
  benefits,
}: DetailedServicePageProps) {
  const { openModal } = useBookNowModal();

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E5F7C]/70 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mt-4 font-medium max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#1E5F7C] font-black uppercase tracking-[0.3em] text-sm flex items-center gap-2">
                <span className="w-10 h-1 bg-[#2EC3BD] rounded-full" />
                Service Overview
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
                Why Choose Our <br /> <span className="text-[#1E5F7C]">{title}</span>?
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <FaCheckCircle className="text-[#2EC3BD] shrink-0" />
                  <span className="font-bold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={openModal}
                className="bg-[#1E5F7C] text-white font-black px-8 py-3.5 rounded-full shadow-2xl hover:bg-[#2EC3BD] hover:text-[#1E5F7C] transition-all flex items-center gap-3 uppercase tracking-widest text-xs"
              >
                Book This Service Now
                <FaTools />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {images.slice(0, 4).map((img, idx) => (
              <div key={idx} className={`relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-xl ${idx % 2 === 1 ? "mt-8" : ""} ${idx % 2 === 0 && idx > 0 ? "-mt-8" : ""}`}>
                <Image
                  src={img}
                  alt={`${title} Preview ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
              Added <span className="text-[#1E5F7C]">Benefits</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#2EC3BD] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#2EC3BD]/10 text-[#1E5F7C] text-2xl flex items-center justify-center rounded-2xl mx-auto mb-6">
                  <FaCheckCircle />
                </div>
                <p className="text-gray-900 font-black text-lg mb-3">{benefit.split(":")[0]}</p>
                <p className="text-gray-600 font-medium text-sm">{benefit.split(":")[1] || benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-[#1E5F7C] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2EC3BD]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">Ready to Get Started?</h2>
          <p className="mt-4 text-lg md:text-xl text-white/80 font-bold max-w-2xl mx-auto">
            Experience the OMCAS difference today. Professional, reliable, and thorough cleaning for your peace of mind.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={openModal}
              className="bg-[#2EC3BD] text-[#1E5F7C] font-black px-10 py-4 rounded-full shadow-2xl hover:bg-white transition-all uppercase tracking-widest text-lg"
            >
              Book Appointment
            </button>
            <a
              href="tel:+919958146822"
              className="flex items-center gap-3 text-2xl font-black hover:text-[#2EC3BD] transition-colors"
            >
              <FaPhoneAlt /> +91 9958146822
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
