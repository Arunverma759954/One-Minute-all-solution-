"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiX, FiPhone, FiCheck } from "react-icons/fi";
import { useBookNowModal } from "./BookNowModalContext";

export default function BookNowPopup() {
  const { isOpen, closeModal } = useBookNowModal();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", handleEscape);
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => { closeModal(); setStatus("idle"); }, 1800);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-now-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - teal/blue with pattern feel, logo + headline (jaise dusri website) */}
        <div className="relative bg-[#1E5F7C] text-white px-6 py-5 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_40%,#2EC3BD_40%,#2EC3BD_60%,transparent_60%)] bg-[length:24px_24px]" />
          <button
            type="button"
            onClick={closeModal}
            title="Close"
            className="absolute right-3 top-3 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white z-10 transition shadow-lg border-2 border-white"
            aria-label="Close popup"
          >
            <FiX className="text-2xl" strokeWidth={2.5} />
          </button>
          <div className="relative flex items-center gap-4">
            <div className="shrink-0">
              <Image src="/assets/logooo.jpeg" alt="Logo" width={64} height={64} className="rounded-full object-cover w-14 h-14 border-2 border-[#2EC3BD]" />
            </div>
            <div>
              <h2 id="book-now-title" className="text-lg font-bold leading-tight">
                <span className="text-[#2EC3BD]">BOOK / ENQUIRY</span>
                <span className="block text-white">Now Open For Registration</span>
              </h2>
              <p className="text-sm text-white/90 mt-0.5">Fill the form below — we will get back to you soon.</p>
            </div>
          </div>
        </div>

        {/* Form + features side by side on larger screens */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                id="popup-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] transition"
              />
            </div>
            <div>
              <label htmlFor="popup-mobile" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                id="popup-mobile"
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 9958146822"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] transition"
              />
            </div>
            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="popup-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] transition"
              />
            </div>
            <div>
              <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                id="popup-message"
                name="message"
                required
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message or preferred date..."
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E5F7C]/30 focus:border-[#1E5F7C] transition resize-none"
              />
            </div>

            {status === "success" && (
              <p className="text-sm font-medium text-green-600">Message sent! We will get back soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">Something went wrong. Please try again.</p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+919958146822"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition"
              >
                <FiPhone className="text-lg" />
                Call US +91 9958146822
              </a>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#2EC3BD] text-gray-900 font-bold py-3 rounded-xl hover:bg-[#25a8a2] transition disabled:opacity-70 shadow-md"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </div>
          </form>

          {/* Yellow features box - jaise reference image me checkmarks wala */}
          <div className="mt-5 p-4 rounded-xl bg-[#E0F7F6] border border-[#1E5F7C]/30">
            <p className="text-sm font-bold text-gray-800 mb-2">Why choose us</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li className="flex items-center gap-2"><FiCheck className="text-[#1E5F7C] shrink-0" /> Quick & reliable service</li>
              <li className="flex items-center gap-2"><FiCheck className="text-[#1E5F7C] shrink-0" /> Affordable rates</li>
              <li className="flex items-center gap-2"><FiCheck className="text-[#1E5F7C] shrink-0" /> Quality cleaning solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
