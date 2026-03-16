import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Fitachain Cleaning Services Delhi NCR | OMCAS",
  description: "Expert cleaning and maintenance for Fitachain systems. Specialized care for industrial and commercial environments.",
};

const serviceData = {
  title: "Fitachain Cleaning",
  subtitle: "Specialized Maintenance for Industrial Excellence",
  description: "Maintaining Fitachain systems requires specialized knowledge and precision. OMCAS offers professional cleaning solutions tailored for complex chain and pulley systems in industrial or high-end residential settings. We ensure smooth operation and longevity through meticulous cleaning and lubrication.",
  images: [
    "/assets/f1.jpg",
    "/assets/f2.jpg",
    "/assets/f3.jpg",
    "/assets/f4.avif",
  ],
  features: [
    "Precision Degreasing",
    "Chain & Link Inspection",
    "Dust & Debris Removal",
    "Professional Lubrication",
    "Operational Testing",
    "Safety Compliance",
  ],
  benefits: [
    "Operational Efficiency: Clean systems run smoother and use less energy.",
    "Extended Equipment Life: Regular cleaning prevents premature wear and tear.",
    "Minimized Downtime: Prevent unexpected failures with proactive maintenance.",
  ],
};

export default function FitachainCleaningPage() {
  return <DetailedServicePage {...serviceData} />;
}
