import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Termite Control Services Delhi NCR | OMCAS",
  description: "Protect your property from silent destroyers with OMCAS professional termite treatments. Advanced soil and wood treatments for total protection.",
};

const serviceData = {
  title: "Termite Control",
  subtitle: "Advanced Protection Against Silent Property Destroyers",
  description: "Termites can silently compromise the structural integrity of your property. Our comprehensive termite control solution uses advanced detection technology and potent yet safe chemical barriers to eliminate existing colonies and prevent future infestations. We specialize in both pre-construction and post-construction treatments tailored to your specific needs.",
  images: [
    "/assets/ter1.jpg",
    "/assets/ter2.jpg",
    "/assets/ter3.jpg",
    "/assets/ter4.webp",
  ],
  features: [
    "Pre-Construction Anti-Termite Treatment",
    "Post-Construction Control measures",
    "Drill-Fill-Seal Technology",
    "Comprehensive Soil Treatment",
    "Woodwork & Furniture Protection",
    "Long-term Warranty & Guarantee",
  ],
  benefits: [
    "Absolute Property Safety: Protect your home's foundation and expensive woodwork.",
    "Certified Technicians: Expert application using eco-friendly and safe chemicals.",
    "Preventive Barrier: Long-lasting protection that keeps termites away for years.",
  ],
};

export default function TermiteControlPage() {
  return <DetailedServicePage {...serviceData} />;
}
