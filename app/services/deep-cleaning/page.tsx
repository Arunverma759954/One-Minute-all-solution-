import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Deep Cleaning Services Delhi NCR | OMCAS",
  description: "Experience the ultimate home transformation with OMCAS Deep Cleaning. Hospital-grade equipment and eco-friendly solutions for a spotless home.",
};

const serviceData = {
  title: "Deep Cleaning",
  subtitle: "Complete Home Transformation & Hygiene Excellence",
  description: "Our Deep Cleaning service is not just a regular cleanup; it's a comprehensive restoration of your living space. We focus on every nook and cranny, using industrial-grade equipment and specialized cleaning agents to eliminate deep-seated dust, grease, and allergens.",
  images: [
    "/assets/d1.jpg",
    "/assets/d2.jpg",
    "/assets/d3.jpg",
    "/assets/d4.jpg",
  ],
  features: [
    "Full Floor Scrubbing",
    "Kitchen Degreasing",
    "Window & Grill Cleaning",
    "Upholstery Vacuuming",
    "Eco-Friendly Chemicals",
    "Trained Professionals",
  ],
  benefits: [
    "Healthier Environment: Eliminates 99.9% of germs and bacteria from your living spaces.",
    "Stress-Free Living: Let our experts handle the heavy lifting while you relax.",
    "Property Longevity: Regular deep cleaning preserves the life of your furniture and fixtures.",
  ],
};

export default function DeepCleaningPage() {
  return <DetailedServicePage {...serviceData} />;
}
