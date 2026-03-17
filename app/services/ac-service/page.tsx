import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional AC Service & Repair Delhi NCR | OMCAS",
  description: "Get expert AC servicing, repair, and installation in Delhi NCR. Professional technicians for split, window, and central AC systems. Fast and reliable service.",
};

const serviceData = {
  title: "AC Service & Repair",
  subtitle: "Expert Cooling Solutions for Your Comfort",
  description: "Keep your home or office cool and comfortable with our professional AC services. From routine maintenance and deep cleaning to complex repairs and new installations, our certified technicians handle all brands and types of AC systems. We ensure maximum cooling efficiency and lower electricity bills.",
  images: [
    "/assets/ac1.jpg",
    "/assets/ac2.jpg",
    "/assets/ac3.webp",
    "/assets/ac4.png",
  ],
  features: [
    "Expert Filter Cleaning",
    "Gas Refilling Service",
    "Coil Condenser Cleaning",
    "Jet Pump Deep Wash",
    "Installation & Uninstallation",
    "PCB Repair & Replacement",
  ],
  benefits: [
    "Efficient Cooling: Optimized airflow and cooling performance for those hot summer days.",
    "Lower Bills: Clean AC units consume less power, saving you money on electricity.",
    "Healthier Air: Removes dust, allergens, and bacteria, providing fresh and clean air indoors.",
  ],
};

export default function ACServicePage() {
  return <DetailedServicePage {...serviceData} />;
}
