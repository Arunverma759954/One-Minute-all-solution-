import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Marble Polish Services Delhi NCR | OMCAS",
  description: "Restore the original shine of your marble floors with OMCAS expert polishing. Diamond-grade buffing and honing for a mirror-like finish.",
};

const serviceData = {
  title: "Marble Polish",
  subtitle: "Restore the Mirror-Like Shine of Your Floors",
  description: "Marble floors add elegance to any space, but they can lose their luster over time. Our Marble Polish service uses diamond-grade pads and premium polishing compounds to remove scratches, stains, and dullness, restoring your floor's original brilliance and elegance.",
  images: [
    "/assets/m1.webp",
    "/assets/m2.jpg",
    "/assets/m3.jpg",
    "/assets/m4.webp",
  ],
  features: [
    "Diamond Buffer Grinding",
    "Honing & Leveling",
    "Scratch Removal",
    "Crystal Gloss Finishing",
    "Sealant Application",
    "Dust-Free Process",
  ],
  benefits: [
    "Premium Aesthetics: Give your home a luxurious feel with crystal clear floors.",
    "Surface Protection: Our sealants protect against future stains and spills.",
    "Value Appreciation: Well-maintained marble floors increase your property's value.",
  ],
};

export default function MarblePolishPage() {
  return <DetailedServicePage {...serviceData} />;
}
