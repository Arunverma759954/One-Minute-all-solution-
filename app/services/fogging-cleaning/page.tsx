import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Fogging Cleaning Services Delhi NCR | OMCAS",
  description: "Complete airborne hygiene with OMCAS professional fogging services. Eliminate viruses, bacteria, and hidden germs in large spaces.",
};

const serviceData = {
  title: "Fogging Cleaning",
  subtitle: "Total Airborne & Surface Hygiene",
  description: "Traditional cleaning can't reach everywhere. Our Fogging Cleaning service uses advanced ultra-low volume (ULV) fogging machines to disperse a fine mist of disinfectant that penetrates hard-to-reach areas and stays in the air to eliminate airborne pathogens. Ideal for offices, clinics, and large residential spaces.",
  images: [
    "/assets/fo1.webp",
    "/assets/fo2.webp",
    "/assets/fo3.jpg",
    "/assets/fo4.jpg",
  ],
  features: [
    "ULV Fogging Technology",
    "Airborne Germ Elimination",
    "Hidden Surface Disinfection",
    "Non-Toxic Mist",
    "Rapid Decontamination",
    "Post-Treatment Certification",
  ],
  benefits: [
    "Complete Coverage: Reaches areas that manual cleaning simply cannot.",
    "Fast and Effective: Quickly treats large areas with minimal disruption.",
    "Healthier Air: Reduces the presence of airborne viruses and bacteria.",
  ],
};

export default function FoggingCleaningPage() {
  return <DetailedServicePage {...serviceData} />;
}
