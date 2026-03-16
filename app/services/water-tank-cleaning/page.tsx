import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Water Tank Cleaning Services Delhi NCR | OMCAS",
  description: "Ensure clean and safe water for your family with OMCAS water tank cleaning. Mechanized cleaning and UV disinfection for all types of tanks.",
};

const serviceData = {
  title: "Water Tank Cleaning",
  subtitle: "Pure Water for a Healthier Life",
  description: "Stagnant water in tanks can become a breeding ground for bacteria and algae. Our mechanized Water Tank Cleaning process involves thorough sludge removal, high-pressure washing, and UV disinfection to ensure that the water you use daily is pure, safe, and free from contaminants.",
  images: [
    "/assets/w1.jpg",
    "/assets/w2.jpg",
    "/assets/w3.jpg",
    "/assets/w4.webp",
  ],
  features: [
    "Sludge Removal",
    "High-Pressure Jet Wash",
    "Anti-Bacterial Spray",
    "UV Disinfection",
    "Wall & Floor Scrubbing",
    "Final Vacuuming",
  ],
  benefits: [
    "Safe Drinking Water: Reduces the risk of water-borne diseases.",
    "Improved Water Quality: Noticeable difference in the clarity and odor of water.",
    "System Hygiene: Prevents pipe blockages and damage to water fixtures.",
  ],
};

export default function WaterTankCleaningPage() {
  return <DetailedServicePage {...serviceData} />;
}
