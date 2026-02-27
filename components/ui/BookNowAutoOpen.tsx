"use client";

import { useEffect } from "react";
import { useBookNowModal } from "./BookNowModalContext";

const DELAY_MS = 5000;
const AUTO_CLOSE_MS = 5000;

export default function BookNowAutoOpen() {
  const { openModal, closeModal } = useBookNowModal();

  useEffect(() => {
    const openTimer = setTimeout(() => {
      openModal();
      const closeTimer = setTimeout(() => {
        closeModal();
      }, AUTO_CLOSE_MS);
      return () => clearTimeout(closeTimer);
    }, DELAY_MS);
    return () => clearTimeout(openTimer);
  }, [openModal, closeModal]);

  return null;
}
