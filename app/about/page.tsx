import AboutSection from "./AboutSection";

export const metadata = {
  title:
    "1 Minute Cleaning Solutions Delhi NCR — About Our Professional Deep Cleaning",
  description:
    "Discover One Mins Cleaning Solutions (OMCAS). OMCAS most trusted experts for deep cleaning, sofa sanitization, and corporate office maintenance since 2018.",
  keywords:
    "about One Mins Cleaning Solutions, OMCAS Delhi NCR, professional cleaning Delhi NCR, deep cleaning experts Delhi, reliable house cleaning Delhi NCR, cleaning company Delhi NCR",

  alternates: {
    canonical: "https://atithihome.com/about",
  },

  // ⭐ Short OG image support
  openGraph: {
    images: "/assets/about1.jpg",
  },

  // ⭐ Short Twitter card
  twitter: {
    card: "summary_large_image",
    images: "/assets/about1.jpg",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
