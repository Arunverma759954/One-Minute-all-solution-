import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Carpenter Services Delhi NCR | OMCAS",
  description: "Reliable and expert carpenter services for your home and office in Delhi NCR. From furniture repair to custom woodwork, we handle it all with precision.",
};

const serviceData = {
  title: "Carpenter",
  subtitle: "Expert Woodwork & Furniture Solutions",
  description: "Whether it's a minor repair or a major furniture installation, our skilled carpenters bring precision and craftsmanship to every job. We specialize in everything from fixing squeaky doors and loose cabinets to full-scale custom woodwork projects. Our goal is to ensure your wood fixtures are beautiful, functional, and durable.",
  images: [
    "/assets/c1.jpg",
    "/assets/c2.webp",
    "/assets/c3.webp",
    "/assets/c4.avif",
  ],
  features: [
    "Furniture Repair & Polishing",
    "Door & Window Fixing",
    "Custom Cabinetry",
    "Modular Kitchen Work",
    "Lock & Handle Installation",
    "Woodwork Restoration",
  ],
  benefits: [
    "Expert Craftsmanship: Our carpenters are highly skilled with years of experience.",
    "Quality Materials: We use the best wood and hardware for long-lasting results.",
    "Bespoke Solutions: We create custom solutions that fit your space and style perfectly.",
  ],
};

export default function CarpenterPage() {
  return <DetailedServicePage {...serviceData} />;
}
