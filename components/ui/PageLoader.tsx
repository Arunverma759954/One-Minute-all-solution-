"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_LOADING_MS = 2200;
const FADE_OUT_MS = 450;

export default function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hide = () => {
      const elapsed = performance.now();
      const remaining = Math.max(0, MIN_LOADING_MS - elapsed);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setMounted(false), FADE_OUT_MS);
      }, remaining);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      hide();
      return;
    }

    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1E5F7C] text-white transition-opacity duration-[450ms] ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Logo */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="loader-logo-ring" />
        <div className="relative z-10 flex h-20 w-48 items-center justify-center overflow-hidden rounded-lg">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={220}
            height={72}
            className="h-auto w-[200px] object-contain"
            priority
          />
        </div>
      </div>

      {/* Text */}
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-white/90">
        One Minute Cleaning All Solution
      </p>

      {/* Progress bar */}
      <div className="h-1 w-48 overflow-hidden rounded-full bg-white/20">
        <div className="loader-progress-bar h-full rounded-full bg-[#2EC3BD]" />
      </div>

      {/* Spinner dots */}
      <div className="mt-8 flex gap-2">
        <span className="loader-dot h-2 w-2 rounded-full bg-[#2EC3BD]" />
        <span className="loader-dot loader-dot-2 h-2 w-2 rounded-full bg-[#2EC3BD]" />
        <span className="loader-dot loader-dot-3 h-2 w-2 rounded-full bg-[#2EC3BD]" />
      </div>
    </div>
  );
}
