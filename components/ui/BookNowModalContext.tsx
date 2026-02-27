"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type BookNowModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BookNowModalContext = createContext<BookNowModalContextType | null>(null);

export function BookNowModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookNowModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookNowModalContext.Provider>
  );
}

export function useBookNowModal() {
  const ctx = useContext(BookNowModalContext);
  if (!ctx) throw new Error("useBookNowModal must be used within BookNowModalProvider");
  return ctx;
}
