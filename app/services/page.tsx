import ServiceSection from "./ServiceSection";

export const metadata = {
  title:
    "Professional Cleaning Services Guwahati — Residential & Commercial | OMCAS",
  description:
    "Explore our range of expert cleaning packages in Guwahati: Residential Deep Cleaning, Sofa & Carpet Sanitization, Corporate Office Maintenance, and Kitchen Cleaning.",
  keywords:
    "cleaning services Guwahati, deep cleaning Assam, house cleaning Guwahati, sofa cleaning Guwahati, kitchen sanitization, office cleaning services Guwahati, OMCAS services",

  alternates: {
    canonical: "https://www.atithihome.com/services",
  },

  // ⭐ Short OG image support
  openGraph: {
    images: "/assets/cl.jpg",
  },

  // ⭐ Twitter large card
  twitter: {
    card: "summary_large_image",
    images: "/assets/cl.jpg",
  },
};

export default function Page() {
  return <ServiceSection />;
}
