import type { Metadata } from "next";
import BlogPost from "../BlogPost";

export const metadata: Metadata = {
  title: "Best Cleaning Service in Delhi NCR | One Mins Cleaning Solutions (OMCAS)",
  description:
    "OMCAS offers the best professional deep cleaning in Delhi NCR. Enjoy 24/7 service, eco-friendly solutions, and expert sanitization. Book now!",
  keywords:
    "best cleaning service Delhi NCR, OMCAS Delhi NCR, professional deep cleaning Delhi, home cleaning Saket, office cleaning Delhi NCR, sanitization service Delhi",
  alternates: {
    canonical:
      "https://www.atithihome.com/blog/best-hotel-near-pratiksha-hospital-guwahati",
  },
};

export default function BlogDetailPage() {
  return <BlogPost />;
}

