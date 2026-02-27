// app/layout.tsx

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BookYourStayCTA from "@/components/home/BookYourStayCTA";
import PageLoader from "@/components/ui/PageLoader";
import BookNowPopupWrapper from "@/components/layouts/BookNowPopupWrapper";

export const metadata = {
  title: "1 Minute Cleaning Solutions Guwahati — Professional Deep Cleaning & Sanitization",
  description:
    "1 Minute Cleaning Solutions (OMCAS) offers professional deep cleaning, sofa sanitization, and office maintenance in Guwahati. Expert cleaning since 2018.",
  keywords:
    "1 Minute Cleaning Solutions Guwahati, OMCAS Guwahati, deep cleaning Guwahati, sofa cleaning Guwahati, office cleaning Guwahati, sanitization services Guwahati",

  metadataBase: new URL("https://atithihome.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "1 Minute Cleaning Solutions Guwahati — Deep Cleaning Experts",
    description:
      "Professional cleaning, sanitization & maintenance services in Guwahati.",
    url: "https://atithihome.com/",
    siteName: "1 Minute Cleaning Solutions",
    images: [
      {
        url: "/assets/images/home-img1.jpg", // replace with your banner
      },
    ],
  },

  icons: {
    icon: "/favicon.png", // <-- yaha aap favicon file dal diya
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
          <main className="pt-16">{children}</main>

          {/* BOOK YOUR STAY - ABOVE FOOTER */}
          <BookYourStayCTA />

          {/* FOOTER */}
          <Footer />
        </BookNowPopupWrapper>
      </body>
    </html>
  );
}
