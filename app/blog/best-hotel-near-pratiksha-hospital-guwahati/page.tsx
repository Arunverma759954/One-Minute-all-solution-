import type { Metadata } from "next";
import BlogPost from "../BlogPost";

export const metadata: Metadata = {
  title: "Best Budget Hotel near Pratiksha Hospital Guwahati | Atithi Home",
  description:
    "Stay at Atithi Home, the best budget hotel near Pratiksha Hospital Guwahati. Enjoy 24/7 service, affordable rooms, and a short walk to the hospital. Book now!",
  keywords:
    "best budget hotel near Pratiksha Hospital Guwahati, hotel near Pratiksha Hospital, Atithi Home Guwahati, affordable stay near hospital, 24/7 hotel Guwahati, medical stay Guwahati",
  alternates: {
    canonical:
      "https://www.atithihome.com/blog/best-hotel-near-pratiksha-hospital-guwahati",
  },
};

export default function BlogDetailPage() {
  return <BlogPost />;
}

