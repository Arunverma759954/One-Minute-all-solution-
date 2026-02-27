"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { BookNowModalProvider } from "@/components/ui/BookNowModalContext";
import BookNowPopup from "@/components/ui/BookNowPopup";
import BookNowAutoOpen from "@/components/ui/BookNowAutoOpen";
import { motion } from "framer-motion";

export default function BookNowPopupWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Detect page reload
    const navigation = window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

    if (navigation && navigation.type === "reload") {
      if (pathname !== "/") {
        router.replace("/");
      }
    }
  }, [router, pathname]);

  return (
    <BookNowModalProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <BookNowAutoOpen />
      <BookNowPopup />
    </BookNowModalProvider>
  );
}
