import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Electrician Services Delhi NCR | OMCAS",
  description: "Reliable and expert electrician services for your home and office in Delhi NCR. From wiring to appliance repair, we handle it all with safety.",
};

const serviceData = {
  title: "Electrician",
  subtitle: "Expert Electrical Solutions with a Safety-First Approach",
  description: "Electrical issues don't just interrupt your day; they can be dangerous. Our certified electricians provide a wide range of services, from minor repairs and installations to complete home rewiring. We prioritize safety and efficiency, ensuring that all work is done to the highest standards and in compliance with safety regulations.",
  images: [
    "/assets/e1.jpg",
    "/assets/e2.jpg",
    "/assets/e3.avif",
    "/assets/e4.webp",
  ],
  features: [
    "Certified Electricians",
    "Wiring & Re-wiring",
    "Appliance Installation",
    "Short Circuit Repair",
    "Light & Fan Fitting",
    "Safety Inspections",
  ],
  benefits: [
    "Safety Assured: We follow strict safety protocols to prevent accidents and short circuits.",
    "Reliable Repairs: Our fixes are built to last, saving you from recurring issues.",
    "Expert Advice: We provide energy-saving tips and advice on maintaining your electrical systems.",
  ],
};

export default function ElectricianPage() {
  return <DetailedServicePage {...serviceData} />;
}
