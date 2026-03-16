import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Pest Control Services Delhi NCR | OMCAS",
  description: "Effective and safe pest control solutions for your home and office. Protect your family from pests with OMCAS professional treatments.",
};

const serviceData = {
  title: "Pest Control",
  subtitle: "Protect Your Home from Unwanted Guests",
  description: "Pests aren't just a nuisance; they're a health hazard. OMCAS provides specialized pest control treatments that are both incredibly effective against pests and safe for your family and pets. We use advanced techniques to identify infestation sources and eliminate them at the root.",
  images: [
    "/assets/p1.avif",
    "/assets/p2.jpg",
    "/assets/p3.jpg",
    "/assets/p4.webp",
  ],
  features: [
    "General Pest Treatment",
    "Cockroach Management",
    "Ant & Fly Control",
    "Rodent Prevention",
    "Odorless Chemicals",
    "Warranty Included",
  ],
  benefits: [
    "Disease Prevention: Protect your family from pest-borne illnesses and allergens.",
    "Safe for Family: We use eco-friendly and odorless treatments for your peace of mind.",
    "Long-Term Protection: Our strategic approach ensures pests don't come back easily.",
  ],
};

export default function PestControlPage() {
  return <DetailedServicePage {...serviceData} />;
}
