// app/layout.tsx

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BookYourStayCTA from "@/components/home/BookYourStayCTA";
import PageLoader from "@/components/ui/PageLoader";
import BookNowPopupWrapper from "@/components/layouts/BookNowPopupWrapper";

export const metadata = {
  title: "1 Minute Cleaning Solutions Delhi NCR — Professional Deep Cleaning & Sanitization",
  description:
    "1 Minute Cleaning Solutions (OMCAS) offers professional deep cleaning, sofa sanitization, and office maintenance in Delhi NCR. Expert cleaning since 2018.",
  keywords:
    "1 Minute Cleaning Solutions Delhi NCR, OMCAS Delhi NCR, deep cleaning Delhi NCR, sofa cleaning Delhi NCR, office cleaning Delhi NCR, sanitization services Delhi NCR",

  metadataBase: new URL("https://one-minute-all-solution.vercel.app"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "1 Minute Cleaning Solutions Delhi NCR — Deep Cleaning Experts",
    description:
      "Professional cleaning, sanitization & maintenance services in Delhi NCR.",
    url: "https://one-minute-all-solution.vercel.app/",
    siteName: "1 Minute Cleaning Solutions",
    images: [
      {
        url: "https://one-minute-all-solution.vercel.app/assets/about.jpg",
        width: 1200,
        height: 630,
        alt: "1 Minute Cleaning Solutions Delhi NCR",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "1 Minute Cleaning Solutions Delhi NCR — Deep Cleaning Experts",
    description: "Professional cleaning, sanitization & maintenance services in Delhi NCR.",
    images: ["https://one-minute-all-solution.vercel.app/assets/about.jpg"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow some zoom for accessibility while keeping it responsive
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BookNowPopupWrapper>
          <PageLoader />
          {/* HEADER FIXED */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="pt-[60px]">{children}</main>

          {/* BOOK YOUR STAY - ABOVE FOOTER */}
          <BookYourStayCTA />

          {/* FOOTER */}
          <Footer />
        </BookNowPopupWrapper>
      </body>
    </html>
  );
}
