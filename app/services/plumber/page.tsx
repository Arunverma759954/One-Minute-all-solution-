import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Plumber Services Delhi NCR | OMCAS",
  description: "Prompt and reliable plumbing services for all your home and office needs. From leaks to new installations, OMCAS plumbers are here to help.",
};

const serviceData = {
  title: "Plumber",
  subtitle: "Expert Plumbing Solutions for Every Need",
  description: "Small leaks can lead to big problems. Our professional plumbing services cover everything from emergency leak repairs and tap installations to complex drainage cleaning and full bathroom renovations. We use high-quality materials and skilled techniques to ensure your plumbing systems work flawlessly.",
  images: [
    "/assets/pl1.avif",
    "/assets/pl2.jpg",
    "/assets/pl3.jpg",
    "/assets/pl4.avif",
  ],
  features: [
    "Leak Detection & Repair",
    "New Fixture Installation",
    "Blocked Drain Cleaning",
    "Pipe & Tank Maintenance",
    "Bathroom Renovations",
    "Emergency Services",
  ],
  benefits: [
    "Prompt Response: We understand that plumbing issues need quick attention.",
    "Quality Materials: We use only durable and reliable parts for all repairs.",
    "Clean & Meticulous: We leave your space clean after completing our work.",
  ],
};

export default function PlumberPage() {
  return <DetailedServicePage {...serviceData} />;
}
