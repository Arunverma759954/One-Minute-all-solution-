import DetailedServicePage from "@/components/services/DetailedServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Bathroom Deep Cleaning Delhi NCR | OMCAS",
  description: "Get a germ-free and sparkling bathroom with OMCAS intensive deep cleaning. Removal of hard water stains, limescale, and deep-seated grime.",
};

const serviceData = {
  title: "Bathroom Cleaning",
  subtitle: "Hygienic, Sparkling & Germ-Free Bathrooms",
  description: "Bathrooms are the most critical areas for hygiene. Our intensive Bathroom Deep Cleaning service goes beyond surface scrubbing. We use specialized acid-free cleaners to remove tough limescale, hard water stains, and soap scum from tiles, fixtures, and floors, leaving your bathroom truly sanitized and fresh.",
  images: [
    "/assets/b1.jpg",
    "/assets/b2.jpg",
    "/assets/b3.jpg",
    "/assets/b5.jpg",
  ],
  features: [
    "Hard Water Stain Removal",
    "Tile & Grout Scrubbing",
    "Fixtures Polishing",
    "Disinfection treatment",
    "Drainage Cleaning",
    "Mirror & Glass Cleaning",
  ],
  benefits: [
    "Superior Hygiene: Eliminates mildew, mold, and bacteria for a safer environment.",
    "Restored Shine: Your tiles and chrome fixtures will look like new again.",
    "Odor Elimination: We remove the source of unpleasant smells, not just mask them.",
  ],
};

export default function BathroomCleaningPage() {
  return <DetailedServicePage {...serviceData} />;
}
