"use client";

import { useEffect } from "react";
import { BookNowModalProvider } from "@/components/ui/BookNowModalContext";
import BookNowPopup from "@/components/ui/BookNowPopup";
import BookNowAutoOpen from "@/components/ui/BookNowAutoOpen";
import { motion } from "framer-motion";

export default function BookNowPopupWrapper({ children }: { children: React.ReactNode }) {

  // Removed unintended redirect logic that was forcing users to the home page on refresh/navigation.

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
